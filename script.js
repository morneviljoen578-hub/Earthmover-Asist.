const faults = {
  "MID 128 PID 94 FMI 1": {
    title: "Fuel Pressure Low",
    machine: "Volvo",
    cause: "Fuel pressure below specification.",
    action: "Check fuel filters, fuel pump, pressure sensor and fuel lines."
  },

  "MID 128 PID 100 FMI 1": {
    title: "Engine Oil Pressure Low",
    machine: "Volvo",
    cause: "Low engine oil pressure detected.",
    action: "Check engine oil level, oil pump, pressure sensor and engine bearings."
  },

  "MID 128 PID 110 FMI 0": {
    title: "Coolant Temperature High",
    machine: "Volvo",
    cause: "Engine overheating.",
    action: "Check coolant level, radiator, fan, thermostat and water pump."
  },

  "MID 144 PSID 96 FMI 1": {
    title: "Hydraulic Oil Temperature High",
    machine: "Volvo",
    cause: "Hydraulic oil overheating.",
    action: "Inspect hydraulic cooler, fan, oil level and filters."
  },

  "MID 136 SID 70 FMI 5": {
    title: "Transmission Solenoid Fault",
    machine: "Volvo",
    cause: "Transmission solenoid electrical fault.",
    action: "Check wiring, connectors and replace faulty solenoid if required."
  }
};

function searchFault() {

    const input = document
        .getElementById("searchInput")
        .value
        .trim()
        .toUpperCase();

    const result = document.getElementById("result");

    if (faults[input]) {

        result.innerHTML = `
        <div style="background:white;color:black;padding:20px;border-radius:10px;text-align:left;">
            <h2>${faults[input].title}</h2>

            <p><strong>Machine:</strong> ${faults[input].machine}</p>

            <p><strong>Fault Code:</strong> ${input}</p>

            <p><strong>Cause:</strong><br>${faults[input].cause}</p>

            <p><strong>Recommended Action:</strong><br>${faults[input].action}</p>

        </div>
        `;

    } else {

        result.innerHTML = `
        <div style="background:white;color:black;padding:20px;border-radius:10px;">
            <h2>No Fault Found</h2>
            <p>This fault code has not yet been added to the database.</p>
        </div>
        `;

    }

}
