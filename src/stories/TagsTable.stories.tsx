import type { Meta, StoryObj } from "@storybook/react";

import { TagsTable } from "../components/TagsTable";
import { TagsContext } from "../context/TagsContext";
import { type Tag } from "../types";

const mockTags = [
	{ name: "javascript", count: 2528423 },
	{ name: "python", count: 2191734 },
	{ name: "java", count: 1917043 },
	{ name: "c#", count: 1614832 },
	{ name: "php", count: 1464311 },
	{ name: "android", count: 1416979 },
	{ name: "html", count: 1187179 },
	{ name: "jquery", count: 1034768 },
	{ name: "c++", count: 806644 },
	{ name: "css", count: 804111 },
	{ name: "ios", count: 687164 },
	{ name: "sql", count: 670698 },
	{ name: "mysql", count: 661970 },
	{ name: "r", count: 505499 },
	{ name: "reactjs", count: 476413 },
	{ name: "node.js", count: 471875 },
	{ name: "arrays", count: 416671 },
	{ name: "c", count: 403902 },
	{ name: "asp.net", count: 374584 },
	{ name: "json", count: 360294 },
	{ name: "python-3.x", count: 343565 },
	{ name: "ruby-on-rails", count: 338040 },
	{ name: ".net", count: 337827 },
	{ name: "sql-server", count: 334494 },
	{ name: "swift", count: 333345 },
	{ name: "django", count: 311747 },
	{ name: "angular", count: 304026 },
	{ name: "objective-c", count: 292321 },
	{ name: "pandas", count: 286599 },
	{ name: "excel", count: 286428 },
];

const meta: Meta<typeof TagsTable> = {
	title: "TagsTable",
	component: TagsTable,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithData: Story = {
	render: () => (
		<TagsContext.Provider
			value={{ tags: { items: mockTags as Tag[], sort: () => {} }, isLoading: false }}
		>
			<TagsTable />
		</TagsContext.Provider>
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
