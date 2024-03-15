
import nosotros from '../estilos/nosotros.module.css';



function SobreNosotros() {
    return (
        <div>
        
        <div className={nosotros.portada}>

            <h1>Quienes somos nosotros</h1>
            <img title="vivir en Alemania" alt="vivir en Alemania" src="https://desplora.com/medien/Aida_y_Diego.jpg"/>
        </div>

        <p className={nosotros.textoPrincipal}>Nos encanta viajar</p>
      

    </div>
    );
}


export default SobreNosotros;   