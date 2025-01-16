import { Box, Button, Stack, Typography } from "@mui/material";
import { IQuestion } from "../interface/question";
import { useState } from "react";

export default function Question({
	currentQuestion,
	setCurrentIndex,
	setPointsEarned,
}: {
	currentQuestion: IQuestion;
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
	setPointsEarned: React.Dispatch<React.SetStateAction<number>>;
}) {
	const [hasAnswered, setHasAnswered] = useState(false);

	function handleAnswer(i: number) {
		setHasAnswered(true);
		const correctAnswer = i === currentQuestion.correctOption;
		console.log(correctAnswer ? "correctanswer" : "wrong answer");
		correctAnswer &&
			setPointsEarned((pointsEarned) => pointsEarned + currentQuestion.points);
	}

	function handleNextQuestion() {
		setCurrentIndex((x) => x + 1);
		setHasAnswered(false);
	}

	return (
		<Stack spacing={4}>
			<Typography>{currentQuestion.question}</Typography>

			<Stack spacing={1}>
				{currentQuestion.options.map((option: string, i: number) =>
					!hasAnswered ? (
						<Box
							key={i}
							sx={{
								cursor: "pointer",
								border: "1px solid skyblue",
								borderRadius: 1,
							}}
							onClick={() => handleAnswer(i)}
						>
							{option}
						</Box>
					) : (
						<Box
							key={i}
							sx={{
								border: "1px solid red",
								borderRadius: 1,
							}}
						>
							{option}
						</Box>
					)
				)}
			</Stack>

			{/* <ol>
				{currentQuestion.options.map((option: string, i: number) => (
					<li
						key={option}
						style={{ cursor: "pointer" }}
						onClick={() => handleAnswer(i)}
					>
						{option}
					</li>
				))}
			</ol> */}

			<Button
				variant="outlined"
				color="success"
				// onClick={() => setCurrentIndex((x) => x + 1)}
				onClick={handleNextQuestion}
				disabled={!hasAnswered}
			>
				Next
			</Button>
		</Stack>
	);
}
