import { SelectHTMLAttributes } from 'react';

export type TSelectOption = {
  value: string;
  label: string;
};

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  options: TSelectOption[];
}
