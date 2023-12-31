import os

FILE_EXTENSION = "txt"
RABBITMQ_USERNAME = os.getenv("RABBITMQ_USERNAME", "dynamofl")
RABBITMQ_PASS = os.getenv("RABBITMQ_PASS", "dynamofl")
RABBITMQ_HOST = os.getenv("RABBITMQ_HOST", "localhost")
BACKEND_ENDPOINT = os.getenv("BACKEND_ENDPOINT", "http://localhost:3000")