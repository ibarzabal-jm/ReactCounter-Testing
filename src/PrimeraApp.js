import React from "react";
import PropTypes from 'prop-types';


const PrimeraApp = ( { saludo, subtitulo } ) => {

   
    return(
        <>
            <h1> { saludo } !!!</h1>
           
            <h3>{subtitulo}</h3>
            <p>Mi primera aplicación</p>
        </> 
    );

};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo',
}



export default PrimeraApp;
