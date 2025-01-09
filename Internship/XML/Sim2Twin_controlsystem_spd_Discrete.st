(*
 *
 * File: Sim2Twin_controlsystem_spd_Discrete.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "Sim2Twin_controlsystem_spd_Discrete/FB_Joystick"
 *
 * Model name                      : Sim2Twin_controlsystem_spd_Discrete
 * Model version                   : 1.7
 * Model creator                   : Emila
 * Model last modified by          : Green Crane Testbed
 * Model last modified on          : Mon Nov 04 13:47:16 2024
 * Model sample time               : 0.001s
 * Subsystem name                  : Sim2Twin_controlsystem_spd_Discrete/FB_Joystick
 * Subsystem sample time           : 0.001s
 * Simulink PLC Coder version      : 24.2 (R2024b) 21-Jun-2024
 * ST code generated on            : Mon Nov 04 14:46:34 2024
 *
 * Target IDE selection            : Beckhoff TwinCAT 3
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK FB_Joystick
VAR_INPUT
    ssMethodType: SINT;
    Joystick: LREAL;
    XRealRef: LREAL;
END_VAR
VAR_OUTPUT
    fPositionReferance_m: LREAL;
    fVelocityReferance_ms: LREAL;
END_VAR
VAR
    c_DiscreteTimeIntegrator_IC: USINT;
    c_DiscreteTimeIntegrator_DS: LREAL;
END_VAR
CASE ssMethodType OF
    SS_INITIALIZE: 
        (* SystemInitialize for Atomic SubSystem: '<Root>/FB_Joystick' *)
        (* InitializeConditions for DiscreteIntegrator: '<S1>/Discrete-Time Integrator' *)
        c_DiscreteTimeIntegrator_IC := 1;
        (* End of SystemInitialize for SubSystem: '<Root>/FB_Joystick' *)
    SS_STEP: 
        (* Outputs for Atomic SubSystem: '<Root>/FB_Joystick' *)
        (* Gain: '<S1>/Gain' *)
        fVelocityReferance_ms := 0.1 * Joystick;
        (* DiscreteIntegrator: '<S1>/Discrete-Time Integrator' *)
        IF c_DiscreteTimeIntegrator_IC <> 0 THEN 
            c_DiscreteTimeIntegrator_DS := XRealRef;
            IF c_DiscreteTimeIntegrator_DS > 0.45 THEN 
                c_DiscreteTimeIntegrator_DS := 0.45;
            ELSIF c_DiscreteTimeIntegrator_DS < 0.0 THEN 
                c_DiscreteTimeIntegrator_DS := 0.0;
            END_IF;
        END_IF;
        (* Outport: '<Root>/fPositionReferance_m' incorporates:
         *  DiscreteIntegrator: '<S1>/Discrete-Time Integrator' *)
        fPositionReferance_m := c_DiscreteTimeIntegrator_DS;
        (* Update for DiscreteIntegrator: '<S1>/Discrete-Time Integrator' *)
        c_DiscreteTimeIntegrator_IC := 0;
        c_DiscreteTimeIntegrator_DS := (0.001 * fVelocityReferance_ms) + c_DiscreteTimeIntegrator_DS;
        IF c_DiscreteTimeIntegrator_DS > 0.45 THEN 
            c_DiscreteTimeIntegrator_DS := 0.45;
        ELSIF c_DiscreteTimeIntegrator_DS < 0.0 THEN 
            c_DiscreteTimeIntegrator_DS := 0.0;
        END_IF;
        (* End of Update for DiscreteIntegrator: '<S1>/Discrete-Time Integrator' *)
        (* End of Outputs for SubSystem: '<Root>/FB_Joystick' *)
END_CASE;
END_FUNCTION_BLOCK
VAR_GLOBAL CONSTANT
    SS_INITIALIZE: SINT := 0;
    SS_STEP: SINT := 1;
END_VAR
