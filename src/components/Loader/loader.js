import Link from 'next/link';

export default function loader() {

    return <div className="loader">
        <div className="loading">
            <svg id="svgC" width="600" height="600" viewBox="0 0 10000 10000" fillRule="evenodd">
                <defs>
                    <radialGradient id="radial">
                        <stop offset="1" stopColor="black" >
                            <animate dur="1s" begin="1s" attributeName="offset" fill="freeze" from="1" to="0" />
                        </stop>
                        <stop offset="1" stopColor="#ff6600" >
                            <animate dur="1s" begin="1s" attributeName="offset" fill="freeze" from="1" to="0" />
                        </stop>
                        <stop offset="1" stopColor="black" >
                            <animate dur="1s" begin="1s" attributeName="stop-color" fill="freeze" from="black" to="#ff6600" />
                            <animate dur="1s" begin="2s" attributeName="offset" fill="freeze" from="1" to="0" />
                        </stop>
                        <stop offset="1" stopColor="black" >
                            <animate dur="1.5s" begin="2s" attributeName="offset" fill="freeze" from="1" to="0" />
                        </stop>
                    </radialGradient>
                    <radialGradient id="id4" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.00001 -0 -0 0.999994 0 0)" cx="5002" cy="5009" r="1209" fx="5002" fy="5009">
                        <stop offset="0" stopOpacity="1" stopColor="#FF9B05" />
                        <stop offset="0" stopOpacity="1" stopColor="#FF6600" >
                            <animate dur="1s" begin="2s" attributeName="offset" fill="freeze" from="0" to="1" />
                        </stop>
                        <stop offset="0" stopOpacity="1" stopColor="white" >
                            <animate dur="1s" begin="2s" attributeName="offset" fill="freeze" from="0" to="1" />
                        </stop>
                    </radialGradient>
                    <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="59.44" y1="98.61" x2="92.82" y2="23.59">
                        <stop offset="0" stopOpacity="1" stopColor="#003153" />
                        <stop offset="0.611765" stopOpacity="1" stopColor="#04558E" />
                        <stop offset="1" stopOpacity="1" stopColor="#0879C9" />
                    </linearGradient>
                    <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="91.17" y1="51.68" x2="56.56" y2="126.13">
                        <stop offset="0" stopOpacity="1" stopColor="#000014" />
                        <stop offset="0.568627" stopOpacity="1" stopColor="#040F43" />
                        <stop offset="1" stopOpacity="1" stopColor="#091E73" />
                    </linearGradient>
                    <linearGradient id="id2" gradientUnits="userSpaceOnUse" x1="76.07" y1="69.9" x2="88.94" y2="65.78">
                        <stop offset="0" stopOpacity="1" stopColor="white" />
                        <stop offset="0.0117647" stopOpacity="0.5" stopColor="white" />
                        <stop offset="1" stopOpacity="0.5" stopColor="white" />
                    </linearGradient>
                    <linearGradient id="id3" gradientUnits="userSpaceOnUse" xlinkHref="#id2" x1="74.05" y1="81.19" x2="61.23" y2="85.42">
                    </linearGradient>
                </defs>

                <path id="orangeStroke" stroke="none" fill="url(#radial)" d="M0,5000a5000,5000 0 1,0 10000,0a5000,5000 0 1,0 -10000,0">
                    <animate xlinkHref="#orangeStroke"
                        attributeName="d"
                        attributeType="XML"
                        from="M0,5000a5000,5000 0 1,0 10000,0a5000,5000 0 1,0 -10000,0"
                        to="M3000,5000a2000,2000 0 1,0 4000,0a2000,2000 0 1,0 -4000,0"
                        dur="1s"
                        fill="freeze" />
                </path>
                <path id="caminho" stroke="none" fill="none" d="M0,5000a5000,5000 0 1,0 10000,0a5000,5000 0 1,0 -10000,0">
                    <animate xlinkHref="#caminho"
                        attributeName="d"
                        attributeType="XML"
                        from="M0,5000a5000,5000 0 1,0 10000,0a5000,5000 0 1,0 -10000,0"
                        to="M4500,5000a500,500 0 1,0 1000,0a500,500 0 1,0 -1000,0"
                        dur="1s"
                        fill="freeze" />
                </path>                
                <circle cx cy r="50" fill="url(#id0)" transform="scale(1.0)">
                    <animateMotion dur="2s" begin=".4s" fill="remove" rotate="auto"
                       keyPoints="1;0" keyTimes="0;1" calcMode="linear" repeatCount="indefinite" >
                        <mpath xlinkHref="#caminho"></mpath>
                    </animateMotion>
                </circle>
                <circle cx cy r="50" fill="url(#id0)" transform="scale(1.0)">
                    <animateMotion dur="2s" begin=".4s" fill="remove" rotate="auto"
                       keyPoints="1;0" keyTimes="0;1" calcMode="linear" repeatCount="indefinite" >
                        <mpath xlinkHref="#caminho"></mpath>
                    </animateMotion>
                </circle>

                <g id="Camada_x0020_1">
                    <g id="_2128774546624">

                        <path id="p1" fill="white" className="fil0" d="M3503 4974c1026,-1154 2022,-1157 2988,-9 2,2 3,5 2,8 0,3 -2,5 -4,7 -949,717 -1944,720 -2985,9 -3,-2 -4,-4 -4,-7 0,-3 0,-6 2,-8z" >
                            <animate xlinkHref="#p1"
                                attributeName="d"
                                attributeType="XML"
                                from="M3503 4974c1026,-1154 2022,-1157 2988,-9 2,2 3,5 2,8 0,3 -2,5 -4,7 -949,717 -1944,720 -2985,9 -3,-2 -4,-4 -4,-7 0,-3 0,-6 2,-8z"
                                to="M4910 4378c93,-1 191,6 273,29 59,16 109,38 150,67 0,0 0,0 1,0 166,105 276,292 276,506 0,143 -49,274 -132,377 -5,7 -6,15 -1,22 5,7 13,10 20,8 329,-91 660,-257 995,-497 5,-3 7,-8 8,-13 1,-6 -1,-11 -5,-15 -995,-1131 -1976,-1129 -2942,7 -6,7 -6,18 0,25 6,7 17,9 24,3 502,-349 946,-522 1332,-519 0,0 0,0 0,0z"
                                dur="2s"
                                fill="freeze" />
                        </path>
                        <path id="p2" fill="white" className="fil1" d="M5089 5893c328,-9 649,-141 964,-396 150,-122 298,-271 445,-449 2,-2 2,-5 0,-7 -2,-2 -5,-2 -7,-1 -954,689 -1931,700 -2931,33 -2,-2 -5,-1 -7,1 -2,2 -2,5 0,7 527,554 1038,825 1535,811z" >
                            <animate xlinkHref="#p2"
                                attributeName="d"
                                attributeType="XML"
                                from="M5089 5893c328,-9 649,-141 964,-396 150,-122 298,-271 445,-449 2,-2 2,-5 0,-7 -2,-2 -5,-2 -7,-1 -954,689 -1931,700 -2931,33 -2,-2 -5,-1 -7,1 -2,2 -2,5 0,7 527,554 1038,825 1535,811z"
                                to="M5090 5622c-93,1 -191,-6 -273,-29 -59,-16 -109,-38 -150,-67 0,0 -1,0 -1,0 -166,-105 -276,-292 -276,-506 0,-143 49,-274 132,-377 5,-7 6,-15 1,-22 -4,-7 -13,-10 -20,-8 -329,91 -660,257 -994,497 -5,3 -7,8 -8,13 -1,6 1,11 5,15 995,1131 1976,1129 2942,-7 6,-7 6,-18 0,-25 -6,-7 -17,-9 -24,-3 -502,349 -946,522 -1332,519 0,0 0,0 0,0z"
                                dur="2s"
                                fill="freeze" />
                        </path>

                        <g>
                            <animateTransform attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                from="0 5000 5000"
                                to="360 5000 5000"
                                dur="0.3s"
                                begin="2s"
                                repeatCount="indefinite" />
                            <path fill="url(#id4)" className="fil2" d="M5002 5388c-209,0 -379,-170 -379,-379 0,-209 170,-379 379,-379 209,0 379,170 379,379 0,209 -170,379 -379,379zm0 -420c23,0 41,18 41,41 0,23 -18,41 -41,41 -23,0 -41,-18 -41,-41 0,-23 18,-41 41,-41z" />
                            <path fill="url(#id2)" className="fil3" d="M5042 4951l145 -230c69,44 121,110 145,188l-259 83c-6,-18 -17,-32 -32,-41z" />
                            <path fill="url(#id2)" className="fil4" d="M4960 5073l-143 231c-69,-43 -122,-109 -147,-187l258 -85c6,18 17,32 32,41z" />
                        </g>
                    </g>
                </g>

            </svg>


        </div>

    </div>
}
