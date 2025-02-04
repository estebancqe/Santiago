import reflex as rx
import Santiago.constants as const
from Santiago.components.newsletter import newsletter 
from Santiago.routes import Route
from Santiago.components.link_button import link_button
from Santiago.components.title import title
from Santiago.style.style import Color, Spacing,Size
# from Esteban.state.PageState import PageState


def index_links() -> rx.Component:
    return rx.vstack(
        title("SOCIAL MEDIA"),
        rx.grid(
            link_button(
            "Facebook",
            """Clases de dibujo y mas.""",
            "/icons/facebook.svg",
            const.FACEBOOK
            ),
            link_button(
                "Instagram",
                """Diseño y Arte""",
                "/icons/instagram.svg",
                const.INSTAGRAM
                ),
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
            columns="2",
            spacing="4",  # Esto agrega espacio entre las imágenes
            width="100%"
        ),
        title("MODELOS"),
        rx.grid(
            rx.text(
                "Modelos de Muebles",
                size="8",
            ),
            rx.link(
                rx.image(
                src="https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/imagenes%20de%20los%20modelos%20que%20hemos%20hecho/colgador_de_ropa_mami.jpeg",
                width="80%",
                href=Route.TRABAJOS.value,
                ),
                href=Route.TRABAJOS.value,
            ),
            columns="2",
            spacing=Spacing.VERY_BIG.value,
            align="center",
            justify="end",
            # SizedBox=Spacing.DEFAULT.value,
        ),
        
        title("Diseño"),
        link_button(
            "Mi Arte",
            "Dibujos y Pinturas",
            "/icons/book-solid.svg",
            Route.COURSES.value,
            False,
            Color.PURPLE.value
        ),
        link_button(
            "Tutoriales",
            "aprende a Dibujar y Pintar",
            "/icons/book-solid.svg",
            Route.COTIZAR.value,
            False,
            Color.PRO.value
        ),

        title("DISEÑOS"),
        link_button(
            "Diseño 1",
            """Descripcion 1.""",
            "/icons/madera1.svg",
            const.MADERA_PERSONALIZADA
        ),
        link_button(
            "Diseño 2",
            """Descripcion 2""",
            "/icons/madera2.svg",
            const.TABLA_PICAR
        ),
        link_button(
            "Diseño 3",
            """Descripcion 3""",
            "/icons/madera3.svg",
            const.MUEBLES_PERSONLAZADOS
            ),
        link_button(
            "Diseño 4",
            """Descripcion 4""",
            "/icons/madera4.svg",
            const.AMOBLADO_AREA
            ),
        
        title("Contacto"),
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
            
        title("Newsletter"),
        newsletter(),   
        width="100%",
        spacing=Spacing.DEFAULT.value,
        # on_mount=PageState.featured_links
    )   