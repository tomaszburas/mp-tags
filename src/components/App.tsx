import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { TagsTable } from "@/components/TagsTable";
import { TagsProvider } from "@/context/TagsContext";

export const App = () => {
	return (
		<section className="sm:py lx:max-w-7xl mx-auto flex h-screen max-w-md flex-col items-center px-4 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
			<Navigation />
			<TagsProvider>
				<div className="mb-4 w-96">
					<TagsTable />
				</div>
			</TagsProvider>
			<Footer />
		</section>
	);
};
