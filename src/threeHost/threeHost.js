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
        
        const loader = new GLTFLoader();
        var objectRendered;

        camera.position.z = 30;
        camera.position.x = 0;
        camera.position.y = 10;
        
        
        // this only runs when the model was loaded
        // and this may take a long while watch out
        loader.load('assets3D/objects/stack-view-flat.gltf', function ( gltf ) {
            objectRendered = gltf.scene;
            scene.add( gltf.scene );
            
            const animate = function () {
                requestAnimationFrame( animate );
    
                objectRendered.rotation.x+= 0.01;
                objectRendered.rotation.y+= 0.01;
    
                renderer.render( scene, camera );
            };
            
            animate();
        }, undefined, function ( error ) {
        	console.error( error );        
        } );

    }
     

    render(){
        return <div className="threeHost" ref={el => (this.container = el)}> 
        
        </div>;
    }
    

}

export default ThreeHost
