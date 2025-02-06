function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/fMainStroke */
	this.urlHashMap["RedCrane_kinematic_model:957"] = "msg=&block=RedCrane_kinematic_model:957";
	/* <S1>/fKnuckleStroke */
	this.urlHashMap["RedCrane_kinematic_model:958"] = "msg=&block=RedCrane_kinematic_model:958";
	/* <S1>/knuckle_stroke_to_angle */
	this.urlHashMap["RedCrane_kinematic_model:747"] = "RedCrane_kinematic_model.st:45,50";
	/* <S1>/main_stroke_to_angle */
	this.urlHashMap["RedCrane_kinematic_model:748"] = "RedCrane_kinematic_model.st:43,48";
	/* <S1>/fMainAngle */
	this.urlHashMap["RedCrane_kinematic_model:959"] = "msg=&block=RedCrane_kinematic_model:959";
	/* <S1>/fKnuckleAngle */
	this.urlHashMap["RedCrane_kinematic_model:960"] = "msg=&block=RedCrane_kinematic_model:960";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "RedCrane_kinematic_model"};
	this.sidHashMap["RedCrane_kinematic_model"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/fMainStroke"] = {sid: "RedCrane_kinematic_model:957"};
	this.sidHashMap["RedCrane_kinematic_model:957"] = {rtwname: "<S1>/fMainStroke"};
	this.rtwnameHashMap["<S1>/fKnuckleStroke"] = {sid: "RedCrane_kinematic_model:958"};
	this.sidHashMap["RedCrane_kinematic_model:958"] = {rtwname: "<S1>/fKnuckleStroke"};
	this.rtwnameHashMap["<S1>/knuckle_stroke_to_angle"] = {sid: "RedCrane_kinematic_model:747"};
	this.sidHashMap["RedCrane_kinematic_model:747"] = {rtwname: "<S1>/knuckle_stroke_to_angle"};
	this.rtwnameHashMap["<S1>/main_stroke_to_angle"] = {sid: "RedCrane_kinematic_model:748"};
	this.sidHashMap["RedCrane_kinematic_model:748"] = {rtwname: "<S1>/main_stroke_to_angle"};
	this.rtwnameHashMap["<S1>/fMainAngle"] = {sid: "RedCrane_kinematic_model:959"};
	this.sidHashMap["RedCrane_kinematic_model:959"] = {rtwname: "<S1>/fMainAngle"};
	this.rtwnameHashMap["<S1>/fKnuckleAngle"] = {sid: "RedCrane_kinematic_model:960"};
	this.sidHashMap["RedCrane_kinematic_model:960"] = {rtwname: "<S1>/fKnuckleAngle"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
