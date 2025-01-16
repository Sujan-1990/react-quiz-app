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
	return (
		<Stack width={500}>
			{/* <LinearProgress value={40} /> */}
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
