import reflex as rx
import Santiago.style.style as styles
from Santiago.routes import Route
from Santiago.style.style import Size, Color, TextColor
from Santiago.components.link_navbar import link_navbar


def navbar() -> rx.Component:
    return rx.flex(
        # Navegación izquierda
        rx.flex(
            rx.hstack(
                link_navbar(
                    "Inicio",
                    Route.INDEX.value,
                    "palabra inicio",
                ),
                link_navbar(
                    "Historia",
                    Route.HISTORIA.value,
                    "palabra historia"
                ),
            ),
            rx.hstack(
                link_navbar(
                    "Misión",
                    Route.MISION.value,
                    "palabra mision",
                ),
                    
                link_navbar(
                    "Trabajos",
                    Route.TRABAJOS.value,
                    "palabra trabajos",
                ),
            ),
            spacing="4",
            color=Color.BACKGROUND.value,
            style=styles.navbar_title_style,
            flex_direction=["column", "row"],
            
        ),
        # Logo/Título centrado
        rx.hstack(
            rx.link(
                rx.text("Crey", as_="span", color=TextColor.HEADER.value),
                rx.text("ente", as_="span", color=TextColor.HEADER.value),
                spacing="1",
                style=styles.navbar_title_style,
                href=Route.INDEX.value 
            ),
        ),
        spacing="3",
        width=["100%", "auto"],
        position="sticky", #PARA QUE SE QUEDE ESTATICO 
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999", #QUE TENGA SIMPRE EL 100 PORCIENTO DE LA PANTALLA
        top="0",
        justify="between",# FOMRACION HOROZONTAL DE LOS COMPONENTES
        align="center", #ALINEACION VERTICAL
    )