function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Discrete-Time
Integrator */
	this.urlHashMap["Sim2Twin_controlsystem_spd_Discrete:61"] = "Sim2Twin_controlsystem_spd_Discrete.st:39,46,56,58,66";
	/* <S1>/Gain */
	this.urlHashMap["Sim2Twin_controlsystem_spd_Discrete:60"] = "Sim2Twin_controlsystem_spd_Discrete.st:44";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Sim2Twin_controlsystem_spd_Discrete"};
	this.sidHashMap["Sim2Twin_controlsystem_spd_Discrete"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/Joystick"] = {sid: "Sim2Twin_controlsystem_spd_Discrete:57"};
	this.sidHashMap["Sim2Twin_controlsystem_spd_Discrete:57"] = {rtwname: "<S1>/Joystick"};
	this.rtwnameHashMap["<S1>/XRealRef"] = {sid: "Sim2Twin_controlsystem_spd_Discrete:62"};
	this.sidHashMap["Sim2Twin_controlsystem_spd_Discrete:62"] = {rtwname: "<S1>/XRealRef"};
	this.rtwnameHashMap["<S1>/Discrete-Time Integrator"] = {sid: "Sim2Twin_controlsystem_spd_Discrete:61"};
	this.sidHashMap["Sim2Twin_controlsystem_spd_Discrete:61"] = {rtwname: "<S1>/Discrete-Time Integrator"};
	this.rtwnameHashMap["<S1>/Gain"] = {sid: "Sim2Twin_controlsystem_spd_Discrete:60"};
	this.sidHashMap["Sim2Twin_controlsystem_spd_Discrete:60"] = {rtwname: "<S1>/Gain"};
	this.rtwnameHashMap["<S1>/fPositionReferance_m"] = {sid: "Sim2Twin_controlsystem_spd_Discrete:58"};
	this.sidHashMap["Sim2Twin_controlsystem_spd_Discrete:58"] = {rtwname: "<S1>/fPositionReferance_m"};
	this.rtwnameHashMap["<S1>/fVelocityReferance_ms"] = {sid: "Sim2Twin_controlsystem_spd_Discrete:59"};
	this.sidHashMap["Sim2Twin_controlsystem_spd_Discrete:59"] = {rtwname: "<S1>/fVelocityReferance_ms"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
