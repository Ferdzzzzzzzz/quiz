type section = 'cs' | 'history' | 'politics' | 'sports' | 'words' | 'xhosa'

type Question = {
  question: string
  hint?: string
  answer: string
  questionImage?: string
  answerImage?: string
  hintImage?: string
}

type Questions = Question[]

export {Question, Questions, section}
