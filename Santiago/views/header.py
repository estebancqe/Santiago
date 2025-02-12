import reflex as rx
import datetime
from Santiago.style.style import Size,Spacing
from Santiago.style.colors import Color
from Santiago.components.link_icon import link_icon
from Santiago.components.info_text import info_text
from Santiago.components.link_button import link_button
# from Esteban.state.PageState import PageState


def header(details=True) -> rx.Component:
    return rx.vstack(
        rx.hstack(
            # rx.image(
            #     src="/CREYENTE.png",
            #     width="300px",
            #     aling="center",
            # ),
            rx.vstack(
                rx.heading(
                    "Santiago",
                    size=Spacing.VERY_BIG.value,
                    color=Color.CONTENT.value,
                ),
                rx.text(
                    "Diseño y mas",
                    margin_top=Size.ZERO.value,
                    color=Color.BLACK.value,
                    size=Spacing.BIG.value,
                ),
                justify="center",
                align="center",
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
            src="https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago//tigre_santiago.jpg",
            # height=rx.breakpoints(
            #         initial="50%",
            #         sm="20%",
            #         ),
            height="auto",
            width="100%",
            align="center",
            justify="center",
        ),
        
        spacing=Spacing.BIG.value,
        width=["100%","auto"],
    ),
    
def experience() -> int:
    return datetime.date.today().year - 2020
    