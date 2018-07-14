export const getNumberFact = async (id: string) => {
  const response = await fetch(`http://numbersapi.com/${id}?json`);

  return response.json();
};
