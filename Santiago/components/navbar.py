import reflex as rx
import Santiago.style.style as styles
from Santiago.routes import Route
from Santiago.style.style import Size
from Santiago.style.style import Color


def navbar() -> rx.Component:
    return rx.flex(
        # Navegación izquierda
        rx.flex(
            rx.hstack(
                rx.link("Inicio", href=Route.INDEX.value,color=Color.BACKGROUND.value),
                rx.link("Historia", href=Route.HISTORIA.value, color=Color.BACKGROUND.value),
            ),
            rx.hstack(
                rx.link("Misión", href=Route.MISION.value,color=Color.BACKGROUND.value),
                rx.link("Trabajos", href=Route.TRABAJOS.value,color=Color.BACKGROUND.value),
            ),
            # rx.link("Inicio", href=Route.INDEX.value,color=Color.BACKGROUND.value),
            # rx.link("Historia", href=Route.HISTORIA.value, color=Color.BACKGROUND.value),
            # rx.link("Misión", href=Route.MISION.value,color=Color.BACKGROUND.value),
            # rx.link("Trabajos", href=Route.TRABAJOS.value,color=Color.BACKGROUND.value),
            spacing="4",
            style=styles.navbar_title_style,
            flex_direction=["column", "row"],
            
        ),
        # Logo/Título centrado
        rx.hstack(
            rx.text("Crey", as_="span", color=Color.BACKGROUND.value),
            rx.text("ente", as_="span", color=Color.BACKGROUND.value),
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