import {
  Button,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Col,
  Row,
  Divider,
} from 'antd';
import type { SelectProps, RadioChangeEvent } from 'antd';
import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import DatePickerCustom from '../custom/DatePickerCustom';
import { PatientType } from '../../types/types';

const optionsSex = [
  { label: 'Мужской', value: 'male' },
  { label: 'Женский', value: 'female' },
];

const optionsEyesColor:SelectProps['options'] = [
  { label: 'Карие', value: 'Карие' },
  { label: 'Голубые', value: 'Голубые' },
  { label: 'Серые', value: 'Серые' },
];

const optionsBloodType:SelectProps['options'] = [
  { label: 'A+', value: 'A+' },
  { label: 'A-', value: 'A-' },
  { label: 'B+', value: 'B+' },
  { label: 'B-', value: 'B-' },
];

type PatientCardFormPropsType = {
  patient: PatientType | null;
};

export default function PatientCardForm(props: PatientCardFormPropsType) {
  const { patient } = props;
  console.log(patient);

  const [patientLastName, setPatientLastName] = useState<string | undefined>(undefined);
  const [patientName, setPatientName] = useState<string | undefined>(undefined);
  const [patientMiddleName, setPatientMiddleName] = useState<string | undefined>(undefined);
  const [clientBirthDate, setClientBirthDate] = useState<Dayjs | null>(null);
  const [patientSex, setPatientSex] = useState<string | undefined>(undefined);

  const [patientEmail, setPatientEmail] = useState<string | undefined>(undefined);
  const [patientPhone, setPatientPhone] = useState<string | undefined>(undefined);

  const [patientBloodGroup, setPatientBloodGroup] = useState<string | null>(null);
  const [patientHeight, setPatientHeight] = useState<number | null>(null);
  const [patientWeight, setPatientWeight] = useState<number | null>(null);
  const [patientEyeColor, setPatientEyeColor] = useState<string | undefined>(undefined);

  const [patientHomeAddress, setPatientHomeAddress] = useState<string | undefined>(undefined);
  const [patientHomeCity, setPatientHomeCity] = useState<string | undefined>(undefined);
  const [patientHomePostalCode, setPatientHomePostalCode] = useState<string | undefined>(undefined);

  const [patientWorkAddress, setPatientWorkAddress] = useState<string | undefined>(undefined);
  const [patientWorkCity, setPatientWorkCity] = useState<string | undefined>(undefined);
  const [patientWorkPostalCode, setPatientWorkPostalCode] = useState<string | undefined>(undefined);
  const [patientWorkCompany, setPatientWorkCompany] = useState<string | undefined>(undefined);
  const [patientWorkDepartment, setPatientWorkDepartment] = useState<string | undefined>(undefined);
  const [patientWorkPosition, setPatientWorkPosition] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (patient) {
      setPatientLastName(patient.lastName);
      setPatientName(patient.firstName);
      setPatientMiddleName(patient.maidenName);
      setClientBirthDate(dayjs(new Date(patient.birthDate)));
      setPatientSex(patient.gender);
      setPatientEmail(patient.email);
      setPatientPhone(patient.phone);
      setPatientBloodGroup(patient.bloodGroup);
      setPatientHeight(patient.height);
      setPatientWeight(patient.weight);
      setPatientEyeColor(patient.eyeColor);
      setPatientHomeAddress(patient.address.address);
      setPatientHomeCity(patient.address.city);
      setPatientHomePostalCode(patient.address.postalCode);
      setPatientWorkAddress(patient.company.address.address);
      setPatientWorkCity(patient.company.address.city);
      setPatientWorkPostalCode(patient.company.address.postalCode);
      setPatientWorkCompany(patient.company.name);
      setPatientWorkDepartment(patient.company.department);
      setPatientWorkPosition(patient.company.title);
      console.log(dayjs(new Date(patient.birthDate)));
    }
  }, []);

  const countAge = () => {
    let age = null;
    if (clientBirthDate) {
      const currentDate = dayjs(Date.now());
      age = currentDate.diff(clientBirthDate, 'years');
    }
    return age;
  };

  const getPatientAge = () => {
    const WORD_LET = 'лет';
    const WORD_GOD = 'год';
    const WORD_GODA = 'года';

    const age = countAge();
    let ageLastTwoDigits = null;
    let ageLastOneDigit = null;
    let word = '';
    if (age) {
      ageLastTwoDigits = age % 100;
      ageLastOneDigit = age % 10;
      if (ageLastTwoDigits >= 11 && ageLastTwoDigits <= 14) word = WORD_LET;
      else if (ageLastOneDigit === 1) word = WORD_GOD;
      else if (ageLastOneDigit >= 2 && ageLastOneDigit <= 4) word = WORD_GODA;
      else word = WORD_LET;
    }
    return `${age} ${word}`;
  };

  const onChangeClientBirthDate = (date:Dayjs | null) => {
    if (date) {
      setClientBirthDate(date);
    }
  };

  const onChangePatientSex = ({ target: { value } }: RadioChangeEvent) => {
    setPatientSex(value);
  };

  return (
    <div className="wrap-form wrap-form--patient-card">
      <Form layout="horizontal" colon={false} className="ant-form--custom">
        <Row gutter={[37, 0]}>
          <Col span={15}>
            <Row gutter={[31, 50]} className="mb--36">
              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Фамилия"
                    value={patientLastName}
                    onChange={(event) => setPatientLastName(event.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Имя"
                    value={patientName}
                    onChange={(event) => setPatientName(event.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Отчество"
                    value={patientMiddleName}
                    onChange={(event) => setPatientMiddleName(event.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item label="Пол*" className="form-item-custom">
                  <Radio.Group
                    options={optionsSex}
                    value={patientSex}
                    optionType="button"
                    buttonStyle="solid"
                    onChange={onChangePatientSex}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Email"
                    value={patientEmail}
                    onChange={(event) => setPatientEmail(event.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Телефон"
                    value={patientPhone}
                    onChange={(event) => setPatientPhone(event.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col span={8} className="ant-col--centered">
                <Form.Item className="ant-form-item--grow">
                  <InputNumber
                    placeholder="Рост"
                    onKeyDown={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    value={patientHeight}
                    onChange={(value) => setPatientHeight(value)}
                  />
                </Form.Item>
              </Col>
              <Col span={8} className="ant-col--centered">
                <Form.Item className="ant-form-item--grow">
                  <InputNumber
                    placeholder="Вес"
                    onKeyDown={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    value={patientWeight}
                    onChange={(value) => setPatientWeight(value)}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <Select
                    placeholder="Цвет глаз"
                    options={optionsEyesColor}
                    value={patientEyeColor}
                    onChange={(value) => setPatientEyeColor(value)}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Divider orientation="left">Адрес регистрации</Divider>
            <Row gutter={[31, 0]} className="mb--36">
              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Полный адрес"
                    value={patientHomeAddress}
                    onChange={(event) => setPatientHomeAddress(event.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Город"
                    value={patientHomeCity}
                    onChange={(event) => setPatientHomeCity(event.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Почтовый индекс"
                    value={patientHomePostalCode}
                    onChange={(event) => setPatientHomePostalCode(event.target.value)}
                  />
                </Form.Item>
              </Col>

            </Row>
            <Divider orientation="left">Место работы</Divider>
            <Row gutter={[31, 36]} className="ant-row--vertical-centred">
              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Полный адрес"
                    value={patientWorkAddress}
                    onChange={(event) => setPatientWorkAddress(event.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Город"
                    value={patientWorkCity}
                    onChange={(event) => setPatientWorkCity(event.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Почтовый индекс"
                    value={patientWorkPostalCode}
                    onChange={(event) => setPatientWorkPostalCode(event.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Компания"
                    value={patientWorkCompany}
                    onChange={(event) => setPatientWorkCompany(event.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Отдел"
                    value={patientWorkDepartment}
                    onChange={(event) => setPatientWorkDepartment(event.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item>
                  <Input
                    placeholder="Должность"
                    value={patientWorkPosition}
                    onChange={(event) => setPatientWorkPosition(event.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          {/* вторая колонка */}
          <Col span={9}>
            <Row gutter={[31, 30]}>
              <Col span={16}>
                <DatePickerCustom
                  formItemClass="ant-picker--grand"
                  placeholder="Дата рождения"
                  value={clientBirthDate}
                  onChange={onChangeClientBirthDate}
                />
              </Col>
              <Col span={8}>
                <div className="client-age">{getPatientAge()}</div>
              </Col>

              <Col span={16}>
                <Form.Item>
                  <Select
                    placeholder="Группа крови"
                    options={optionsBloodType}
                    value={patientBloodGroup}
                    onChange={(value) => setPatientBloodGroup(value)}
                  />
                </Form.Item>
              </Col>
            </Row>

            <div className="button-wrap">
              <Button className="ant-btn-natural">Назад</Button>
              <Button type="primary" danger>Удалить</Button>
              <Button className="ant-btn-secondary">Сохранить</Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
