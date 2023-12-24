import {useState} from "react";
import "./Equations.css";

function Equations(){
    function calculateEquation(event){
        event.preventDefault();
        const a = parseFloat(values.a);
        const b = parseFloat(values.b);
        const c = parseFloat(values.c);
        if(a === 0){

            console.error("The parameter named a is invalid.");

        }else{
            const delta = (b * b) - (4 * a * c);
            if(delta < 0){

                console.error("The solutions don't exist in the real numbers.");

            }else{
                const x1 = (-b + Math.sqrt(delta))/(2 * a);
                const x2 = (-b - Math.sqrt(delta))/(2 * a);

                console.log(x1,x2);

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
                <input type="submit" value="Calculate now" />
            </form>
        </div>
    );
}

export default Equations