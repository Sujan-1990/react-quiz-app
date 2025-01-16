import { Button, Stack, Typography } from "@mui/material";
import { IQuestion } from "../interface/question";
import { useState } from "react";

export default function Question({
	currentQuestion,
	setCurrentIndex,
}: {
	currentQuestion: IQuestion;
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
	const [hasAnswered, setHasAnswered] = useState(false);

	function handleAnswer(i: number) {
		setHasAnswered(true);
		console.log(i === currentQuestion.correctOption);
	}

	return (
		<Stack>
			<Typography>{currentQuestion.question}</Typography>
			<ol>
				{currentQuestion.options.map((option: string, i: number) => (
					<li
						key={option}
						style={{ cursor: "pointer" }}
						onClick={() => handleAnswer(i)}
					>
						{option}
					</li>
				))}
			</ol>

			<Button
				variant="outlined"
				color="success"
				onClick={() => setCurrentIndex((x) => x + 1)}
				disabled={!hasAnswered}
			>
				Next
			</Button>
		</Stack>
	);
}
