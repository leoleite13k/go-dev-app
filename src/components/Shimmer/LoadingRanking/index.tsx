import React from 'react';

import Skeleton from '../../Skeleton';
import { Container } from './styles';

const NUMBER_OF_ITENS = 20;

export const LoadingRanking: React.FC = () => (
  <Container>
    <table>
      <tr>
        <th> </th>
        <th>Nome</th>
        <th>Level</th>
        <th>Pontos</th>
      </tr>
      {Array(NUMBER_OF_ITENS)
        .fill('')
        .map(() => (
          <tr>
            <td>
              <Skeleton className="skeleton" />
            </td>
            <td>
              <Skeleton className="skeleton" />
            </td>
            <td>
              <Skeleton className="skeleton" />
            </td>
            <td>
              <Skeleton className="skeleton" />
            </td>
          </tr>
        ))}

      <tfoot>
        <td className="pages">
          <b>Página </b>
        </td>
        <td> </td>
        <td> </td>
        <td className="buttons"> </td>
      </tfoot>
    </table>
  </Container>
);
