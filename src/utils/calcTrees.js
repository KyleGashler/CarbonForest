export default function calcTreesPlanted(date, product) {
  const progressTime = Date.now() - new Date(date).getTime();
  const progressInMonths = progressTime / (1000 * 3600 * 24 * 30);

  if (parseInt(product) >= 30) {
    return progressInMonths * 11;
  } else if (parseInt(product) >= 10) {
    return progressInMonths * 6;
  } else if (parseInt(product) >= 6) {
    return progressInMonths * 2;
  } else {
    return 0;
  }
}
