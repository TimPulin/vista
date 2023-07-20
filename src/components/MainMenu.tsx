import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import IconCard from './icons/card-icon';
import IconFolder from './icons/folder-icon';

export default function MainMenu() {
  return (
    <Menu
      defaultSelectedKeys={['1']}
      theme="dark"
    >
      <Menu.Item key={1}>
        <Link to="/patient-card">
          <IconCard />
        </Link>
      </Menu.Item>
      <Menu.Item key={2}>
        <Link to="/">
          <IconFolder />
        </Link>
      </Menu.Item>
    </Menu>

  );
}
