import { Stack } from "@mui/material";
import { IQuestion } from "../interface/question";
import QuizProgress from "./QuizProgress";
import Question from "./Question";
import { useState } from "react";
import Result from "./Result";

export default function Quiz({
	currentIndex,
	totalQuestions,
	totalPoints,
	pointsEarned,
	currentQuestion,
	setCurrentIndex,
	setPointsEarned,
	setStartQuiz,
	highScore,
	setHighScore,
}: {
	currentIndex: number;
	totalQuestions: number;
	totalPoints: number;
	pointsEarned: number;
	currentQuestion: IQuestion;
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
	setPointsEarned: React.Dispatch<React.SetStateAction<number>>;
	setStartQuiz: React.Dispatch<React.SetStateAction<boolean>>;
	highScore: number;
	setHighScore: React.Dispatch<React.SetStateAction<number>>;
}) {
	const [result, setResult] = useState(false);

	return (
		<Stack spacing={5}>
			{!result ? (
				<>
					<QuizProgress
						currentIndex={currentIndex}
						totalQuestions={totalQuestions}
						totalPoints={totalPoints}
						pointsEarned={pointsEarned}
					/>
					<Question
						currentQuestion={currentQuestion}
						setCurrentIndex={setCurrentIndex}
						setPointsEarned={setPointsEarned}
						totalQuestions={totalQuestions}
						currentIndex={currentIndex}
						setResult={setResult}
						setHighScore={setHighScore}
						pointsEarned={pointsEarned}
						highScore={highScore}
					/>
				</>
			) : (
				<Result
					pointsEarned={pointsEarned}
					highScore={highScore}
					setStartQuiz={setStartQuiz}
					setCurrentIndex={setCurrentIndex}
					setPointsEarned={setPointsEarned}
				/>
			)}
		</Stack>
	);
}
