import Head from '../../backcomponents/head';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: "0%",
      back: "rgba(0,0,0,0.1)",
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
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    console.log(window.innerHeight);
    if(window.pageYOffset>= window.innerHeight){
      this.setState({
        back: "black",
      })
    }else{
      this.setState({
        back: "rgba(0,0,0,0.1)",
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
        <div className="header" style={{ backgroundColor: this.state.back  }} position="fixed">

          <div className="logoname"><a className="sv">Stack</a><a className="sv">View</a></div>
          <div className="menu">
            <Link href="" ><Button><a>Portfolio</a></Button></Link>
            <Link href="" ><Button><a>Developers</a></Button></Link>
            <Link href="" ><Button><a>Contact Us</a></Button></Link>            
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