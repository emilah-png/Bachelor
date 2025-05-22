(*
 *
 * File: RedCrane_kinematic_model.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "RedCrane_kinematic_model/FB_AngleToStroke"
 *
 * Model name                      : RedCrane_kinematic_model
 * Model version                   : 2.78
 * Model creator                   : sindr
 * Model last modified by          : larso
 * Model last modified on          : Mon Jan 20 08:44:51 2025
 * Model sample time               : 0.001s
 * Subsystem name                  : RedCrane_kinematic_model/FB_AngleToStroke
 * Subsystem sample time           : 0.001s
 * Simulink PLC Coder version      : 24.1 (R2024a) 19-Nov-2023
 * ST code generated on            : Mon Jan 20 08:49:58 2025
 *
 * Target IDE selection            : Beckhoff TwinCAT 3
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK FB_AngleToStroke
VAR_INPUT
    fMainAngle: LREAL;
    fKnuckleAngle: LREAL;
    fMainAngleVel: LREAL;
    fKnuckleAngleVel: LREAL;
END_VAR
VAR_OUTPUT
    fMainStroke: LREAL;
    fKnuckleStroke: LREAL;
    fMainStrokeVel: LREAL;
    fKnuckleStrokeVel: LREAL;
END_VAR
VAR
    c_main_angle_to_stroke_dot_: ARRAY [0..8] OF LREAL := -0.0001230733184656039,-0.00011178316829555629,
        0.0032259350168467762,-0.014266753640861714,0.013352428649641276,0.053256045623198495,-0.14417827320961887,
        0.049080418441319086,0.34710603970852111;
    main_angle_to_stroke1_Coefs: ARRAY [0..9] OF LREAL := -1.3674813162844878E-5,-1.3972896036944537E-5,
        0.00046084785954953947,-0.0023777922734769526,0.0026704857299282552,0.013314011405799624,
        -0.048059424403206291,0.024540209220659543,0.34710603970852111,0.25110492964217662;
    c_knuckle_angle_to_stroke_d: ARRAY [0..8] OF LREAL := -0.00043617962422908875,-0.0048110162502983554,
        -0.020237721842070049,-0.0454986986379932,-0.070481387555638444,-0.055543542370713711,0.0077182455137611728,
        0.023777493235108842,0.30462783944131627;
    c_knuckle_angle_to_stroke1_: ARRAY [0..9] OF LREAL := -4.846440269212097E-5,-0.00060137703128729442,
        -0.0028911031202957212,-0.0075831164396655331,-0.014096277511127688,-0.013885885592678428,
        0.0025727485045870576,0.011888746617554421,0.30462783944131627,0.77384539409105124;
END_VAR
VAR_TEMP
    idx: DINT;
    c_rtb_knuckle_angle_to_stro: LREAL;
END_VAR
(* Outputs for Atomic SubSystem: '<Root>/FB_AngleToStroke' *)
(* Polyval: '<S1>/main_angle_to_stroke_dot' *)
c_rtb_knuckle_angle_to_stro := -0.0001230733184656039;
FOR idx := 0 TO 7 DO 
    c_rtb_knuckle_angle_to_stro := (c_rtb_knuckle_angle_to_stro * fMainAngle) + c_main_angle_to_stroke_dot_[idx + 1];
END_FOR;
(* End of Polyval: '<S1>/main_angle_to_stroke_dot' *)
(* Outport: '<Root>/fMainStrokeVel' incorporates:
 *  Product: '<S1>/Product' *)
fMainStrokeVel := fMainAngleVel * c_rtb_knuckle_angle_to_stro;
(* Polyval: '<S1>/main_angle_to_stroke1' *)
fMainStroke := -1.3674813162844878E-5;
FOR idx := 0 TO 8 DO 
    fMainStroke := (fMainStroke * fMainAngle) + main_angle_to_stroke1_Coefs[idx + 1];
END_FOR;
(* End of Polyval: '<S1>/main_angle_to_stroke1' *)
(* Polyval: '<S1>/knuckle_angle_to_stroke_dot' *)
c_rtb_knuckle_angle_to_stro := -0.00043617962422908875;
FOR idx := 0 TO 7 DO 
    c_rtb_knuckle_angle_to_stro := (c_rtb_knuckle_angle_to_stro * fKnuckleAngle) + c_knuckle_angle_to_stroke_d[idx + 1];
END_FOR;
(* End of Polyval: '<S1>/knuckle_angle_to_stroke_dot' *)
(* Polyval: '<S1>/knuckle_angle_to_stroke1' *)
fKnuckleStroke := -4.846440269212097E-5;
FOR idx := 0 TO 8 DO 
    fKnuckleStroke := (fKnuckleStroke * fKnuckleAngle) + c_knuckle_angle_to_stroke1_[idx + 1];
END_FOR;
(* End of Polyval: '<S1>/knuckle_angle_to_stroke1' *)
(* Outport: '<Root>/fKnuckleStrokeVel' incorporates:
 *  Product: '<S1>/Product1' *)
fKnuckleStrokeVel := fKnuckleAngleVel * c_rtb_knuckle_angle_to_stro;
(* End of Outputs for SubSystem: '<Root>/FB_AngleToStroke' *)
END_FUNCTION_BLOCK
