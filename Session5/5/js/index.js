var renderer, scene, camera;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x <= 85; x += 5) { // Start from -45 and sequentially add one every 5 pixels
  //for (var y = -30; y <= 30; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 6, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh1 = new THREE.Mesh(boxGeometry, boxMaterial);
        var mesh2 = new THREE.Mesh(boxGeometry, boxMaterial);
          var mesh3 = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh1.position.x = x;
      mesh1.position.z = 0;
      mesh1.scale.y = 0.5;
      scene.add(mesh1);

      mesh2.position.x = x;
      mesh2.position.z = 5;
      mesh2.scale.y = 0.5;
      scene.add(mesh2);

      mesh3.position.x = x;
      mesh3.position.z = -5;
      mesh3.scale.y = 0.5;
      scene.add(mesh3);
  }

  document.body.appendChild(renderer.domElement);
}

function drawFrame(){
  requestAnimationFrame(drawFrame);
  renderer.render(scene, camera);
}

init();
drawFrame();
