import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useCallback } from "react";
import './App.css';

//Dumb Components
import Button from './components/CalculatorButton';
import Display from './components/CalculatetorDisplay';


const CalculatorContext = React.createContext();

const App = () => {
  const [input, setInput] = useState("");

  // Callback to handle the click events of the buttons
  const handleClick = useCallback(
    (value) => {
      switch (value) {
        case "C":
          setInput("");
          break;
        case "=":

          if(input.length>0){
            if(!(['+','-','*','/','.'].includes(input.slice(-1))) ){
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
                );
            }
          }

          break;
        case "del":
            if(input.length>0){
              setInput(input.substr(0, input.length - 1))
            }
           
            break;
        case "%":

          if(input.length>0){
            if(!(['+','-','*','/','.'].includes(input.slice(-1))) ){
              setInput(eval(input)/100)
            }
          }

          break;

        case "±":

          if(input.length>0){
            if(!(['+','-','*','/','.'].includes(input.slice(-1))) ){
              setInput(eval(input)*-1)
            }
          }

          break;
          
        default:
            setInput(input + value);
          break;
      }
    },
    [input]
  );

  return (
    <CalculatorContext.Provider value={{ input }}>

      <div id="calculator-content" className="card my-5 rounded-top">
        
        <div className="card-body p-0">
          
          <div className="d-flex flex-column">
            <Display CalculatorContext = {CalculatorContext} input = {input}/>
          </div>
          
          
          <div id="sec1" className="d-flex flex-row">
            <Button value="C" onClick={() => handleClick("C")} />
            <Button value="del" onClick={() => handleClick("del")} />
            <Button value="±" onClick={() => handleClick("±")} />
            <Button className="btn-warning text-light" value="/" onClick={() => handleClick("/")} />
          </div>
          <div id="sec2" className="d-flex flex-row">
            <Button value="1" onClick={() => handleClick("1")} />
            <Button value="2" onClick={() => handleClick("2")} />
            <Button value="3" onClick={() => handleClick("3")} />
            <Button className="btn-warning text-light" value="*" onClick={() => handleClick("*")} />
          </div>
          <div id="sec3" className="d-flex flex-row">
            <Button value="4" onClick={() => handleClick("4")} />
            <Button value="5" onClick={() => handleClick("5")} />
            <Button value="6" onClick={() => handleClick("6")} />
            <Button className="btn-warning text-light" value="-" onClick={() => handleClick("-")} />
          </div>
          <div id="sec4" className="d-flex flex-row">
            <Button value="7" onClick={() => handleClick("7")} />
            <Button value="8" onClick={() => handleClick("8")} />
            <Button value="9" onClick={() => handleClick("9")} />
            <Button className="btn-warning text-light" value="+" onClick={() => handleClick("+")} />
          </div>

          <div id="sec5" className="d-flex flex-row">
            <Button value="0" onClick={() => handleClick("0")} />
            <Button value="." onClick={() => handleClick(".")} />
            <Button value="%" onClick={() => handleClick("%")} />
            <Button className="btn-warning text-light" value="=" onClick={() => handleClick("=")} />
          </div>

        </div>

      </div>

     
  
      
     
    </CalculatorContext.Provider>
  );
};

export default App;