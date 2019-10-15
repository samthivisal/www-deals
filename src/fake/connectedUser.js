import { randomDate } from '../utils/common';

export const connectedUserData = () => [
  {
    username: 'Mashtomb',
    email: 'mashtomb@gmail.com',
    registrationDate: randomDate(new Date(2019, 9, 1), new Date()),
    isAdmin: true
  },{
    username: 'Iascha',
    email: 'iascha@gmail.com',
    registrationDate: randomDate(new Date(2019, 9, 30), new Date()),
    isAdmin: false
  },
];