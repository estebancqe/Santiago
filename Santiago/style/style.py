import reflex as rx
from enum import Enum
from .colors import Color, TextColor
from .fonts import Font, FontWeight

# Constants
MAX_WIDTH = "1200px"
FADEIN_ANIMATION = "animate__animated animate__fadeIn"
BOUNCEIN_ANIMATION = "animate__animated animate__bounceIn"

# Sizes

STYLESHEETS = [
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap",
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap",
    "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    "/css/styles.css"
]


class Size(Enum):
    ZERO = "0px !important"
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    MEDIUM_LARGE= "1.2em" #uso para la pabra de navbar
    LARGE = "1.5em"
    BIG = "2em"
    MEDIUM_BIG = "2.8em"
    VERY_BIG = "4em"
    SUPER_VERY_BIG = "8em"


class Spacing(Enum):
    ZERO = "0"
    VERY_SMALL = "1"
    SMALL = "3"
    DEFAULT = "4"
    LARGE = "5"
    BIG = "6"
    MEDIUM_BIG = "7"
    VERY_BIG = "9"

# Styles


BASE_STYLE = {
    # Estilos globales
    "font_family": Font.DEFAULT.value,
    "font_weight": FontWeight.LIGHT.value,
    "background_image": "url('https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago//noche-estrellada.jpeg')",
    "background_position": "center",
    "background_size": "cover", 
    "background_repeat": "no-repeat",
    "background_attachment": "fixed",

    # Estilos para headings
    rx.heading: {
        "color": TextColor.HEADER.value,
        "font_family": Font.TITLE.value,
        "font_weight": FontWeight.MEDIUM.value,
        "margin_bottom": "1em",
    },

    # Estilos para botones
    rx.button: {
        "height": ["100%", "auto"],
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value,
        "color": TextColor.HEADER.value,
        "background_color": Color.BLACK.value,
        "white_space": "normal",
        "text_align": "start",
        "cursor": "pointer",
        "transition": "all 0.2s ease-in-out",
        "_hover": {
            "background_color": Color.SECONDARY.value,
            "transform": "translateY(-2px)",
        }
    },
        
    # Estilos para links
    rx.link: {
        "color": TextColor.BODY.value,
        "text_decoration": "none",
        "transition": "color 0.2s ease-in-out",
        "_hover": {
            "color": Color.SECONDARY.value,
            "text_decoration": "none"
        }
    }
}

navbar_title_style = dict(
    font_family=Font.LOGO.value,
    font_weight=FontWeight.MEDIUM.value,
    font_size=Size.MEDIUM_LARGE.value,
)

title_style = dict(
    width="100%",
    padding_top=Size.DEFAULT.value,
    font_size=Size.BIG.value,
)

button_title_style = dict(
    font_family=Font.TITLE.value,
    font_weight=FontWeight.MEDIUM.value,
    color=TextColor.HEADER.value,
)

button_mela_title_style = dict(
    font_family=Font.TITLE.value,
    font_weight=FontWeight.MEDIUM.value,
    color=TextColor.HEADER.value,
)

button_body_style = dict(
    font_weight=FontWeight.LIGHT.value,
    color=Color.BACKGROUND.value
)
style_secod_tittle = {
    "text_decoration": "underline",
    "background_color":"#f7f2eb"
}
button_nabvar={
        # "width": "100%",
        "height": ["100%","auto"],
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value,
        "color": TextColor.HEADER.value,
        "background_color": "#D2B48C",#cambio color de fondo del botton
        "white_space": "normal",
        "text_align": "start",
        "--cursor-button": "pointer",
        "_hover": {
            "background_color": Color.SECONDARY.value
        }
    },