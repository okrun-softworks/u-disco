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
  camera.position.set(0, 0, 0);
  camera.lookAt(scene.position);
  
  //render
  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // create geography and material
  let geoCenterOrbitalElement = new THREE.SphereGeometry(0.4, 30, 30);
  let matCenterOrbitalElement = new THREE.MeshBasicMaterial({ color: 0x00A7E1 });
  let geoBackOrbitalElement = new THREE.SphereGeometry(0.4, 30, 30);
  let matBackOrbitalElement = new THREE.MeshBasicMaterial({ color: 0xEBEBEB });
  let geometryOrbitalElement = new THREE.SphereGeometry(0.2, 30, 30);
  let materialOrbitalElement = new THREE.MeshBasicMaterial({ color: 0x00A7E1 });
  
  // create centerElement
  const centerFront = new THREE.Mesh(geoCenterOrbitalElement, matCenterOrbitalElement);
    centerFront.position.set(0, -2.3, -5)
    centerFront.rotateY(0.25)
    scene.add(centerFront);
  const centerRear = new THREE.Mesh(geoCenterOrbitalElement, matCenterOrbitalElement);
    centerRear.position.set(-0.5, -3, -7)
    centerFront.rotateY(-0.25)
    scene.add(centerRear);
  const centerBack = new THREE.Mesh(geoBackOrbitalElement, matBackOrbitalElement);
    centerBack.position.set(0, -7.5, -20)
    scene.add(centerBack);

  //centerBack orbital elements
  const orbBack = new THREE.Mesh(geoBackOrbitalElement, matBackOrbitalElement);
    orbBack.position.set(0, -10, 0)
    centerBack.add(orbBack);
  const orbDuoBack = new THREE.Mesh(geoBackOrbitalElement, matBackOrbitalElement);
    orbDuoBack.position.set(10, 0, 0)
    orbBack.add(orbDuoBack);
  const orbDuobBack = new THREE.Mesh(geoBackOrbitalElement, matBackOrbitalElement);
    orbDuobBack.position.set(0, 0, 12)
    orbBack.add(orbDuobBack);
  
  // create orbTree
  for(let i = 0; i < 10; i++){
    //centerFront orbTree
    orbPlusY = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
    orbPlusY.position.y += i;
    centerFront.add(orbPlusY);
      armPlusY = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
      armPlusY.position.x += i;
      orbPlusY.add(armPlusY);

    orbMinusY = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
    orbMinusY.position.y += -i;
    centerFront.add(orbMinusY); 
      armMinusY = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
      armMinusY.position.x += -i;
      orbMinusY.add(armMinusY);

    orbPlusX = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
    orbPlusX.position.x += i;
    centerFront.add(orbPlusX); 
      armPlusX = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
      armPlusX.position.y += -i;
      orbPlusX.add(armPlusX);

    orbMinusX = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
    orbMinusX.position.x += -i;
    centerFront.add(orbMinusX); 
      armMinusX = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
      armMinusX.position.y += i;
      orbMinusX.add(armMinusX);
      
    //centerRear orbTree    
    orbbPlusY = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
    orbbPlusY.position.y += i;
    centerRear.add(orbbPlusY);
      armbPlusY = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
      armbPlusY.position.x += i;
      orbbPlusY.add(armbPlusY); 
   
    orbbMinusY = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
    orbbMinusY.position.y += -i;
    centerRear.add(orbbMinusY);  
      armbMinusY = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
      armbMinusY.position.x += -i;
      orbbMinusY.add(armbMinusY); 
      
    orbbPlusX = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
    orbbPlusX.position.x += i;
    centerRear.add(orbbPlusX);  
      armbPlusX = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
      armbPlusX.position.y += -i;
      orbbPlusX.add(armbPlusX); 
    
    orbbMinusX = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
    orbbMinusX.position.x += -i;
    centerRear.add(orbbMinusX);  
      armbMinusX = new THREE.Mesh(geometryOrbitalElement, materialOrbitalElement);
      armbMinusX.position.y += i;
      orbbMinusX.add(armbMinusX);
  }  

  document.body.appendChild(renderer.domElement);
  render();

  
  function render() {
    centerFront.rotation.z += 0.002;
    centerRear.rotation.z += 0.0025;
    centerBack.rotation.x += 0.0027;
    orbBack.rotation.y += 0.0029;
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