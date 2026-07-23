import { Post } from './Post';

export function App() {
	return (
		<>
			<h1>Hello World</h1>
			<Post
				author="John Doe"
				content="This is a sample post."
			/>
		</>
	);
}
