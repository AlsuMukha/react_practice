import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Counter from './components/Counter/Counter';
import Modal from './components/Modal/Modal';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Quiz/Result';

const questions = [
  {
    title: 'Сколько лапок у паука?',
    variants: ['8', '4', '40'],
    correct: 0,
  },
  {
    title: 'Зимой и летом одним цветом ',
    variants: ['светофор', 'елочка', 'что угодно'],
    correct: 1,
  },
  {
    title: 'Сколько часов в сутки человеку нужно спать?',
    variants: ['весь день','всю ночь','8 часов'],
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
    <div>
    <div className='wrapper'>
      <Header />
      <main>
        <Counter />
        <Modal />
        { prosent != 100 ? <Quiz prosent = {prosent} question = {question} step ={step} onClickVariant= {onClickVariant} /> : <Result correct={correct} questions={questions}/> }
      </main>
    </div>
  </div>
  )
}

export default App
