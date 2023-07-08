import {
  // Button,
  DatePicker,
  Form,
  Input,
  // InputNumber,
  Radio,
  Select,
  Col,
  Row,
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

  const onChangePatientSex = ({ target: { value } }: RadioChangeEvent) => {
    setPatientSex(value);
  };

  const handleChangeEyesColor = (value: string) => {
    console.log(value);
  };

  const handleChangeBloodType = (value: string) => {
    console.log(value);
  };

  return (
    <div className="wrap-form wrap-form--patient-card">
      <Form layout="horizontal" colon={false}>
        <Row>
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

          <Col span={5}>
            <Form.Item>
              <DatePicker />
            </Form.Item>
          </Col>

          <Col span={4}>
            <div className="client-age">we</div>
          </Col>
        </Row>

        <Row>
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

        <Row>
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
      </Form>
    </div>
  );
}
