import React from "react";
// // import { Map, View, Tile } from "ol";
// // import { OSM } from "ol/source";
// import Mapper from "./Mapper";
// import Mapper1 from "./Mapper1";
//import Mapper2 from "./Mapper2";
//import Mapper3 from "./Mapper3";
import { SomeData } from "./API";

/*export default class App extends Component {
  render() {
    return <div>Hi</div>;
  }
}*/

function App() {
  return (
    <div>
      <Header />
      {/*<Mapper3 />*/}
      {/*<Mapper2 />*/}
      {/*<Mapper1 />*/}
      {/*<Mapper />*/}
      <div>{SomeData()}</div>
    </div>
  );
}

const Header = () => {
  const greet = "Hey there";
  return <div>{greet}</div>;
};

/*const Mapper = () => {
  const map = new Map({
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
    layers: [
      new Tile({
        source: new OSM(),
      }),
    ],
    target: "mapp",
  });

  return <div id="mapp">asdf</div>;
};*/

export default App;
