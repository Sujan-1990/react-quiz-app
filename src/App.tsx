import "./App.css";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import { useQuiz } from "./components/QuizContext";

function App() {
	const { startQuiz } = useQuiz();
	return <>{!startQuiz ? <Welcome /> : <Quiz />}</>;
}

export default App;
