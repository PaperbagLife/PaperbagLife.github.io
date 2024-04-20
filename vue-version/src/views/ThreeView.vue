<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { type GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Pathfinding, PathfindingHelper } from 'three-pathfinding'

import mapGlb from '../assets/demo/glb/map.glb'
import navmeshGlb from '../assets/demo/glb/navmesh.glb'

const mainDiv = ref<HTMLElement | null>(null)
const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = -8
camera.position.y = 12
camera.position.x = -10

// ORBIT CAMERA CONTROLS
const orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.mouseButtons = {
  MIDDLE: THREE.MOUSE.ROTATE,
  RIGHT: THREE.MOUSE.PAN
}
orbitControls.enableDamping = true
orbitControls.enablePan = true
orbitControls.minDistance = 5
orbitControls.maxDistance = 60
orbitControls.maxPolarAngle = Math.PI / 2 - 0.05 // prevent camera below ground
orbitControls.minPolarAngle = Math.PI / 4 // prevent top down view
orbitControls.update()

const dLight = new THREE.DirectionalLight('white', 1)
dLight.position.x = 35
dLight.position.y = 15
dLight.castShadow = true
const d = 5
dLight.shadow.camera.left = -d
dLight.shadow.camera.right = d
dLight.shadow.camera.top = d
dLight.shadow.camera.bottom = -d
scene.add(dLight)

const aLight = new THREE.AmbientLight('white', 0.5)
scene.add(aLight)

// AGENT
const agentHeight = 1.0
const agentRadius = 0.25
const agent = new THREE.Mesh(
  new THREE.CylinderGeometry(agentRadius, agentRadius, agentHeight),
  new THREE.MeshPhongMaterial({ color: 0x66ccff })
)
agent.position.y = agentHeight / 2
const agentGroup = new THREE.Group()
agentGroup.add(agent)
agentGroup.position.z = 0
agentGroup.position.x = 0
agentGroup.position.y = 1
scene.add(agentGroup)

// Load level

const loader = new GLTFLoader()
loader.load(mapGlb, (gltf: GLTF) => {
  scene.add(gltf.scene)
})

const pathfinding = new Pathfinding()
const pathfindinghelper = new PathfindingHelper()
scene.add(pathfindinghelper)
const ZONE = 'main'
let navmesh: THREE.Object3D<THREE.Object3DEventMap>
let groupID
let navpath
loader.load(navmeshGlb, (gltf: GLTF) => {
  gltf.scene.traverse((node: THREE.Object3D) => {
    if (!navmesh && node.isObject3D && node.children.length > 0) {
      navmesh = node.children[0]
      pathfinding.setZoneData(ZONE, Pathfinding.createZone(navmesh.geometry))
    }
  })
})

// Raycast
const raycaster = new THREE.Raycaster()
const clickPos = new THREE.Vector2()

renderer.setSize(window.innerWidth * 0.75, window.innerHeight * 0.75)

function intersect(pos: THREE.Vector2) {
  raycaster.setFromCamera(pos, camera)
  return raycaster.intersectObjects(scene.children)
}

function move(delta: number) {
  if (!navpath || navpath.length <= 0) {
    return
  }
  let targetPosition = navpath[0]
  const distance = targetPosition.clone().sub(agentGroup.position)
  if (distance.lengthSq() > 0.5 * 0.05) {
    distance.normalize()
    agentGroup.position.add(distance.multiplyScalar(delta * 5))
  } else {
    navpath.shift()
  }
}

const clock = new THREE.Clock()
function update() {
  move(clock.getDelta())
  orbitControls.update()
  requestAnimationFrame(update)
  renderer.render(scene, camera)
}
update()

onMounted(() => {
  mainDiv.value?.appendChild(renderer.domElement)
  mainDiv.value?.addEventListener('click', (event) => {
    // THREE RAYCASTER
    clickPos.x = (event.clientX / window.innerWidth) * 2 - 1
    clickPos.y = -(event.clientY / window.innerHeight) * 2 + 1

    const found = intersect(clickPos)
    if (found.length > 0) {
      let target = found[0].point
      const agentpos = agentGroup.position

      groupID = pathfinding.getGroup(ZONE, agentGroup.position)
      // find closest node to agent, just in case agent is out of bounds
      const closest = pathfinding.getClosestNode(agentpos, ZONE, groupID)
      navpath = pathfinding.findPath(closest.centroid, target, ZONE, groupID)
      if (navpath) {
        pathfindinghelper.reset()
        pathfindinghelper.setPlayerPosition(agentpos)
        pathfindinghelper.setTargetPosition(target)
        pathfindinghelper.setPath(navpath)
      }
    }
  })
})
</script>

<template>
  <main>
    <div ref="mainDiv" class="pt-4 w-100 d-flex justify-content-center"></div>
  </main>
</template>

<style scoped></style>
