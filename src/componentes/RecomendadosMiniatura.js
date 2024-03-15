import recomendadosMiniatura from '../estilos/recomendadosMiniatura.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addCiudad, addId } from "../data/operaciones";



function RecomendadosMiniatura({paisActual}) {


    const seleccion = useSelector((state) => state.counter.parametrosDeBusqueda);
    const dispatch = useDispatch();

    let filtrados = seleccion.contenido.filter( item => item.pais == "Colombia")

    
    console.log(filtrados)


    function setPamLink(pam1, pam2){
        dispatch(addId(pam1))
        dispatch(addCiudad(pam2))
      }


    return (
        <div className={recomendadosMiniatura.contenedor}>
           {filtrados.map((ciudad, index)=>(
            <Link to={`/destinos/${ciudad.id}`} onClick={()=>setPamLink(ciudad.id, ciudad.titulo)} className={recomendadosMiniatura.miniatura}>
                <h3>{ciudad.titulo}</h3>

                <img src={`https://desplora.com/medien/${ciudad.imagenPrincipal}.jpg`} alt={ciudad.imagenPrincipal} />
  
            </Link>
            ))}
        </div>
    )
}

export default RecomendadosMiniatura;