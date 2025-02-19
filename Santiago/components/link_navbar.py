import reflex as rx
import Santiago.style.style as styles
from Santiago.style.style import Color

def link_navbar(title:str,url: str, alt: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.text(
            title,
            color=Color.BACKGROUND.value,
            style=styles.navbar_title_style,
        ),
        width=["100%", "auto"],
        href=url,
        # style=styles.button_nabvar
        ),
    )