import reflex as rx
import Santiago.constants as const
from Santiago.style.style import Spacing
from Santiago.components.title import title
from Santiago.components.link_button import link_button


def sponsors() -> rx.Component:
    return rx.vstack(
        title("Ubicación"),
    
        rx.vstack(
            link_button(
                "Ibarra",
                "Av. beltran frente al campamento Panavial  San Antonio",
                "/icons/location.svg",
                const.UBI_IBARRA  
            ),
                link_button(
                "Guayaquil",
                "la direccion que quieras poner",
                "/icons/location.svg",
                const.UBI_IBARRA
            ),
            flex_direction=["column", "row"],
            width="100%",
            align="center",
            justify="center",
        ),
        width="100%",
        align_items="center",
        spacing=Spacing.DEFAULT.value
    )