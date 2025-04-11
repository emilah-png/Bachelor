function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Discrete-Time
Integrator */
	this.urlHashMap["untitled:1"] = "untitled.st:38,44,49,51,62";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "untitled"};
	this.sidHashMap["untitled"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "untitled:3"};
	this.sidHashMap["untitled:3"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "untitled:4"};
	this.sidHashMap["untitled:4"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/Discrete-Time Integrator"] = {sid: "untitled:1"};
	this.sidHashMap["untitled:1"] = {rtwname: "<S1>/Discrete-Time Integrator"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "untitled:5"};
	this.sidHashMap["untitled:5"] = {rtwname: "<S1>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
