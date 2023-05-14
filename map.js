require([
        "esri/config",
        "esri/WebMap",
        "esri/views/MapView",
        "esri/widgets/ScaleBar",
        "esri/widgets/Legend",
        "esri/widgets/Home",
        "esri/widgets/LayerList"
      ], (esriConfig, WebMap, MapView, ScaleBar, Legend, Home, LayerList) => {
    esriConfig.apiKey = "AAPKa795d958cc3c4e188e53c911afcbb6acpFec45hz6LPXZntUPni-2_4tkxobH-zG_puKsrcE4hY1e_rZhKHFtotTeWGYacF6"
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

    const legend = new Legend({
        view: view
    })

    view.ui.add(legend, "bottom-left");

    const scaleBar = new ScaleBar({
        view: view,
        unit: "metric",
        style:"ruler",
    })

    view.ui.add(scaleBar, "bottom-right");
    
    view.ui.add("layerList-btn", "top-right");

    const layerList = new LayerList ({
        view: view
    })

    view.ui.add("basemap-btn", "top-right")   
    view.ui.add(layerList, "top-right")

    document
    .getElementById("layerList-btn")
    .addEventListener("click", function() {
        toggleButton ()
    })

    function toggleButton () {
        const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
        let currentProp = layerListEl.style.getPropertyValue("display");

        layerListEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
    }
})