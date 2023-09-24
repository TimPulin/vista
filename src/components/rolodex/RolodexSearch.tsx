import {
  Button,
  // DatePicker,
  Form,
  Input,
  InputNumber,
} from 'antd';
import type { Dayjs } from 'dayjs';
import { useState } from 'react';
import DatePickerCustom from '../custom/DatePickerCustom';

export default function RolodexSearch() {
  const [clientBirthDate, setClientBirthDate] = useState<Dayjs | null>(null);

  const onChangeClientBirthDate = (date:Dayjs | null) => {
    if (date) {
      setClientBirthDate(date);
    }
  };

  return (
    <div className="section">
      <div className="wrap-form">
        <Form layout="inline" colon={false} className="ant-form--rolodex">

          <Form.Item label="Пациент" className="ant-form-item--patient">
            <Input />
          </Form.Item>

          <Form.Item label="№ Амб. карты" className="ant-form-item--card-number">
            <InputNumber />
          </Form.Item>

          <DatePickerCustom
            placeholder="Дата рождения"
            value={clientBirthDate}
            onChange={onChangeClientBirthDate}
          />

          <div className="ant-form__group">
            <Form.Item>
              <Button type="primary">Найти</Button>
            </Form.Item>

            <Form.Item>
              <Button className="ant-btn-secondary">Новый пациент</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
