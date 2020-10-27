export const months = [
  {
    value: 1,
    name: 'Janeiro',
  },
  {
    value: 2,
    name: 'Fevereiro',
  },
  {
    value: 3,
    name: 'Março',
  },
  {
    value: 4,
    name: 'Abril',
  },
  {
    value: 5,
    name: 'Maio',
  },
  {
    value: 6,
    name: 'Junho',
  },
  {
    value: 7,
    name: 'Julho',
  },
  {
    value: 8,
    name: 'Agosto',
  },
  {
    value: 9,
    name: 'Setembro',
  },
  {
    value: 10,
    name: 'Outubro',
  },
  {
    value: 11,
    name: 'Novembro',
  },
  {
    value: 12,
    name: 'Dezembro',
  },
];

const year = (new Date('1900-01-01')).getFullYear();
export const years = Array.from(new Array(99), (val, index) => index + year);

export const days = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: 7,
  },
];
