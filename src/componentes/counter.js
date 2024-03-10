import { useSelector, useDispatch } from "react-redux";
import { addContinente, addPais, addCiudad } from "../data/operaciones";

function Counter(){

        const seleccion = useSelector((state) => state.counter.parametrosDeBusqueda);
        const dispatch = useDispatch();

    return(
        <>
        <h1>{seleccion.continente}</h1>
        <h1>{seleccion.pais}</h1>
        <h1>{seleccion.ciudad}</h1>
        
        <button onClick={()=>dispatch(addContinente("Europa"))} >Continent</button>
        <button onClick={()=>dispatch(addPais("Deutschland"))} >Land</button>
        <button onClick={()=>dispatch(addCiudad("Bingen"))} >Stadt</button>
        </>
    )
}

export default Counter;