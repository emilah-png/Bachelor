(*
 *
 * File: Sim2Twin_controlsystem_pos_Discrete.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "Sim2Twin_controlsystem_pos_Discrete/FB_ControlBlockWithMonitoring"
 *
 * Model name                      : Sim2Twin_controlsystem_pos_Discrete
 * Model version                   : 1.6
 * Model creator                   : Emila
 * Model last modified by          : Green Crane Testbed
 * Model last modified on          : Mon Nov 04 11:51:19 2024
 * Model sample time               : 0s
 * Subsystem name                  : Sim2Twin_controlsystem_pos_Discrete/FB_ControlBlockWithMonitoring
 * Subsystem sample time           : 0.2s
 * Simulink PLC Coder version      : 24.2 (R2024b) 21-Jun-2024
 * ST code generated on            : Mon Nov 04 11:56:01 2024
 *
 * Target IDE selection            : Beckhoff TwinCAT 3
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK c_FB_ControlBlockWithMonito
VAR_INPUT
    ssMethodType: SINT;
    Ps: LREAL;
    Pa: LREAL;
    Pb: LREAL;
    X_real: LREAL;
    X: LREAL;
    X_dot: LREAL;
    bEnableU: LREAL;
    bEnablePID: LREAL;
    Kp: LREAL;
    Ki: LREAL;
    Kd: LREAL;
END_VAR
VAR_OUTPUT
    U: LREAL;
    PID_OUT: LREAL;
    Error: LREAL;
    u_Filtered: LREAL;
    Pb_Filtered: LREAL;
    Ps_Filtered: LREAL;
    Pa_Filtered: LREAL;
    Ps_Unfiltered: LREAL;
    Pa_Unfiltered: LREAL;
    Pb_Unfiltered: LREAL;
    u_Unfiltered: LREAL;
END_VAR
VAR
    c_DiscreteTimeIntegrator_DS: LREAL;
    DiscreteTransferFcn_states: LREAL;
    DiscreteTransferFcn1_states: LREAL;
    DiscreteTransferFcn2_states: LREAL;
    DiscreteTransferFcn3_states: LREAL;
    c_DiscreteTransferFcn_state: LREAL;
    UD_DSTATE: LREAL;
END_VAR
VAR_TEMP
    rtb_TSamp: LREAL;
    temp1: LREAL;
    temp2: LREAL;
END_VAR
CASE ssMethodType OF
    SS_INITIALIZE: 
        (* SystemInitialize for Atomic SubSystem: '<Root>/FB_ControlBlockWithMonitoring' *)
        (* InitializeConditions for DiscreteTransferFcn: '<S1>/Discrete Transfer Fcn' *)
        DiscreteTransferFcn_states := 0.0;
        (* InitializeConditions for DiscreteTransferFcn: '<S1>/Discrete Transfer Fcn1' *)
        DiscreteTransferFcn1_states := 0.0;
        (* InitializeConditions for DiscreteTransferFcn: '<S1>/Discrete Transfer Fcn2' *)
        DiscreteTransferFcn2_states := 0.0;
        (* InitializeConditions for DiscreteTransferFcn: '<S1>/Discrete Transfer Fcn3' *)
        DiscreteTransferFcn3_states := 0.0;
        (* InitializeConditions for DiscreteTransferFcn: '<S2>/Discrete Transfer Fcn' *)
        c_DiscreteTransferFcn_state := 0.0;
        (* InitializeConditions for DiscreteIntegrator: '<S2>/Discrete-Time Integrator' *)
        c_DiscreteTimeIntegrator_DS := 0.0;
        (* InitializeConditions for UnitDelay: '<S4>/UD'
         *
         * Block description for '<S4>/UD':
         *  
         *  Store in Global RAM *)
        UD_DSTATE := 0.0;
        (* End of SystemInitialize for SubSystem: '<Root>/FB_ControlBlockWithMonitoring' *)
    SS_STEP: 
        (* Outputs for Atomic SubSystem: '<Root>/FB_ControlBlockWithMonitoring' *)
        (* Sum: '<S1>/Sum1' incorporates:
         *  Outport: '<Root>/Error' *)
        Error := X - X_real;
        (* DiscreteTransferFcn: '<S1>/Discrete Transfer Fcn' *)
        u_Filtered := 0.09516 * DiscreteTransferFcn_states;
        (* DiscreteTransferFcn: '<S1>/Discrete Transfer Fcn1' *)
        Ps_Filtered := 0.003137 * DiscreteTransferFcn1_states;
        (* DiscreteTransferFcn: '<S1>/Discrete Transfer Fcn2' *)
        Pa_Filtered := 0.003137 * DiscreteTransferFcn2_states;
        (* DiscreteTransferFcn: '<S1>/Discrete Transfer Fcn3' *)
        Pb_Filtered := 0.003137 * DiscreteTransferFcn3_states;
        (* SampleTimeMath: '<S4>/TSamp' incorporates:
         *  DiscreteTransferFcn: '<S2>/Discrete Transfer Fcn'
         *
         * About '<S4>/TSamp':
         *  y = u * K where K = 1 / ( w * Ts )
         *   *)
        rtb_TSamp := (0.0009995 * c_DiscreteTransferFcn_state) * 5.0;
        (* Switch: '<S1>/Switch' incorporates:
         *  Constant: '<S1>/Constant'
         *  DiscreteIntegrator: '<S2>/Discrete-Time Integrator'
         *  Outport: '<Root>/Error'
         *  Product: '<S2>/Product'
         *  Product: '<S2>/Product1'
         *  Product: '<S2>/Product2'
         *  Sum: '<S2>/Sum1'
         *  Sum: '<S4>/Diff'
         *  UnitDelay: '<S4>/UD'
         *
         * Block description for '<S4>/Diff':
         *  
         *  Add in CPU
         *
         * Block description for '<S4>/UD':
         *  
         *  Store in Global RAM *)
        IF bEnablePID > 0.0 THEN 
            U := ((Kp * Error) + (Ki * c_DiscreteTimeIntegrator_DS)) + ((rtb_TSamp - UD_DSTATE) * Kd);
        ELSE 
            U := 0.0;
        END_IF;
        (* End of Switch: '<S1>/Switch' *)
        
        (* Saturate: '<S1>/Saturation1' *)
        IF U > 1.0 THEN 
            PID_OUT := 1.0;
        ELSIF U >= -1.0 THEN 
            PID_OUT := U;
        ELSE 
            PID_OUT := -1.0;
        END_IF;
        (* End of Saturate: '<S1>/Saturation1' *)
        
        (* Switch: '<S1>/Switch1' incorporates:
         *  Constant: '<S1>/Constant1'
         *  Sum: '<S1>/Sum' *)
        IF bEnableU > 0.0 THEN 
            U := u_Filtered + PID_OUT;
        ELSE 
            U := 0.0;
        END_IF;
        (* End of Switch: '<S1>/Switch1' *)
        
        (* Saturate: '<S1>/Saturation' *)
        IF U > 1.0 THEN 
            (* Outport: '<Root>/U' *)
            U := 1.0;
        ELSIF U < -1.0 THEN 
            (* Outport: '<Root>/U' *)
            U := -1.0;
        END_IF;
        (* End of Saturate: '<S1>/Saturation' *)
        
        (* MATLAB Function: '<S1>/V2Q2u' incorporates:
         *  Outport: '<Root>/Pa_Filtered'
         *  Outport: '<Root>/Pb_Filtered'
         *  Outport: '<Root>/Ps_Filtered' *)
        (* MATLAB Function 'FB_ControlBlockWithMonitoring/V2Q2u': '<S3>:1' *)
        (* '<S3>:1:3' phi = 0.7130; *)
        (* '<S3>:1:4' A = 33.1/100^2; *)
        (* Area *)
        (* '<S3>:1:5' BW = 0; *)
        (* deadband *)
        (* '<S3>:1:6' SpoolTravel = 7; *)
        (* Maximum Spool Travel *)
        (* '<S3>:1:7' a = (SpoolTravel-BW)/25; *)
        (* Valve Slope Characteristic [mm/(L/min)] *)
        (* '<S3>:1:8' dP_0 = 7e5; *)
        (* Pressure drop with compansator *)
        (* '<S3>:1:10' if x_dot > 0 *)
        IF X_dot > 0.0 THEN 
            (* '<S3>:1:11' Q = x_dot * A; *)
            (* Wanted Flow *)
            (* '<S3>:1:12' dP = (Ps-Pa)*1e5; *)
            (* '<S3>:1:13' dp_ref = abs(dP_0/dP); *)
            (* dp_ref = 1; *)
            (* '<S3>:1:15' Q_star = (Q * sqrt(dp_ref)) * 6e4; *)
            (* Referance Flow [L/min] *)
            (* '<S3>:1:16' u = (Q_star * a + BW)/SpoolTravel; *)
            temp2 := ABS(700000.0 / ((Ps_Filtered - Pa_Filtered) * 100000.0));
            u_Unfiltered := (((SQRT(temp2) * (X_dot * 0.00331)) * 60000.0) * 0.28) / 7.0;
            (* Control Signal [-1, 1] *)
        ELSIF X_dot < 0.0 THEN 
            (* '<S3>:1:18' elseif x_dot < 0 *)
            (* '<S3>:1:19' Q = x_dot * (A*phi); *)
            (* Wanted Flow *)
            (* '<S3>:1:20' dP = (Ps-Pb)*1e5; *)
            (* '<S3>:1:21' dp_ref = abs(dP_0/dP); *)
            (* dp_ref = 1; *)
            (* '<S3>:1:23' Q_star = (Q * sqrt(dp_ref)) * 6e4; *)
            (* Referance Flow [L/min] *)
            (* '<S3>:1:24' u = (Q_star * a - BW)/SpoolTravel; *)
            temp1 := ABS(700000.0 / ((Ps_Filtered - Pb_Filtered) * 100000.0));
            u_Unfiltered := (((SQRT(temp1) * (X_dot * 0.00236003)) * 60000.0) * 0.28) / 7.0;
            (* Control Signal [-1, 1] *)
        ELSE 
            (* '<S3>:1:26' else *)
            (* '<S3>:1:27' u = 0; *)
            u_Unfiltered := 0.0;
        END_IF;
        (* End of MATLAB Function: '<S1>/V2Q2u' *)
        
        (* SignalConversion: '<S1>/Pa' incorporates:
         *  Outport: '<Root>/Pa_Unfiltered' *)
        Pa_Unfiltered := Pa;
        (* SignalConversion: '<S1>/Pb' incorporates:
         *  Outport: '<Root>/Pb_Unfiltered' *)
        Pb_Unfiltered := Pb;
        (* SignalConversion: '<S1>/Ps' incorporates:
         *  Outport: '<Root>/Ps_Unfiltered' *)
        Ps_Unfiltered := Ps;
        (* Saturate: '<S1>/Saturation2' incorporates:
         *  Outport: '<Root>/u_Unfiltered' *)
        IF u_Unfiltered > 1.0 THEN 
            u_Unfiltered := 1.0;
        ELSIF u_Unfiltered < -1.0 THEN 
            u_Unfiltered := -1.0;
        END_IF;
        (* End of Saturate: '<S1>/Saturation2' *)
        
        (* Update for DiscreteTransferFcn: '<S1>/Discrete Transfer Fcn' incorporates:
         *  Outport: '<Root>/u_Unfiltered' *)
        DiscreteTransferFcn_states := u_Unfiltered - (-0.9048 * DiscreteTransferFcn_states);
        (* Update for DiscreteTransferFcn: '<S1>/Discrete Transfer Fcn1' incorporates:
         *  SignalConversion: '<S1>/Ps' *)
        DiscreteTransferFcn1_states := Ps - (-0.9969 * DiscreteTransferFcn1_states);
        (* Update for DiscreteTransferFcn: '<S1>/Discrete Transfer Fcn2' incorporates:
         *  SignalConversion: '<S1>/Pa' *)
        DiscreteTransferFcn2_states := Pa - (-0.9969 * DiscreteTransferFcn2_states);
        (* Update for DiscreteTransferFcn: '<S1>/Discrete Transfer Fcn3' incorporates:
         *  SignalConversion: '<S1>/Pb' *)
        DiscreteTransferFcn3_states := Pb - (-0.9969 * DiscreteTransferFcn3_states);
        (* Update for DiscreteTransferFcn: '<S2>/Discrete Transfer Fcn' incorporates:
         *  Outport: '<Root>/Error' *)
        c_DiscreteTransferFcn_state := Error - (-0.999 * c_DiscreteTransferFcn_state);
        (* Update for DiscreteIntegrator: '<S2>/Discrete-Time Integrator' incorporates:
         *  Outport: '<Root>/Error' *)
        c_DiscreteTimeIntegrator_DS := (0.2 * Error) + c_DiscreteTimeIntegrator_DS;
        (* Update for UnitDelay: '<S4>/UD'
         *
         * Block description for '<S4>/UD':
         *  
         *  Store in Global RAM *)
        UD_DSTATE := rtb_TSamp;
        (* End of Outputs for SubSystem: '<Root>/FB_ControlBlockWithMonitoring' *)
END_CASE;
END_FUNCTION_BLOCK
VAR_GLOBAL CONSTANT
    SS_INITIALIZE: SINT := 0;
    SS_STEP: SINT := 1;
END_VAR
