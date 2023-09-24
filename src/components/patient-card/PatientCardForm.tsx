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
import DatePickerCustom from '../custom/DatePickerCustom';

const optionsSex = [
  { label: 'Мужской', value: 1 },
  { label: 'Женский', value: 0 },
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
  surname: string;
};

export default function PatientCardForm(props: PatientCardFormPropsType) {
  const [patientSurname, setPatientSurname] = useState<string | undefined>(undefined);
  const [patientName, setPatientName] = useState<string | undefined>(undefined);
  const [patientMiddleName, setPatientMiddleName] = useState<string | undefined>(undefined);
  const [clientBirthDate, setClientBirthDate] = useState<Date | null>(null);
  const [patientSex, setPatientSex] = useState(1);
  const [patientEmail, setPatientEmail] = useState<string | undefined>(undefined);
  const [patientPhone, setPatientPhone] = useState<string | undefined>(undefined);
  const [patientBloodType, setPatientBloodType] = useState<string | null>(null);
  const [patientHeight, setPatientHeight] = useState<number | null>(null);
  const [patientWeight, setPatientWeight] = useState<number | null>(null);
  const [patientEyeColor, setPatientEyeColor] = useState<string | undefined>(undefined);
  const [patientHomeAddress, setPatientHomeAddress] = useState<string | undefined>(undefined);
  const [patientHomeCity, setPatientHomeCity] = useState<string | undefined>(undefined);
  const [patientHomePostIndex, setPatientHomePostIndex] = useState<number | null>(null);
  const [patientWorkAddress, setPatientWorkAddress] = useState<string | undefined>(undefined);
  const [patientWorkCity, setPatientWorkCity] = useState<string | undefined>(undefined);
  const [patientWorkPostIndex, setPatientWorkPostIndex] = useState<number | null>(null);
  const [patientWorkCompany, setPatientWorkCompany] = useState<string | undefined>(undefined);
  const [patientWorkDepartment, setPatientWorkDepartment] = useState<string | undefined>(undefined);
  const [patientWorkPosition, setPatientWorkPosition] = useState<string | undefined>(undefined);

  //   const onChangePatientName = (event:ChangeEventHandler<HTMLInputElement>) => {
  //     setPatientName(event.value);
  //   };

  //   const onChangePatientMiddlename = (event:ChangeEventHandler<HTMLInputElement>) => {
  //     setPatientMiddleName(event.value);
  //   };

  useEffect(() => {
    setPatientSurname(props.surname);
  }, []);

  const onChangeClientBirthDate = (date:Dayjs | null) => {
    if (date) {
      const year = date.year();
      const month = date.month();
      const day = date.date();
      const birthDate = new Date(year, month, day);
      setClientBirthDate(birthDate);
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
                    value={patientSurname}
                    onChange={(event) => setPatientSurname(event.target.value)}
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
                  <InputNumber
                    placeholder="Почтовый индекс"
                    value={patientHomePostIndex}
                    onKeyDown={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    onChange={(value) => setPatientHomePostIndex(value)}
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
                  <InputNumber
                    placeholder="Почтовый индекс"
                    value={patientWorkPostIndex}
                    onKeyDown={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    onChange={(value) => setPatientWorkPostIndex(value)}
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
                <DatePickerCustom<Date | null>
                  formItemClass="ant-picker--grand"
                  placeholder="Дата рождения"
                  value={clientBirthDate}
                  onChange={onChangeClientBirthDate}
                />
              </Col>
              <Col span={8}>
                <div className="client-age">we</div>
              </Col>

              <Col span={16}>
                <Form.Item>
                  <Select
                    placeholder="Группа крови"
                    options={optionsBloodType}
                    value={patientBloodType}
                    onChange={(value) => setPatientBloodType(value)}
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

//   const onChangePatientEmail = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientEmail(event.value);
//   };

//   const onChangePatientPhone = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientPhone(event.value);
//   };

//   const onChangePatientBloodGroup = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientBloodGroup(event.value);
//   };

//   const onChangePatientHeight = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientHeight(event.value);
//   };

//   const onChangePatientWeight = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientWeight(event.value);
//   };

//   const onChangePatientEyeColor = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientEyeColor(event.value);
//   };

//   const onChangePatientHomeAddress = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientHomeAddress(event.value);
//   };

//   const onChangePatientHomeCity = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientHomeCity(event.value);
//   };

//   const onChangePatientHomePostIndex = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientHomePostIndex(event.value);
//   };

//   const onChangePatientWorkAddress = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientWorkAddress(event.value);
//   };

//   const onChangePatientWorkCity = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientWorkCity(event.value);
//   };

//   const onChangePatientWorkPostIndex = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientWorkPostIndex(event.value);
//   };

//   const onChangePatientWorkCompany = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientWorkCompany(event.value);
//   };

//   const onChangePatientWorkDepartment = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientWorkDepartment(event.value);
//   };

//   const onChangePatientWorkPosition = (event:React.ChangeEventHandler<HTMLInputElement>) => {
//     setPatientWorkPosition(event.value);
//   };
