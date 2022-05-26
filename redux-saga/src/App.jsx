import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncDecrementCreator, asyncIncrementCreator} from "./store/countReducer";
import {fetchUsers} from "./store/userReducer";

const App = () => {
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)
  const dispatch = useDispatch()

  return (
    <div className="app">
      <div className="count">{count}</div>
      <div className="btns">
        <button
          onClick={() => dispatch(asyncIncrementCreator())}
          className="btn"
        >Инкремент++</button>

        <button
          onClick={() => dispatch(asyncDecrementCreator())}
          className="btn"
        >Декремент--</button>

        <button
          onClick={() => dispatch(fetchUsers())}
          className="btn"
        >Получить пользователей</button>
      </div>

      <div className="users">
        {users.map(user =>
          <div
            key={user.id}
            className="user"
          >{user.name}</div>
        )}
      </div>
    </div>
  );
};

export default App;