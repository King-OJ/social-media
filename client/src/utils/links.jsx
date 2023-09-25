import { MdHelp, MdHome, MdNotifications, MdChat, MdPerson } from 'react-icons/md';

const links = [
    { title: 'home', path: '/home', icon: <MdHome /> },
    { title: 'messages', path: '/messages', icon: <MdChat /> },
    { title: 'notifications', path: '/notifications', icon: <MdNotifications /> },
    { title: 'profile', path: '/profile', icon: <MdPerson /> },
    { title: 'Help', path: '/help', icon: <MdHelp /> },
  ];

  export default links;