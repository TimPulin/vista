import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { v4 as getUniqId } from 'uuid';
import { getPatients } from '../../connection-with-server/client-to-server';

type DataType = {
  cartNumber: string,
  clientFio: string,
  birthday: string,
  eyesColor: string,
  sex: string,
  bloodType: string,
  contacts: string,
  address: string,
  email: string,
};

const colums:ColumnsType<DataType> = [
  {
    title: '№ Амб. карты',
    dataIndex: 'cartNumber',
    key: 'cartNumber',
  },
  {
    title: 'ФИО',
    dataIndex: 'clientFio',
    key: 'clientFio',
  },
  {
    title: 'Дата рождения',
    dataIndex: 'birthday',
    key: 'birthday',
  },
  {
    title: 'Цвет глаз',
    dataIndex: 'eyesColor',
    key: 'eyesColor',
  },
  {
    title: 'Пол',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'Группа крови',
    dataIndex: 'bloodType',
    key: 'bloodType',
  },
  {
    title: 'Контакт',
    dataIndex: 'contacts',
    key: 'contacts',
  },
  {
    title: 'Адрес регистрации',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Электронная почта',
    dataIndex: 'email',
    key: 'email',
  },
];

const data:DataType[] = [
  {
    cartNumber: '32134',
    clientFio: 'Гармидзян Абрам Федорович',
    birthday: '12.12.1959',
    eyesColor: 'Серые',
    sex: 'Мужской',
    bloodType: 'A+',
    contacts: '+7(095)3263282',
    address: 'г.Санкт-Петербург, ул. Савушкина, д.7',
    email: 'test@vk.com',
  },
];

// TODO описать тип массива patients
export default function RolodexTable() {
  getPatients();

  return (
    <div className="section">
      <Table columns={colums} dataSource={data} rowKey={() => getUniqId()} />
    </div>
  );
}
