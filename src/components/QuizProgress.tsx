import { Stack, Typography, LinearProgress } from "@mui/material";

export default function QuizProgress({
	currentIndex,
	totalQuestions,
	totalPoints,
	pointsEarned,
}: {
	currentIndex: number;
	totalQuestions: number;
	totalPoints: number;
	pointsEarned: number;
}) {
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
