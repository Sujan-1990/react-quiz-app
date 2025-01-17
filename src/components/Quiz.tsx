import { Stack } from "@mui/material";
import { IQuestion } from "../interface/question";
import QuizProgress from "./QuizProgress";
import Question from "./Question";

export default function Quiz({
	currentIndex,
	totalQuestions,
	totalPoints,
	pointsEarned,
	currentQuestion,
	setCurrentIndex,
	setPointsEarned,
}: {
	currentIndex: number;
	totalQuestions: number;
	totalPoints: number;
	pointsEarned: number;
	currentQuestion: IQuestion;
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
	setPointsEarned: React.Dispatch<React.SetStateAction<number>>;
}) {
	return (
		<Stack spacing={5}>
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
			/>
		</Stack>
	);
}
