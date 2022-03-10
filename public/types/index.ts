import { FormikProps, FormikValues } from 'formik';
import { ReactNode } from 'react';

export * from './acpaasUI.types';
export * from './editorialUI.types';
export * from './workers.types';

export enum LoadingState {
	Loading = 'loading',
	Creating = 'creating',
	Updating = 'updating',
	Loaded = 'loaded',
	Error = 'error',
}

export interface SearchParams {
	page?: number;
	pagesize?: number;
	skip?: number;
	limit?: number;
	sort?: string;
	search?: string;
	[key: string]: any;
}

export interface OrderBy {
	key: string;
	order: 'asc' | 'desc';
}

export type HandlerFn = (...args: any[]) => any;

export interface Links {
	self?: {
		href: string;
	};
	first?: {
		href: string;
	};
	last?: {
		href: string;
	};
	prev?: {
		href: string;
	};
	next?: {
		href: string;
	};
}

export interface Page {
	size: number;
	totalElements: number;
	totalPages: number;
	number: number;
}

export interface EmbeddedResponse<T> {
	_embedded: T[];
	_links: Links;
	_page: Page;
}

export interface EmbeddedResourceResponse<T extends string = string, V = unknown> {
	_embedded: Record<T, V[]>;
	_links: Links;
	_page: Page;
}

export type FormikChildrenFn<Values = FormikValues> = (
	formikProps: FormikProps<Values>
) => ReactNode;
