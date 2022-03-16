import React, {useState, useEffect, useRef} from 'react'

export const useFetch = (url) => {
    //uso useRef para evitar el error: unmounted component 
    const estaMontado = useRef(true);
    
    useEffect( () => {
        return() => {
            estaMontado.current = false;
        }
    },[])

    const [estado, setEstado] = useState({data: null, cargando: true, error: null});

    useEffect(() => {
        setEstado({data: null, cargando: true, error: null});
        fetch( url )
            .then( resp => resp.json())
            .then( data => {
                // setTimeout( () => {
                    if(estaMontado.current) {

                       setEstado({
                            cargando: false,
                            error: null,
                            data
                        });
                    } else {
                        console.log('No se llamó al setEstado');
                    }
                // }, 10); //el delay  puede hacer fallar la prueba si >= 1000

            })
            .catch( () => {
                setEstado({
                    cargando: false,
                    error: 'No se pudo cargar la data',
                    data: null
                });
            })
    }, [url])

    return estado;
}
