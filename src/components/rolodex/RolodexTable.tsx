import { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
import { updateCurrentPatientId } from '../../store/slices/current-patient-id-slice';
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
/*
TODO
  добавить стили для :active строки таблицы
  сделать выделение выбранного пациента после возвращения на страницу
*/

export default function RolodexTable(props:RolodexTablePropsType) {
  const { patientsList } = props;
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | undefined>(undefined);
  const dispatch = useDispatch();

  const onRowClick = (rowIndex: number | undefined) => {
    setSelectedRowIndex(rowIndex);
  };

  const rowClassActive = (rowIndex: number | undefined) => (rowIndex === selectedRowIndex ? 'row-active' : '');

  return (
    <div className="section">
      <Table
        columns={colums}
        dataSource={patientsList}
        rowKey={(record) => record.id}
        rowClassName={(_, rowIndex) => rowClassActive(rowIndex)}
        onRow={(record, rowIndex) => ({
          onClick: () => {
            onRowClick(rowIndex);
            dispatch(updateCurrentPatientId(record.id));
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
