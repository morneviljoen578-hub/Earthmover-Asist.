function searchFault(){

let search=document.getElementById("searchBox").value.toLowerCase();

let result=document.getElementById("result");

if(search.includes("mid 128")){

result.innerHTML="<h3>Fuel System Fault</h3><p>Possible fuel pressure problem. Check filters, lift pump and fuel pressure sensor.</p>";

}

else if(search.includes("overheat")){

result.innerHTML="<h3>Engine Overheating</h3><p>Check coolant level, radiator, fan, thermostat and water pump.</p>";

}

else{

result.innerHTML="<h3>No Results Found</h3><p>This fault is not yet in the database.</p>";

}

}
