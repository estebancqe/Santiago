import reflex as rx
import Santiago.style.style as styles
from Santiago.routes import Route
from Santiago.style.style import Size
from Santiago.style.style import Color


def navbar() -> rx.Component:
    return rx.flex(
        # Navegación izquierda
        rx.hstack(
            rx.link("Inicio", href=Route.INDEX.value),
            rx.link("Historia", href=Route.HISTORIA.value),
            rx.link("Misión", href=Route.MISION.value),
            rx.link("Trabajos", href=Route.TRABAJOS.value),
            spacing="4",
            style=styles.navbar_title_style,
        ),
        # Logo/Título centrado
        rx.hstack(
            rx.text("Santiago", as_="span", color=Color.PRIMARY.value),
            rx.text("Design", as_="span", color=Color.SECONDARY.value),
            spacing="1",
            style=styles.navbar_title_style,
        ),
        flex_direction=["column", "row"],
        width="100%",
        position="sticky",
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0",
        justify="between",
        align="center",
    )