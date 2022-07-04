import React from "react";
import Box from '@mui/material/Box';
import { useState } from "react";
import "./Quiz.css"
import axios from 'axios';



function Quiz() {
    
    const questions = [
		{
			questionText: '1. Qual método é utilizado para criar componentes?',
			answerOptions: [
				{ answerText: 'React.makeComponent()', isCorrect: false },
				{ answerText: 'LReact.createComponent()', isCorrect: false },
				{ answerText: 'React.createElement()', isCorrect: true },
		
			],
		},
		{
			questionText: 'Como importamos um componente externo?',
			answerOptions: [
				{ answerText: 'import Component from “./Component”', isCorrect: true },
				{ answerText: 'require(“./Component”)', isCorrect: false },
				{ answerText: 'import “./Component”', isCorrect: false },
			
			],
		},
		{
			questionText: 'Qual hook não é nativo?',
			answerOptions: [
				{ answerText: 'useEffect()', isCorrect: false },
				{ answerText: 'useFetch()', isCorrect: true },
				{ answerText: 'useCallback()', isCorrect: false },
				
			],
		},
		{
			questionText: '4. Qual palavra deve ser utilizada para criarmos um hook?',
			answerOptions: [
				{ answerText: 'set', isCorrect: false },
				{ answerText: 'get', isCorrect: false },
				{ answerText: 'use', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			
		}
		
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			  axios.post('http://localhost:3001/person', {
				
				nota: score,
				teste:questions,
			});
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="button-quiz" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
   
                        }

export default Quiz;