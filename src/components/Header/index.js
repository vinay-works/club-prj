import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon, } from "react-icons/fa";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  //Button,
  Flex,
  Avatar,
} from '@chakra-ui/react';
import supabaseClient from '../../utils/supabaseClient';
import avatar from '../../avatar.jpg';
import { useGlobalContext } from '../../utils/context';
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
  },

  {
    name: 'Subscription',
    path: '/Subscription'
  }
]


const Header = () => {
  const { user, setUser } = useGlobalContext();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [loading] = useState(true)

  const signOut = async () => { 
    localStorage.removeItem('cart');
    await supabaseClient.auth.signOut();
    setUser(null);
  }

  const { colorMode, toggleColorMode } = useColorMode();

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
        <div>
      <VStack p={4}>
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound="true"
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
      </VStack>
      </div>
      {/*to create nav bar for hiding header features
      <div>
      <VStack p={4}>
        <IconButton
          icon={colorMode === "light" ? <FaHome /> : <FaUser />}
          isRound="off"
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
      </VStack>

      </div>
      */}
        <Flex direction={'row'} gap={4}>
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