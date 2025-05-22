(*
 *
 * File: RedCrane_kinematic_model.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "RedCrane_kinematic_model/FB_StrokeToAngle"
 *
 * Model name                      : RedCrane_kinematic_model
 * Model version                   : 2.78
 * Model creator                   : sindr
 * Model last modified by          : larso
 * Model last modified on          : Mon Jan 20 08:44:51 2025
 * Model sample time               : 0.001s
 * Subsystem name                  : RedCrane_kinematic_model/FB_StrokeToAngle
 * Subsystem sample time           : 0.001s
 * Simulink PLC Coder version      : 24.1 (R2024a) 19-Nov-2023
 * ST code generated on            : Mon Jan 20 09:02:31 2025
 *
 * Target IDE selection            : Beckhoff TwinCAT 3
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK FB_StrokeToAngle
VAR_INPUT
    fMainStroke: LREAL;
    fKnuckleStroke: LREAL;
END_VAR
VAR_OUTPUT
    fMainAngle: LREAL;
    fKnuckleAngle: LREAL;
END_VAR
VAR
    main_stroke_to_angle_Coefs: ARRAY [0..9] OF LREAL := 752.36192847450934,-2711.9881455283635,4185.5020861282537,
        -3621.8720786215363,1937.5301530635202,-670.01083713679679,155.49672501772409,-25.487311958550485,
        5.7916007424816192,-0.89523304222684752;
    c_knuckle_stroke_to_angle_C: ARRAY [0..9] OF LREAL := 2225.4059100366635,-9189.8997784201729,16119.980894758295,
        -15661.333704214694,9220.1385785747534,-3389.4067792674132,778.53350204031779,-110.53057442218088,
        12.885084555609861,-3.0067027279227916;
END_VAR
VAR_TEMP
    idx: DINT;
END_VAR
(* Outputs for Atomic SubSystem: '<Root>/FB_StrokeToAngle' *)
(* Polyval: '<S1>/main_stroke_to_angle' *)
fMainAngle := 752.36192847450934;
(* Polyval: '<S1>/knuckle_stroke_to_angle' *)
fKnuckleAngle := 2225.4059100366635;
FOR idx := 0 TO 8 DO 
    (* Polyval: '<S1>/main_stroke_to_angle' *)
    fMainAngle := (fMainAngle * fMainStroke) + main_stroke_to_angle_Coefs[idx + 1];
    (* Polyval: '<S1>/knuckle_stroke_to_angle' *)
    fKnuckleAngle := (fKnuckleAngle * fKnuckleStroke) + c_knuckle_stroke_to_angle_C[idx + 1];
END_FOR;
(* End of Outputs for SubSystem: '<Root>/FB_StrokeToAngle' *)
END_FUNCTION_BLOCK
