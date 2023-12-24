import {useState} from "react";
import Equations from "../equations/Equations";
import Navbar from "../navbar/Navbar";
import ResponseModel from "../../interfaces/response";
import "./Main.css";

function Main(){
    const [response,setResponse] = useState(new ResponseModel());

    return (
        <div id="main-container">
            <Navbar></Navbar>
            <Equations setResponse={setResponse}></Equations>
            <div id="message">
                {(response.check !== undefined) ? ( (response.check === true) ? <div className="success">{response.message}</div> : <div className="error">{response.message}</div> ) : "" }
            </div>
        </div>
    );
}

export default Main