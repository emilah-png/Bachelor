(*
 *
 * File: RedCrane_kinematic_model.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "RedCrane_kinematic_model/FB_ForwardKinematics"
 *
 * Model name                      : RedCrane_kinematic_model
 * Model version                   : 2.78
 * Model creator                   : sindr
 * Model last modified by          : larso
 * Model last modified on          : Mon Jan 20 08:44:51 2025
 * Model sample time               : 0.001s
 * Subsystem name                  : RedCrane_kinematic_model/FB_ForwardKinematics
 * Subsystem sample time           : 0.001s
 * Simulink PLC Coder version      : 24.1 (R2024a) 19-Nov-2023
 * ST code generated on            : Mon Jan 20 09:03:14 2025
 *
 * Target IDE selection            : Beckhoff TwinCAT 3
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK FB_ForwardKinematics
VAR_INPUT
    fSlewAngle: LREAL;
    fMainAngle: LREAL;
    fKnuckleAngle: LREAL;
END_VAR
VAR_OUTPUT
    fX: LREAL;
    fY: LREAL;
    fZ: LREAL;
END_VAR
VAR
    Constant_Value: ARRAY [0..15] OF LREAL := 1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,4.5789899999999992,
        0.3362,1.5459500000000002,1.0;
    Constant4_Value: ARRAY [0..29] OF LREAL := 0.0,0.0,1.0,0.0,0.0,0.0,0.0,-1.0,0.0,1.5685,0.0,0.25,0.0,-1.0,0.0,
        1.63847,0.0,-2.15,0.0,1.0,0.0,-1.5459500000000002,0.0,4.5789899999999992,0.0,0.0,1.0,0.3362,
        -4.5789899999999992,0.0;
    e_a: ARRAY [0..8] OF SINT := 1,0,0,0,1,0,0,0,1;
END_VAR
VAR_TEMP
    T: ARRAY [0..15] OF LREAL;
    i: DINT;
    se3mat: ARRAY [0..15] OF LREAL;
    omgmat: ARRAY [0..8] OF LREAL;
    a: ARRAY [0..15] OF LREAL;
    c_a: LREAL;
    V: ARRAY [0..5] OF LREAL;
    b_R: ARRAY [0..8] OF LREAL;
    b_omgmat: ARRAY [0..8] OF LREAL;
    d_a: LREAL;
    b_I: ARRAY [0..8] OF SINT;
    c_rtb_TmpSignalConversionAt: ARRAY [0..2] OF LREAL;
    theta: LREAL;
    b_theta: LREAL;
    d_rtb_TmpSignalConversionAt: LREAL;
    se3mat_0: ARRAY [0..2] OF LREAL;
    a_0: ARRAY [0..15] OF LREAL;
    i_0: DINT;
    omgmat_tmp: DINT;
    x_tmp: LREAL;
    R_tmp: DINT;
END_VAR
(* Outputs for Atomic SubSystem: '<Root>/FB_ForwardKinematics' *)
(* SignalConversion: '<S2>/TmpSignal ConversionAt SFunction Inport3' incorporates:
 *  MATLAB Function: '<S1>/MATLAB Function' *)
c_rtb_TmpSignalConversionAt[0] := fSlewAngle;
c_rtb_TmpSignalConversionAt[1] := fMainAngle;
c_rtb_TmpSignalConversionAt[2] := fKnuckleAngle;
(* End of Outputs for SubSystem: '<Root>/FB_ForwardKinematics' *)
(* Outputs for Atomic SubSystem: '<Root>/FB_ForwardKinematics' *)
(* MATLAB Function: '<S1>/MATLAB Function' incorporates:
 *  Constant: '<S1>/Constant' *)
FOR i_0 := 0 TO 15 DO 
    T[i_0] := Constant_Value[i_0];
END_FOR;
(* End of Outputs for SubSystem: '<Root>/FB_ForwardKinematics' *)
(* MATLAB Function 'FB_ForwardKinematics/MATLAB Function': '<S2>:1' *)
(* '<S2>:1:2' T = zeros(4, 4); *)
(* '<S2>:1:3' T = FKinSpace(M, Slist, thetalist); *)
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
(* Outputs for Atomic SubSystem: '<Root>/FB_ForwardKinematics' *)
(* MATLAB Function: '<S1>/MATLAB Function' *)
se3mat[0] := 0.0;
se3mat[5] := 0.0;
se3mat[10] := 0.0;
se3mat[3] := 0.0;
se3mat[7] := 0.0;
se3mat[11] := 0.0;
se3mat[15] := 0.0;
(* End of Outputs for SubSystem: '<Root>/FB_ForwardKinematics' *)
(* Outputs for Atomic SubSystem: '<Root>/FB_ForwardKinematics' *)
(* MATLAB Function: '<S1>/MATLAB Function' *)
(* End of Outputs for SubSystem: '<Root>/FB_ForwardKinematics' *)
(* Outputs for Atomic SubSystem: '<Root>/FB_ForwardKinematics' *)
(* MATLAB Function: '<S1>/MATLAB Function' incorporates:
 *  Constant: '<S1>/Constant4' *)
FOR i := 0 TO 2 DO 
    (* 'FKinSpace:29' T = MatrixExp6(VecTose3(Slist(:, i) * thetalist(i))) * T; *)
    d_rtb_TmpSignalConversionAt := c_rtb_TmpSignalConversionAt[2 - i];
    FOR i_0 := 0 TO 5 DO 
        V[i_0] := Constant4_Value[((2 - i) * 6) + i_0] * d_rtb_TmpSignalConversionAt;
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
    se3mat_0[0] := V[0];
    se3mat_0[1] := V[1];
    se3mat_0[2] := V[2];
    theta := norm(x := se3mat_0);
    IF ABS(theta) < 1.0E-6 THEN 
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
            omgmat[3 * i_0] := se3mat[omgmat_tmp] / theta;
            omgmat[(3 * i_0) + 1] := se3mat[omgmat_tmp + 1] / theta;
            omgmat[(3 * i_0) + 2] := se3mat[omgmat_tmp + 2] / theta;
        END_FOR;
        (* 'MatrixExp6:28' T = [MatrixExp3(se3mat(1: 3, 1: 3)), ... *)
        (* 'MatrixExp6:29'          (eye(3) * theta + (1 - cos(theta)) * omgmat ... *)
        (* 'MatrixExp6:30'           + (theta - sin(theta)) * omgmat * omgmat) ... *)
        (* 'MatrixExp6:31'             * se3mat(1: 3, 4) / theta; *)
        (* 'MatrixExp6:32'          0, 0, 0, 1]; *)
        d_rtb_TmpSignalConversionAt := 1.0 - COS(theta);
        c_a := theta - SIN(theta);
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
        se3mat_0[0] := V[0];
        se3mat_0[1] := V[1];
        se3mat_0[2] := V[2];
        b_theta := norm(x := se3mat_0);
        IF ABS(b_theta) < 1.0E-6 THEN 
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
                b_omgmat[3 * i_0] := se3mat[omgmat_tmp] / b_theta;
                b_omgmat[(3 * i_0) + 1] := se3mat[omgmat_tmp + 1] / b_theta;
                b_omgmat[(3 * i_0) + 2] := se3mat[omgmat_tmp + 2] / b_theta;
            END_FOR;
            (* 'MatrixExp3:24' R = eye(3) + sin(theta) * omgmat + (1 - cos(theta)) * omgmat * omgmat; *)
            d_a := SIN(b_theta);
            x_tmp := COS(b_theta);
            FOR i_0 := 0 TO 8 DO 
                b_I[i_0] := 0;
            END_FOR;
            b_I[0] := 1;
            b_I[4] := 1;
            b_I[8] := 1;
            FOR i_0 := 0 TO 2 DO 
                FOR omgmat_tmp := 0 TO 2 DO 
                    R_tmp := (3 * omgmat_tmp) + i_0;
                    b_R[R_tmp] := (((((1.0 - x_tmp) * b_omgmat[i_0 + 3]) * b_omgmat[(3 * omgmat_tmp) + 1]) + (((1.0 - x_tmp) * b_omgmat[i_0]) * b_omgmat[3 * omgmat_tmp])) + ((b_omgmat[i_0 + 6] * (1.0 - x_tmp)) * b_omgmat[(3 * omgmat_tmp) + 2])) + ((b_omgmat[R_tmp] * d_a) + SINT_TO_LREAL(b_I[R_tmp]));
                END_FOR;
            END_FOR;
        END_IF;
        FOR i_0 := 0 TO 2 DO 
            d_a := 0.0;
            FOR omgmat_tmp := 0 TO 2 DO 
                R_tmp := (3 * omgmat_tmp) + i_0;
                d_a := ((((((omgmat[i_0 + 3] * c_a) * omgmat[(3 * omgmat_tmp) + 1]) + ((c_a * omgmat[i_0]) * omgmat[3 * omgmat_tmp])) + ((omgmat[i_0 + 6] * c_a) * omgmat[(3 * omgmat_tmp) + 2])) + ((SINT_TO_LREAL(e_a[R_tmp]) * theta) + (omgmat[R_tmp] * d_rtb_TmpSignalConversionAt))) * se3mat[omgmat_tmp + 12]) + d_a;
                a[omgmat_tmp + (i_0 * 4)] := b_R[(3 * i_0) + omgmat_tmp];
            END_FOR;
            a[i_0 + 12] := d_a / theta;
        END_FOR;
        a[3] := 0.0;
        a[7] := 0.0;
        a[11] := 0.0;
        a[15] := 1.0;
    END_IF;
    FOR i_0 := 0 TO 3 DO 
        d_rtb_TmpSignalConversionAt := a[i_0 + 4];
        c_a := a[i_0];
        d_a := a[i_0 + 8];
        x_tmp := a[i_0 + 12];
        FOR omgmat_tmp := 0 TO 3 DO 
            R_tmp := DWORD_TO_DINT(SHL(DINT_TO_DWORD(omgmat_tmp), 2));
            a_0[i_0 + R_tmp] := (((T[R_tmp + 1] * d_rtb_TmpSignalConversionAt) + (T[R_tmp] * c_a)) + (T[R_tmp + 2] * d_a)) + (T[R_tmp + 3] * x_tmp);
        END_FOR;
    END_FOR;
    FOR i_0 := 0 TO 15 DO 
        T[i_0] := a_0[i_0];
    END_FOR;
END_FOR;
(* Outport: '<Root>/fX' incorporates:
 *  MATLAB Function: '<S1>/MATLAB Function' *)
(* '<S2>:1:5' x = T(1, 4); *)
(* '<S2>:1:6' y = T(2, 4); *)
(* '<S2>:1:7' z = T(3, 4); *)
fX := T[12];
(* Outport: '<Root>/fY' incorporates:
 *  MATLAB Function: '<S1>/MATLAB Function' *)
fY := T[13];
(* Outport: '<Root>/fZ' incorporates:
 *  MATLAB Function: '<S1>/MATLAB Function' *)
fZ := T[14];
(* End of Outputs for SubSystem: '<Root>/FB_ForwardKinematics' *)
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
