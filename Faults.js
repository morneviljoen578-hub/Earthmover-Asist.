const manufacturerFaults={
Volvo:{sourceStatus:"manual-needed",faults:[]},
Bell:{sourceStatus:"uploaded-manual",faults:[
{code:"SPN 1850 FMI 31",title:"Engine Overspeed Control",system:"Engine / CAN J1939",source:"BELL Fault_code_List.pdf"},
{code:"SPN 1860 FMI 3",title:"Out of Range - Short High",system:"CCU output circuit",source:"BELL Fault_code_List.pdf"},
{code:"SPN 1860 FMI 4",title:"Out of Range - Short Low",system:"CCU output circuit",source:"BELL Fault_code_List.pdf"},
{code:"SPN 1702 FMI 3",title:"Bin Position Above Normal",system:"Bin position sensor / CCU",source:"BELL Fault_code_List.pdf"},
{code:"SPN 1702 FMI 4",title:"Bin Position Below Normal",system:"Bin position sensor / CCU",source:"BELL Fault_code_List.pdf"}]},
SANY:{sourceStatus:"uploaded-manual",faults:[
{code:"CA559",title:"Common Rail Pressure Too Low",system:"Engine fuel system",description:"Common rail pressure too low.",source:"SANY fault-code document supplied in project"},
{code:"CA449",title:"Common Rail Pressure Too High",system:"Engine fuel system",source:"SANY fault-code document supplied in project"},
{code:"CA451",title:"Common Rail Pressure Sensor Feedback Too High",system:"Engine sensor circuit",source:"SANY fault-code document supplied in project"},
{code:"CA452",title:"Common Rail Pressure Sensor Feedback Too Low",system:"Engine sensor circuit",source:"SANY fault-code document supplied in project"},
{code:"CA234",title:"Engine Overspeed",system:"Engine control",source:"SANY fault-code document supplied in project"},
{code:"CA435",title:"Engine Oil Pressure Switch Failure",system:"Engine lubrication / sensor circuit",source:"SANY fault-code document supplied in project"},
{code:"AA10NX",title:"Air Filter Clogging",system:"Air intake",source:"SANY fault-code document supplied in project"},
{code:"DGH2KB",title:"Hydraulic Oil Temperature Sensor Short Circuit",system:"Hydraulic / electrical",source:"SANY fault-code document supplied in project"}]},
Hitachi:{sourceStatus:"manual-needed",faults:[]},
Caterpillar:{sourceStatus:"uploaded-manual",faults:[
{code:"CAT-D9R-HYD-2800",title:"Power Pack Relief Pressure Specification",system:"Hydraulic power pack",source:"Manual-D9R-RHW-Manual-31-3-14.pdf"}]},
Komatsu:{sourceStatus:"manual-needed",faults:[]}
};
const faultDatabase=Object.entries(manufacturerFaults).flatMap(([manufacturer,data])=>data.faults.map(f=>({...f,manufacturer})));
