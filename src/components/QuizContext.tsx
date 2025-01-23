import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { IQuestion } from "../interface/question";

const QuizContext = createContext<any>(undefined);

function QuizProvider({ children }: { children: ReactNode }) {
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

	if (questions?.length === 0) return null;

	const value = {
		startQuiz,
		setStartQuiz,
		questions,
		setQuestions,
		currentIndex,
		setCurrentIndex,
		pointsEarned,
		setPointsEarned,
		highScore,
		setHighScore,
		result,
		setResult,
		currentQuestion,
		totalQuestions,
		totalPoints,
	};

	return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

function useQuiz() {
	const context = useContext(QuizContext);

	if (context === undefined)
		throw new Error("PostContext was used outside of the PostProvider");
	return context;
}

export { QuizProvider, useQuiz };
