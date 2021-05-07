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
    colspan: /\[%-{1} .*\(c(\d*)\).* -{1}%\]/i, //[%- (c2) -%] > 2
    formula: /\[%-{1} .*\((=.*)\).* -{1}%\]/i,
    row: /\[%-{3} (.*) -{3}%\]/i,
    rowspan: /\[%-{1} .*\(r(\d*)\).* -{1}%\]/i, //[%- (r2) -%] > 2
    table: /\[%-{4} (.*) -{4}%\]/i
  };
  const text = data.toString();
  const result = text.match(patterns[mode]);
  const value = result ? result[1] : "";
  return value;
}