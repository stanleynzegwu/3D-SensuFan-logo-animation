// // sushi.js
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

// // Select the canvas element
// const canvas = document.querySelector('canvas.webgl');

// // Create a Three.js renderer
// const renderer = new THREE.WebGLRenderer({ canvas });

// // Your Three.js code here
// // Example: create a scene, camera, and renderer
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
// renderer.setSize(canvas.clientWidth, canvas.clientHeight);

// // Example: create a cube
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// // Example: animate the cube
// function animate() {
//     requestAnimationFrame(animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
// }

// animate();

import * as THREE from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Models
 */

/** 
//using glTF(and it works ame way with other formats except Draco..check below for how to use Draco)

// const gltfLoader = new GLTFLoader()

// gltfLoader.load('/models/FlightHelmet/glTF/FlightHelmet.gltf',
//     (gltf) => {
//         console.log(gltf)
//         //while the array still contains a child remove the first 
//         //because once you add a child it gets removed from the array(that's specific to how it's setup by gltf/threejs)

//         // while(gltf.scene.children.length){
//         //     scene.add(gltf.scene.children[0])
//         // }

//         //unpack to a separate independent array that has nothing to do with threejs then loop, 
//         //this way it doesn't remove it from the array after adding to the scene

//         // const children = [...gltf.scene.children]
//         // for(const child of children){
//         //     scene.add(child)
//         // }

//         scene.add(gltf.scene)
//     }
// )

*/
// Texture loader
const textureLoader = new THREE.TextureLoader()
const sensu_fan_material = textureLoader.load('japanese-material.jpg')
sensu_fan_material.flipY = false
// sensu_fan_material.encoding = THREE.sRGBEncoding

let Hashi_stick = null
// let's use draco compression
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/') //path to /draco/ in static folder was copied from the node_modules, check resources for the Draco Decoder path

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

gltfLoader.load('/models/logo3.glb', //Note You can still load not compressed glTF file with the GLTFLoader and the Draco decoder is only loaded when needed. Time: 53:00
    (gltf) => {
        console.log(gltf)
        const Hashi_stick_1 = (gltf.scene.getObjectByName('Hashi_stick_1'))
        const Hashi_stick_2 = (gltf.scene.getObjectByName('Hashi_stick_2'))
        const Tokkuri_pitcher = (gltf.scene.getObjectByName('Tokkuri_pitcher'))
        const Sensu_fan = (gltf.scene.getObjectByName('Sensu_fan'))
        Sensu_fan.material.color = new THREE.Color('blue')
        // Sensu_fan.material.wireframe = true
        // Sensu_fan.material.map = sensu_fan_material
        // console.log(sensu_fan_material)

        gsap.to(Tokkuri_pitcher.rotation, {duration:3, delay:1, y:Math.PI * 2})

        gsap.to(Hashi_stick_1.rotation, {duration:3, delay:2, z:Math.PI * 0.5})
        gsap.to(Hashi_stick_1.rotation, {duration:3, delay:3, z:-Math.PI * 0.5})
        gsap.to(Hashi_stick_1.rotation, {duration:2, delay:4, z:0})

        gsap.to(Hashi_stick_2.rotation, {duration:3, delay:2, z:-Math.PI * 0.5})
        gsap.to(Hashi_stick_2.rotation, {duration:3, delay:3, z:Math.PI * 0.5})
        gsap.to(Hashi_stick_2.rotation, {duration:2, delay:4, z:0})

        if(Hashi_stick_1) 
            Hashi_stick = Hashi_stick_1
        scene.add(gltf.scene)
    }
)

//Animated Models
// const gltfLoader = new GLTFLoader()


// gltfLoader.load(
//     '/models/logo.gltf',
//     (gltf) =>
//     {
//         gltf.scene.scale.set(1, 1, 1)
//         scene.add(gltf.scene)

//     }
// )


/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
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
camera.position.set(0, 1, 2)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0.75, 0)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
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
    // if(Hashi_stick)
    //     Hashi_stick.position.x = Math.sin(elapsedTime * 0.5)
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
