import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
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
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Products',
    path: '/',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Sign Out',
    path: '/products',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  },
  
 
  {
    title: 'Help',
    path: '/',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];