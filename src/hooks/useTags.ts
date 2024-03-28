import { useContext } from "react";
import { TagsContext } from "@/context/TagsContext";

export const useTags = () => {
	const context = useContext(TagsContext);

	return context;
};
