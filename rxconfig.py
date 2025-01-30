import reflex as rx

config = rx.Config(
    app_name="Santiago",
    cors_allowed_origins=[
        "http://localhost:3000",
        "https://santiago-desing.vercel.app"
    ]
)