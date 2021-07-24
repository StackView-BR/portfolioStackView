import React from 'react';
import {GLTFLoader} from './loaders/GLTFLoader';
const THREE = require('three');

class ThreeHost extends React.Component {

    constructor(props) {
        super(props);
    }
    
    async componentDidMount(){
        
        const scene = new THREE.Scene();
        scene.background= new THREE.Color( 0x979797 );

        const camera = new THREE.PerspectiveCamera( 75, this.container.offsetWidth / this.container.offsetHeight, 0.1, 1000 );
        
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( this.container.offsetWidth, this.container.offsetHeight );
        document.body.appendChild( renderer.domElement );
        
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        const loader = new GLTFLoader();

        loader.load( 'assets3D/objects/stack-view-flat.gltf', function ( gltf ) {
        	scene.add( gltf.scene );
            console.log('scene loaded right');
        }, undefined, function ( error ) {
        	console.error( error );        
        } );
        camera.position.z = 30;
        camera.position.x = 0;
        camera.position.y = 10;
        
        const animate = function () {
            requestAnimationFrame( animate );
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
