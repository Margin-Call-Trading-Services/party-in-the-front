detach ?= false

start:
	./scripts/start.sh $(detach)

kill:
	docker-compose down
