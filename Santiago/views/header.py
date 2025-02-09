import reflex as rx
import datetime
import Santiago.constants as const
from Santiago.style.style import Size,Spacing
from Santiago.style.colors import Color, TextColor
from Santiago.components.link_icon import link_icon
from Santiago.components.info_text import info_text
from Santiago.components.link_button import link_button
# from Esteban.state.PageState import PageState


def header(details=True) -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.image(
                src="/CREYENTE.png",
                width="300px",
                # height="auto",
                radius="full",
                padding="2px",
                aling="start",
            ),
            # rx.avatar(
            #     name="Logo creyente",
            #     size="9",
            #     src="/logo_creyente_mami.jpeg",
            #     radius="full",
            #     color=Color.PRO.value,
            #     # bg=Color.prueba.value,
            #     padding="2px",
            #     # border=f"4px solid {Color.prueba.value}",
            #     aling="start",
            # ),
            rx.vstack(
                rx.heading(
                    "CREYENTES",
                    size=Spacing.VERY_BIG.value,
                    color=Color.CONTENT.value,
                ),
                rx.text(
                    "Diseño de muebles y mas",
                    margin_top=Size.ZERO.value,
                    color=Color.prueba.value,
                    size=Spacing.BIG.value,
                ),
            ),
            # rx.hstack(
            #     link_icon(
            #         "/icons/instagram.svg",
            #         const.INSTAGRAM,
            #         "email@email.com"
            #     ),
            #     link_icon(
            #         "/icons/facebook.svg",
            #         const.FACEBOOK,
            #         "facebook"
            #     ),
            #     link_icon(
            #         "/icons/book-solid.svg",
            #         const.CATALOGO,
            #         "catalogo"
            #     ),
            #     link_icon(
            #         "/icons/whatsapp.svg",
            #         const.WHATSAPP,
            #         "whatssap"
            #     ),
            #     spacing=Spacing.BIG.value,
                
            # ),

            flex_direction=["column", "row"],
            align="center",
            justify="center",
            spacing=Spacing.VERY_BIG.value,
            width="100%",
        ),
        rx.image(
            src="https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/imagenes%20completas%20full%20definicion/cogador_horizontal.JPG",
            height="auto"
        ),
        
        spacing=Spacing.BIG.value,
        width="100%",
    ),
    
def experience() -> int:
    return datetime.date.today().year - 2020
    