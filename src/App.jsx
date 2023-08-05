import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Counter from './components/Counter/Counter';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div>
      <div className='wrapper'>
        <Header />
        <main>
          <Counter />
          <Modal />
        </main>
      </div>
    </div>
  );
}

export default App
