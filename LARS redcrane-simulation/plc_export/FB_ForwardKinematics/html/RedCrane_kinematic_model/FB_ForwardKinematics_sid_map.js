function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["RedCrane_kinematic_model:981"] = "RedCrane_kinematic_model:980";
    this.sidParentMap["RedCrane_kinematic_model:986"] = "RedCrane_kinematic_model:980";
    this.sidParentMap["RedCrane_kinematic_model:987"] = "RedCrane_kinematic_model:980";
    this.sidParentMap["RedCrane_kinematic_model:978"] = "RedCrane_kinematic_model:980";
    this.sidParentMap["RedCrane_kinematic_model:979"] = "RedCrane_kinematic_model:980";
    this.sidParentMap["RedCrane_kinematic_model:977"] = "RedCrane_kinematic_model:980";
    this.sidParentMap["RedCrane_kinematic_model:985"] = "RedCrane_kinematic_model:980";
    this.sidParentMap["RedCrane_kinematic_model:982"] = "RedCrane_kinematic_model:980";
    this.sidParentMap["RedCrane_kinematic_model:983"] = "RedCrane_kinematic_model:980";
    this.sidParentMap["RedCrane_kinematic_model:984"] = "RedCrane_kinematic_model:980";
    this.sidParentMap["RedCrane_kinematic_model:977:1"] = "RedCrane_kinematic_model:977";
    this.sidParentMap["RedCrane_kinematic_model:977:1:2"] = "RedCrane_kinematic_model:977";
    this.sidParentMap["RedCrane_kinematic_model:977:1:3"] = "RedCrane_kinematic_model:977";
    this.sidParentMap["RedCrane_kinematic_model:977:1:5"] = "RedCrane_kinematic_model:977";
    this.sidParentMap["RedCrane_kinematic_model:977:1:6"] = "RedCrane_kinematic_model:977";
    this.sidParentMap["RedCrane_kinematic_model:977:1:7"] = "RedCrane_kinematic_model:977";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
