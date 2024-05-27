// import * as THREE from 'three';
// import GUI from 'lil-gui'
// import gsap from 'gsap';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
// import CustomShaderMaterial from 'three-custom-shader-material/vanilla';
// import slicedVertexShader from './shaders/fanShader/vertexShader.glsl';
// import slicedFragmentShader from './shaders/fanShader/fragmentShader.glsl';
// import planeVertexShader from './shaders/planeShader/vertexShader.glsl';
// import planeFragmentShader from './shaders/planeShader/fragmentShader.glsl';



// //Debug
// // const gui = new GUI({ width: 325 })
// // const debugObject = {}
// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight,
// };

// /**
//  * Base
//  */
// // Canvas
// const canvas = document.querySelector('canvas.webgl');

// // Scene
// const scene = new THREE.Scene();

// /**
//  * Loaders
//  */
// const rgbeLoader = new RGBELoader();
// rgbeLoader.load('/textures/city.hdr', (environmentMap) => {
//     environmentMap.mapping = THREE.EquirectangularReflectionMapping;
//     scene.environment = environmentMap;
//     scene.environmentIntensity = 0.5;
// });

// // Texture loader
// const textureLoader = new THREE.TextureLoader();
// const sensu_fan_texture = textureLoader.load('/textures/japanese-material.jpeg');
// sensu_fan_texture.flipY = false;
// sensu_fan_texture.encoding = THREE.sRGBEncoding;

// /** Material ***/
// const uniforms = {
//     uSliceStart: new THREE.Uniform(-Math.PI),
//     uSliceArc: new THREE.Uniform(1.8),
// };
// // gui.add(uniforms.uSliceStart, 'value', - Math.PI, Math.PI/6, 0.001).name('uSliceStart')
// // gui.add(uniforms.uSliceArc, 'value', 0, Math.PI * 2, 0.001).name('uSliceArc')

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
//     transparent:true
// });

// //plane material
// const planeMaterial = new THREE.ShaderMaterial({
//     vertexShader: planeVertexShader,
//     fragmentShader: planeFragmentShader,
//     uniforms: {
//         uColorStart: { value: new THREE.Color(9 / 255, 9 / 255, 31 / 255) },
//         uProgression: {value: 1},
//     },
//     transparent:true
// })

// /** GROUP ***/
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

//     // Add to group
//     group.add(Hashi_stick_1);
//     group.add(Hashi_stick_2);
//     group.add(Tokkuri_pitcher);
//     group.add(Sensu_fan);
//     group.scale.set(0.78,0.78,0.78)

//     // GSAP
//     const timeline = gsap.timeline({
//         onComplete: () => {
//           // Run opacity animation of exploreBtn
//           gsap.to(exploreBtn, { duration: 2, opacity: 1 });
//         }
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
//         .to(slicedMaterial.uniforms.uSliceStart, { duration: 2, delay: 4, value: -Math.PI/2, ease: 'linear' }, 'same');

//         // .to(slicedMaterial.uniforms.uSliceStart, { duration: .5,  value: -Math.PI, ease: 'linear' }, 'same');
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
// const bgGeometry = new THREE.PlaneGeometry(sizes.width/190, sizes.height/190);
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
//   const timeline = gsap.timeline()
//   exploreBtn.classList.add('hidden');
//   timeline
//     //Animate opacity
//     .to(exploreBtn, { duration: .5, opacity: 0 },'same')
//     // Animate the model opacity to 0 before removing from the scene
//     .to(slicedMaterial, {
//        opacity: 0,
//        duration: .5,
//        ease: "linear",
//        onComplete: () => {
//            // Remove the model from the scene
//            group.removeFromParent();
//        }
//    },'same')
//    .fromTo(
//     planeMaterial.uniforms.uProgression,
//     { value: 1 }, /**  Initial value */
//     {
//       value: 0, /** Target value */
//       delay: .2,
//       duration: 1.5,
//       ease: "linear"
//     }
//   )
// });
/////////////////////////////////

// import * as THREE from 'three';
// import GUI from 'lil-gui'
// import gsap from 'gsap';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
// import CustomShaderMaterial from 'three-custom-shader-material/vanilla';
// import slicedVertexShader from './shaders/fanShader/vertexShader.glsl';
// import slicedFragmentShader from './shaders/fanShader/fragmentShader.glsl';
// // import planeVertexShader from './shaders/planeShader/vertexShader.glsl';
// // import planeFragmentShader from './shaders/planeShader/fragmentShader.glsl';



// //Debug
// // const gui = new GUI({ width: 325 })
// // const debugObject = {}
// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight,
// };

// /**
//  * Base
//  */
// // Canvas
// const canvas = document.querySelector('canvas.webgl');

// // Scene
// const scene = new THREE.Scene();

// /**
//  * Loaders
//  */
// const rgbeLoader = new RGBELoader();
// rgbeLoader.load('/textures/city.hdr', (environmentMap) => {
//     environmentMap.mapping = THREE.EquirectangularReflectionMapping;
//     scene.environment = environmentMap;
//     scene.environmentIntensity = 0.5;
// });

// // Texture loader
// const textureLoader = new THREE.TextureLoader();
// const sensu_fan_texture = textureLoader.load('/textures/japanese-material.jpeg');
// sensu_fan_texture.flipY = false;
// sensu_fan_texture.encoding = THREE.sRGBEncoding;

// /** Material ***/
// const uniforms = {
//     uSliceStart: new THREE.Uniform(-Math.PI),
//     uSliceArc: new THREE.Uniform(1.8),
// };
// // gui.add(uniforms.uSliceStart, 'value', - Math.PI, Math.PI/6, 0.001).name('uSliceStart')
// // gui.add(uniforms.uSliceArc, 'value', 0, Math.PI * 2, 0.001).name('uSliceArc')

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
//     transparent:true
// });

// //plane material
// // const planeMaterial = new THREE.ShaderMaterial({
// //     vertexShader: planeVertexShader,
// //     fragmentShader: planeFragmentShader,
// //     uniforms: {
// //         uColorStart: { value: new THREE.Color(9 / 255, 9 / 255, 31 / 255) },
// //         uProgression: {value: 1},
// //     },
// //     transparent:true
// // })

// /** GROUP ***/
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

//     // Add to group
//     group.add(Hashi_stick_1);
//     group.add(Hashi_stick_2);
//     group.add(Tokkuri_pitcher);
//     group.add(Sensu_fan);
//     group.scale.set(0.78,0.78,0.78)

//     // GSAP
//     const timeline = gsap.timeline();
//     timeline
//         .to(Tokkuri_pitcher.rotation, { duration: 4, delay: 1, y: Math.PI * 8 }, 'same')
//         .to(Hashi_stick_1.rotation, { duration: 2, delay: 1, z: Math.PI * 0.5 }, 'same')
//         .to(Hashi_stick_1.rotation, { duration: 2, delay: 2, z: -Math.PI * 0.5 }, 'same')
//         .to(Hashi_stick_1.rotation, { duration: 1, delay: 3, z: 0 }, 'same')
//         .to(Hashi_stick_2.rotation, { duration: 2, delay: 1, z: -Math.PI * 0.5 }, 'same')
//         .to(Hashi_stick_2.rotation, { duration: 2, delay: 2, z: Math.PI * 0.5 }, 'same')
//         .to(Hashi_stick_2.rotation, { duration: 1, delay: 3, z: 0 }, 'same')
//         .to(slicedMaterial.uniforms.uSliceStart, { duration: 2, delay: 1, value: Math.PI / 6, ease: 'linear' }, 'same')
//         .to(slicedMaterial.uniforms.uSliceStart, { duration: 2, delay: 4, value: -Math.PI/2, ease: 'linear' }, 'same');

//         // .to(slicedMaterial.uniforms.uSliceStart, { duration: .5,  value: -Math.PI, ease: 'linear' }, 'same');
// });

/**
 * Lights
 */
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
//     // const scaleFactor = Math.min(1.2, Math.max(0.5, window.innerWidth / 1280));
//     // const scaleFactor = sizes.width / 1280; // Adjust this factor as needed
//     // group.scale.set(scaleFactor, scaleFactor, scaleFactor);
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
// // const bgGeometry = new THREE.PlaneGeometry(sizes.width/190, sizes.height/190);
// // const bgMesh = new THREE.Mesh(bgGeometry, planeMaterial);

// // scene.add(bgMesh);

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

/** 
 * Hide the button on explore 
*/
// const exploreBtn = document.getElementById('explore-btn');
  
// exploreBtn.addEventListener('click', () => {
//   const timeline = gsap.timeline()
//   exploreBtn.classList.add('hidden');
//   timeline
//     //Animate opacity
//     .to(exploreBtn, { duration: .5, opacity: 0 },'same')
//     // Animate the model opacity to 0 before removing from the scene
//     .to(slicedMaterial, {
//        opacity: 0,
//        duration: .5,
//        ease: "linear",
//        onComplete: () => {
//            // Remove the model from the scene
//            group.removeFromParent();
//        }
//    },'same')
//    .fromTo(
//     planeMaterial.uniforms.uProgression,
//     { value: 1 }, /**  Initial value */
//     {
//       value: 0, /** Target value */
//       delay: .2,
//       duration: 1.5,
//       ease: "linear"
//     }
//   )
// });


//////////////////////////////////////////////////
import * as THREE from 'three';
import GUI from 'lil-gui'
import gsap from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import CustomShaderMaterial from 'three-custom-shader-material/vanilla';
import slicedVertexShader from './shaders/fanShader/vertexShader.glsl';
import slicedFragmentShader from './shaders/fanShader/fragmentShader.glsl';
const scene = new THREE.Scene()

const canvas = document.querySelector('canvas.webgl');
const rgbeLoader = new RGBELoader()
rgbeLoader.load('/textures/city.hdr', (environmentMap) =>
    {
        environmentMap.mapping = THREE.EquirectangularReflectionMapping

        // scene.background = environmentMap
        scene.environment = environmentMap
    })
rgbeLoader.load('/textures/city.hdr', (environmentMap) =>{
    environmentMap.mapping = THREE.EquirectangularReflectionMapping
    scene.environment = environmentMap
    scene.environmentIntensity = 0.5
})

// Texture loader
const textureLoader = new THREE.TextureLoader()
const sensu_fan_texture = textureLoader.load('/textures/japanese-material.jpeg')
sensu_fan_texture.flipY = false
sensu_fan_texture.encoding = THREE.sRGBEncoding
//Material
const uniforms = {
    uSliceStart: new THREE.Uniform(- Math.PI),
    uSliceArc: new THREE.Uniform(1.8),
}
// gui.add(uniforms.uSliceStart, 'value', - Math.PI, Math.PI/6, 0.001).name('uSliceStart')
// gui.add(uniforms.uSliceArc, 'value', 0, Math.PI * 2, 0.001).name('uSliceArc')
const slicedMaterial = new CustomShaderMaterial({
    // CSM
    baseMaterial: THREE.MeshStandardMaterial,
    vertexShader: slicedVertexShader,
    fragmentShader: slicedFragmentShader,
    uniforms: uniforms,
    silent: true,
    // MeshStandardMaterial
    map: sensu_fan_texture,
    metalness: 0.0,
    roughness: 0.5,
    envMapIntensity: 0.5,
    side: THREE.DoubleSide

})
let Hashi_stick = null

const gltfLoader = new GLTFLoader()

gltfLoader.load('/models/logo.glb', //Note You can still load not compressed glTF file with the GLTFLoader and the Draco decoder is only loaded when needed. Time: 53:00
    (gltf) => {
        const Hashi_stick_1 = (gltf.scene.getObjectByName('Hashi_stick_1'))
        const Hashi_stick_2 = (gltf.scene.getObjectByName('Hashi_stick_2'))
        const Tokkuri_pitcher = (gltf.scene.getObjectByName('Tokkuri_pitcher'))
        const Sensu_fan = (gltf.scene.getObjectByName('Sensu_fan'))

        //Shadows
        Sensu_fan.castShadow = true
        Sensu_fan.receiveShadow = true
        Tokkuri_pitcher.castShadow = true
        Hashi_stick_1.castShadow = true
        Hashi_stick_1.receiveShadow = true
        Hashi_stick_2.castShadow = true
        Hashi_stick_2.receiveShadow = true

        //Material
        Sensu_fan.material = slicedMaterial

        //GSAP
        const timeline = gsap.timeline();
        timeline
        .to(Tokkuri_pitcher.rotation, {duration:6, delay:1, y:Math.PI * 8},'same')
        .to(Hashi_stick_1.rotation, {duration:3, delay:2, z:Math.PI * 0.5},'same')
        .to(Hashi_stick_1.rotation, {duration:3, delay:3, z:-Math.PI * 0.5},'same')
        .to(Hashi_stick_1.rotation, {duration:2, delay:4, z:0},'same')
        .to(Hashi_stick_2.rotation, {duration:3, delay:2, z:-Math.PI * 0.5},'same')
        .to(Hashi_stick_2.rotation, {duration:3, delay:3, z:Math.PI * 0.5},'same')
        .to(Hashi_stick_2.rotation, {duration:2, delay:4, z:0},'same')
        .to(slicedMaterial.uniforms.uSliceStart, {duration:3, delay:2, value:Math.PI/6,ease: "linear",},'same')
        .to(slicedMaterial.uniforms.uSliceStart, {duration:4, delay:5, value:- Math.PI,ease: "linear",},'same')

        if(Hashi_stick_1) 
            Hashi_stick = Hashi_stick_1
        scene.add(gltf.scene)
    }
)
/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 2)
scene.add(camera)
// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.target.set(0, 0.75, 0)
// controls.enableDamping = true
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha:true
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0
//Gsap
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime
    // controls.update()
    // Render
    renderer.render(scene, camera)
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()
