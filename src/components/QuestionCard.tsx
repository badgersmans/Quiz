import { View } from 'react-native'
import {useEffect, useState} from 'react'
import AnswerOption from './AnswerOption'
import { Question } from '../types'
import Card from './Card'

type QuestionCard = {
    question: Question
}

export default function QuestionCard({ question }: QuestionCard) {
    useEffect(() => {
        console.log('question card mounted...')

        return () => {
            console.log('question card UNmounted')
        }
    }, [])

    console.log('question card rendered...')
    return (
        <Card title={question.title}>
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