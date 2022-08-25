import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../components/Loader/Loader';
import UserCard from '../../components/UserCard/UserCard';

import { getAllUsers } from '../../store/actions/getAllUsersAction';

import { pagination } from '../../utils/pagination';

import styles from './home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const allUsers = useSelector(state => state.allUsers.allUsers);
  const isLoading = useSelector(state => state.allUsers.allUsersLoading);
  const totalPages = useSelector(state => state.allUsers.totalPages);

  useEffect(() => {
    dispatch(getAllUsers(page));
  }, [page]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={styles.home}>
          {allUsers.map(user => (
            <UserCard
              key={user.id}
              name={user.first_name}
              surname={user.last_name}
              email={user.email}
              imageUrl={user.avatar}
            />
          ))}
          <div className={styles.homePaginationContainer}>
            {pagination(totalPages).map(number => (
              <button
                className={`${styles.paginationButton} ${
                  page === number && 'font-semibold'
                }`}
                key={number}
                onClick={() => setPage(number)}
              >
                {number}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
