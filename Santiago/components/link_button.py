import reflex as rx
import Santiago.style.style as styles
from Santiago.style.style import Size, Spacing


def link_button(title: str,
                body: str,
                image: str,
                url: str,
                is_external=True,
                highlight_color=None,
                animated=False) -> rx.Component:

    return rx.button(
        rx.hstack(
            rx.image(
                src=image,
                width=Size.LARGE.value,
                height=Size.LARGE.value,
                margin=Size.MEDIUM.value,
                alt=title
            ),
            rx.vstack(
                rx.text(
                    title,
                    size=Spacing.LARGE.value,
                    style=styles.button_title_style
                ),
                rx.text(
                    body,
                    size=Spacing.VERY_SMALL.value,
                    style=styles.button_body_style
                ),
                align_items="start",
                spacing=Spacing.VERY_SMALL.value,
                padding_y=Size.SMALL.value,
                padding_right=Size.SMALL.value
            ),
            align="center",
            justify="start",
            width="100%"
        ),
        border=f"{'2px' if highlight_color != None else '0px'} solid {highlight_color}",
        class_name=styles.BOUNCEIN_ANIMATION if animated else None,
        on_click=rx.redirect(path=url, is_external=is_external)
    )
