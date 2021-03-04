/**
 * Editorial UI types
 * https://github.com/digipolisantwerp/editorial-ui_react
 */

import { ReactNode } from 'react';

/**
 * Cascader
 */

export interface CascaderOption<Value = string | number> {
	value: Value;
	label: ReactNode;
	loading?: boolean;
	isLeaf?: boolean;
	children?: CascaderOption[];
}

/**
 * ContextHeader
 */

export interface ContextHeaderBadge {
	type: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
	name: string;
}

export interface ContextHeaderTab {
	name: string;
	target: string;
	active?: boolean;
	disabled?: boolean;
}

export interface ContextHeaderTabLinkProps {
	href: string;
}

/**
 * Filter
 */

export interface FilterItem {
	key?: string;
	value: string;
	valuePrefix?: string;
}

/**
 * NavList
 */

export interface NavListItem {
	label: string;
	description?: string;
	hasError?: boolean;
}

/**
 * Table
 */

export interface TableColumn<RowData = unknown> {
	label: string;
	value?: string;
	component?: (value: any, rowData: RowData, rowIndex: number) => ReactNode;
	headerComponent?: (value: string, label: string) => ReactNode;
	format?: (value: any, col: TableColumn<RowData>, rowData: RowData, rowIndex: number) => string;
	hidden?: boolean;
	disabled?: boolean;
	disableSorting?: boolean;
	classList?: string[];
	fallback?: string;
	ellipsis?: boolean;
	width?: string;
}
