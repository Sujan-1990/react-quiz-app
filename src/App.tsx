import "./App.css";
import { useEffect, useState } from "react";
import { IQuestion } from "./interface/question";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";

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

	let totalPoints = 0;
	questions?.map((x) => {
		totalPoints += x.points;
	});

	const totalQuestions = questions?.length ?? 0;
	const currentQuestion = questions?.[currentIndex];

	if (questions?.length === 0) return null;

	return (
		<>
			{!startQuiz ? (
				<Welcome totalQuestions={totalQuestions!} setStartQuiz={setStartQuiz} />
			) : (
				<Quiz
					setCurrentIndex={setCurrentIndex}
					currentIndex={currentIndex}
					totalQuestions={totalQuestions}
					totalPoints={totalPoints}
					pointsEarned={pointsEarned}
					setPointsEarned={setPointsEarned}
					currentQuestion={currentQuestion!}
					setStartQuiz={setStartQuiz}
					highScore={highScore}
					setHighScore={setHighScore}
				/>
			)}
		</>
	);
}

export default App;
