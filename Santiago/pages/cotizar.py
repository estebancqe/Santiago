import reflex as rx
import Santiago.utils as utils
import Santiago.style.style as styles
from Santiago.routes import Route
from Santiago.components.navbar import navbar
from Santiago.components.footer import footer
from Santiago.views.header import header
from Santiago.views.cotizar_links import cotizar_links
from Santiago.views.sponsors import sponsors
from Santiago.style.style import Size
# from Esteban.state.PageState import PageState


@rx.page(
    route=Route.COTIZAR.value,
    title=utils.courses_title,
    description=utils.courses_description,
    image=utils.preview,
    meta=utils.courses_meta,
    # on_load=[PageState.muebles_links,PageState.modelo_links]
)
def cotizar() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        rx.center(
            rx.vstack(
                header(False),
                cotizar_links(
                    # PageState.mueble_info,
                    # PageState.modelo_info,
                    
                ),
                sponsors(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                padding=Size.BIG.value
            )
        ),
    footer()
    )