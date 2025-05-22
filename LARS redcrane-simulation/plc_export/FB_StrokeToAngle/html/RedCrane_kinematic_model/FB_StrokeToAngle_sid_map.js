function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["RedCrane_kinematic_model:957"] = "RedCrane_kinematic_model:956";
    this.sidParentMap["RedCrane_kinematic_model:958"] = "RedCrane_kinematic_model:956";
    this.sidParentMap["RedCrane_kinematic_model:747"] = "RedCrane_kinematic_model:956";
    this.sidParentMap["RedCrane_kinematic_model:748"] = "RedCrane_kinematic_model:956";
    this.sidParentMap["RedCrane_kinematic_model:959"] = "RedCrane_kinematic_model:956";
    this.sidParentMap["RedCrane_kinematic_model:960"] = "RedCrane_kinematic_model:956";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
