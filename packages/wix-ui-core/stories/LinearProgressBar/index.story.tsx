import * as React from 'react';
import { LinearProgressBar } from '../../src/components/linear-progress-bar';
import { LinearProgressBarProps } from '../../src/components/linear-progress-bar/LinearProgressBar';
import style from './style.st.css';
import { Category } from '../utils';

export default {
  category: Category.COMPONENTS,
  name: 'LinearProgressBar',
  storyName: 'LinearProgressBar',
  component: LinearProgressBar,
  componentPath: '../../src/components/linear-progress-bar',

  componentProps: setState => ({
    ...style('root'),
    'data-hook': 'progress-bar',
    value: 10,
    showProgressIndication: false,
    error: false,
  }),
};
