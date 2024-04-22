from os import environ
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from alembic import context
from structlog import get_logger

# The storage controller does alot
# PGStorageController is technically a database controller but
# the distinction is moot.  Because PG is not schemaless, PGStorageController
# has to know hwo to do the migrations... WHich also givesi t access to the domain model.  We should
# Keep these fairly simple and not have them get too large.  The LLM Agent will have access to the domain model
# as well as the controller interfaces.


class PGStorageController:
    user = environ.get("PG_USER", "panda")
    pw = environ.get("PG_PASSWORD", "panda")
    host = environ.get("PG_HOST", "localhost")
    port = environ.get("PG_PORT", "5432")

    def __init__(self, database_name=None, metadata=None):
        if database_name is None:
            raise ValueError("database_name must be specified")
        self.database_name = database_name
        self.logger = get_logger(f'{self.__name__}.{database_name}')
        self.conn_string = f'psycopg2+postgresql://{self.user}:{self.pw}@{self.host}:{self.port}/{database_name}'
        self.engine = create_engine(
            self.conn_string,
            echo=True,
            future=True,
        )
        self.session = sessionmaker(bind=self.engine)
        self.metadata = metadata

    # TODO: move these to a util mixin
    def run_migrations(self):
        self.logger.info(f"Running migrations")
        self.logger.info(f"Offline mode={context.is_offline_mode()}")
        self.logger.info(f"Metadata={self.__dict__}")

        if context.is_offline_mode():
            self.run_migrations_offline()
        else:
            self.run_migrations_online()

    def run_migrations_offline(self) -> None:
        context.configure(
            url=self.engine.url,
            target_metadata=self.metadata,
            literal_binds=True,
            dialect_opts={"paramstyle": "named"},
        )

        with context.begin_transaction():
            context.run_migrations()

    def run_migrations_online(self):
        pass


__all__ = ['PGStorageController']
