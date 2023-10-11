type SCHEDULE = {
  label: string;
  value: string;
}

export const HEADS: string[] = [
  'HORA',
  'LUNES',
  'MARTES',
  'MIÉRCOLES',
  'JUEVES',
  'VIERNES',
  'SÁBADO',
  'ACCIONES'
]

export const HOURS: SCHEDULE[] = [
  {
    label: '3 p.m.',
    value: '3'
  },
  {
    label: '4 p.m.',
    value: '4'
  },
  {
    label: '5 p.m.',
    value: '5'
  },
  {
    label: '6 p.m.',
    value: '6'
  },
  {
    label: '7 p.m.',
    value: '7'
  },
  {
    label: '8 p.m.',
    value: '8'
  },
  {
    label: '9 p.m.',
    value: '9'
  },
  {
    label: '10 p.m.',
    value: '10'
  },
]

export const GROUPS: SCHEDULE[] = [
  {
    label: 'G1NB',
    value: 'G1NB'
  },
  {
    label: 'G2NB',
    value: 'G2NB'
  },
  {
    label: 'G3NB',
    value: 'G3NB'
  },
  {
    label: 'G4NB',
    value: 'G4NB'
  },
  {
    label: 'G5NB',
    value: 'G5NB'
  },
  {
    label: 'GI',
    value: 'GI'
  },
]