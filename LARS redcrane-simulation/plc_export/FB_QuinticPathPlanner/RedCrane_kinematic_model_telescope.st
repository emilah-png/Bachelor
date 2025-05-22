(*
 *
 * File: RedCrane_kinematic_model_telescope.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "RedCrane_kinematic_model_telescope/FB_QuinticPathPlanner"
 *
 * Model name                      : RedCrane_kinematic_model_telescope
 * Model version                   : 2.94
 * Model creator                   : sindr
 * Model last modified by          : larso
 * Model last modified on          : Tue Jan 28 15:09:52 2025
 * Model sample time               : 0.001s
 * Subsystem name                  : RedCrane_kinematic_model_telescope/FB_QuinticPathPlanner
 * Subsystem sample time           : 0.001s
 * Simulink PLC Coder version      : 24.1 (R2024a) 19-Nov-2023
 * ST code generated on            : Tue Jan 28 15:12:24 2025
 *
 * Target IDE selection            : Beckhoff TwinCAT 3
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK FB_QuinticPathPlanner
VAR_INPUT
    ssMethodType: SINT;
    bEnable: BOOL;
    nPointSetNumber: UINT;
    fT: LREAL;
    p1: ARRAY [0..2] OF LREAL;
    p2: ARRAY [0..2] OF LREAL;
    p3: ARRAY [0..2] OF LREAL;
    p4: ARRAY [0..2] OF LREAL;
    fMaxVel: LREAL;
    fXFeedback: LREAL;
    fYFeedback: LREAL;
    fZFeedback: LREAL;
END_VAR
VAR_OUTPUT
    fXRef: LREAL;
    fYRef: LREAL;
    fZRef: LREAL;
    fXDotRef: LREAL;
    fYDotRef: LREAL;
    fZDotRef: LREAL;
    bFinished: BOOL;
END_VAR
VAR
    posRefMemory_not_empty: BOOL;
    bEnableMemory: BOOL;
    pointSetNumberMemory: UINT;
    t0Memory: LREAL;
    coeffXMemory: ARRAY [0..17] OF LREAL;
    coeffYMemory: ARRAY [0..17] OF LREAL;
    coeffZMemory: ARRAY [0..17] OF LREAL;
    timeSlotsMemory: ARRAY [0..4] OF LREAL;
    accRefMemory: ARRAY [0..2] OF LREAL;
    velRefMemory: ARRAY [0..2] OF LREAL;
    i0_F4: F4;
    i0_xgetrfs: xgetrfs;
END_VAR
VAR_TEMP
    bFirsCykle: BOOL;
    bNewPointSet: BOOL;
    maxVel3D: LREAL;
    t1: LREAL;
    tLocal: LREAL;
    A: ARRAY [0..323] OF LREAL;
    A_tmp: ARRAY [0..4] OF LREAL;
    A_tmp_0: ARRAY [0..4] OF SINT;
    A_tmp_1: ARRAY [0..4] OF SINT;
    A_tmp_tmp: ARRAY [0..4] OF LREAL;
    A_tmp_2: ARRAY [0..4] OF LREAL;
    A_tmp_3: ARRAY [0..4] OF LREAL;
    A_tmp_4: ARRAY [0..4] OF LREAL;
    A_tmp_5: ARRAY [0..4] OF LREAL;
    A_tmp_6: ARRAY [0..4] OF LREAL;
    A_tmp_7: ARRAY [0..4] OF LREAL;
    A_tmp_8: ARRAY [0..4] OF LREAL;
    A_tmp_9: ARRAY [0..4] OF LREAL;
    i: DINT;
    xPoints: ARRAY [0..2] OF LREAL;
    xPoints_0: ARRAY [0..2] OF LREAL;
    xPoints_1: ARRAY [0..2] OF LREAL;
    A_tmp_a: LREAL;
    A_tmp_tmp_0: LREAL;
    A_tmp_idx_3: LREAL;
    A_tmp_idx_2: LREAL;
    A_tmp_idx_3_0: LREAL;
    A_tmp_idx_3_1: LREAL;
    A_tmp_idx_3_2: LREAL;
    A_tmp_idx_2_0: LREAL;
    A_tmp_idx_2_1: LREAL;
    A_tmp_idx_3_3: LREAL;
    A_tmp_idx_3_4: LREAL;
    A_tmp_idx_3_5: LREAL;
    timeSlotsMemory_tmp: LREAL;
    A_tmp_idx_2_tmp: LREAL;
    A_tmp_idx_2_tmp_0: LREAL;
    A_tmp_idx_3_tmp: LREAL;
    A_tmp_idx_2_tmp_1: LREAL;
    A_tmp_idx_3_tmp_0: LREAL;
    A_tmp_tmp_1: LREAL;
    A_tmp_b: DINT;
END_VAR
CASE ssMethodType OF
    SS_INITIALIZE: 
        (* SystemInitialize for Atomic SubSystem: '<Root>/FB_QuinticPathPlanner' *)
        (* SystemInitialize for MATLAB Function: '<S1>/Quintic' *)
        posRefMemory_not_empty := FALSE;
        (* '<S2>:1:21' , *)
        (* '<S2>:1:21' bEnableMemory       = false; *)
        bEnableMemory := FALSE;
        (* '<S2>:1:22' , *)
        (* '<S2>:1:22' pointSetNumberMemory= uint16(0); *)
        pointSetNumberMemory := 0;
        (* End of SystemInitialize for SubSystem: '<Root>/FB_QuinticPathPlanner' *)
        (* '<S2>:1:24' , *)
        (* '<S2>:1:24' p1Memory            = zeros(3,1); *)
        (* '<S2>:1:25' , *)
        (* '<S2>:1:25' p2Memory            = zeros(3,1); *)
        (* '<S2>:1:26' , *)
        (* '<S2>:1:26' p3Memory            = zeros(3,1); *)
        (* '<S2>:1:27' , *)
        (* '<S2>:1:27' p4Memory            = zeros(3,1); *)
        (* '<S2>:1:29' , *)
        (* '<S2>:1:29' timeSlotsMemory     = [0 1 2 3 4]; *)
        (* SystemInitialize for Atomic SubSystem: '<Root>/FB_QuinticPathPlanner' *)
        (* SystemInitialize for MATLAB Function: '<S1>/Quintic' *)
        FOR i := 0 TO 4 DO 
            timeSlotsMemory[i] := DINT_TO_LREAL(i);
        END_FOR;
        (* End of SystemInitialize for SubSystem: '<Root>/FB_QuinticPathPlanner' *)
        (* '<S2>:1:30' , *)
        (* '<S2>:1:30' coeffXMemory        = zeros(18,1); *)
        (* '<S2>:1:31' , *)
        (* '<S2>:1:31' coeffYMemory        = zeros(18,1); *)
        (* '<S2>:1:32' , *)
        (* '<S2>:1:32' coeffZMemory        = zeros(18,1); *)
        (* SystemInitialize for Atomic SubSystem: '<Root>/FB_QuinticPathPlanner' *)
        (* SystemInitialize for MATLAB Function: '<S1>/Quintic' *)
        FOR i := 0 TO 17 DO 
            coeffXMemory[i] := 0.0;
            coeffYMemory[i] := 0.0;
            coeffZMemory[i] := 0.0;
        END_FOR;
        (* '<S2>:1:35' , *)
        (* '<S2>:1:35' velRefMemory        = zeros(3,1); *)
        (* '<S2>:1:36' , *)
        (* '<S2>:1:36' accRefMemory        = zeros(3,1); *)
        velRefMemory[0] := 0.0;
        accRefMemory[0] := 0.0;
        velRefMemory[1] := 0.0;
        accRefMemory[1] := 0.0;
        velRefMemory[2] := 0.0;
        accRefMemory[2] := 0.0;
        (* '<S2>:1:38' , *)
        (* '<S2>:1:38' t0Memory            = 0; *)
        t0Memory := 0.0;
        (* End of SystemInitialize for SubSystem: '<Root>/FB_QuinticPathPlanner' *)
    SS_STEP: 
        (* Outputs for Atomic SubSystem: '<Root>/FB_QuinticPathPlanner' *)
        (* Outport: '<Root>/fXRef' incorporates:
         *  MATLAB Function: '<S1>/Quintic'
         *  SignalConversion: '<S2>/TmpSignal ConversionAt SFunction Inport9' *)
        fXRef := fXFeedback;
        (* Outport: '<Root>/fYRef' incorporates:
         *  MATLAB Function: '<S1>/Quintic'
         *  SignalConversion: '<S2>/TmpSignal ConversionAt SFunction Inport9' *)
        fYRef := fYFeedback;
        (* Outport: '<Root>/fZRef' incorporates:
         *  MATLAB Function: '<S1>/Quintic'
         *  SignalConversion: '<S2>/TmpSignal ConversionAt SFunction Inport9' *)
        fZRef := fZFeedback;
        (* MATLAB Function: '<S1>/Quintic' *)
        (* QUINTICGENERATOR *)
        (* Generates piecewise polynomial references (pos/vel/acc) for up to 4 segments. *)
        (* Re-computes polynomials only when nPointSetNumber increments (signaling *)
        (* a new waypoint set), and only if bEnable == true. *)
        
        (* If bEnable is false, outputs a stationary reference at posFeedback. *)
        (* MATLAB Function 'FB_QuinticPathPlanner/Quintic': '<S2>:1' *)
        (* %% PERSISTENT VARIABLES %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% *)
        (* Remember last enable state *)
        (* Remember last waypoint-set counter *)
        (* Local start time offset *)
        (* Initialize persistent variables if empty *)
        (* '<S2>:1:21' if isempty(bEnableMemory) *)
        (* '<S2>:1:22' if isempty(pointSetNumberMemory) *)
        (* '<S2>:1:24' if isempty(p1Memory) *)
        (* '<S2>:1:25' if isempty(p2Memory) *)
        (* '<S2>:1:26' if isempty(p3Memory) *)
        (* '<S2>:1:27' if isempty(p4Memory) *)
        (* '<S2>:1:29' if isempty(timeSlotsMemory) *)
        (* '<S2>:1:30' if isempty(coeffXMemory) *)
        (* '<S2>:1:31' if isempty(coeffYMemory) *)
        (* '<S2>:1:32' if isempty(coeffZMemory) *)
        (* '<S2>:1:34' if isempty(posRefMemory) *)
        IF  NOT posRefMemory_not_empty THEN 
            (* '<S2>:1:34' , *)
            (* '<S2>:1:34' posRefMemory        = posFeedback; *)
            posRefMemory_not_empty := TRUE;
        END_IF;
        (* '<S2>:1:35' if isempty(velRefMemory) *)
        (* '<S2>:1:36' if isempty(accRefMemory) *)
        (* '<S2>:1:38' if isempty(t0Memory) *)
        (* %% DEFAULT OUTPUTS (if bEnable == false) %%%%%%%%%%%%%%%%%%%%%%%%%%%% *)
        (* Stationary reference at the current feedback position *)
        (* '<S2>:1:42' posRef    = posFeedback; *)
        (* '<S2>:1:43' velRef    = zeros(3,1); *)
        fXDotRef := 0.0;
        fYDotRef := 0.0;
        fZDotRef := 0.0;
        (* Outport: '<Root>/bFinished' incorporates:
         *  MATLAB Function: '<S1>/Quintic' *)
        (* '<S2>:1:44' accRef    = zeros(3,1); *)
        (* '<S2>:1:45' bFinished = true; *)
        bFinished := TRUE;
        (* MATLAB Function: '<S1>/Quintic' incorporates:
         *  SignalConversion: '<S2>/TmpSignal ConversionAt SFunction Inport9' *)
        (* Not actively running any trajectory *)
        (* '<S2>:1:46' bFirsCykle = false; *)
        bFirsCykle := FALSE;
        (* ---------------------------------------------------------------------- *)
        (* 1) CHECK IF DISABLED => Return a stationary reference immediately *)
        (* ---------------------------------------------------------------------- *)
        (* '<S2>:1:50' if ~bEnable *)
        IF  NOT bEnable THEN 
            (* Make sure to remember we are now disabled *)
            (* '<S2>:1:52' bEnableMemory = false; *)
            bEnableMemory := FALSE;
        ELSE 
            (* ---------------------------------------------------------------------- *)
            (* 2) IF WE GET HERE => bEnable == true *)
            (* We want to see if we just transitioned from false->true *)
            (* ---------------------------------------------------------------------- *)
            (* '<S2>:1:60' if bEnable && ~bEnableMemory *)
            IF  NOT bEnableMemory THEN 
                (* Rising edge of bEnable => reset local start time *)
                (* t0Memory = t; *)
                (* '<S2>:1:63' bFirsCykle = true; *)
                bFirsCykle := TRUE;
            END_IF;
            (* Update bEnableMemory to reflect the current state *)
            (* '<S2>:1:67' bEnableMemory = true; *)
            bEnableMemory := TRUE;
            (* ---------------------------------------------------------------------- *)
            (* 3) Check if nPointSetNumber has incremented => new waypoints *)
            (* ---------------------------------------------------------------------- *)
            (* '<S2>:1:72' if nPointSetNumber > pointSetNumberMemory *)
            IF nPointSetNumber > pointSetNumberMemory THEN 
                (* '<S2>:1:73' bNewPointSet = true; *)
                bNewPointSet := TRUE;
                (* '<S2>:1:74' pointSetNumberMemory = nPointSetNumber; *)
                pointSetNumberMemory := nPointSetNumber;
            ELSE 
                (* '<S2>:1:75' else *)
                (* '<S2>:1:76' bNewPointSet = false; *)
                bNewPointSet := FALSE;
            END_IF;
            (* reset local start time *)
            (* '<S2>:1:80' if bFirsCykle | bNewPointSet *)
            IF bFirsCykle OR bNewPointSet THEN 
                (* '<S2>:1:81' t0Memory = t; *)
                t0Memory := fT;
            END_IF;
            (* ---------------------------------------------------------------------- *)
            (* 4) If new points, compute new polynomials *)
            (* We only do this if we are enabled (which we are)  *)
            (* ---------------------------------------------------------------------- *)
            (* '<S2>:1:89' if bNewPointSet *)
            IF bNewPointSet THEN 
                (* Save new waypoints *)
                (* '<S2>:1:91' p1Memory = p1; *)
                (* '<S2>:1:92' p2Memory = p2; *)
                (* '<S2>:1:93' p3Memory = p3; *)
                (* '<S2>:1:94' p4Memory = p4; *)
                (* We can choose velocity/accel for start from the *old* memory  *)
                (* or from zero. Example: from memory *)
                (* '<S2>:1:98' v0x = velRefMemory(1); *)
                (* '<S2>:1:98' a0x = accRefMemory(1); *)
                (* '<S2>:1:99' v0y = velRefMemory(2); *)
                (* '<S2>:1:99' a0y = accRefMemory(2); *)
                (* '<S2>:1:100' v0z = velRefMemory(3); *)
                (* '<S2>:1:100' a0z = accRefMemory(3); *)
                (* Build vectors of 5 points in each dimension *)
                (* Start from the current feedback (or last posRefMemory), *)
                (* but commonly we use posFeedback for a fresh start. *)
                (* '<S2>:1:105' xPoints = [posFeedback(1), p1(1), p2(1), p3(1), p4(1)]; *)
                (* '<S2>:1:106' yPoints = [posFeedback(2), p1(2), p2(2), p3(2), p4(2)]; *)
                (* '<S2>:1:107' zPoints = [posFeedback(3), p1(3), p2(3), p3(3), p4(3)]; *)
                (* Time computations *)
                (* '<S2>:1:110' maxVel3D = maxVel / sqrt(3); *)
                maxVel3D := fMaxVel / 1.7320508075688772;
                (* if you want sqrt(vx^2 + vy^2 + vz^2) = maxVel *)
                (* '<S2>:1:111' dTemp1 = [xPoints(1), yPoints(1), zPoints(1)] - [xPoints(2), yPoints(2), zPoints(2)]; *)
                (* '<S2>:1:112' dTemp2 = [xPoints(2), yPoints(2), zPoints(2)] - [xPoints(3), yPoints(3), zPoints(3)]; *)
                (* '<S2>:1:113' dTemp3 = [xPoints(3), yPoints(3), zPoints(3)] - [xPoints(4), yPoints(4), zPoints(4)]; *)
                (* '<S2>:1:114' dTemp4 = [xPoints(4), yPoints(4), zPoints(4)] - [xPoints(5), yPoints(5), zPoints(5)]; *)
                (* '<S2>:1:116' t1 = norm(dTemp1) / maxVel3D; *)
                xPoints[0] := fXFeedback - p1[0];
                xPoints[1] := fYFeedback - p1[1];
                xPoints[2] := fZFeedback - p1[2];
                t1 := norm(x := xPoints) / maxVel3D;
                (* '<S2>:1:117' t2 = norm(dTemp2) / maxVel3D; *)
                xPoints[0] := p1[0] - p2[0];
                xPoints[1] := p1[1] - p2[1];
                xPoints[2] := p1[2] - p2[2];
                (* '<S2>:1:118' t3 = norm(dTemp3) / maxVel3D; *)
                xPoints_0[0] := p2[0] - p3[0];
                xPoints_0[1] := p2[1] - p3[1];
                xPoints_0[2] := p2[2] - p3[2];
                (* '<S2>:1:119' t4 = norm(dTemp4) / maxVel3D; *)
                (* '<S2>:1:121' timeSlots = [0, t1, t1 + t2, t1 + t2 + t3, t1 + t2 + t3 + t4]; *)
                xPoints_1[0] := p3[0] - p4[0];
                xPoints_1[1] := p3[1] - p4[1];
                xPoints_1[2] := p3[2] - p4[2];
                timeSlotsMemory[0] := 0.0;
                timeSlotsMemory[1] := t1;
                timeSlotsMemory_tmp := t1 + (norm(x := xPoints) / maxVel3D);
                timeSlotsMemory[2] := timeSlotsMemory_tmp;
                timeSlotsMemory_tmp := timeSlotsMemory_tmp + (norm(x := xPoints_0) / maxVel3D);
                timeSlotsMemory[3] := timeSlotsMemory_tmp;
                timeSlotsMemory[4] := timeSlotsMemory_tmp + (norm(x := xPoints_1) / maxVel3D);
                (* '<S2>:1:122' timeSlotsMemory = timeSlots; *)
                (* Compute polynomials (Quintic) *)
                (* '<S2>:1:125' coeffX = Quintic(timeSlots, xPoints, v0x, a0x); *)
                (* 'Quintic:2' A = zeros(18, 18); *)
                FOR i := 0 TO 323 DO 
                    A[i] := 0.0;
                END_FOR;
                (* 'Quintic:3' B = zeros(18,1); *)
                FOR i := 0 TO 17 DO 
                    coeffXMemory[i] := 0.0;
                END_FOR;
                (* 'Quintic:5' A(1, 1:5) = F4(t(1)); *)
                i0_F4(t := 0.0);
                A_tmp := i0_F4.output;
                (* 'Quintic:6' A(2, 1:5) = F4Dot(t(1)); *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                A_tmp_0[0] := 0;
                A_tmp_0[1] := 1;
                A_tmp_0[2] := 0;
                A_tmp_0[3] := 0;
                A_tmp_0[4] := 0;
                (* 'Quintic:7' A(3, 1:5) = F4DotDot(t(1)); *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                A_tmp_1[0] := 0;
                A_tmp_1[1] := 0;
                A_tmp_1[2] := 2;
                A_tmp_1[3] := 0;
                A_tmp_1[4] := 0;
                (* 'Quintic:8' A(4, 1:5) = F4(t(2)); *)
                i0_F4(t := timeSlotsMemory[1]);
                A_tmp_tmp := i0_F4.output;
                (* 'Quintic:9' A(5, 1:5) = F4(t(2)); *)
                FOR i := 0 TO 4 DO 
                    A[18 * i] := A_tmp[i];
                    A[(18 * i) + 1] := SINT_TO_LREAL(A_tmp_0[i]);
                    A[(18 * i) + 2] := SINT_TO_LREAL(A_tmp_1[i]);
                    A_tmp_tmp_0 := A_tmp_tmp[i];
                    A[(18 * i) + 3] := A_tmp_tmp_0;
                    A[(18 * i) + 4] := A_tmp_tmp_0;
                END_FOR;
                (* 'Quintic:9' A(5, 6:9) = -F3(t(2)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                timeSlotsMemory_tmp := EXPT(timeSlotsMemory[1], 3.0);
                A_tmp_idx_2_tmp := timeSlotsMemory[1] * timeSlotsMemory[1];
                A_tmp_idx_3 :=  -timeSlotsMemory_tmp;
                A[94] := -1.0;
                A[112] :=  -timeSlotsMemory[1];
                A[130] :=  -A_tmp_idx_2_tmp;
                A[148] :=  -timeSlotsMemory_tmp;
                (* 'Quintic:10' A(6, 1:5) = F4Dot(t(2)); *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                A_tmp_2[0] := 0.0;
                A_tmp_2[1] := 1.0;
                A_tmp_2[2] := 2.0 * timeSlotsMemory[1];
                A_tmp_tmp_0 := A_tmp_idx_2_tmp * 3.0;
                A_tmp_2[3] := A_tmp_tmp_0;
                A_tmp_2[4] := 4.0 * timeSlotsMemory_tmp;
                FOR i := 0 TO 4 DO 
                    A[(18 * i) + 5] := A_tmp_2[i];
                END_FOR;
                (* 'Quintic:10' A(6, 6:9) = -F3Dot(t(2)); *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                A_tmp_idx_2 :=  -(2.0 * timeSlotsMemory[1]);
                A[95] := -0.0;
                A[113] := -1.0;
                A[131] := A_tmp_idx_2;
                A[149] :=  -A_tmp_tmp_0;
                (* 'Quintic:11' A(7, 1:5) = F4DotDot(t(2)); *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                A_tmp_3[0] := 0.0;
                A_tmp_3[1] := 0.0;
                A_tmp_3[2] := 2.0;
                A_tmp_3[3] := 6.0 * timeSlotsMemory[1];
                A_tmp_3[4] := A_tmp_idx_2_tmp * 12.0;
                FOR i := 0 TO 4 DO 
                    A[(18 * i) + 6] := A_tmp_3[i];
                END_FOR;
                (* 'Quintic:11' A(7, 6:9) = -F3DotDot(t(2)); *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                A_tmp_idx_3_0 :=  -(6.0 * timeSlotsMemory[1]);
                (* 'Quintic:12' A(8, 6:9) = F3(t(3)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                timeSlotsMemory_tmp := EXPT(timeSlotsMemory[2], 3.0);
                A_tmp_idx_2_tmp_0 := timeSlotsMemory[2] * timeSlotsMemory[2];
                A_tmp_idx_3_1 := timeSlotsMemory_tmp;
                (* 'Quintic:13' A(9, 6:9) = F3(t(3)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                (* 'Quintic:13' A(9, 10:13) = -F3(t(3)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                A_tmp_idx_3_2 :=  -timeSlotsMemory_tmp;
                (* 'Quintic:14' A(10, 6:9) = F3Dot(t(3)); *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                A_tmp_idx_2_0 := 2.0 * timeSlotsMemory[2];
                A_tmp_idx_3_tmp := A_tmp_idx_2_tmp_0 * 3.0;
                (* 'Quintic:14' A(10, 10:13) = -F3Dot(t(3)); *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                A_tmp_idx_2_1 :=  -(2.0 * timeSlotsMemory[2]);
                (* 'Quintic:15' A(11, 6:9) = F3DotDot(t(3)); *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                A_tmp_idx_3_3 := 6.0 * timeSlotsMemory[2];
                (* 'Quintic:15' A(11, 10:13) = -F3DotDot(t(3)); *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                A_tmp_idx_3_4 :=  -(6.0 * timeSlotsMemory[2]);
                (* 'Quintic:16' A(12, 10:13) = F3(t(4)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                timeSlotsMemory_tmp := EXPT(timeSlotsMemory[3], 3.0);
                A_tmp_idx_2_tmp_1 := timeSlotsMemory[3] * timeSlotsMemory[3];
                (* 'Quintic:17' A(13, 10:13) = F3(t(4)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                A[96] := -0.0;
                A[97] := 1.0;
                A[98] := 1.0;
                A[170] := -1.0;
                A[99] := 0.0;
                A[171] := -0.0;
                A[100] := 0.0;
                A[172] := -0.0;
                A[173] := 1.0;
                A[174] := 1.0;
                A[114] := -0.0;
                A[115] := timeSlotsMemory[2];
                A[116] := timeSlotsMemory[2];
                A[188] :=  -timeSlotsMemory[2];
                A[117] := 1.0;
                A[189] := -1.0;
                A[118] := 0.0;
                A[190] := -0.0;
                A[191] := timeSlotsMemory[3];
                A[192] := timeSlotsMemory[3];
                A[132] := -2.0;
                A[133] := A_tmp_idx_2_tmp_0;
                A[134] := A_tmp_idx_2_tmp_0;
                A[206] :=  -A_tmp_idx_2_tmp_0;
                A[135] := A_tmp_idx_2_0;
                A[207] := A_tmp_idx_2_1;
                A[136] := 2.0;
                A[208] := -2.0;
                A[209] := A_tmp_idx_2_tmp_1;
                A[210] := A_tmp_idx_2_tmp_1;
                A[150] := A_tmp_idx_3_0;
                A[151] := A_tmp_idx_3_1;
                A[152] := A_tmp_idx_3_1;
                A[224] := A_tmp_idx_3_2;
                A[153] := A_tmp_idx_3_tmp;
                A[225] :=  -A_tmp_idx_3_tmp;
                A[154] := A_tmp_idx_3_3;
                A[226] := A_tmp_idx_3_4;
                A[227] := timeSlotsMemory_tmp;
                A[228] := timeSlotsMemory_tmp;
                (* 'Quintic:17' A(13, 14:18) = -F4(t(4)); *)
                i0_F4(t := timeSlotsMemory[3]);
                A_tmp_5 := i0_F4.output;
                FOR i := 0 TO 4 DO 
                    A_tmp_a :=  -A_tmp_5[i];
                    A_tmp_4[i] := A_tmp_a;
                    A[(18 * (i + 13)) + 12] := A_tmp_a;
                END_FOR;
                (* 'Quintic:18' A(14, 10:13) = F3Dot(t(4)); *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                A_tmp_a := 2.0 * timeSlotsMemory[3];
                A_tmp_idx_3_tmp_0 := A_tmp_idx_2_tmp_1 * 3.0;
                A[175] := 0.0;
                A[193] := 1.0;
                A[211] := A_tmp_a;
                A[229] := A_tmp_idx_3_tmp_0;
                (* 'Quintic:18' A(14, 14:18) = -F4Dot(t(4)); *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                A_tmp_5[0] := -0.0;
                A_tmp_5[1] := -1.0;
                A_tmp_5[2] :=  -(2.0 * timeSlotsMemory[3]);
                A_tmp_5[3] :=  -A_tmp_idx_3_tmp_0;
                A_tmp_5[4] :=  -(4.0 * timeSlotsMemory_tmp);
                FOR i := 0 TO 4 DO 
                    A[(18 * (i + 13)) + 13] := A_tmp_5[i];
                END_FOR;
                (* 'Quintic:19' A(15, 10:13) = F3DotDot(t(4)); *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                A_tmp_idx_3_5 := 6.0 * timeSlotsMemory[3];
                A[176] := 0.0;
                A[194] := 0.0;
                A[212] := 2.0;
                A[230] := A_tmp_idx_3_5;
                (* 'Quintic:19' A(15, 14:18) = -F4DotDot(t(4)); *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                A_tmp_6[0] := -0.0;
                A_tmp_6[1] := -0.0;
                A_tmp_6[2] := -2.0;
                A_tmp_6[3] :=  -(6.0 * timeSlotsMemory[3]);
                A_tmp_6[4] :=  -(A_tmp_idx_2_tmp_1 * 12.0);
                (* 'Quintic:20' A(16, 14:18) = F4(t(5)); *)
                i0_F4(t := timeSlotsMemory[4]);
                A_tmp_7 := i0_F4.output;
                (* 'Quintic:21' A(17, 14:18) = F4Dot(t(5)); *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                A_tmp_8[0] := 0.0;
                A_tmp_8[1] := 1.0;
                A_tmp_8[2] := 2.0 * timeSlotsMemory[4];
                A_tmp_tmp_1 := timeSlotsMemory[4] * timeSlotsMemory[4];
                A_tmp_8[3] := A_tmp_tmp_1 * 3.0;
                A_tmp_8[4] := 4.0 * EXPT(timeSlotsMemory[4], 3.0);
                (* 'Quintic:22' A(18, 14:18) = F4DotDot(t(5)); *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                A_tmp_9[0] := 0.0;
                A_tmp_9[1] := 0.0;
                A_tmp_9[2] := 2.0;
                A_tmp_9[3] := 6.0 * timeSlotsMemory[4];
                A_tmp_9[4] := A_tmp_tmp_1 * 12.0;
                FOR i := 0 TO 4 DO 
                    A_tmp_b := 18 * (i + 13);
                    A[A_tmp_b + 14] := A_tmp_6[i];
                    A[A_tmp_b + 15] := A_tmp_7[i];
                    A[A_tmp_b + 16] := A_tmp_8[i];
                    A[A_tmp_b + 17] := A_tmp_9[i];
                END_FOR;
                (* 'Quintic:24' B(1) = p(1); *)
                coeffXMemory[0] := fXFeedback;
                (* 'Quintic:25' B(2) = v0; *)
                coeffXMemory[1] := velRefMemory[0];
                (* 'Quintic:26' B(3) = acc0; *)
                coeffXMemory[2] := accRefMemory[0];
                (* 'Quintic:27' B(4) = p(2); *)
                coeffXMemory[3] := p1[0];
                (* 'Quintic:28' B(8) = p(3); *)
                coeffXMemory[7] := p2[0];
                (* 'Quintic:29' B(12) = p(4); *)
                coeffXMemory[11] := p3[0];
                (* 'Quintic:30' B(16) = p(5); *)
                coeffXMemory[15] := p4[0];
                (* 'Quintic:32' coeff = A\B; *)
                i0_xgetrfs(A := A, B := coeffXMemory);
                (* '<S2>:1:126' coeffY = Quintic(timeSlots, yPoints, v0y, a0y); *)
                (* 'Quintic:2' A = zeros(18, 18); *)
                FOR i := 0 TO 323 DO 
                    A[i] := 0.0;
                END_FOR;
                (* 'Quintic:3' B = zeros(18,1); *)
                FOR i := 0 TO 17 DO 
                    coeffYMemory[i] := 0.0;
                END_FOR;
                (* 'Quintic:5' A(1, 1:5) = F4(t(1)); *)
                (* 'Quintic:6' A(2, 1:5) = F4Dot(t(1)); *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                (* 'Quintic:7' A(3, 1:5) = F4DotDot(t(1)); *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                (* 'Quintic:8' A(4, 1:5) = F4(t(2)); *)
                (* 'Quintic:9' A(5, 1:5) = F4(t(2)); *)
                FOR i := 0 TO 4 DO 
                    A[18 * i] := A_tmp[i];
                    A[(18 * i) + 1] := SINT_TO_LREAL(A_tmp_0[i]);
                    A[(18 * i) + 2] := SINT_TO_LREAL(A_tmp_1[i]);
                    A_tmp_tmp_1 := A_tmp_tmp[i];
                    A[(18 * i) + 3] := A_tmp_tmp_1;
                    A[(18 * i) + 4] := A_tmp_tmp_1;
                END_FOR;
                (* 'Quintic:9' A(5, 6:9) = -F3(t(2)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                A[94] := -1.0;
                A[112] :=  -timeSlotsMemory[1];
                A[130] :=  -A_tmp_idx_2_tmp;
                A[148] := A_tmp_idx_3;
                (* 'Quintic:10' A(6, 1:5) = F4Dot(t(2)); *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                FOR i := 0 TO 4 DO 
                    A[(18 * i) + 5] := A_tmp_2[i];
                END_FOR;
                (* 'Quintic:10' A(6, 6:9) = -F3Dot(t(2)); *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                A[95] := -0.0;
                A[113] := -1.0;
                A[131] := A_tmp_idx_2;
                A[149] :=  -A_tmp_tmp_0;
                (* 'Quintic:11' A(7, 1:5) = F4DotDot(t(2)); *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                FOR i := 0 TO 4 DO 
                    A[(18 * i) + 6] := A_tmp_3[i];
                END_FOR;
                (* 'Quintic:11' A(7, 6:9) = -F3DotDot(t(2)); *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                (* 'Quintic:12' A(8, 6:9) = F3(t(3)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                (* 'Quintic:13' A(9, 6:9) = F3(t(3)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                (* 'Quintic:13' A(9, 10:13) = -F3(t(3)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                (* 'Quintic:14' A(10, 6:9) = F3Dot(t(3)); *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                (* 'Quintic:14' A(10, 10:13) = -F3Dot(t(3)); *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                (* 'Quintic:15' A(11, 6:9) = F3DotDot(t(3)); *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                (* 'Quintic:15' A(11, 10:13) = -F3DotDot(t(3)); *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                (* 'Quintic:16' A(12, 10:13) = F3(t(4)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                (* 'Quintic:17' A(13, 10:13) = F3(t(4)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                A[96] := -0.0;
                A[97] := 1.0;
                A[98] := 1.0;
                A[170] := -1.0;
                A[99] := 0.0;
                A[171] := -0.0;
                A[100] := 0.0;
                A[172] := -0.0;
                A[173] := 1.0;
                A[174] := 1.0;
                A[114] := -0.0;
                A[115] := timeSlotsMemory[2];
                A[116] := timeSlotsMemory[2];
                A[188] :=  -timeSlotsMemory[2];
                A[117] := 1.0;
                A[189] := -1.0;
                A[118] := 0.0;
                A[190] := -0.0;
                A[191] := timeSlotsMemory[3];
                A[192] := timeSlotsMemory[3];
                A[132] := -2.0;
                A[133] := A_tmp_idx_2_tmp_0;
                A[134] := A_tmp_idx_2_tmp_0;
                A[206] :=  -A_tmp_idx_2_tmp_0;
                A[135] := A_tmp_idx_2_0;
                A[207] := A_tmp_idx_2_1;
                A[136] := 2.0;
                A[208] := -2.0;
                A[209] := A_tmp_idx_2_tmp_1;
                A[210] := A_tmp_idx_2_tmp_1;
                A[150] := A_tmp_idx_3_0;
                A[151] := A_tmp_idx_3_1;
                A[152] := A_tmp_idx_3_1;
                A[224] := A_tmp_idx_3_2;
                A[153] := A_tmp_idx_3_tmp;
                A[225] :=  -A_tmp_idx_3_tmp;
                A[154] := A_tmp_idx_3_3;
                A[226] := A_tmp_idx_3_4;
                A[227] := timeSlotsMemory_tmp;
                A[228] := timeSlotsMemory_tmp;
                (* 'Quintic:17' A(13, 14:18) = -F4(t(4)); *)
                FOR i := 0 TO 4 DO 
                    A[(18 * (i + 13)) + 12] := A_tmp_4[i];
                END_FOR;
                (* 'Quintic:18' A(14, 10:13) = F3Dot(t(4)); *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                A[175] := 0.0;
                A[193] := 1.0;
                A[211] := A_tmp_a;
                A[229] := A_tmp_idx_3_tmp_0;
                (* 'Quintic:18' A(14, 14:18) = -F4Dot(t(4)); *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                FOR i := 0 TO 4 DO 
                    A[(18 * (i + 13)) + 13] := A_tmp_5[i];
                END_FOR;
                (* 'Quintic:19' A(15, 10:13) = F3DotDot(t(4)); *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                A[176] := 0.0;
                A[194] := 0.0;
                A[212] := 2.0;
                A[230] := A_tmp_idx_3_5;
                (* 'Quintic:19' A(15, 14:18) = -F4DotDot(t(4)); *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                (* 'Quintic:20' A(16, 14:18) = F4(t(5)); *)
                (* 'Quintic:21' A(17, 14:18) = F4Dot(t(5)); *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                (* 'Quintic:22' A(18, 14:18) = F4DotDot(t(5)); *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                FOR i := 0 TO 4 DO 
                    A_tmp_b := 18 * (i + 13);
                    A[A_tmp_b + 14] := A_tmp_6[i];
                    A[A_tmp_b + 15] := A_tmp_7[i];
                    A[A_tmp_b + 16] := A_tmp_8[i];
                    A[A_tmp_b + 17] := A_tmp_9[i];
                END_FOR;
                (* 'Quintic:24' B(1) = p(1); *)
                coeffYMemory[0] := fYFeedback;
                (* 'Quintic:25' B(2) = v0; *)
                coeffYMemory[1] := velRefMemory[1];
                (* 'Quintic:26' B(3) = acc0; *)
                coeffYMemory[2] := accRefMemory[1];
                (* 'Quintic:27' B(4) = p(2); *)
                coeffYMemory[3] := p1[1];
                (* 'Quintic:28' B(8) = p(3); *)
                coeffYMemory[7] := p2[1];
                (* 'Quintic:29' B(12) = p(4); *)
                coeffYMemory[11] := p3[1];
                (* 'Quintic:30' B(16) = p(5); *)
                coeffYMemory[15] := p4[1];
                (* 'Quintic:32' coeff = A\B; *)
                i0_xgetrfs(A := A, B := coeffYMemory);
                (* '<S2>:1:127' coeffZ = Quintic(timeSlots, zPoints, v0z, a0z); *)
                (* 'Quintic:2' A = zeros(18, 18); *)
                FOR i := 0 TO 323 DO 
                    A[i] := 0.0;
                END_FOR;
                (* 'Quintic:3' B = zeros(18,1); *)
                FOR i := 0 TO 17 DO 
                    coeffZMemory[i] := 0.0;
                END_FOR;
                (* 'Quintic:5' A(1, 1:5) = F4(t(1)); *)
                (* 'Quintic:6' A(2, 1:5) = F4Dot(t(1)); *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                (* 'Quintic:7' A(3, 1:5) = F4DotDot(t(1)); *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                (* 'Quintic:8' A(4, 1:5) = F4(t(2)); *)
                (* 'Quintic:9' A(5, 1:5) = F4(t(2)); *)
                FOR i := 0 TO 4 DO 
                    A[18 * i] := A_tmp[i];
                    A[(18 * i) + 1] := SINT_TO_LREAL(A_tmp_0[i]);
                    A[(18 * i) + 2] := SINT_TO_LREAL(A_tmp_1[i]);
                    A_tmp_tmp_1 := A_tmp_tmp[i];
                    A[(18 * i) + 3] := A_tmp_tmp_1;
                    A[(18 * i) + 4] := A_tmp_tmp_1;
                END_FOR;
                (* 'Quintic:9' A(5, 6:9) = -F3(t(2)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                A[94] := -1.0;
                A[112] :=  -timeSlotsMemory[1];
                A[130] :=  -A_tmp_idx_2_tmp;
                A[148] := A_tmp_idx_3;
                (* 'Quintic:10' A(6, 1:5) = F4Dot(t(2)); *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                FOR i := 0 TO 4 DO 
                    A[(18 * i) + 5] := A_tmp_2[i];
                END_FOR;
                (* 'Quintic:10' A(6, 6:9) = -F3Dot(t(2)); *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                A[95] := -0.0;
                A[113] := -1.0;
                A[131] := A_tmp_idx_2;
                A[149] :=  -A_tmp_tmp_0;
                (* 'Quintic:11' A(7, 1:5) = F4DotDot(t(2)); *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                FOR i := 0 TO 4 DO 
                    A[(18 * i) + 6] := A_tmp_3[i];
                END_FOR;
                (* 'Quintic:11' A(7, 6:9) = -F3DotDot(t(2)); *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                (* 'Quintic:12' A(8, 6:9) = F3(t(3)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                (* 'Quintic:13' A(9, 6:9) = F3(t(3)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                (* 'Quintic:13' A(9, 10:13) = -F3(t(3)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                (* 'Quintic:14' A(10, 6:9) = F3Dot(t(3)); *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                (* 'Quintic:14' A(10, 10:13) = -F3Dot(t(3)); *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                (* 'Quintic:15' A(11, 6:9) = F3DotDot(t(3)); *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                (* 'Quintic:15' A(11, 10:13) = -F3DotDot(t(3)); *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                (* 'Quintic:16' A(12, 10:13) = F3(t(4)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                (* 'Quintic:17' A(13, 10:13) = F3(t(4)); *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                A[96] := -0.0;
                A[97] := 1.0;
                A[98] := 1.0;
                A[170] := -1.0;
                A[99] := 0.0;
                A[171] := -0.0;
                A[100] := 0.0;
                A[172] := -0.0;
                A[173] := 1.0;
                A[174] := 1.0;
                A[114] := -0.0;
                A[115] := timeSlotsMemory[2];
                A[116] := timeSlotsMemory[2];
                A[188] :=  -timeSlotsMemory[2];
                A[117] := 1.0;
                A[189] := -1.0;
                A[118] := 0.0;
                A[190] := -0.0;
                A[191] := timeSlotsMemory[3];
                A[192] := timeSlotsMemory[3];
                A[132] := -2.0;
                A[133] := A_tmp_idx_2_tmp_0;
                A[134] := A_tmp_idx_2_tmp_0;
                A[206] :=  -A_tmp_idx_2_tmp_0;
                A[135] := A_tmp_idx_2_0;
                A[207] := A_tmp_idx_2_1;
                A[136] := 2.0;
                A[208] := -2.0;
                A[209] := A_tmp_idx_2_tmp_1;
                A[210] := A_tmp_idx_2_tmp_1;
                A[150] := A_tmp_idx_3_0;
                A[151] := A_tmp_idx_3_1;
                A[152] := A_tmp_idx_3_1;
                A[224] := A_tmp_idx_3_2;
                A[153] := A_tmp_idx_3_tmp;
                A[225] :=  -A_tmp_idx_3_tmp;
                A[154] := A_tmp_idx_3_3;
                A[226] := A_tmp_idx_3_4;
                A[227] := timeSlotsMemory_tmp;
                A[228] := timeSlotsMemory_tmp;
                (* 'Quintic:17' A(13, 14:18) = -F4(t(4)); *)
                FOR i := 0 TO 4 DO 
                    A[(18 * (i + 13)) + 12] := A_tmp_4[i];
                END_FOR;
                (* 'Quintic:18' A(14, 10:13) = F3Dot(t(4)); *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                A[175] := 0.0;
                A[193] := 1.0;
                A[211] := A_tmp_a;
                A[229] := A_tmp_idx_3_tmp_0;
                (* 'Quintic:18' A(14, 14:18) = -F4Dot(t(4)); *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                FOR i := 0 TO 4 DO 
                    A[(18 * (i + 13)) + 13] := A_tmp_5[i];
                END_FOR;
                (* 'Quintic:19' A(15, 10:13) = F3DotDot(t(4)); *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                A[176] := 0.0;
                A[194] := 0.0;
                A[212] := 2.0;
                A[230] := A_tmp_idx_3_5;
                (* 'Quintic:19' A(15, 14:18) = -F4DotDot(t(4)); *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                (* 'Quintic:20' A(16, 14:18) = F4(t(5)); *)
                (* 'Quintic:21' A(17, 14:18) = F4Dot(t(5)); *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                (* 'Quintic:22' A(18, 14:18) = F4DotDot(t(5)); *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                FOR i := 0 TO 4 DO 
                    A_tmp_b := 18 * (i + 13);
                    A[A_tmp_b + 14] := A_tmp_6[i];
                    A[A_tmp_b + 15] := A_tmp_7[i];
                    A[A_tmp_b + 16] := A_tmp_8[i];
                    A[A_tmp_b + 17] := A_tmp_9[i];
                END_FOR;
                (* 'Quintic:24' B(1) = p(1); *)
                coeffZMemory[0] := fZFeedback;
                (* 'Quintic:25' B(2) = v0; *)
                coeffZMemory[1] := velRefMemory[2];
                (* 'Quintic:26' B(3) = acc0; *)
                coeffZMemory[2] := accRefMemory[2];
                (* 'Quintic:27' B(4) = p(2); *)
                coeffZMemory[3] := p1[2];
                (* 'Quintic:28' B(8) = p(3); *)
                coeffZMemory[7] := p2[2];
                (* 'Quintic:29' B(12) = p(4); *)
                coeffZMemory[11] := p3[2];
                (* 'Quintic:30' B(16) = p(5); *)
                coeffZMemory[15] := p4[2];
                (* 'Quintic:32' coeff = A\B; *)
                i0_xgetrfs(A := A, B := coeffZMemory);
                (* '<S2>:1:129' coeffXMemory = coeffX; *)
                (* '<S2>:1:130' coeffYMemory = coeffY; *)
                (* '<S2>:1:131' coeffZMemory = coeffZ; *)
            END_IF;
            (* ---------------------------------------------------------------------- *)
            (* 5) Evaluate polynomials at local time => tLocal = t - t0Memory *)
            (* ---------------------------------------------------------------------- *)
            (* '<S2>:1:137' tLocal = t - t0Memory; *)
            tLocal := fT - t0Memory;
            (* If local time is beyond the final timeSlot => clamp & declare finished *)
            (* '<S2>:1:140' timeSlots = timeSlotsMemory; *)
            (* '<S2>:1:141' if tLocal >= timeSlots(end) *)
            IF tLocal >= timeSlotsMemory[4] THEN 
                (* '<S2>:1:142' tLocal = timeSlots(end); *)
                tLocal := timeSlotsMemory[4];
                (* '<S2>:1:143' bFinished = true; *)
            ELSE 
                (* Outport: '<Root>/bFinished' *)
                (* '<S2>:1:144' else *)
                (* '<S2>:1:145' bFinished = false; *)
                bFinished := FALSE;
            END_IF;
            (* Retrieve precomputed coefficients *)
            (* '<S2>:1:149' coeffX = coeffXMemory; *)
            (* '<S2>:1:150' coeffY = coeffYMemory; *)
            (* '<S2>:1:151' coeffZ = coeffZMemory; *)
            (* Decide which segment to evaluate *)
            (* '<S2>:1:154' if tLocal < timeSlots(2) *)
            IF tLocal < timeSlotsMemory[1] THEN 
                (* Segment 1 (4th order) *)
                (* '<S2>:1:156' posRef = [F4(tLocal)*coeffX(1:5); *)
                (* '<S2>:1:157'                   F4(tLocal)*coeffY(1:5); *)
                (* '<S2>:1:158'                   F4(tLocal)*coeffZ(1:5)]; *)
                i0_F4(t := tLocal);
                A_tmp := i0_F4.output;
                fXRef := 0.0;
                fYRef := 0.0;
                fZRef := 0.0;
                FOR i := 0 TO 4 DO 
                    timeSlotsMemory_tmp := A_tmp[i];
                    fXRef := (timeSlotsMemory_tmp * coeffXMemory[i]) + fXRef;
                    fYRef := (timeSlotsMemory_tmp * coeffYMemory[i]) + fYRef;
                    fZRef := (timeSlotsMemory_tmp * coeffZMemory[i]) + fZRef;
                END_FOR;
                (* '<S2>:1:160' velRef = [F4Dot(tLocal)*coeffX(1:5); *)
                (* '<S2>:1:161'                   F4Dot(tLocal)*coeffY(1:5); *)
                (* '<S2>:1:162'                   F4Dot(tLocal)*coeffZ(1:5)]; *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                A_tmp_5[0] := 0.0;
                A_tmp_5[1] := 1.0;
                A_tmp_5[2] := 2.0 * tLocal;
                A_tmp_idx_2_tmp := tLocal * tLocal;
                timeSlotsMemory_tmp := A_tmp_idx_2_tmp * 3.0;
                A_tmp_5[3] := timeSlotsMemory_tmp;
                A_tmp_tmp_0 := 4.0 * EXPT(tLocal, 3.0);
                A_tmp_5[4] := A_tmp_tmp_0;
                fXDotRef := 0.0;
                FOR i := 0 TO 4 DO 
                    fXDotRef := (A_tmp_5[i] * coeffXMemory[i]) + fXDotRef;
                END_FOR;
                A_tmp_5[0] := 0.0;
                A_tmp_5[1] := 1.0;
                A_tmp_5[2] := 2.0 * tLocal;
                A_tmp_5[3] := timeSlotsMemory_tmp;
                A_tmp_5[4] := A_tmp_tmp_0;
                fYDotRef := 0.0;
                FOR i := 0 TO 4 DO 
                    fYDotRef := (A_tmp_5[i] * coeffYMemory[i]) + fYDotRef;
                END_FOR;
                A_tmp_5[0] := 0.0;
                A_tmp_5[1] := 1.0;
                A_tmp_5[2] := 2.0 * tLocal;
                A_tmp_5[3] := timeSlotsMemory_tmp;
                A_tmp_5[4] := A_tmp_tmp_0;
                fZDotRef := 0.0;
                FOR i := 0 TO 4 DO 
                    fZDotRef := (A_tmp_5[i] * coeffZMemory[i]) + fZDotRef;
                END_FOR;
                (* '<S2>:1:164' accRef = [F4DotDot(tLocal)*coeffX(1:5); *)
                (* '<S2>:1:165'                   F4DotDot(tLocal)*coeffY(1:5); *)
                (* '<S2>:1:166'                   F4DotDot(tLocal)*coeffZ(1:5)]; *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                A_tmp_5[0] := 0.0;
                A_tmp_5[1] := 0.0;
                A_tmp_5[2] := 2.0;
                A_tmp_5[3] := 6.0 * tLocal;
                timeSlotsMemory_tmp := A_tmp_idx_2_tmp * 12.0;
                A_tmp_5[4] := timeSlotsMemory_tmp;
                A_tmp_tmp_0 := 0.0;
                FOR i := 0 TO 4 DO 
                    A_tmp_tmp_0 := (A_tmp_5[i] * coeffXMemory[i]) + A_tmp_tmp_0;
                END_FOR;
                A_tmp_5[0] := 0.0;
                A_tmp_5[1] := 0.0;
                A_tmp_5[2] := 2.0;
                A_tmp_5[3] := 6.0 * tLocal;
                A_tmp_5[4] := timeSlotsMemory_tmp;
                A_tmp_idx_2_tmp := 0.0;
                FOR i := 0 TO 4 DO 
                    A_tmp_idx_2_tmp := (A_tmp_5[i] * coeffYMemory[i]) + A_tmp_idx_2_tmp;
                END_FOR;
                A_tmp_5[0] := 0.0;
                A_tmp_5[1] := 0.0;
                A_tmp_5[2] := 2.0;
                A_tmp_5[3] := 6.0 * tLocal;
                A_tmp_5[4] := timeSlotsMemory_tmp;
                timeSlotsMemory_tmp := 0.0;
                FOR i := 0 TO 4 DO 
                    timeSlotsMemory_tmp := (A_tmp_5[i] * coeffZMemory[i]) + timeSlotsMemory_tmp;
                END_FOR;
                accRefMemory[0] := A_tmp_tmp_0;
                accRefMemory[1] := A_tmp_idx_2_tmp;
                accRefMemory[2] := timeSlotsMemory_tmp;
            ELSIF tLocal < timeSlotsMemory[2] THEN 
                (* '<S2>:1:168' elseif tLocal < timeSlots(3) *)
                (* Segment 2 (3rd order) *)
                (* '<S2>:1:170' posRef = [F3(tLocal)*coeffX(6:9); *)
                (* '<S2>:1:171'                   F3(tLocal)*coeffY(6:9); *)
                (* '<S2>:1:172'                   F3(tLocal)*coeffZ(6:9)]; *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                timeSlotsMemory_tmp := tLocal * tLocal;
                A_tmp_tmp_0 := EXPT(tLocal, 3.0);
                (* Outport: '<Root>/fXRef' *)
                fXRef := (((tLocal * coeffXMemory[6]) + coeffXMemory[5]) + (timeSlotsMemory_tmp * coeffXMemory[7])) + (A_tmp_tmp_0 * coeffXMemory[8]);
                (* Outport: '<Root>/fYRef' *)
                fYRef := (((tLocal * coeffYMemory[6]) + coeffYMemory[5]) + (timeSlotsMemory_tmp * coeffYMemory[7])) + (A_tmp_tmp_0 * coeffYMemory[8]);
                (* Outport: '<Root>/fZRef' *)
                fZRef := (((tLocal * coeffZMemory[6]) + coeffZMemory[5]) + (timeSlotsMemory_tmp * coeffZMemory[7])) + (A_tmp_tmp_0 * coeffZMemory[8]);
                (* '<S2>:1:174' velRef = [F3Dot(tLocal)*coeffX(6:9); *)
                (* '<S2>:1:175'                   F3Dot(tLocal)*coeffY(6:9); *)
                (* '<S2>:1:176'                   F3Dot(tLocal)*coeffZ(6:9)]; *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                timeSlotsMemory_tmp := timeSlotsMemory_tmp * 3.0;
                fXDotRef := (((2.0 * tLocal) * coeffXMemory[7]) + coeffXMemory[6]) + (timeSlotsMemory_tmp * coeffXMemory[8]);
                fYDotRef := (((2.0 * tLocal) * coeffYMemory[7]) + coeffYMemory[6]) + (timeSlotsMemory_tmp * coeffYMemory[8]);
                fZDotRef := (((2.0 * tLocal) * coeffZMemory[7]) + coeffZMemory[6]) + (timeSlotsMemory_tmp * coeffZMemory[8]);
                (* '<S2>:1:178' accRef = [F3DotDot(tLocal)*coeffX(6:9); *)
                (* '<S2>:1:179'                   F3DotDot(tLocal)*coeffY(6:9); *)
                (* '<S2>:1:180'                   F3DotDot(tLocal)*coeffZ(6:9)]; *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                accRefMemory[0] := ((6.0 * tLocal) * coeffXMemory[8]) + (2.0 * coeffXMemory[7]);
                accRefMemory[1] := ((6.0 * tLocal) * coeffYMemory[8]) + (2.0 * coeffYMemory[7]);
                accRefMemory[2] := ((6.0 * tLocal) * coeffZMemory[8]) + (2.0 * coeffZMemory[7]);
            ELSIF tLocal < timeSlotsMemory[3] THEN 
                (* '<S2>:1:182' elseif tLocal < timeSlots(4) *)
                (* Segment 3 (3rd order) *)
                (* '<S2>:1:184' posRef = [F3(tLocal)*coeffX(10:13); *)
                (* '<S2>:1:185'                   F3(tLocal)*coeffY(10:13); *)
                (* '<S2>:1:186'                   F3(tLocal)*coeffZ(10:13)]; *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                (* 'F3:2' output = [1 t t^2 t^3]; *)
                timeSlotsMemory_tmp := tLocal * tLocal;
                A_tmp_tmp_0 := EXPT(tLocal, 3.0);
                (* Outport: '<Root>/fXRef' *)
                fXRef := (((tLocal * coeffXMemory[10]) + coeffXMemory[9]) + (timeSlotsMemory_tmp * coeffXMemory[11])) + (A_tmp_tmp_0 * coeffXMemory[12]);
                (* Outport: '<Root>/fYRef' *)
                fYRef := (((tLocal * coeffYMemory[10]) + coeffYMemory[9]) + (timeSlotsMemory_tmp * coeffYMemory[11])) + (A_tmp_tmp_0 * coeffYMemory[12]);
                (* Outport: '<Root>/fZRef' *)
                fZRef := (((tLocal * coeffZMemory[10]) + coeffZMemory[9]) + (timeSlotsMemory_tmp * coeffZMemory[11])) + (A_tmp_tmp_0 * coeffZMemory[12]);
                (* '<S2>:1:188' velRef = [F3Dot(tLocal)*coeffX(10:13); *)
                (* '<S2>:1:189'                   F3Dot(tLocal)*coeffY(10:13); *)
                (* '<S2>:1:190'                   F3Dot(tLocal)*coeffZ(10:13)]; *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                (* 'F3Dot:2' output = [0 1 2*t 3*t^2]; *)
                timeSlotsMemory_tmp := (tLocal * tLocal) * 3.0;
                fXDotRef := (((2.0 * tLocal) * coeffXMemory[11]) + coeffXMemory[10]) + (timeSlotsMemory_tmp * coeffXMemory[12]);
                fYDotRef := (((2.0 * tLocal) * coeffYMemory[11]) + coeffYMemory[10]) + (timeSlotsMemory_tmp * coeffYMemory[12]);
                fZDotRef := (((2.0 * tLocal) * coeffZMemory[11]) + coeffZMemory[10]) + (timeSlotsMemory_tmp * coeffZMemory[12]);
                (* '<S2>:1:192' accRef = [F3DotDot(tLocal)*coeffX(10:13); *)
                (* '<S2>:1:193'                   F3DotDot(tLocal)*coeffY(10:13); *)
                (* '<S2>:1:194'                   F3DotDot(tLocal)*coeffZ(10:13)]; *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                (* 'F3DotDot:2' output = [0 0 2 6*t]; *)
                accRefMemory[0] := ((6.0 * tLocal) * coeffXMemory[12]) + (2.0 * coeffXMemory[11]);
                accRefMemory[1] := ((6.0 * tLocal) * coeffYMemory[12]) + (2.0 * coeffYMemory[11]);
                accRefMemory[2] := ((6.0 * tLocal) * coeffZMemory[12]) + (2.0 * coeffZMemory[11]);
            ELSE 
                (* '<S2>:1:196' else *)
                (* Segment 4 (4th order) *)
                (* '<S2>:1:198' posRef = [F4(tLocal)*coeffX(14:18); *)
                (* '<S2>:1:199'                   F4(tLocal)*coeffY(14:18); *)
                (* '<S2>:1:200'                   F4(tLocal)*coeffZ(14:18)]; *)
                i0_F4(t := tLocal);
                A_tmp_5 := i0_F4.output;
                fXRef := 0.0;
                FOR i := 0 TO 4 DO 
                    fXRef := (coeffXMemory[i + 13] * A_tmp_5[i]) + fXRef;
                END_FOR;
                i0_F4(t := tLocal);
                A_tmp_5 := i0_F4.output;
                fYRef := 0.0;
                FOR i := 0 TO 4 DO 
                    fYRef := (coeffYMemory[i + 13] * A_tmp_5[i]) + fYRef;
                END_FOR;
                i0_F4(t := tLocal);
                A_tmp_5 := i0_F4.output;
                fZRef := 0.0;
                FOR i := 0 TO 4 DO 
                    fZRef := (coeffZMemory[i + 13] * A_tmp_5[i]) + fZRef;
                END_FOR;
                (* '<S2>:1:202' velRef = [F4Dot(tLocal)*coeffX(14:18); *)
                (* '<S2>:1:203'                   F4Dot(tLocal)*coeffY(14:18); *)
                (* '<S2>:1:204'                   F4Dot(tLocal)*coeffZ(14:18)]; *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                (* 'F4Dot:2' output = [0 1 2*t 3*t^2 4*t^3]; *)
                A_tmp_5[0] := 0.0;
                A_tmp_5[1] := 1.0;
                A_tmp_5[2] := 2.0 * tLocal;
                timeSlotsMemory_tmp := (tLocal * tLocal) * 3.0;
                A_tmp_5[3] := timeSlotsMemory_tmp;
                A_tmp_tmp_0 := 4.0 * EXPT(tLocal, 3.0);
                A_tmp_5[4] := A_tmp_tmp_0;
                fXDotRef := 0.0;
                FOR i := 0 TO 4 DO 
                    fXDotRef := (coeffXMemory[i + 13] * A_tmp_5[i]) + fXDotRef;
                END_FOR;
                A_tmp_5[0] := 0.0;
                A_tmp_5[1] := 1.0;
                A_tmp_5[2] := 2.0 * tLocal;
                A_tmp_5[3] := timeSlotsMemory_tmp;
                A_tmp_5[4] := A_tmp_tmp_0;
                fYDotRef := 0.0;
                FOR i := 0 TO 4 DO 
                    fYDotRef := (coeffYMemory[i + 13] * A_tmp_5[i]) + fYDotRef;
                END_FOR;
                A_tmp_5[0] := 0.0;
                A_tmp_5[1] := 1.0;
                A_tmp_5[2] := 2.0 * tLocal;
                A_tmp_5[3] := timeSlotsMemory_tmp;
                A_tmp_5[4] := A_tmp_tmp_0;
                fZDotRef := 0.0;
                FOR i := 0 TO 4 DO 
                    fZDotRef := (coeffZMemory[i + 13] * A_tmp_5[i]) + fZDotRef;
                END_FOR;
                (* '<S2>:1:206' accRef = [F4DotDot(tLocal)*coeffX(14:18); *)
                (* '<S2>:1:207'                   F4DotDot(tLocal)*coeffY(14:18); *)
                (* '<S2>:1:208'                   F4DotDot(tLocal)*coeffZ(14:18)]; *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                (* 'F4DotDot:2' output = [0 0 2 6*t 12*t^2]; *)
                A_tmp_5[0] := 0.0;
                A_tmp_5[1] := 0.0;
                A_tmp_5[2] := 2.0;
                A_tmp_5[3] := 6.0 * tLocal;
                timeSlotsMemory_tmp := (tLocal * tLocal) * 12.0;
                A_tmp_5[4] := timeSlotsMemory_tmp;
                A_tmp_tmp_0 := 0.0;
                FOR i := 0 TO 4 DO 
                    A_tmp_tmp_0 := (coeffXMemory[i + 13] * A_tmp_5[i]) + A_tmp_tmp_0;
                END_FOR;
                A_tmp_5[0] := 0.0;
                A_tmp_5[1] := 0.0;
                A_tmp_5[2] := 2.0;
                A_tmp_5[3] := 6.0 * tLocal;
                A_tmp_5[4] := timeSlotsMemory_tmp;
                A_tmp_idx_2_tmp := 0.0;
                FOR i := 0 TO 4 DO 
                    A_tmp_idx_2_tmp := (coeffYMemory[i + 13] * A_tmp_5[i]) + A_tmp_idx_2_tmp;
                END_FOR;
                A_tmp_5[0] := 0.0;
                A_tmp_5[1] := 0.0;
                A_tmp_5[2] := 2.0;
                A_tmp_5[3] := 6.0 * tLocal;
                A_tmp_5[4] := timeSlotsMemory_tmp;
                timeSlotsMemory_tmp := 0.0;
                FOR i := 0 TO 4 DO 
                    timeSlotsMemory_tmp := (coeffZMemory[i + 13] * A_tmp_5[i]) + timeSlotsMemory_tmp;
                END_FOR;
                accRefMemory[0] := A_tmp_tmp_0;
                accRefMemory[1] := A_tmp_idx_2_tmp;
                accRefMemory[2] := timeSlotsMemory_tmp;
            END_IF;
            (* ---------------------------------------------------------------------- *)
            (* 6) Save references to memory for next cycle *)
            (* ---------------------------------------------------------------------- *)
            (* '<S2>:1:214' posRefMemory = posRef; *)
            (* '<S2>:1:215' velRefMemory = velRef; *)
            velRefMemory[0] := fXDotRef;
            velRefMemory[1] := fYDotRef;
            velRefMemory[2] := fZDotRef;
            (* '<S2>:1:216' accRefMemory = accRef; *)
        END_IF;
        (* End of Outputs for SubSystem: '<Root>/FB_QuinticPathPlanner' *)
END_CASE;
END_FUNCTION_BLOCK
FUNCTION_BLOCK xgetrfs
VAR_OUTPUT
    info: DINT;
END_VAR
VAR_IN_OUT
    A: ARRAY [0..323] OF LREAL;
    B: ARRAY [0..17] OF LREAL;
END_VAR
VAR_TEMP
    ipiv: ARRAY [0..17] OF SINT;
    jj: DINT;
    j: DINT;
    ix: DINT;
    smax: LREAL;
    b_s: LREAL;
    b_ix: DINT;
    jA: DINT;
    c_ix: DINT;
    b_d: DINT;
    ijA: DINT;
    ipiv_0: SINT;
END_VAR
FOR j := 0 TO 17 DO 
    ipiv[j] := DINT_TO_SINT(j + 1);
END_FOR;
info := 0;
FOR j := 0 TO 16 DO 
    jj := j * 19;
    jA := 0;
    ix := jj;
    smax := ABS(A[jj]);
    b_ix := 2;
    WHILE b_ix <= (18 - j) DO
        ix := ix + 1;
        b_s := ABS(A[ix]);
        IF b_s > smax THEN 
            jA := b_ix - 1;
            smax := b_s;
        END_IF;
        b_ix := b_ix + 1;
    END_WHILE;
    IF A[jj + jA] <> 0.0 THEN 
        IF jA <> 0 THEN 
            ix := j + jA;
            ipiv[j] := DINT_TO_SINT(ix + 1);
            FOR jA := 0 TO 17 DO 
                b_ix := (jA * 18) + j;
                smax := A[b_ix];
                A[b_ix] := A[(jA * 18) + ix];
                A[ix + (jA * 18)] := smax;
            END_FOR;
        END_IF;
        jA := (jj - j) + 18;
        ix := jj + 1;
        WHILE (ix + 1) <= jA DO
            A[ix] := A[ix] / A[jj];
            ix := ix + 1;
        END_WHILE;
    ELSE 
        info := j + 1;
    END_IF;
    jA := jj;
    ix := jj + 18;
    b_ix := 0;
    WHILE b_ix <= (16 - j) DO
        IF A[ix] <> 0.0 THEN 
            smax :=  -A[ix];
            c_ix := jj + 1;
            ijA := jA + 19;
            b_d := (jA - j) + 36;
            WHILE (ijA + 1) <= b_d DO
                A[ijA] := (A[c_ix] * smax) + A[ijA];
                c_ix := c_ix + 1;
                ijA := ijA + 1;
            END_WHILE;
        END_IF;
        ix := ix + 18;
        jA := jA + 18;
        b_ix := b_ix + 1;
    END_WHILE;
END_FOR;
IF info = 0 THEN 
    IF A[323] = 0.0 THEN 
        info := 18;
    END_IF;
END_IF;
FOR j := 0 TO 16 DO 
    ipiv_0 := ipiv[j];
    IF (j + 1) <> SINT_TO_DINT(ipiv_0) THEN 
        smax := B[j];
        B[j] := B[SINT_TO_DINT(ipiv_0) - 1];
        B[SINT_TO_DINT(ipiv_0) - 1] := smax;
    END_IF;
END_FOR;
FOR j := 0 TO 17 DO 
    jj := 18 * j;
    IF B[j] <> 0.0 THEN 
        jA := j + 1;
        WHILE (jA + 1) < 19 DO
            B[jA] := B[jA] - (A[jA + jj] * B[j]);
            jA := jA + 1;
        END_WHILE;
    END_IF;
END_FOR;
FOR j := 17 TO 0 BY -1 DO 
    jj := 18 * j;
    smax := B[j];
    IF smax <> 0.0 THEN 
        B[j] := smax / A[j + jj];
        jA := 0;
        WHILE jA <= (j - 1) DO
            B[jA] := B[jA] - (A[jA + jj] * B[j]);
            jA := jA + 1;
        END_WHILE;
    END_IF;
END_FOR;
END_FUNCTION_BLOCK
FUNCTION norm: LREAL
VAR_INPUT
    x: ARRAY [0..2] OF LREAL;
END_VAR
VAR_TEMP
    scale: LREAL;
    absxk: LREAL;
    t: LREAL;
END_VAR
scale := 3.3121686421112381E-170;
absxk := ABS(x[0]);
IF absxk > 3.3121686421112381E-170 THEN 
    norm := 1.0;
    scale := absxk;
ELSE 
    t := absxk / 3.3121686421112381E-170;
    norm := t * t;
END_IF;
absxk := ABS(x[1]);
IF absxk > scale THEN 
    t := scale / absxk;
    norm := ((norm * t) * t) + 1.0;
    scale := absxk;
ELSE 
    t := absxk / scale;
    norm := (t * t) + norm;
END_IF;
absxk := ABS(x[2]);
IF absxk > scale THEN 
    t := scale / absxk;
    norm := ((norm * t) * t) + 1.0;
    scale := absxk;
ELSE 
    t := absxk / scale;
    norm := (t * t) + norm;
END_IF;
norm := scale * SQRT(norm);
END_FUNCTION
FUNCTION_BLOCK F4
VAR_INPUT
    t: LREAL;
END_VAR
VAR_OUTPUT
    output: ARRAY [0..4] OF LREAL;
END_VAR
(* 'F4:2' output = [1 t t.^2 t.^3 t.^4]; *)
output[0] := 1.0;
output[1] := t;
output[2] := t * t;
output[3] := EXPT(t, 3.0);
output[4] := EXPT(t, 4.0);
END_FUNCTION_BLOCK
VAR_GLOBAL CONSTANT
    SS_INITIALIZE: SINT := 0;
    SS_STEP: SINT := 1;
END_VAR
