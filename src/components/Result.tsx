import { Button, Stack, Typography } from "@mui/material";
import { useQuiz } from "./QuizContext";

export default function Result() {
	const {
		pointsEarned,
		highScore,
		setStartQuiz,
		setCurrentIndex,
		setPointsEarned,
		setResult,
	} = useQuiz();

	const handleResetQuiz = () => {
		setStartQuiz(false);
		setCurrentIndex(0);
		setPointsEarned(0);
		setResult(false);
	};
	return (
		<Stack spacing={2}>
			<Typography variant="h3">Result</Typography>
			<Typography>Your Score is: {pointsEarned}</Typography>
			<Typography>Higest Score Acheived: {highScore}</Typography>
			<Button variant="outlined" color="inherit" onClick={handleResetQuiz}>
				Re-Attempt Quiz
			</Button>
		</Stack>
	);
}
