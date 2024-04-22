import time
import pytest
from datetime import timedelta
from unittest.mock import MagicMock

from common.circuit_breaker import CircuitBreaker, CircuitBreakerConfig, OpenCircuitError
import test


@pytest.fixture
def circuit_breaker_config():
    return CircuitBreakerConfig(
        failure_threshold=1,
        recovery_timeout=timedelta(seconds=1),
        failure_threshold_time=timedelta(seconds=5),
        # error_class=Exception,
    )


@pytest.fixture
def test_operation():
    return lambda e=None: (_ for _ in ()).throw(e) if e else "panda"



def circuit_breaker_behavior(cb, circuit_breaker_config, test_operation):
    with cb:
        assert cb.state == "CLOSED"
        op_result = test_operation()
        assert op_result == "panda"

    op_result = None  # Reset op_result
    # Test that failures within the threshold will trip the circuit
    # sourcery skip: no-loop-in-tests
    for _ in range(circuit_breaker_config.failure_threshold):
        with pytest.raises(Exception, match="Test failure"):
            with cb:
                test_operation(Exception("Test failure"))

    #  test that the operation does not occur when the circuit is open and NOT raising an error but still in open time period
    with pytest.raises(OpenCircuitError, match="Circuit is open"):
        with cb:
            op_result = test_operation()
            assert cb.state == "OPEN"
            assert op_result is None

    # Wait for the recovery timeout
    time.sleep(circuit_breaker_config.recovery_timeout.total_seconds() + 1)

    # Test recovery from open state
    with cb:
        op_result = test_operation()
    assert op_result == "panda"
    assert cb.state == "CLOSED"
    assert cb.failure_count == 0


def test_circuit_breaker_behavior_context_manager(
    circuit_breaker_config, test_operation
):
    cb = CircuitBreaker('test_circuit_breaker_behavior', circuit_breaker_config)
    circuit_breaker_behavior(cb, circuit_breaker_config, test_operation)
    

def test_circuit_breaker_behavior_decorator(
    circuit_breaker_config, test_operation
):
    cb = CircuitBreaker('test_circuit_breaker1', circuit_breaker_config)
    decorated_operation = cb.decorator(test_operation)
    circuit_breaker_behavior(cb, circuit_breaker_config, decorated_operation)
