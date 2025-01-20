import { Box, Button, Stack, Typography } from "@mui/material";
import { IQuestion } from "../interface/question";
import { useState } from "react";

export default function Question({
	currentQuestion,
	setCurrentIndex,
	setPointsEarned,
	totalQuestions,
	currentIndex,
	setResult,
	setHighScore,
	highScore,
	pointsEarned,
}: {
	currentQuestion: IQuestion;
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
	setPointsEarned: React.Dispatch<React.SetStateAction<number>>;
	totalQuestions: number;
	currentIndex: number;
	setResult: React.Dispatch<React.SetStateAction<boolean>>;
	setHighScore: React.Dispatch<React.SetStateAction<number>>;
	highScore: number;
	pointsEarned: number;
}) {
	const [showResult, setShowResult] = useState(false);
	const [hasAnswered, setHasAnswered] = useState(false);
	const [selectedOption, setSelectedOption] = useState<number | null>();

	function handleAnswer(i: number) {
		setHasAnswered(true);
		setSelectedOption(i);
		const isCorrectAnswer = i === currentQuestion.correctOption;
		isCorrectAnswer &&
			setPointsEarned((pointsEarned) => pointsEarned + currentQuestion.points);

		if (currentIndex + 1 == totalQuestions) {
			setShowResult(true);
		}
	}

	function handleNextQuestion() {
		setCurrentIndex((x) => x + 1);
		setHasAnswered(false);
		setSelectedOption(null);
	}

	function handleResult() {
		setResult(true);
		pointsEarned > highScore && setHighScore(pointsEarned);
	}

	return (
		<Stack spacing={4} width="550px">
			<Typography variant="h6">{currentQuestion.question}</Typography>
			<Stack spacing={1}>
				{currentQuestion.options.map((option: string, i: number) => (
					<Box
						key={i}
						sx={{
							cursor: !hasAnswered ? "pointer" : "default",
							border: "1px solid skyblue",
							borderRadius: 50,
							backgroundColor: hasAnswered
								? `${currentQuestion.correctOption === i ? "green" : "red"}`
								: "",
							ml: i === selectedOption ? "100px !important" : "",
							height: 50,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						onClick={() => (!hasAnswered ? handleAnswer(i) : null)}
					>
						{option}
					</Box>
				))}
			</Stack>

			{!showResult ? (
				<Button
					variant={!hasAnswered ? "contained" : "outlined"}
					color="success"
					onClick={handleNextQuestion}
					disabled={!hasAnswered}
				>
					Next
				</Button>
			) : (
				<Button variant="contained" color="info" onClick={handleResult}>
					Get My Result
				</Button>
			)}
		</Stack>
	);
}
