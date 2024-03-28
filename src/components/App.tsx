import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { TagsTable } from "@/components/TagsTable";
import { TagsProvider } from "@/context/TagsContext";

export const App = () => {
	return (
		<main className="mx-auto flex h-screen max-w-md flex-col items-center p-4 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
			<Navigation />
			<TagsProvider>
				<section className="my-4 w-96">
					<TagsTable />
				</section>
			</TagsProvider>
			<Footer />
		</main>
	);
};
