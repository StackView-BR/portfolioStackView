import React, {useEffect, useState} from 'react';

class Front extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offsetY:"0",    
    
        };    
        this.handleScroll = this.handleScroll.bind(this);    
      }
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
      handleScroll(event) {
        
        this.setState({
            offsetY: window.pageYOffset*0.5 +"px",
        });
    
      };

render(){

    return <div className="front parallax" style={{backgroundPositionY:this.state.offsetY}}>
       
        <div className="icon">
        
            <img
            id="back"
            src="/nodisk.png"
            width="auto"
        /><div className="front"><img
                id="f"
                src="/disk.png"
                width="auto"
                
            /></div>
            </div>
        <div className="stack">
            <div className="sv s"> St <div className="o"> a </div>ck</div>
            <div className="sv v"><div className="b">V</div>iew</div>
        </div>
        
        <div className="fdd">
            <div className="f"><a>full stack</a></div>
            <div className="d"><a>design</a></div>
            <div className="m" ><a>Engineering</a></div>
        </div>
    </div>
}
    


}

export default Front;