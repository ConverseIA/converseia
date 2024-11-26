import { Header } from './components/header';

export const App = () => {
	return (
		<main className=" flex flex-col py-8">
			<Header />
			<div className="max-w-6xl mx-auto">
				<div className="h-[calc(100vh-156px)] bg-purple-500">A</div>
			</div>
		</main>
	);
};
