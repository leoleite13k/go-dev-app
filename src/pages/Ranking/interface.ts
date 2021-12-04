import { IProfile } from '../../hooks/profile/interface';

type TMeta = {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPage: number;
  firstPageUrl: string;
  lastPageUrl: string;
  nextPageUrl: string | null;
  previousPageUrl: string | null;
};

export interface IRanking {
  meta: TMeta;
  data: IProfile[];
}
