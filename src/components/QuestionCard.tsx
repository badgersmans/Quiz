import { View, Text } from 'react-native'
import {useEffect, useState} from 'react'
import AnswerOption from './AnswerOption'
import { Question } from '../types'
import Card from './Card'

type QuestionCard = {
    question: Question
}

export default function QuestionCard({ question }: QuestionCard) {
    const [counter, setCounter] = useState(0);
    console.log('RE-Rendered...')
    useEffect(() => {
        console.log('question card mounted...')

        return () => {
            console.log('question card UNmounted')
        }
    }, [])

    // console.log('question card rendered...')
    return (
        <Card title={question.title}>
            <Text onPress={() => setCounter((c) => c+1)} style={{fontSize: 20}}>counter: {counter}</Text>
            <View style={{ gap: 10 }}>
                {question.options.map((option) => (
                    <AnswerOption
                        key={option}
                        option={option}
                    />
                ))}
            </View>
        </Card>
    )
}