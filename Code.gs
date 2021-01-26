var sheetURL = "https://docs.google.com/spreadsheets/d/166XRIwP22F6qeQBo_DFtnU-TEF2zORGMjaiqhzOJbc4/edit#gid=0";


function doGet(e) {

  var ss = SpreadsheetApp.openByUrl(sheetURL);
  var ws = ss.getSheetByName("data");

  var tmp = HtmlService.createTemplateFromFile("page");
  return tmp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
   
}


