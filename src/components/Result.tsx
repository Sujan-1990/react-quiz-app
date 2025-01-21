import { Button, Stack, Typography } from "@mui/material";

export default function Result({
	pointsEarned,
	highScore,
	setStartQuiz,
	setCurrentIndex,
	setPointsEarned,
	setResult,
}: {
	pointsEarned: number;
	highScore: number;
	setStartQuiz: React.Dispatch<React.SetStateAction<boolean>>;
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
	setPointsEarned: React.Dispatch<React.SetStateAction<number>>;
	setResult: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
