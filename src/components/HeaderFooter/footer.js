import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Footer() {

    const [offsetY, setOffsetY] = useState(0)

    return <div className="footer">
        <div className="foot"><div className="contact">
            <div className="suma logo"><svg width="150" height="150" fillRule="evenodd" xmlSpace="preserve" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" clipRule="evenodd">
 <defs>  
  <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="59.44" y1="98.61" x2="92.82" y2="23.59">
   <stop offset="0" stopOpacity="1" stopColor="#003153" />
   <stop offset="0.611765" stopOpacity="1" stopColor="#04558E"/>
   <stop offset="1" stopOpacity="1" stopColor="#0879C9"/>
  </linearGradient>
  <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="91.17" y1="51.68" x2="56.56" y2="126.13">
   <stop offset="0" stopOpacity="1" stopColor="#000014"/>
   <stop offset="0.568627" stopOpacity="1" stopColor="#040F43"/>
   <stop offset="1" stopOpacity="1" stopColor="#091E73"/>
  </linearGradient>
  <linearGradient id="id2" gradientUnits="userSpaceOnUse" x1="76.07" y1="69.9" x2="88.94" y2="65.78">
   <stop offset="0" stopOpacity="1" stopColor="white"/>
   <stop offset="0.0117647" stopOpacity="0.478431" stopColor="white"/>
   <stop offset="1" stopOpacity="0.478431" stopColor="white"/>
  </linearGradient>
  <linearGradient id="id3" gradientUnits="userSpaceOnUse" xlinkHref="#id2" x1="74.05" y1="81.19" x2="61.23" y2="85.42">
  </linearGradient>
  <radialGradient id="id4" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.999994 -0 -0 1.00001 0 0)" cx="75.08" cy="75.43" r="120.91" fx="75.08" fy="75.43">
   <stop offset="0" stopOpacity="1" stopColor="#FF9B05"/>
   <stop offset="0.2" stopOpacity="1" stopColor="#FF6600"/>
   <stop offset="1" stopOpacity="1" stopColor="#FF6600"/>
  </radialGradient>
 </defs>
 <g id="Camada_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g id="_2063713738240">
   <path fill="url(#id0)" class="fil0" d="M70.79 45.97c4.34,-0.05 8.91,0.29 12.76,1.35 2.75,0.74 5.09,1.78 7.02,3.13 0.01,0.01 0.02,0.01 0.03,0.02 7.73,4.89 12.88,13.63 12.88,23.61 0,6.67 -2.31,12.8 -6.15,17.58 -0.25,0.31 -0.27,0.72 -0.06,1.04 0.21,0.33 0.58,0.48 0.95,0.38 15.35,-4.26 30.82,-11.99 46.41,-23.18 0.21,-0.15 0.33,-0.36 0.36,-0.62 0.03,-0.26 -0.04,-0.5 -0.21,-0.69 -46.44,-52.77 -92.21,-52.67 -137.3,0.3 -0.29,0.34 -0.28,0.83 0,1.16 0.29,0.34 0.78,0.4 1.14,0.15 23.43,-16.3 44.15,-24.37 62.16,-24.23 0,0 0.01,0 0.01,0z"/>
   <path fill="url(#id1)" class="fil1" d="M79.21 104.03c-4.34,0.05 -8.91,-0.29 -12.76,-1.35 -2.75,-0.74 -5.09,-1.78 -7.02,-3.13 -0.01,-0.01 -0.02,-0.01 -0.03,-0.02 -7.73,-4.89 -12.88,-13.63 -12.88,-23.61 0,-6.67 2.31,-12.8 6.15,-17.59 0.25,-0.3 0.27,-0.71 0.06,-1.03 -0.21,-0.33 -0.58,-0.48 -0.95,-0.38 -15.35,4.26 -30.82,11.99 -46.41,23.18 -0.21,0.15 -0.33,0.36 -0.36,0.62 -0.03,0.26 0.04,0.5 0.21,0.69 46.44,52.77 92.21,52.67 137.3,-0.3 0.29,-0.34 0.28,-0.83 0,-1.16 -0.29,-0.34 -0.78,-0.4 -1.14,-0.15 -23.43,16.3 -44.15,24.37 -62.16,24.23 0,0 -0.01,0 -0.01,0z"/>
   <g>
    <path fill="url(#id4)" class="fil2" d="M75.08 93.11c-9.77,0 -17.69,-7.92 -17.69,-17.68 0,-9.77 7.92,-17.69 17.69,-17.69 9.76,0 17.68,7.92 17.68,17.69 0,9.76 -7.92,17.68 -17.68,17.68zm0 -19.6c1.07,0 1.91,0.84 1.91,1.92 0,1.07 -0.84,1.91 -1.91,1.91 -1.08,0 -1.92,-0.84 -1.92,-1.91 0,-1.08 0.84,-1.92 1.92,-1.92z"/>
    <path fill="url(#id2)"class="fil3" d="M76.97 72.7l6.77 -10.73c3.22,2.04 5.62,5.14 6.78,8.77l-12.08 3.87c-0.26,-0.82 -0.8,-1.48 -1.47,-1.91z"/>
    <path fill="url(#id3)" class="fil4" d="M73.13 78.39l-6.67 10.79c-3.24,-2 -5.67,-5.08 -6.87,-8.7l12.05 -3.98c0.27,0.82 0.81,1.47 1.49,1.89z"/>
   </g>
  </g>
 </g>
</svg></div>

            <address className="endereco">
                <article className="contato">
                    <p>
                        <a href="tel:+5517988309968">
                            Phone: <br /> +5517988309968
                        </a>
                        <br/><br/>
                        <a href="mailto:contact@stackview.com.br">
                            Email: <br />contact@stackview.com.br
                        </a>
                    </p>
                </article>
            Address:  <br />Av. João Naves de Ávila, 2121<br /> Santa Mônica, Uberlândia - MG, 38408-100, Brasil

            </address>
            
            <div className="WhatsTele">
                    <Link href="https://api.whatsapp.com/send?phone=5517988309968">
                        <a> <img
                            href="https://api.whatsapp.com/send?phone=5517988309968"
                            id="w"
                            alt="whatsapp"
                            src="/icons/whats.png"
                            width="50px"
                            height="50px"

                        />
                        </a>
                    </Link>

                    <Link href="https://t.me/stackviewbr">
                        <a className="t"><img
                            id="t"
                            alt="telegram"
                            src="/icons/tel.png"
                            width="50px"
                            height="50px"

                        />
                        </a></Link>

                </div>

        </div>
            <div className="follow">
                <span className="sv" style={{fontSize:"x-large"}}>FOLLOW US</span>
                <div className="line">
                    <Link href="https://www.behance.net/StackView"><a><img
                        id="be"
                        alt="behance"
                        src="/icons/behance.png"
                        width="50px"
                        height="50px"

                    /></a></Link>
                    <Link href="https://www.instagram.com/g_lisbao/"><a><img
                        id="insta"
                        alt="instagram"
                        src="/icons/insta.png"
                        width="50px"
                        height="50px"

                    /></a></Link>
                    <Link href="https://github.com/StackView-BR"><a><img
                        id="git"
                        alt="github"
                        src="/icons/git.png"
                        width="50px"
                        height="50px"

                    /></a></Link>
                    <Link href="https://www.facebook.com/lisbao.gabriel/"><a><img
                        id="face"
                        alt="facebook"
                        src="/icons/face.png"
                        width="50px"
                        height="50px"

                    /></a></Link>
                    <Link href="https://www.linkedin.com/in/gabrielelisbao/"><a><img
                        id="in"
                        alt="linkedin"
                        src="/icons/in.png"
                        width="50px"
                        height="50px"                        

                    /></a></Link>
                </div>

            </div></div>

        <div className="rodape">
            <div className="rights">&copy;2021+ Stackview BR | All right reserved.</div>
            <div className="made" style={{fontSize:"x-large"}}><span className="custom">made by </span><a href="#" className="stack"> Stack</a><a href="#" className="view esse aki">View</a></div>
        </div>
    </div>
}
