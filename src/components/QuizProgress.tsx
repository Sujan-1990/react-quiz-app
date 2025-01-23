import { Stack, Typography, LinearProgress } from "@mui/material";
import { useQuiz } from "./QuizContext";

export default function QuizProgress() {
	const { currentIndex, totalQuestions, totalPoints, pointsEarned } = useQuiz();

	const progressBarValue = +((currentIndex + 1) / totalQuestions) * 100;

	return (
		<Stack spacing={2}>
			<LinearProgress variant="determinate" value={progressBarValue} />

			<Stack direction="row" justifyContent="space-between">
				<Typography>
					Question {currentIndex + 1}/{totalQuestions}
				</Typography>
				<Typography>
					{pointsEarned}/{totalPoints} points
				</Typography>
			</Stack>
		</Stack>
	);
}
