from datetime import datetime, timedelta
from typing import Optional, Callable, Any, Literal
from prometheus_client import Enum
from pydantic import BaseModel


class CircuitBreakerConfig(BaseModel):
    failure_threshold: int
    recovery_timeout: timedelta
    failure_threshold_time: timedelta
    # error_class: Exception = Exception


class CircuitBreakerError(Exception):
    pass

class OpenCircuitError(CircuitBreakerError):
    pass


class CircuitBreaker:
    State = Literal["CLOSED", "OPEN", "HALF-OPEN"]

    def __init__(self, cb_name, config: CircuitBreakerConfig):
        self.config = config
        self.cb_name = cb_name
        self.failure_count: int = 0
        self.last_failure_time: Optional[datetime] = None
        self.state: CircuitBreaker.State = "CLOSED"

    def decorator(self, func: Callable) -> Callable:
        def circuit_breaker_wrapper(*args: Any, **kwargs: Any) -> Any:
            with self:
                return func(*args, **kwargs)

        return circuit_breaker_wrapper

    def __enter__(self) -> "CircuitBreaker":
        if self.state == "OPEN":
            if (
                self.last_failure_time
                and datetime.now() - self.last_failure_time
                > self.config.recovery_timeout
            ):
                self._set_state("HALF-OPEN")
            else:
                raise OpenCircuitError("Circuit is open")
        return self

    def __exit__(
        self,
        exc_type: Optional[type],
        exc_val: Optional[Exception],
        exc_tb: Optional[Any],
    ) -> None:
        if exc_type is not None:
            self.failure_count += 1
            self.last_failure_time = datetime.now()
            # if self.metrics:
            #     self.metrics.gauge(
            #         "circuit_breaker_failure_count",
            #         self.failure_count,
            #         labels={"service": self.cb_name},
            #     )
            if self.failure_count >= self.config.failure_threshold:
                self._set_state("OPEN")
        else:
            self.failure_count = 0
            if self.state == "HALF-OPEN":
                self._set_state("CLOSED")

    def _set_state(self, new_state: State) -> None:
        self.state = new_state
        # if self.metrics:
        #     self.state_enum.state(self.state)
