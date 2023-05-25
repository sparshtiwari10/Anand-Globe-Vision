let sheet_id='1lFCXlTomy4msjmlLTaeXNTM9yAylSEP8C2Wb1Pd55Ks'
let sheet_title='Sheet1'
let sheet_range='A1:B10'

let full_url = 'https://docs.google.com/spreadsheets/d/'+sheet_id+'/gviz/tq?sheet='+sheet_title+'&range='+sheet_range

fetch(full_url)
.then(res => res.text())
.then(rep => {
    let data=JSON.parse(rep.substr(47).slice(0,-2))
    console.log(data)
})