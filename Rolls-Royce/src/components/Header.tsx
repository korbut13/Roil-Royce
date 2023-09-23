import { Link, useLocation } from 'react-router-dom';
import { useDisclosure} from '@mantine/hooks';
import { Burger } from '@mantine/core';
import { Search } from 'tabler-icons-react';
import {motion as m} from "framer-motion";

import logo from '../assets/rolls-royce.svg';
import { HeaderProps } from '../types/props';

const Header:React.FC<HeaderProps> = ({visibleMap, onChangeVisible}) => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  const location = useLocation();

  return (
    <m.div
    initial={!visibleMap ? {width:"100%"} : {width:"100%"}}
    animate={!visibleMap ? {width:"100%"} : {width:"100%", transition:{ duration:1, ease:"linear"}}}

    className="header">
      <Burger opened={opened} onClick={toggle} aria-label={label} />
      <Link to={"/"} className="logo">
        <img src={logo} alt="Rolls-Royce Logo" className="logo__img" />
      </Link>
      <div
        onClick={onChangeVisible}
        className="header__search">
          {location.pathname !== "/products" && (<>
            <Search
            size={28}
            strokeWidth={1.5}
            color='white'
          />
          <span>Find a dealer</span></>)}

      </div>
    </m.div>
  )
};

export default Header;
