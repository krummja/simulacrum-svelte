import * as THREE from 'three';

export type RendererProps = {
  width: number,
  height: number,
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

let renderer: THREE.WebGLRenderer;
scene.add(cube);
camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

const resize = (el: HTMLElement, props: RendererProps) => {
  renderer.setSize(props.width, props.height);
  camera.aspect = props.width / props.height;
  camera.updateProjectionMatrix();
};

export const createScene = async (el: HTMLElement, props: RendererProps) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  renderer.setClearColor( 0xffffff, 0.0 );
  resize(el, props);
  animate();
};
