import { useQuiz } from "./QuizContext";
import QuizProgress from "./QuizProgress";
import Question from "./Question";
import Result from "./Result";

export default function Quiz() {
	const { result } = useQuiz();
	return (
		<>
			{!result ? (
				<>
					<QuizProgress />
					<Question />
				</>
			) : (
				<Result />
			)}
		</>
	);
}
