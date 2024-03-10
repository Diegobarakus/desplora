import header from '../estilos/Header.module.css'
import { Link, NavLink } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { FaSearchLocation } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { addBusqueda } from "../data/operaciones";
import index from '../estilos/index.css'

import { useState } from 'react';



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



    return (<div className={header.headerContainer}>
      <div className={header.header}>
        
        <NavLink className={header.logo} to="/">
          <img className={header.logoIMG} src={`https://desplora.com/medien/LOGO_DESPLORA.png`}/>
        </NavLink>
        
        <ul>

          
        {paginasPrincipales.map((page, index)=>(

            <NavLink 

              key={index}
            
              className={({ isActive }) =>{
                return isActive? 'isactive' : 'noActive'
              }}

              to={page.url}><li key={index}>{page.name}</li>
            
            </NavLink>

            ))}
        </ul>

        <div className={header.busqueda} >
          <Link to="/busqueda">
          <input onChange={handleChange} type='text' />
          </Link>

          {menuDesplegableAbierto ? (
            <IoClose size="2.5rem" className={header.menuMobil} onClick={handleClick}/>
            ) : (
              <TiThMenu size="2.5rem" className={header.menuMobil} onClick={handleClick} />
            )
          }

          <Link className={header.contBusquedaIcon} to="/busqueda">
          <FaSearchLocation className={header.btnBusqueda} size="2.5rem" />
          </Link>
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

            onClick={handleClick} to={page.url}><li key={index}>{page.name}</li>
            
            </NavLink>
            ))}
        </ul>
      </div>
      </div>
    )
  }

export default Header;