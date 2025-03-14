import reflex as rx
import Santiago.constants as const
from Santiago.components.link_button import link_button
from Santiago.style.colors import Color
from Santiago.style.style import Spacing


def newsletter() -> rx.Component:
    return rx.vstack(
        link_button(
            "mouredev.log",
            "La newsletter de la comunidad para mantenerse al día",
            "/icons/book-solid.svg",
            const.CATALOGO
        ),
        rx.html(
            "<iframe src='https://embeds.beehiiv.com/c9c3f7b7-7ed9-428a-a58f-cb53577fa352?slim=true' data-test-id='beehiiv-embed' title='Formulario de suscripción newsletter mouredev pro' width='100%' height='52' frameborder='0' scrolling='no' style='margin: 0; border-radius: 6px !important; background-color: transparent;'></iframe>",
            width="100%"
        ),
        spacing=Spacing.DEFAULT.value,
        width="100%"
    )