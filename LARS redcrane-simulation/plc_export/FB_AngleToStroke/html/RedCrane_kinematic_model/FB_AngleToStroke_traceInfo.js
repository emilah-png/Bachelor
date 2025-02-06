function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Product */
	this.urlHashMap["RedCrane_kinematic_model:941"] = "RedCrane_kinematic_model.st:61";
	/* <S1>/Product1 */
	this.urlHashMap["RedCrane_kinematic_model:944"] = "RedCrane_kinematic_model.st:82";
	/* <S1>/knuckle_angle_to_stroke1 */
	this.urlHashMap["RedCrane_kinematic_model:945"] = "RedCrane_kinematic_model.st:75,80";
	/* <S1>/knuckle_angle_to_stroke_dot */
	this.urlHashMap["RedCrane_kinematic_model:943"] = "RedCrane_kinematic_model.st:69,74";
	/* <S1>/main_angle_to_stroke1 */
	this.urlHashMap["RedCrane_kinematic_model:946"] = "RedCrane_kinematic_model.st:63,68";
	/* <S1>/main_angle_to_stroke_dot */
	this.urlHashMap["RedCrane_kinematic_model:938"] = "RedCrane_kinematic_model.st:54,59";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "RedCrane_kinematic_model"};
	this.sidHashMap["RedCrane_kinematic_model"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/fMainAngle"] = {sid: "RedCrane_kinematic_model:948"};
	this.sidHashMap["RedCrane_kinematic_model:948"] = {rtwname: "<S1>/fMainAngle"};
	this.rtwnameHashMap["<S1>/fKnuckleAngle"] = {sid: "RedCrane_kinematic_model:950"};
	this.sidHashMap["RedCrane_kinematic_model:950"] = {rtwname: "<S1>/fKnuckleAngle"};
	this.rtwnameHashMap["<S1>/fMainAngleVel"] = {sid: "RedCrane_kinematic_model:949"};
	this.sidHashMap["RedCrane_kinematic_model:949"] = {rtwname: "<S1>/fMainAngleVel"};
	this.rtwnameHashMap["<S1>/fKnuckleAngleVel"] = {sid: "RedCrane_kinematic_model:951"};
	this.sidHashMap["RedCrane_kinematic_model:951"] = {rtwname: "<S1>/fKnuckleAngleVel"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "RedCrane_kinematic_model:941"};
	this.sidHashMap["RedCrane_kinematic_model:941"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Product1"] = {sid: "RedCrane_kinematic_model:944"};
	this.sidHashMap["RedCrane_kinematic_model:944"] = {rtwname: "<S1>/Product1"};
	this.rtwnameHashMap["<S1>/knuckle_angle_to_stroke1"] = {sid: "RedCrane_kinematic_model:945"};
	this.sidHashMap["RedCrane_kinematic_model:945"] = {rtwname: "<S1>/knuckle_angle_to_stroke1"};
	this.rtwnameHashMap["<S1>/knuckle_angle_to_stroke_dot"] = {sid: "RedCrane_kinematic_model:943"};
	this.sidHashMap["RedCrane_kinematic_model:943"] = {rtwname: "<S1>/knuckle_angle_to_stroke_dot"};
	this.rtwnameHashMap["<S1>/main_angle_to_stroke1"] = {sid: "RedCrane_kinematic_model:946"};
	this.sidHashMap["RedCrane_kinematic_model:946"] = {rtwname: "<S1>/main_angle_to_stroke1"};
	this.rtwnameHashMap["<S1>/main_angle_to_stroke_dot"] = {sid: "RedCrane_kinematic_model:938"};
	this.sidHashMap["RedCrane_kinematic_model:938"] = {rtwname: "<S1>/main_angle_to_stroke_dot"};
	this.rtwnameHashMap["<S1>/fMainStroke"] = {sid: "RedCrane_kinematic_model:953"};
	this.sidHashMap["RedCrane_kinematic_model:953"] = {rtwname: "<S1>/fMainStroke"};
	this.rtwnameHashMap["<S1>/fKnuckleStroke"] = {sid: "RedCrane_kinematic_model:955"};
	this.sidHashMap["RedCrane_kinematic_model:955"] = {rtwname: "<S1>/fKnuckleStroke"};
	this.rtwnameHashMap["<S1>/fMainStrokeVel"] = {sid: "RedCrane_kinematic_model:952"};
	this.sidHashMap["RedCrane_kinematic_model:952"] = {rtwname: "<S1>/fMainStrokeVel"};
	this.rtwnameHashMap["<S1>/fKnuckleStrokeVel"] = {sid: "RedCrane_kinematic_model:954"};
	this.sidHashMap["RedCrane_kinematic_model:954"] = {rtwname: "<S1>/fKnuckleStrokeVel"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
