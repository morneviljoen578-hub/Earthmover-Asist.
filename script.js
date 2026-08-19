function normalise(value){
  return String(value || "").toLowerCase()
    .replace(/[_-]/g," ")
    .replace(/\s+/g," ")
    .trim();
}

function escapeHtml(value){
  return String(value ?? "").replace(/[&<>"']/g,function(ch){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch];
  });
}

function searchFault(){
  const input=document.getElementById("search").value.trim();
  const result=document.getElementById("result");

  if(!input){
    result.innerHTML='<div class="card"><h3>Please enter a fault code or search term.</h3></div>';
    return;
  }

  if(!Array.isArray(window.faultDatabase)){
    result.innerHTML='<div class="card"><h3>Fault database did not load.</h3><p>Make sure <b>faults.js</b> is in the same folder as index.html.</p></div>';
    return;
  }

  const q=normalise(input);
  const matches=window.faultDatabase.filter(f=>{
    return [f.code,f.title,f.system,f.manufacturer,f.description,f.source]
      .some(value=>normalise(value).includes(q));
  });

  if(!matches.length){
    result.innerHTML='<div class="card"><h3>No Fault Found</h3><p>The search <b>'+
      escapeHtml(input)+'</b> is not in the current database.</p></div>';
    return;
  }

  result.innerHTML=matches.map(f=>`
    <div class="card">
      <span class="badge">${escapeHtml(f.manufacturer)}</span>
      <h2>${escapeHtml(f.title)}</h2>
      <p><b>Fault Code:</b> ${escapeHtml(f.code)}</p>
      <p><b>System:</b> ${escapeHtml(f.system)}</p>
      ${f.description?`<p><b>Description:</b> ${escapeHtml(f.description)}</p>`:""}
      <p><b>Source:</b> ${escapeHtml(f.source)}</p>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded",function(){
  const button=document.getElementById("searchButton");
  const input=document.getElementById("search");

  button.addEventListener("click",searchFault);
  input.addEventListener("keydown",function(e){
    if(e.key==="Enter") searchFault();
  });

  // Useful test: confirms the database is loaded.
  console.log("Earthmover Assist: "+faultDatabase.length+" fault records loaded.");
});
