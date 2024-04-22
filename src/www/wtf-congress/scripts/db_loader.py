from prisma import Prisma
import logging

logging.getLogger('prisma').setLevel(logging.DEBUG)


def main() -> None:
    db = Prisma(
      datasource={
        'url': 'postgresql://postgres:postgres@localhost:5932/postgres?schema=public',
      },
    )
    db.connect()

    logging.info('Creating user')
    db.user.create(
      data={
        'username': 'embermoon',
        'password': '123456',
        'email': 'embermoon90@gmail.com',
        'loggedInAt': '021-01-01T00:00:00.000Z',
        'virtual_author': False
      },
    )

    db.disconnect()


if __name__ == '__main__':
  main()
