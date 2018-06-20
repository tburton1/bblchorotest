
svg1=document.getElementById('svg1');
svg2=document.getElementById('svg2');
svgAlaska=document.getElementById('svgAlaska');
svgAlabama=document.getElementById('svgAlabama');
svgArkansas=document.getElementById('svgArkansas');
svgArizona=document.getElementById('svgArizona');
svgCalifornia=document.getElementById('svgCalifornia');
svgColorado=document.getElementById('svgColorado');
svgHawaii=document.getElementById('svgHawaii');
svgConnecticut=document.getElementById('svgConnecticut');
svgDelaware=document.getElementById('svgDelaware');
svgFlorida=document.getElementById('svgFlorida');
svgGeorgia=document.getElementById('svgGeorgia');
svgIowa=document.getElementById('svgIowa');
svgIdaho=document.getElementById('svgIdaho');
svgIllinois=document.getElementById('svgIllinois');
svgIndiana=document.getElementById('svgIndiana');
svgKansas=document.getElementById('svgKansas');
svgKentucky=document.getElementById('svgKentucky');
svgLouisiana=document.getElementById('svgLouisiana');
svgMassachusetts=document.getElementById('svgMassachusetts');
svgMaryland=document.getElementById('svgMaryland');
svgMaine=document.getElementById('svgMaine');
svgMichigan=document.getElementById('svgMichigan');
svgMinnesota=document.getElementById('svgMinnesota');
svgMissouri=document.getElementById('svgMissouri');
svgMississippi=document.getElementById('svgMississippi');
svgMontana=document.getElementById('svgMontana');
svgNorthcarolina=document.getElementById('svgNorthcarolina');
svgNorthdakota=document.getElementById('svgNorthdakota');
svgNebraska=document.getElementById('svgNebraska');
svgNewhampshire=document.getElementById('svgNewhampshire');
svgNewjersey=document.getElementById('svgNewjersey');
svgNewmexico=document.getElementById('svgNewmexico');
svgNevada=document.getElementById('svgNevada');
svgNewyork=document.getElementById('svgNewyork');
svgOhio=document.getElementById('svgOhio');
svgOklahoma=document.getElementById('svgOklahoma');
svgOregon=document.getElementById('svgOregon');
svgPennsylvania=document.getElementById('svgPennsylvania');
svgRhodeisland=document.getElementById('svgRhodeisland');
svgSouthcarolina=document.getElementById('svgSouthcarolina');
svgSouthdakota=document.getElementById('svgSouthdakota');
svgTennessee=document.getElementById('svgTennessee');
svgTexas=document.getElementById('svgTexas');
svgUtah=document.getElementById('svgUtah');
svgVirginia=document.getElementById('svgVirginia');
svgVermont=document.getElementById('svgVermont');
svgWashington=document.getElementById('svgWashington');
svgWisconsin=document.getElementById('svgWisconsin');
svgWestvirginia=document.getElementById('svgWestvirginia');
svgWyoming=document.getElementById('svgWyoming');
svg2.style.display = 'none';
$('#chorotitle').text("Encounter Choropleth Map");
//make for each state

function hideselect(){

$("#AK").css('fill', '');
$("#AL").css('fill', '');
$("#AZ").css('fill', '');
$("#AR").css('fill', '');
$("#CA").css('fill', '');
$("#CO").css('fill', '');
$("#CT").css('fill', '');
$("#DE").css('fill', '');
$("#FL").css('fill', '');
$("#GA").css('fill', '');
$("#HI").css('fill', '');
$("#ID").css('fill', '');
$("#IL").css('fill', '');
$("#IN").css('fill', '');
$("#IA").css('fill', '');
$("#KS").css('fill', '');
$("#KY").css('fill', '');
$("#LA").css('fill', '');
$("#ME").css('fill', '');
$("#MD").css('fill', '');
$("#MA").css('fill', '');
$("#MI").css('fill', '');
$("#MN").css('fill', '');
$("#MS").css('fill', '');
$("#MO").css('fill', '');
$("#MT").css('fill', '');
$("#NE").css('fill', '');
$("#NV").css('fill', '');
$("#NH").css('fill', '');
$("#NJ").css('fill', '');
$("#NM").css('fill', '');
$("#NY").css('fill', '');
$("#NC").css('fill', '');
$("#ND").css('fill', '');
$("#OH").css('fill', '');
$("#OK").css('fill', '');
$("#OR").css('fill', '');
$("#PA").css('fill', '');
$("#RI").css('fill', '');
$("#SC").css('fill', '');
$("#SD").css('fill', '');
$("#TN").css('fill', '');
$("#TX").css('fill', '');
$("#UT").css('fill', '');
$("#VT").css('fill', '');
$("#VA").css('fill', '');
$("#WA").css('fill', '');
$("#WV").css('fill', '');
$("#WI").css('fill', '');
$("#WY").css('fill', '');
}
function suffix(i) {
		var j = i % 10,
			k = i % 100;
		if (j == 1 && k != 11) {
			return i + "st";
		}
		if (j == 2 && k != 12) {
			return i + "nd";
		}
		if (j == 3 && k != 13) {
			return i + "rd";
		}
		return i + "th";
	}
//hideall();
function resetbutton(){
  hideselect();
  speciesvar = "all";
  yearvar2="2018";
  yearvar="1900";
  ifstateall = true;
  stateid = "all";
  document.getElementById("holder").innerHTML = "";
  document.getElementById("table3").innerHTML = "";
  document.getElementById("table2").innerHTML = "";
  d3.selectAll("#barchart > *").remove(); 
}

function switchmaps(){
	if(svg2.style.display === 'none'){
		svg2.style.display = 'block';
		svg1.style.display = 'none';
		$('#chorotitle').text("Banding Choropleth Map");
	}
	else if(svg1.style.display === 'none'){
		svg1.style.display = 'block';
		svg2.style.display = 'none';
		$('#chorotitle').text("Encounter Choropleth Map");
	}
}
var speciesvar="all"

var yearvar="1900"
var yearvar2="2018"
var stateid = "all";
var ifstateall = true;
var dict = [];
var rowCells= new Array();
var AK=0,AL=0,AR=0,AZ=0,CA=0,CO=0,CT=0,DC=0,DE=0,FL=0,GA=0,GU=0,HI=0,IA=0,ID=0,IL=0,IN=0,KS=0,KY=0,LA=0,MA=0,MD=0,ME=0,MH=0,MI=0,MN=0,MO=0,MS=0,MT=0,NC=0,ND=0,NE=0,NH=0,NJ=0,NM=0,NV=0,NY=0,OH=0,OK=0,OR=0,PA=0,PR=0,PW=0,RI=0,SC=0,SD=0,TN=0,TX=0,UT=0,VA=0,VI=0,VT=0,WA=0,WI=0,WV=0,WY=0;

function countstates(data) {
	var dict = [];
	var dictenc = [];
	var dictstate = [];
	var bandcnt = [];
	var year1 = [];
	var i=0;
	
	var speciesvar = $('#myInput').val();
	if(speciesvar==""){
		speciesvar="all"
	}
  var allRows = data.split(/\r?\n|\r/);
 
 
	if(stateid!="all"){
		if (speciesvar=="all"){
	for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)&&(rowCells[1].toString()==stateid)){//(rowCells[0].toString()==speciesvar)&&
	if (dict[rowCells[0].toString()] === undefined){
		dict[rowCells[0].toString()]=Number(rowCells[5]);
		}

		if (dict[rowCells[0].toString()] !== undefined){
			dict[rowCells[0].toString()]+=Number(rowCells[5]);
		}
		
	ifstateall=false;
   }
	}
   }
   
   if (speciesvar!="all"){//if state id is not all && species var is not all then make it the same algorithm as state is all plus algorithm to store specified state info and put in graph
   for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[0].toString()==speciesvar)&&(rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)&&(rowCells[1].toString()==stateid)){//(rowCells[0].toString()==speciesvar)&&
	if (dict[rowCells[0].toString()] === undefined){
		dict[rowCells[0].toString()]=Number(rowCells[5]);
		//bandcnt[i]= rowCells[5];
		//year1[i]+= rowCells[4].toString();
		//year1.push(rowCells[4].toString());
		//i++;
		
		year1.push({
			birds: Number(rowCells[5]), year: rowCells[4],
			 sortable: true,
			resizeable: true
	});
		}

		if (dict[rowCells[0].toString()] !== undefined){
			dict[rowCells[0].toString()]+=Number(rowCells[5]);
			//bandcnt[i]= rowCells[5];
			//year1[i]+= rowCells[4].toString();
			//year1.push(rowCells[4].toString());
			//i++;
			//console.log(rowCells[5]);
			year1.push({
			birds: Number(rowCells[5]), year: rowCells[4],
			 sortable: true,
			resizeable: true
	});
		}
		
		
		if (dictenc[rowCells[0].toString()] === undefined){
		dictenc[rowCells[0].toString()]=Number(rowCells[6]);
		}

		if (dictenc[rowCells[0].toString()] !== undefined){
			dictenc[rowCells[0].toString()]+=Number(rowCells[6]);
		}
	
		 //for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
        //table += rowCells[rowCell]; add in all row cells to results?
	ifstateall=false;
   }
      if ((rowCells[0].toString()==speciesvar)&&(rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)){
	  if (dictstate[rowCells[1].toString()] === undefined){
		dictstate[rowCells[1].toString()]=Number(rowCells[5]);
		}

		if (dictstate[rowCells[1].toString()] !== undefined){
			dictstate[rowCells[1].toString()]+=Number(rowCells[5]);
		}
   }
   
   
   
	}
   }
	
   }
   if(stateid=="all"){
	   
	   if (speciesvar=="all"){
	   for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)){
if (dictstate[rowCells[1].toString()] === undefined){
		dictstate[rowCells[1].toString()]=Number(rowCells[5]);
		}

		if (dictstate[rowCells[1].toString()] !== undefined){
			dictstate[rowCells[1].toString()]+=Number(rowCells[5]);
		}
   }
   }
   }
   
      if (speciesvar!="all"){
	   for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[0].toString()==speciesvar)&&(rowCells[0].toString()==speciesvar)&&(rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)){
	  if (dictstate[rowCells[1].toString()] === undefined){
		dictstate[rowCells[1].toString()]=Number(rowCells[5]);
		}

		if (dictstate[rowCells[1].toString()] !== undefined){
			dictstate[rowCells[1].toString()]+=Number(rowCells[5]);
		}
   }
	   }
	  }
   }
   
   
   
  if(ifstateall==true){
   var table = '<table>';
	  table += '<thead>';
   table += '<tr>';
   table += '<th>';
   table+= "State";
   table += '</th>';
   table += '<th>';
   table+= "Value";
   table += '</th>';
   table += '</tr>';
   table += '</thead>';
  Object.keys(dictstate).forEach(function(key) {
	  
   
   table += '<tbody>';
   table += '<tr>';
   table += '<th>';
   table+= key;
   table += '</th>';
   table += '<th>';
   table+= dictstate[key];
   table += '</th>';
   table += '</tr>';
    //console.log(key, dictstate[key]);
});
  document.getElementById('table2').innerHTML = table
  }
  if(ifstateall==false){//specify stateid
    if(speciesvar!="all"){
	  var table2 = '<table>';
	   table2 += '<th>';
   table2+= speciesvar;
   table2+= " - ";
   table2+= stateid;
   table2 += '</th>';
   table2 += '<th>';
   
   Object.keys(dict).forEach(function(key) {
   table2 += '<tbody>';
   table2 += '<tr>';
   table2 += '<th>';
   table2+= "Total: ";
   table2+= dict[key];
    table2+= " birds banded from "+yearvar+" to "+yearvar2;
   table2 += '</th>';
   table2 += '</tr>';
});
  Object.keys(dict).forEach(function(key) {
   table2 += '<tbody>';
   table2 += '<tr>';
   table2 += '<th>';
   table2+= "Total: ";
   table2+= dictenc[key];
    table2+= " birds encountered from "+yearvar+" to "+yearvar2;
   table2 += '</th>';
   table2 += '</tr>';
});
   table2 += '</th>';
	  table2+="</table>";
	  
	 
  var table = '<table>';
	  table += '<thead>';
   table += '<tr>';
   table += '<th>';
   table+= "State";
   table += '</th>';
   table += '<th>';
   table+= "Value";
   table += '</th>';
   table += '</tr>';
   table += '</thead>';
  Object.keys(dictstate).forEach(function(key) {
	  
   
   table += '<tbody>';
   table += '<tr>';
   table += '<th>';
   table+= key;
   table += '</th>';
   table += '<th>';
   table+= dictstate[key];
   table += '</th>';
   table += '</tr>';
    //console.log(key, dictstate[key]);
});
document.getElementById('table3').innerHTML = table2
//console.log(year1[1]);
drawbarchart(year1);
	}
	if(speciesvar=="all"){
	  var table = '<table>';
	  table += '<thead>';
   table += '<tr>';
   table += '<th>';
   table+= "Species";
   table += '</th>';
   table += '<th>';
   table+= "Value";
   table += '</th>';
   table += '</tr>';
   table += '</thead>';
  Object.keys(dict).forEach(function(key) {
	  
   
   table += '<tbody>';
   table += '<tr>';
   table += '<th>';
   table+= key;
   table += '</th>';
   table += '<th>';
   table+= dict[key];
   table += '</th>';
   table += '</tr>';
    //console.log(key, dict[key]);
});
	}
      table += '</tbody>';
   table+="</table>";
  
document.getElementById('table2').innerHTML = table

  }
  //Object.keys(dict).forEach(function(key) {
	  
 // })
AK=0,AL=0,AR=0,AZ=0,CA=0,CO=0,CT=0,DC=0,DE=0,FL=0,GA=0,GU=0,HI=0,IA=0,ID=0,IL=0,IN=0,KS=0,KY=0,LA=0,MA=0,MD=0,ME=0,MH=0,MI=0,MN=0,MO=0,MS=0,MT=0,NC=0,ND=0,NE=0,NH=0,NJ=0,NM=0,NV=0,NY=0,OH=0,OK=0,OR=0,PA=0,PR=0,PW=0,RI=0,SC=0,SD=0,TN=0,TX=0,UT=0,VA=0,VI=0,VT=0,WA=0,WI=0,WV=0,WY=0;
}


function drawbarchart(data) {
document.getElementById("holder").innerHTML = "";
d3.selectAll("#barchart > *").remove(); 

/*
var values = [
  {birds: 32, year: 'January'},
  {birds: 38, year: 'February'},
  {birds: 47, year: 'March'},
  {birds: 59, year: 'April'},
  {birds: 70, year: 'May'},
  {birds: 80, year: 'June'},
  {birds: 84, year: 'July'},
  {birds: 83, year: 'Auguest'},
  {birds: 76, year: 'September'},
  {birds: 64, year: 'October'},
  {birds: 49, year: 'November'},
  {birds: 37, year: 'December'}
];
*/
/*
var values = [
  {birds: data[0], year: data2[0]},
  {birds: data[1], year: data2[1]},
  {birds: data[2], year: data2[2]},
  {birds: 59, year: 'April'},
  {birds: 70, year: 'May'},
  {birds: 80, year: 'June'},
  {birds: 84, year: 'July'},
  {birds: 83, year: 'Auguest'},
  {birds: 76, year: 'September'},
  {birds: 64, year: 'October'},
  {birds: 49, year: 'November'},
  {birds: 37, year: 'December'}
];*/
var values=[];
/*
for (var j = 0; j < data.length; j++) {//get rid of undefined in year (its added with the year1 array +=)
		values.push({
			birds: data[j], year: data2[j],
			 sortable: true,
			resizeable: true
	});
}*/
values=data;
values.sort(function(a, b){
    return a.year - b.year;
});

/*
a=data[0]
b=data[1]
c=data[2]
console.log(data[1]);
var values = [
  {a},
  {b},
  {c}
];
*/
var years = values.map(function(t) {
  return t.year
});

var margin = {top: 5, right: 5, bottom: 50, left: 50};
// here, we want the full chart to be 700x200, so we determine
// the width and height by subtracting the margins from those values
var fullWidth = 1100;
var fullHeight = 250;
// the width and height values will be used in the ranges of our scales
var width = fullWidth - margin.right - margin.left;
var height = fullHeight - margin.top - margin.bottom;
var svg = d3.select('#holder').append('svg:svg')
  .attr('width', fullWidth)
  .attr('height', fullHeight)
  .attr('id', "barchart")
  // this g is where the bar chart will be drawn
  .append('g')
    // translate it to leave room for the left and top margins
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

// x value determined by year
var yearScale = d3.scaleBand()
  .domain(years)
  .range([0, width])
  .paddingInner(0.1);

// the width of the bars is determined by the scale
var bandwidth = yearScale.bandwidth();



// y value determined by birds
var maxTemp = d3.max(values, function(d) { return d.birds; });
//var maxTemp = Number(valuessorted[0]);
var tempScale = d3.scaleLinear()
  .domain([0, maxTemp])
  .range([height, 0])
  .nice();


var xAxis = d3.axisBottom(yearScale);
var yAxis = d3.axisLeft(tempScale);

// draw the axes
svg.append('g')
  .classed('x axis', true)
  .attr('transform', 'translate(0,' + height + ')')
  .call(xAxis)
  .selectAll("text")
  //
  .attr("transform","translate(12,20) rotate(90)");
 // .attr('transform', 'translate(2,5)')
  
var yAxisEle = svg.append('g')
  .classed('y axis', true)
  .call(yAxis);

// add a label to the yAxis
var yText = yAxisEle.append('text')
  .attr('transform', 'rotate(-90)translate(-' + height/2 + ',0)')
  .style('text-anchor', 'middle')
  .style('fill', 'black')
  .attr('dy', '-2.8em')
  .style('font-size', 14)
  .text('# of birds banded');

var barHolder = svg.append('g')
  .classed('bar-holder', true);

// draw the bars
var bars = barHolder.selectAll('rect.bar')
    .data(values)
  .enter().append('rect')
    .classed('bar', true)
    .attr('x', function(d, i) {
      // the x value is determined using the
      // year of the datum
      return yearScale(d.year)
    })
    .attr('width', bandwidth)
    .attr('y', function(d) {
      // the y position is determined by the datum's temp
      // this value is the top edge of the rectangle
      return tempScale(d.birds);
    })
    .attr('height', function(d) {
      // the bar's height should align it with the base of the chart (y=0)
      return height - tempScale(d.birds);
    });

}
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
var specieslist = ["Mallard","Northern Pintail","Red-winged Blackbird","Snowy Egret","European Starling","Wilson&#39;s Warbler","Cassin&#39;s Finch","Small Canada Goose","House Finch","Black-capped Chickadee","Spotted Towhee","Canada Goose","Lark Bunting","Band-tailed Pigeon","Golden Eagle","Williamson&#39;s Sapsucker","Gray-crowned Rosy-Finch","Green-winged Teal","Gadwall","California Gull","Ferruginous Hawk","Vesper Sparrow","Evening Grosbeak","Pine Siskin","Tree Swallow","American Goldfinch","American Crow","Gray Jay","American Kestrel","Cliff Swallow","Ruby-crowned Kinglet","Oregon Junco","Swainson&#39;s Thrush","Steller&#39;s Jay","White-crowned Sparrow","Broad-tailed Hummingbird","Brown-headed Cowbird","Brown-capped Rosy-Finch","Red-naped Sapsucker","Audubon&#39;s Warbler","Purple Martin","Rufous Hummingbird","Gray Catbird","Flammulated Owl","Orange-crowned Warbler","Barn Swallow","Gray-headed Junco","Western Bluebird","Black-billed Magpie","Blue-winged Teal","Ring-billed Gull","American Robin","Clark&#39;s Nutcracker","Unidentified Teal","Red-shafted Flicker","American Dipper","MacGillivray&#39;s Warbler","Prairie Falcon","Chipping Sparrow","Mountain Chickadee","House Sparrow","Lincoln&#39;s Sparrow","Warbling Vireo","Song Sparrow","Loggerhead Shrike","Mourning Dove","Red-eyed Vireo","Hammond&#39;s Flycatcher","Yellow Warbler","Green-tailed Towhee","Gambel&#39;s White-crowned Sparrow","Western Wood-Pewee","Black-throated Sparrow","Black-chinned Hummingbird","Mountain Bluebird","Myrtle Warbler","Hermit Thrush","American White Pelican","Great Horned Owl","Barn Owl","American Wigeon","Least Sandpiper","Common Grackle","Cinnamon Teal","American Coot","Yellow-headed Blackbird","Dusky Flycatcher","Townsend&#39;s Warbler","White-winged Junco","Northern Cardinal","Bald Eagle","Brewer&#39;s Blackbird","Lesser Scaup","Field Sparrow","Burrowing Owl","Blackpoll Warbler","Western Flycatcher","Brown Creeper","Mountain White-crowned Sparrow","Virginia&#39;s Warbler","Northern Saw-whet Owl","Horned Lark","Sora","Black Rosy-Finch","Violet-green Swallow","Solitary Vireo","Plumbeous Vireo","Swainson&#39;s Hawk","Redhead","Mountain Plover","Black-throated Gray Warbler","Northern Parula","Pygmy Nuthatch","Savannah Sparrow","Red-tailed Hawk","Black-crowned Night-Heron","White-breasted Nuthatch","Brewer&#39;s Sparrow","Traill&#39;s Flycatcher","Downy Woodpecker","Northern Shrike","McCown&#39;s Longspur","Say&#39;s Phoebe","Brown Thrasher","Red-breasted Nuthatch","House Wren","Western Tanager","Common Yellowthroat","Blue Jay","Juniper Titmouse","Black-headed Grosbeak","Long-billed Dowitcher","Cordilleran Flycatcher","Merlin","Killdeer","Lazuli Bunting","American Tree Sparrow","Western Meadowlark","Western Scrub-Jay","Red Crossbill","Cassin&#39;s Vireo","White-faced Ibis","Bushtit","Calliope Hummingbird","Indigo Bunting","Long-eared Owl","Sage Thrasher","White-throated","Sparrow","Slate-colored Junco","Unidentified Dark-eyed Junco","Olive-sided Flycatcher","Northern Waterthrush","Willow Flycatcher","Bullock&#39;s Oriole","Lesser Yellowlegs","Peregrine Falcon","Cassin&#39;s Sparrow","Double-crested Cormorant","Orchard Oriole","Bewick&#39;s Wren","Chestnut-sided Warbler","Black Swift","Ruddy Duck","Northern Harrier","Unidentified Empidonax","Lesser Goldfinch","Hairy Woodpecker","American Three-toed Woodpecker","Blue Grosbeak","Yellow-breasted Chat","Lark Sparrow","Rock Wren","Townsend&#39;s Solitaire","Sandhill Crane","Clay-colored Sparrow","Western Kingbird","Pine Grosbeak","Pied-billed Grebe","Black-and-white Warbler","Northern Goshawk","Swamp Sparrow","Cedar Waxwing","Costa&#39;s Hummingbird","Osprey","Gray Flycatcher","Sharp-shinned Hawk","Canvasback","Veery","Western Screech-Owl","Harris&#39;s Sparrow","Common Merganser","Ash-throated Flycatcher","Ring-necked Duck","Northern Shoveler","Common Raven","American Pipit","Magnolia Warbler","Mexican Spotted Owl","Western Grebe","Grasshopper Sparrow","Nashville Warbler","Flicker Intergrade","Golden-winged Warbler","Yellow-shafted Flicker","Northern Pygmy-Owl","Fox Sparrow","Wood Duck","Eastern Screech-Owl","Winter Wren","Solitary Sandpiper","American Redstart","Dickcissel","Cattle Egret","Least Flycatcher","Eastern Kingbird","Cooper&#39;s Hawk","Baltimore Oriole","Baltimore X Bullock&#39;s Oriole Hybrid","Pine Warbler","Blue-gray Gnatcatcher","Long-billed Curlew","Scarlet Tanager","Semipalmated Sandpiper","Black-throated Blue Warbler","Eastern Towhee","Franklin&#39;s Gull","Bohemian Waxwing","Eurasian Collared-Dove","Marsh Wren","Tennessee Warbler","Golden-crowned Kinglet","Yellow-bellied Sapsucker","Spotted Sandpiper","Alder Flycatcher","Gray-cheeked Thrush","Rose-breasted Grosbeak","Hybrid Passerine","Canyon Towhee","Western Palm Warbler","Rough-legged Hawk","Common Poorwill","Mexican Duck","Chihuahuan Raven","Bell&#39;s Vireo","Baird&#39;s Sandpiper","Western Sandpiper","Common Redpoll","Boreal Owl","Wilson&#39;s Snipe","Blue-headed Vireo","Bufflehead","Common Nighthawk","White-eyed Vireo","Wood Thrush","American Black Duck","Canada Warbler","Eastern Phoebe","Canyon Wren","Great Crested Flycatcher","Lewis&#39;s Woodpecker","Blue-winged Warbler","Eared Grebe","American Avocet","Interior Least Tern","Carolina Wren","Ladder-backed Woodpecker","Philadelphia Vireo","Northern Mockingbird","Painted Bunting","Purple Finch","Virginia Rail","Red-headed Woodpecker","Common Goldeneye","Hooded Merganser","Unidentified Rufous-sided Towhee","Cassin&#39;s Kingbird","Magnificent Hummingbird","Sprague&#39;s Pipit","Cape May Warbler","Semipalmated Plover","Northern Rough-winged Swallow","Bank Swallow","Yellow-billed Cuckoo","Belted Kingfisher","Black-throated Green Warbler","Pacific Wren","Ovenbird","Black Phoebe","Eastern White-crowned Sparrow","White-throated Swift","Ruby-throated Hummingbird","Golden-crowned Sparrow","Summer Tanager","Black-billed Cuckoo","Hooded Warbler","Scott&#39;s Oriole","Great Blue Heron","Unknown Yellow-rumped Warbler","Piping Plover","Gray Vireo","Wilson&#39;s Phalarope","Chestnut-collared Longspur","Indigo X Lazuli Bunting Hybrid","Harlan&#39;s Hawk","Forster&#39;s Tern","American Bittern","Yellow-green Vireo","Greater Yellowlegs","Worm-eating Warbler","Mourning Warbler","Yellow-throated Vireo","Whiskered Screech-Owl","Eastern Wood-Pewee","Curve-billed Thrasher","Greater White-fronted Goose","Blackburnian Warbler","Prothonotary Warbler","Pinyon Jay","Common Loon","Bay-breasted Warbler","Connecticut Warbler","Lesser Snow Goose","Upland Sandpiper","Red-necked Phalarope","Mississippi Kite","Unidentified Hummingbird","Yellow-eyed Junco","Great Egret","Broad-winged Hawk","Mallard X American Black Duck Hybrid","Pectoral Sandpiper","Grace&#39;s Warbler","Eastern Bluebird","Herring Gull","Lapland Longspur","Phainopepla","Yellow-bellied Flycatcher","Red-bellied Woodpecker","Great-tailed Grackle","Prairie Warbler","Short-eared Owl","Baird&#39;s Sparrow","Kentucky Warbler","Chimney Swift","Snowy Plover","Hutton&#39;s Vireo","Horned Grebe","White-winged Crossbill","White-eared Hummingbird","Stilt Sandpiper","Gyrfalcon","Bobolink","Red-shouldered Hawk","Willet","Unspecified Sage Sparrow","Sanderling","Black-bellied Plover","Yellow-throated Warbler","Varied Thrush","Hepatic Tanager","Turkey Vulture","Pacific-slope Flycatcher","Harris&#39;s Hawk","White-rumped Sandpiper","Hybrid Chickadee","American Golden-Plover","Other Hybrid Duck","Acadian Flycatcher","Anna&#39;s Hummingbird","White-winged Dove","Black-necked Stilt","Whooping Crane","Large Canada Goose","Snow X Blue Goose Intergrade","Blue Goose","Trumpeter Swan","Red-cockaded Woodpecker","Ross&#39;s Goose","Snow X Ross&#39;s Goose Hybrid","Whistling Swan","Glaucous-winged Gull","Greater Snow Goose","Unidentified Gull","Broad-billed Hummingbird","Rusty Blackbird"];
autocomplete(document.getElementById("myInput"), specieslist);



function successFunction2(data) {//function puts all rows in csv into table

  	
  var allRows = data.split(/\r?\n|\r/);
  var table = '<table>';
  for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
    if (singleRow === 0) {
      table += '<thead>';
      table += '<tr>';
    } else {
      table += '<tr>';
    }
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
		 
      if (singleRow === 0) {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } else {
		 if ((rowCells[1].toString()==stateid)){
		if (rowCells[0].toString()==stateid)
        table += '<td>';
        table += rowCells[rowCell];
        table += '</td>';
		 }
      }
		 
    }
    if (singleRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
  } 
  table += '</tbody>';
  table += '</table>';
 // $('body').append(table);
  document.getElementById('table2').innerHTML = table
}


//CALIFORNIA
document.getElementById('CA').addEventListener('click', function(ev){
hideselect();
document.getElementById('CA').style.fill = '#002868';
stateid='CA';

/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/

})
document.getElementById('AZ').addEventListener('click', function(ev){
hideselect();
document.getElementById('AZ').style.fill = '#002868';
stateid='AZ';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})

//TEXAS
document.getElementById('TX').addEventListener('click', function(ev){
hideselect();
document.getElementById('TX').style.fill = '#002868';
stateid='TX';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/	
	
})

//NORTH DAKOTA
document.getElementById('ND').addEventListener('click', function(ev){
	hideselect();
document.getElementById('ND').style.fill = '#002868';
stateid='ND';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})

//LOUISIANA
document.getElementById('LA').addEventListener('click', function(ev){
hideselect();
document.getElementById('LA').style.fill = '#002868';
stateid='LA';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})


document.getElementById('AK').addEventListener('click', function(ev){
hideselect();
document.getElementById('AK').style.fill = '#002868';
stateid='AK';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})

document.getElementById('AL').addEventListener('click', function(ev){
	hideselect();
document.getElementById('AL').style.fill = '#002868';
stateid='AL';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})

document.getElementById('AR').addEventListener('click', function(ev){
	hideselect();
document.getElementById('AR').style.fill = '#002868';
stateid='AR';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})

document.getElementById('CO').addEventListener('click', function(ev){
	hideselect();
document.getElementById('CO').style.fill = '#002868';
stateid='CO';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('CT').addEventListener('click', function(ev){
	hideselect();
document.getElementById('CT').style.fill = '#002868';
stateid='CT';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('DE').addEventListener('click', function(ev){
	
	hideselect();
document.getElementById('DE').style.fill = '#002868';
stateid='DE';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('FL').addEventListener('click', function(ev){
	hideselect();
document.getElementById('FL').style.fill = '#002868';
stateid='FL';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})

document.getElementById('GA').addEventListener('click', function(ev){
hideselect();
document.getElementById('GA').style.fill = '#002868';
stateid='GA';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})

document.getElementById('HI').addEventListener('click', function(ev){
	hideselect();
document.getElementById('HI').style.fill = '#002868';
stateid='HI';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('ID').addEventListener('click', function(ev){
	hideselect();
document.getElementById('ID').style.fill = '#002868';
stateid='ID';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('IL').addEventListener('click', function(ev){
	hideselect();
document.getElementById('IL').style.fill = '#002868';
stateid='IL';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('IN').addEventListener('click', function(ev){
hideselect();
document.getElementById('IN').style.fill = '#002868';
stateid='IN';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('IA').addEventListener('click', function(ev){
	hideselect();
document.getElementById('IA').style.fill = '#002868';
stateid='IA';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('KS').addEventListener('click', function(ev){
	hideselect();
document.getElementById('KS').style.fill = '#002868';
stateid='KS';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('KY').addEventListener('click', function(ev){
	hideselect();
document.getElementById('KY').style.fill = '#002868';
stateid='KY';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('ME').addEventListener('click', function(ev){
	hideselect();
document.getElementById('ME').style.fill = '#002868';
stateid='ME';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('MD').addEventListener('click', function(ev){
	hideselect();
document.getElementById('MD').style.fill = '#002868';
stateid='MD';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('MA').addEventListener('click', function(ev){
	hideselect();
document.getElementById('MA').style.fill = '#002868';
stateid='MA';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('MI').addEventListener('click', function(ev){
	hideselect();
document.getElementById('MI').style.fill = '#002868';
stateid='MI';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('MN').addEventListener('click', function(ev){
	hideselect();
document.getElementById('MN').style.fill = '#002868';
stateid='MN';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('MS').addEventListener('click', function(ev){
	hideselect();
document.getElementById('MS').style.fill = '#002868';
stateid='MS';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('MO').addEventListener('click', function(ev){
	hideselect();
document.getElementById('MO').style.fill = '#002868';
stateid='MO';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('MT').addEventListener('click', function(ev){
	hideselect();
document.getElementById('MT').style.fill = '#002868';
stateid='MT';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('NE').addEventListener('click', function(ev){
	hideselect();
document.getElementById('NE').style.fill = '#002868';
stateid='NE';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('NV').addEventListener('click', function(ev){
	hideselect();
document.getElementById('NV').style.fill = '#002868';
stateid='NV';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('NH').addEventListener('click', function(ev){
	hideselect();
document.getElementById('NH').style.fill = '#002868';
stateid='NH';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('NJ').addEventListener('click', function(ev){
	hideselect();
document.getElementById('NJ').style.fill = '#002868';
stateid='NJ';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('NM').addEventListener('click', function(ev){
	hideselect();
document.getElementById('NM').style.fill = '#002868';
stateid='NM';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('NY').addEventListener('click', function(ev){
	hideselect();
document.getElementById('NY').style.fill = '#002868';
stateid='NY';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('NC').addEventListener('click', function(ev){
	hideselect();
document.getElementById('NC').style.fill = '#002868';
stateid='NC';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('OH').addEventListener('click', function(ev){
	hideselect();
document.getElementById('OH').style.fill = '#002868';
stateid='OH';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('OK').addEventListener('click', function(ev){
hideselect();
document.getElementById('OK').style.fill = '#002868';
stateid='OK';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('OR').addEventListener('click', function(ev){
	hideselect();
document.getElementById('OR').style.fill = '#002868';
stateid='OR';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('PA').addEventListener('click', function(ev){
	hideselect();
document.getElementById('PA').style.fill = '#002868';
stateid='PA';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('RI').addEventListener('click', function(ev){
	hideselect();
document.getElementById('RI').style.fill = '#002868';
stateid='RI';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('SC').addEventListener('click', function(ev){
	hideselect();
document.getElementById('SC').style.fill = '#002868';
stateid='SC';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('SD').addEventListener('click', function(ev){
	hideselect();
document.getElementById('SD').style.fill = '#002868';
stateid='SD';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('TN').addEventListener('click', function(ev){
	hideselect();
document.getElementById('TN').style.fill = '#002868';
stateid='TN';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('UT').addEventListener('click', function(ev){
hideselect();
document.getElementById('UT').style.fill = '#002868';
stateid='UT';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('VT').addEventListener('click', function(ev){
	hideselect();
document.getElementById('VT').style.fill = '#002868';
stateid='VT';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('VA').addEventListener('click', function(ev){
	hideselect();
document.getElementById('VA').style.fill = '#002868';
stateid='VA';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('WA').addEventListener('click', function(ev){
	hideselect();
document.getElementById('WA').style.fill = '#002868';
stateid='WA';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('WV').addEventListener('click', function(ev){
	hideselect();
document.getElementById('WV').style.fill = '#002868';
stateid='WV';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('WI').addEventListener('click', function(ev){
	hideselect();
document.getElementById('WI').style.fill = '#002868';
stateid='WI';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})
document.getElementById('WY').addEventListener('click', function(ev){
	hideselect();
document.getElementById('WY').style.fill = '#002868';
stateid='WY';
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
}).done(successFunction);
*/})


function solution(A)
{
    var lines = A.split(/\r?\n/g);

    var counts = {};
    var multiples = {};

    for (var i=1, ii=lines.length; i<ii; i++)
    {
        var splt = lines[i].split(/\s*\|\s*/g);
        var val = splt[2];

        if (!counts[val]) {
            counts[val] = 1;
			//console.log(counts[val]);
        } else {
            counts[val]++;
            multiples[val] = counts[val];
			//console.log(multiples[val]);
        }
    }
	
    return multiples;
}
function count(A) {

    A.sort();
	var array_elements = A.split(/\r?\n/g);
    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                document.write(current + ' comes --> ' + cnt + ' times<br>');
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        //document.write(current + ' comes --> ' + cnt + ' times');
        console.log(current + ' comes --> ' + cnt + ' times');
    }

}

