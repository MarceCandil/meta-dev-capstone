
import { fetchAPI, submitAPI } from './bookingApis';

test('fetchAPI function', () => {
  expect(fetchAPI(new Date())).toStrictEqual(["17:00", "17:30", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "23:30"])
});

test('submitAPI function', () => {
  expect(submitAPI({})).toBe(true)
});
