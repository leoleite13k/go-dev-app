import { ButtonHTMLAttributes } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  color?: string;
  isLoading?: boolean;
  LeftIcon?: () => JSX.Element | null;
  RightIcon?: () => JSX.Element | null;
}

export type TColumn = {
  justifyContent?: 'flex-start' | 'flex-end' | 'center';
};
