
import { useSelector } from "react-redux";
//import { addCiudad, addContenido, addContinente, addId, addPais } from "../data/operaciones";
import { MdEuroSymbol } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";






import tuDestino from '../estilos/tuDestino.module.css'
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";



function TuDestino(){

    const seleccion = useSelector((state) => state.counter.parametrosDeBusqueda);

    const { pathPais } = useParams();
    let nuevaLista = seleccion.contenido.filter( item => item.id == parseInt(pathPais) )
    let dame = nuevaLista[0]
    let TasaDeCambioEuro = 0.00024;



    return(

        

        <div >

            {seleccion.contenido.length < 1 ? "Loading" : 
            
            <>

            <Helmet>
                <title>{dame.titulo}</title>
                <meta name="description" content={dame.SEOdescripcion} />
                <link rel="canonical" href={dame.id}/>
            </Helmet>


        <div className={tuDestino.portada}>
            <h1>{dame.titulo}</h1>

            <div className={tuDestino.infoCiudad}>
                <p>{dame.pais}</p>
                <p>{dame.region}</p>
                <p>{dame.divisa}</p>
            </div>

            <img title={dame.titulo} alt={dame.titulo + " con desplora"} src={`https://desplora.com/medien/${dame.imagenPrincipal}.jpg`}/>
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

                <p>{item}</p> : <img loading="lazy" alt={item + "_" + index} src={`https://desplora.com/medien/${item}.jpg`} />
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
                <p key={`alojamiento_${index}`}>< FaCheckCircle /> {item}</p>
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
</>
            
            
            }

    </div>
        



            
    )
}

export default TuDestino;
