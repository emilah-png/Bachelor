function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/fSlewAngle */
	this.urlHashMap["RedCrane_kinematic_model:981"] = "msg=&block=RedCrane_kinematic_model:981";
	/* <S1>/fMainAngle */
	this.urlHashMap["RedCrane_kinematic_model:986"] = "msg=&block=RedCrane_kinematic_model:986";
	/* <S1>/fKnuckleAngle */
	this.urlHashMap["RedCrane_kinematic_model:987"] = "msg=&block=RedCrane_kinematic_model:987";
	/* <S1>/Constant */
	this.urlHashMap["RedCrane_kinematic_model:978"] = "RedCrane_kinematic_model.st:73";
	/* <S1>/Constant4 */
	this.urlHashMap["RedCrane_kinematic_model:979"] = "RedCrane_kinematic_model.st:120";
	/* <S1>/MATLAB Function */
	this.urlHashMap["RedCrane_kinematic_model:977"] = "RedCrane_kinematic_model.st:66,72,106,116,119,406,412,415";
	/* <S1>/Mux */
	this.urlHashMap["RedCrane_kinematic_model:985"] = "msg=&block=RedCrane_kinematic_model:985";
	/* <S1>/fX */
	this.urlHashMap["RedCrane_kinematic_model:982"] = "msg=&block=RedCrane_kinematic_model:982";
	/* <S1>/fY */
	this.urlHashMap["RedCrane_kinematic_model:983"] = "msg=&block=RedCrane_kinematic_model:983";
	/* <S1>/fZ */
	this.urlHashMap["RedCrane_kinematic_model:984"] = "msg=&block=RedCrane_kinematic_model:984";
	/* <S2>:1 */
	this.urlHashMap["RedCrane_kinematic_model:977:1"] = "RedCrane_kinematic_model.st:78";
	/* <S2>:1:2 */
	this.urlHashMap["RedCrane_kinematic_model:977:1:2"] = "RedCrane_kinematic_model.st:79";
	/* <S2>:1:3 */
	this.urlHashMap["RedCrane_kinematic_model:977:1:3"] = "RedCrane_kinematic_model.st:80";
	/* <S2>:1:5 */
	this.urlHashMap["RedCrane_kinematic_model:977:1:5"] = "RedCrane_kinematic_model.st:407";
	/* <S2>:1:6 */
	this.urlHashMap["RedCrane_kinematic_model:977:1:6"] = "RedCrane_kinematic_model.st:408";
	/* <S2>:1:7 */
	this.urlHashMap["RedCrane_kinematic_model:977:1:7"] = "RedCrane_kinematic_model.st:409";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "RedCrane_kinematic_model"};
	this.sidHashMap["RedCrane_kinematic_model"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/fSlewAngle"] = {sid: "RedCrane_kinematic_model:981"};
	this.sidHashMap["RedCrane_kinematic_model:981"] = {rtwname: "<S1>/fSlewAngle"};
	this.rtwnameHashMap["<S1>/fMainAngle"] = {sid: "RedCrane_kinematic_model:986"};
	this.sidHashMap["RedCrane_kinematic_model:986"] = {rtwname: "<S1>/fMainAngle"};
	this.rtwnameHashMap["<S1>/fKnuckleAngle"] = {sid: "RedCrane_kinematic_model:987"};
	this.sidHashMap["RedCrane_kinematic_model:987"] = {rtwname: "<S1>/fKnuckleAngle"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "RedCrane_kinematic_model:978"};
	this.sidHashMap["RedCrane_kinematic_model:978"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Constant4"] = {sid: "RedCrane_kinematic_model:979"};
	this.sidHashMap["RedCrane_kinematic_model:979"] = {rtwname: "<S1>/Constant4"};
	this.rtwnameHashMap["<S1>/MATLAB Function"] = {sid: "RedCrane_kinematic_model:977"};
	this.sidHashMap["RedCrane_kinematic_model:977"] = {rtwname: "<S1>/MATLAB Function"};
	this.rtwnameHashMap["<S1>/Mux"] = {sid: "RedCrane_kinematic_model:985"};
	this.sidHashMap["RedCrane_kinematic_model:985"] = {rtwname: "<S1>/Mux"};
	this.rtwnameHashMap["<S1>/fX"] = {sid: "RedCrane_kinematic_model:982"};
	this.sidHashMap["RedCrane_kinematic_model:982"] = {rtwname: "<S1>/fX"};
	this.rtwnameHashMap["<S1>/fY"] = {sid: "RedCrane_kinematic_model:983"};
	this.sidHashMap["RedCrane_kinematic_model:983"] = {rtwname: "<S1>/fY"};
	this.rtwnameHashMap["<S1>/fZ"] = {sid: "RedCrane_kinematic_model:984"};
	this.sidHashMap["RedCrane_kinematic_model:984"] = {rtwname: "<S1>/fZ"};
	this.rtwnameHashMap["<S2>:1"] = {sid: "RedCrane_kinematic_model:977:1"};
	this.sidHashMap["RedCrane_kinematic_model:977:1"] = {rtwname: "<S2>:1"};
	this.rtwnameHashMap["<S2>:1:2"] = {sid: "RedCrane_kinematic_model:977:1:2"};
	this.sidHashMap["RedCrane_kinematic_model:977:1:2"] = {rtwname: "<S2>:1:2"};
	this.rtwnameHashMap["<S2>:1:3"] = {sid: "RedCrane_kinematic_model:977:1:3"};
	this.sidHashMap["RedCrane_kinematic_model:977:1:3"] = {rtwname: "<S2>:1:3"};
	this.rtwnameHashMap["<S2>:1:5"] = {sid: "RedCrane_kinematic_model:977:1:5"};
	this.sidHashMap["RedCrane_kinematic_model:977:1:5"] = {rtwname: "<S2>:1:5"};
	this.rtwnameHashMap["<S2>:1:6"] = {sid: "RedCrane_kinematic_model:977:1:6"};
	this.sidHashMap["RedCrane_kinematic_model:977:1:6"] = {rtwname: "<S2>:1:6"};
	this.rtwnameHashMap["<S2>:1:7"] = {sid: "RedCrane_kinematic_model:977:1:7"};
	this.sidHashMap["RedCrane_kinematic_model:977:1:7"] = {rtwname: "<S2>:1:7"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
