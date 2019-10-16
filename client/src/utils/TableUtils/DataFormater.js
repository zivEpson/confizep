/**
 * format the date for the question list table
 * @param {cell} cell
 */
export const dateFormatter = cell => {
  const date = new Date(cell);
  return (
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
  );
};

/**
 * format the user name for the question list table
 * @param {cell} cell
 */
export const userFormatter = cell => {
  if (cell === null) {
    return null;
  } else {
    return cell["name"];
  }
};
