import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Counter from './components/Counter/Counter';
import Modal from './components/Modal/Modal';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Quiz/Result';
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './components/Projects/Project';

// const questions = [
//   {
//     title: 'Сколько лапок у паука?',
//     variants: ['8', '4', '40'],
//     correct: 0,
//   },
//   {
//     title: 'Зимой и летом одним цветом ',
//     variants: ['светофор', 'елочка', 'что угодно'],
//     correct: 1,
//   },
//   {
//     title: 'Сколько часов в сутки человеку нужно спать?',
//     variants: ['весь день','всю ночь','8 часов'],
//     correct: 2,
//   },
// ];

const baseURL = "https://64db776d593f57e435b10048.mockapi.io/questions";

function App() {

  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)

  const [questions, setQuestions] = useState([]);
  const question = questions[step]
  
  
useEffect(() => {
  axios.get(baseURL).then((response) => {
    setQuestions(response.data);
  });
}, []);

  const onClickVariant = (index) => {
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
