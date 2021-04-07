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
          <a href="#" className="sv"> we are engineers</a>
          
          <div className="icons">
          <img
            id="a"
            alt="stackview"
            src="/icons/a.png"
            width=""
        />
        <img
            id="b"
            src="/icons/b.png"
            alt="stackview"
            width=""
        />
        <img
            id="c"
            src="/icons/c.png"
            alt="stackview"
            width=""
        />
        <img
            id="d"
            alt="stackview"
            src="/icons/e.png"
            width=""
        />
        <img
            id="f"
            src="/icons/d.png"
            alt="stackview"
            width=""
        />
        <img
            id="icon"
            src="/icons/icon.png"
            alt="stackview"
            height="auto"
        />
      
      </div>
      <div className="text">Praticamos engenharia de software, seja com foco em design, gestão de dados automação e controle de processos</div>   
  </div>;
    }
  }

export default First