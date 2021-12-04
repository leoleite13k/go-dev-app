import React, { useEffect, useCallback, useState } from 'react';
import { BigHead } from '@bigheads/core';

import { LoadingRanking } from '../../components/Shimmer';
import api from '../../services/api';
import { IRanking } from './interface';
import { Container } from './styles';

const NUMBER_OF_ITENS = 20;

const Ranking: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ranking, setRanking] = useState<IRanking>();

  const getRanking = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get('/ranking');

      setRanking(data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getRanking();
  }, [getRanking]);

  if (isLoading) return <LoadingRanking />;

  return (
    <Container>
      <table>
        <tr>
          <th> </th>
          <th>Nome</th>
          <th>Level</th>
          <th>Pontos</th>
        </tr>

        {ranking?.data.map(({ avatarOptions, fullName, level, points }) => (
          <tr>
            <td>
              <BigHead {...avatarOptions} />
            </td>
            <td>{fullName}</td>
            <td>{level}</td>
            <td>{points}</td>
          </tr>
        ))}
        {(ranking?.meta.total || 0) < NUMBER_OF_ITENS &&
          Array(NUMBER_OF_ITENS - (ranking?.meta.total || 0))
            .fill('')
            .map(() => (
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            ))}
        <tfoot>
          <td className="pages">
            <b>
              Página {ranking?.meta.currentPage}:{ranking?.meta.lastPage}
            </b>
          </td>
          <td> </td>
          <td> </td>
          <td className="buttons">
            <button type="button">Anterior</button>
            <button type="button">Próximo</button>
          </td>
        </tfoot>
      </table>
    </Container>
  );
};

export default Ranking;
