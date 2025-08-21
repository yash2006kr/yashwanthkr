// 🔑 Replace with your own Cesium ion token (free signup at cesium.com/ion)
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0YTIxNzM2Yi1iYWYzLTQwM2YtYjhmYS1lZjM1MzQwMGRkOWIiLCJpZCI6MzMzOTcyLCJpYXQiOjE3NTU3NTMxNzF9.TCWkmaWhuoReR2bx9nC5z2vsLTThmXDeqh5n8QxTA70";

const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: Cesium.createWorldTerrain(),
  imageryProvider: Cesium.createWorldImagery(), // 🌍 Earth imagery
  baseLayerPicker: false,
});

// Start with Earth mode
let showingEarth = true;

// Toggle Earth vs Sky (stars)
document.getElementById("toggleBtn").addEventListener("click", () => {
  if (showingEarth) {
    // Switch to Sky Mode
    viewer.imageryLayers.removeAll(); // remove Earth imagery
    viewer.scene.skyBox = new Cesium.SkyBox({
      sources: {
        positiveX: Cesium.buildModuleUrl("Assets/Textures/SkyBox/tycho2t3_80_px.jpg"),
        negativeX: Cesium.buildModuleUrl("Assets/Textures/SkyBox/tycho2t3_80_mx.jpg"),
        positiveY: Cesium.buildModuleUrl("Assets/Textures/SkyBox/tycho2t3_80_py.jpg"),
        negativeY: Cesium.buildModuleUrl("Assets/Textures/SkyBox/tycho2t3_80_my.jpg"),
        positiveZ: Cesium.buildModuleUrl("Assets/Textures/SkyBox/tycho2t3_80_pz.jpg"),
        negativeZ: Cesium.buildModuleUrl("Assets/Textures/SkyBox/tycho2t3_80_mz.jpg"),
      },
    });
    viewer.scene.skyAtmosphere.show = false;
  } else {
    // Switch back to Earth Mode
    viewer.imageryLayers.addImageryProvider(Cesium.createWorldImagery());
    viewer.scene.skyBox = undefined;
    viewer.scene.skyAtmosphere.show = true;
  }
  showingEarth = !showingEarth;
});
