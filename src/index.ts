const calculateChristmasCountdown = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const nextChristmas = new Date(`${currentYear}-12-25`);
  if(currentDate > nextChristmas){
    nextChristmas.setFullYear(currentYear+ 1);
  }

  const timeDiff = (+nextChristmas) - (+currentDate);

  const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return days;
}

export { calculateChristmasCountdown };