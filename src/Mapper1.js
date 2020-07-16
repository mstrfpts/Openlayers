import React from "react";
//import Grid from '@material-ui/core/Grid'

// Start Openlayers imports
import { Map, View } from "ol";
import { GeoJSON, XYZ } from "ol/format";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import {
  Vector as VectorSource,
  OSM as OSMSource,
  XYZ as XYZSource,
  TileWMS as TileWMSSource,
} from "ol/source";
import {
  Select as SelectInteraction,
  defaults as DefaultInteractions,
} from "ol/interaction";
import {
  Attribution,
  ScaleLine,
  ZoomSlider,
  Zoom,
  Rotate,
  MousePosition,
  OverviewMap,
  defaults as DefaultControls,
} from "ol/control";
import {
  Style,
  Fill as FillStyle,
  RegularShape as RegularShapeStyle,
  Stroke as StrokeStyle,
} from "ol/style";

import { Projection, get as getProjection } from "ol/proj";

const Mapper1 = () => {
  const [height, setheight] = React.useState(window.innerHeight);
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
      layers: [
        new TileLayer({
          source: new OSMSource(),
          //   source: new XYZSource({
          //     url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          //     projection: "EPSG:3857",
          //  }),
        }),
        // new TileLayer({
        //   source: new TileWMSSource({
        //     url: "https://ahocevar.com/geoserver/wms",
        //     params: {
        //       layers: "topp:states",
        //       TILED: true,
        //     },
        //     projection: "EPSG:4326",
        //   }),
        //   name: "USA",
        // }),
      ],
      controls: DefaultControls().extend([
        //new ZoomSlider(),
        new MousePosition(),
        //new ScaleLine(),
        //new OverviewMap(),
      ]),
      view: new View({
        //projection: "EPSG:3857",
        center: [-23637.5, 7184183.0],
        zoom: 6.5,
        minZoom: 6.5,
      }),
    });
  });

  const style = {
    width: "100%",
    height: height,
    backgroundColor: "#cccccc",
  };

  return (
    <div>
      <div id="map" style={style}>
        Mapper1
      </div>
    </div>
  );
};

export default Mapper1;
