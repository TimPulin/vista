import { LoaderFunction } from 'react-router-dom';

type AddressType = {
  address: string,
  city: string,
  coordinates: {
    lat: number,
    lng: number
  },
  postalCode: string,
  state: string,
};

export type PatientType = {
  address: AddressType,
  age: number,
  bank: {
    cardExpire: string, cardNumber: string, cardType: string, currency: string, iban: string,
  },
  birthDate: string,
  bloodGroup: string,
  company: {
    address: AddressType,
    department: string,
    name: string,
    title: string,
  },
  domain: string,
  ein: string,
  email: string,
  eyeColor: string,
  firstName: string,
  gender: string,
  hair: { color: string, type: string },
  height: number,
  id: number,
  image: string,
  ip: string,
  lastName: string,
  macAddress: string,
  maidenName: string,
  password: string,
  phone: string,
  ssn: string,
  university: string,
  userAgent: string,
  username: string,
  weight: number,
};

export type TablePatientType = {
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

export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<ReturnType<TLoaderFn>> extends Response | infer D ? D : never;
