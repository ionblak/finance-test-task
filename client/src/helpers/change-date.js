const changeDate = dateUtc => {
  const date = new Date(dateUtc);
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export default changeDate;
