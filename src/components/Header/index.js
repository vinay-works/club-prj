/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  Button,
  Flex,
  Avatar,
} from '@chakra-ui/react';
import supabaseClient from '../../utils/supabaseClient';
import avatar from '../../avatar.jpg';
import { useGlobalContext } from '../../utils/context';
import Reservation from '../Reservations';
//import logo from '../../assets/Logo.png'; // Import your logo image


const navigations = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Gallery', //gallery
    path: '/Gallery'
  },

  {
    name: 'Membership',
    path: '/Membership'
  },


  {
    name: 'About',//about or overview
    path: '/About'
  },
  {
    name: 'Contact',
    path: '/contact'
  },

  {
    name: 'Chat',
    path: '/chat'
  },

  {
    name: 'Reservations',
    path: '/Reservations'
  },

  {
    name: 'Tournaments',
    path: '/Tournaments'
  },

  {
    name: 'Coaching Resources',
    path: '/CoachingResources'
  },

  {
    name: 'Community',
    path: '/Community'
  }

]

const Header = () => {
  const { user, setUser } = useGlobalContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  const signOut = async () => { 
    localStorage.removeItem('cart');
    await supabaseClient.auth.signOut();
    setUser(null);
  }

  return (
    <header className="bg-black text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src={""}
            alt="Logo"
            className="w-30 h-20 object-contain"
            style={{ paddingLeft: '35px' }}
          />
        </Link>

        <nav className="md:ml-auto md:mr-auto text-white flex flex-wrap items-center text-base justify-center">
          {
            navigations.map((navigation) => {
              return (
                <>
                <Link to={navigation.path} key={navigation.name} className="mr-5 hover:text-white">{navigation.name}</Link>
                </>
              )
            })
          }
        </nav>
        <Flex direction={'row'} gap={4}>
          <Link to={'/Login'} className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Login
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>

          {
            user && 
            <Menu>
              <MenuButton cursor={'pointer'} className="mt-3 lg:mt-0 md:mt-0" as={Avatar} src={avatar}>
              </MenuButton>
              <MenuList>
                <MenuGroup title={'User - ' +user.email}>
                  <MenuItem onClick={() => navigate('/orders')}>Orders</MenuItem>
                  <MenuItem onClick={signOut}>Logout</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          }
        </Flex>
      </div>
    </header>
  )
}

export default Header