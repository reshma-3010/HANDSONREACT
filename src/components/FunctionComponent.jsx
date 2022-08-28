import React from 'react';
import './Compo.css';
import {useState} from 'react';

function FunctionComponent(){
    const [isShown,setHidden] = useState(false);
    return(
        <div>
        <button onClick={() => setHidden(s=>!s)} className="btn1">To see styling in functional component</button>
        {
            
            isShown?
            <div className ="box1">
            <h1>This is created using functional Component</h1>
            <p className="extern">This is done using external CSS</p>
            <p style={{color:"blue",fontSize:"20px"}}>This is done using inline CSS</p>
            </div>:null
        }
        </div>
        
    );
}

export default FunctionComponent;