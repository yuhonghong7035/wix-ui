import { ToggleSwitch } from '../../src/components/toggle-switch';
import style from './style.st.css';
import { Category } from '../utils';

export default {
  category: Category.COMPONENTS,
  storyName: 'ToggleSwitch',
  component: ToggleSwitch,
  componentPath: '../../src/components/toggle-switch',

  componentProps: (setState, getState) => ({
    ...style('root'),
    checked: false,
    disabled: false,
    onChange: () => setState({ checked: !getState().checked }),
    'data-hook': 'story-toggleswitch',
  }),
};
