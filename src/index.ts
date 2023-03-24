import "@babylonjs/core/Debug/debugLayer";

import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Engine } from "@babylonjs/core/Engines/engine";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { Scene } from "@babylonjs/core/scene";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";

import { SampleMaterial } from "./Materials/SampleMaterial";
import { Mesh, SceneLoader, UniversalCamera } from "@babylonjs/core";
import GalleryScene from "./Blender/building_04_nopack.babylon";

class App {
  canvas: HTMLCanvasElement = document.createElement("canvas");

  constructor() {
    // create the canvas html element and attach it to the webpage
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.canvas.id = "gameCanvas";
    document.body.appendChild(this.canvas);
    // initialize babylon scene and engine
  }

  async init() {
    const view = document.getElementById("gameCanvas") as HTMLCanvasElement;
    const engine = new Engine(view, true);

    let scene = await SceneLoader.LoadAsync(GalleryScene);

    let camera: UniversalCamera = new UniversalCamera(
      "UniversalCamera",
      new Vector3(0, 15, -10),
      scene
    );
    camera.target = new Vector3(-15, 0, 21);
    camera.attachControl(true);
    camera.applyGravity = true;
    camera.ellipsoid = new Vector3(1, 1, 1);

    const assumedFramesPerSecond = 60;
    const earthGravity = -9.81;
    scene.gravity = new Vector3(0, earthGravity / assumedFramesPerSecond, 0);
    scene.collisionsEnabled = true;
    scene.createDefaultXRExperienceAsync({
      floorMeshes: [
        scene.getNodeByID("ground_grass") as Mesh,
        scene.getNodeByID("Stairs 1") as Mesh,
        scene.getNodeByID("Stairs 2") as Mesh,
        scene.getNodeByID("Stairs 3") as Mesh,
        scene.getNodeByID("Floor 1") as Mesh,
        scene.getNodeByID("Floor 2") as Mesh,
        scene.getNodeByID("Floor 3") as Mesh,
      ],
    });

    camera.checkCollisions = true;

    // new HemisphericLight("light1", new Vector3(20, 200, 20), scene);
    // new PointLight("Spot0", new Vector3(0, 100, 5), scene);
    // var sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
    // hide/show the Inspector
    window.addEventListener("keydown", (ev) => {
      // Shift+Ctrl+Alt+I
      if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
        if (scene.debugLayer.isVisible()) {
          scene.debugLayer.hide();
        } else {
          scene.debugLayer.show();
        }
      }
    });

    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    const mesh = MeshBuilder.CreateGround("mesh", {}, scene);

    const material = new SampleMaterial("material", scene);
    mesh.material = material;

    engine.runRenderLoop(() => {
      scene.render();
    });
  }
}

let app = new App();
app.init();
