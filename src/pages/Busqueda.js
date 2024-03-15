import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom'
import busquedaStyle from '../estilos/busqueda.module.css'


function Busqueda(){

    

    const seleccion = useSelector((state) => state.counter.parametrosDeBusqueda);
    let modus = seleccion.modus;



    let filtrados = seleccion.contenido.
    filter( item => item.titulo.toLowerCase().includes(seleccion.busquedaActual.toLowerCase())
     || item.pais.toLowerCase().includes(seleccion.busquedaActual.toLowerCase())
      || item.region.toLowerCase().includes(seleccion.busquedaActual.toLowerCase()) || item.continente.toLowerCase().includes(seleccion.busquedaActual.toLowerCase()) )

    return (
        <>
        <h3 className={`${modus ? busquedaStyle.resultadoTexto : busquedaStyle.resultadoTextoDark}`}>Resultados para: {seleccion.busquedaActual}</h3>
        <div className={busquedaStyle.riel}>
            {filtrados.map((ciudad, index)=>(
              <NavLink to={`/destinos/${ciudad.id}`} className={busquedaStyle.navlink} key={ ciudad + index}>
                {}
                <div className={busquedaStyle.miniatura}>
                    <div className={busquedaStyle.info}>
                      <p className={busquedaStyle.titulo}>{ciudad.titulo}</p>
                      <p className={busquedaStyle.region}>{ciudad.region}</p>
                    </div>
                    <img  src={`https://desplora.com/medien/${ciudad.imagenPrincipal}.jpg`}/>
                </div>
              </NavLink>
            ))}
          </div>
          </>
    )
}

export default Busqueda;