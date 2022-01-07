import React  from 'react';
import Button from '@material-ui/core/Button';
import Image from 'next/image'

class Devs extends React.Component {

  constructor(props) {  
    super(props);
    this.state = {
      devAbout:false,
      devResume:false,
      devSkills:false,     

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

  showDevInfo = () => {
    console.log("dev info")
    this.setState({
      devAbout:true
    })

  }

  render() {

    return <div className="devs">
      <div className="listDevs">
        <div className="title sv">We,</div>
        <div className="devFoto" onClick={this.showDevInfo}>
          <svg width="150" height="150" fillRule="evenodd" xmlSpace="preserve" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" clipRule="evenodd">
            <g id="eye" transform="
            translate(24 24)

            scale(0.7)">
              <path fill="url(#color0)" className="fil0" d="M70.79 45.97c4.34,-0.05 8.91,0.29 12.76,1.35 2.75,0.74 5.09,1.78 7.02,3.13 0.01,0.01 0.02,0.01 0.03,0.02 7.73,4.89 12.88,13.63 12.88,23.61 0,6.67 -2.31,12.8 -6.15,17.58 -0.25,0.31 -0.27,0.72 -0.06,1.04 0.21,0.33 0.58,0.48 0.95,0.38 15.35,-4.26 30.82,-11.99 46.41,-23.18 0.21,-0.15 0.33,-0.36 0.36,-0.62 0.03,-0.26 -0.04,-0.5 -0.21,-0.69 -46.44,-52.77 -92.21,-52.67 -137.3,0.3 -0.29,0.34 -0.28,0.83 0,1.16 0.29,0.34 0.78,0.4 1.14,0.15 23.43,-16.3 44.15,-24.37 62.16,-24.23 0,0 0.01,0 0.01,0z" />
              <path fill="url(#color1)" className="fil1" d="M79.21 104.03c-4.34,0.05 -8.91,-0.29 -12.76,-1.35 -2.75,-0.74 -5.09,-1.78 -7.02,-3.13 -0.01,-0.01 -0.02,-0.01 -0.03,-0.02 -7.73,-4.89 -12.88,-13.63 -12.88,-23.61 0,-6.67 2.31,-12.8 6.15,-17.59 0.25,-0.3 0.27,-0.71 0.06,-1.03 -0.21,-0.33 -0.58,-0.48 -0.95,-0.38 -15.35,4.26 -30.82,11.99 -46.41,23.18 -0.21,0.15 -0.33,0.36 -0.36,0.62 -0.03,0.26 0.04,0.5 0.21,0.69 46.44,52.77 92.21,52.67 137.3,-0.3 0.29,-0.34 0.28,-0.83 0,-1.16 -0.29,-0.34 -0.78,-0.4 -1.14,-0.15 -23.43,16.3 -44.15,24.37 -62.16,24.23 0,0 -0.01,0 -0.01,0z" />
              <g>
                <path fill="url(#color4)" className="fil2" d="M75.08 93.11c-9.77,0 -17.69,-7.92 -17.69,-17.68 0,-9.77 7.92,-17.69 17.69,-17.69 9.76,0 17.68,7.92 17.68,17.69 0,9.76 -7.92,17.68 -17.68,17.68zm0 -19.6c1.07,0 1.91,0.84 1.91,1.92 0,1.07 -0.84,1.91 -1.91,1.91 -1.08,0 -1.92,-0.84 -1.92,-1.91 0,-1.08 0.84,-1.92 1.92,-1.92z" />
                <path fill="url(#color2)" className="fil3" d="M76.97 72.7l6.77 -10.73c3.22,2.04 5.62,5.14 6.78,8.77l-12.08 3.87c-0.26,-0.82 -0.8,-1.48 -1.47,-1.91z" />
                <path fill="url(#color3)" className="fil4" d="M73.13 78.39l-6.67 10.79c-3.24,-2 -5.67,-5.08 -6.87,-8.7l12.05 -3.98c0.27,0.82 0.81,1.47 1.49,1.89z" />
              </g>
            </g>
          </svg>
          <div className="imgContainer"> 
            <Image
              id="e"
              src="/devs/elisbao.jpeg"
              alt="elisbao"
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className="devFoto" onClick={this.showDevInfo}>
          <Image
            id="t"
            src="/devs/thiagao.jpg"
            alt="thiagao"
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="aboutDevs">
        <div className="devsSide">
          <div className="devsCardImg">

          </div>
          <div className="devsMenu">
          <div className="devFoto" onClick={this.showDevInfo}>
          <Image
            id="t"
            src="/devs/thiagao.jpg"
            alt="thiagao"
            width={130}
            height={130}
          />
        </div>
            <Button><a className="custom">About</a></Button>
            <Button><a className="custom">Resume</a></Button>
            <Button><a className="custom">Skills</a></Button>

            <Button><a className="custom downloadButton">Download</a></Button>
          </div>
        </div>
        <div className="devsBody">
          {this.state.devAbout && <div  className="devAbout">
          A fan of engineering, web/mobile development, embedded systems, technology to connect and impact people. I am a knowledge seeker.
          </div>}
         { <div  className="devResume"></div>}
          {<div  className="devSkills"></div>}
        </div>
      </div>
    </div>
  }
}

export default Devs;