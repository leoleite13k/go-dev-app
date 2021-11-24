import { ButtonHTMLAttributes } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  isLoading?: boolean;
  LeftIcon?: () => JSX.Element | null;
  RightIcon?: () => JSX.Element | null;
}

export interface IButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: () => JSX.Element | null;
  isLoading?: boolean;
}

export type TColumn = {
  justifyContent?: 'flex-start' | 'flex-end' | 'center';
};
