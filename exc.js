
// //const XLSX=require("xlsx")
// const workBook= XLSX.readFile("ala.xlsx")
// const workSheet = workBook.Sheets("Table 1")
// const channels=XLSX.utils.sheet_to_json(workSheet)
// console.log(channels)

readXlsxFile("ala.xlsx").then((rows) => {
    console.log(rows)
})