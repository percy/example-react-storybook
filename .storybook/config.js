import { configure } from '@storybook/react';
import 'todomvc-app-css/index.css'
import 'storybook-chromatic';

function loadStories() {
  require('../components/stories/');
}

configure(loadStories, module);
