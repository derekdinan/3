const texture = new THREE.TextureLoader().load('textures/eye.png');

const material = new THREE.MeshBasicMaterial({
    map: texture
});