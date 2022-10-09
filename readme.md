# SnailBee
### Нашь проект влкючает
#### - FastAPI
#### - TortoiseORM
#### - Aerich
#### - User model + JWT auth
#### - Registration + password reset email
#### - Files + password reset email
#### - Logging to files
#### - Alpine Dockerfile
#### - Docker-compose files

# Установка
#### Скопировать .env -> .env и заполнить
#### Прописать все app в config.applications (django style). Поиск моделей будет происходить по пути app.applications.APP_NAME.models
#### Сгенерировать SECRET_KEY ( можно командой `openssl rand -hex 32`)
#### Запуск всего проекта производиться командой docker compose up
