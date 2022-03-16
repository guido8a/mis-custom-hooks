import { useState } from 'react';

export const useContador = (valorInicial = 10 ) => {
    const [estado, setEstado] = useState(valorInicial)

    const incrementa = (valor=1) => {
        setEstado( estado + valor );
    }
    const decrementa = (valor=1) => {
        setEstado( estado - valor );
    }
    const reiniciar = () => {
        setEstado( valorInicial );
    }

    return {
        estado, 
        incrementa,
        decrementa,
        reiniciar
    }
}