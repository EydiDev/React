import React from "react";
import {Car , Motors , Jet} from "./Cars"


class App extends React.Component{
    render(){
        return (
            <>
            <h1>my cars</h1>
            <Car model = "benz" color =  "black" />
            <Car model = "bmw" color =  "red" />
            <Car model = "dodge" color =  "like sky" />
            <Motors mod = "suzuki" col="yellow"/>
            <Motors mod = "apache" col ="green" speed ={250} />
            <Jet />
            </>
        )
    }
}


export default App;