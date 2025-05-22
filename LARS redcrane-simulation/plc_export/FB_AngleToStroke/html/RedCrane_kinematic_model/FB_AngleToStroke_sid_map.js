function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["RedCrane_kinematic_model:948"] = "RedCrane_kinematic_model:947";
    this.sidParentMap["RedCrane_kinematic_model:950"] = "RedCrane_kinematic_model:947";
    this.sidParentMap["RedCrane_kinematic_model:949"] = "RedCrane_kinematic_model:947";
    this.sidParentMap["RedCrane_kinematic_model:951"] = "RedCrane_kinematic_model:947";
    this.sidParentMap["RedCrane_kinematic_model:941"] = "RedCrane_kinematic_model:947";
    this.sidParentMap["RedCrane_kinematic_model:944"] = "RedCrane_kinematic_model:947";
    this.sidParentMap["RedCrane_kinematic_model:945"] = "RedCrane_kinematic_model:947";
    this.sidParentMap["RedCrane_kinematic_model:943"] = "RedCrane_kinematic_model:947";
    this.sidParentMap["RedCrane_kinematic_model:946"] = "RedCrane_kinematic_model:947";
    this.sidParentMap["RedCrane_kinematic_model:938"] = "RedCrane_kinematic_model:947";
    this.sidParentMap["RedCrane_kinematic_model:953"] = "RedCrane_kinematic_model:947";
    this.sidParentMap["RedCrane_kinematic_model:955"] = "RedCrane_kinematic_model:947";
    this.sidParentMap["RedCrane_kinematic_model:952"] = "RedCrane_kinematic_model:947";
    this.sidParentMap["RedCrane_kinematic_model:954"] = "RedCrane_kinematic_model:947";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
