import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import questions from '../questions';
import { Question } from '../types';

type QuizContext = {
    question?: Question;
    questionIndex: number;
    onNext: () => void;
    selectedOption?: string;
    setSelectedOption: (newOption: string) => void;
    score: number;
    bestScore: number;
    totalQuestions: number;
}

const QuizContext = createContext<QuizContext>({
    questionIndex: 0,
    onNext: () => {},
    setSelectedOption: () => {},
    score: 0,
    bestScore: 0,
    totalQuestions: 0,
});

export default function QuizProvider({children}: PropsWithChildren) {
    const [questionIndex, setQuestionIndex] = useState(1);
    const [selectedOption, setSelectedOption] = useState<string | undefined>();
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const question = questions[questionIndex];
    const isFinished = questionIndex >= questions.length;

    useEffect(() => {
        console.log('check best score isFinished', isFinished)
        // check if there is a new best score
        if(isFinished === true && score > bestScore) {
            setBestScore(score)
        }
    }, [isFinished]);

    const restart = () => {
        setQuestionIndex(0);
        setSelectedOption('');
        setScore(0);
    }

    const onNext = () => {
        //if game finished, restart the game
        if(isFinished) {
            restart();
            return;
        }

        // check if answer is correct
        if(selectedOption === question?.correctAnswer) {
            setScore((currScore) => currScore + 1)
        }

        setQuestionIndex((currIndex) => currIndex + 1);
    }
    // console.log("score is? ", score)

  return (
    <QuizContext.Provider value={{
        question, 
        questionIndex, 
        onNext, 
        selectedOption, 
        setSelectedOption,
        score,
        bestScore,
        totalQuestions: questions.length
    }}
    >
        {children}
    </QuizContext.Provider>
  )
}

export const useQuizContext = () => useContext(QuizContext);