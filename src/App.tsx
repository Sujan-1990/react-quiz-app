import "./App.css";
import { useEffect, useState } from "react";
import { IQuestion } from "./interface/question";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import QuizProgress from "./components/QuizProgress";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
	useEffect(() => {
		try {
			const fetchData = async () => {
				const response = await fetch("http://localhost:3010/questions");
				const result = await response.json();
				setQuestions(result);
			};
			fetchData();
		} catch (error) {
			console.log("Please connect to the server");
		}
	}, []);

	const [startQuiz, setStartQuiz] = useState(false);
	const [questions, setQuestions] = useState<IQuestion[] | null>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [pointsEarned, setPointsEarned] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [result, setResult] = useState(false);

	const currentQuestion = questions?.[currentIndex];
	const totalQuestions = questions?.length ?? 0;

	let totalPoints = 0;
	questions?.map((x) => {
		totalPoints += x.points;
	});

	if (questions?.length === 0) return null;

	return (
		<>
			{!startQuiz ? (
				<Welcome totalQuestions={totalQuestions!} setStartQuiz={setStartQuiz} />
			) : (
				<Quiz>
					{!result ? (
						<>
							<QuizProgress
								currentIndex={currentIndex}
								totalQuestions={totalQuestions}
								totalPoints={totalPoints}
								pointsEarned={pointsEarned}
							/>
							<Question
								setResult={setResult}
								currentQuestion={currentQuestion!}
								setCurrentIndex={setCurrentIndex}
								setPointsEarned={setPointsEarned}
								totalQuestions={totalQuestions}
								currentIndex={currentIndex}
								setHighScore={setHighScore}
								pointsEarned={pointsEarned}
								highScore={highScore}
							/>
						</>
					) : (
						<Result
							pointsEarned={pointsEarned}
							highScore={highScore}
							setResult={setResult}
							setStartQuiz={setStartQuiz}
							setCurrentIndex={setCurrentIndex}
							setPointsEarned={setPointsEarned}
						/>
					)}
				</Quiz>
			)}
		</>
	);
}

export default App;
