import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const notLoggedInData =[

    {
        title: 'Login',
        path: '/',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-text'
      },
      {
        title: 'Sign up',
        path: '/signup',
        icon: <AiIcons.AiOutlineLogout />,
        cName: 'nav-text'
      },




]
export const SidebarData = [
  {
    title: 'Home',
    path: '/user',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'New Product',
    path: '/addproduct',
    icon: <AiIcons.AiFillPlusSquare />,
    cName: 'nav-text'
  },

  

  
];