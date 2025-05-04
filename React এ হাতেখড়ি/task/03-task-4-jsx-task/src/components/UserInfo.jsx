import { useState } from 'react';
import Header from './Header';
import UserList from './UserList';
import UserStatus from './UserStatus';

const InitialUsers = [
  {
    id: crypto.randomUUID(),
    fullName: 'Sagor Majomder',
    age: 25,
    occupation: 'Student',
  },
  {
    id: crypto.randomUUID(),
    fullName: 'Mehedi Hasan',
    age: 26,
    occupation: 'Student',
  },
  {
    id: crypto.randomUUID(),
    fullName: 'Eshita Mondol',
    age: 21,
    occupation: 'Student',
  },
  {
    id: crypto.randomUUID(),
    fullName: 'Makhom Gain',
    age: 50,
    occupation: 'Software Engineer',
  },
];

const UserInfo = () => {
  const [users, setUsers] = useState(InitialUsers);

  function updatedUser() {
    const randomFirstName = ['Sonia', 'Eileen', 'Lester', 'Charlene', 'Jimmie'];
    const randomLastName = ['Lopez', 'Wade', 'Barnett', 'Phillips', 'Allen'];

    const randomFullName = `${
      randomFirstName[Math.floor(Math.random() * randomFirstName.length)]
    } ${randomLastName[Math.floor(Math.random() * randomLastName.length)]}`;

    const randomAge = Math.floor(Math.random() * (60 - 15 + 1) + 15);

    const randomOccupation = [
      'Software Engineer',
      'Software Developer',
      'Teacher',
      'Student',
    ];

    const newUser = {
      id: crypto.randomUUID(),
      fullName: randomFullName,
      age: randomAge,
      occupation:
        randomOccupation[Math.floor(Math.random() * randomOccupation.length)],
    };

    setUsers(u => [...u, newUser]);
  }

  const userLength = users.length;
  return (
    <div className='mx-auto text-[#26241F]'>
      <Header />
      <div className='py-2 px-8'>
        <UserStatus length={userLength} onUsers={updatedUser} />
        <UserList users={users} />
      </div>
    </div>
  );
};

export default UserInfo;
