import { Header } from './components/Header';
import { Post, type PostType } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/pratesMath.png',
			name: 'Matheus Prates',
			role: 'Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera 👋' },
			{ type: 'paragraph', content: 'New project on my github 🚀' },
			{ type: 'link', content: 'john.doe/design' },
		],
		publishedAt: new Date('2022-05-03 20:00:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/pratesMath.png',
			name: 'John Doe',
			role: 'Unknown',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera 👋' },
			{ type: 'paragraph', content: 'New project on my github 🚀' },
		],
		publishedAt: new Date('2022-05-10 20:00:00'),
	},
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}