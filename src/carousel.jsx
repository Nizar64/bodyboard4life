import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  { src: "https://i.imgur.com/IngWYgt.jpg", caption: "" },
  { src: "https://i.imgur.com/qmnHkbb.jpg", caption: "" },
  { src: "https://i.imgur.com/pJG1w26.jpg", caption: "" },
  // {
  //   src: "https://i.imgur.com/2XxEmki.jpg?3"
  //   //altText: 'Slide 3',
  //   //caption: 'Slide 3',
  //   //header: 'Slide 3 Header'
  // },
  // {
  //   src: "https://i.imgur.com/V1gcu8m.jpg?1"
  //   //altText: 'Slide 4',
  //   //caption: 'Slide 4',
  //   //header: 'Slide 4 Header'
  // },
  // {
  //   src: "https://i.imgur.com/Rfotqx8.jpg"

  //   //altText: 'Slide 5',
  //   //caption: 'Slide 5',
  //   //header: 'Slide 5 Header'
  // },

  // {
  //   src: "https://i.imgur.com/pBS91Dq.jpg?1"
  // },

  // {
  //   src: "https://i.imgur.com/oI9vkfO.jpg?1"
  // },

  // {
  //   src: "https://i.imgur.com/XrcyrTd.jpg?1"
  // },

  // {
  //   src: ""
  // }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
