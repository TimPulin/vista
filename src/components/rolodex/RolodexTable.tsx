import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getPatientsList, getPatient } from '../../connection-with-server/client-to-server';

type PatientType = {
  id: string,
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

const colums:ColumnsType<PatientType> = [
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

export default function RolodexTable() {
  const initialPatientList: PatientType[] = [];
  const [patientList, updatePatientList] = useState(initialPatientList);
  const navigate = useNavigate();

  useEffect(() => {
    getPatientsList().then((response) => {
      const list: PatientType[] = response.map((patient:any) => ({
        id: patient.id,
        cartNumber: patient.bank.cardNumber,
        clientFio: `${patient.firstName} ${patient?.maidenName} ${patient.lastName}`,
        birthday: patient.birthDate,
        eyesColor: patient.eyeColor,
        sex: patient.gender,
        bloodType: patient.bloodGroup,
        contacts: patient.phone,
        address: patient.address.address,
        email: patient.email,
      }));
      updatePatientList(list);
    });
  }, [updatePatientList]);

  return (
    <div className="section">
      <Table
        columns={colums}
        dataSource={patientList}
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
