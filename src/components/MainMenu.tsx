import { connect } from 'react-redux';
import { Menu, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { updateCurrentLinkKey, UpdateCurrentLinkKeyType } from '../store/slices/current-link-key-slice';

import IconCard from './icons/card-icon';
import IconFolder from './icons/folder-icon';
import { useCurrentPatientId, useCurrentLinkKey } from '../store/hooks';

type MainMenuPropsType = {
  updateCurrentLinkKey:UpdateCurrentLinkKeyType;
};

/*
TODO
  всплывающие подсказки для ссылок
  поставить updateCurrentLinkKey в useEffect на страницах
*/

function MainMenu(props: MainMenuPropsType) {
  const navigate = useNavigate();
  const currentLinkKey = useCurrentLinkKey();
  const currentPatientId = useCurrentPatientId();
  const [messageApi, contextHolder] = message.useMessage();
  const warningMessage = (text:string) => {
    messageApi.open({
      type: 'warning',
      content: text,
    });
  };

  const linkToPatientCard = () => {
    props.updateCurrentLinkKey('1');
    if (currentPatientId === null) {
      warningMessage('Для открытия карты пациента, пожалуйста, выберите пациента из таблицы');
    } else {
      navigate(`/patient-card/${currentPatientId}`);
    }
  };

  return (
    <>
      {contextHolder}
      <Menu
        defaultSelectedKeys={[currentLinkKey]}
        theme="dark"
      >
        <Menu.Item key={1}>
          {/* eslint-disable-next-line */}
          <a onClick={linkToPatientCard}>
            <IconCard />
          </a>
        </Menu.Item>
        <Menu.Item key={2} onClick={() => props.updateCurrentLinkKey('2')}>
          <Link to="/">
            <IconFolder />
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default connect(null, { updateCurrentLinkKey })(MainMenu);
