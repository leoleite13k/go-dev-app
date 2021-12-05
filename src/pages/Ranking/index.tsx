import React, { useEffect, useCallback, useState } from 'react';
import { BigHead } from '@bigheads/core';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';

import { LoadingRanking } from '../../components/Shimmer';
import api from '../../services/api';
import { IRanking } from './interface';
import { Container } from './styles';

const NUMBER_OF_ITENS = 20;

const Ranking: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ranking, setRanking] = useState<IRanking>();

  const getRanking = useCallback(async (page = 1) => {
    try {
      setIsLoading(true);
      const { data } = await api.get(`/ranking?page=${page}`);

      setRanking(data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleNextPage = async () => {
    const currentPage = ranking?.meta.currentPage || 1;
    const lastPage = ranking?.meta.lastPage || 0;

    if (currentPage < lastPage) {
      await getRanking(currentPage + 1);
    }
  };

  const handlePreviusPage = async () => {
    const currentPage = ranking?.meta.currentPage || 1;
    const lastPage = ranking?.meta.lastPage || 0;

    if (currentPage > 1 && currentPage <= lastPage) {
      await getRanking(currentPage - 1);
    }
  };

  useEffect(() => {
    getRanking();
  }, [getRanking]);

  if (isLoading) return <LoadingRanking />;

  return (
    <Container>
      <table>
        <tr>
          <th> </th>
          <th>Posição</th>
          <th>Nome</th>
          <th>Level</th>
          <th>Pontos</th>
        </tr>

        {ranking?.data.map(
          ({ avatarOptions, fullName, level, points, position }) => (
            <tr>
              <td>
                <BigHead {...avatarOptions} />
              </td>
              <td>{position}</td>
              <td>{fullName}</td>
              <td>{level}</td>
              <td>{points}</td>
            </tr>
          ),
        )}
        {(ranking?.meta.total || 0) < NUMBER_OF_ITENS &&
          Array(NUMBER_OF_ITENS - (ranking?.meta.total || 0))
            .fill('')
            .map(() => (
              <tr>
                <td> </td>
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
          <td> </td>
          <td className="buttons">
            <button type="button" onClick={handlePreviusPage}>
              <IoMdArrowDropleft size={28} />
            </button>
            <button type="button" onClick={handleNextPage}>
              <IoMdArrowDropright size={28} />
            </button>
          </td>
        </tfoot>
      </table>
    </Container>
  );
};

export default Ranking;
