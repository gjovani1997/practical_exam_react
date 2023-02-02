import React, {useState, useEffect, useContext} from "react";
const Display = (props) => {
    const { input } = useContext(props.CalculatorContext);

    const [fontSize, setFontSize] = useState(19);
    let max_f_size = 30;
    let container_size = 1000;

    useEffect(() => {
        const scale = container_size / input.length;
        setFontSize(Math.min(scale, max_f_size));
    }, [container_size, input, max_f_size]);

    return (
      <div style={{ fontSize: `${Math.max(fontSize, 5)}px` }} className="cal-display rounded-top px-2 pt-3">
        
        <p>{input}</p>
      </div>
    );
};


export default Display