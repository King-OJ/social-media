import { MdHelp, MdHome, MdNotifications, MdChat, MdPerson } from 'react-icons/md';

const links = [
    { title: 'home', path: 'help', icon: <MdHome /> },
    { title: 'messages', path: '.', icon: <MdChat /> },
    { title: 'notifications', path: 'all-jobs', icon: <MdNotifications /> },
    { title: 'profile', path: 'profile', icon: <MdPerson /> },
    { title: 'Help', path: 'admin', icon: <MdHelp /> },
  ];

  export default links;