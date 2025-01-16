import { Button, Typography } from "@mui/material";
import { IQuestion } from "../interface/question";

export default function Welcome({
	totalQuestions,
	setStartQuiz,
}: {
	totalQuestions: number;
	setStartQuiz: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<>
			<Typography variant="h3">Welcome</Typography>
			<Typography variant="h5">
				{totalQuestions} questions to test your React Mastery
			</Typography>
			<Button variant="outlined" fullWidth onClick={() => setStartQuiz(true)}>
				Start
			</Button>
		</>
	);
}
