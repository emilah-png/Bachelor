function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["Sim2Twin_controlsystem_spd_Discrete:57"] = "Sim2Twin_controlsystem_spd_Discrete:56";
    this.sidParentMap["Sim2Twin_controlsystem_spd_Discrete:62"] = "Sim2Twin_controlsystem_spd_Discrete:56";
    this.sidParentMap["Sim2Twin_controlsystem_spd_Discrete:61"] = "Sim2Twin_controlsystem_spd_Discrete:56";
    this.sidParentMap["Sim2Twin_controlsystem_spd_Discrete:60"] = "Sim2Twin_controlsystem_spd_Discrete:56";
    this.sidParentMap["Sim2Twin_controlsystem_spd_Discrete:58"] = "Sim2Twin_controlsystem_spd_Discrete:56";
    this.sidParentMap["Sim2Twin_controlsystem_spd_Discrete:59"] = "Sim2Twin_controlsystem_spd_Discrete:56";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
