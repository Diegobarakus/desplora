import foquiNavega from '../estilos/foquitaNavega.module.css'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addBusqueda, addCiudad } from "../data/operaciones";
import { Link } from 'react-router-dom'




function FoquitaNavega(){

    const goBack = () => {
        window.history.back(); // Utiliza window.history para ir a la página anterior
      };

    const seleccion = useSelector((state) => state.counter.parametrosDeBusqueda);
    const dispatch = useDispatch();

     const handleChange = (e) => {
      dispatch(addBusqueda(e.target.value))
    };


    return(
        <div className={foquiNavega.contenedor}>
            <div className={foquiNavega.box}></div>

            <Link className={foquiNavega.inputLink} to="/busqueda">
            <input onChange={handleChange} className={foquiNavega.inputBusqueda} placeholder='Busca tu próximo destino' type='text' />
            </Link>
            
            <div className={foquiNavega.box}></div>
        </div>
    )
}

export default FoquitaNavega;