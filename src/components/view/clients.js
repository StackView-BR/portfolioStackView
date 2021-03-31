import React from 'react';

class Front extends React.Component {

    constructor(props) {
        super(props);
        
          
      }
     

render(){

    return <div className="clientes" style={{}}>
        <div className="orange"></div>
        
        <div className="clogo">
        <sup href="" className="sv">TRUSTED BY</sup>
        <img
        className="bat"
        src="/clientes/bat.png"
        width="150vw"
        
    />
    <img
        className="ufu"
        src="/clientes/ufu.png"
        width="90vw"
        
    />
        </div>
        <div className="blue"></div>

    </div>
}
    


}

export default Front;