import reflex as rx
import Santiago.style.style as styles


def title(text: str) -> rx.Component:
    return rx.heading(
        text,
        style=styles.title_style,
        color=styles.Color.BACKGROUND.value
    )