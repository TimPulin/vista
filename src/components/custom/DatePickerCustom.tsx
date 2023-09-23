import { DatePicker, Form } from 'antd';
import type { Dayjs } from 'dayjs';
import { useState } from 'react';

type DatePickerCustomPropsType<ValueType> = {
  placeholder: string;
  value:ValueType;
  onChange:(value:Dayjs | null) => void;
};

export default function DatePickerCustom<ValueType>(props: DatePickerCustomPropsType<ValueType>) {
  const { placeholder, value, onChange } = props;
  const [datePickerFocused, setDatePickerFocused] = useState(false);

  function handelFocusDatePicker(isFocused: boolean):void {
    if (value) {
      setDatePickerFocused(true);
    } else {
      setDatePickerFocused(isFocused);
    }
  }

  return (
    <Form.Item>
      <DatePicker
        placeholder=""
        onFocus={() => handelFocusDatePicker(true)}
        onBlur={() => handelFocusDatePicker(false)}
        onChange={onChange}
      />
      <span
        className={
          datePickerFocused
            ? 'ant-form__label ant-form__label--active'
            : 'ant-form__label'
        }
      >
        {placeholder}
      </span>
    </Form.Item>
  );
}
