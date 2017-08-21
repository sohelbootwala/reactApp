import React from 'react';
import TodosList from './todos-list';
import TodosListHeader from './todos-list-header';

const todos = [
{
  task: 'make React tutorial',
  isCompleted: false
},
{
  task: 'eat dinner',
  isCompleted: true
}
];

export default class App extends React.Component {
  render() {
      return (
        <div>
          <h1>React app todos list</h1>
          <TodosList />
        </div>
      );
  }
}
