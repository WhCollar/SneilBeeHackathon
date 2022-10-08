import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from tortoise.contrib.fastapi import register_tortoise

from app.core.exceptions import APIException, on_api_exception
from app.settings.config import settings
from app.settings.log import DEFAULT_LOGGING
from app.core.auth.routers.login import router as login_router
from app.core.blockchain.routers.wallet import router as wallet_router
from app.core.blockchain.routers.transaction import router as transaction_router
from app.applications.users.routes import router as users_router
from app.applications.tasks.routes import router as tasks_router
from app.applications.badge.routes import router as badge_router


def configure_logging(log_settings: dict = None):
    log_settings = log_settings or DEFAULT_LOGGING
    logging.config.dictConfig(log_settings)


def init_middlewares(app: FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.CORS_ORIGINS,
        allow_credentials=settings.CORS_ALLOW_CREDENTIALS,
        allow_methods=settings.CORS_ALLOW_METHODS,
        allow_headers=settings.CORS_ALLOW_HEADERS,
    )


def get_app_list():
    app_list = [f'{settings.APPLICATIONS_MODULE}.{app}.models' for app in settings.APPLICATIONS]
    return app_list


def get_tortoise_config() -> dict:
    app_list = get_app_list()
    app_list.append('aerich.models')
    config = {
        'connections': settings.DB_CONNECTIONS,
        'apps': {
            'models': {
                'models': app_list,
                'default_connection': 'default',
            }
        }
    }
    return config


TORTOISE_ORM = get_tortoise_config()


def register_db(app: FastAPI, db_url: str = None):
    db_url = db_url or settings.DB_URL
    app_list = get_app_list()
    app_list.append('aerich.models')
    register_tortoise(
        app,
        db_url=db_url,
        modules={'models': app_list},
        generate_schemas=True,
        add_exception_handlers=True,
    )


def register_exceptions(app: FastAPI):
    app.add_exception_handler(APIException, on_api_exception)


def register_routers(app: FastAPI):
    app.include_router(login_router, prefix='/api/auth/login')
    app.include_router(users_router, prefix='/api/auth/users')
    app.include_router(wallet_router, prefix='/api/wallet')
    app.include_router(transaction_router, prefix='/api/transaction')
    app.include_router(tasks_router, prefix='/api/tasks')
    app.include_router(badge_router, prefix='/api/badge')
