import Head from '../../backcomponents/head';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import * as Scroll from 'react-scroll';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: "0%",
      back: "rgba(0,0,0,0.1)",
      flip: "rgba(0,0,0,0.1)",
      open: false,
      offset: "-100%",
      to: "i",
      to2: "i",
      rotate: "-90",
      display: "none",
      color:"black",

    };


    this.handleScroll = this.handleScroll.bind(this);

  }

  handleUp = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  }
  handleContact = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollToBottom();

  }

  handleClick = (e) => {
    if (this.state.open) {
      this.setState({
        open: false,
        offset: "-100%",
        to: "i",
        to2: "i",
        rotate: "-90",

      })
    } else {
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
    if (window.pageYOffset >= window.innerHeight*1.5 && window.pageYOffset <= totalHeight) {
      this.setState({
        back: "black",
        display: "",
        flip: "white",
      })
    } else if ((window.pageYOffset >= totalHeight || window.pageYOffset <= window.innerHeight*1.5) && !this.state.open) {
      this.setState({
        back: "rgba(0,0,0,0.1)",
        display: "none",
        flip: "rgba(0,0,0,0.1)",
      })
    }
    if ( window.pageYOffset <= totalHeight-(window.innerHeight/4)) {
      this.setState({
       color:"black",
      })
    } else if (window.pageYOffset >= totalHeight-(window.innerHeight/4) ) {
      this.setState({
        color:"white",
      })
    }
    this.setState({
      progress: 100 - ((window.pageYOffset / totalHeight) * 100) + "%",
    });

  };

  render() {


    return (
      <div>
        <Head title="StackView" />
        <div className="header" style={{ backgroundColor: this.state.back }} position="fixed">

          <a className="logoname" href='/'><a className="stack" href="#">s</a ><a href="#" style={{ display: this.state.display }} className="sv s">s</a><a href="#" style={{ display: this.state.display }} className="sv t">t</a><a href="#" style={{ display: this.state.display }} className="sv a">a</a><a  href="#" style={{ display: this.state.display }} className="sv c">c</a><a href="#" style={{ display: this.state.display }} className="sv k">k</a><a href="#" className="view">v</a><a href="#" style={{ display: this.state.display }} className="sv v">v</a><a href="#" style={{ display: this.state.display }} className="sv i">i</a><a href="#" style={{ display: this.state.display }} className="sv e">e</a><a href="#" style={{ display: this.state.display }} className="sv w">w</a></a>
          <div className="menu suma">
            <Link href="https://www.behance.net/StackView"><Button><a href="#">Portfolio</a></Button></Link>
            <Link href="/we" ><Button><a href="#">Developers</a></Button></Link>
            <Link href=""  ><Button onClick={this.handleContact}><a href="#">Contact Us</a></Button></Link>

          </div>

          <div onClick={this.handleClick} style={{ backgroundColor: this.state.flip, transform: "rotate(" + this.state.rotate + "deg)" }} className="navicon apareca"><div className="center"><a href="#"className="view">{this.state.to2}</a><a href="#"className="stack">{this.state.to}</a></div></div>
          <div className="collapso apareca" style={{ transform: "translateY(" + this.state.offset + ")" }}>
            <div className="menu">
              <img
                id="icon"
                src="/icons/icon.png"
                alt="stackview"
                height="70px"
              />
              <div className="links"><Link href="https://www.behance.net/StackView" ><Button><a href="#">Portfolio</a></Button></Link> <br />
                <Link href="/we" ><Button><a href="#" >Developers</a></Button></Link><br />
                <Link href="" onClick={this.handleContact} ><Button><a href="#">Contact Us</a></Button></Link></div><br />
              <div className="info">
                <a href="#">Phone</a>: <br /> +5517988309968<br /><br />
                <a href="#">Email</a>: <br />contact@stackview.com.br<br /><br />
                <a href="#">Address</a>:  <br />Av. João Naves de Ávila, 2121<br /> Santa Mônica, Uberlândia - MG, 38408-100, Brasil
                <div className="w"><a  href="#"><Link href="https://api.whatsapp.com/send?phone=5517988309968"><img
                  id="w"
                  src="/icons/whats.png"
                  width="auto"
                  alt="whatsapp"


                /></Link></a>
                  <a href="#"className="t" ><Link href="https://t.me/stackviewbr"><img
                    id="t"
                    src="/icons/tel.png"
                    alt="telegram"
                    width="auto"

                  /></Link></a></div>
              </div>

            </div>
            <div className="stackview"><div className="rotate"><a href="#"className="stack">stack</a><a href="#"className="view">view</a></div></div>
          </div>
<div className="fakebar">
        <div className="progress" style={{background: "linear-gradient(90deg, white 0,  white "+ this.state.progress +",black "+ this.state.progress +",black 100%)"}}></div>
        <div className="bar">
          <Link href="" onClick={this.handleUp}><a  href="#"style={{color: this.state.color}}>Scroll Up</a></Link>
        </div></div>

        </div>

        
      </div>
    );
  }

}

export default Header;