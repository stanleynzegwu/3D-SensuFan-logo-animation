import * as THREE from 'three';
import GUI from 'lil-gui';
import gsap from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';
import CustomShaderMaterial from 'three-custom-shader-material/vanilla';
import slicedVertexShader from './shaders/fanShader/vertexShader.glsl';
import slicedFragmentShader from './shaders/fanShader/fragmentShader.glsl';
import planeVertexShader from './shaders/planeShader/vertexShader.glsl';
import planeFragmentShader from './shaders/planeShader/fragmentShader.glsl';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Debug
// const gui = new GUI({ width: 325 })
// const debugObject = {}
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Loaders
 */
const loadingManager = new THREE.LoadingManager();
let totalItems = 0;
let loadedItems = 0;

loadingManager.onStart = (url, itemsLoaded, itemsTotal) => {
    // console.log('Loading started');
    totalItems = itemsTotal; // Initialize totalItems
};

// loadingManager.onLoad = () => {
//     console.log('Loading finished');
// };

loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
    // console.log(`Loading file: ${url}. Loaded ${itemsLoaded} of ${itemsTotal} files.`);
    totalItems = itemsTotal; // Update totalItems to reflect the correct total
    loadedItems = itemsLoaded;
    const loadPercentage = (loadedItems / totalItems) * 100;
    document.getElementById('loading-display').innerText = `Loading ${Math.round(loadPercentage)}%`;
    if(loadedItems === totalItems){
        document.getElementById('loading-display').style.display = 'none'
    }
    // console.log(`Loading progress: ${loadPercentage}%`);
};

// loadingManager.onError = (url) => {
//     console.log(`There was an error loading ${url}`);
// };

const rgbeLoader = new RGBELoader(loadingManager);
let environmentmapTexture = null;
rgbeLoader.load('/textures/city.hdr', (environmentMap) => {
    environmentMap.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = environmentMap;
    scene.environmentIntensity = 0.5;
});

// Texture loader
const textureLoader = new THREE.TextureLoader(loadingManager);
const decalTexture = textureLoader.load('/textures/leaf-edited.png');
decalTexture.encoding = THREE.sRGBEncoding;
const sensu_fan_texture = textureLoader.load('/textures/japanese-material.jpeg');
sensu_fan_texture.flipY = false;
sensu_fan_texture.encoding = THREE.sRGBEncoding;

/** Material ***/
const uniforms = {
    uSliceStart: new THREE.Uniform(-Math.PI),
    uSliceArc: new THREE.Uniform(1.8),
};
// gui.add(uniforms.uSliceStart, 'value', - Math.PI, Math.PI/6, 0.001).name('uSliceStart')
// gui.add(uniforms.uSliceArc, 'value', 0, Math.PI * 2, 0.001).name('uSliceArc')

const slicedMaterial = new CustomShaderMaterial({
    baseMaterial: THREE.MeshStandardMaterial,
    vertexShader: slicedVertexShader,
    fragmentShader: slicedFragmentShader,
    uniforms: uniforms,
    silent: true,
    map: sensu_fan_texture,
    metalness: 0.0,
    roughness: 0.5,
    envMapIntensity: 0.5,
    side: THREE.DoubleSide,
    opacity: 1,
    transparent: true
});

// Plane material
const planeMaterial = new THREE.ShaderMaterial({
    vertexShader: planeVertexShader,
    fragmentShader: planeFragmentShader,
    uniforms: {
        uColorStart: { value: new THREE.Color(9 / 255, 9 / 255, 31 / 255) },
        uProgression: { value: 1 },
    },
    transparent: true
});

/** GROUP ***/
const group = new THREE.Group();
scene.add(group);

const gltfLoader = new GLTFLoader(loadingManager);
gltfLoader.load('/models/logo.glb', (gltf) => {
    const Hashi_stick_1 = gltf.scene.getObjectByName('Hashi_stick_1');
    const Hashi_stick_2 = gltf.scene.getObjectByName('Hashi_stick_2');
    const Tokkuri_pitcher = gltf.scene.getObjectByName('Tokkuri_pitcher');
    const Sensu_fan = gltf.scene.getObjectByName('Sensu_fan');

    // Shadows
    Sensu_fan.castShadow = true;
    Sensu_fan.receiveShadow = true;
    Tokkuri_pitcher.castShadow = true;
    Hashi_stick_1.castShadow = true;
    Hashi_stick_1.receiveShadow = true;
    Hashi_stick_2.castShadow = true;
    Hashi_stick_2.receiveShadow = true;

    // Material
    Sensu_fan.material = slicedMaterial;

    // Modify the existing material of Tokkuri_pitcher to change its color
    Tokkuri_pitcher.material = new THREE.MeshStandardMaterial({
        color: 0x0000ff,
        depthWrite: true,
        depthTest: true,
        envMap: environmentmapTexture,
        envMapIntensity: 1,
        metalness: 1,
        roughness: 1,
        fog: true,
        emissiveIntensity: 1,
        transparent: true
    });

    // Add decals to Tokkuri_pitcher
    const decalMaterial = new THREE.MeshBasicMaterial({
        map: decalTexture,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -4,
        // side: THREE.DoubleSide,
    });

    const decalGeometry = new DecalGeometry(Tokkuri_pitcher, new THREE.Vector3(-0.05, 0.25, 0.6), new THREE.Euler(0, 0, -0.6), new THREE.Vector3(0.65, 0.65, 0.65));
    const decalMesh = new THREE.Mesh(decalGeometry, decalMaterial);
    decalMesh.position.set(0, -0.45, -0.24);
    // gui.add(decalMesh.position, 'x', -4, 4, 0.001).name('X')
    // gui.add(decalMesh.position, 'y', -4, 4, 0.001).name('Y')
    // gui.add(decalMesh.position, 'z', -4, 4, 0.001).name('Z')
    Tokkuri_pitcher.add(decalMesh);

    // Add to group
    group.add(Hashi_stick_1);
    group.add(Hashi_stick_2);
    group.add(Tokkuri_pitcher);
    group.add(Sensu_fan);
    group.scale.set(0.78, 0.78, 0.78);

    // GSAP
    const timeline = gsap.timeline({
        onComplete: () => {
          // Run opacity animation of exploreBtn
          gsap.to(exploreBtn, { duration: 0, display: 'block' });
          gsap.to(exploreBtn, { duration: .5, opacity: 1 });
        }
    });
    timeline
        .to(Tokkuri_pitcher.rotation, { duration: 4, delay: 1, y: Math.PI * 8 }, 'same')
        .to(Hashi_stick_1.rotation, { duration: 2, delay: 1, z: Math.PI * 0.5 }, 'same')
        .to(Hashi_stick_1.rotation, { duration: 2, delay: 2, z: -Math.PI * 0.5 }, 'same')
        .to(Hashi_stick_1.rotation, { duration: 1, delay: 3, z: 0 }, 'same')
        .to(Hashi_stick_2.rotation, { duration: 2, delay: 1, z: -Math.PI * 0.5 }, 'same')
        .to(Hashi_stick_2.rotation, { duration: 2, delay: 2, z: Math.PI * 0.5 }, 'same')
        .to(Hashi_stick_2.rotation, { duration: 1, delay: 3, z: 0 }, 'same')
        .to(slicedMaterial.uniforms.uSliceStart, { duration: 2, delay: 1, value: Math.PI / 6, ease: 'linear' }, 'same')
        .to(slicedMaterial.uniforms.uSliceStart, { duration: 2, delay: 4, value: -Math.PI / 2, ease: 'linear' }, 'same');


        // .to(slicedMaterial.uniforms.uSliceStart, { duration: .5,  value: -Math.PI, ease: 'linear' }, 'same');
});

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.far = 15;
directionalLight.shadow.camera.left = -7;
directionalLight.shadow.camera.top = 7;
directionalLight.shadow.camera.right = 7;
directionalLight.shadow.camera.bottom = -7;
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Resize group based on viewport
    const scaleFactor = Math.min(1.2, Math.max(0.5, window.innerWidth / 1280));
    // const scaleFactor = sizes.width / 1280; // Adjust this factor as needed
    group.scale.set(scaleFactor, scaleFactor, scaleFactor);
});

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.set(0, 0, 2);
scene.add(camera);


// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.target.set(0, 0.75, 0)
// controls.enableDamping = true

/**
 * Background Plane
 */
const bgGeometry = new THREE.PlaneGeometry(sizes.width/190, sizes.height/190);
const bgMesh = new THREE.Mesh(bgGeometry, planeMaterial);

scene.add(bgMesh);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();
let previousTime = 0;

const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
    // console.log(scene.children.getObjectByName(Hashi_stick_1))
};

tick();

/** 
 * Hide the button on explore 
*/
const exploreBtn = document.getElementById('explore-btn');
  
exploreBtn.addEventListener('click', () => {
  const timeline = gsap.timeline()
  exploreBtn.classList.add('hidden');
  timeline
    //Animate opacity
    .to(exploreBtn, { duration: .5, opacity: 0 },'same')
    // Animate the model opacity to 0 before removing from the scene
    .to(slicedMaterial, {
       opacity: 0,
       duration: .5,
       ease: "linear",
       onComplete: () => {
           // Remove the model from the scene
           group.removeFromParent();
       }
   },'same')
   .fromTo(
    planeMaterial.uniforms.uProgression,
    { value: 1 }, /**  Initial value */
    {
      value: 0, /** Target value */
      delay: .2,
      duration: 1.5,
      ease: "linear"
    }
  )
});



// import * as THREE from 'three';
// import GUI from 'lil-gui';
// import gsap from 'gsap';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
// import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';
// import CustomShaderMaterial from 'three-custom-shader-material/vanilla';
// import slicedVertexShader from './shaders/fanShader/vertexShader.glsl';
// import slicedFragmentShader from './shaders/fanShader/fragmentShader.glsl';
// import planeVertexShader from './shaders/planeShader/vertexShader.glsl';
// import planeFragmentShader from './shaders/planeShader/fragmentShader.glsl';

// // Debug
// const gui = new GUI({ width: 325 });

// // Sizes
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight,
// };

// // Base
// const canvas = document.querySelector('canvas.webgl');
// const scene = new THREE.Scene();

// // Loaders
// const rgbeLoader = new RGBELoader();
// let environmentmapTexture = null;
// rgbeLoader.load('/textures/city.hdr', (environmentMap) => {
//     environmentMap.mapping = THREE.EquirectangularReflectionMapping;
//     scene.environment = environmentMap;
//     scene.environmentIntensity = 0.5;
// });

// const textureLoader = new THREE.TextureLoader();
// const decalTexture = textureLoader.load('/textures/womanoil.jpg');
// // console.log(decalTexture)
// // decalTexture.flipY = false;
// // decalTexture.encoding = THREE.sRGBEncoding;
// const sensu_fan_texture = textureLoader.load('/textures/japanese-material.jpeg');
// sensu_fan_texture.flipY = false;
// sensu_fan_texture.encoding = THREE.sRGBEncoding;

// // Material
// const uniforms = {
//     uSliceStart: new THREE.Uniform(-Math.PI),
//     uSliceArc: new THREE.Uniform(1.8),
// };

// const slicedMaterial = new CustomShaderMaterial({
//     baseMaterial: THREE.MeshStandardMaterial,
//     vertexShader: slicedVertexShader,
//     fragmentShader: slicedFragmentShader,
//     uniforms: uniforms,
//     silent: true,
//     map: sensu_fan_texture,
//     metalness: 0.0,
//     roughness: 0.5,
//     envMapIntensity: 0.5,
//     side: THREE.DoubleSide,
//     opacity: 1,
//     transparent: true,
// });

// const planeMaterial = new THREE.ShaderMaterial({
//     vertexShader: planeVertexShader,
//     fragmentShader: planeFragmentShader,
//     uniforms: {
//         uColorStart: { value: new THREE.Color(9 / 255, 9 / 255, 31 / 255) },
//         uProgression: { value: 1 },
//     },
//     transparent: true,
// });

// // Group
// const group = new THREE.Group();
// scene.add(group);

// const gltfLoader = new GLTFLoader();
// gltfLoader.load('/models/logo.glb', (gltf) => {
//     const Hashi_stick_1 = gltf.scene.getObjectByName('Hashi_stick_1');
//     const Hashi_stick_2 = gltf.scene.getObjectByName('Hashi_stick_2');
//     const Tokkuri_pitcher = gltf.scene.getObjectByName('Tokkuri_pitcher');
//     const Sensu_fan = gltf.scene.getObjectByName('Sensu_fan');

//     // Shadows
//     Sensu_fan.castShadow = true;
//     Sensu_fan.receiveShadow = true;
//     Tokkuri_pitcher.castShadow = true;
//     Hashi_stick_1.castShadow = true;
//     Hashi_stick_1.receiveShadow = true;
//     Hashi_stick_2.castShadow = true;
//     Hashi_stick_2.receiveShadow = true;

//     // Material
//     Sensu_fan.material = slicedMaterial;

//     Tokkuri_pitcher.material = new THREE.MeshStandardMaterial({
//         color: 0x0000ff,
//         envMap: environmentmapTexture,
//         envMapIntensity: 1,
//         metalness: 1,
//         roughness: 1,
//         fog: true,
//         emissiveIntensity: 1,
//         // transparent: true,
//     });

//     // Add decals to Tokkuri_pitcher
//     const decalMaterial = new THREE.MeshBasicMaterial({
//         map: decalTexture,
//         transparent: true,
//         depthTest: true,
//         depthWrite: false,
//         // polygonOffset: true,
//         // polygonOffsetFactor: - 2,
//         side: THREE.DoubleSide,
//     });

//     const decalParams = {
//         position: { x: 0, y: 0, z: 0.4 },
//         rotation: { x: 0, y: 0, z: 0 },
//         scale: { x: 1, y: 1, z: 1 },
//     };

//     // Debug material for the bounding box
//     const debugBoundingBoxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

// // Clear existing decals and bounding boxes
// const clearDecals = () => {
//     const decals = scene.children.filter(child => child.userData.isDecal);
//     decals.forEach(decal => {
//         scene.remove(decal);
//     });
//     const debugBoundingBoxes = scene.children.filter(child => child.userData.isBoundingBox);
//     debugBoundingBoxes.forEach(debugBox => {
//         scene.remove(debugBox);
//     });
// };

// // Modify createDecal function to properly add decal and debug bounding box
// const createDecal = () => {
//     // Clear existing decals and bounding boxes
//     clearDecals();

//     const decalGeometry = new DecalGeometry(
//         Tokkuri_pitcher,
//         new THREE.Vector3(decalParams.position.x, decalParams.position.y, decalParams.position.z),
//         new THREE.Euler(decalParams.rotation.x, decalParams.rotation.y, decalParams.rotation.z),
//         new THREE.Vector3(decalParams.scale.x, decalParams.scale.y, decalParams.scale.z)
//     );

//     const decalMesh = new THREE.Mesh(decalGeometry, decalMaterial);
//     Tokkuri_pitcher.add(decalMesh);
//     decalMesh.userData.isDecal = true;

//     // Debug bounding box
//     const decalBoundingBox = new THREE.Box3().setFromObject(decalMesh);
//     const boxSize = decalBoundingBox.getSize(new THREE.Vector3());
//     const debugBoundingBox = new THREE.Mesh(new THREE.BoxGeometry(boxSize.x, boxSize.y, boxSize.z), debugBoundingBoxMaterial);
//     debugBoundingBox.position.copy(decalBoundingBox.getCenter(new THREE.Vector3()));
//     debugBoundingBox.rotation.copy(decalMesh.rotation);
//     debugBoundingBox.scale.copy(decalMesh.scale);
//     scene.add(debugBoundingBox);
//     debugBoundingBox.userData.isBoundingBox = true;
// };

// // Update the onChange event listeners to call createDecal once after all changes are made
// const updateDecal = () => {
//     setTimeout(() => { // Debounce to ensure it's called once after all changes are made
//         createDecal();
//     }, 100);
// };

// const decalFolder = gui.addFolder('Decal');
// decalFolder.add(decalParams.position, 'x', -10, 10).name('position.x').onChange(updateDecal);
// decalFolder.add(decalParams.position, 'y', -10, 10).name('position.y').onChange(updateDecal);
// decalFolder.add(decalParams.position, 'z', -10, 10).name('position.z').onChange(updateDecal);
// decalFolder.add(decalParams.rotation, 'x', -Math.PI, Math.PI).name('rotation.x').onChange(updateDecal);
// decalFolder.add(decalParams.rotation, 'y', -Math.PI, Math.PI).name('rotation.y').onChange(updateDecal);
// decalFolder.add(decalParams.rotation, 'z', -Math.PI, Math.PI).name('rotation.z').onChange(updateDecal);
// decalFolder.add(decalParams.scale, 'x', 0.1, 10).name('scale.x').onChange(updateDecal);
// decalFolder.add(decalParams.scale, 'y', 0.1, 10).name('scale.y').onChange(updateDecal);
// decalFolder.add(decalParams.scale, 'z', 0.1, 10).name('scale.z').onChange(updateDecal);


//     // Add to group
//     group.add(Hashi_stick_1);
//     group.add(Hashi_stick_2);
//     group.add(Tokkuri_pitcher);
//     group.add(Sensu_fan);
//     group.scale.set(0.78, 0.78, 0.78);

//     // GSAP
//     const timeline = gsap.timeline({
//         onComplete: () => {
//             gsap.to(exploreBtn, { duration: 2, opacity: 1 });
//         },
//     });

//     timeline
//         .to(Tokkuri_pitcher.rotation, { duration: 4, delay: 1, y: Math.PI * 8 }, 'same')
//         .to(Hashi_stick_1.rotation, { duration: 2, delay: 1, z: Math.PI * 0.5 }, 'same')
//         .to(Hashi_stick_1.rotation, { duration: 2, delay: 2, z: -Math.PI * 0.5 }, 'same')
//         .to(Hashi_stick_1.rotation, { duration: 1, delay: 3, z: 0 }, 'same')
//         .to(Hashi_stick_2.rotation, { duration: 2, delay: 1, z: -Math.PI * 0.5 }, 'same')
//         .to(Hashi_stick_2.rotation, { duration: 2, delay: 2, z: Math.PI * 0.5 }, 'same')
//         .to(Hashi_stick_2.rotation, { duration: 1, delay: 3, z: 0 }, 'same')
//         .to(slicedMaterial.uniforms.uSliceStart, { duration: 2, delay: 1, value: Math.PI / 6, ease: 'linear' }, 'same')
//         .to(slicedMaterial.uniforms.uSliceStart, { duration: 2, delay: 4, value: -Math.PI / 2, ease: 'linear' }, 'same');
// });

// /**
//  * Lights
//  */
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
// directionalLight.castShadow = true;
// directionalLight.shadow.mapSize.set(1024, 1024);
// directionalLight.shadow.camera.far = 15;
// directionalLight.shadow.camera.left = -7;
// directionalLight.shadow.camera.top = 7;
// directionalLight.shadow.camera.right = 7;
// directionalLight.shadow.camera.bottom = -7;
// directionalLight.position.set(5, 5, 5);
// scene.add(directionalLight);

// window.addEventListener('resize', () => {
//     sizes.width = window.innerWidth;
//     sizes.height = window.innerHeight;

//     // Update camera
//     camera.aspect = sizes.width / sizes.height;
//     camera.updateProjectionMatrix();

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     // Resize group based on viewport
//     const scaleFactor = Math.min(1.2, Math.max(0.5, window.innerWidth / 1280));
//     // const scaleFactor = sizes.width / 1280; // Adjust this factor as needed
//     group.scale.set(scaleFactor, scaleFactor, scaleFactor);
// });

// /**
//  * Camera
//  */
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// camera.position.set(0, 0, 2);
// scene.add(camera);

// /**
//  * Background Plane
//  */
// const bgGeometry = new THREE.PlaneGeometry(sizes.width / 190, sizes.height / 190);
// const bgMesh = new THREE.Mesh(bgGeometry, planeMaterial);

// scene.add(bgMesh);

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     alpha: true,
// });
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// /**
//  * Animate
//  */
// const clock = new THREE.Clock();
// let previousTime = 0;

// const tick = () => {
//     const elapsedTime = clock.getElapsedTime();
//     const deltaTime = elapsedTime - previousTime;
//     previousTime = elapsedTime;

//     // Render
//     renderer.render(scene, camera);

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick);
//     // console.log(scene.children.getObjectByName(Hashi_stick_1))
// };

// tick();

// /** 
//  * Hide the button on explore 
// */
// const exploreBtn = document.getElementById('explore-btn');

// exploreBtn.addEventListener('click', () => {
//     const timeline = gsap.timeline()
//     exploreBtn.classList.add('hidden');
//     timeline
//         // Animate opacity
//         .to(exploreBtn, { duration: .5, opacity: 0 }, 'same')
//         // Animate the model opacity to 0 before removing from the scene
//         .to(slicedMaterial, {
//             opacity: 0,
//             duration: .5,
//             ease: "linear",
//             onComplete: () => {
//                 // Remove the model from the scene
//                 group.removeFromParent();
//             }
//         }, 'same')
//         .fromTo(
//             planeMaterial.uniforms.uProgression,
//             { value: 1 }, /** Initial value */
//             {
//                 value: 0, /** Target value */
//                 delay: .2,
//                 duration: 1.5,
//                 ease: "linear"
//             }
//         )
// });
