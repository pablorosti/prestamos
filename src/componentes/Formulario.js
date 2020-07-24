import React from 'react';

function Formulario({cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal, guardarCargando}){

    //funciones para interactuar con el formulario
    //Lee la cantidad del prestamo
    function leerCantidad(e){
        guardarCantidad(parseInt(e.target.value));
    }
    //Lee la cantidad de meses de plazo
    function leerPlazo(e){
        guardarPlazo(parseInt(e.target.value));
    }
    //Cuando el usuario preciona el boton de enviar el formulario
    function calcularPrestamo(e){
        e.preventDefault();

        //Habilitar el spinner
        guardarCargando(true);

        setTimeout(()=>{
            //Calculamos el total del prestamo
            function calcular(cantidad, plazo){
                //Calcular la cantidad
                let resultado;
                if(cantidad <=1000){
                    resultado =  cantidad * .25;
                }else if(cantidad > 1000 && cantidad <= 5000){
                    resultado = cantidad * .20;
                }
                else if(cantidad > 5000 && cantidad <= 10000){
                    resultado = cantidad * .15;
                }
                else if(cantidad > 10000){
                    resultado = cantidad * .10;
                }
                //Calcular el plazo
                let totalPlazo = 0;
                if(plazo === 3){
                    totalPlazo = cantidad * .05;
                }else if(plazo === 6){
                    totalPlazo = cantidad * .10;
                }else if(plazo === 12){
                    totalPlazo = cantidad * 15;
                }else if(plazo === 24){
                    totalPlazo = cantidad * .20;
                }
                
                return totalPlazo  + resultado + cantidad;
                
            }
            const total = calcular(cantidad, plazo);
            guardarTotal(total);

            //Desabilitar el spinner
            guardarCargando(false);
        }, 2900);
        
    }




    return(
        <div >
            <form className="formulario centrar" onSubmit={calcularPrestamo}>
                <div>
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input className="" type="number" placeholder="Ejemplo: 3000" required onChange={leerCantidad}/>
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select onChange={leerPlazo} required>
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="Calcular" className="boton" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Formulario;