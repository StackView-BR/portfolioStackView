import Head from '../../backcomponents/head';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      progress: "0%",
      back: "rgba(0,0,0,0.1)",
      flip: "rgba(0,0,0,0.1)",
      open: false,
      offset:"-100%",
      to: "i",
      to2: "i",
      rotate: "-90",
      display: "none",

    };

    
    this.handleScroll = this.handleScroll.bind(this);

  }
  
  handleContact =() => {
    console.log("clique");
    window.scroll({
      bottom: document.body.scrollHeight, // or document.scrollingElement || document.body
    left: 0,
    behavior: 'smooth'
    });
  }

  handleClick = (e) =>  {
    if(this.state.open){
      this.setState({
        open: false,
        offset: "-100%",
        to: "i",
      to2: "i",
      rotate: "-90",

      })
    }else{
      this.setState({
        open: true,
        offset: "0%",
        back: "black",
        flip: "white",
        to: "a",
      to2: "",
      rotate: "0",

      })

    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    if (window.pageYOffset >= window.innerHeight && window.pageYOffset <= totalHeight) {
      this.setState({
        back: "black",
        display: "",
        flip: "white",
      })
    } else if ((window.pageYOffset >= totalHeight || window.pageYOffset <= window.innerHeight)&&!this.state.open) {
      this.setState({
        back: "rgba(0,0,0,0.1)",
        display: "none",
        flip: "rgba(0,0,0,0.1)",
      })
    }
    this.setState({
      progress: (window.pageYOffset / totalHeight) * 100 + "%",
    });

  };

  render() {
    

    return (
      <div>
        <Head title="StackView" />
        <div className="header" style={{ backgroundColor: this.state.back }} position="fixed">

          <div className="logoname"><a className="stack">s</a><a style={{ display: this.state.display }} className="sv s">s</a><a style={{ display: this.state.display }} className="sv t">t</a><a style={{ display: this.state.display }} className="sv a">a</a><a style={{ display: this.state.display }} className="sv c">c</a><a style={{ display: this.state.display }} className="sv k">k</a><a className="view">v</a><a style={{ display: this.state.display }} className="sv v">v</a><a style={{ display: this.state.display }} className="sv i">i</a><a style={{ display: this.state.display }} className="sv e">e</a><a style={{ display: this.state.display }} className="sv w">w</a></div>
          <div className="menu suma">
            <Link href="https://www.behance.net/StackView"><Button><a>Portfolio</a></Button></Link>
            <Link href="" ><Button><a>Developers</a></Button></Link>
            <Link href=""  ><Button onClick={this.handleContact}><a>Contact Us</a></Button></Link>

          </div>

          <div onClick={this.handleClick} style={{ backgroundColor: this.state.flip, transform: "rotate("+this.state.rotate+"deg)" }} className="navicon apareca"><div className="center"><a className="view">{this.state.to2}</a><a className="stack">{this.state.to}</a></div></div>
          <div className="collapso apareca" style={{ transform: "translateY(" + this.state.offset +")" }}>
            <div className="menu">
            <img
            id="icon"
            src="/icons/icon.png"
            height="70px"
        />
        <div className="links"><Link href="https://www.behance.net/StackView" ><Button><a>Portfolio</a></Button></Link> <br/>
            <Link href="" ><Button><a>Developers</a></Button></Link><br/>
            <Link href="" onClick={this.handleContact} ><Button><a>Contact Us</a></Button></Link></div><br/>
            <div className="info">
            <a>Phone</a>: <br /> +5517988309968<br /><br />
            <a>Email</a>: <br />sv@stackview.com.br<br /><br />
                <a>Address</a>:  <br />Av. João Naves de Ávila, 2121<br /> Santa Mônica, Uberlândia - MG, 38408-100, Brasil
                <div className="w"><a href="https://api.whatsapp.com/send?phone=5517988309968"><img
                id="w"
                src="/icons/whats.png"
                width="auto"
                

            /></a>
                <a className="t"><img
                    id="t"
                    src="/icons/tel.png"
                    width="auto"

                /></a></div>
            </div>
            
              </div>
            <div className="stackview"><div className="rotate"><a className="stack">stack</a><a className="view">view</a></div></div>
          </div>

        </div>

        <div className="fakebar"></div>
        <div className="bar">
          <div className="progress" style={{ height: this.state.progress }} ></div>
        </div>
      </div>
    );
  }

}

export default Header;