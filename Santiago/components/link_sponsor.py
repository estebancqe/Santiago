import reflex as rx
from Santiago.style.style import Size, Spacing

def link_sponsor(imagen: str, url: str, alt: str) -> rx.Component:
    return rx.link(
        rx.image(
            src=imagen,
            width=Size.LARGE.value,
            height=Size.LARGE.value,
            alt=alt
        ),
        href=url,
        is_external=True
    )