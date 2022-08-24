export const pagination = totalPages => {
  let pagesArray = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i);
  }
  return pagesArray;
};
