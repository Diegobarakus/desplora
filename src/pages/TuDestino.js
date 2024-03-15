
import { useSelector } from "react-redux";
import { useEffect } from "react";

//import { addCiudad, addContenido, addContinente, addId, addPais } from "../data/operaciones";
import { MdEuroSymbol } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";


//componentes
import RecomendadosMiniatura from '../componentes/RecomendadosMiniatura'



import tuDestino from '../estilos/tuDestino.module.css'
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";


const api = {
    key: "5dacebda923867b354d05ddbec3a63fd",
    base: "https://api.openweathermap.org/data/2.5/",
}


function TuDestino(){

    const [clima, setClima] = useState(undefined);
    const [horaActual, setHoraActual] = useState(undefined);


    const seleccion = useSelector((state) => state.counter.parametrosDeBusqueda);

    const { pathPais } = useParams();
    let nuevaLista = seleccion.contenido.filter( item => item.id == parseInt(pathPais) )
    let dame = nuevaLista[0]
    let TasaDeCambioEuro = 0.00024;

    

    //API Climatologica
    const fetchData = async () => {
        try {
          const response = await fetch(`${api.base}weather?q=${dame.GeoZona}&units=metric&APPID=${api.key}`);
          if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.status}`);
          }
          const weatherData = await response.json();
          setClima(weatherData);
        } catch (error) {
          console.log('Error fetching weather data:', error);
          // Handle the error here (e.g., display an error message to the user)
        }
      };
    

        useEffect(() => {
            fetchData();
          }, [pathPais]);

       


/** 
    //API zona horaria
    useEffect(() => {
        async function fetchTime() {
            try {
              const response = await fetch(`http://worldtimeapi.org/api/timezone/${dame.ZonaHoraria}`);
              if (!response.ok) {
                throw new Error(`Error fetching time data: ${response.status}`);
              }
              const data = await response.json();
              setHoraActual(data.datetime[11] + data.datetime[12] + data.datetime[13] + data.datetime[14] + data.datetime[15]);
              console.log(data.main.temp);
            } catch (error) {
              console.error('Error fetching time data:', error);
            }
          }
      
          fetchTime();

          setTimeout( fetchTime ,5000);
      }, []);

*/    




      


    return(

        

        <div className={`${seleccion.modus ? tuDestino.light : tuDestino.dark}`}>

            

            {seleccion.contenido.length < 1 ? "Loading" : 
            
            <div>

            <RecomendadosMiniatura paisActual={dame.titulo}/>

            <Helmet>
                <title>{dame.titulo}</title>
                <meta name="description" content={dame.SEOdescripcion} />
                <link rel="canonical" href={dame.id}/>
            </Helmet>


        <div className={tuDestino.portada}>

            {/*Aqui se llama el clima del lugar*/}

            {clima?

            <div className={tuDestino.clima}>
                <>
                {clima ? <> <img className={tuDestino.climaIcon} src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}/>
                <p>{clima.main.temp}° C</p> </> : ""}
                {horaActual ? <p>Hora: {horaActual}</p> : ""}
                </>
            </div> : ""

            }
            
            

        
            <h1>{dame.titulo}</h1>

            <div className={tuDestino.infoCiudad}>
                <p>{dame.pais}</p>
                <p>{dame.region}</p>
                <p>{dame.divisa}</p>
            </div>

            <img className={tuDestino.portadaIMG} title={dame.titulo} alt={dame.titulo + " con desplora"} src={`https://desplora.com/medien/${dame.imagenPrincipal}.jpg`}/>

        </div>
            <div className={tuDestino.galeria}>
        {
            //creacion de la galeria
            dame.galeria.map( (item, index) => (
                <img title={item} loading="lazy" alt={item + " " + index} key={dame.titulo + " _ " + index} src={`https://desplora.com/medien/${item}.jpg`} />
            ))
        }       

        </div>         
        <br/>
        <div className={tuDestino.textoPrincipal}>
            {//iterar en el texto
            
            dame.texto.map( (item, index) => (
                item.length > 25 ?

                <p>{item}</p> : <img title={item} loading="lazy" alt={item + "_" + dame.titulo} src={`https://desplora.com/medien/${item}.jpg`} />
            ))}
        </div>
        <br/><br/>

        {/* Seccion de alojamiento con galeria */}

        <h3 className={tuDestino.alojamientoTitulo}>< FaHouseChimneyWindow className={tuDestino.iconStandard} />Alojamiento</h3>
        <br/>
        <div className={tuDestino.textoPrincipal}>{
            dame.Alojamiento.map( (item, index) => (
                <p>{item}</p>
            ))
            }
            </div>

            {dame.Fotosalojamiento.length > 0 ?
            <div className={tuDestino.galeria}>
        {dame.Fotosalojamiento ?
            //creacion de la galeria
            dame.Fotosalojamiento.map( (item, index) => (
                <img title={item} loading="lazy" alt={item + " " + index} key={dame.titulo + "_Alojamiento" + item} src={`https://desplora.com/medien/${item}.jpg`} />
            )) : ""
        }       

        </div> : " "}



        <br/><br/>
        <h3 className={tuDestino.recomendacionesTitulo}><HiMiniInformationCircle size={23} className={tuDestino.iconStandard} /> Recomendaciones</h3>
        <br/>
        <div className={tuDestino.textoPrincipal}>{
            dame.recomendaciones.map( (item, index) => (
                <p key={`alojamiento_${index}`}>< FaCheckCircle className={tuDestino.iconStandard} /> {item}</p>
            ))
            }
        </div>
        <br/>
        <br/>
        <h3 className={tuDestino.recomendacionesTitulo}><FaClipboardList className={tuDestino.iconStandard} />Cosas para hacer</h3>
        <br/>
        <div className={tuDestino.paHacer}>
            {dame.ToDo.length > 0 ?

            dame.ToDo.map((item, index) => (
                //elemento con informacion
                <div className={tuDestino.contenedorPrincipal}>
                <div className={tuDestino.contenedorFlex} key={index + item.titulo} >
                    
                    <div className={tuDestino.paHacerImagen}>
                        <img title={item.titulo +  " en " + dame.titulo} alt={item.titulo + " en " + dame.titulo} loading="lazy" src={`https://desplora.com/medien/${item.imagen}.jpg`}/>
                    </div>
                    <div className={tuDestino.paHacerInfo}>
                        <h4>{item.titulo}</h4>
                        <p className={tuDestino.paHacerTexto}>{item.texto}</p>
                        <p className={tuDestino.paHacerPrecio}><span className={tuDestino.divisa}>{item.precio} COP</span> <span className={tuDestino.divisa}>{item.precio * TasaDeCambioEuro} <MdEuroSymbol size={14} /></span></p>
                    </div>
                </div>
                    <div className={tuDestino.paHacerContacto}>
                        <p>{item.contacto.nombre}</p>
                        <p>{item.contacto.direccion}</p>
                        <a className={tuDestino.webBtn} href={item.contacto.web} >WEB</a>
                    </div>
                </div>
            )) : " "
            }
        </div>
        <br/><br/><br/>
        <p className={tuDestino.publicado}>publicado con <FaHeart className={tuDestino.corazon} /> el {dame.fechaPublicacion}</p>
</div>
            
            
            }

    </div>
        



            
    )
}

export default TuDestino;
