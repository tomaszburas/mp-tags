import {
	Button,
	getKeyValue,
	Input,
	Pagination,
	Spinner,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import {
	useCallback,
	useMemo,
	useState,
	type Dispatch,
	type SetStateAction,
	type SyntheticEvent,
} from "react";
import { useTags } from "@/hooks/useTags";

const Form = ({
	max,
	setRowsPerPage,
}: {
	max: number;
	setRowsPerPage: Dispatch<SetStateAction<number>>;
}) => {
	const [value, setValue] = useState<string>("");
	const isInvalid = value !== "" && (Number(value) > max || Number(value) < 1) ? true : false;
	const handleOnSubmit = useCallback(
		(e: SyntheticEvent) => {
			e.preventDefault();
			setRowsPerPage(parseInt(value));
		},
		[value],
	);

	return (
		<form onSubmit={handleOnSubmit} className="flex gap-4">
			<Input
				type="number"
				min={1}
				max={max}
				placeholder="Tags per page"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				isInvalid={isInvalid}
				errorMessage={isInvalid && ` Please enter a number between 1 and ${max}`}
			/>
			<Button type="submit" color="secondary">
				Save
			</Button>
		</form>
	);
};

export const TagsTable = () => {
	const { tags, isLoading } = useTags();
	const [page, setPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const pages = Math.ceil(tags.items.length / rowsPerPage);

	const items = useMemo(() => {
		if (page > pages) {
			setPage(1);
		}

		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return tags.items.slice(start, end);
	}, [page, tags.items, rowsPerPage]);

	return (
		<Table
			aria-label="Stack Exchange tags table"
			sortDescriptor={tags.sortDescriptor}
			onSortChange={tags.sort}
			topContent={<Form max={tags.items.length} setRowsPerPage={setRowsPerPage} />}
			bottomContent={
				rowsPerPage < tags.items.length && (
					<div className="flex w-full justify-center">
						<Pagination
							isCompact
							showControls
							showShadow
							color="secondary"
							page={page}
							total={pages}
							onChange={(page) => setPage(page)}
						/>
					</div>
				)
			}
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
				emptyContent="No rows to display."
				items={items}
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
