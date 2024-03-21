import React from 'react'
import Imglogo from '../assets/quiz-logo.png'
const Header = () => {
  return (
    <header>
      <img src={Imglogo} alt="" />
        <h1>ReactQuiz</h1>
    </header>
  )
}

export default Header