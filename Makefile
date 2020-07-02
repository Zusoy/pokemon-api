#########
# STACK #
#########

.PHONY: stack
stack: stack.build stack.start js.install

.PHONY: stack.build
stack.build:
	docker-compose build

.PHONY: stack.start
stack.start:
	docker-compose up -d

.PHONY: stack.stop
stack.stop:
	docker-compose stop

.PHONY: stack.kill
stack.kill:
	docker-compose kill

######
# JS #
######

.PHONY: js.install
js.install:
	docker-compose run --rm app npm install


############
# DATABASE #
############

.PHONY: database
database:
	database.migrate

.PHONY: database.migrate
database.migrate:
	docker-compose run --rm app npm run migration:migrate
