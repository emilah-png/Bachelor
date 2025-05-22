function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/MATLAB Function */
	this.urlHashMap["RedCrane_kinematic_model_joystic:1010"] = "RedCrane_kinematic_model_joystic.st:42,51,57,60";
	/* <S2>:1 */
	this.urlHashMap["RedCrane_kinematic_model_joystic:1010:1"] = "RedCrane_kinematic_model_joystic.st:43";
	/* <S2>:1:3 */
	this.urlHashMap["RedCrane_kinematic_model_joystic:1010:1:3"] = "RedCrane_kinematic_model_joystic.st:44";
	/* <S2>:1:4 */
	this.urlHashMap["RedCrane_kinematic_model_joystic:1010:1:4"] = "RedCrane_kinematic_model_joystic.st:46";
	/* <S2>:1:5 */
	this.urlHashMap["RedCrane_kinematic_model_joystic:1010:1:5"] = "RedCrane_kinematic_model_joystic.st:48";
	/* <S2>:1:7 */
	this.urlHashMap["RedCrane_kinematic_model_joystic:1010:1:7"] = "RedCrane_kinematic_model_joystic.st:52";
	/* <S2>:1:8 */
	this.urlHashMap["RedCrane_kinematic_model_joystic:1010:1:8"] = "RedCrane_kinematic_model_joystic.st:53";
	/* <S2>:1:9 */
	this.urlHashMap["RedCrane_kinematic_model_joystic:1010:1:9"] = "RedCrane_kinematic_model_joystic.st:54";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "RedCrane_kinematic_model_joystic"};
	this.sidHashMap["RedCrane_kinematic_model_joystic"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/fJoyX"] = {sid: "RedCrane_kinematic_model_joystic:1005"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1005"] = {rtwname: "<S1>/fJoyX"};
	this.rtwnameHashMap["<S1>/fJoyY"] = {sid: "RedCrane_kinematic_model_joystic:1006"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1006"] = {rtwname: "<S1>/fJoyY"};
	this.rtwnameHashMap["<S1>/fJoyZ"] = {sid: "RedCrane_kinematic_model_joystic:1007"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1007"] = {rtwname: "<S1>/fJoyZ"};
	this.rtwnameHashMap["<S1>/fCartesianVMax"] = {sid: "RedCrane_kinematic_model_joystic:1008"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1008"] = {rtwname: "<S1>/fCartesianVMax"};
	this.rtwnameHashMap["<S1>/fTs"] = {sid: "RedCrane_kinematic_model_joystic:1009"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1009"] = {rtwname: "<S1>/fTs"};
	this.rtwnameHashMap["<S1>/fXPosFeedBack"] = {sid: "RedCrane_kinematic_model_joystic:1025"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1025"] = {rtwname: "<S1>/fXPosFeedBack"};
	this.rtwnameHashMap["<S1>/fYPosFeedBack"] = {sid: "RedCrane_kinematic_model_joystic:1026"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1026"] = {rtwname: "<S1>/fYPosFeedBack"};
	this.rtwnameHashMap["<S1>/fZPosFeedBack"] = {sid: "RedCrane_kinematic_model_joystic:1027"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1027"] = {rtwname: "<S1>/fZPosFeedBack"};
	this.rtwnameHashMap["<S1>/MATLAB Function"] = {sid: "RedCrane_kinematic_model_joystic:1010"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1010"] = {rtwname: "<S1>/MATLAB Function"};
	this.rtwnameHashMap["<S1>/fXRef"] = {sid: "RedCrane_kinematic_model_joystic:1014"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1014"] = {rtwname: "<S1>/fXRef"};
	this.rtwnameHashMap["<S1>/fYRef"] = {sid: "RedCrane_kinematic_model_joystic:1015"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1015"] = {rtwname: "<S1>/fYRef"};
	this.rtwnameHashMap["<S1>/fZRef"] = {sid: "RedCrane_kinematic_model_joystic:1016"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1016"] = {rtwname: "<S1>/fZRef"};
	this.rtwnameHashMap["<S1>/fXVelRef"] = {sid: "RedCrane_kinematic_model_joystic:1017"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1017"] = {rtwname: "<S1>/fXVelRef"};
	this.rtwnameHashMap["<S1>/fYVelRef"] = {sid: "RedCrane_kinematic_model_joystic:1018"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1018"] = {rtwname: "<S1>/fYVelRef"};
	this.rtwnameHashMap["<S1>/fZVelRef"] = {sid: "RedCrane_kinematic_model_joystic:1019"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1019"] = {rtwname: "<S1>/fZVelRef"};
	this.rtwnameHashMap["<S2>:1"] = {sid: "RedCrane_kinematic_model_joystic:1010:1"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1010:1"] = {rtwname: "<S2>:1"};
	this.rtwnameHashMap["<S2>:1:3"] = {sid: "RedCrane_kinematic_model_joystic:1010:1:3"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1010:1:3"] = {rtwname: "<S2>:1:3"};
	this.rtwnameHashMap["<S2>:1:4"] = {sid: "RedCrane_kinematic_model_joystic:1010:1:4"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1010:1:4"] = {rtwname: "<S2>:1:4"};
	this.rtwnameHashMap["<S2>:1:5"] = {sid: "RedCrane_kinematic_model_joystic:1010:1:5"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1010:1:5"] = {rtwname: "<S2>:1:5"};
	this.rtwnameHashMap["<S2>:1:7"] = {sid: "RedCrane_kinematic_model_joystic:1010:1:7"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1010:1:7"] = {rtwname: "<S2>:1:7"};
	this.rtwnameHashMap["<S2>:1:8"] = {sid: "RedCrane_kinematic_model_joystic:1010:1:8"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1010:1:8"] = {rtwname: "<S2>:1:8"};
	this.rtwnameHashMap["<S2>:1:9"] = {sid: "RedCrane_kinematic_model_joystic:1010:1:9"};
	this.sidHashMap["RedCrane_kinematic_model_joystic:1010:1:9"] = {rtwname: "<S2>:1:9"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
