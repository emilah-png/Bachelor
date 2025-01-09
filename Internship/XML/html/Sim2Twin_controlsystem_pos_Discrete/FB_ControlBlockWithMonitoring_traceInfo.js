function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/X_real */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:4"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:4";
	/* <S1>/X */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:57"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:57";
	/* <S1>/X_dot */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:51"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:51";
	/* <S1>/bEnableU */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:60"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:60";
	/* <S1>/bEnablePID */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:59"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:59";
	/* <S1>/Kp */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:71"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:71";
	/* <S1>/Ki */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:72"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:72";
	/* <S1>/Kd */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:73"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:73";
	/* <S1>/Ps */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:231"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:231";
	/* <S1>/Pa */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:232"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:232";
	/* <S1>/Pb */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:233"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:233";
	/* <S1>/u_filtered */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:236"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:236";
	/* <S1>/Constant */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:68"] = "Sim2Twin_controlsystem_pos_Discrete.st:81";
	/* <S1>/Constant1 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:69"] = "Sim2Twin_controlsystem_pos_Discrete.st:116";
	/* <S1>/Discrete
Transfer Fcn */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:50"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:50";
	/* <S1>/PID */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:13"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:13";
	/* <S1>/Saturation */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:84"] = "Sim2Twin_controlsystem_pos_Discrete.st:125,133";
	/* <S1>/Saturation1 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:85"] = "Sim2Twin_controlsystem_pos_Discrete.st:105,113";
	/* <S1>/Saturation2 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:86"] = "Sim2Twin_controlsystem_pos_Discrete.st:181,189";
	/* <S1>/Sum */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:28"] = "Sim2Twin_controlsystem_pos_Discrete.st:117";
	/* <S1>/Sum1 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:29"] = "Sim2Twin_controlsystem_pos_Discrete.st:70";
	/* <S1>/Switch */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:58"] = "Sim2Twin_controlsystem_pos_Discrete.st:80,103";
	/* <S1>/Switch1 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:61"] = "Sim2Twin_controlsystem_pos_Discrete.st:115,123";
	/* <S1>/V2Q2u */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33"] = "Sim2Twin_controlsystem_pos_Discrete.st:135,179";
	/* <S1>/U */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:35"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:35";
	/* <S1>/PID_OUT */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:82"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:82";
	/* <S1>/Error */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:83"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:83";
	/* <S1>/u_Unfiltered */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:80"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:80";
	/* <S2>/PID_IN */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:40"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:40";
	/* <S2>/Kp */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:65"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:65";
	/* <S2>/Ki */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:66"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:66";
	/* <S2>/Kd */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:67"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:67";
	/* <S2>/Discrete
Transfer Fcn */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:41"] = "Sim2Twin_controlsystem_pos_Discrete.st:57,74,191";
	/* <S2>/Discrete Derivative */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:42"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:42";
	/* <S2>/Discrete-Time
Integrator */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:43"] = "Sim2Twin_controlsystem_pos_Discrete.st:59,82,194";
	/* <S2>/Product */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:62"] = "Sim2Twin_controlsystem_pos_Discrete.st:84";
	/* <S2>/Product1 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:63"] = "Sim2Twin_controlsystem_pos_Discrete.st:85";
	/* <S2>/Product2 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:64"] = "Sim2Twin_controlsystem_pos_Discrete.st:86";
	/* <S2>/Sum1 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:47"] = "Sim2Twin_controlsystem_pos_Discrete.st:87";
	/* <S2>/PID_OUT */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:48"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:48";
	/* <S3>:1 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1"] = "Sim2Twin_controlsystem_pos_Discrete.st:136";
	/* <S3>:1:3 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:3"] = "Sim2Twin_controlsystem_pos_Discrete.st:137";
	/* <S3>:1:4 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:4"] = "Sim2Twin_controlsystem_pos_Discrete.st:138";
	/* <S3>:1:5 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:5"] = "Sim2Twin_controlsystem_pos_Discrete.st:140";
	/* <S3>:1:6 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:6"] = "Sim2Twin_controlsystem_pos_Discrete.st:142";
	/* <S3>:1:7 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:7"] = "Sim2Twin_controlsystem_pos_Discrete.st:144";
	/* <S3>:1:8 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:8"] = "Sim2Twin_controlsystem_pos_Discrete.st:146";
	/* <S3>:1:10 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:10"] = "Sim2Twin_controlsystem_pos_Discrete.st:148";
	/* <S3>:1:11 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:11"] = "Sim2Twin_controlsystem_pos_Discrete.st:150";
	/* <S3>:1:12 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:12"] = "Sim2Twin_controlsystem_pos_Discrete.st:152";
	/* <S3>:1:13 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:13"] = "Sim2Twin_controlsystem_pos_Discrete.st:153";
	/* <S3>:1:15 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:15"] = "Sim2Twin_controlsystem_pos_Discrete.st:155";
	/* <S3>:1:16 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:16"] = "Sim2Twin_controlsystem_pos_Discrete.st:157";
	/* <S3>:1:18 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:18"] = "Sim2Twin_controlsystem_pos_Discrete.st:162";
	/* <S3>:1:19 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:19"] = "Sim2Twin_controlsystem_pos_Discrete.st:163";
	/* <S3>:1:20 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:20"] = "Sim2Twin_controlsystem_pos_Discrete.st:165";
	/* <S3>:1:21 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:21"] = "Sim2Twin_controlsystem_pos_Discrete.st:166";
	/* <S3>:1:23 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:23"] = "Sim2Twin_controlsystem_pos_Discrete.st:168";
	/* <S3>:1:24 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:24"] = "Sim2Twin_controlsystem_pos_Discrete.st:170";
	/* <S3>:1:26 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:26"] = "Sim2Twin_controlsystem_pos_Discrete.st:175";
	/* <S3>:1:27 */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:27"] = "Sim2Twin_controlsystem_pos_Discrete.st:176";
	/* <S4>/U */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:42:1"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:42:1";
	/* <S4>/Data Type
Duplicate */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:42:2"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:42:2";
	/* <S4>/Diff */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:42:3"] = "Sim2Twin_controlsystem_pos_Discrete.st:88,91";
	/* <S4>/TSamp */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:42:4"] = "Sim2Twin_controlsystem_pos_Discrete.st:73,76";
	/* <S4>/UD */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:42:5"] = "Sim2Twin_controlsystem_pos_Discrete.st:61,63,89,95,197,199";
	/* <S4>/Y */
	this.urlHashMap["Sim2Twin_controlsystem_pos_Discrete:42:6"] = "msg=&block=Sim2Twin_controlsystem_pos_Discrete:42:6";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Sim2Twin_controlsystem_pos_Discrete"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/X_real"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:4"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:4"] = {rtwname: "<S1>/X_real"};
	this.rtwnameHashMap["<S1>/X"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:57"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:57"] = {rtwname: "<S1>/X"};
	this.rtwnameHashMap["<S1>/X_dot"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:51"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:51"] = {rtwname: "<S1>/X_dot"};
	this.rtwnameHashMap["<S1>/bEnableU"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:60"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:60"] = {rtwname: "<S1>/bEnableU"};
	this.rtwnameHashMap["<S1>/bEnablePID"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:59"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:59"] = {rtwname: "<S1>/bEnablePID"};
	this.rtwnameHashMap["<S1>/Kp"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:71"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:71"] = {rtwname: "<S1>/Kp"};
	this.rtwnameHashMap["<S1>/Ki"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:72"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:72"] = {rtwname: "<S1>/Ki"};
	this.rtwnameHashMap["<S1>/Kd"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:73"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:73"] = {rtwname: "<S1>/Kd"};
	this.rtwnameHashMap["<S1>/Ps"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:231"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:231"] = {rtwname: "<S1>/Ps"};
	this.rtwnameHashMap["<S1>/Pa"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:232"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:232"] = {rtwname: "<S1>/Pa"};
	this.rtwnameHashMap["<S1>/Pb"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:233"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:233"] = {rtwname: "<S1>/Pb"};
	this.rtwnameHashMap["<S1>/u_filtered"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:236"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:236"] = {rtwname: "<S1>/u_filtered"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:68"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:68"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Constant1"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:69"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:69"] = {rtwname: "<S1>/Constant1"};
	this.rtwnameHashMap["<S1>/Discrete Transfer Fcn"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:50"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:50"] = {rtwname: "<S1>/Discrete Transfer Fcn"};
	this.rtwnameHashMap["<S1>/PID"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:13"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:13"] = {rtwname: "<S1>/PID"};
	this.rtwnameHashMap["<S1>/Saturation"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:84"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:84"] = {rtwname: "<S1>/Saturation"};
	this.rtwnameHashMap["<S1>/Saturation1"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:85"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:85"] = {rtwname: "<S1>/Saturation1"};
	this.rtwnameHashMap["<S1>/Saturation2"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:86"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:86"] = {rtwname: "<S1>/Saturation2"};
	this.rtwnameHashMap["<S1>/Sum"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:28"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:28"] = {rtwname: "<S1>/Sum"};
	this.rtwnameHashMap["<S1>/Sum1"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:29"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:29"] = {rtwname: "<S1>/Sum1"};
	this.rtwnameHashMap["<S1>/Switch"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:58"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:58"] = {rtwname: "<S1>/Switch"};
	this.rtwnameHashMap["<S1>/Switch1"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:61"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:61"] = {rtwname: "<S1>/Switch1"};
	this.rtwnameHashMap["<S1>/V2Q2u"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33"] = {rtwname: "<S1>/V2Q2u"};
	this.rtwnameHashMap["<S1>/U"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:35"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:35"] = {rtwname: "<S1>/U"};
	this.rtwnameHashMap["<S1>/PID_OUT"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:82"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:82"] = {rtwname: "<S1>/PID_OUT"};
	this.rtwnameHashMap["<S1>/Error"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:83"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:83"] = {rtwname: "<S1>/Error"};
	this.rtwnameHashMap["<S1>/u_Unfiltered"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:80"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:80"] = {rtwname: "<S1>/u_Unfiltered"};
	this.rtwnameHashMap["<S2>/PID_IN"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:40"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:40"] = {rtwname: "<S2>/PID_IN"};
	this.rtwnameHashMap["<S2>/Kp"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:65"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:65"] = {rtwname: "<S2>/Kp"};
	this.rtwnameHashMap["<S2>/Ki"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:66"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:66"] = {rtwname: "<S2>/Ki"};
	this.rtwnameHashMap["<S2>/Kd"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:67"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:67"] = {rtwname: "<S2>/Kd"};
	this.rtwnameHashMap["<S2>/Discrete Transfer Fcn"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:41"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:41"] = {rtwname: "<S2>/Discrete Transfer Fcn"};
	this.rtwnameHashMap["<S2>/Discrete Derivative"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:42"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:42"] = {rtwname: "<S2>/Discrete Derivative"};
	this.rtwnameHashMap["<S2>/Discrete-Time Integrator"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:43"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:43"] = {rtwname: "<S2>/Discrete-Time Integrator"};
	this.rtwnameHashMap["<S2>/Product"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:62"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:62"] = {rtwname: "<S2>/Product"};
	this.rtwnameHashMap["<S2>/Product1"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:63"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:63"] = {rtwname: "<S2>/Product1"};
	this.rtwnameHashMap["<S2>/Product2"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:64"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:64"] = {rtwname: "<S2>/Product2"};
	this.rtwnameHashMap["<S2>/Sum1"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:47"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:47"] = {rtwname: "<S2>/Sum1"};
	this.rtwnameHashMap["<S2>/PID_OUT"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:48"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:48"] = {rtwname: "<S2>/PID_OUT"};
	this.rtwnameHashMap["<S3>:1"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1"] = {rtwname: "<S3>:1"};
	this.rtwnameHashMap["<S3>:1:3"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:3"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:3"] = {rtwname: "<S3>:1:3"};
	this.rtwnameHashMap["<S3>:1:4"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:4"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:4"] = {rtwname: "<S3>:1:4"};
	this.rtwnameHashMap["<S3>:1:5"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:5"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:5"] = {rtwname: "<S3>:1:5"};
	this.rtwnameHashMap["<S3>:1:6"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:6"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:6"] = {rtwname: "<S3>:1:6"};
	this.rtwnameHashMap["<S3>:1:7"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:7"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:7"] = {rtwname: "<S3>:1:7"};
	this.rtwnameHashMap["<S3>:1:8"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:8"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:8"] = {rtwname: "<S3>:1:8"};
	this.rtwnameHashMap["<S3>:1:10"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:10"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:10"] = {rtwname: "<S3>:1:10"};
	this.rtwnameHashMap["<S3>:1:11"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:11"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:11"] = {rtwname: "<S3>:1:11"};
	this.rtwnameHashMap["<S3>:1:12"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:12"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:12"] = {rtwname: "<S3>:1:12"};
	this.rtwnameHashMap["<S3>:1:13"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:13"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:13"] = {rtwname: "<S3>:1:13"};
	this.rtwnameHashMap["<S3>:1:15"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:15"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:15"] = {rtwname: "<S3>:1:15"};
	this.rtwnameHashMap["<S3>:1:16"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:16"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:16"] = {rtwname: "<S3>:1:16"};
	this.rtwnameHashMap["<S3>:1:18"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:18"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:18"] = {rtwname: "<S3>:1:18"};
	this.rtwnameHashMap["<S3>:1:19"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:19"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:19"] = {rtwname: "<S3>:1:19"};
	this.rtwnameHashMap["<S3>:1:20"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:20"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:20"] = {rtwname: "<S3>:1:20"};
	this.rtwnameHashMap["<S3>:1:21"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:21"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:21"] = {rtwname: "<S3>:1:21"};
	this.rtwnameHashMap["<S3>:1:23"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:23"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:23"] = {rtwname: "<S3>:1:23"};
	this.rtwnameHashMap["<S3>:1:24"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:24"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:24"] = {rtwname: "<S3>:1:24"};
	this.rtwnameHashMap["<S3>:1:26"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:26"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:26"] = {rtwname: "<S3>:1:26"};
	this.rtwnameHashMap["<S3>:1:27"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:33:1:27"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:33:1:27"] = {rtwname: "<S3>:1:27"};
	this.rtwnameHashMap["<S4>/U"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:42:1"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:42:1"] = {rtwname: "<S4>/U"};
	this.rtwnameHashMap["<S4>/Data Type Duplicate"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:42:2"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:42:2"] = {rtwname: "<S4>/Data Type Duplicate"};
	this.rtwnameHashMap["<S4>/Diff"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:42:3"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:42:3"] = {rtwname: "<S4>/Diff"};
	this.rtwnameHashMap["<S4>/TSamp"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:42:4"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:42:4"] = {rtwname: "<S4>/TSamp"};
	this.rtwnameHashMap["<S4>/UD"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:42:5"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:42:5"] = {rtwname: "<S4>/UD"};
	this.rtwnameHashMap["<S4>/Y"] = {sid: "Sim2Twin_controlsystem_pos_Discrete:42:6"};
	this.sidHashMap["Sim2Twin_controlsystem_pos_Discrete:42:6"] = {rtwname: "<S4>/Y"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
