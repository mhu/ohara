# Ohara

Ohara is an advanced search tool for the [One Piece TCG](https://en.onepiece-cardgame.com/).

## Installation

Clone the GitHub repository:

```bash
git clone https://github.com/mhu/ohara.git
```

## Usage

Build the Docker images for the frontend and backend services respectively:

```bash
cd frontend && npm run build-docker image
cd backend && make build-docker-image
```

Run the application:

```bash
docker compose up
```

## Development

In order to run the application in development mode for the frontend, you can use the dedicated [docker-compose.yaml](frontend/docker-compose.yaml), which includes volumes for the frontend to reflect the changes made to the code:

```bash
cd frontend
docker compose up
```

The same thing applies to the backend using its [docker-compose.yaml](backend/docker-compose.yaml):

```bash
cd backend
docker compose up
```

The database can be set up using the Adminer web interface (localhost:8080) and the [setup.sql](database/setup.sql) or the [setup.csv](database/setup.csv) file. It requires a password to be set, which can be done by setting the `POSTGRES_PASSWORD` environment variable in the root of the project and for the frontend, the backend and the database respectively.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
