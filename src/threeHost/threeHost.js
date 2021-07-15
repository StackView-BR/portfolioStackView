import React ,{Component} from 'react';
import * as THREE from 'three';

class ThreeHost extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, this.container.offsetWidth / this.container.offsetHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( this.container.offsetWidth, this.container.offsetHeight );
        document.body.appendChild( renderer.domElement );

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;
        
        const animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        };

        animate();           
    }
     

    render(){
        return <div className="threeHost" ref={el => (this.container = el)}> 
        
        </div>;
    }
    

}

export default ThreeHost
