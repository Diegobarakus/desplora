//importar lista de destinos
import ListaContinentes from '../componentes/ListaContinentes'
import {Helmet} from "react-helmet-async";

function Destinos(){


    return(

            <div>
                <Helmet>
                <title>destinos</title>
                <meta name="description" content="elije entre varios destinos para visitar en todo el mundo. Viajar a algún lugar de forma segura y barata" />
                <link rel="canonical" href="/destinos"/>
                </Helmet>

            <ListaContinentes /> <br/><br/>
            </div>

    )
}

export default Destinos;