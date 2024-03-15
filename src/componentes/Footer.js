import footerStyle from '../estilos/footer.module.css'

import { IoLogoInstagram } from "react-icons/io5";

function FooterPalmeras(){
    return (
        <div className={footerStyle.palmeras}>
            <div className={footerStyle.palmerasCont}>
                
            <img className={footerStyle.palmera1} src="https://desplora.com/medien/elementos_visuales/palmera.webp" />
            <img className={footerStyle.palmera2} src="https://desplora.com/medien/elementos_visuales/palmera.webp" />
            <img className={footerStyle.palmera3} src="https://desplora.com/medien/elementos_visuales/palmera.webp" />
            <img className={footerStyle.palmera4} src="https://desplora.com/medien/elementos_visuales/palmera.webp" />
            <img className={footerStyle.palmera5} src="https://desplora.com/medien/elementos_visuales/palmera.webp" />

            </div>
        </div>
    )                                                                                
}


function Footer(){

    return ( 
    <>

    <FooterPalmeras/>
    <footer className={footerStyle.element}>
                <div className={footerStyle.contenedorFlex} >
                <div className={footerStyle.contInfo}>

                </div>
                <div className={footerStyle.contInfo}>
                    <a href="https://www.instagram.com/desploraviajes/" target="_blank" rel="noreferrer"> 
                    <IoLogoInstagram title="Visita Desplora en Instagram" size={35} className={footerStyle.icono} />
                    </a>
                </div>
                </div>
                <div className={footerStyle.creators}>
                    <p>Web Design: Diego Calle</p>
                    <p>Redacción: Aida P.M.</p>
                    <br/>
                    <p>Desplora 2024</p>
                    <p>© Todos los derechos reservados</p>
                    <img src="https://desplora.com/medien/LOGO_DESPLORA.png"/>
                </div>
            </footer>
            </>
            )
}


export default Footer;