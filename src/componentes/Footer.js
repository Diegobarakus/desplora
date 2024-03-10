import footerStyle from '../estilos/footer.module.css'

function Footer(){
    return ( <footer className={footerStyle.element}>
                <div className={footerStyle.contenedorFlex} >
                <div className={footerStyle.contInfo}>

                </div>
                <div className={footerStyle.contInfo}>
                    
                </div>
                </div>
                <div className={footerStyle.creators}>
                    <p>Web Design: Diego Calle</p>
                    <p>Redacción: Aida</p>
                    <br/>
                    <p>desplora 2024</p>
                    <p>© Todos los derechos reservados</p>
                </div>
            </footer>)
}


export default Footer;