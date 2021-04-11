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

    return <div className="front parallax" style={{backgroundPositionY:this.state.offsetY, backgroundImage:"url(viewicons/parallax.gif)"}}>
       
        <div className="icon">
        
            <img
            id="back"
            src="viewicons/nodisk.png"
            alt="stackview"
            width="auto"
            height="auto"
        /><div className="front"><img
                id="f"
                src="viewicons/disk.png"
                alt="stackview"
                width="auto"
                height="auto"
                
            /></div>
            </div>
        <div className="stack">
            <div className="sv s"> St <div className="o"> a </div>ck</div>
            <div className="sv v"><div className="b">V</div>iew</div>
        </div>
        
        <div className="fdd">
            <div className="f"><a href="#">development</a></div>
            <div className="d"><a href="#">data management</a></div>
            <div className="m" ><a href="#">Engineering</a></div>
        </div>
    </div>
}
    


}

export default Front;