//import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';


//componentes
import Header from './componentes/Header'
import Home from './componentes/Home'
import Style from './Style.module.css'
import TuDestino from './pages/TuDestino'
import FoquitaNavega from './componentes/BarraNavegar'
import Footer from './componentes/Footer'

//paginas
import Destinos from './pages/Destinos'
import Busqueda from './pages/Busqueda'

//store
import { useSelector, useDispatch } from "react-redux";
import { addContenido } from "./data/operaciones";

function AboutMe(){
  return(<>h</>)
}



function App() {

        const seleccion = useSelector((state) => state.counter.parametrosDeBusqueda);
        const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://diegobarakus.github.io/apiAlimantador/destinosLista.json');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const jsonData = await response.json();
        dispatch(addContenido(jsonData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  //console.log(seleccion.contenido)


  //Aqui se escriben las paginas principales para el header
  const arrPaginasPrincipales = [
    { name: "Home",
      url: "/",
      element: <Home/>
    },
    { name: "Destinos",
      url: "/destinos",
      element: <Destinos/>
    },
    { name: "Vida en Alemania",
      url: "/galeria",
      element: <Home/>
    },
    { name: "Sobre nosotros",
      url: "/nosotros",
      element: <AboutMe/>
    }
  ]

  return (
    
   <div className={Style.App}>
    <Header paginasPrincipales={arrPaginasPrincipales}/>
    <div className={Style.AppContent}>
      <FoquitaNavega/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/destinos' element={<Destinos/>} />
        <Route path='/destinos/:pathPais' element={<TuDestino/>}/>
        <Route path='/Projects' element={<Home/>} />
        <Route path='/busqueda' element={<Busqueda/>}/>

        <Route path='*' element={<h1>404 foquita no encuentra la pagina</h1>} />
    </Routes>
    </div>
    <Footer />
   </div>
  );
}

export default App;
