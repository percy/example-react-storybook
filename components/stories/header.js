import React from 'react';
import Header from '../Header';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Header', module)
  .add('default view', () => {
    return (
      <div className="todoapp">
        <Header addTodo={action('Add Todo PLEASE!!!!')}/>
      </div>
    );
  });
