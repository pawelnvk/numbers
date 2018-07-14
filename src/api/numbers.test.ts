import { getNumberFact } from "./numbers";

const globalAny: any = global;

const json = jest.fn();
const fetch = jest.fn(() => ({ json }))

globalAny.fetch = fetch;

describe('getNumberFact', () => {
  it('calls fetch with numbers path', async () => {
    await getNumberFact('1');

    expect(fetch).toBeCalledWith('http://numbersapi.com/1?json');
  });

  it('calls json method on response', async () => {
    await getNumberFact('1');

    expect(json).toBeCalled();
  });
});
