(*
 *
 * File: RedCrane_kinematic_model.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "RedCrane_kinematic_model/FB_GoHome/FB_CosineReferenceGenerator"
 *
 * Model name                      : RedCrane_kinematic_model
 * Model version                   : 2.78
 * Model creator                   : sindr
 * Model last modified by          : larso
 * Model last modified on          : Mon Jan 20 08:44:51 2025
 * Model sample time               : 0.001s
 * Subsystem name                  : RedCrane_kinematic_model/FB_GoHome/FB_CosineReferenceGenerator
 * Subsystem sample time           : 0.001s
 * Simulink PLC Coder version      : 24.1 (R2024a) 19-Nov-2023
 * ST code generated on            : Mon Jan 20 08:48:37 2025
 *
 * Target IDE selection            : Beckhoff TwinCAT 3
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK FB_CosineReferenceGenerator
VAR_INPUT
    ssMethodType: SINT;
    fPosFeedback: LREAL;
    t: LREAL;
    fHomePos: LREAL;
    fThetaDotMax: LREAL;
    bEnable: BOOL;
END_VAR
VAR_OUTPUT
    fPosRef: LREAL;
    fVelRef: LREAL;
    bSuccess: BOOL;
    test: BOOL;
END_VAR
VAR
    bEnableOld: BOOL;
    bRunning: BOOL;
    bFirstCycle: BOOL;
    fTheta0_persistent: LREAL;
    t0_persistent: LREAL;
    fThetaDesired_persistent: LREAL;
END_VAR
VAR_TEMP
    t_elapsed: LREAL;
    A: LREAL;
    b_T: LREAL;
    fPosRef_tmp: LREAL;
END_VAR
CASE ssMethodType OF
    SS_INITIALIZE: 
        (* SystemInitialize for MATLAB Function: '<Root>/FB_CosineReferenceGenerator' *)
        (* 'cosinePositionGenerator:28' bRunning = false; *)
        bRunning := FALSE;
        (* 'cosinePositionGenerator:31' bFirstCycle = false; *)
        bFirstCycle := FALSE;
        (* 'cosinePositionGenerator:34' bEnableOld = false; *)
        bEnableOld := FALSE;
        (* 'cosinePositionGenerator:37' t0_persistent = 0; *)
        t0_persistent := 0.0;
        (* 'cosinePositionGenerator:40' fThetaDesired_persistent = 0; *)
        fThetaDesired_persistent := 0.0;
        (* 'cosinePositionGenerator:43' fTheta0_persistent = 0; *)
        fTheta0_persistent := 0.0;
    SS_STEP: 
        (* Outport: '<Root>/bSuccess' incorporates:
         *  MATLAB Function: '<Root>/FB_CosineReferenceGenerator' *)
        (* MATLAB Function 'FB_CosineReferenceGenerator': '<S1>:1' *)
        (* '<S1>:1:7' bSuccess = false; *)
        (* '<S1>:1:8' fPosRef = 0.0; *)
        (* '<S1>:1:9' fVelRef = 0.0; *)
        (* '<S1>:1:10' test = false; *)
        (* '<S1>:1:13' [fPosRef, fVelRef, bSuccess, test] = cosinePositionGenerator(fPosFeedback, fHomePos, fThetaDotMax, t, bEnable); *)
        (* Persistent variables to retain state between function calls *)
        (* COSINEPOSITIONGENERATOR Generates a smooth cosine velocity and position profile *)
        
        (* [fThetaRef, fThetaDotRef, isDone, test] = cosinePositionGenerator(fTheta0, fThetaDesired, fThetaDotMax, t, bEnable, fDt) *)
        
        (* Generates a cosine velocity and position trajectory profile for smooth motion. *)
        
        (* INPUTS: *)
        (* - fTheta0: Initial position (rad) *)
        (* - fThetaDesired: Desired position (rad) *)
        (* - fThetaDotMax: Maximum velocity (rad/s) *)
        (* - t: Current time (s) *)
        (* - bEnable: Boolean to start or stop the motion (true/false) *)
        (* - fDt: Time step (s) *)
        
        (* OUTPUTS: *)
        (* - fThetaRef: Reference position (rad) *)
        (* - fThetaDotRef: Reference velocity (rad/s) *)
        (* - isDone: Boolean indicating whether the motion has finished (true/false) *)
        (* - test: Debugging flag to indicate first cycle behavior *)
        (* Ensure persistent variables are initialized properly *)
        (* 'cosinePositionGenerator:27' if isempty(bRunning) *)
        (* 'cosinePositionGenerator:30' if isempty(bFirstCycle) *)
        (* 'cosinePositionGenerator:33' if isempty(bEnableOld) *)
        (* 'cosinePositionGenerator:36' if isempty(t0_persistent) *)
        (* 'cosinePositionGenerator:39' if isempty(fThetaDesired_persistent) *)
        (* 'cosinePositionGenerator:42' if isempty(fTheta0_persistent) *)
        (* Default output values (holding position) *)
        (* 'cosinePositionGenerator:46' fThetaRef = fTheta0; *)
        (* 'cosinePositionGenerator:47' fThetaDotRef = 0.0; *)
        (* 'cosinePositionGenerator:48' isDone = false; *)
        bSuccess := FALSE;
        (* Outport: '<Root>/test' incorporates:
         *  MATLAB Function: '<Root>/FB_CosineReferenceGenerator' *)
        (* 'cosinePositionGenerator:49' test = false; *)
        test := FALSE;
        (* MATLAB Function: '<Root>/FB_CosineReferenceGenerator' *)
        (* START MOVEMENT IF TOGGLED ENABLED *)
        (* If enable signal toggles from off to on, start a new movement cycle *)
        (* 'cosinePositionGenerator:53' if bEnable && ~bEnableOld && ~bRunning *)
        IF (bEnable AND ( NOT bEnableOld)) AND ( NOT bRunning) THEN 
            (* 'cosinePositionGenerator:54' bFirstCycle = true; *)
            bFirstCycle := TRUE;
            (* 'cosinePositionGenerator:55' bRunning = true; *)
            bRunning := TRUE;
        END_IF;
        (* STOP MOVEMENT WHEN TOGGLED OFF *)
        (* If the enable signal turns off, stop the motion and reset outputs *)
        (* 'cosinePositionGenerator:60' if ~bEnable *)
        IF  NOT bEnable THEN 
            (* Outport: '<Root>/fPosRef' *)
            (* 'cosinePositionGenerator:61' fThetaRef = fTheta0; *)
            fPosRef := fPosFeedback;
            (* Outport: '<Root>/fVelRef' *)
            (* 'cosinePositionGenerator:62' fThetaDotRef = 0.0; *)
            fVelRef := 0.0;
            (* 'cosinePositionGenerator:63' isDone = false; *)
            (* 'cosinePositionGenerator:64' bRunning = false; *)
            bRunning := FALSE;
            (* 'cosinePositionGenerator:65' bEnableOld = bEnable; *)
            bEnableOld := FALSE;
        ELSE 
            (* INITIALIZE MOVEMENT ON FIRST CYCLE *)
            (* On the first cycle of motion, initialize the position, time, and desired goal *)
            (* 'cosinePositionGenerator:71' if bFirstCycle *)
            IF bFirstCycle THEN 
                (* Outport: '<Root>/test' *)
                (* 'cosinePositionGenerator:72' test = true; *)
                test := TRUE;
                (* 'cosinePositionGenerator:73' fTheta0_persistent = fTheta0; *)
                fTheta0_persistent := fPosFeedback;
                (* 'cosinePositionGenerator:74' t0_persistent = t; *)
                t0_persistent := t;
                (* 'cosinePositionGenerator:75' bFirstCycle = false; *)
                bFirstCycle := FALSE;
                (* 'cosinePositionGenerator:76' fThetaDesired_persistent = fThetaDesired; *)
                fThetaDesired_persistent := fHomePos;
            END_IF;
            (* CALCULATE ELAPSED TIME *)
            (* Compute the time elapsed since the start of the motion *)
            (* 'cosinePositionGenerator:81' t_elapsed = (t - t0_persistent); *)
            t_elapsed := t - t0_persistent;
            (* CALCULATE TIME TO REACH DESIRED POSITION *)
            (* Compute the total time required for a smooth transition using a cosine profile *)
            (* 'cosinePositionGenerator:85' A = (fThetaDesired_persistent - fTheta0_persistent); *)
            A := fThetaDesired_persistent - fTheta0_persistent;
            (* Total movement amplitude *)
            (* 'cosinePositionGenerator:86' T = 2 * pi * (abs(A) / 2) / fThetaDotMax; *)
            b_T := ((ABS(A) / 2.0) * 6.2831853071795862) / fThetaDotMax;
            (* Total duration of the motion *)
            (* STOP CONDITION: CHECK IF MOTION IS COMPLETE *)
            (* If the elapsed time exceeds half the period, hold the final position *)
            (* 'cosinePositionGenerator:90' if t_elapsed >= T / 2 *)
            IF t_elapsed >= (b_T / 2.0) THEN 
                (* Outport: '<Root>/fPosRef' *)
                (* 'cosinePositionGenerator:91' fThetaRef = fThetaDesired_persistent; *)
                fPosRef := fThetaDesired_persistent;
                (* Outport: '<Root>/fVelRef' *)
                (* 'cosinePositionGenerator:92' fThetaDotRef = 0.0; *)
                fVelRef := 0.0;
                (* Outport: '<Root>/bSuccess' *)
                (* 'cosinePositionGenerator:93' isDone = true; *)
                bSuccess := TRUE;
                (* 'cosinePositionGenerator:94' bRunning = false; *)
                bRunning := FALSE;
                (* 'cosinePositionGenerator:95' bEnableOld = bEnable; *)
                bEnableOld := TRUE;
            ELSE 
                (* UPDATE TOGGLE STATE *)
                (* Update the persistent toggle state variable *)
                (* 'cosinePositionGenerator:101' bEnableOld = bEnable; *)
                bEnableOld := TRUE;
                (* GENERATE COSINE POSITION AND VELOCITY PROFILE *)
                (* Cosine-based motion profile for smooth acceleration and deceleration *)
                (* 'cosinePositionGenerator:105' fThetaRef = (A / 2) * cos(2 * pi / T * t_elapsed - pi) + A / 2 + fTheta0_persistent; *)
                fPosRef_tmp := ((6.2831853071795862 / b_T) * t_elapsed) - 3.1415926535897931;
                (* Outport: '<Root>/fPosRef' *)
                fPosRef := ((COS(fPosRef_tmp) * (A / 2.0)) + (A / 2.0)) + fTheta0_persistent;
                (* Outport: '<Root>/fVelRef' *)
                (* 'cosinePositionGenerator:106' fThetaDotRef = -2 * pi / T * (A / 2) * sin(2 * pi / T * t_elapsed - pi); *)
                fVelRef := SIN(fPosRef_tmp) * ((-6.2831853071795862 / b_T) * (A / 2.0));
            END_IF;
        END_IF;
END_CASE;
END_FUNCTION_BLOCK
VAR_GLOBAL CONSTANT
    SS_INITIALIZE: SINT := 0;
    SS_STEP: SINT := 1;
END_VAR
