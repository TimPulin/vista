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