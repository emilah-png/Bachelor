function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>:1 */
	this.urlHashMap["RedCrane_kinematic_model:896:1"] = "RedCrane_kinematic_model.st:69";
	/* <S1>:1:7 */
	this.urlHashMap["RedCrane_kinematic_model:896:1:7"] = "RedCrane_kinematic_model.st:70";
	/* <S1>:1:8 */
	this.urlHashMap["RedCrane_kinematic_model:896:1:8"] = "RedCrane_kinematic_model.st:71";
	/* <S1>:1:9 */
	this.urlHashMap["RedCrane_kinematic_model:896:1:9"] = "RedCrane_kinematic_model.st:72";
	/* <S1>:1:10 */
	this.urlHashMap["RedCrane_kinematic_model:896:1:10"] = "RedCrane_kinematic_model.st:73";
	/* <S1>:1:13 */
	this.urlHashMap["RedCrane_kinematic_model:896:1:13"] = "RedCrane_kinematic_model.st:74";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "RedCrane_kinematic_model"};
	this.sidHashMap["RedCrane_kinematic_model"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>:1"] = {sid: "RedCrane_kinematic_model:896:1"};
	this.sidHashMap["RedCrane_kinematic_model:896:1"] = {rtwname: "<S1>:1"};
	this.rtwnameHashMap["<S1>:1:7"] = {sid: "RedCrane_kinematic_model:896:1:7"};
	this.sidHashMap["RedCrane_kinematic_model:896:1:7"] = {rtwname: "<S1>:1:7"};
	this.rtwnameHashMap["<S1>:1:8"] = {sid: "RedCrane_kinematic_model:896:1:8"};
	this.sidHashMap["RedCrane_kinematic_model:896:1:8"] = {rtwname: "<S1>:1:8"};
	this.rtwnameHashMap["<S1>:1:9"] = {sid: "RedCrane_kinematic_model:896:1:9"};
	this.sidHashMap["RedCrane_kinematic_model:896:1:9"] = {rtwname: "<S1>:1:9"};
	this.rtwnameHashMap["<S1>:1:10"] = {sid: "RedCrane_kinematic_model:896:1:10"};
	this.sidHashMap["RedCrane_kinematic_model:896:1:10"] = {rtwname: "<S1>:1:10"};
	this.rtwnameHashMap["<S1>:1:13"] = {sid: "RedCrane_kinematic_model:896:1:13"};
	this.sidHashMap["RedCrane_kinematic_model:896:1:13"] = {rtwname: "<S1>:1:13"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
