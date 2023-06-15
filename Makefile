build:
	docker-compose build

up:
	docker-compose up -d

stop:
	docker-compose stop

down:
	docker-compose down

restart:
	docker-compose restart

model:
	docker-compose run --rm backend bin/rails generate model $(ARGS)

migrate:
	docker-compose run --rm backend bin/rails db:migrate

graphql:
	docker-compose run --rm backend bin/rails generate graphql:object $(ARGS)

seed:
	docker-compose run --rm backend bin/rails db:seed