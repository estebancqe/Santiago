import reflex as rx
import datetime
import Santiago.constants as const
from Santiago.style.style import Size, Spacing
from Santiago.style.colors import Color


def footer() -> rx.Component:
    return rx.vstack(
        
        rx.link(
            rx.box(
                f"2015-{datetime.date.today().year} ",
                rx.text(
                    "ILUSTRACION NATURALISTA",
                    as_="span",
                    color=Color.BACKGROUND.value,
                    size=Spacing.DEFAULT.value,
                ),
                padding_top=Size.DEFAULT.value,
                color=Color.BACKGROUND.value,
                size=Spacing.DEFAULT.value,
            ),
            font_size=Size.DEFAULT.value,
        ),

        rx.link(
            rx.hstack(
                rx.text(
                    "NATURALEZA SALVAJE A LA PALMA DE TU MANO",
                    font_size=Size.MEDIUM.value,
                    margin_top=Size.ZERO.value,
                ),
                color=Color.BACKGROUND.value,
            ),
        ),
        rx.image(
            src="/Tiago_logo.png",
            height="auto",     #alto del logo
            width="200px",      #ancho del logo
            alt="logotipo de la marca",  #esto es para personas ividentes
        ),
        width="100%",
        align="center",
        margin_bottom=Size.DEFAULT.value,
        padding_bottom=Size.DEFAULT.value,
        padding_x=Size.BIG.value,
        spacing=Spacing.ZERO.value,
        bg=Color.CONTENT.value,
    )
