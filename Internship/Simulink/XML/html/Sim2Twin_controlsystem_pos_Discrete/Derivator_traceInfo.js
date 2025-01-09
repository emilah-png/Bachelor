function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/fSignal */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:299"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:299";
	/* <S1>/Discrete Derivative */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:302"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:302";
	/* <S1>/fSignalDerivative */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:301"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:301";
	/* <S2>/U */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:302:1"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:302:1";
	/* <S2>/Data Type
Duplicate */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:302:2"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:302:2";
	/* <S2>/Diff */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:302:3"] = "Sim2Twin_controlsystem_pos_Discrete.st:55,58";
	/* <S2>/TSamp */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:302:4"] = "Sim2Twin_controlsystem_pos_Discrete.st:48,50";
	/* <S2>/UD */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:302:5"] = "Sim2Twin_controlsystem_pos_Discrete.st:39,41,56,62,66,68";
	/* <S2>/Y */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:302:6"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:302:6";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Sim2Twin_controlsystem_pos_Discrete"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/fSignal"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:299"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:299"] = {rtwname: "<S1>/fSignal"};
	this.rtwnameHashMap["<S1>/Discrete Derivative"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:302"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:302"] = {rtwname: "<S1>/Discrete Derivative"};
	this.rtwnameHashMap["<S1>/fSignalDerivative"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:301"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:301"] = {rtwname: "<S1>/fSignalDerivative"};
	this.rtwnameHashMap["<S2>/U"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:302:1"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:302:1"] = {rtwname: "<S2>/U"};
	this.rtwnameHashMap["<S2>/Data Type Duplicate"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:302:2"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:302:2"] = {rtwname: "<S2>/Data Type Duplicate"};
	this.rtwnameHashMap["<S2>/Diff"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:302:3"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:302:3"] = {rtwname: "<S2>/Diff"};
	this.rtwnameHashMap["<S2>/TSamp"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:302:4"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:302:4"] = {rtwname: "<S2>/TSamp"};
	this.rtwnameHashMap["<S2>/UD"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:302:5"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:302:5"] = {rtwname: "<S2>/UD"};
	this.rtwnameHashMap["<S2>/Y"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:302:6"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:302:6"] = {rtwname: "<S2>/Y"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
