# JSON & EXCEL

* Json -> What
  -> Where
  -> How

  |
* Excel -> Iteract
  -> Read
  -> Write

# JSON

* json is introduced by douglous crockford
* json -> store
  -> transmit
* format  |-> {name: sujeet, lastName: kumar}

# EXCEL

* Excel -> File
  -> Workbook
  -> Sheet
  -> Column
  -> Row

# Notes

* write
  function excelWriter(filePath, json, sheetName) {

  let newWB = xlsx.utils.book_new();
  let newWS = xlsx.utils.json_to_sheet(json);
  xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
  xlsx.writeFile(newWB, filePath);
  }
* read
  function excelReader(filePath, sheetName){
  if(fs.existsSync(filePath) == false){
  return [];
  }

  let wb = xlsx.readFile(filePath);
  let excelData = wb.Sheets[sheetName];
  let ans = xlsx.utils.sheet_to_json(excelData);
  return ans;
  }
