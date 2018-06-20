<cfif CGI.SERVER_PORT NEQ "443">
<cflocation
url="https://#cgi.server_name##cgi.script_name#?#cgi.query_string#"
addtoken="no">
</cfif>

<cfquery name="selcountry" DATASOURCE="#pgbblsource#">
select distinct t.country_code, t.country_name,
case t.country_code when 'US' then '1' when 'CA' then '2' when 'MX' then '3' else t.country_name end ord
from  location t
where t.state_code='00'
union
select null, ' Choose One', '0'  
order by 3,2
</cfquery>

<cfquery name="selspecies" DATASOURCE="#pgbblsource#">
select species_id, t.species_name from  species t
where species_id not in ('1325','1327','1337')
union
select null, ' Choose One'  
order by 2
</cfquery>

<cfset this_year = #year(now())#>
<cfset prev_year = #this_year#-1>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"><!-- InstanceBegin template="/Templates/main.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-106665870-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-106665870-1');
</script>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="Bird Banding Laboratories Main Web Page" content="Reporting Encounter of Marked Bird with Unknown Metal Federal Band: USGS Patuxent Wildlife Research Center, Providing numbered leg bands to bird banders and managing huge databases of bandings and recoveries essential for many migratory bird management and research applications (in partnership with the Canadian Wildlife Service) Bird banding is an universal and indispensable technique for studying the movement, survival and behavior of birds. The North American Bird Banding Program is jointly administered by the United States Department of the Interior and the Canadian Wildlife Service.">
<meta name="keywords" content="science,Bird Banding Laboratory,BBL,report bird band,North American Bird Banding Program,banding, recoveries,migratory bird management,research,movement,survival,behavior,birds." />

<link href="/BBL/stylesheets/common.css" rel="stylesheet" type="text/css" media="screen" />
<link href="/BBL/stylesheets/custom.css" rel="stylesheet" type="text/css" media="screen" />
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
   <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
  
  <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TKQR8KP');</script>
<!-- End Google Tag Manager -->
<!--
<link rel="stylesheet" href="/BBL/bbl_util/smartmenus-1.1.0/css/sm-core-css.css" type="text/css" />
<link rel="stylesheet" href="/BBL/bbl_util/smartmenus-1.1.0/css/sm-blue/sm-blue.css" type="text/css" />-->
<link href="/BBL/bbl_util/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
<link href="/BBL/bbl_util/css/bootstrap-grid.css" rel="stylesheet" type="text/css" />
<link href="/BBL/bbl_util/jQueryBootstrapSortable/Contents/bootstrap-sortable.css" rel="stylesheet" type="text/css">

<script src="/BBL/bbl_util/JQuery3/jquery-3.1.0.min.js"></script>
<script src="/BBL/bbl_util/smartmenus-1.1.0/jquery.smartmenus.js"></script>
<script src="/BBL/bbl_util/bootstrap/js/bootstrap.js"></script>
<script src="/BBL/bbl_util/jQueryBootstrapSortable/Scripts/bootstrap-sortable.js"></script>

<link href="/BBL/bbl_util/jquery-confirm-v3.3.0/jquery-confirm-master/dist/jquery-confirm.min.css" rel="stylesheet" type="text/css">
<script src="/BBL/bbl_util/jquery-confirm-v3.3.0/jquery-confirm-master/dist/jquery-confirm.min.js"></script>

<title>Bird Banding Laboratory</title>
 
<!--<link href="/BBL/css/dropDown.css" rel="stylesheet" type="text/css" />-->
<!--<link href="/BBL/css/twoColLiqLtHdr.css" rel="stylesheet" type="text/css" />-->
 
<!-- InstanceBeginEditable name="head" -->

 
<script language="javascript">

		
 function getStates(v){
	if (!(v=='US' || v=='CA')){
		document.getElementById("p_state").value="";
		document.getElementById("p_state").disabled=true;
	} else {
	 $.ajax({  
        url: '/bbl/Bander_portal/login/getstates.php?p_cntry='+v, // the file to call
        success: function(response) { // on success..
		  if (response==""){
			$('#state_div').html('<input type="hidden" name="p_state" id="p_state" value="" />');  
		  } else {
            $('#state_div').html(response); // update the DIV
			/*if (!(v=='US' || v=='CA')){
				document.getElementById("p_state").disabled=true;
			}*/
		  }
			 
        },
		error: function (xhr, desc, err)
        {
            console.log("error");
			//$('#state_div').html(err);

        }
    }); 
	}
  }

		
function getCounts()
		{
			var myspecies = document.getElementById("p_species") ;
			if ( myspecies.value=='')
			{
			  alert('Species is required. Please select the species.');
			  myspecies.focus();
			  return false;
			}
			var mycountry=document.getElementById("p_country").value;
			var mystate=document.getElementById("p_state").value;
			var yearfrom=document.getElementById("p_year_from").value;
			var yearto=document.getElementById("p_year_to").value;
			
			//DWREngine._execute (_cfscriptBBLZipLocation, null, "getCounts_f", myspecies,mycountry,mystate,yearF,yeart, getCountsResult);
			 
			$.ajax({ 
			    type:"GET", 
				url: "/BBL/Bander_Portal/login/get_smry_counts.php",
				data: "species_id="+myspecies.value+"&country_id="+mycountry+"&state_id="+mystate+"&year_from="+yearfrom+"&year_to="+yearto,
				//data: JSON.stringify({ species_id : myspecies.value , country_id : mycountry , state_id : mystate , year_from : yearfrom, year_to : yearto }),  
				success: function(response){ // on success..
				    //getCountsResult (response);
					$('#result_div').html(response);  
				 },
				error: function (xhr, desc, err)
				{
					$('#result_div').html(err);
		
				}
			});	
					
		}
		
		
</script>
<!-- InstanceEndEditable -->

<style type="text/css">

.alert {
    font-size: 1.3em;
    padding: 1em;
    text-align: center;
    width: auto;
    word-wrap: normal;
}

.main-nav {
  background: #3092c0;
  background-image: -webkit-gradient(linear, to bottom, to top, color-stop(0%, #3298c8), color-stop(100%, #2e8cb8));
  background-image: -webkit-linear-gradient(to bottom, #3298c8, #2e8cb8);
  background-image: -moz-linear-gradient(to bottom, #3298c8, #2e8cb8);
  background-image: -o-linear-gradient(to bottom, #3298c8, #2e8cb8);
  background-image: linear-gradient(to bottom, #3298c8, #2e8cb8);
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.main-nav:after {
  clear: both;
  content: "\00a0";
  display: block;
  height: 0;
  font: 0px/0 serif;
  overflow: hidden;
}

.nav-brand {
  float: left;
  margin: 0;
}

.nav-brand a {
  display: block;
  padding: 10px 10px 10px 20px;
  color: #fff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 22px;
  font-weight: normal;
  line-height: 29px;
  text-decoration: none;
}

#main-menu {
  clear: both;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

@media (min-width: 768px) {
  #main-menu {
    float: right;
    clear: none;
  }
}


/* Mobile menu top separator */

#main-menu:before {
  content: '';
  display: block;
  height: 1px;
  font: 1px/1px sans-serif;
  overflow: hidden;
  background: #2e8cb8;
}

@media (min-width: 768px) {
  #main-menu:before {
    display: none;
  }
}


/* Mobile menu toggle button */

.main-menu-btn {
  float: right;
  margin: 10px;
  position: relative;
  display: inline-block;
  width: 29px;
  height: 29px;
  text-indent: 29px;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}


/* hamburger icon */

.main-menu-btn-icon,
.main-menu-btn-icon:before,
.main-menu-btn-icon:after {
  position: absolute;
  top: 50%;
  left: 2px;
  height: 2px;
  width: 24px;
  background: #fff;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.main-menu-btn-icon:before {
  content: '';
  top: -7px;
  left: 0;
}

.main-menu-btn-icon:after {
  content: '';
  top: 7px;
  left: 0;
}


/* x icon */

#main-menu-state:checked ~ .main-menu-btn .main-menu-btn-icon {
  height: 0;
  background: transparent;
}

#main-menu-state:checked ~ .main-menu-btn .main-menu-btn-icon:before {
  top: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#main-menu-state:checked ~ .main-menu-btn .main-menu-btn-icon:after {
  top: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
#ft-menu-state:checked ~ .main-menu-btn .main-menu-btn-icon {
  height: 0;
  background: transparent;
}

#ft-menu-state:checked ~ .main-menu-btn .main-menu-btn-icon:before {
  top: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#ft-menu-state:checked ~ .main-menu-btn .main-menu-btn-icon:after {
  top: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}



/* hide menu state checkbox (keep it visible to screen readers) */

#main-menu-state, #ft-menu-state {
  position: absolute;
  width: 1px;

  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}


/* hide the menu in mobile view */

#main-menu-state:not(:checked) ~ #main-menu {
  display: none;
}

#main-menu-state:checked ~ #main-menu {
  display: block;
}

#ft-menu-state:not(:checked) ~ #ft-menu {
  display: none;
}

#ft-menu-state:checked ~ #ft-menu {
  display: block;
}


@media (min-width: 768px) {
  /* hide the button in desktop view */
  .main-menu-btn {
    position: absolute;
    top: -99999px;
  }

  /* always show the menu in desktop view */
  #main-menu-state:not(:checked) ~ #main-menu {
    display: block;
  }
  #ft-menu-state:not(:checked) ~ #ft-menu {
    display: block;
  }
}


/* IGNORE: Unrelated generic demo styles */

body {
  margin: 8px;
  background: #fff;
  color: black; 
  font: 16px/1.5em 'Helvetica Neue', Helvetica, Arial, sans-serif;
  
}

#bckgrnd {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/BBL/images/2000px-north_america_blanksvg2.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100%;
    opacity: 0.1;
	z-index: -1;
	backface-visibility:hidden;
}

.demo-text {
  margin: 3em 22px;
}

.demo-text p {
  margin-bottom: 1em;
}

.demo-text a {
  color: #999;
}

.footer {
  bottom: 0px;
  left: 0;
  position: relative;
  right: 0;
  font-size: small;
}

.hidden{display:none}

@media (max-width: 400px) {
   
  #Insert_logo {
    height: 30px;
	width:auto;
  } 
  .footer {
  bottom: -50px;
  left: 0;
  position: relative;
  right: 0;
  font-size:xx-small;
  }
  #result_div{
	  width: 80%;
  }
   
   #wlcm_div, #wlcm_div a{
	   color: white;
	   font-size:small;
	   
   }
   body, h1, h2, h3, h4 {
	   font-size:smaller;
  
}

.modal {
	max-width:300px;;
	max-height:100%;
	width:auto;
	position:absolute;	
}
   
} 
@media (min-width: 401px) {
   
  #Insert_logo {
    display: block;
	height:50px;
	width:auto;
  }
   #wlcm_div, #wlcm_div a{
	   color: white;
	   font-size:large;
	   
   }

}

#mainform input, #mainform select, #updform input, #updform select{
	height: 25px;
	width:auto;
}
#maintbl tbody{
	background:#FFF;
	
}

#maintbl thead, #maintbl tfoot,#maintbl2 thead, #maintbl2 tfoot{
	background:#FFF;
	background-color: #3092c0;
	color:#FFF;

}

thead, tfoot{
	background:#FFF;
	background-color: #3092c0;
	color:#FFF;
}

/* Sortable tables */
table.sortable thead {
    background-color: #3092c0;
    cursor: pointer;
	color: white;
}

table.sortable>thead th:hover:not([data-defaultsort=disabled]) {
    background: #336699;
}
 
label{
	font-weight:bold;
	
}
input[type=checkbox] {
  -ms-transform: scale(1.5); 
  -moz-transform: scale(1.5); 
  -webkit-transform: scale(1.5); 
  -o-transform: scale(1.5); 
  transform: scale(1.5);
  }
 
.form-check-label {
	background-color:#F0F0F0;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
 
</style>

<script language="javascript">
window.alert = function(message, title) {
    if($("#bootstrap-alert-box-modal").length == 0) {
        $("body").append('<div id="bootstrap-alert-box-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="z-index:99999; max-width: 90%;">\
            <div class="modal-dialog" role="document">\
                <div class="modal-content">\
                    <div class="modal-header" style="min-height:40px;">\
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                        <h4 class="modal-title"></h4>\
                    </div>\
                    <div class="modal-body"><p align="center"></p></div>\
                    <div class="modal-footer">\
                        <a href="#" data-dismiss="modal" class="btn btn-default">Close</a>\
                    </div>\
                </div>\
            </div>\
        </div>');
    }
    $("#bootstrap-alert-box-modal .modal-header h4").text(title || "");
    $("#bootstrap-alert-box-modal .modal-body p").text(message || "");

    $("#bootstrap-alert-box-modal").modal('show');
};

window.confirm = function(message, title, yes_label, callback) {
    $("#bootstrap-confirm-box-modal").data('confirm-yes', false);
    if($("#bootstrap-confirm-box-modal").length == 0) {
        $("body").append('<div id="bootstrap-confirm-box-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="z-index:99999; max-width: 90%">\
            <div class="modal-dialog" role="document">\
                <div class="modal-content">\
                    <div class="modal-header" style="min-height:40px;">\
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                        <h4 class="modal-title"></h4>\
                    </div>\
                    <div class="modal-body"><p align="center"></p></div>\
                    <div class="modal-footer">\
                        <a href="#" data-dismiss="modal" class="btn btn-default">Cancel</a>\
                        <a href="#" class="btn btn-primary">' + (yes_label || 'OK') + '</a>\
                    </div>\
                </div>\
            </div>\
        </div>');
        $("#bootstrap-confirm-box-modal .modal-footer .btn-primary").on('click', function () {
            $("#bootstrap-confirm-box-modal").data('confirm-yes', true);
            $("#bootstrap-confirm-box-modal").modal('hide');
            return false;
        });
        $("#bootstrap-confirm-box-modal").on('hide.bs.modal', function () {
            if(callback) callback($("#bootstrap-confirm-box-modal").data('confirm-yes'));
        });
    }
 
    $("#bootstrap-confirm-box-modal .modal-header h4").text(title || "");
    $("#bootstrap-confirm-box-modal .modal-body p").text(message || "");
	
	$("#bootstrap-confirm-box-modal").modal('show');
};
</script>

</head>
                           
<body>
<a name="pagetop"></a> 
<!-- BEGIN USGS Applications Header Template -->
<header id="navbar" class="header-nav"  role="banner">
  <div class="tmp-container">
      <!-- primary navigation bar -->
  		<!-- search bar-->
      <div class="header-search">
       <a class="logo-header" href="https://www.usgs.gov/" title="Home">
          <img src="/BBL/images/logo.png" alt="Home" class="img" border="0" />
        </a>
        <!--<form action="https://www.usgs.gov/science-explorer-results" method="GET" id="search-box">
         <div class="fa-wrapper"><label for="se_search" class="only">Search</label>
          <input id="se_search" type="search" name="es" placeholder="Search">
          <button class="fa fa-search" type="submit">
            <span class="only">Search</span>
			 </button></div>
        </form>-->
        <form action="https://search.usa.gov/search" method="GET" id="search-box">
        <input id="affiliate" name="affiliate" type="hidden" value="usgs" />
        <input type="hidden" name="sitelimit" id="sitelimit" value="www.pwrc.usgs.gov/bbl" />

         <div class="fa-wrapper"><label for="se_search" class="only">Search</label>
          <input id="se_search" type="search" name="query" placeholder="Search">
          <button class="fa fa-search" type="submit">
            <span class="only">Search</span>
			 </button></div>
        </form>
      </div>
      <!-- end search bar-->
	</div> 
	<!-- end header-container-->
</header>
<!-- END USGS Applications Header Template -->
                     
<img id="bckgrnd" />
<div class="conteiner-fluid">
  
  
<!--</div>-->
   <!-- <div class="clearfloat">
           
    <div class="banner" id="banner2"></div>
  </div>
    <div class="navMenu"></div>-->
    
  
<!-- InstanceBeginEditable name="EditRegion1" -->
  <div class="conteiner-fluid" id="E1">
 <h2>Summaries of Banding and Encounter Data</h2>
 <ul>
 <li>Use this form to retrieve total numbers of birds banded and encountered by species, country, year, and state/province.</li>
 <li>Certain records are not included in these totals due to the fact that they contain inexact data. Examples include unknown encounter dates and reports of bands found or purchased.</li>
 <li>Encounter counts listed by state/province are those that were encountered within the state/province in the designated year regardless of where or when they were banded.</li>
 <li>For countries other than United States and Canada, data are summarized only at the country level; states or provinces are not selectable.</li>
 <li>Because bands are occasionally replaced on birds, the counts of banded birds may be slightly inflated by birds who have worn more than one band.</li>
 <li>There may be a slight delay in retrieving the data.</li>
 <li>The data on this page are updated every Monday.</li>
 </ul>
 <cfset csrftoken= CSRFGenerateToken()/>
 <cfform method="POST" name="mainform" action=""  onsubmit="return false">
<cfinput name="csrftoken" type="hidden" value="#csrftoken#">
<table class="table-sm">
	<tr>
		<td align="right">Species (required):<br /></td>
		<td>
				<cfselect name="p_species" id="p_species" 
		               	      query="selspecies"
			 			value="species_id"
						display="species_name"
			 			required="yes" message="Species selection is required. Please, select the species." >			    </cfselect>		</td>
	</tr>
    <tr>
	    <td width="10%" align="right">Country:</td>
		<td width="90%">
			<cfselect name="p_country" id="p_country" onChange="getStates(this.value);"
			query="selcountry"
			value="country_code"
			display="Country_name" >			</cfselect>	    </td>
	 </tr>
	 <tr>
		<td align="right">State/Province:</td>
	   	<td><div id="state_div">
			 <cfselect name="p_state" id="p_state" >
			 <option value="">--</option>
			 </cfselect></div>		</td>
     </tr>
	 <tr>
		 <td align="right" valign="middle">Year From:</td>
	   	   <td nowrap="nowrap" valign="middle">
		      <cfselect name="p_year_from" id="p_year_from" >
							<option value="1960" selected="selected">1960</option>
							<cfloop index="year" from = "1961" to ="#this_year#" step="1">
								<option value="<cfoutput>#year#</cfoutput>">
								<cfoutput>#year#</cfoutput></option>
							</cfloop>
			 </cfselect>
							 &nbsp;&nbsp;To:
							<cfselect name="p_year_to" id="p_year_to" >
							<cfoutput><option value="#this_year#" selected="selected">#this_year#</option></cfoutput>
							<cfloop index="year" from = "#prev_year#" to ="1960" step="-1">
								<option value="<cfoutput>#year#</cfoutput>">
								<cfoutput>#year#</cfoutput></option>
							</cfloop>
							</cfselect>		</td>		
	 </tr>
    </table>
  <p>
  <input type="button" class="btn btn-primary" value="Get Counts" onclick="getCounts();"/>
  <input type="reset" class="btn btn-default" />
  <div id="result_div">  </div>
</cfform>
</div>
<!-- InstanceEndEditable -->
 
  <!-- BEGIN USGS Footer Template -->

<footer class="footer">
	<div class="tmp-container">
		<!-- .footer-wrap -->
			<!-- .footer-doi -->
			<div class="footer-doi">
				<!-- footer nav links -->
				<ul class="menu nav">
					<li class="first leaf menu-links menu-level-1"><a href="https://www.doi.gov/privacy">DOI Privacy Policy</a></li>
					<li class="leaf menu-links menu-level-1"><a href="https://www.usgs.gov/laws/policies_notices.html">Legal</a></li>
					<li class="leaf menu-links menu-level-1"><a href="https://www2.usgs.gov/laws/accessibility.html">Accessibility</a></li>
					<li class="leaf menu-links menu-level-1"><a href="https://www.usgs.gov/sitemap.html">Site Map</a></li>
					<li class="last leaf menu-links menu-level-1"><a href="https://answers.usgs.gov/">Contact USGS</a></li>
				</ul>
				<!--/ footer nav links -->      
			</div>
			<!-- /.footer-doi -->

			<hr>

		<!-- .footer-utl-links -->
		<div class="footer-doi">
			<ul class="menu nav">
				<li class="first leaf menu-links menu-level-1"><a href="https://www.doi.gov/">U.S. Department of the Interior</a></li>
				<li class="leaf menu-links menu-level-1"><a href="https://www.doioig.gov/">DOI Inspector General</a></li>
				<li class="leaf menu-links menu-level-1"><a href="https://www.whitehouse.gov/">White House</a></li>
				<li class="leaf menu-links menu-level-1"><a href="https://www.whitehouse.gov/omb/e-gov/">E-gov</a></li>
				<li class="leaf menu-links menu-level-1"><a href="https://www.whitehouse.gov/open">Open Government</a></li>
				<li class="leaf menu-links menu-level-1"><a href="https://www.doi.gov/pmb/eeo/no-fear-act">No Fear Act</a></li>
				<li class="last leaf menu-links menu-level-1"><a href="https://www2.usgs.gov/foia">FOIA</a></li>
			</ul>
			</div>			
		<!-- /.footer-utl-links -->
		<!-- .footer-social-links -->
		<div class="footer-social-links">
			<ul class="social">
				<li class="follow">Follow</li>
				<li class="twitter">
					<a href="https://twitter.com/usgs" target="_blank">
						<i class="fa fa-twitter-square"><span class="only">Twitter</span></i>
					</a>
				</li>
				<li class="facebook">
					<a href="https://facebook.com/usgeologicalsurvey" target="_blank">
						<i class="fa fa-facebook-square"><span class="only">Facebook</span></i>
					</a>
				</li>
				<li class="googleplus">
					<a href="https://plus.google.com/112624925658443863798/posts" target="_blank">
						<i class="fa fa-google-plus-square"><span class="only">Google+</span></i>
					</a>
				</li>
				<li class="github">
					<a href="https://github.com/usgs" target="_blank">
						<i class="fa fa-github"><span class="only">GitHub</span></i>
					</a>
				</li>
				<li class="flickr">
					<a href="https://flickr.com/usgeologicalsurvey" target="_blank">
						<i class="fa fa-flickr"><span class="only">Flickr</span></i>
					</a>
				</li>
				<li class="youtube">
					<a href="http://youtube.com/usgs" target="_blank">
						<i class="fa fa-youtube-play"><span class="only">YouTube</span></i>
					</a>
				</li>
				<li class="instagram">
					<a href="https://instagram.com/usgs" target="_blank">
						<i class="fa fa-instagram"><span class="only">Instagram</span></i>
					</a>
				</li>
			</ul>
		</div>
		<!-- /.footer-social-links -->
	</div>
		<!-- /.footer-wrap -->	
</footer>
<!-- END USGS Footer Template- -->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKQR8KP"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
  <!-- end .container -->
  </div>
<script type="text/javascript">
// SmartMenus init
$(function() {
		$('#main-menu').smartmenus({
			subMenusSubOffsetX: 1,
			subMenusSubOffsetY: -8,
			markCurrentItem: true,
			markCurrentTree: true,
			hideOnClick: false
		});
	});

$(function() {
		$('#ft-menu').smartmenus();
	});
		
$(function() {
  var $mainMenuState = $('#main-menu-state');
  if ($mainMenuState.length) {
    // animate mobile menu
    $mainMenuState.change(function(e) {
      var $menu = $('#main-menu');
      if (this.checked) {
        $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
      } else {
        $menu.show().slideUp(250, function() { $menu.css('display', ''); });
      }
    });
    // hide mobile menu beforeunload
    $(window).on('beforeunload unload', function() {
      if ($mainMenuState[0].checked) {
        $mainMenuState[0].click();
      }
    });
  }
});

$(function() {
  var $mainMenuState = $('#ft-menu-state');
  if ($mainMenuState.length) {
    // animate mobile menu
    $mainMenuState.change(function(e) {
      var $menu = $('#ft-menu');
      if (this.checked) {
        $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
      } else {
        $menu.show().slideUp(250, function() { $menu.css('display', ''); });
      }
    });
    // hide mobile menu beforeunload
    $(window).on('beforeunload unload', function() {
      if ($mainMenuState[0].checked) {
        $mainMenuState[0].click();
      }
    });
  }
});

var viewportWidth = window.innerWidth-20;
var viewportHeight = window.innerHeight-20;
if (viewportWidth > 1000) viewportWidth = 1000;
if (viewportHeight > 500) viewportHeight = 500;

$('.modal').on('show', function(e) {
    var modal = $(this);
    modal.css('margin-top', (modal.outerHeight() / 2) * -1)
         .css('margin-left', (modal.outerWidth() / 2) * -1)
		 .css('height',viewportHeight)
		 .css('width',viewportWidth)
		 ;
    return this;
});


</script>
</body>
<!-- InstanceEnd --></html>
  