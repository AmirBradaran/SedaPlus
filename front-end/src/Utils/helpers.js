export const toPersianNumbers = (num) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return num.toString().replace(/\d/g, (d) => persianDigits[d]);
  };
  
  export const priceFormatter = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };