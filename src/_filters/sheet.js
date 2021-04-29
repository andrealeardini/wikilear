module.exports = (data, command) => {
  if (command) {
    if (command === "length") {
      return Object.getOwnPropertyNames(data[0]).length - 1;
    }
    return decode(data, command);
  }
  return data.replace(/\[%-.*-%\]/i, "");
};

function decode(data, mode) {
  const patterns = {
    cell: /\[%-{1} (.*) -{1}%\]/i,
    cells: /\[%-{2} (.*) -{2}%\]/i,
    colspan: /\[%-c (.*) c-%\]/i ,
    row: /\[%-{3} (.*) -{3}%\]/i,
    rowspan: /\[%-r (.*) r-%\]/i,
    table: /\[%-{4} (.*) -{4}%\]/i
  };
  const text = data.toString();
  const result = text.match(patterns[mode]);
  const value = result ? result[1] : "";
  return value;
}