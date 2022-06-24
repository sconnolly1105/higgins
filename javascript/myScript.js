
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function processXMLData (strNodeValue) {

	strNodeValue = strNodeValue.replace(/#b#/gi,"<b>");		// replace #b# with <b> globally and case insensitive (/gi)
	strNodeValue = strNodeValue.replace(/#!b#/gi,"</b>");	// and #!b# with </b>
	strNodeValue = strNodeValue.replace(/#u#/gi,"<u>");		// replace #u# with <u> globally and case insensitive (/gi)
	strNodeValue = strNodeValue.replace(/#!u#/gi,"</u>");	// and #!u# with </u>
	var x1=document.getElementById("inner");
	x1.innerHTML = strNodeValue;
	var x2=document.getElementById("outer");
//		x.attr("title",y.nodeValue);
	x2.style.display = "block";
	return false;
}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function readXML (id) {

	return						// not used so return immediately
	
	try {
		xmlDoc=loadXMLDoc("xml\personalInfo1.xml");
	}
	catch(err) {
		alert ("Problem loading higgins.xml");
		alert (err.message);
	}
	try {
		x=xmlDoc.getElementsByTagName(id)[0];					// get the first node of the id that was passed to the function
		y=x.childNodes[0];
		strNodeValue = y.nodeValue
		strNodeValue = strNodeValue.replace(/#b#/gi,"<b>");		// replace #b# with <b> globally and case insensitive (/gi)
		strNodeValue = strNodeValue.replace(/#!b#/gi,"</b>");	// and #!b# with </b>
		strNodeValue = strNodeValue.replace(/#u#/gi,"<u>");		// replace #u# with <u> globally and case insensitive (/gi)
		strNodeValue = strNodeValue.replace(/#!u#/gi,"</u>");	// and #!u# with </u>
		var x1=document.getElementById("inner");
		x1.innerHTML = strNodeValue;
		var x2=document.getElementById("outer");
//		x.attr("title",y.nodeValue);
		x2.style.display = "block";
		return false;
	}
	catch(err) {
		// Tag that we were searching for was not found in the XML file. Inject message into the innerHTML
		var x1=document.getElementById("inner");
		var x2=document.getElementById("outer");
		x1.innerHTML = "No information found for this individual";
		x2.style.display = "block";
		return false;
	}
}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function closeDiv () {
		var x2 = document.getElementById("outer");
		x2.style.display = "none";					// get rid of the popup
//		alert("About to close popup");
		$('#data').jstree("deselect_all");
		return false;
}

