import { Helmet } from "react-helmet-async";
import vidaenlemania from '../estilos/vidaenlemania.module.css'


function VidaEnAlemania() {



    <Helmet>
        <title>vivir en Alemania</title>
        <meta name="description" content="como vivir en alemania" />
        <link rel="canonical" href="/vidaenlemania"/>
    </Helmet>


  return (

    
    
    <div>


          



        
        <div className={vidaenlemania.portada}>

            <h1>Vida en Alemania</h1>
            <img title="vivir en Alemania" alt="vivir en Alemania" src="https://desplora.com/medien/vivir_en_alemania.jpg"/>
        </div>

        <p className={vidaenlemania.textoPrincipal}>Te has planteado en algún momento venir a vivir a
             Alemania, aquí te contamos todo lo que debes saber
             Antes de empacar tus maletas.</p>
      

    </div>
  );
}

export default VidaEnAlemania;