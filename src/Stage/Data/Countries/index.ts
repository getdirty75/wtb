
import { COUNTRY } from "../model";

export const mockedCountries: COUNTRY[] = [
  {
    id: 1,
    marker: {
      id: 'marker1',
      city: 'Singapore',
      color: 'red',
      coordinates: [1.3521, 103.8198],
      value: 50,
    },
    beatmakers: [1, 4],
  },
  {
    id: 2,
    marker: {
      id: 'marker2',
      city: 'New York',
      color: 'blue',
      coordinates: [40.73061, -73.935242],
      value: 25,
    },
    beatmakers: [2],
  },
  {
    id: 3,
    marker: {
      id: 'marker3',
      city: 'San Francisco',
      color: 'orange',
      coordinates: [37.773972, -122.431297],
      value: 35,
    },
    beatmakers: [5],
  },
  {
    id: 4,
    marker: {
      id: 'marker4',
      city: 'Beijing',
      color: 'gold',
      coordinates: [39.9042, 116.4074],
      value: 135,
    },
    beatmakers: [4],
  },
  {
    id: 5,
    marker: {
      id: 'marker5',
      city: 'London',
      color: 'green',
      coordinates: [51.5074, 0.1278],
      value: 80,
    },
    beatmakers: [],
  },
];