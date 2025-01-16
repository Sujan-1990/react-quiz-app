export interface IQuestion {
	id: string;
	correctOption: number;
	points: number;
	question: string;
	options: string[];
	// options: [
	// 	{
	// 		option1: string;
	// 		option2: string;
	// 		option3: string;
	// 		option4: string;
	// 	}
	// ];
}
