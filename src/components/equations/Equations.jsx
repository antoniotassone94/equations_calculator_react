import {useState} from "react";
import PropTypes from "prop-types";
import ResponseModel from "../../interfaces/response";
import "./Equations.css";

Equations.propTypes = {
    setResponse:PropTypes.func
}

function Equations({setResponse}){
    function calculateEquation(event){
        event.preventDefault();
        const a = parseFloat(values.a);
        const b = parseFloat(values.b);
        const c = parseFloat(values.c);
        if(a === 0){
            const response = new ResponseModel();
            response.message = "The parameter named a is invalid.";
            response.check = false;
            setResponse(response);
        }else{
            const delta = (b * b) - (4 * a * c);
            if(delta < 0){
                const response = new ResponseModel();
                response.message = "The solutions don't exist in the real numbers.";
                response.check = false;
                setResponse(response);
            }else{
                const x1 = (-b + Math.sqrt(delta))/(2 * a);
                const x2 = (-b - Math.sqrt(delta))/(2 * a);
                if(x1 === x2){
                    const response = new ResponseModel();
                    response.message = "There is one solution: " + x1;
                    response.check = true;
                    setResponse(response);
                }else{
                    const response = new ResponseModel();
                    response.message = "There are two solutions: " + x1 + " " + x2;
                    response.check = true;
                    setResponse(response);
                }
            }
        }
    }

    function changeValues(event){
        const {name,value} = event.target;
        setValues({...values,[name]:value});
    }

    const [values,setValues] = useState({
        a:0,
        b:0,
        c:0
    });
    return (
        <div id="application-container">
            <form onSubmit={calculateEquation}>
                <label htmlFor="a">A:</label>
                <input type="number" name="a" id="a" value={values.a} onChange={changeValues}/>
                <label htmlFor="b">B:</label>
                <input type="number" name="b" id="b" value={values.b} onChange={changeValues}/>
                <label htmlFor="c">C:</label>
                <input type="number" name="c" id="c" value={values.c} onChange={changeValues}/>
                <input type="submit" value="Calculate" />
            </form>
        </div>
    );
}

export default Equations