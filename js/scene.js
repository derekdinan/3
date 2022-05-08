import * as THREE from 'three';
import {
    DragControls
} from 'https://unpkg.com/three@0.139.2/examples/jsm/controls/DragControls.js';
import WebGL from 'https://unpkg.com/three@0.139.2/examples/jsm/capabilities/WebGL.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    antialias: false
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Add body parts

const objects = [];

function addPart(name) {
    var loader = new THREE.TextureLoader();
    let width, height;

    var texture = loader.load("textures/" + name + ".png", function(tex) {
        width = tex.image.width;
        height = tex.image.height;
    });

    var material = new THREE.SpriteMaterial({
        map: texture
    });
    var part = new THREE.Sprite(material);
    part.sizeAttenuation = false;

    //part.scale.set(1, 1, 1);

    scene.add(part);
    objects.push(part);
}

const bones = [];

addPart('head');
addPart('left_arm');
addPart('left_foot');
addPart('left_hand');
addPart('left_leg');
addPart('left_shoulder');
addPart('left_thigh');
addPart('neck');
addPart('right_arm');
addPart('right_foot');
addPart('right_hand');
addPart('right_leg');
addPart('right_shoulder');
addPart('right_thigh');
addPart('torso');
addPart('waist');

camera.position.z = 5;

// Check if browser supports WebGL

if (WebGL.isWebGLAvailable()) {
    init();
    animate();

} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}

function init() {
    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Set background

scene.background = new THREE.Color(0x181B20);

// Controls

const controls = new DragControls(objects, camera, renderer.domElement);

controls.addEventListener('dragstart', function(event) {
    //event.object.material.emissive.set(0xaaaaaa);
    console.log("click");
});

controls.addEventListener('dragend', function(event) {
    //event.object.material.emissive.set(0x000000);
});