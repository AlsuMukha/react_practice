import React from 'react'
import './Project.css'
import imgim from './image_138.png';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: 'Счетчик',
        description: 'Простой счетчик, который добавляет и вычистае значения',
        link: 'counter'
    },
    {
        id: 2,
        title: 'Опросник',
        description: 'База вопросов, на которые нужно найти правильный ответ, с помощью индикатора прогресса можно отследить степень выполнение теста',
        link: 'quiz'
    },
    {
        id: 3,
        title: 'Модальное окно',
        description: 'По нажатию на кнопку открывается модальное окно',
        link: 'modal'
    },
  ];

  console.log(projects.title)

const Project = () => {
  return (
    <div className='project'>
        <div className='container'>
        {projects.map(el =>
        <div className='project__flex'>
            <div className='project__img'>
                <img src={imgim}></img>
            </div>
             
            <div className='project__description' key={el.id}>
                <div className='project__title'><Link to={`/${el.link}`}>{el.title}</Link></div>
                <div className='project__text'>{el.description}</div>
            </div>
        </div>)}
    </div> 
    </div>
    
  )
}

export default Project