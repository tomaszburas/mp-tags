import { TagsProvider } from "../context/TagsContext";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { TagsTable } from "./TagsTable";

export const App = () => {
	return (
		<main className="mx-auto flex h-screen max-w-md flex-col items-center p-4 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
			<Navigation />
			<TagsProvider>
				<section className="my-8 w-full md:w-96">
					<TagsTable />
				</section>
			</TagsProvider>
			<Footer />
		</main>
	);
};
