// Earthmover Assist verified starter database
const manufacturerFaults = {
  Volvo: { faults: [] },

  Bell: { faults: [
    {code:"SPN 1850 FMI 31",title:"Engine Overspeed Control",system:"Engine / CAN J1939",source:"BELL Fault_code_List.pdf"},
    {code:"SPN 1860 FMI 3",title:"Out of Range - Short High",system:"CCU output circuit",source:"BELL Fault_code_List.pdf"},
    {code:"SPN 1860 FMI 4",title:"Out of Range - Short Low",system:"CCU output circuit",source:"BELL Fault_code_List.pdf"},
    {code:"SPN 1702 FMI 3",title:"Bin Position Above Normal",system:"Bin position sensor / CCU",source:"BELL Fault_code_List.pdf"},
    {code:"SPN 1702 FMI 4",title:"Bin Position Below Normal",system:"Bin position sensor / CCU",source:"BELL Fault_code_List.pdf"}
  ]},

  SANY: { faults: [
    {code:"CA559",title:"Common Rail Pressure Too Low",system:"Engine fuel system",description:"Common rail pressure too low.",source:"SANY fault-code document"},
    {code:"CA449",title:"Common Rail Pressure Too High",system:"Engine fuel system",source:"SANY fault-code document"},
    {code:"CA451",title:"Common Rail Pressure Sensor Feedback Too High",system:"Engine sensor circuit",source:"SANY fault-code document"},
    {code:"CA452",title:"Common Rail Pressure Sensor Feedback Too Low",system:"Engine sensor circuit",source:"SANY fault-code document"},
    {code:"CA234",title:"Engine Overspeed",system:"Engine control",source:"SANY fault-code document"},
    {code:"CA435",title:"Engine Oil Pressure Switch Failure",system:"Engine lubrication / sensor circuit",source:"SANY fault-code document"},
    {code:"AA10NX",title:"Air Filter Clogging",system:"Air intake",source:"SANY fault-code document"},
    {code:"DGH2KB",title:"Hydraulic Oil Temperature Sensor Short Circuit",system:"Hydraulic / electrical",source:"SANY fault-code document"}
  ]},

  Hitachi: { faults: [] },

  Caterpillar: { faults: [
    {code:"CAT-D9R-HYD-2800",title:"Power Pack Relief Pressure Specification",system:"Hydraulic power pack",source:"Manual-D9R-RHW-Manual-31-3-14.pdf"}
  ]},

  Komatsu: { faults: [] }
};

const faultDatabase = [];
for (const manufacturer in manufacturerFaults) {
  for (const fault of manufacturerFaults[manufacturer].faults) {
    faultDatabase.push({...fault, manufacturer});
  }
}
