import React, {useEffect, useState} from 'react';

class View extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility:"noshow", 
        tv:"notv",
        oshow:"range"


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
    
        if(window.pageYOffset>this.myRef.current.offsetTop-280){
            
            this.setState(
                {
                  visibility: "",
                  oshow:""
                }
            );
        }else{
            this.setState(
                {
                  visibility: "noshow",
                  oshow:"range"
                }
            );
        }
        if(window.pageYOffset>this.myRef.current.offsetTop-200){
            
          this.setState(
              {
                tv: "",
                
              }
          );
      }else{
          this.setState(
              {
                tv: "notv"
              }
          );
      }
      };
  
  
    render() {
      return <div className="viewpage" ref={this.myRef} style={{background: this.props.color}}>
      
      <div className="text" style={{order: this.props.order2}}> <a className={"sv tag " + this.state.visibility} >{Object.values(this.props.data)[0]}</a> <br/><br/>
      <div className={"title " + this.state.visibility} ><b><b style={{color: this.props.color1}}>{Object.values(this.props.data)[1]}</b><br/><b style={{color: this.props.color2}}>{Object.values(this.props.data)[2]} </b></b></div><br/>
<div className={"cont " + this.state.tv} style={{color:this.props.color3}}>{Object.values(this.props.data)[3]} </div>
      </div>
      <div className="gif" style={{order: this.props.order}}> <div className="realgif"></div> 
      {Object.values(this.props.data)[4]} <div className={"white " + this.state.oshow}></div><div className={"orange " + this.state.oshow} style={{background: this.props.colororange, left:this.props.left}}></div></div>
  </div>;
    }
  }

export default View