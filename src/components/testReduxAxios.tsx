import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./apiService";
import { RootState } from "./RootReducer"; // Replace with your actual rootReducer import

const TestReduxAxios: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h>List of Users</h>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error} </div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default TestReduxAxios;
