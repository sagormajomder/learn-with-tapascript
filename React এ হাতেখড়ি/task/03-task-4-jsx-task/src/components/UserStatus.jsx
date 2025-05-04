import PropsTypes from 'prop-types';
const UserStatus = ({ length, onUsers }) => {
  return (
    <div className='py-4 flex justify-between items-center mb-4'>
      <p className='bg-[#FBE4C0] text-3xl  rounded-md py-2 px-4'>
        Total user: {length}
      </p>
      <button
        className=' bg-[#FBE4C0] py-2 px-4 rounded-md font-bold text-4xl'
        onClick={() => onUsers()}>
        +
      </button>
    </div>
  );
};

UserStatus.propTypes = {
  length: PropsTypes.number.isRequired,
  onUsers: PropsTypes.func.isRequired,
};

export default UserStatus;
