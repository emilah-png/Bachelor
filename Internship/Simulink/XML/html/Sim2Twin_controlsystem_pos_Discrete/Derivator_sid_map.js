function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:299"] = "Sim2Twin_controlsystem_pos_Discrete:298";
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:302"] = "Sim2Twin_controlsystem_pos_Discrete:298";
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:301"] = "Sim2Twin_controlsystem_pos_Discrete:298";
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:302:1"] = "Sim2Twin_controlsystem_pos_Discrete:302";
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:302:2"] = "Sim2Twin_controlsystem_pos_Discrete:302";
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:302:3"] = "Sim2Twin_controlsystem_pos_Discrete:302";
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:302:4"] = "Sim2Twin_controlsystem_pos_Discrete:302";
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:302:5"] = "Sim2Twin_controlsystem_pos_Discrete:302";
    this.sidParentMap["Sim2Twin_controlsystem_pos_Discrete:302:6"] = "Sim2Twin_controlsystem_pos_Discrete:302";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
