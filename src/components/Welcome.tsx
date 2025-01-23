import { Button, Stack, Typography } from "@mui/material";
import { useQuiz } from "./QuizContext";

export default function Welcome() {
	const { setStartQuiz, totalQuestions } = useQuiz();

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
