/*

  Test for rras

*/

var test = require('tap').test;

var rras = require('../rras');

function fileToArraySync(filename, cells){

  var fs = require('fs');

  var array = Array(cells);

  var data = fs.readFileSync(filename,'utf8');

  var mapString = data.match(/[\d.]+/g);

  for (var cell = 0; cell < cells; cell++)
      array[cell] = parseFloat(mapString[cell]);

  return array;
}

//Compute residue
function Res(mapA, mapB, Rows, Cols){

  var res = 0;
  var row, cell;

  for (row =0; row < Rows; row++ )
    for (var col = 0; col < Cols; col++)
      res += Math.abs(mapA[row][col] - mapB[row][col]);

    res /= Cols*Rows;

  return res;
}

function heightBySlope(rows, cols, slope, aspect, cell ){

  var heightMap = new Array(rows*cols);

  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      heightMap[row][col] = 
    
  };

  return  heightMap;
}

//test resampling against a stored file
test('Test resampling ', function (t) {

  //srtm output 24x25
  var heightOriginal = [[],[]];

  var rows = 50;
  var cols = 40;

  var heightResampled = rras.resample(heightOriginal, rows, cols);

  var heightValid = fileToArraySync('testFiles/height_50x40.map',rows*cols);

  var res = (heightValid, heightResampled, rows, cols);

  t.ok( res < 1E-3 , "resampling is ok, Res = "+res);

  t.end();

});

//teste slope
test('Test slope', function (t) {




  //teste 0 slope
  t.ok( Math.abs(cB[0] - v[0] ) < 1E-1 , "Easting is OK");

  //teste 45 degree slope
  t.ok( Math.abs(cB[1] - v[1] ) < 1E-1 , "Northing is OK");

  //test 60 degree

  t.end();

});

//test aspect

  //teste 0 aspect

  //teste 180 aspect

  //teste 360 aspect

