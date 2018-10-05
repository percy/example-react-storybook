import React from 'react';
import MainSection from '../MainSection';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('MainSection', module)
  .add('all active', () => {
    const todoItems = [
      { id: 'one', text: 'Item One', completed: false },
      { id: 'two', text: 'Item Two', completed: false },
    ];

    return getMainSection(todoItems);
  })
  .add('some completed', () => {
    const todoItems = [
      { id: 'one', text: 'Item One', completed: false },
      { id: 'two', text: 'Item Two', completed: true },
    ];

    return getMainSection(todoItems);
  })
  .add('all completed', () => {
    const todoItems = [
      { id: 'one', text: 'Item One', completed: true },
      { id: 'two', text: 'Item Two', completed: true },
    ];

    return getMainSection(todoItems);
  });

function getMainSection(todos) {
  const actions = {
    clearCompleted: action('clearCompleted'),
    completeAll: action('completeAll')
  };

  return (
    <div className="todoapp">
      <MainSection todos={todos} actions={actions} />
    </div>
  );
}
