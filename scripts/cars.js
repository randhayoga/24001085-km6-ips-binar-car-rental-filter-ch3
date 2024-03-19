const getCarsData = async (capacity, date, time) => {
  const res = await fetch(
    `/cars?capacity=${capacity}&date=${date}&time=${time}`
  );
  const { data, message } = await res.json();
  return data;
};

export default { getCarsData };
