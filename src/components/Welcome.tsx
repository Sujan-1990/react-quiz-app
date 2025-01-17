import { Button, Stack, Typography } from "@mui/material";

export default function Welcome({
	totalQuestions,
	setStartQuiz,
}: {
	totalQuestions: number;
	setStartQuiz: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<Stack spacing={5}>
			<Typography variant="h3">Welcome</Typography>
			<Typography variant="h5">
				{totalQuestions} questions to test your React Mastery
			</Typography>
			<Button variant="outlined" fullWidth onClick={() => setStartQuiz(true)}>
				Start
			</Button>
		</Stack>
	);
}
