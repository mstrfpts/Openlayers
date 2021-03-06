import React from "react";
//import Grid from '@material-ui/core/Grid'

// Start Openlayers imports
import { Map, View } from "ol";
//import { GeoJSON, XYZ } from "ol/format";
import {
  Tile as TileLayer,
  //Vector as VectorLayer,
  Group as layerGroup,
} from "ol/layer";
import {
  //Vector as VectorSource,
  OSM as OSMSource,
  XYZ as XYZSource,
  //TileWMS as TileWMSSource,
} from "ol/source";
// import {
//   Select as SelectInteraction,
//   defaults as DefaultInteractions,
//} from "ol/interaction";
// import {
//   Attribution,
//   ScaleLine,
//   ZoomSlider,
//   Zoom,
//   Rotate,
//   MousePosition,
//   OverviewMap,
//   defaults as DefaultControls,
//   //LayerSwitcher,
// } from "ol/control";
// import {
//   Style,
//   Fill as FillStyle,
//   RegularShape as RegularShapeStyle,
//   Stroke as StrokeStyle,
// } from "ol/style";

import "./Mapper.css";

//import { Projection, get as getProjection } from "ol/proj";

const Mapper1 = () => {
  const [height, setheight] = React.useState(window.innerHeight);
  const [layerSelected, layerSwitcher] = React.useState("OSMStandard");
  const updateDimensions = () => {
    console.log("derd, update dimensions");
    const h = window.innerWidth >= 992 ? window.innerHeight : 400;
    setheight(h);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
  });

  React.useEffect(() => {
    const map = new Map({
      target: "map",
      view: new View({
        center: [-23637.5, 7184183.0],
        zoom: 6.5,
        minZoom: 6.5,
      }),
    });
    let openStreetMapStandard = new TileLayer({
      source: new OSMSource(),
      visible: layerSelected === "OSMStandard",
      title: "OSMStandard",
    });

    let openStreetMapHumanitarian = new TileLayer({
      source: new OSMSource({
        url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      }),
      visible: layerSelected === "openStreenMapHumanitarian",
      title: "OSMHumanitarian",
    });

    let stamenTerrain = new TileLayer({
      source: new XYZSource({
        url: "http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg",
      }),
      attributions:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      visible: layerSelected === "StamenTerrain",
      title: "StamenTerrain",
    });

    console.log("derd check stamen visible", layerSelected);
    console.log(
      "derd check stamen visible",
      layerSelected === "OSMHumanitarian"
    );
    console.log("derd check stamen visible", layerSelected === "StamenTerrain");

    let baseLayerGroup = new layerGroup({
      layers: [openStreetMapHumanitarian, openStreetMapStandard, stamenTerrain],
    });
    //map.removeLayer(baseLayerGroup);
    map.addLayer(baseLayerGroup);

    baseLayerGroup.getLayers().forEach(function (element, index, array) {
      console.log("derd, element", element);
      let baseLayerTitle = element.get("title");
      console.log("derd getting base layer", baseLayerTitle);
      console.log("derd getting layer selected", layerSelected);
      console.log("derd assessing ", baseLayerTitle === layerSelected);
      element.setVisible(baseLayerTitle === layerSelected);
    });

    /*const layerSwitcher = new LayerSwitcher({
      tipLabel: "Légende", // Optional label for button
    });
    map.addControl(layerSwitcher);*/

    return () => {
      console.log("derd unmount", map);
    };
  });

  const style = {
    //width: "100%",
    height: height,
    //backgroundColor: "#cccccc",
  };

  return (
    <div id="main" className={"root"}>
      <div id="gridContainer" className={"gridContainer"}>
        <div id="grid1" className={"grid1"}>
          <div id="sidebar" className={"sidebar"}>
            <button>info</button>
            <h2>Base Layers</h2>
            <div>
              <label>
                <input
                  type="radio"
                  name="baseLayerRadioButton"
                  value="OSMStandard"
                  checked={layerSelected === "OSMStandard"}
                  onChange={() => {
                    layerSwitcher("OSMStandard");
                  }}
                />
                OSM Standard
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="baseLayerRadioButton"
                  value="OSMHumanitarian"
                  checked={layerSelected === "OSMHumanitarian"}
                  onChange={() => {
                    layerSwitcher("OSMHumanitarian");
                  }}
                />
                OSM Humanitarian
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="baseLayerRadioButton"
                  value="StamenTerrain"
                  checked={layerSelected === "StamenTerrain"}
                  onChange={() => {
                    layerSwitcher("StamenTerrain");
                  }}
                />
                Stamen Terrain
              </label>
            </div>
          </div>
        </div>
        <div id="grid2" className={"grid2"}>
          <div id="map" style={style}>
            Mapper1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapper1;
