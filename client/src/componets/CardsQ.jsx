import React from 'react'
import {useContext} from 'react';  
import {appContext} from '../App';
import Question from './CardQuiz';

const CardsQ= () => {
    const {QuizData, setQuizData} = useContext(appContext)
            console.log('backend data: ', QuizData)
    return (
        <div>
            {QuizData.map((cardData, i) => {
                {console.log(cardData)}
                return (
                <Question key={i} cardData={cardData} />
                )
            })}
      </div>
    )
  }

  export default CardsQ
