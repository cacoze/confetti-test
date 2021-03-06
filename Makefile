.PHONY: build_frontend run_frontend run_django run install_dependencies setup_node_environment

build_frontend:
	npm run build

run_frontend:
	npm start

run_django:
	python manage.py runserver

run:
	make -j2 run_django run_frontend

install_dependencies:
	make setup_node_environment
	pip install -r requirements.txt
	npm i

setup_node_environment:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
	export NVM_DIR=$$HOME/.nvm; . ~/.nvm/nvm.sh ; nvm install
