import './global.css';

import { Post } from './Post';
import { Header } from './components/Header';

export function App() {
	return (
		<>
			<Header/>
			<Post
				author="John Doe"
				content="This is a sample post."
			/>
		</>
	);
}
