import { BEAT } from "../model";

export const mockedBeats: BEAT[] = [
  {
    id: 1,
    url: '/Beats/Cho_popalik.mp3',
    basics: {
      duration: 4.09,
      name: 'Cho',
      userId: 2,
      price: 25,
      exclusive: false,
    },
  },
  {
    id: 2,
    url: '/Beats/Fools_Gold.mp3',
    basics: {
      duration: 8.37,
      name: 'Fools Gold',
      userId: 1,
      price: 85,
      exclusive: false,
    },
  },
  {
    id: 3,
    url: '/Beats/mendilini.mp3',
    basics: {
      duration: 3.312,
      name: 'sala sana',
      userId: 3,
      price: 20,
      exclusive: true,
    },
  },
];