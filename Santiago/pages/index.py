import reflex as rx
import Santiago.utils as utils
import Santiago.style.style as styles
from Santiago.components.navbar import navbar
from Santiago.components.footer import footer
from Santiago.views.header import header
from Santiago.views.index_links import index_links
from Santiago.views.sponsors import sponsors
from Santiago.style.style import Size
# from Esteban.state.PageState import PageState


import reflex as rx
import Santiago.utils as utils
import Santiago.style.style as styles
from Santiago.components.navbar import navbar
from Santiago.components.footer import footer
from Santiago.views.header import header
from Santiago.views.index_links import index_links
from Santiago.views.sponsors import sponsors
from Santiago.style.style import Size
# from Esteban.state.PageState import PageState


@rx.page(
    title=utils.index_title,
    description=utils.index_description,
    image=utils.preview,
    meta=utils.index_meta,
    
)
def index() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                index_links(   
                ),
                sponsors(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                padding=Size.BIG.value,
                # padding_down=Size.ZERO.value
            )
        ),
        footer(),
    )