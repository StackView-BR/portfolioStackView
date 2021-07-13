import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';

class Devs extends React.Component {

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

    return <div className="devs">
       <div className="devsSide">
           <div className="devsCardImg">

           </div>
           <div className="devsMenu">
           <Button><a className="custom">About</a></Button>
           <Button><a className="custom">Resume</a></Button>
           <Button><a className="custom">Skills</a></Button>
           
           <Button><a className="custom">Download</a></Button>
           </div>
       </div>
       <div className="devsBody">

       </div>
    </div>
}
}

export default Devs;