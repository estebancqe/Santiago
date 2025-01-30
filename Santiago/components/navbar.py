import reflex as rx
import Santiago.style.style as styles
from Santiago.routes import Route
from Santiago.style.style import Size
from Santiago.style.style import Color


def navbar() -> rx.Component:
    return rx.hstack(
        rx.link(
            rx.box(
                rx.text("Santiago", as_="span", color=Color.PRIMARY.value),
                rx.text("Desing", as_="span", color=Color.SECONDARY.value),
                style=styles.navbar_title_style
            ),
            href=Route.INDEX.value
        ),
        position="sticky",
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0"
    )