import reflex as rx
import Santiago.constants as const
from Santiago.style.style import Size,Spacing
from Santiago.components.title import title
from Santiago.components.link_sponsor import link_sponsor
from Santiago.components.link_button import link_button
from Santiago.style.colors import TextColor


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
        ),
    
        width="100%",
        align_items="start",
        spacing=Spacing.DEFAULT.value
    )
    
# def sponsors() -> rx.Component:
#     return rx.vstack(
#         title("Ubicacion"),
#           rx.flex(
#                link_sponsor(
#                     "/AvatarC.png",
#                     const.CARPINTERIA, 
#                     "Avatar"        
#                ),
#                link_sponsor(
#                     "/logocrebla.png",
#                     const.CARPINTERIA, 
#                     "simbolo de carpinteria"
#                ),
#                spacing=Spacing.BIG.value,
#                flex_direction=["column", "row"]

#           ),
#         width="100%",
#         align_items="start",
#         spacing=Spacing.DEFAULT.value
#     )