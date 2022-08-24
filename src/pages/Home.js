import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import UserCard from '../components/UserCard';
import { getAllUsers } from '../store/actions/getAllUsersActions';
import { pagination } from '../utils/pagination';

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
        <section className="flex flex-col justify-center items-center w-full gap-5 mt-7 mb-10">
          {allUsers.map(user => (
            <UserCard
              key={user.id}
              name={user.first_name}
              surname={user.last_name}
              email={user.email}
              imageUrl={user.avatar}
            />
          ))}
          <div className="flex gap-5">
            {pagination(totalPages).map(number => (
              <button
                key={number}
                className={`pagination__button ${page === number && 'font-semibold'}`}
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
