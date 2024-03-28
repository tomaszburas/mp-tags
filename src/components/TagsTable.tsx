import {
	getKeyValue,
	Spinner,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import { useTags } from "@/hooks/useTags";

export const TagsTable = () => {
	const { tags, isLoading } = useTags();
	const emptyContent = "No rows to display.";

	return (
		<Table
			aria-label="Stack Exchange table"
			sortDescriptor={tags.sortDescriptor}
			onSortChange={tags.sort}
		>
			<TableHeader>
				<TableColumn key="name" allowsSorting>
					NAME
				</TableColumn>
				<TableColumn key="count" allowsSorting>
					COUNT
				</TableColumn>
			</TableHeader>
			<TableBody
				emptyContent={emptyContent}
				items={tags.items}
				isLoading={isLoading}
				loadingContent={<Spinner />}
			>
				{(item) => (
					<TableRow key={item.name}>
						{(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};
