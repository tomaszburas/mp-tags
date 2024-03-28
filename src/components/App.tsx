import { TagsTable } from "@/components/TagsTable";
import { TagsProvider } from "@/context/TagsContext";

export const App = () => {
	return (
		<section className="flex w-full flex-col items-center">
			<TagsProvider>
				<div className="w-96">
					<TagsTable />
				</div>
			</TagsProvider>
		</section>
	);
};
