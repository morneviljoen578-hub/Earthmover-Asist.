const faultDatabase = {
  "MID 128 PID 94 FMI 1": {
    title: "Fuel Pressure Low",
    machine: "Volvo A40F / A40G",
    description: "Fuel pressure below specification.",
    possible_causes: [
      "Blocked fuel filter",
      "Weak lift pump",
      "Air in fuel system",
      "Faulty fuel pressure sensor"
    ],
    recommended_checks: [
      "Replace fuel filters",
      "Check fuel pressure",
      "Inspect fuel lines",
      "Test fuel pressure sensor"
    ]
  },

  "MID 128 PID 100 FMI 1": {
    title: "Engine Oil Pressure Low",
    machine: "Volvo A40F / A40G",
    description: "Engine oil pressure below specification.",
    possible_causes: [
      "Low oil level",
      "Faulty oil pump",
      "Pressure sensor fault"
    ],
    recommended_checks: [
      "Check oil level",
      "Inspect oil pump",
      "Test oil pressure sensor"
    ]
  }
};

function searchFault() {

    const input = document.getElementById("search").value.trim().toUpperCase();

    const result = document.getElementById("result");

    if (faultDatabase[input]) {

        const fault = faultDatabase[input];

        result.innerHTML = `
            <div class="card">
                <h2>${fault.title}</h2>

                <p><b>Machine:</b> ${fault.machine}</p>

                <p><b>Fault Code:</b> ${input}</p>

                <p><b>Description:</b> ${fault.description}</p>

                <h3>Possible Causes</h3>

                <ul>
                    ${fault.possible_causes.map(c=>`<li>${c}</li>`).join("")}
                </ul>

                <h3>Recommended Checks</h3>

                <ol>
                    ${fault.recommended_checks.map(c=>`<li>${c}</li>`).join("")}
                </ol>

            </div>
        `;

    } else {

        result.innerHTML = `
        <div class="card">
            <h2>No Fault Found</h2>
            <p>This fault code is not yet in the Earthmover Assist database.</p>
        </div>
        `;
    }
}
