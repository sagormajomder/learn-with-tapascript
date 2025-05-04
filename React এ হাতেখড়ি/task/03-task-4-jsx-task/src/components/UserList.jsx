import PropsTypes from 'prop-types';
import User from './User';

const UserList = ({ users }) => {
  return (
    <ul className='grid grid-cols-3 gap-3'>
      <User users={users} />
    </ul>
  );
};

UserList.propTypes = {
  users: PropsTypes.array.isRequired,
};

export default UserList;
