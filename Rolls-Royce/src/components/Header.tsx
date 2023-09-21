import { Link, useLocation } from 'react-router-dom';
import { useDisclosure} from '@mantine/hooks';
import { Burger } from '@mantine/core';
import { Search } from 'tabler-icons-react';

import logo from '../assets/rolls-royce.svg';
import { HeaderProps } from '../types/props';

const Header:React.FC<HeaderProps> = ({onChangeVisible}) => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  const location = useLocation();

  return (
    <div className="header">
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
    </div>
  )
};

export default Header;
