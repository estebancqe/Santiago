import reflex as rx
import Santiago.constants as const
from Santiago.components.link_image_muestra import link_image_muestra
from Santiago.routes import Route
from Santiago.components.link_button import link_button
from Santiago.components.title import title
from Santiago.style.style import Color, Spacing,Size
import Santiago.style.style as styles
# from Esteban.state.PageState import PageState


def index_links() -> rx.Component:
    return rx.vstack(
        title("SOCIAL MEDIA"),

        rx.flex(
            link_button(
                "Facebook",
                "Clases de dibujo y mas.",
                "/icons/facebook.svg",
                const.FACEBOOK
            ),
            link_button(
                "Instagram", 
                "Diseño y Arte",
                "/icons/instagram.svg",
                const.INSTAGRAM
            ),
            
            spacing="2",
            width="100%",
            flex_direction=["column", "column", "row"],
            align="center",
            justify="between"
        ),

        rx.flex(
            link_button(
                "Youtube",
                """Clases y tutoriales.""",
                "/icons/youtube.svg",
                const.YOUTUBE
            ),
            link_button(
                "Tik-Tok",
                """Videos cortos y divertidos.""",
                "/icons/linkedin.svg",
                const.TIKTOK 
            ),
            spacing="2",
            width="100%",
            flex_direction=["column", "column", "row"],
            align="center",
            justify="between"
        ),
        
        title("MURALES"),
        rx.flex(
            rx.text(
                "Adecumos tu imaginacion al lugar que tu quieras",
                size=Spacing.SMALL.value,
                color=Color.BACKGROUND.value,
                # style=styles.style_secod_tittle,
            ),
            rx.link(
                rx.image(
                src="https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago/imagenes%20de%20obras/tortuga_pintando.jpg",
                width="400px",
                href=Route.TRABAJOS.value,
                ),
                href=Route.TRABAJOS.value,
                justify="end",
            ),
            spacing="4",
            width="100%",
            flex_direction=["row", "row", "row"],
            align="center",
            justify="between"
        ),
        
        title("EVOLUCION DE LA EXPRESION NATURALISTA"),

        rx.flex(
            rx.grid(
                link_image_muestra(
                    "https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago/obras%20altura%201080/rana_1080.jpg",
                    "https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago/obras%20altura%201080/rana_1080.jpg",
                ),
                link_image_muestra(
                    "https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago/obras%20altura%201080/caballo_mar_entero_1080.jpg",
                    "https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago/obras%20altura%201080/caballo_mar_entero_1080.jpg"
                ),
                link_image_muestra(
                    "https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago/obras%20altura%201080/dragon_1080.jpg",
                    "https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago/obras%20altura%201080/dragon_1080.jpg"
                ),
                link_image_muestra(
                    "https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago/obras%20altura%201080/vuelvepiedras_1080.jpg",
                    "https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago/obras%20altura%201080/vuelvepiedras_1080.jpg"
                ),
                gap="1rem",
                grid_template_columns=[
                    "1fr",  # móvil: 1 columna
                    "repeat(2, 1fr)",  # tablet/desktop: 2 columnas
                ],
                align="center",
                justify="end",   
            ),
            width="100%",
            spacing="2",
        ),
        
        title("Contacto"),
        rx.vstack(
            link_button(
            "WhatsApp",
            "respuesta rápida y de preferencia",
            "/icons/whatsapp.svg",
            const.WHATSAPP
            ),
            link_button(
                "Email",
                const.EMAIL,
                "/icons/email.svg",
                f"mailto:{const.EMAIL}"
            ),
            width="100%",
            align="center",
            justify="center",
        ),
        width="100%",
    )   