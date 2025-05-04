import PropsTypes from 'prop-types';
import { Fragment } from 'react';

const User = ({ users }) => {
  return (
    <Fragment>
      {users.map(user => (
        <li key={user.id} className='border rounded-md p-4'>
          <p>{user.fullName}</p>
          <p>Age: {user.age}</p>
          <p>{user.occupation}</p>
        </li>
      ))}
    </Fragment>
  );
};

User.propTypes = {
  users: PropsTypes.array.isRequired,
};

export default User;
