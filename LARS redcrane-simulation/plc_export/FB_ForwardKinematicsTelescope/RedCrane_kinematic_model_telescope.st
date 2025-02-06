(*
 *
 * File: RedCrane_kinematic_model_telescope.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "RedCrane_kinematic_model_telescope/FB_ForwardKinematicsTelescope"
 *
 * Model name                      : RedCrane_kinematic_model_telescope
 * Model version                   : 2.95
 * Model creator                   : sindr
 * Model last modified by          : larso
 * Model last modified on          : Tue Jan 28 15:21:18 2025
 * Model sample time               : 0.001s
 * Subsystem name                  : RedCrane_kinematic_model_telescope/FB_ForwardKinematicsTelescope
 * Subsystem sample time           : 0.001s
 * Simulink PLC Coder version      : 24.1 (R2024a) 19-Nov-2023
 * ST code generated on            : Tue Jan 28 15:28:52 2025
 *
 * Target IDE selection            : Beckhoff TwinCAT 3
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK c_FB_ForwardKinematicsTeles
VAR_INPUT
    fSlewAngle: LREAL;
    fMainAngle: LREAL;
    fKnuckleAngle: LREAL;
    fTelescopePos: LREAL;
END_VAR
VAR_OUTPUT
    fX: LREAL;
    fY: LREAL;
    fZ: LREAL;
END_VAR
VAR
    g: ARRAY [0..14] OF SINT := 0,0,1,0,-1,0,0,-1,0,0,1,0,0,0,1;
    e_a: ARRAY [0..8] OF SINT := 1,0,0,0,1,0,0,0,1;
END_VAR
VAR_TEMP
    T: ARRAY [0..15] OF LREAL;
    Slist: ARRAY [0..29] OF LREAL;
    i: DINT;
    se3mat: ARRAY [0..15] OF LREAL;
    omgmat: ARRAY [0..8] OF LREAL;
    a: ARRAY [0..15] OF LREAL;
    c_a: LREAL;
    V: ARRAY [0..5] OF LREAL;
    b_R: ARRAY [0..8] OF LREAL;
    b_omgmat: ARRAY [0..8] OF LREAL;
    b_I: ARRAY [0..8] OF SINT;
    c_rtb_TmpSignalConversionAt: ARRAY [0..2] OF LREAL;
    qs4_tmp: ARRAY [0..2] OF LREAL;
    d_rtb_TmpSignalConversionAt: LREAL;
    a_0: ARRAY [0..15] OF LREAL;
    i_0: DINT;
    omgmat_tmp: DINT;
    R_tmp: DINT;
    c_a_tmp: LREAL;
    b_a_tmp: LREAL;
END_VAR
(* Outputs for Atomic SubSystem: '<Root>/FB_ForwardKinematicsTelescope' *)
(* SignalConversion: '<S2>/TmpSignal ConversionAt SFunction Inport1' incorporates:
 *  MATLAB Function: '<S1>/MATLAB Function' *)
c_rtb_TmpSignalConversionAt[0] := fSlewAngle;
c_rtb_TmpSignalConversionAt[1] := fMainAngle;
c_rtb_TmpSignalConversionAt[2] := fKnuckleAngle;
(* End of Outputs for SubSystem: '<Root>/FB_ForwardKinematicsTelescope' *)
(* Deffine zero configuration trasform and screw axis with telescope *)
(* Lengths *)
(* MATLAB Function 'FB_ForwardKinematicsTelescope/MATLAB Function': '<S2>:1' *)
(* '<S2>:1:5' L1 = 250/1000; *)
(* '<S2>:1:6' L2 = 1568.50/1000; *)
(* '<S2>:1:7' L3 = 69.97/1000; *)
(* '<S2>:1:8' L4 = 2400/1000; *)
(* '<S2>:1:9' L5 = 2428.99/1000; *)
(* '<S2>:1:10' L6 = 92.52/1000; *)
(* '<S2>:1:11' L7 = 336.2/1000; *)
(* Adjusting L5 based on telescope extention: *)
(* '<S2>:1:14' L5 = L5 + xTele; *)
(* zero configuration trasform *)
(* '<S2>:1:17' M = [1, 0, 0, (L5 + L4 - L1); *)
(* '<S2>:1:18'     0, 1, 0 (L7); *)
(* '<S2>:1:19'     0, 0, 1, (L2+ L3 - L6); *)
(* '<S2>:1:20'     0, 0, 0, 1]; *)
(* Outputs for Atomic SubSystem: '<Root>/FB_ForwardKinematicsTelescope' *)
(* MATLAB Function: '<S1>/MATLAB Function' *)
T[0] := 1.0;
T[4] := 0.0;
T[8] := 0.0;
T[12] := ((fTelescopePos + 2.4289899999999998) + 2.4) - 0.25;
T[1] := 0.0;
T[2] := 0.0;
T[3] := 0.0;
T[5] := 1.0;
T[6] := 0.0;
T[7] := 0.0;
T[9] := 0.0;
T[10] := 1.0;
T[11] := 0.0;
T[13] := 0.3362;
T[14] := 1.5459500000000002;
T[15] := 1.0;
(* End of Outputs for SubSystem: '<Root>/FB_ForwardKinematicsTelescope' *)
(* screw axis *)
(* '<S2>:1:23' ws1 = [0, 0, 1]'; *)
(* '<S2>:1:24' ws2 = [0, -1, 0]'; *)
(* '<S2>:1:25' ws3 = [0, -1, 0]'; *)
(* '<S2>:1:26' ws4 = [0, 1, 0]'; *)
(* '<S2>:1:27' ws5 = [0, 0, 1]'; *)
(* coordinates of an arbitrary point along the screw axis *)
(* '<S2>:1:30' qs1 = [0, 0, 0]'; *)
(* '<S2>:1:31' qs2 = [-L1, 0, L2]'; *)
(* '<S2>:1:32' qs3 = [(L4 - L1), 0, (L2 + L3)]'; *)
(* '<S2>:1:33' qs4 = [(L5 + L4 - L1), L7, (L2 + L3 - L6)]'; *)
(* '<S2>:1:34' qs5 = qs4; *)
(* Building screw axis matrix *)
(* '<S2>:1:37' ws_mat = [ws1, ws2, ws3, ws4, ws5]; *)
(* '<S2>:1:38' vs_mat = [cross(qs1, ws1), cross(qs2, ws2), ... *)
(* '<S2>:1:39'           cross(qs3, ws3), cross(qs4, ws4), ... *)
(* '<S2>:1:40'           cross(qs5, ws5)]; *)
(* '<S2>:1:42' SList = [ws_mat; *)
(* '<S2>:1:43'     vs_mat]; *)
(* Outputs for Atomic SubSystem: '<Root>/FB_ForwardKinematicsTelescope' *)
(* MATLAB Function: '<S1>/MATLAB Function' *)
FOR i_0 := 0 TO 4 DO 
    Slist[6 * i_0] := SINT_TO_LREAL(g[3 * i_0]);
    Slist[(6 * i_0) + 1] := SINT_TO_LREAL(g[(3 * i_0) + 1]);
    Slist[(6 * i_0) + 2] := SINT_TO_LREAL(g[(3 * i_0) + 2]);
END_FOR;
Slist[3] := 0.0;
Slist[9] := 1.5685;
Slist[15] := 1.63847;
Slist[4] := 0.0;
Slist[10] := 0.0;
Slist[16] := 0.0;
Slist[5] := 0.0;
Slist[11] := 0.25;
Slist[17] := -2.15;
Slist[21] := -1.5459500000000002;
Slist[22] := 0.0;
Slist[23] := ((fTelescopePos + 2.4289899999999998) + 2.4) - 0.25;
Slist[27] := 0.3362;
Slist[28] := 0.0 - (((fTelescopePos + 2.4289899999999998) + 2.4) - 0.25);
Slist[29] := 0.0;
(* End of Outputs for SubSystem: '<Root>/FB_ForwardKinematicsTelescope' *)
(* '<S2>:1:45' T = zeros(4, 4); *)
(* '<S2>:1:46' T = FKinSpace(M, SList, thetalist); *)
(* *** CHAPTER 4: FORWARD KINEMATICS *** *)
(* Takes M: the home configuration (position and orientation) of the  *)
(* end-effector, *)
(* Slist: The joint screw axes in the space frame when the manipulator *)
(* is at the home position, *)
(* thetalist: A list of joint coordinates. *)
(* Returns T in SE(3) representing the end-effector frame, when the joints  *)
(* are at the specified coordinates (i.t.o Space Frame). *)
(* Example Inputs: *)
(* clear; clc; *)
(* M = [[-1, 0, 0, 0]; [0, 1, 0, 6]; [0, 0, -1, 2]; [0, 0, 0, 1]]; *)
(* Slist = [[0; 0;  1;  4; 0;    0], ... *)
(* [0; 0;  0;  0; 1;    0], ... *)
(* [0; 0; -1; -6; 0; -0.1]]; *)
(* thetalist =[pi / 2; 3; pi]; *)
(* T = FKinSpace(M, Slist, thetalist) *)
(* Output: *)
(* T = *)
(* -0.0000    1.0000         0   -5.0000 *)
(* 1.0000    0.0000         0    4.0000 *)
(* 0         0   -1.0000    1.6858 *)
(* 0         0         0    1.0000 *)
(* 'FKinSpace:27' T = M; *)
(* 'FKinSpace:28' for i = size(thetalist, 1): -1: 1 *)
(* Outputs for Atomic SubSystem: '<Root>/FB_ForwardKinematicsTelescope' *)
(* MATLAB Function: '<S1>/MATLAB Function' *)
se3mat[0] := 0.0;
se3mat[5] := 0.0;
se3mat[10] := 0.0;
se3mat[3] := 0.0;
se3mat[7] := 0.0;
se3mat[11] := 0.0;
se3mat[15] := 0.0;
(* End of Outputs for SubSystem: '<Root>/FB_ForwardKinematicsTelescope' *)
(* Outputs for Atomic SubSystem: '<Root>/FB_ForwardKinematicsTelescope' *)
(* MATLAB Function: '<S1>/MATLAB Function' *)
(* End of Outputs for SubSystem: '<Root>/FB_ForwardKinematicsTelescope' *)
(* Outputs for Atomic SubSystem: '<Root>/FB_ForwardKinematicsTelescope' *)
(* MATLAB Function: '<S1>/MATLAB Function' *)
FOR i := 0 TO 2 DO 
    (* 'FKinSpace:29' T = MatrixExp6(VecTose3(Slist(:, i) * thetalist(i))) * T; *)
    d_rtb_TmpSignalConversionAt := c_rtb_TmpSignalConversionAt[2 - i];
    FOR i_0 := 0 TO 5 DO 
        V[i_0] := Slist[((2 - i) * 6) + i_0] * d_rtb_TmpSignalConversionAt;
    END_FOR;
    (* *** CHAPTER 3: RIGID-BODY MOTIONS *** *)
    (* Takes a 6-vector (representing a spatial velocity). *)
    (* Returns the corresponding 4x4 se(3) matrix. *)
    (* Example Input: *)
    
    (* clear; clc; *)
    (* V = [1; 2; 3; 4; 5; 6]; *)
    (* se3mat = VecTose3(V) *)
    
    (* Output: *)
    (* se3mat = *)
    (* 0    -3     2     4 *)
    (* 3     0    -1     5 *)
    (* -2     1     0     6 *)
    (* 0     0     0     0  *)
    (* 'VecTose3:18' se3mat = [VecToso3(V(1: 3)), V(4: 6); 0, 0, 0, 0]; *)
    (* *** CHAPTER 3: RIGID-BODY MOTIONS *** *)
    (* Takes a 3-vector (angular velocity). *)
    (* Returns the skew symmetric matrix in so(3). *)
    (* Example Input: *)
    
    (* clear; clc; *)
    (* omg = [1; 2; 3]; *)
    (* so3mat = VecToso3(omg) *)
    
    (* Output: *)
    (* so3mat = *)
    (* 0    -3     2 *)
    (* 3     0    -1 *)
    (* -2     1     0 *)
    (* 'VecToso3:17' so3mat = [0, -omg(3), omg(2); omg(3), 0, -omg(1); -omg(2), omg(1), 0]; *)
    se3mat[4] :=  -V[2];
    se3mat[8] := V[1];
    se3mat[1] := V[2];
    se3mat[9] :=  -V[0];
    se3mat[2] :=  -V[1];
    se3mat[6] := V[0];
    se3mat[12] := V[3];
    se3mat[13] := V[4];
    se3mat[14] := V[5];
    (* *** CHAPTER 3: RIGID-BODY MOTIONS *** *)
    (* Takes a se(3) representation of exponential coordinates. *)
    (* Returns a T matrix in SE(3) that is achieved by traveling along/about the  *)
    (* screw axis S for a distance theta from an initial configuration T = I. *)
    (* Example Input: *)
    
    (* clear; clc; *)
    (* se3mat = [ 0,      0,       0,      0; *)
    (* 0,      0, -1.5708, 2.3562; *)
    (* 0, 1.5708,       0, 2.3562; *)
    (* 0,      0,       0,      0] *)
    (* T = MatrixExp6(se3mat) *)
    
    (* Output: *)
    (* T = *)
    (* 1.0000         0         0         0 *)
    (* 0    0.0000   -1.0000   -0.0000 *)
    (* 0    1.0000    0.0000    3.0000 *)
    (* 0         0         0    1.0000  *)
    (* 'MatrixExp6:22' omgtheta = so3ToVec(se3mat(1: 3, 1: 3)); *)
    (* *** CHAPTER 3: RIGID-BODY MOTIONS *** *)
    (* Takes a 3x3 skew-symmetric matrix (an element of so(3)). *)
    (* Returns the corresponding 3-vector (angular velocity). *)
    (* Example Input:  *)
    
    (* clear; clc; *)
    (* so3mat = [[0, -3, 2]; [3, 0, -1]; [-2, 1, 0]]; *)
    (* omg = so3ToVec(so3mat)   *)
    
    (* Output: *)
    (* omg = *)
    (* 1 *)
    (* 2 *)
    (* 3 *)
    (* 'so3ToVec:17' omg = [so3mat(3, 2); so3mat(1, 3); so3mat(2, 1)]; *)
    qs4_tmp[0] := V[0];
    qs4_tmp[1] := V[1];
    qs4_tmp[2] := V[2];
    (* 'MatrixExp6:23' if NearZero(norm(omgtheta)) *)
    (* *** BASIC HELPER FUNCTIONS *** *)
    (* Takes a scalar. *)
    (* Checks if the scalar is small enough to be neglected. *)
    (* Example Input: *)
    
    (* clear; clc; *)
    (* near = -1e-7; *)
    (* judge = NearZero(near) *)
    
    (* Output: *)
    (* judge = *)
    (* 1 *)
    (* 'NearZero:15' judge = norm(near) < 1e-6; *)
    d_rtb_TmpSignalConversionAt := norm(x := qs4_tmp);
    IF ABS(d_rtb_TmpSignalConversionAt) < 1.0E-6 THEN 
        (* 'MatrixExp6:24' T = [eye(3), se3mat(1: 3, 4); 0, 0, 0, 1]; *)
        FOR i_0 := 0 TO 8 DO 
            b_I[i_0] := 0;
        END_FOR;
        b_I[0] := 1;
        b_I[4] := 1;
        b_I[8] := 1;
        FOR i_0 := 0 TO 2 DO 
            R_tmp := DWORD_TO_DINT(SHL(DINT_TO_DWORD(i_0), 2));
            a[R_tmp] := SINT_TO_LREAL(b_I[3 * i_0]);
            a[R_tmp + 1] := SINT_TO_LREAL(b_I[(3 * i_0) + 1]);
            a[R_tmp + 2] := SINT_TO_LREAL(b_I[(3 * i_0) + 2]);
            a[i_0 + 12] := se3mat[i_0 + 12];
        END_FOR;
        a[3] := 0.0;
        a[7] := 0.0;
        a[11] := 0.0;
        a[15] := 1.0;
    ELSE 
        (* 'MatrixExp6:25' else *)
        (* 'MatrixExp6:26' [omghat, theta] = AxisAng3(omgtheta); *)
        (* *** CHAPTER 3: RIGID-BODY MOTIONS *** *)
        (* Takes A 3-vector of exponential coordinates for rotation. *)
        (* Returns the unit rotation axis omghat and the corresponding rotation  *)
        (* angle theta. *)
        (* Example Input: *)
        
        (* clear; clc; *)
        (* expc3 = [1; 2; 3]; *)
        (* [omghat, theta] = AxisAng3(expc3)   *)
        
        (* Output: *)
        (* omghat = *)
        (* 0.2673 *)
        (* 0.5345 *)
        (* 0.8018 *)
        (* theta = *)
        (* 3.7417 *)
        (* 'AxisAng3:20' theta = norm(expc3); *)
        (* 'AxisAng3:21' omghat = expc3 / theta; *)
        (* 'MatrixExp6:27' omgmat = se3mat(1: 3, 1: 3) / theta; *)
        FOR i_0 := 0 TO 2 DO 
            omgmat_tmp := DWORD_TO_DINT(SHL(DINT_TO_DWORD(i_0), 2));
            omgmat[3 * i_0] := se3mat[omgmat_tmp] / d_rtb_TmpSignalConversionAt;
            omgmat[(3 * i_0) + 1] := se3mat[omgmat_tmp + 1] / d_rtb_TmpSignalConversionAt;
            omgmat[(3 * i_0) + 2] := se3mat[omgmat_tmp + 2] / d_rtb_TmpSignalConversionAt;
        END_FOR;
        (* 'MatrixExp6:28' T = [MatrixExp3(se3mat(1: 3, 1: 3)), ... *)
        (* 'MatrixExp6:29'          (eye(3) * theta + (1 - cos(theta)) * omgmat ... *)
        (* 'MatrixExp6:30'           + (theta - sin(theta)) * omgmat * omgmat) ... *)
        (* 'MatrixExp6:31'             * se3mat(1: 3, 4) / theta; *)
        (* 'MatrixExp6:32'          0, 0, 0, 1]; *)
        b_a_tmp := COS(d_rtb_TmpSignalConversionAt);
        c_a_tmp := SIN(d_rtb_TmpSignalConversionAt);
        c_a := d_rtb_TmpSignalConversionAt - c_a_tmp;
        (* *** CHAPTER 3: RIGID-BODY MOTIONS *** *)
        (* Takes a 3x3 so(3) representation of exponential coordinates. *)
        (* Returns R in SO(3) that is achieved by rotating about omghat by theta  *)
        (* from an initial orientation R = I. *)
        (* Example Input: *)
        
        (* clear; clc; *)
        (* so3mat = [[0, -3, 2]; [3, 0, -1]; [-2, 1, 0]]; *)
        (* R = MatrixExp3(so3mat)   *)
        
        (* Output: *)
        (* R = *)
        (* -0.6949    0.7135    0.0893 *)
        (* -0.1920   -0.3038    0.9332 *)
        (* 0.6930    0.6313    0.3481 *)
        (* 'MatrixExp3:18' omgtheta = so3ToVec(so3mat); *)
        (* *** CHAPTER 3: RIGID-BODY MOTIONS *** *)
        (* Takes a 3x3 skew-symmetric matrix (an element of so(3)). *)
        (* Returns the corresponding 3-vector (angular velocity). *)
        (* Example Input:  *)
        
        (* clear; clc; *)
        (* so3mat = [[0, -3, 2]; [3, 0, -1]; [-2, 1, 0]]; *)
        (* omg = so3ToVec(so3mat)   *)
        
        (* Output: *)
        (* omg = *)
        (* 1 *)
        (* 2 *)
        (* 3 *)
        (* 'so3ToVec:17' omg = [so3mat(3, 2); so3mat(1, 3); so3mat(2, 1)]; *)
        (* 'MatrixExp3:19' if NearZero(norm(omgtheta)) *)
        (* *** BASIC HELPER FUNCTIONS *** *)
        (* Takes a scalar. *)
        (* Checks if the scalar is small enough to be neglected. *)
        (* Example Input: *)
        
        (* clear; clc; *)
        (* near = -1e-7; *)
        (* judge = NearZero(near) *)
        
        (* Output: *)
        (* judge = *)
        (* 1 *)
        (* 'NearZero:15' judge = norm(near) < 1e-6; *)
        IF ABS(d_rtb_TmpSignalConversionAt) < 1.0E-6 THEN 
            (* 'MatrixExp3:20' R = eye(3); *)
            FOR i_0 := 0 TO 8 DO 
                b_R[i_0] := 0.0;
            END_FOR;
            b_R[0] := 1.0;
            b_R[4] := 1.0;
            b_R[8] := 1.0;
        ELSE 
            (* 'MatrixExp3:21' else *)
            (* 'MatrixExp3:22' [omghat, theta] = AxisAng3(omgtheta); *)
            (* *** CHAPTER 3: RIGID-BODY MOTIONS *** *)
            (* Takes A 3-vector of exponential coordinates for rotation. *)
            (* Returns the unit rotation axis omghat and the corresponding rotation  *)
            (* angle theta. *)
            (* Example Input: *)
            
            (* clear; clc; *)
            (* expc3 = [1; 2; 3]; *)
            (* [omghat, theta] = AxisAng3(expc3)   *)
            
            (* Output: *)
            (* omghat = *)
            (* 0.2673 *)
            (* 0.5345 *)
            (* 0.8018 *)
            (* theta = *)
            (* 3.7417 *)
            (* 'AxisAng3:20' theta = norm(expc3); *)
            (* 'AxisAng3:21' omghat = expc3 / theta; *)
            (* 'MatrixExp3:23' omgmat = so3mat / theta; *)
            FOR i_0 := 0 TO 2 DO 
                omgmat_tmp := DWORD_TO_DINT(SHL(DINT_TO_DWORD(i_0), 2));
                b_omgmat[3 * i_0] := se3mat[omgmat_tmp] / d_rtb_TmpSignalConversionAt;
                b_omgmat[(3 * i_0) + 1] := se3mat[omgmat_tmp + 1] / d_rtb_TmpSignalConversionAt;
                b_omgmat[(3 * i_0) + 2] := se3mat[omgmat_tmp + 2] / d_rtb_TmpSignalConversionAt;
            END_FOR;
            (* 'MatrixExp3:24' R = eye(3) + sin(theta) * omgmat + (1 - cos(theta)) * omgmat * omgmat; *)
            FOR i_0 := 0 TO 8 DO 
                b_I[i_0] := 0;
            END_FOR;
            b_I[0] := 1;
            b_I[4] := 1;
            b_I[8] := 1;
            FOR i_0 := 0 TO 2 DO 
                FOR omgmat_tmp := 0 TO 2 DO 
                    R_tmp := (3 * omgmat_tmp) + i_0;
                    b_R[R_tmp] := (((((1.0 - b_a_tmp) * b_omgmat[i_0 + 3]) * b_omgmat[(3 * omgmat_tmp) + 1]) + (((1.0 - b_a_tmp) * b_omgmat[i_0]) * b_omgmat[3 * omgmat_tmp])) + ((b_omgmat[i_0 + 6] * (1.0 - b_a_tmp)) * b_omgmat[(3 * omgmat_tmp) + 2])) + ((b_omgmat[R_tmp] * c_a_tmp) + SINT_TO_LREAL(b_I[R_tmp]));
                END_FOR;
            END_FOR;
        END_IF;
        FOR i_0 := 0 TO 2 DO 
            c_a_tmp := 0.0;
            FOR omgmat_tmp := 0 TO 2 DO 
                R_tmp := (3 * omgmat_tmp) + i_0;
                c_a_tmp := ((((((omgmat[i_0 + 3] * c_a) * omgmat[(3 * omgmat_tmp) + 1]) + ((c_a * omgmat[i_0]) * omgmat[3 * omgmat_tmp])) + ((omgmat[i_0 + 6] * c_a) * omgmat[(3 * omgmat_tmp) + 2])) + ((SINT_TO_LREAL(e_a[R_tmp]) * d_rtb_TmpSignalConversionAt) + (omgmat[R_tmp] * (1.0 - b_a_tmp)))) * se3mat[omgmat_tmp + 12]) + c_a_tmp;
                a[omgmat_tmp + (i_0 * 4)] := b_R[(3 * i_0) + omgmat_tmp];
            END_FOR;
            a[i_0 + 12] := c_a_tmp / d_rtb_TmpSignalConversionAt;
        END_FOR;
        a[3] := 0.0;
        a[7] := 0.0;
        a[11] := 0.0;
        a[15] := 1.0;
    END_IF;
    FOR i_0 := 0 TO 3 DO 
        d_rtb_TmpSignalConversionAt := a[i_0 + 4];
        b_a_tmp := a[i_0];
        c_a := a[i_0 + 8];
        c_a_tmp := a[i_0 + 12];
        FOR omgmat_tmp := 0 TO 3 DO 
            R_tmp := DWORD_TO_DINT(SHL(DINT_TO_DWORD(omgmat_tmp), 2));
            a_0[i_0 + R_tmp] := (((T[R_tmp + 1] * d_rtb_TmpSignalConversionAt) + (T[R_tmp] * b_a_tmp)) + (T[R_tmp + 2] * c_a)) + (T[R_tmp + 3] * c_a_tmp);
        END_FOR;
    END_FOR;
    FOR i_0 := 0 TO 15 DO 
        T[i_0] := a_0[i_0];
    END_FOR;
END_FOR;
(* Outport: '<Root>/fX' incorporates:
 *  MATLAB Function: '<S1>/MATLAB Function' *)
(* '<S2>:1:48' x = T(1, 4); *)
(* '<S2>:1:49' y = T(2, 4); *)
(* '<S2>:1:50' z = T(3, 4); *)
fX := T[12];
(* Outport: '<Root>/fY' incorporates:
 *  MATLAB Function: '<S1>/MATLAB Function' *)
fY := T[13];
(* Outport: '<Root>/fZ' incorporates:
 *  MATLAB Function: '<S1>/MATLAB Function' *)
fZ := T[14];
(* End of Outputs for SubSystem: '<Root>/FB_ForwardKinematicsTelescope' *)
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
