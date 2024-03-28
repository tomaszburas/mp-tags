export type Tag = {
	[key: string]: string | number | boolean;
	has_synonyms: boolean;
	is_moderator_only: boolean;
	is_required: boolean;
	count: number;
	name: string;
};

export type StackExchangeError = {
	error_id: number;
	error_message: string;
	error_name: string;
};

export type ResponseAPI<T> = { ok: true; data: T } | { ok: false; message: string };
