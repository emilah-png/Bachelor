function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["RedCrane_kinematic_model:896:1"] = "RedCrane_kinematic_model:896";
    this.sidParentMap["RedCrane_kinematic_model:896:1:7"] = "RedCrane_kinematic_model:896";
    this.sidParentMap["RedCrane_kinematic_model:896:1:8"] = "RedCrane_kinematic_model:896";
    this.sidParentMap["RedCrane_kinematic_model:896:1:9"] = "RedCrane_kinematic_model:896";
    this.sidParentMap["RedCrane_kinematic_model:896:1:10"] = "RedCrane_kinematic_model:896";
    this.sidParentMap["RedCrane_kinematic_model:896:1:13"] = "RedCrane_kinematic_model:896";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
