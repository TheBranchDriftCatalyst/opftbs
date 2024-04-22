import datetime
from pydantic import ValidationError
import pytest

from ..bills import BillsEndpoint


@pytest.fixture(scope='module')
def vcr_config():
    return {
        # Replace the Authorization request header with "DUMMY" in cassettes
        "filter_headers": [('x-api-key', 'DUMMY')],
    }


congress_api = BillsEndpoint(default_params={"limit": "5"})


@pytest.mark.vcr()
def test_get_bills_with_recent_updates():
    """
    The function `test_get_bills_with_recent_updates` tests the functionality of retrieving recent bill
    summaries from a Congress API.  It will throw an error if the pydantic DTO can't load the response
    """
    try:
        bill_summaries = congress_api.get_recent_bills()
    except Exception as e:
        pytest.fail(str(e), pytrace=True)

    assert len(bill_summaries) == 5
    bill_summary = bill_summaries[0]
    assert bill_summary.congress is not None


@pytest.mark.vcr()
def test_get_bill_details():
    response = congress_api.get_bills(congress=117, bill_type='hr', bill_number=3076)
    assert response is not None

