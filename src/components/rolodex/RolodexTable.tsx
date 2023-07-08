import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

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

export default function RolodexTable() {
  return (
    <Table columns={colums} dataSource={data} />
  );
}
