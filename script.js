const faults = {
  "MID 128 PID 94 FMI 1": {
    title: "Fuel Pressure Fault",
    machine: "Volvo Engine",
    causes: [
      "Blocked fuel filter",
      "Faulty fuel pressure sensor",
      "Weak lift pump",
      "Air in fuel system"
    ],
    repair: [
      "Replace fuel filters",
      "Check fuel pressure",
      "Inspect fuel lines for leaks",
      "Test fuel pressure sensor"
    ]
  },

  "OVERHEAT": {
    title: "Engine Overheating",
    machine: "All Machines",
    causes: [
      "Low coolant level",
      "Blocked radiator",
      "Faulty thermostat",
      "Water pump failure"
    ],
    repair: [
      "Check coolant level",
      "Clean radiator",
      "Replace thermostat if faulty",
      "Inspect water pump"
    ]
  }
};

function searchFault() {

  let search = document.getElementById("searchBox").value.trim().toUpperCase();

  let result = document.getElementById("result");

  if (faults[search]) {

    let fault = faults[search];

    result.innerHTML = `
      <h2>${fault.title}</h2>
      <p><b>Machine:</b> ${fault.machine}</p>

      <h3>Possible Causes</h3>
      <ul>
        ${fault.causes.map(c => `<li>${c}</li>`).join("")}
      </ul>

      <h3>Recommended Repairs</h3>
      <ol>
        ${fault.repair.map(r => `<li>${r}</li>`).join("")}
      </ol>
    `;

  } else {

    result.innerHTML = `
      <h2>No Results Found</h2>
      <p>This fault has not yet been added to the database.</p>
    `;
  }
}
