function normalise(value){
  return value.toLowerCase().replace(/[\-_]/g," ").replace(/\s+/g," ").trim();
}

function searchFault(){
  const input=document.getElementById("search").value.trim();
  const result=document.getElementById("result");

  if(!input){
    result.innerHTML='<div class="card"><h3>Please enter a fault code or search term.</h3></div>';
    return;
  }

  const query=normalise(input);
  const matches=faultDatabase.filter(fault=>{
    const searchable=normalise([
      fault.code,fault.title,fault.system,fault.manufacturer,
      fault.description || "",fault.source || ""
    ].join(" "));
    return searchable.includes(query);
  });

  if(!matches.length){
    result.innerHTML=`<div class="card"><h3>No fault found</h3>
    <p><b>Search:</b> ${escapeHtml(input)}</p>
    <p>This fault is not yet in the Earthmover Assist database.</p></div>`;
    return;
  }

  result.innerHTML=matches.map(renderFault).join("");
}

function renderFault(fault){
  return `<div class="card">
    <span class="badge">${escapeHtml(fault.manufacturer)}</span>
    <h2 class="result-title">${escapeHtml(fault.title)}</h2>
    <p><b>Fault Code:</b> ${escapeHtml(fault.code)}</p>
    <p><b>System:</b> ${escapeHtml(fault.system || "Not specified")}</p>
    ${fault.description ? `<p><b>Description:</b> ${escapeHtml(fault.description)}</p>` : ""}
    <p><b>Source:</b> ${escapeHtml(fault.source || "Database entry")}</p>
    ${fault.checks ? `<h3>Recommended Checks</h3><ol>${fault.checks.map(c=>`<li>${escapeHtml(c)}</li>`).join("")}</ol>` : ""}
  </div>`;
}

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g,ch=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[ch]));
}

document.addEventListener("DOMContentLoaded",()=>{
  const input=document.getElementById("search");
  input.addEventListener("keydown",event=>{
    if(event.key==="Enter") searchFault();
  });
});
