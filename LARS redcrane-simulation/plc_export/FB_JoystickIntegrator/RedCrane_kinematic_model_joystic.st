(*
 *
 * File: RedCrane_kinematic_model_joystic.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "RedCrane_kinematic_model_joystic/FB_JoystickIntegrator"
 *
 * Model name                      : RedCrane_kinematic_model_joystic
 * Model version                   : 2.76
 * Model creator                   : sindr
 * Model last modified by          : larso
 * Model last modified on          : Fri Jan 17 16:44:14 2025
 * Model sample time               : 0.001s
 * Subsystem name                  : RedCrane_kinematic_model_joystic/FB_JoystickIntegrator
 * Subsystem sample time           : 0.001s
 * Simulink PLC Coder version      : 24.1 (R2024a) 19-Nov-2023
 * ST code generated on            : Fri Jan 17 17:14:40 2025
 *
 * Target IDE selection            : Beckhoff TwinCAT 3
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK FB_JoystickIntegrator
VAR_INPUT
    fJoyX: LREAL;
    fJoyY: LREAL;
    fJoyZ: LREAL;
    fCartesianVMax: LREAL;
    fTs: LREAL;
    fXPosFeedBack: LREAL;
    fYPosFeedBack: LREAL;
    fZPosFeedBack: LREAL;
END_VAR
VAR_OUTPUT
    fXRef: LREAL;
    fYRef: LREAL;
    fZRef: LREAL;
    fXVelRef: LREAL;
    fYVelRef: LREAL;
    fZVelRef: LREAL;
END_VAR
(* Outputs for Atomic SubSystem: '<Root>/FB_JoystickIntegrator' *)
(* MATLAB Function: '<S1>/MATLAB Function' *)
(* MATLAB Function 'FB_JoystickIntegrator/MATLAB Function': '<S2>:1' *)
(* '<S2>:1:3' fXVelRef = fCartesianVMax*fJoyX; *)
fXVelRef := fCartesianVMax * fJoyX;
(* '<S2>:1:4' fYVelRef = fCartesianVMax*fJoyY; *)
fYVelRef := fCartesianVMax * fJoyY;
(* '<S2>:1:5' fZVelRef = fCartesianVMax*fJoyZ; *)
fZVelRef := fCartesianVMax * fJoyZ;
(* Outport: '<Root>/fXRef' incorporates:
 *  MATLAB Function: '<S1>/MATLAB Function' *)
(* '<S2>:1:7' fXRef = fXPosFeedBack + fXVelRef*fTs; *)
(* '<S2>:1:8' fYRef = fYPosFeedBack + fYVelRef*fTs; *)
(* '<S2>:1:9' fZRef = fZPosFeedBack + fZVelRef*fTs; *)
fXRef := (fXVelRef * fTs) + fXPosFeedBack;
(* Outport: '<Root>/fYRef' incorporates:
 *  MATLAB Function: '<S1>/MATLAB Function' *)
fYRef := (fYVelRef * fTs) + fYPosFeedBack;
(* Outport: '<Root>/fZRef' incorporates:
 *  MATLAB Function: '<S1>/MATLAB Function' *)
fZRef := (fZVelRef * fTs) + fZPosFeedBack;
(* End of Outputs for SubSystem: '<Root>/FB_JoystickIntegrator' *)
END_FUNCTION_BLOCK
