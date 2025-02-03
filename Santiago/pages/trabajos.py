import reflex as rx
import Santiago.utils as utils
import Santiago.style.style as styles
from Santiago.components.navbar import navbar
from Santiago.components.footer import footer
from Santiago.views.header import header
from Santiago.views.index_links import index_links
from Santiago.views.sponsors import sponsors
from Santiago.style.style import Size, Spacing
from Santiago.routes import Route

@rx.page(
    route=Route.TRABAJOS.value,
    title=utils.courses_title,
    description=utils.courses_description,
    image=utils.preview,
    meta=utils.courses_meta
)

def trabajos() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                # header(),
                rx.text("TRABAJOS", size=Spacing.VERY_BIG.value),
                sponsors(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                padding=Size.BIG.value
            )
        ),
        footer()
    )