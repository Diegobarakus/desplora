import continentes from '../estilos/ListaContinentes.module.css'
import { NavLink } from 'react-router-dom';
import Paises from '../componentes/Paises'

//Store
import { useSelector, useDispatch } from "react-redux";
import { addContinente, addPais } from "../data/operaciones";




const ListaContinentes = () => {

    //store en seleccion se guardan todos los parametros de continente, pais...
    const seleccion = useSelector((state) => state.counter.parametrosDeBusqueda);
    const dispatch = useDispatch();
    // Crear un conjunto (Set) para almacenar continentes únicos
    const continentesUnicos = new Set(seleccion.contenido.map( post => post.continente));
    // Convertir el conjunto a un array
    const listaContinentes = [...continentesUnicos];

    



    return (

        <div className={`${seleccion.modus ? continentes.element : continentes.elementDark}`}>
            <ul>
                {/* Iterar sobre la lista de continentes y mostrar cada uno */}
                {listaContinentes.map((continente, index) => (
                    <NavLink

                    onClick={()=>dispatch(addContinente(continente), dispatch(addPais("")))}
                    key={index + 89}
                    
                    className={({ isActive }) =>{
                        return isActive? 'isactive2' : undefined
                      }}
                    
                     ><li key={index}>{continente}</li></NavLink>
                ))}
            </ul>

            <Paises />
        </div>
    );
};

export default ListaContinentes;