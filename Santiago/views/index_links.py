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
        
        title("MODELOS"),
        rx.flex(
            rx.text(
                "CONOCE NUESTROS MODELOS",
                size=Spacing.MEDIUM_BIG.value,
                color=Color.SECOND_TITTLE.value,
                style=styles.style_secod_tittle,
            ),
            rx.link(
                rx.image(
                src="https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/colgador_de_ropa_mami.jpeg",
                width="100%",
                href=Route.TRABAJOS.value,
                ),
                href=Route.TRABAJOS.value,
                justify="end",
            ),
            spacing="4",
            width="100%",
            flex_direction=["column", "column", "row"],
            align="center",
            justify="between"
        ),
        
        title("Crea lo que Siempre has Soñado"),

        rx.flex(
            rx.grid(
                link_image_muestra(
                    "https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/mueble_cocina_electrodomesticos_copy.JPG",
                    "https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/imagenes%20completas%20full%20definicion/mueble_cocina_electrodomesticos.JPG",
                ),
                link_image_muestra(
                    "https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/mueble_armario%20copy.JPG",
                    "https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/imagenes%20completas%20full%20definicion/mueble_armario.JPG",
                ),
                link_image_muestra(
                    "https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/cafetera_vertical_cerrado%20copy.JPG",
                    "https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/imagenes%20completas%20full%20definicion/cafetera_vertical_cerrado.JPG",
                ),
                link_image_muestra(
                    "https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/mueble_sala_vertical%20copy.JPG",
                    "https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/imagenes%20completas%20full%20definicion/mueble_sala_vertical.JPG",
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