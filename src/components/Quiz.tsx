import { useState, useEffect } from 'react';
import { questions } from '../data/questions';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>(
    []
  );

  // Shuffle questions and take first 10
  useEffect(() => {
    const shuffled = [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    setShuffledQuestions(shuffled);
  }, []);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer || quizComplete) return;
    setSelectedAnswer(answer);
    setShowExplanation(true);
    if (answer === currentQuestion?.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === 9) {
      setQuizComplete(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
    const shuffled = [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    setShuffledQuestions(shuffled);
  };

  if (!currentQuestion) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (quizComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-6">
            Quiz Complete!
          </h2>
          <p className="text-xl text-center mb-6">
            Your score: {score} out of 10
          </p>
          <div className="text-center">
            <button
              onClick={resetQuiz}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold">
              Question {currentQuestionIndex + 1}/10
            </span>
            <span className="text-lg font-semibold">Score: {score}</span>
          </div>

          <h2 className="text-xl font-bold mb-6">{currentQuestion.question}</h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerSelect(option)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 text-left rounded-lg transition-colors ${
                  selectedAnswer === null
                    ? 'hover:bg-blue-50 bg-gray-50'
                    : selectedAnswer === option
                    ? option === currentQuestion.correctAnswer
                      ? 'bg-green-100 border-green-500'
                      : 'bg-red-100 border-red-500'
                    : option === currentQuestion.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : 'bg-gray-50'
                } ${
                  selectedAnswer === null ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">{currentQuestion.explanation}</p>
            </div>
          )}

          {selectedAnswer && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleNextQuestion}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {currentQuestionIndex === 9 ? 'Finish Quiz' : 'Next Question'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
