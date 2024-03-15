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
import Palmera from './componentes/moduloVisual'

//paginas
import Destinos from './pages/Destinos'
import Busqueda from './pages/Busqueda'
import PageNotFound from './pages/PageNotFound';
import VidaEnAlemania from './pages/VidaEnAlemania'
import SobreNosotros from './pages/SobreNosotros'

//store
import { useSelector, useDispatch } from "react-redux";
import { addContenido } from "./data/operaciones";

//icons
import { FaHome } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { GiPretzel } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";





function AboutMe(){
  return(<>h</>)
}



function App() {

        const seleccion = useSelector((state) => state.counter.parametrosDeBusqueda);
        const dispatch = useDispatch();
        const modus = seleccion.modus;

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
      icon: <FaHome size={20}/>
    },
    { name: "Destinos",
      url: "/destinos",
      icon: <MdOutlineTravelExplore size={20} />
    },
    { name: "Vida en Alemania",
      url: "/vidaenlemania",
      icon: <GiPretzel size={20} />
    },
    { name: "Sobre nosotros",
      url: "/sobrenosotros",
      icon: <FaHeart size={20} />
    }
  ]

  

  return (
    
   <div className={`${modus ? Style.App : Style.AppDark}`}>
    <Header paginasPrincipales={arrPaginasPrincipales}/>
    <Palmera/>
    <div className={Style.AppContent}>
      <FoquitaNavega/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/destinos' element={<Destinos/>} />
        <Route path='/destinos/:pathPais' element={<TuDestino/>}/>
        <Route path='/Projects' element={<Home/>} />
        <Route path='/busqueda' element={<Busqueda/>}/>
        <Route path='/vidaenlemania' element={<VidaEnAlemania/>} />
        <Route path='/sobrenosotros' element={<SobreNosotros/>} />

        <Route path='*' element={<PageNotFound />} />
    </Routes>
    </div>
    <Footer />

    
   </div>
  );
}

export default App;
