import React, {useEffect, useState} from 'react';
import Image from 'next/image'

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
        
            <Image
            id="back"
            src="/viewicons/nodisk.png"
            alt="stackview"
            layout="fill"
        /><div className="front"><Image
                id="f"
                src="/viewicons/disk.png"
                alt="stackview"
                layout="fill"
                
            /></div>
            </div>
        <div className="stack">
            <div className="sv s"> St <div className="o"> a </div>ck</div>
            <div className="sv v"><div className="b">V</div>iew</div>
        </div>
        
        <div className="fdd">
            <div className="f custom"><a href="#">development</a></div>
            <div className="d custom"><a href="#">data management</a></div>
            <div className="m custom" ><a href="#">Engineering</a></div>
        </div>
    </div>
}
    


}

export default Front;