import React from "react";
import { UncontrolledCarousel } from "reactstrap";


  

const items = [
  { src: "https://i.imgur.com/IngWYgt.jpg", caption: "" },
  { src: "https://i.imgur.com/qmnHkbb.jpg", caption: "" },
  { src: "https://i.imgur.com/pJG1w26.jpg", caption: "" },
  { src: "https://i.imgur.com/2XxEmki.jpg?3", caption: "" },
  { src: "https://i.imgur.com/V1gcu8m.jpg?1", caption: "" },
  { src: "https://i.imgur.com/Rfotqx8.jpg", caption: "" },
  { src: "https://i.imgur.com/pBS91Dq.jpg?1", caption: "" },
  { src: "https://i.imgur.com/oI9vkfO.jpg?1", caption: "" },
  { src: "https://i.imgur.com/XrcyrTd.jpg?1", caption: "" },
  
  
];

const Example = () => <UncontrolledCarousel items={items}  />;


export default Example;
 