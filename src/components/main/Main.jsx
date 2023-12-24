import Equations from "../equations/Equations";
import Navbar from "../navbar/Navbar";
import "./Main.css";

function Main(){
    return (
        <div id="main-container">
            <Navbar></Navbar>
            <Equations></Equations>
        </div>
    );
}

export default Main