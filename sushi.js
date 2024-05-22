// import * as THREE from 'three'
// import gsap from 'gsap'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
// import CustomShaderMaterial from 'three-custom-shader-material/vanilla'

// /**
//  * Base
//  */

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// Scene
//const scene = new THREE.Scene()

// // Texture loader
// const textureLoader = new THREE.TextureLoader()
// const sensu_fan_texture = textureLoader.load('/textures/japanese-material.jpeg')
// // const sensu_fan_texture = textureLoader.load(
// //     '/textures/japanese-material.jpeg',  // Correct path to your texture
// //     () => console.log('Texture loaded successfully'),
// //     undefined,
// //     (error) => console.error('Error loading texture:', error)
// // );
// sensu_fan_texture.flipY = false
// sensu_fan_texture.encoding = THREE.sRGBEncoding

// const sensu_fan_material = new THREE.MeshBasicMaterial({map:sensu_fan_texture,transparent: false,opacity: 1,color:'blue'})

// let Hashi_stick = null
// // let's use draco compression
// const dracoLoader = new DRACOLoader()
// dracoLoader.setDecoderPath('/draco/') //path to /draco/ in static folder was copied from the node_modules, check resources for the Draco Decoder path

// const gltfLoader = new GLTFLoader()
// gltfLoader.setDRACOLoader(dracoLoader)

// gltfLoader.load('/models/logo.glb', //Note You can still load not compressed glTF file with the GLTFLoader and the Draco decoder is only loaded when needed. Time: 53:00
//     (gltf) => {
//         console.log(gltf)
//         const Hashi_stick_1 = (gltf.scene.getObjectByName('Hashi_stick_1'))
//         const Hashi_stick_2 = (gltf.scene.getObjectByName('Hashi_stick_2'))
//         const Tokkuri_pitcher = (gltf.scene.getObjectByName('Tokkuri_pitcher'))
//         const Sensu_fan = (gltf.scene.getObjectByName('Sensu_fan'))
     
//         // Sensu_fan.material = sensu_fan_material
//         // console.log(Sensu_fan.material)
//         Sensu_fan.material.map = sensu_fan_texture

//         gsap.to(Tokkuri_pitcher.rotation, {duration:3, delay:1, y:Math.PI * 2})

//         gsap.to(Hashi_stick_1.rotation, {duration:3, delay:2, z:Math.PI * 0.5})
//         gsap.to(Hashi_stick_1.rotation, {duration:3, delay:3, z:-Math.PI * 0.5})
//         gsap.to(Hashi_stick_1.rotation, {duration:2, delay:4, z:0})

//         gsap.to(Hashi_stick_2.rotation, {duration:3, delay:2, z:-Math.PI * 0.5})
//         gsap.to(Hashi_stick_2.rotation, {duration:3, delay:3, z:Math.PI * 0.5})
//         gsap.to(Hashi_stick_2.rotation, {duration:2, delay:4, z:0})

//         if(Hashi_stick_1) 
//             Hashi_stick = Hashi_stick_1
//         scene.add(gltf.scene)
//     }
// )


// /**
//  * Lights
//  */
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
// scene.add(ambientLight)

// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
// directionalLight.castShadow = true
// directionalLight.shadow.mapSize.set(1024, 1024)
// directionalLight.shadow.camera.far = 15
// directionalLight.shadow.camera.left = - 7
// directionalLight.shadow.camera.top = 7
// directionalLight.shadow.camera.right = 7
// directionalLight.shadow.camera.bottom = - 7
// directionalLight.position.set(5, 5, 5)
// scene.add(directionalLight)

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.set(0, 1, 2)
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.target.set(0, 0.75, 0)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.shadowMap.enabled = true
// renderer.shadowMap.type = THREE.PCFSoftShadowMap
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()
// let previousTime = 0

// //Gsap


// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()
//     const deltaTime = elapsedTime - previousTime
//     previousTime = elapsedTime
//     // if(Hashi_stick)
//     //     Hashi_stick.position.x = Math.sin(elapsedTime * 0.5)
//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()


import * as THREE from 'three'
import gsap from 'gsap'
import GUI from 'lil-gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import slicedVertexShader from './shaders/vertexShader.glsl'
import slicedFragmentShader from './shaders/fragmentShader.glsl'

/**
 * Base
 */
// Debug
// const gui = new GUI({ width: 325 })
// const debugObject = {}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
/**
 * Loaders
 */
const rgbeLoader = new RGBELoader()
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
camera.position.set(0, 1, 2)
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
