function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["RedCrane_kinematic_model_joystic:1005"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1006"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1007"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1008"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1009"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1025"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1026"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1027"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1010"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1014"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1015"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1016"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1017"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1018"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1019"] = "RedCrane_kinematic_model_joystic:1004";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1010:1"] = "RedCrane_kinematic_model_joystic:1010";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1010:1:3"] = "RedCrane_kinematic_model_joystic:1010";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1010:1:4"] = "RedCrane_kinematic_model_joystic:1010";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1010:1:5"] = "RedCrane_kinematic_model_joystic:1010";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1010:1:7"] = "RedCrane_kinematic_model_joystic:1010";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1010:1:8"] = "RedCrane_kinematic_model_joystic:1010";
    this.sidParentMap["RedCrane_kinematic_model_joystic:1010:1:9"] = "RedCrane_kinematic_model_joystic:1010";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
