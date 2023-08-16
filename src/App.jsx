import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Counter from './components/Counter/Counter';
import Modal from './components/Modal/Modal';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Quiz/Result';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './components/Projects/Project';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function App() {

  const [step, setStep] = useState(0)
  const question = questions[step]
  const [correct, setCorrect] = useState(0)

  const onClickVariant = (index) => {
    console.log(index)
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct+1)
    }
  }

  const prosent = Math.round(step/questions.length * 100)

  return (

    <BrowserRouter>
      <div className='wrapper'>
        <Routes>
          <Route path="*" element={<Header />} />
        </Routes>
        <main>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="counter" element={<Counter />} />
          <Route path="modal" element={<Modal />} />
          <Route path="quiz" element={ prosent != 100 ? <Quiz prosent = {prosent} question = {question} step ={step} onClickVariant= {onClickVariant} /> : <Result correct={correct} questions={questions}/> } />
        </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
