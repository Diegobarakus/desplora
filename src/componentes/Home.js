import React, {useState} from 'react';
import home from '../estilos/home.module.css';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { addCiudad, addId } from "../data/operaciones";
import { FaPlaneDeparture } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";


function Home(){

  const seleccion = useSelector((state) => state.counter.parametrosDeBusqueda);
  const dispatch = useDispatch();


  let recomendados = seleccion.contenido.map((obj)=> obj)

        function setPamLink(pam1, pam2){
          dispatch(addId(pam1))
          dispatch(addCiudad(pam2))
        }

    return (
      <>

            <Helmet>
                <title>desplora</title>
                <meta name="description" content="Blog de viajes con Informacion actualizada para viajar a destinos en todo el mundo de forma segura y economica" />
                <link rel="canonical" href="https://desplora.com/"/>
            </Helmet>

      <div className={home.portada}>
      <h1 className={home.tituloPrincipal}>DES<span style={{opacity: "0.4"}}>CUBRE & EX</span>PLORA</h1>
      <h2>Te contamos todo sobre tu próximo destino</h2>
      <img title='portada desplora.com' alt='Avion para volar con desplorando' src="https://desplora.com/medien/desplora portada.jpg" className={home.fondoImagenPortada}/>
      </div>

      <div className={`${seleccion.modus ? home.contenido : home.contenidoDark}`}>
      <p> Viajar es una actividad enriquecedora y emocionante y si planeas bien tus viajes, podrás disfrutarlos al máximo. <br/>
      En Desplora te contamos todo sobre tu próximo destino, desde los mejores lugares para visitar, hasta los mejores precios en alojamiento y transporte.
      <br/>
      <br/>
      Si tienes un destino en mente, puedes buscarlo en la barra de navegación o si no sabes a donde ir, te recomendamos algunos destinos que te podrían interesar.   
      </p>
      </div>

      <h3 className={`${seleccion.modus ? home.tituloIcono : home.tituloIconoDark}`}><FaPlaneDeparture className={home.iconStandard} /> Destinos que te podrian interesar</h3>
      <br/>

      {!seleccion.continente?
            
            <div className={home.riel}>
            {recomendados.map((ciudad, index)=>(

              <NavLink to={`/destinos/${ciudad.id}`} onClick={()=>setPamLink(ciudad.id, ciudad.titulo)} className={home.navlink} key={ ciudad.titulo + index}>
                <div className={home.miniaturaHome}>
                    <div className={home.info}>
                      <p className={home.titulo}>{ciudad.titulo}</p>
                      <p className={home.pais}>{ciudad.pais}</p>
                    </div>
                    <img title={`Quieres saber más sobre ${ciudad.titulo}?`} loading='lazy' className={home.fondoImagen} src={`https://desplora.com/medien/${ciudad.imagenPrincipal}.jpg`}/>
                </div>
              </NavLink>
            ))}
          </div> : "nada por aqui"
        
        }



      </>
    )
  }

  export default Home;