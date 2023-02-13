import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from "./index"
export default {
    title: "atoms/Icon",
    component: Icon,
    argTypes: {
      path: {
      control: {type:'select'},
      options: ['assets/bank-card.svg',
        "assets/eye.svg",
        "assets/filter.svg",
        "assets/filter.svg",
        "assets/graph.svg",
        "assets/info.svg",
        "assets/repeat.svg",
        "assets/dashboard.svg",
        "assets/arrows.svg",
        "assets/bitcoin.svg",
        "assets/chart.svg",
        "assets/edit.svg",
        "assets/lined-star.svg"],
      },
      width: {
        control: { type: 'text' },
      },
      height:{
        control: { type: 'text' },
      }, 
    }
  } as ComponentMeta<typeof Icon>;
  const template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
  export const Icon1 = template.bind({});
  Icon1.args = {
    path: 'assets/dashboard.svg',
    width: '20px',
    height: '20px',
  };
  