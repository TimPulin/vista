import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from 'antd';
import { useState } from 'react';

export default function RolodexSearch() {
  const [datePickerFocused, setDatePickerFocused] = useState(false);

  function handelFocusDatePicker(isFocused: boolean):void {
    setDatePickerFocused(isFocused);
    // TODO сделать проверку на наличие value
  }

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

          <Form.Item>
            <DatePicker
              placeholder=""
              onFocus={() => handelFocusDatePicker(true)}
              onBlur={() => handelFocusDatePicker(false)}
            />
            <span
              className={
                datePickerFocused
                  ? 'ant-form__label ant-form__label--active'
                  : 'ant-form__label'
              }
            >
              Дата рождения
            </span>
          </Form.Item>

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
