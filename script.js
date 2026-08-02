let faultDatabase = {};

fetch("faults.json")
  .then(response => response.json())
  .then(data => {
    faultDatabase = data;
  })
  .catch(error => {
    console.error("Failed to load faults.json:", error);
  });

function searchFault() {

  const input = document.getElementById("search").value.trim().toUpperCase();
  const result = document.getElementById("result");

  if (input === "") {
    result.innerHTML = "<div class='card'><h3>Please enter a fault code.</h3></div>";
    return;
  }

  if (faultDatabase[input]) {

    const fault = faultDatabase[input];

    result.innerHTML = `
      <div class="card">
        <h2>${fault.title}</h2>

        <p><strong>Machine:</strong> ${fault.machine}</p>

        <p><strong>Fault Code:</strong> ${input}</p>

        <p><strong>Description:</strong> ${fault.description}</p>

        <h3>Possible Causes</h3>

        <ul>
          ${fault.possible_causes.map(c => `<li>${c}</li>`).join("")}
        </ul>

        <h3>Recommended Checks</h3>

        <ol>
          ${fault.recommended_checks.map(c => `<li>${c}</li>`).join("")}
        </ol>

      </div>
    `;

  } else {

    result.innerHTML = `
      <div class="card">
        <h2>No Fault Found</h2>
        <p>The fault code <strong>${input}</strong> is not in the database yet.</p>
      </div>
    `;

  }

}
