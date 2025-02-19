import reflex as rx
import datetime
import Santiago.constants as const
from Santiago.style.style import Size, Spacing
from Santiago.style.colors import Color


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src="/Tiago_logo.png",
            height=Size.VERY_BIG.value,     #alto del logo
            width=Size.VERY_BIG.value,      #ancho del logo
            alt="logotipo de la marca",  #esto es para personas ividentes
        ),
        rx.link(
            rx.box(
                f"2015-{datetime.date.today().year} ",
                rx.text(
                    "Diseño con naturaleza",
                    as_="span",
                    color=Color.BACKGROUND.value,
                    size=Spacing.DEFAULT.value,
                ),
                " TIAGO ART.",
                padding_top=Size.DEFAULT.value,
                color=Color.BACKGROUND.value,
                size=Spacing.DEFAULT.value,
            ),
            href=const.CATALOGO,
            is_external=True,
            font_size=Size.DEFAULT.value,
        ),

        rx.link(
            rx.hstack(
                rx.text(
                    "Innovación en Diseño: Creando Historias para ti.",
                    font_size=Size.DEFAULT.value,
                    margin_top=Size.ZERO.value,
                ),
                color=Color.BACKGROUND.value,
            ),
            href=const.CATALOGO,
            is_external=True
        ),
        width="100%",
        align="center",
        margin_bottom=Size.DEFAULT.value,
        padding_bottom=Size.DEFAULT.value,
        padding_x=Size.BIG.value,
        spacing=Spacing.ZERO.value,
        bg=Color.CONTENT.value,
    )
