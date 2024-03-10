import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    parametrosDeBusqueda: {
        continente: "",
        pais: "",
        ciudad: "",
        id:"",
        busquedaActual: "",
        contenido: [],
    }
}

export const busquedaSlice = createSlice({
    name: 'busqueda',
    initialState,
    reducers: {
        // luego esto puede ser setContinente
        addContinente: (state, action) => {
            state.parametrosDeBusqueda.continente = action.payload
        },
        addPais: (state, action) => {
            state.parametrosDeBusqueda.pais = action.payload
        },
        addCiudad: (state, action) => {
            state.parametrosDeBusqueda.ciudad = action.payload
        },
        addId: (state, action) => {
            state.parametrosDeBusqueda.id = action.payload
        },
        addBusqueda: (state, action) => {
            state.parametrosDeBusqueda.busquedaActual = action.payload
        },
        addContenido: (state, action) => {
            state.parametrosDeBusqueda.contenido = action.payload
        },

    }
})

export const { addContinente, addPais, addCiudad, addId, addBusqueda, addContenido } = busquedaSlice.actions;
export default busquedaSlice.reducer;