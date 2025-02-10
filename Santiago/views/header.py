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
                aling="center",
            ),
            rx.vstack(
                rx.heading(
                    "CREYENTE",
                    size=Spacing.VERY_BIG.value,
                    color=Color.CONTENT.value,
                ),
                rx.text(
                    "Diseño de muebles y mas",
                    margin_top=Size.ZERO.value,
                    color=Color.BLACK.value,
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
            justify="between",
            spacing=Spacing.VERY_BIG.value,
            width="100%",
        ),
        rx.image(
            src="https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/imagenes%20completas%20full%20definicion/cogador_horizontal.JPG",
            height="auto"
        ),
        
        spacing=Spacing.BIG.value,
        width=["100%","auto"],
    ),
    
def experience() -> int:
    return datetime.date.today().year - 2020
    