import {
  Button,
  DatePicker,
  Form,
  Input,
  // InputNumber,
  Radio,
  Select,
  Col,
  Row,
  Divider,
} from 'antd';
import type { SelectProps, RadioChangeEvent } from 'antd';
import { useState } from 'react';

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

export default function PatientCardForm() {
  const [patientSex, setPatientSex] = useState(1);
  const [isPickerFocused, setIsPickerFocused] = useState(false);

  const onChangePatientSex = ({ target: { value } }: RadioChangeEvent) => {
    setPatientSex(value);
  };

  const handleChangeEyesColor = (value: string) => {
    console.log(value);
  };

  const handleChangeBloodType = (value: string) => {
    console.log(value);
  };

  function handelFocusDatePicker(isFocused: boolean):void {
    setIsPickerFocused(isFocused);
    console.log(isPickerFocused);

    // TODO сделать проверку на наличие value
  }

  return (
    <div className="wrap-form wrap-form--patient-card">
      <Form layout="horizontal" colon={false} className="ant-form--custom">
        <Row gutter={[31, 35]}>
          <Col span={5}>
            <Form.Item>
              <Input placeholder="Фамилия" />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item>
              <Input placeholder="Имя" />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item>
              <Input placeholder="Отчество" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item className={
              isPickerFocused
                ? 'ant-picker--active ant-picker--grand'
                : 'ant-picker--grand'
            }
            >
              <DatePicker
                placeholder="Дата рождения"
                onFocus={() => handelFocusDatePicker(true)}
                onBlur={() => handelFocusDatePicker(false)}
              />
              <span
                className={
                  isPickerFocused
                    ? 'ant-form__label ant-form__label--active'
                    : 'ant-form__label'
                }
              >
                Дата рождения
              </span>
            </Form.Item>
          </Col>

          <Col span={3}>
            <div className="client-age">we</div>
          </Col>
        </Row>

        <Row gutter={[31, 35]} className="ant-row--vertical-centred">
          <Col span={5}>
            <Form.Item label="Пол*" className="form-item-custom">
              <Radio.Group
                options={optionsSex}
                onChange={onChangePatientSex}
                value={patientSex}
                optionType="button"
                buttonStyle="solid"

              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item>
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item>
              <Input placeholder="Телефон" />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item>
              <Select
                placeholder="Группа крови"
                onChange={handleChangeBloodType}
                options={optionsBloodType}

              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[31, 35]} className="ant-row--vertical-centred">
          <Col span={5}>
            <Form.Item>
              <Input placeholder="Рост" />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item>
              <Input placeholder="Вес" />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item>
              <Select
                placeholder="Цвет глаз"
                onChange={handleChangeEyesColor}
                options={optionsEyesColor}

              />
            </Form.Item>
          </Col>
        </Row>

        <Divider orientation="left">Адрес регистрации</Divider>

        <Row gutter={[31, 35]} className="ant-row--vertical-centred">
          <Col span={5}>
            <Form.Item>
              <Input placeholder="Полный адрес" />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item>
              <Input placeholder="Город" />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item>
              <Input placeholder="Почтовый индекс" />
            </Form.Item>
          </Col>

        </Row>

        <Divider orientation="left">Место работы</Divider>

        <Row gutter={[31, 35]} className="ant-row--vertical-centred">
          <Col span={5}>
            <Form.Item>
              <Input placeholder="Полный адрес" />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item>
              <Input placeholder="Город" />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item>
              <Input placeholder="Почтовый индекс" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[31, 35]} className="ant-row--vertical-centred">
          <Col span={5}>
            <Form.Item>
              <Input placeholder="Компания" />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item>
              <Input placeholder="Отдел" />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item>
              <Input placeholder="Должность" />
            </Form.Item>
          </Col>

          <Col span={4} offset={5}>
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
