import { useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
// import { useDispatch } from 'react-redux';
import { getPatient } from '../../connection-with-server/client-to-server';
import { TablePatientType } from '../../types/types';

export type RolodexTablePropsType = {
  patientsList: TablePatientType[]
};

const colums:ColumnsType<TablePatientType> = [
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

export default function RolodexTable(props:RolodexTablePropsType) {
  const { patientsList } = props;
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  return (
    <div className="section">
      <Table
        columns={colums}
        dataSource={patientsList}
        rowKey={(record) => record.id}
        onRow={(record) => ({
          onClick: () => {
            getPatient(record.id);
            return navigate(`patient-card/${record.id}`);
          },
        })}
      />
      {/*
        TODO добавить стилей pointer, :hover
        документация здесь: https://smartdevpreneur.com/ant-design-table-row-example-height-background-color-and-onclick/
      */}
    </div>
  );
}
