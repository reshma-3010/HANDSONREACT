import './Compo.css';

import React from 'react';

class ClassComponent extends React.Component{
    constructor()
    {
        super();
        this.state={show:false};
    }
    render(){
        return(
            <div>
                <button onClick={()=>{this.setState({show:!this.state.show})}} className="btn2">To see styling in class component</button>
                {
                    this.state.show?
                
                        <div className ="box2">
                       <h1>This is created using class Component</h1>
                       <p className="extern">This is done using external CSS</p>
                       <p style={{color:"blue",fontSize:"20px"}}>This is done using inline CSS</p>
                       </div>:null

                    
                }
                

            </div>
        );
    }
}
export default ClassComponent;