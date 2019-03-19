var scene = new THREE.Scene();

//Rotation converter
var de2ba = function(degree){
  return degree*(Math.PI/180);
};

//Create a camera
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

//Set the base
var renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setClearColor("#5A8296");

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

//Set the light
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

//Create a box
var geometry = new THREE.BoxGeometry(100, 100, 100);

var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );

//Set the material
var texture=new THREE.TextureLoader().load("texture/color.jpg");

var material4=new THREE.MeshBasicMaterial({map:texture});

//Set each box
var mesh1 = new THREE.Mesh( geometry, material4 );
mesh1.position.z = -500;
mesh1.position.y = 100;

var mesh2 = new THREE.Mesh( geometry, material4 );
mesh2.position.z = -500;
mesh2.position.x = -100;
mesh2.position.y = 200;

var mesh3 = new THREE.Mesh( geometry, material4 );
mesh3.position.z = -1500;
mesh3.position.x = -250;
mesh3.position.y = 100;

var mesh4 = new THREE.Mesh( geometry, material4 );
mesh4.position.z = -500;
mesh4.position.x = 100;
mesh4.position.y = 200;

var mesh5 = new THREE.Mesh( geometry, material4 );
mesh5.position.z = -1500;
mesh5.position.x = 250;
mesh5.position.y = 100;

var mesh6 = new THREE.Mesh( geometry, material4 );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = -100;

var mesh7 = new THREE.Mesh( geometry, material4 );
mesh7.position.z = -1000;
mesh7.position.x = -100;
mesh7.position.y = 0;

var mesh8 = new THREE.Mesh( geometry, material4 );
mesh8.position.z = -1000;
mesh8.position.x = -100;
mesh8.position.y = -100;

var mesh9 = new THREE.Mesh( geometry, material4 );
mesh9.position.z = -1000;
mesh9.position.x = 100;
mesh9.position.y = 0;

var mesh10 = new THREE.Mesh( geometry, material4 );
mesh10.position.z = -1000;
mesh10.position.x = 100;
mesh10.position.y = -100;

var mesh11 = new THREE.Mesh( geometry, material4 );
mesh11.position.z = -1000;
mesh11.position.x = -100;
mesh11.position.y = -200;

var mesh12 = new THREE.Mesh( geometry, material4 );
mesh12.position.z = -1000;
mesh12.position.x = 100;
mesh12.position.y = -200;

scene.add( mesh1 );
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4 );
scene.add( mesh5 );
scene.add( mesh6 );
scene.add( mesh7 );
scene.add( mesh8 );
scene.add( mesh9 );
scene.add( mesh10 );
scene.add( mesh11 );
scene.add( mesh12 );

var rot = 0;

//Create the controller 
function init(){

var controller=new function(){
  this.scaleX=1;
  this.scaleY=1;
  this.scaleZ=1;

  this.positionX=0;
  this.positionY=0;
  this.positionZ=0;

  this.rotationX=0;
  this.rotationY=0;
  this.rotationZ=0;

}

var gui=new dat.GUI();

var f1 = gui.addFolder('Scale');
var f2 = gui.addFolder('Position');
var f3 = gui.addFolder('rotation');

f1.add(controller,'scaleX',0.1,5).onChange(function(){
  mesh.scale.x=(controller.scaleX);
});
f1.add(controller,'scaleY',0.1,5).onChange(function(){
  mesh.scale.y=(controller.scaleY);
});
f1.add(controller,'scaleZ',0.1,5).onChange(function(){
  mesh.scale.z=(controller.scaleZ);
});

f2.add(controller,'positionX',-500,500).onChange(function(){
  mesh.position.x=(controller.positionX);
});
f2.add(controller,'positionY',-500,500).onChange(function(){
  mesh.position.y=(controller.positionY);
});
f2.add(controller,'positionZ',-5000,-400).onChange(function(){
  mesh.position.z=(controller.positionZ);
});

f3.add(controller,'rotationX',-180,180).onChange(function(){
  mesh.rotation.x=de2ba(controller.rotationX);
});
f3.add(controller,'rotationY',-180,180).onChange(function(){
  mesh.rotation.y=de2ba(controller.rotationY);
});
f3.add(controller,'rotationZ',-180,180).onChange(function(){
  mesh.rotation.z=de2ba(controller.rotationZ);
});
}


var render = function () {
  requestAnimationFrame( render );
/*
  rot += 0.01;

  mesh1.rotation.x = rot+1;
  mesh1.rotation.y = rot+1;

  mesh2.rotation.x = rot;
  mesh2.rotation.y = rot;

  mesh3.rotation.x = rot+2;
  mesh3.rotation.y = rot+2;

  mesh4.rotation.x = rot;
  mesh4.rotation.y = rot;

  mesh5.rotation.x = rot+2;
  mesh5.rotation.y = rot+2;

  mesh6.rotation.x = rot+1;
  mesh6.rotation.y = rot+1;

  mesh7.rotation.x = rot;
  mesh7.rotation.y = rot;

  mesh8.rotation.x = rot+2;
  mesh8.rotation.y = rot+2;

  mesh9.rotation.x = rot;
  mesh9.rotation.y = rot;

  mesh10.rotation.x = rot+2;
  mesh10.rotation.y = rot+2;

  mesh11.rotation.x = rot;
  mesh11.rotation.y = rot;

  mesh12.rotation.x = rot;
  mesh12.rotation.y = rot;

  tetris
*/
  renderer.render(scene, camera);
};


render();
