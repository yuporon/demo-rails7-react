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

bundle:
	docker-compose run --rm backend bundle install

graphql:
	docker-compose run --rm backend bin/rails generate graphql:object $(ARGS)

seed:
	docker-compose run --rm backend bin/rails db:seed

install:
	docker-compose run --rm frontend yarn install

add:
	docker-compose run --rm frontend yarn add $(p)

lint:
	docker-compose run --rm frontend yarn lint

lint-fix:
	docker-compose run --rm frontend yarn lint:fix

codegen:
	docker-compose run --rm frontend yarn codegen
