
import { NavLink } from 'react-router-dom';
import paisesStyle from '../estilos/paisesStyle.module.css'
import Ciudades from '../componentes/Ciudades'

//store
import { useSelector, useDispatch } from "react-redux";
import { addPais } from "../data/operaciones";


function Paises(){

    //Store
    const seleccion = useSelector((state) => state.counter.parametrosDeBusqueda);
    const dispatch = useDispatch();

    let nuevaLista = seleccion.contenido.filter(i => i.continente === seleccion.continente)
    let arrayConRepetidos = []
    nuevaLista.filter(i =>{  arrayConRepetidos.push(i.pais)} )
    
    const arrayUnico = arrayConRepetidos.reduce((unicos, objeto) => {
    const existe = unicos.some(item => JSON.stringify(item) === JSON.stringify(objeto));
    if (!existe) {
    unicos.push(objeto);
    }
    return unicos;
    }, []);

    
   
    return(
      <>

      {seleccion.continente.length > 1 && seleccion.pais.length < 1? 
      <div className={paisesStyle.descubrecon}><h3>Qué País llama tu atencion?</h3></div> :
      seleccion.continente.length > 2 && seleccion.pais.length > 2 ? 
      <div className={paisesStyle.descubrecon}><h3>Descubre {seleccion.pais} con nosotros</h3></div>:
      <div className={paisesStyle.descubrecon}><h3>Algún destino en mente?</h3></div>
      }

      
      <div className={paisesStyle.riel}>
        {arrayUnico.map((pais, index)=>(
          <NavLink  onClick={()=>dispatch(addPais(pais))} key={pais + index}>
            <div className={paisesStyle.miniatura}>
              <div className={paisesStyle.info}>
                <p>{pais}</p>
              </div>
              <img title={pais} className={paisesStyle.fondoImagen} src={`https://desplora.com/medien/${pais}.jpg`}/>
              </div>
          </NavLink>
        ))}
      </div>
      <Ciudades/>
      </>
      

    )
  }

  export default Paises;