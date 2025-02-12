import reflex as rx
#import pytz
# from datetime import datetime, timedelta

# Función para establecer el idioma del documento
def lang() -> rx.Component:
    return rx.script("document.documentElement.lang='es'")

# URL de la imagen de vista previa
preview = "https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago//tigre_santiago.jpg"

# Metadatos comunes para la web
_meta = [
    {"name": "og:type", "content": "website"},
    {"name": "og:image", "content": preview},
    {"name": "twitter:card", "content": "summary_large_image"},
    {"name": "twitter:site", "content": "@Creyente"}
]

# Metadatos para la página de inicio
index_title = "Creyente | Te enseño los mejores modelos de madera y melamina"
index_description = "Hola, me llamo Creyente y tengo lo mejor de madera y melamina a medida y totalmente personalizado."

index_meta = [
    {"name": "og:title", "content": index_title},
    {"name": "og:description", "content": index_description},
]
index_meta.extend(_meta)

# Metadatos para la página de cursos
courses_title = "Ejemplo | Cursos"
courses_description = "descripcion de la pagina"

courses_meta = [
    {"name": "og:title", "content": courses_title},
    {"name": "og:description", "content": courses_description},
]
courses_meta.extend(_meta)