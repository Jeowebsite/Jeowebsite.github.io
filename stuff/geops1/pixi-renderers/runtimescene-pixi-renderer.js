var gdjs;
(function(gdjs2) {
  class RuntimeScenePixiRenderer {
    constructor(runtimeScene, runtimeGameRenderer) {
      this._debugDraw = null;
      this._profilerText = null;
      this._pixiRenderer = runtimeGameRenderer ? runtimeGameRenderer.getPIXIRenderer() : null;
      this._runtimeScene = runtimeScene;
      this._pixiContainer = new PIXI.Container();
      this._pixiContainer.sortableChildren = true;
    }
    onGameResolutionResized() {
      if (!this._pixiRenderer) {
        return;
      }
      const runtimeGame = this._runtimeScene.getGame();
      this._pixiContainer.scale.x = this._pixiRenderer.width / runtimeGame.getGameResolutionWidth();
      this._pixiContainer.scale.y = this._pixiRenderer.height / runtimeGame.getGameResolutionHeight();
    }
    onSceneUnloaded() {
    }
    render() {
      if (!this._pixiRenderer) {
        return;
      }
      this._pixiRenderer.backgroundColor = this._runtimeScene.getBackgroundColor();
      this._pixiRenderer.render(this._pixiContainer);
    }
    _renderProfileText() {
      const profiler = this._runtimeScene.getProfiler();
      if (!profiler) {
        return;
      }
      if (!this._profilerText) {
        this._profilerText = new PIXI.Text(" ", {
          align: "left",
          stroke: "#FFF",
          strokeThickness: 1
        });
        this._pixiContainer.addChild(this._profilerText);
      }
      const average = profiler.getFramesAverageMeasures();
      const outputs = [];
      gdjs2.Profiler.getProfilerSectionTexts("All", average, outputs);
      this._profilerText.text = outputs.join("\n");
    }
    renderDebugDraw(instances, layersCameraCoordinates) {
      if (!this._debugDraw) {
        this._debugDraw = new PIXI.Graphics();
        this._pixiContainer.addChild(this._debugDraw);
      }
      const debugDraw = this._debugDraw;
      debugDraw.clear();
      debugDraw.beginFill(6842600);
      debugDraw.lineStyle(1, 6842600, 1);
      debugDraw.fill.alpha = 0.1;
      debugDraw.alpha = 0.8;
      for (let i = 0; i < instances.length; i++) {
        const object = instances[i];
        const cameraCoords = layersCameraCoordinates[object.getLayer()];
        const rendererObject = object.getRendererObject();
        if (!cameraCoords || !rendererObject) {
          continue;
        }
        const aabb = object.getAABB();
        debugDraw.drawRect(aabb.min[0], aabb.min[1], aabb.max[0] - aabb.min[0], aabb.max[1] - aabb.min[1]);
      }
      debugDraw.endFill();
    }
    hideCursor() {
      if (!this._pixiRenderer) {
        return;
      }
      this._pixiRenderer.view.style.cursor = "none";
    }
    showCursor() {
      if (!this._pixiRenderer) {
        return;
      }
      this._pixiRenderer.view.style.cursor = "";
    }
    getPIXIContainer() {
      return this._pixiContainer;
    }
    getPIXIRenderer() {
      return this._pixiRenderer;
    }
    setLayerIndex(layer, index) {
      const layerPixiRenderer = layer.getRenderer();
      let layerPixiObject = layerPixiRenderer.getRendererObject();
      if (layer.isLightingLayer()) {
        layerPixiObject = layerPixiRenderer.getLightingSprite();
      }
      if (!layerPixiObject) {
        return;
      }
      if (this._pixiContainer.children.indexOf(layerPixiObject) === index) {
        return;
      }
      this._pixiContainer.removeChild(layerPixiObject);
      this._pixiContainer.addChildAt(layerPixiObject, index);
    }
  }
  gdjs2.RuntimeScenePixiRenderer = RuntimeScenePixiRenderer;
  gdjs2.RuntimeSceneRenderer = gdjs2.RuntimeScenePixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimescene-pixi-renderer.js.map
