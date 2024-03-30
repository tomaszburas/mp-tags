import { StackExchangeUrl } from "../config";
import { type ResponseAPI, type StackExchangeError, type Tag } from "../types";

export const getTags = async (): Promise<ResponseAPI<Tag[]>> => {
	try {
		const response = await fetch(
			`${StackExchangeUrl}/tags?order=desc&sort=popular&site=stackoverflow`,
		);
		const data = (await response.json()) as { items: Tag[] } | StackExchangeError;

		if ("error_id" in data) {
			throw new Error(data.error_message);
		}

		return { ok: true, data: data.items };
	} catch (error) {
		console.error(error);
		if (error instanceof Error) {
			return { ok: false, message: error.message };
		}
		return { ok: false, message: "An unknown error occurred" };
	}
};
