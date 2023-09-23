import { useSelector, connect } from 'react-redux';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { updateCurrentLinkKey } from '../store/current-link-key-slice';
import { RootStateType } from '../store';

import IconCard from './icons/card-icon';
import IconFolder from './icons/folder-icon';

function MainMenu(props: any) {
  const currentLinkKey = useSelector((store: RootStateType) => store.currentLinkKey.value);

  const handleClick = (key: string) => {
    props.updateCurrentLinkKey(key);
  };

  return (
    <Menu
      defaultSelectedKeys={[currentLinkKey]}
      theme="dark"
    >
      <Menu.Item key={1}>
        <Link to="/patient-card" onClick={() => handleClick('1')}>
          <IconCard />
        </Link>
      </Menu.Item>
      <Menu.Item key={2} onClick={() => handleClick('2')}>
        <Link to="/">
          <IconFolder />
        </Link>
      </Menu.Item>
    </Menu>

  );
}

export default connect(null, { updateCurrentLinkKey })(MainMenu);
