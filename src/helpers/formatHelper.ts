export const getPrettyDurationTime = (duration: number) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}ч ${minutes}м`;
};

export const getPrettyFlyingTime = (date: string, duration: number) => {
  const startTime = new Date(date);
  const endTime =  new Date(startTime.getTime() + duration * 60000);

  return `
    ${getTwoDigitFormat(startTime.getHours())}:${getTwoDigitFormat(startTime.getMinutes())}
    -
    ${getTwoDigitFormat(endTime.getHours())}:${getTwoDigitFormat(endTime.getMinutes())}`;
};

const getTwoDigitFormat = (value: number) => ('0' + value).slice(-2);

export const getPrettyPrice = (price: number) => {
  return `${price.toLocaleString("ru-RU", {
    style: 'decimal',
    currency: 'RUB'
  })} Р`;
};

export const getTransferTitle = (number: number) => {
  const titles = ['Прямой', '1 пересадка', '2 пересадки', '3 пересадки', '4 пересадки'];
  return titles[number];
}
