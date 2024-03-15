import header from '../estilos/Header.module.css'
import { Link, NavLink } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { FaSearchLocation } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { addBusqueda, changeModus } from "../data/operaciones";
import index from '../estilos/index.css'

import { useState } from 'react';

import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { WiStars } from "react-icons/wi";
import { FaCloud } from "react-icons/fa";








function Header({paginasPrincipales}){
  const [menuDesplegableAbierto, setMenuDesplegableAbierto] = useState(false);

  const handleClick = () => {
    setMenuDesplegableAbierto(!menuDesplegableAbierto);
    const menuDesplegable = document.getElementById("menuDesplegableID");
    if (menuDesplegableAbierto) {
      menuDesplegable.style.transform = "translateY(-105%)";
    } else {
      menuDesplegable.style.transform = "translateY(0)";
    }
  };


    const seleccion = useSelector((state) => state.counter.parametrosDeBusqueda);
    const dispatch = useDispatch();

    

     const handleChange = (e) => {
      dispatch(addBusqueda(e.target.value))
    };

    //Dark mode
    const handelModus = () => {
      dispatch(changeModus())
    }


    return (<div className={header.headerContainer}>
      <div className={header.header}>
        <NavLink className={header.logo} to="/">
          <img alt='logo desplora.com' className={header.logoIMG} src={`https://desplora.com/medien/LOGO_DESPLORA.png`}/>
        </NavLink>
        
        <ul className={header.menuelista}>

          
        {paginasPrincipales.map((page, index)=>(

            <NavLink 

              key={index}
            
              className={({ isActive }) =>{
                return isActive? 'isactive' : 'noActive'
              }}

              to={page.url}><li key={index}>{page.icon} <p>{page.name}</p></li>
            
            </NavLink>

            ))}
        </ul>
          
        <div className={header.busqueda} >
          {/*<Link to="/busqueda">
          <input onChange={handleChange} type='text' />
            </Link>*/}

          {menuDesplegableAbierto ? (
            <IoClose size="2.5rem" className={header.menuMobil} onClick={handleClick}/>
            ) : (
              <TiThMenu size="2.5rem" className={header.menuMobil} onClick={handleClick} />
            )
          }

          {/*<Link className={header.contBusquedaIcon} to="/busqueda">
          <FaSearchLocation className={header.btnBusqueda} size="2.5rem" />
        </Link>*/}

            <div className={`${seleccion.modus ? header.darkmodeLight : header.darkmodeDark}`} onClick={handelModus}>
              <div className={`${seleccion.modus ? header.darkmodeCircleLight : header.darkmodeCircleDark}`}>
              {seleccion.modus ? <IoSunnySharp /> : <FaMoon />}
              </div>
              {seleccion.modus ?  <FaCloud size={20} className={header.cloud} /> : <WiStars size={30} className={header.stars}/>}
            </div>

            
        </div>
      </div>
      <div id='menuDesplegableID' className={header.menuDesplegable} >
      <ul>
        {paginasPrincipales.map((page, index)=>(
            <NavLink 

            key={index + 20}
            
            className={({ isActive }) =>{
              return isActive? 'isactive' : undefined
            }}

            onClick={handleClick} to={page.url}><li key={index}>{page.icon} <p>{page.name}</p></li>
            
            </NavLink>
            ))}
            
        </ul>
      </div>
      </div>
    )
  }

export default Header;