import React, {useEffect, useState} from 'react';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {    
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
        });
    
      };

render(){
    return <div className="divAbout">
       
    </div>
}
    


}

export default About;