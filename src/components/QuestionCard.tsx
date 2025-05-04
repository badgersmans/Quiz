import { View } from 'react-native'
import React from 'react'
import AnswerOption from './AnswerOption'
import { Question } from '../types'
import Card from './Card'

type QuestionCard = {
    question: Question
}

export default function QuestionCard({ question }: QuestionCard) {

    const selectedOption = question.options[2];

    const onOptionSelected = (option: string) => {
        console.log("selected", option)
    }

    return (
        <Card title={question.title}>
            <View style={{ gap: 10 }}>
                {question.options.map((option) => (
                    <AnswerOption
                        key={option}
                        option={option}
                        isSelected={option === selectedOption}
                        onPress={() => onOptionSelected(option)}
                    />
                ))}
            </View>
        </Card>
    )
}