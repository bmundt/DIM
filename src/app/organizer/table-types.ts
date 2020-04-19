import { DimItem } from 'app/inventory/item-types';
import React from 'react';

export const enum SortDirection {
  ASC,
  DESC
}

type Value = string | number | boolean | undefined;

// TODO: column groupings?
// TODO: custom configs like the total column?
export interface ColumnDefinition {
  /** Unique ID for this column. */
  id: string;
  /** Whether to start with descending or ascending sort. Default: 'asc' */
  defaultSort?: SortDirection;
  /** This column can't be hidden. Default: false (column can be hidden). */
  noHide?: boolean;
  /** This column can't be sorted. Default: false (column can be sorted). */
  noSort?: boolean;
  /** A CSS grid expression for the width of the cell. Default: min-content. */
  gridWidth?: string;
  /** Header renderer */
  Header: React.ReactNode;
  /** The raw value of the column for this item. */
  value(item: DimItem): Value;
  /** Renderer for the cell. Default: value */
  Cell?(value: Value, item: DimItem): React.ReactNode;
  /** A generator for search terms matching this item. Default: No filtering. */
  filter?(value: Value, item: DimItem): string;
  /** A custom sort function. Default: Something reasonable. */
  sort?(firstValue: Value, secondValue: Value): number;
}

export interface Row {
  item: DimItem;
  values: { [columnId: string]: Value };
}

export interface ColumnSort {
  columnId: string;
  sort: SortDirection;
}
