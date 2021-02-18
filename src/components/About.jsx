import React, { useState } from "react";

function About(props) {
    const [controller, setController] = useState(false);
    const [text, setText] = useState(" ...view more");

    function handleClick(){
        if (controller === false){
            setController(true);
            setText(" view less");
        } else {
            setController(false);
            setText(" ...view more");
        }
    };

    return (
        <div>
            <span className="aboutParagraph" >
            {props.about.length < 170 ? props.about : props.about.substring(0, 170) + ""}
            {controller ? props.about.substring(170) : null}
            {props.about.length > 170 ? <span onClick={handleClick} style={{color: "#fb743e"}}><b>{text}</b></span> : null}
            </span>
        </div>
    )
};

export default About;
