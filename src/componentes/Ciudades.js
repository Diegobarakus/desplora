//store
import { NavLink } from 'react-router-dom';

//store
import { useSelector, useDispatch } from "react-redux";
import { addCiudad, addId } from "../data/operaciones";
import ciudadesStyle from '../estilos/ciudadesStyle.module.css'




function Ciudades(){

        //Store
        const seleccion = useSelector((state) => state.counter.parametrosDeBusqueda);
        const dispatch = useDispatch();
    
        let nuevaLista = seleccion.contenido.filter(i => i.pais === seleccion.pais)
        let arrayConRepetidos = []
        nuevaLista.filter(i =>{  arrayConRepetidos.push(i)} )
 

        //array con todos los destinos
        let recomendados = seleccion.contenido.map((obj)=> obj)

        function setPamLink(pam1, pam2){
          dispatch(addId(pam1))
          dispatch(addCiudad(pam2))
        }

        return(
            <>

            {!seleccion.continente?
            
              <div className={ciudadesStyle.riel}>
              {recomendados.map((ciudad, index)=>(

                <NavLink to={`/destinos/${ciudad.id}`} onClick={()=>setPamLink(ciudad.id, ciudad.titulo)} className={ciudadesStyle.navlink} key={ ciudad.titulo + index}>
                  <div className={ciudadesStyle.miniaturarecomendados}>
                      <div className={ciudadesStyle.info}>
                        <p className={ciudadesStyle.titulo}>{ciudad.titulo}</p>
                        <p className={ciudadesStyle.region}>{ciudad.region}</p>
                      </div>
                      <img title={ciudad.titulo} loading='lazy' className={ciudadesStyle.fondoImagen} src={`https://desplora.com/medien/${ciudad.imagenPrincipal}.jpg`}/>
                  </div>
                </NavLink>
              ))}
            </div> : ""
          
          }



            {seleccion.pais?
            <div className={ciudadesStyle.hemosVisitado}><h3>Ciudades que hemos visitado en {seleccion.pais}</h3></div> : ""
          }


            <div className={ciudadesStyle.riel}>
            {arrayConRepetidos.map((ciudad, index)=>(
              <NavLink to={`/destinos/${ciudad.id}`} onClick={()=>setPamLink(ciudad.id, ciudad.titulo)} className={ciudadesStyle.navlink} key={ ciudad + index}>
                {}
                <div className={ciudadesStyle.miniatura}>
                    <div className={ciudadesStyle.info}>
                      <p className={ciudadesStyle.titulo}>{ciudad.titulo}</p>
                      <p className={ciudadesStyle.region}>{ciudad.region}</p>
                    </div>
                    <img title={ciudad.titulo} className={ciudadesStyle.fondoImagen} src={`https://desplora.com/medien/${ciudad.imagenPrincipal}.jpg`}/>
                </div>
              </NavLink>
            ))}
          </div>
          </>
          
    
        )
}

export default Ciudades;