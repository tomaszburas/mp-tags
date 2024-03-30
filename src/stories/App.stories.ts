import type { Meta, StoryObj } from "@storybook/react";

import { App } from "../components/App";

const meta: Meta<typeof App> = {
	title: "App",
	component: App,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {},
};
