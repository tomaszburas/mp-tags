import type { Meta, StoryObj } from "@storybook/react";

import { Navigation } from "../components/Navigation";

const meta: Meta<typeof Navigation> = {
	title: "Navigation",
	component: Navigation,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {},
};
