import React from 'react';

function Resultado({total, plazo, cantidad}){
    return(
        <div className="centrar">
            <h2>Resumen</h2>
            <p>Cantidad solicitada: ${cantidad}</p>
            <p>Plazo: {plazo} meses</p>
            <p>El total a pagar es de ${(total).toFixed(2)}</p>
        </div>
    )
}

export default Resultado;