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
        alt="souzaSV"
        src="/clientes/bat.png"
        width="150vw"
        height="81.5vw"
        
    />
    <img
        className="ufu"
        alt="ufuSV"
        src="/clientes/ufu.png"
        width="90vw"
        height="90vw"
        
    />
        </div>
        <div className="blue"></div>

    </div>
}
    


}

export default Front;