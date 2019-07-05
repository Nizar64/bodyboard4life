import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
      src: 'https://i.imgur.com/Mrg28Od.jpg',
    altText: 'Slide 1', 
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://i.imgur.com/pJG1w26.jpg',
    altText: 'slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://i.imgur.com/0mKLIa4m.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  },
  {
    src: 'https://i.imgur.com/wGskt4rm.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4',
    header: 'Slide 4 Header'
  },
  {
    src: 'https://i.imgur.com/WyYe5QH.jpg',
    altText: 'Slide 5',
    caption: 'Slide 5',
    header: 'Slide 5 Header'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;