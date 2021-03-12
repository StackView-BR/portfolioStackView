import React, {useEffect, useState} from 'react';

class First extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        

    };    
      this.myRef = React.createRef();

      this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
      handleScroll(event) {
    
        
        
      };
  
  
    render() {
      return <div className="fview" ref={this.myRef} >
          <a className="sv"> we are fullstack developers</a>
          <div className="icons"><img
            id="back"
            src="/icons/a.png"
            width=""
        />
        <img
            id="back"
            src="/icons/b.png"
            width=""
        />
        <img
            id="back"
            src="/icons/c.png"
            width=""
        />
        <img
            id="back"
            src="/icons/e.png"
            width=""
        />
        <img
            id="back"
            src="/icons/d.png"
            width=""
        />
      
      </div>
      <div className="text">Praticamos engenharia de software, seja com foco em 
design, gestão de dados automação e controle de processos</div>   
  </div>;
    }
  }

export default First