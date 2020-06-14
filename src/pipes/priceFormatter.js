
export const formatNumber = (number) => {
   number = "" + number;
   return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}