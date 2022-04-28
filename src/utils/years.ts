export const getYears = () => {
  let currentYear = new Date().getFullYear();
  const Years: any[] = [];
  for (let i = currentYear; i > 1934; i--) {
    Years.push({ id: i, name: i });
  }
  return Years;
};
