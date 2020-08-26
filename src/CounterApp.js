import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) =>{

    const [ counter, setCounter ] = useState(value); // retorna un arreglo
    


    //handleAdd paso como referencia la funcion
    const handleAdd = ()=>{
        setCounter( counter +1 );
        // setCounter( (c) => c + 1);
    } 
    const handleSub = ()=>{
        setCounter( counter -1 );
       
    }
    const handleReset = () =>{
        setCounter(value);
    }


    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            {/* <button onClick={ (e) => {console.log(e)} }> +1 </button>
            <button onClick={ (e) => handleAdd(e) }> +1 </button> */}
            <button onClick={ handleSub }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleAdd }> +1 </button>
        </>
    )

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 10,
}

export default CounterApp;


