import { createContext, useState, type ReactNode } from "react";
import { type AsyncListData, useAsyncList } from "@react-stately/data";
import { getTags } from "../api/getTags";
import { type Tag } from "../types";

type Props = {
	children: ReactNode;
};

type TagsContextType = {
	tags: Pick<AsyncListData<Tag>, "items" | "sort" | "sortDescriptor">;
	isLoading: boolean;
};

export const TagsContext = createContext<TagsContextType>({
	tags: { items: [], sort: () => {} },
	isLoading: true,
});

export const TagsProvider = ({ children }: Props) => {
	const [isLoading, setIsLoading] = useState(true);

	const tags = useAsyncList({
		async load() {
			const res = await getTags();
			setIsLoading(false);

			if (!res.ok) {
				return {
					items: [],
				};
			}

			return {
				items: res.data,
			};
		},
		async sort({ items, sortDescriptor }) {
			return {
				items: items.sort((a, b) => {
					if (typeof sortDescriptor.column === "undefined") {
						return -1;
					}

					const first = a[sortDescriptor.column];
					const second = b[sortDescriptor.column];

					let cmp =
						(parseInt(first as string) || first) < (parseInt(second as string) || second) ? -1 : 1;

					if (sortDescriptor.direction === "descending") {
						cmp *= -1;
					}

					return cmp;
				}),
			};
		},
	});

	return <TagsContext.Provider value={{ tags, isLoading }}>{children}</TagsContext.Provider>;
};
