
svg1=document.getElementById('svg1');
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

//make for each state
function hideall(){
	/*
svgAlaska.style.display = 'none';
svgAlabama.style.display = 'none';
svgArkansas.style.display = 'none';
svgArizona.style.display = 'none';
svgCalifornia.style.display = 'none';
svgColorado.style.display = 'none';
svgHawaii.style.display = 'none';
svgConnecticut.style.display = 'none';
svgDelaware.style.display = 'none';
svgFlorida.style.display = 'none';
svgGeorgia.style.display = 'none';
svgIowa.style.display = 'none';
svgIdaho.style.display = 'none';
svgIllinois.style.display = 'none';
svgIndiana.style.display = 'none';
svgKansas.style.display = 'none';
svgKentucky.style.display = 'none';
svgLouisiana.style.display = 'none';
svgMassachusetts.style.display = 'none';
svgMaryland.style.display = 'none';
svgMaine.style.display = 'none';
svgMichigan.style.display = 'none';
svgMinnesota.style.display = 'none';
svgMissouri.style.display = 'none';
svgMississippi.style.display = 'none';
svgMontana.style.display = 'none';
svgNorthcarolina.style.display = 'none';
svgNorthdakota.style.display = 'none';
svgNebraska.style.display = 'none';
svgNewhampshire.style.display = 'none';
svgNewjersey.style.display = 'none';
svgNewmexico.style.display = 'none';
svgNevada.style.display = 'none';
svgNewyork.style.display = 'none';
svgOhio.style.display = 'none';
svgOklahoma.style.display = 'none';
svgOregon.style.display = 'none';
svgPennsylvania.style.display = 'none';
svgRhodeisland.style.display = 'none';
svgSouthcarolina.style.display = 'none';
svgSouthdakota.style.display = 'none';
svgTennessee.style.display = 'none';
svgTexas.style.display = 'none';
svgUtah.style.display = 'none';
svgVirginia.style.display = 'none';
svgVermont.style.display = 'none';
svgWashington.style.display = 'none';
svgWisconsin.style.display = 'none';
svgWestvirginia.style.display = 'none';
svgWyoming.style.display = 'none';
*/
}
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
hideall();
function statecount2(){
  
}


var speciesvar="all"
var yearvar="1900"
var yearvar2="2018"
var stateid = "all";
var ifall = true;
var dict = [];
var rowCells= new Array();
var AK=0,AL=0,AR=0,AZ=0,CA=0,CO=0,CT=0,DC=0,DE=0,FL=0,GA=0,GU=0,HI=0,IA=0,ID=0,IL=0,IN=0,KS=0,KY=0,LA=0,MA=0,MD=0,ME=0,MH=0,MI=0,MN=0,MO=0,MS=0,MT=0,NC=0,ND=0,NE=0,NH=0,NJ=0,NM=0,NV=0,NY=0,OH=0,OK=0,OR=0,PA=0,PR=0,PW=0,RI=0,SC=0,SD=0,TN=0,TX=0,UT=0,VA=0,VI=0,VT=0,WA=0,WI=0,WV=0,WY=0;

function countstates(data) {
	var dict = [];
  var allRows = data.split(/\r?\n|\r/);
 
 
	if(stateid!="all"){
		if (speciesvar=="all"){
	for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[4].toString()>yearvar)&&(rowCells[4].toString()<yearvar2)&&(rowCells[1].toString()==stateid)){//(rowCells[0].toString()==speciesvar)&&
	if (dict[rowCells[0].toString()] === undefined){
		dict[rowCells[0].toString()]=Number(rowCells[5]);
		}

		if (dict[rowCells[0].toString()] !== undefined){
			dict[rowCells[0].toString()]+=Number(rowCells[5]);
		}
		
	ifall=false;
   }
	}
   }
   
   if (speciesvar!="all"){
   for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[0].toString()==speciesvar)&&(rowCells[4].toString()>yearvar)&&(rowCells[4].toString()<yearvar2)&&(rowCells[1].toString()==stateid)){//(rowCells[0].toString()==speciesvar)&&
	if (dict[rowCells[0].toString()] === undefined){
		dict[rowCells[0].toString()]=Number(rowCells[5]);
		}

		if (dict[rowCells[0].toString()] !== undefined){
			dict[rowCells[0].toString()]+=Number(rowCells[5]);
		}
		
	ifall=false;
   }
	}
   }
	
   }
   if(stateid=="all"){
	   
	   if (speciesvar=="all"){
	   for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[4].toString()>yearvar)&&(rowCells[4].toString()<yearvar2)){
	   var a=rowCells[1].toString()
   if (a.substring(0,1)=='A'){
   if ((a=='AK')){
	AK+=Number(rowCells[5]);
	 continue;}
	 if ((a=='AR')){
	AR+=Number(rowCells[5]);
	 continue;}
	  if ((a=='AL')){
	AL+=Number(rowCells[5]);
	 continue;}
	  if ((a=='AZ')){
	AZ+=Number(rowCells[5]);
	 continue;}}
   if (a.substring(0,1)=='C'){
  if ((a=='CA')){
	CA+=Number(rowCells[5]);
	 continue;}
	 if ((a=='CO')){
	CO+=Number(rowCells[5]);
	 continue;}
	 if ((a=='CT')){
	CT+=Number(rowCells[5]);
	 continue;}}
   if (a.substring(0,1)=='D'){
  if ((a=='DC')){
	DC+=Number(rowCells[5]);
	 continue;}
	 if ((a=='DE')){
	DE+=Number(rowCells[5]);
	 continue;}}
	if ((a=='FL')){
	FL+=Number(rowCells[5]);
	 continue;}
	 if (a.substring(0,1)=='G'){
	 if ((a=='GA')){
	GA+=Number(rowCells[5]);
	 continue;}
	 if ((a=='GU')){
	GU+=Number(rowCells[5]);
	 continue;}
	 if ((a=='HI')){
	HI+=Number(rowCells[5]);
	 continue;}}
	 if (a.substring(0,1)=='I'){
	 if ((a=='IA')){
	IA+=Number(rowCells[5]);
	 continue;}
	 if ((a=='ID')){
	ID+=Number(rowCells[5]);
	 continue;}
	 if ((a=='IL')){
	IL+=Number(rowCells[5]);
	 continue;}
	 if ((a=='IN')){
	IN+=Number(rowCells[5]);
	 continue;}}
	 if (a.substring(0,1)=='K'){
	 if ((a=='KS')){
	KS+=Number(rowCells[5]);
	 continue;}
	 if ((a=='KY')){
	KY+=Number(rowCells[5]);
	 continue;}}
	 if ((a=='LA')){
	LA+=Number(rowCells[5]);
	 continue;}
	 if (a.substring(0,1)=='M'){
	 if ((a=='MA')){
	MA+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MD')){
	MD+=Number(rowCells[5]);
	 continue;}
	 if ((a=='ME')){
	ME+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MH')){
	MH+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MI')){
	MI+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MN')){
	MN+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MO')){
	MO+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MS')){
	MS+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MT')){
	MT+=Number(rowCells[5]);
	 continue;}}
	 if (a.substring(0,1)=='N'){
	 if ((a=='NC')){
	NC+=Number(rowCells[5]);
	 continue;}
	 if ((a=='ND')){
	ND+=Number(rowCells[5]);
	 continue;}
	 if ((a=='NE')){
	NE+=Number(rowCells[5]);
	 continue;}
	 if ((a=='NH')){
	NH+=Number(rowCells[5]);
	 continue;}
	 if ((a=='NJ')){
	NJ+=Number(rowCells[5]);
	 continue;}
	 if ((a=='NM')){
	NM+=Number(rowCells[5]);
	 continue;}
	 if ((a=='NV')){
	NV+=Number(rowCells[5]);
	continue;}
	 if ((a=='NY')){
	NY+=Number(rowCells[5]);
	 continue;}}
	 if (a.substring(0,1)=='O'){
	 if ((a=='OH')){
	OH+=Number(rowCells[5]);
	continue;}
	 if ((a=='OK')){
	OK+=Number(rowCells[5]);
	continue;}
	 if ((a=='OR')){
	OR+=Number(rowCells[5]);
	 continue;}}
	 if (a.substring(0,1)=='P'){
	 if ((a=='PA')){
	PA+=Number(rowCells[5]);
	continue;}
	 if ((a=='PR')){
	PR+=Number(rowCells[5]);
	continue;}
	 if ((a=='PW')){
	PW+=Number(rowCells[5]);
	 continue;}}
	 if ((a=='RI')){
	RI+=Number(rowCells[5]);
	continue;}
	if (a.substring(0,1)=='S'){
	 if ((a=='SC')){
	SC+=Number(rowCells[5]);
	continue;}
	 if ((a=='SD')){
	SD+=Number(rowCells[5]);
	continue;}}
	if (a.substring(0,1)=='T'){
	 if ((a=='TN')){
	TN+=Number(rowCells[5]);
	continue;}
	 if ((a=='TX')){
	TX+=Number(rowCells[5]);
	continue;}}
	 if ((a=='UT')){
	UT+=Number(rowCells[5]);
	 continue;}
	if (a.substring(0,1)=='V'){
	 if ((a=='VA')){
	VA+=Number(rowCells[5]);
	continue;}
	 if ((a=='VI')){
	VI+=Number(rowCells[5]);
	continue;}
	 if ((a=='VT')){
	VT+=Number(rowCells[5]);
	continue;}}
	if (a.substring(0,1)=='W'){
	 if ((a=='WA')){
	WA+=Number(rowCells[5]);
	continue;}
	 if ((a=='WI')){
	WI+=Number(rowCells[5]);
	continue;}
	 if ((a=='WV')){
	WV+=Number(rowCells[5]);
	continue;}
	 if ((a=='WY')){
	WY+=Number(rowCells[5]);
	continue;}}
   }
   }
   }
   
      if (speciesvar!="all"){
	   for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[0].toString()==speciesvar)&&(rowCells[0].toString()==speciesvar)&&(rowCells[4].toString()>yearvar)&&(rowCells[4].toString()<yearvar2)){
	   var a=rowCells[1].toString()
   if (a.substring(0,1)=='A'){
   if ((a=='AK')){
	AK+=Number(rowCells[5]);
	 continue;}
	 if ((a=='AR')){
	AR+=Number(rowCells[5]);
	 continue;}
	  if ((a=='AL')){
	AL+=Number(rowCells[5]);
	 continue;}
	  if ((a=='AZ')){
	AZ+=Number(rowCells[5]);
	 continue;}}
   if (a.substring(0,1)=='C'){
  if ((a=='CA')){
	CA+=Number(rowCells[5]);
	 continue;}
	 if ((a=='CO')){
	CO+=Number(rowCells[5]);
	 continue;}
	 if ((a=='CT')){
	CT+=Number(rowCells[5]);
	 continue;}}
   if (a.substring(0,1)=='D'){
  if ((a=='DC')){
	DC+=Number(rowCells[5]);
	 continue;}
	 if ((a=='DE')){
	DE+=Number(rowCells[5]);
	 continue;}}
	if ((a=='FL')){
	FL+=Number(rowCells[5]);
	 continue;}
	 if (a.substring(0,1)=='G'){
	 if ((a=='GA')){
	GA+=Number(rowCells[5]);
	 continue;}
	 if ((a=='GU')){
	GU+=Number(rowCells[5]);
	 continue;}
	 if ((a=='HI')){
	HI+=Number(rowCells[5]);
	 continue;}}
	 if (a.substring(0,1)=='I'){
	 if ((a=='IA')){
	IA+=Number(rowCells[5]);
	 continue;}
	 if ((a=='ID')){
	ID+=Number(rowCells[5]);
	 continue;}
	 if ((a=='IL')){
	IL+=Number(rowCells[5]);
	 continue;}
	 if ((a=='IN')){
	IN+=Number(rowCells[5]);
	 continue;}}
	 if (a.substring(0,1)=='K'){
	 if ((a=='KS')){
	KS+=Number(rowCells[5]);
	 continue;}
	 if ((a=='KY')){
	KY+=Number(rowCells[5]);
	 continue;}}
	 if ((a=='LA')){
	LA+=Number(rowCells[5]);
	 continue;}
	 if (a.substring(0,1)=='M'){
	 if ((a=='MA')){
	MA+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MD')){
	MD+=Number(rowCells[5]);
	 continue;}
	 if ((a=='ME')){
	ME+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MH')){
	MH+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MI')){
	MI+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MN')){
	MN+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MO')){
	MO+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MS')){
	MS+=Number(rowCells[5]);
	 continue;}
	 if ((a=='MT')){
	MT+=Number(rowCells[5]);
	 continue;}}
	 if (a.substring(0,1)=='N'){
	 if ((a=='NC')){
	NC+=Number(rowCells[5]);
	 continue;}
	 if ((a=='ND')){
	ND+=Number(rowCells[5]);
	 continue;}
	 if ((a=='NE')){
	NE+=Number(rowCells[5]);
	 continue;}
	 if ((a=='NH')){
	NH+=Number(rowCells[5]);
	 continue;}
	 if ((a=='NJ')){
	NJ+=Number(rowCells[5]);
	 continue;}
	 if ((a=='NM')){
	NM+=Number(rowCells[5]);
	 continue;}
	 if ((a=='NV')){
	NV+=Number(rowCells[5]);
	continue;}
	 if ((a=='NY')){
	NY+=Number(rowCells[5]);
	 continue;}}
	 if (a.substring(0,1)=='O'){
	 if ((a=='OH')){
	OH+=Number(rowCells[5]);
	continue;}
	 if ((a=='OK')){
	OK+=Number(rowCells[5]);
	continue;}
	 if ((a=='OR')){
	OR+=Number(rowCells[5]);
	 continue;}}
	 if (a.substring(0,1)=='P'){
	 if ((a=='PA')){
	PA+=Number(rowCells[5]);
	continue;}
	 if ((a=='PR')){
	PR+=Number(rowCells[5]);
	continue;}
	 if ((a=='PW')){
	PW+=Number(rowCells[5]);
	 continue;}}
	 if ((a=='RI')){
	RI+=Number(rowCells[5]);
	continue;}
	if (a.substring(0,1)=='S'){
	 if ((a=='SC')){
	SC+=Number(rowCells[5]);
	continue;}
	 if ((a=='SD')){
	SD+=Number(rowCells[5]);
	continue;}}
	if (a.substring(0,1)=='T'){
	 if ((a=='TN')){
	TN+=Number(rowCells[5]);
	continue;}
	 if ((a=='TX')){
	TX+=Number(rowCells[5]);
	continue;}}
	 if ((a=='UT')){
	UT+=Number(rowCells[5]);
	 continue;}
	if (a.substring(0,1)=='V'){
	 if ((a=='VA')){
	VA+=Number(rowCells[5]);
	continue;}
	 if ((a=='VI')){
	VI+=Number(rowCells[5]);
	continue;}
	 if ((a=='VT')){
	VT+=Number(rowCells[5]);
	continue;}}
	if (a.substring(0,1)=='W'){
	 if ((a=='WA')){
	WA+=Number(rowCells[5]);
	continue;}
	 if ((a=='WI')){
	WI+=Number(rowCells[5]);
	continue;}
	 if ((a=='WV')){
	WV+=Number(rowCells[5]);
	continue;}
	 if ((a=='WY')){
	WY+=Number(rowCells[5]);
	continue;}}
   }
	   }
	  }
   }
   
   
   
  if(ifall==true){
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
   
   table += '<tbody>';
   table += '<tr>';
   table += '<th>';
   table+= "AL";
   table += '</th>';
   table += '<th>';
   table+= AL;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "AK";
   table += '</th>';
   table += '<th>';
   table+= AK;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "AZ";
   table += '</th>';
   table += '<th>';
   table+= AZ;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "AR";
   table += '</th>';
   table += '<th>';
   table+= AR;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "CA";
   table += '</th>';
   table += '<th>';
   table+= CA;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "CO";
   table += '</th>';
   table += '<th>';
   table+= CO;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "CT";
   table += '</th>';
   table += '<th>';
   table+= CT;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "DE";
   table += '</th>';
   table += '<th>';
   table+= DE;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "FL";
   table += '</th>';
   table += '<th>';
   table+= FL;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "GA";
   table += '</th>';
   table += '<th>';
   table+= GA;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "HI";
   table += '</th>';
   table += '<th>';
   table+= HI;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "ID";
   table += '</th>';
   table += '<th>';
   table+= ID;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "IL";
   table += '</th>';
   table += '<th>';
   table+= IL;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "IN";
   table += '</th>';
   table += '<th>';
   table+= IN;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "IA";
   table += '</th>';
   table += '<th>';
   table+= IA;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "KS";
   table += '</th>';
   table += '<th>';
   table+= KS;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "KY";
   table += '</th>';
   table += '<th>';
   table+= KY;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "LA";
   table += '</th>';
   table += '<th>';
   table+= LA;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "ME";
   table += '</th>';
   table += '<th>';
   table+= ME;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "MD";
   table += '</th>';
   table += '<th>';
   table+= MD;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "MA";
   table += '</th>';
   table += '<th>';
   table+= MA;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "MI";
   table += '</th>';
   table += '<th>';
   table+= MI;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "MN";
   table += '</th>';
   table += '<th>';
   table+= MN;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "MS";
   table += '</th>';
   table += '<th>';
   table+= MS;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "MO";
   table += '</th>';
   table += '<th>';
   table+= MO;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "MT";
   table += '</th>';
   table += '<th>';
   table+= MT;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "NE";
   table += '</th>';
   table += '<th>';
   table+= NE;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "NV";
   table += '</th>';
   table += '<th>';
   table+= NV;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "NH";
   table += '</th>';
   table += '<th>';
   table+= NH;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "NJ";
   table += '</th>';
   table += '<th>';
   table+= NJ;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "NM";
   table += '</th>';
   table += '<th>';
   table+= NM;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "NY";
   table += '</th>';
   table += '<th>';
   table+= NY;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "NC";
   table += '</th>';
   table += '<th>';
   table+= NC;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "ND";
   table += '</th>';
   table += '<th>';
   table+= ND;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "OH";
   table += '</th>';
   table += '<th>';
   table+= OH;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "OK";
   table += '</th>';
   table += '<th>';
   table+= OK;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "OR";
   table += '</th>';
   table += '<th>';
   table+= OR;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "PA";
   table += '</th>';
   table += '<th>';
   table+= PA;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "RI";
   table += '</th>';
   table += '<th>';
   table+= RI;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "SC";
   table += '</th>';
   table += '<th>';
   table+= SC;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "SD";
   table += '</th>';
   table += '<th>';
   table+= SD;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "TN";
   table += '</th>';
   table += '<th>';
   table+= TN;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "TX";
   table += '</th>';
   table += '<th>';
   table+= TX;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "UT";
   table += '</th>';
   table += '<th>';
   table+= UT;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "VT";
   table += '</th>';
   table += '<th>';
   table+= VT;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "VA";
   table += '</th>';
   table += '<th>';
   table+= VA;
   table += '</th>';
   table += '</tr>';
   
   table += '<tr>';
   table += '<th>';
   table+= "WA";
   table += '</th>';
   table += '<th>';
   table+= WA;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "WV";
   table += '</th>';
   table += '<th>';
   table+= WV;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "WI";
   table += '</th>';
   table += '<th>';
   table+= WI;
   table += '</th>';
   table += '</tr>';
      
   table += '<tr>';
   table += '<th>';
   table+= "WY";
   table += '</th>';
   table += '<th>';
   table+= WY;
   table += '</th>';
   table += '</tr>';
   
   
   
   table += '</tbody>';
   table+="</table>";
 /*
      table += '<thead>';
      table += '<tr>';

     table += 'State';
 table += '</thead>';
	   table += '</tr>';
      table += '<tbody>';
   table += '<td>';
   table += 'California';
   table += '<th>';
   
        table += CA;
		table += '</th>';
		table += '</td>';


      
     
   
		table += '<td>';
        table += CO;
		table += '</td>';
		table += '<td>';
        table += VA;
		table += '</td>';
		table += '<td>';
        table += WV;
		table += '</td>';
		table += '<td>';
        table += WA;
        table += '</td>';
		
  table += '</tbody>';
  table += '</table>';
  */
 // $('body').append(table);
  document.getElementById('table2').innerHTML = table
  }
  if(ifall==false){
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

      table += '</tbody>';
   table+="</table>";
document.getElementById('table2').innerHTML = table
  }
  //Object.keys(dict).forEach(function(key) {
	  
 // })
AK=0,AL=0,AR=0,AZ=0,CA=0,CO=0,CT=0,DC=0,DE=0,FL=0,GA=0,GU=0,HI=0,IA=0,ID=0,IL=0,IN=0,KS=0,KY=0,LA=0,MA=0,MD=0,ME=0,MH=0,MI=0,MN=0,MO=0,MS=0,MT=0,NC=0,ND=0,NE=0,NH=0,NJ=0,NM=0,NV=0,NY=0,OH=0,OK=0,OR=0,PA=0,PR=0,PW=0,RI=0,SC=0,SD=0,TN=0,TX=0,UT=0,VA=0,VI=0,VT=0,WA=0,WI=0,WV=0,WY=0;
}


function successFunction(data) {//function puts all rows in csv into table

  
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
var countries = ["Mallard","Northern Pintail","Red-winged Blackbird","Snowy Egret","European Starling","Wilson's Warbler","Cassin's Finch","Small Canada Goose","House Finch","Black-capped Chickadee","Spotted Towhee","Canada Goose","Lark Bunting","Band-tailed Pigeon","Golden Eagle","Williamson's Sapsucker","Gray-crowned Rosy-Finch","Green-winged Teal","Gadwall","California Gull","Ferruginous Hawk","Vesper Sparrow","Evening Grosbeak","Pine Siskin","Tree Swallow","American Goldfinch","American Crow","Gray Jay","American Kestrel","Cliff Swallow","Ruby-crowned Kinglet","Oregon Junco","Swainson's Thrush","Steller's Jay","White-crowned Sparrow","Broad-tailed Hummingbird","Brown-headed Cowbird","Brown-capped Rosy-Finch","Red-naped Sapsucker","Audubon's Warbler","Purple Martin","Rufous Hummingbird","Gray Catbird","Flammulated Owl","Orange-crowned Warbler","Barn Swallow","Gray-headed Junco","Western Bluebird","Black-billed Magpie","Blue-winged Teal","Ring-billed Gull","American Robin","Clark's Nutcracker","Unidentified Teal","Red-shafted Flicker","American Dipper","MacGillivray's Warbler","Prairie Falcon","Chipping Sparrow","Mountain Chickadee","House Sparrow","Lincoln's Sparrow","Warbling Vireo","Song Sparrow","Loggerhead Shrike","Mourning Dove","Red-eyed Vireo","Hammond's Flycatcher","Yellow Warbler","Green-tailed Towhee","Gambel's White-crowned Sparrow","Western Wood-Pewee","Black-throated Sparrow","Black-chinned Hummingbird","Mountain Bluebird","Myrtle Warbler","Hermit Thrush","American White Pelican","Great Horned Owl","Barn Owl","American Wigeon","Least Sandpiper","Common Grackle","Cinnamon Teal","American Coot","Yellow-headed Blackbird","Dusky Flycatcher","Townsend's Warbler","White-winged Junco","Northern Cardinal","Bald Eagle","Brewer's Blackbird","Lesser Scaup","Field Sparrow","Burrowing Owl","Blackpoll Warbler","Western Flycatcher","Brown Creeper","Mountain White-crowned Sparrow","Virginia's Warbler","Northern Saw-whet Owl","Horned Lark","Sora","Black Rosy-Finch","Violet-green Swallow","Solitary Vireo","Plumbeous Vireo","Swainson's Hawk","Redhead","Mountain Plover","Black-throated Gray Warbler","Northern Parula","Pygmy Nuthatch","Savannah Sparrow","Red-tailed Hawk","Black-crowned Night-Heron","White-breasted Nuthatch","Brewer's Sparrow","Traill's Flycatcher","Downy Woodpecker","Northern Shrike","McCown's Longspur","Say's Phoebe","Brown Thrasher","Red-breasted Nuthatch","House Wren","Western Tanager","Common Yellowthroat","Blue Jay","Juniper Titmouse","Black-headed Grosbeak","Long-billed Dowitcher","Cordilleran Flycatcher","Merlin","Killdeer","Lazuli Bunting","American Tree Sparrow","Western Meadowlark","Western Scrub-Jay","Red Crossbill","Cassin's Vireo","White-faced Ibis","Bushtit","Calliope Hummingbird","Indigo Bunting","Long-eared Owl"];
autocomplete(document.getElementById("myInput"), countries);



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

