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
            #     src="/Tiago_logo.png",
            #     width="300px",
            #     aling="center",
            # ),
            rx.flex(
                rx.video(
                url="https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago/video/video_cuadorno_tigre.mp4",
                width="auto",
                height="600px",
            ),
            ),
            
            # rx.vstack(
            #     rx.heading(
            #         "Santiago",
            #         size=Spacing.VERY_BIG.value,
            #         color=Color.CONTENT.value,
            #     ),
            #     rx.text(
            #         "Diseño y mas",
            #         margin_top=Size.ZERO.value,
            #         color=Color.BLACK.value,
            #         size=Spacing.BIG.value,
            #     ),
            #     width="100%",
            #     justify="center",
            #     align="center",
            # ),

            flex_direction=["column", "row"],
            align="center",
            justify="center",
            spacing=Spacing.VERY_BIG.value,
            width="100%",
        ),
        rx.flex(
            rx.link(
                rx.image(
                    src="https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago//tigre_preview.jpg",
                    height=rx.breakpoints(
                        initial="100%",  # móvil
                        sm="60%",       # tablet
                        lg="40%"        # desktop
                        ),
                        # width="auto",
                        align="center",
                        justify="center",
                ),
                # width="100%",
                align="center",
                justify="center",
                href="https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago//tigre_santiago.jpg",
                is_external=True,
            ),
            width="100%",
            align="center",
            justify="center",
        ),
        
        
        spacing=Spacing.BIG.value,
        width=["100%"],
    ),
    
def experience() -> int:
    return datetime.date.today().year - 2020
    