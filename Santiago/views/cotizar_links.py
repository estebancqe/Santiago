import reflex as rx
# from Esteban.state.PageState import PageState
from Santiago.routes import Route
from Santiago.style.style import Color, Spacing  ,Size 
from Santiago.components.link_button import link_button
from Santiago.components.title import title 
# from Creyente.Presupuesto.hereda.modelos_melamina import modelos_melamina
# from Esteban.Presupuesto.doc_prueba import doc_prueba
# from Esteban.Presupuesto.tabs_muebles import tabs_muebles

# from Esteban.Presupuesto.informacion_muebles import informacion_muebles
# from Esteban.Presupuesto.infrmacion_modelos import infrmacion_modelos




def cotizar_links(HERRAJES=[], MUEBLES=[]) -> rx.Component:
    return rx.vstack(
        link_button(
            "Pagina Principal",
            "nuestros catalogos y contactos",
            "/icons/book-solid.svg",
            Route.INDEX.value,
            False,
            Color.SECONDARY.value
        ),
        link_button(
            "Catálogo de Materiales",
            "Explora el catálogo completo de materiales disponibles",
            "/icons/book-solid.svg",
            Route.COURSES.value,
            False,
            Color.SECONDARY.value
        ),
    

    
        # title("Muestra del contenido del archivo prueba"),
        # doc_prueba(),
        
        
        title("Nuestros Modelos de Muebles"),
        # tabs_muebles(),  


        # title("Valores de la tabla Mubeles"), 
        # rx.cond(
        #     PageState.mueble_info,
        #     rx.vstack(
        #         rx.flex(
        #             rx.foreach(
        #                 PageState.mueble_info,
        #                   informacion_muebles,
        
        #             ),
        #             flex_direction=["column", "row"],
        #             spacing=Spacing.DEFAULT.value
        #         ),
        #         spacing=Spacing.DEFAULT.value
        #     )
        # ),
        
        
        # title("VAlores de la tabla Modelos"),
        # rx.cond(
        #     PageState.modelo_info,
        #     rx.vstack(
                
        #         rx.flex(
                    
        #             rx.foreach(
        #                 PageState.modelo_info,
        #                   infrmacion_modelos
        #             ),
        #             flex_direction=["column", "row"],
        #             spacing=Spacing.DEFAULT.value
        #         ),
        #         spacing=Spacing.DEFAULT.value
        #     )
        # ),
        
    
    
    width="100%",
    )