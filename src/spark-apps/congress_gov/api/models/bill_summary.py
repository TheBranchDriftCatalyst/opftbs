from sqlalchemy import Column, Integer, String, MetaData, ForeignKey, UniqueConstraint
from sqlalchemy.orm import relationship
# from structlog import get_logger
from sqlalchemy.ext.declarative import declarative_base

CongressGovBase = declarative_base()


class BillSummary(CongressGovBase):
    __tablename__ = 'bill_summary'

    id = Column(Integer, primary_key=True, autoincrement=True, unique=True)
    congress = Column(String, primary_key=True)
    number = Column(String, primary_key=True)
    origin_chamber_code = Column(String, primary_key=True)
    origin_chamber = Column(String)
    title = Column(String)
    type = Column(String)
    update_date = Column(String)
    update_date_including_text = Column(String)
    url = Column(String)

    latest_actions = relationship('LatestActionSummary', backref='bill_summary')
    committee_reports = relationship('CommitteeReportSummary', backref='bill_summary')
    cbo_cost_estimates = relationship('CBOCostEstimateSummary', backref='bill_summary')
    sponsors = relationship('SponsorSummary', backref='bill_summary')
    laws = relationship('LawSummary', backref='bill_summary')
    policy_areas = relationship('PolicyAreaSummary', backref='bill_summary')
    cosponsors = relationship('CosponsorSummary', backref='bill_summary')

    __table_args__ = (UniqueConstraint('congress', "number", 'origin_chamber_code'),)


class LatestActionSummary(CongressGovBase):
    __tablename__ = 'latest_actions'

    id = Column(Integer, primary_key=True, autoincrement=True, unique=True)
    action_date = Column(String)
    text = Column(String)
    bill_summary_id = Column(Integer, ForeignKey('bill_summary.id'))
    # Define the unique compound key/index
    __table_args__ = (UniqueConstraint('action_date', 'text', 'bill_summary_id', name='uq_latest_actions'),)


class CommitteeReportSummary(CongressGovBase):
    __tablename__ = 'committee_reports'

    id = Column(Integer, primary_key=True, autoincrement=True, unique=True)
    citation = Column(String)
    url = Column(String)
    bill_summary_id = Column(Integer, ForeignKey('bill_summary.id'))
    __table_args__ = (UniqueConstraint('citation', 'url', 'bill_summary_id', name='uq_committee_reports'),)


class CBOCostEstimateSummary(CongressGovBase):
    __tablename__ = 'cbo_cost_estimates'

    id = Column(Integer, primary_key=True, autoincrement=True, unique=True)
    description = Column(String)
    pub_date = Column(String)
    title = Column(String)
    url = Column(String)
    bill_summary_id = Column(Integer, ForeignKey('bill_summary.id'))
    __table_args__ = (UniqueConstraint('pub_date', 'title', 'bill_summary_id', name='uq_cbo_cost_estimates'),)


class SponsorSummary(CongressGovBase):
    __tablename__ = 'sponsors'

    id = Column(Integer, primary_key=True, autoincrement=True, unique=True)
    bioguide_id = Column(String)
    district = Column(String)
    first_name = Column(String)
    full_name = Column(String)
    is_by_request = Column(String)
    last_name = Column(String)
    middle_name = Column(String)
    party = Column(String)
    state = Column(String)
    url = Column(String)
    bill_summary_id = Column(Integer, ForeignKey('bill_summary.id'))
    __table_args__ = (UniqueConstraint('bioguide_id', 'district', 'first_name', 'full_name', 'is_by_request', 'last_name', 'middle_name', 'party', 'state', 'url', 'bill_summary_id', name='uq_sponsors'),)


class LawSummary(CongressGovBase):
    __tablename__ = 'laws'

    id = Column(Integer, primary_key=True, autoincrement=True, unique=True)
    number = Column(String)
    type = Column(String)
    bill_summary_id = Column(Integer, ForeignKey('bill_summary.id'))
    __table_args__ = (UniqueConstraint('number', 'type', name='uq_laws'),)


class PolicyAreaSummary(CongressGovBase):
    __tablename__ = 'policy_areas'

    id = Column(Integer, primary_key=True, autoincrement=True, unique=True)
    name = Column(String)
    bill_summary_id = Column(Integer, ForeignKey('bill_summary.id'))
    __table_args__ = (UniqueConstraint('name', 'bill_summary_id', name='uq_policy_areas'),)


class CosponsorSummary(CongressGovBase):
    __tablename__ = 'cosponsors'

    id = Column(Integer, primary_key=True, autoincrement=True, unique=True)
    bioguide_id = Column(String, unique=True, primary_key=True)
    district = Column(String)
    first_name = Column(String)
    full_name = Column(String)
    is_by_request = Column(String)
    last_name = Column(String)
    middle_name = Column(String)
    party = Column(String)
    state = Column(String)
    url = Column(String)
    bill_summary_id = Column(Integer, ForeignKey('bill_summary.id'))
