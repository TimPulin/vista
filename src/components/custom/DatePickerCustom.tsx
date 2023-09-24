import { DatePicker, Form } from 'antd';
import type { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';

type DatePickerCustomPropsType = {
  formItemClass?: string;
  placeholder: string;
  value:Dayjs | null;
  onChange:(value:Dayjs | null) => void;
};

export default function DatePickerCustom(props: DatePickerCustomPropsType) {
  const {
    formItemClass = '', placeholder, value, onChange,
  } = props;
  const [datePickerFocused, setDatePickerFocused] = useState(false);

  function handelFocusDatePicker(isFocused: boolean):void {
    if (value) {
      setDatePickerFocused(true);
    } else {
      setDatePickerFocused(isFocused);
    }
  }

  useEffect(() => {
    if (value) setDatePickerFocused(true);
  }, []);

  return (
    <Form.Item className={formItemClass}>
      <DatePicker
        placeholder=""
        format="DD-MM-YYYY"
        value={value}
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

DatePickerCustom.defaultProps = { formItemClass: '' };
