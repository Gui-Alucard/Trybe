import React from 'react';
import MyName from './MyName';
import task from './Task';
import CardList from './CardList';
import './App.css';

const myTasks = ['Comer', 'Dormir', 'Codar', 'Repetir'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MyName />
       {myTasks.map((item, index) => task(item, index))}
      </header>
      <section>
       <CardList />
      </section>
    </div>
  );
}

export default App;