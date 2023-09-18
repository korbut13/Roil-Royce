import { useDisclosure} from '@mantine/hooks';
import { Burger } from '@mantine/core';
import { Search } from 'tabler-icons-react';

import logo from '../assets/rolls-royce.svg';

const Header = ({visible, onChangeVisible}:{visible:boolean, onChangeVisible:()=>void}) => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <div className="header">
      <Burger opened={opened} onClick={toggle} aria-label={label} />
      <div className="logo">
        <img src={logo} alt="Rolls-Royce Logo" className="logo__img" />
      </div>
      <div
        onClick={onChangeVisible}
        className="header__search">
          <Search
            size={28}
            strokeWidth={1.5}
            color='white'
          />
          <span>Find a dealer</span>
      </div>
    </div>
  )
};

export default Header;
