import React, { useEffect, useCallback, useState } from 'react';

import api from '../../services/api';
import { IRanking } from './interface';
import { Container } from './styles';

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
            <td> </td>
            <td>{fullName}</td>
            <td>{level}</td>
            <td>{points}</td>
          </tr>
        ))}
        <tfoot>
          <td>
            Página {ranking?.meta.current_page}:{ranking?.meta.last_page}
          </td>
          <td> </td>
          <td> </td>
          <td className="last">
            <button type="button">Anterior</button>
            <button type="button">Próximo</button>
          </td>
        </tfoot>
      </table>
    </Container>
  );
};

export default Ranking;
