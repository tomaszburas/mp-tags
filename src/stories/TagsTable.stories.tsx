import type { Meta, StoryObj } from "@storybook/react";

import { TagsTable } from "../components/TagsTable";
import { TagsContext, TagsProvider } from "../context/TagsContext";

const meta: Meta<typeof TagsTable> = {
	title: "TagsTable",
	component: TagsTable,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithData: Story = {
	render: () => (
		<TagsProvider>
			<TagsTable />
		</TagsProvider>
	),
};

export const WithoutData: Story = {
	render: () => (
		<TagsContext.Provider value={{ tags: { items: [], sort: () => {} }, isLoading: false }}>
			<TagsTable />
		</TagsContext.Provider>
	),
};

export const LoadingData: Story = {
	render: () => (
		<TagsContext.Provider value={{ tags: { items: [], sort: () => {} }, isLoading: true }}>
			<TagsTable />
		</TagsContext.Provider>
	),
};
