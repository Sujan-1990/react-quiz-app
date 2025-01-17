import { Box, Button, Stack, Typography } from "@mui/material";
import { IQuestion } from "../interface/question";
import { useState } from "react";

export default function Question({
	currentQuestion,
	setCurrentIndex,
	setPointsEarned,
	totalQuestions,
	currentIndex,
}: {
	currentQuestion: IQuestion;
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
	setPointsEarned: React.Dispatch<React.SetStateAction<number>>;
	totalQuestions: number;
	currentIndex: number;
}) {
	const [restart, setRestart] = useState(false);
	const [hasAnswered, setHasAnswered] = useState(false);
	const [selectedOption, setSelectedOption] = useState<number | null>();

	function handleAnswer(i: number) {
		setHasAnswered(true);
		setSelectedOption(i);
		const isCorrectAnswer = i === currentQuestion.correctOption;
		isCorrectAnswer &&
			setPointsEarned((pointsEarned) => pointsEarned + currentQuestion.points);

		console.log("currentIndex=" + currentIndex);
		console.log("totalQuestions=" + totalQuestions);

		if (currentIndex + 1 == totalQuestions) {
			setRestart(true);
		}
	}

	function handleNextQuestion() {
		setCurrentIndex((x) => x + 1);
		setHasAnswered(false);
		setSelectedOption(null);
	}

	function handleRestartQuiz() {
		console.log("restart");
	}

	return (
		<Stack spacing={4}>
			<Typography>{currentQuestion.question}</Typography>
			<Stack spacing={1}>
				{currentQuestion.options.map((option: string, i: number) => (
					<Box
						key={i}
						sx={{
							cursor: !hasAnswered ? "pointer" : "default",
							border: "1px solid skyblue",
							borderRadius: 1,
							backgroundColor: hasAnswered
								? `${currentQuestion.correctOption === i ? "green" : "red"}`
								: "",
							ml: i === selectedOption ? "100px !important" : "",
						}}
						onClick={() => (!hasAnswered ? handleAnswer(i) : null)}
					>
						{option}
					</Box>
				))}
			</Stack>

			{!restart ? (
				<Button
					variant="outlined"
					color="success"
					onClick={handleNextQuestion}
					disabled={!hasAnswered}
				>
					Next
				</Button>
			) : (
				<Button variant="contained" color="warning" onClick={handleRestartQuiz}>
					Restart
				</Button>
			)}
		</Stack>
	);
}
