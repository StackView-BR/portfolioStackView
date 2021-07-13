import React, {useEffect, useState} from 'react';

class Portfolio extends React.Component {

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

    return <div className="portfolio">
       
    </div>
}
    


}

export default Portfolio;