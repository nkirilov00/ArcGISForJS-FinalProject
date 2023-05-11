require([
        "esri/config",
        "esri/WebMap",
        "esri/views/MapView",
        "esri/widgets/ScaleBar",
        "esri/widgets/Legend",
        "esri/widgets/Home"
      ], (esriConfig, WebMap, MapView, ScaleBar, Legend, Home) => {
    esriConfig.apiKey = "AAPK898635d0dbd142cbb73c8ae90939b00dsluSvQqV_ovmXUso6o8UgF9j1ih0fYIesQxWAV3DehJ8-xJopEiysy3ktykd5FxT"

    const webMap = new WebMap({
        portalItem: {
            id: "2430790f3e074b3e92b0fbca99fe4818"
        }
    })

    const view = new MapView({
        container: "viewDiv",
        map: webMap
    });

    const homeBtn = new Home({
        view: view
    })

    view.ui.add(homeBtn, "top-left");

})