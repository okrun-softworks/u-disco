let scene, camera, renderer, light

function init() {
  
  //scene
  var scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x2A96D3 );
  
  //camera
  var camera = new THREE.PerspectiveCamera(
    60, 
    window.innerWidth / window.innerHeight, 
    1, 
    1000
  );
  camera.position.set(0, 0, -5);
  camera.lookAt(scene.position);
  
  //render
  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  //obj geo + mat
  var center = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), new THREE.MeshBasicMaterial({
    color: 0xffffff,
  }));
  scene.add(center);

  document.body.appendChild(renderer.domElement);
  render();

  
function render() {
        requestAnimationFrame(render);
       renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);
  
}
  
init();