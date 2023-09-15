import { useDisclosure } from '@mantine/hooks';
import { Burger, NavLink } from '@mantine/core';
import { Search } from 'tabler-icons-react';

import logo from '../assets/rolls-royce.svg'

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <div className="header">
      <Burger opened={opened} onClick={toggle} aria-label={label} />
      <div className="logo">
        <img src={logo} alt="Rolls-Royce Logo" className="logo__img" />
      </div>
      <NavLink label="Find a Dealer" w={200} icon={
        <Search
        size={28}
        strokeWidth={1.5}
        color={'black'}
      />
      } />
    </div>
  )
};

export default Header;
