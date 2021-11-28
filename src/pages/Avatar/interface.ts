import { AvatarProps } from '@bigheads/core';
import { TSelectOption } from '../../components/Select/interface';

export type TFormData = {
  fullName: string;
};

export interface ICustomOptions {
  field: keyof AvatarProps;
  type: 'select' | 'switch';
  title: string;
  data?: TSelectOption[];
}
