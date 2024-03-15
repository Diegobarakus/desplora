import Page404Style from  '../estilos/Page404Style.module.css'
import { Link, useParams } from "react-router-dom";

//icons
import { FaHome } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { GiPretzel } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";


function PageNotFound(){

    const { pathPais } = useParams();

    return (
        <div className={Page404Style.content}>
        
        <h1>404</h1>
        <div className={Page404Style.gif} >
        </div>
        <h4>¡Tranquilo, navegante! No has perdido el norte ni tu brújula digital.</h4>
        <br/>
        <h5>La Pagina {pathPais} todavía está en construcción, pero no te preocupes, ¡pronto estará lista para zarpar!</h5>
        <br/>
        <h5>Mientras tanto, puedes:</h5>
        <br/>
        <ul>
            <Link to="/"><li> <FaHome size={20}/> <p>Volver a la página principal</p></li></Link>
            <Link to="/destinos"><li> <MdOutlineTravelExplore size={20} /><p>Buscar un destino</p></li></Link>
            <Link to="https://www.instagram.com/desploraviajes/" target='_blank'>
                <li><IoLogoInstagram size={20} /><p>Seguirnos en nuestras redes</p></li></Link>
        </ul>
        <img src="https://desplora.com/medien/LOGO_DESPLORA.png"/>
        </div>

    )
}

export default PageNotFound;