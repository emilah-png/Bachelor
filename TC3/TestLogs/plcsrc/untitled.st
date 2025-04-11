(*
 *
 * File: untitled.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "untitled/Subsystem"
 *
 * Model name                      : untitled
 * Model version                   : 1.0
 * Model creator                   : Are-Laptop
 * Model last modified by          : Are-Laptop
 * Model last modified on          : Fri Apr 11 12:39:12 2025
 * Model sample time               : 0.01s
 * Subsystem name                  : untitled/Subsystem
 * Subsystem sample time           : 0.01s
 * Simulink PLC Coder version      : 24.2 (R2024b) 21-Jun-2024
 * ST code generated on            : Fri Apr 11 12:42:15 2025
 *
 * Target IDE selection            : Beckhoff TwinCAT 3
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK Subsystem
VAR_INPUT
    ssMethodType: SINT;
    In1: LREAL;
    In2: LREAL;
END_VAR
VAR_OUTPUT
    Out1: LREAL;
END_VAR
VAR
    c_DiscreteTimeIntegrator_Pr: SINT;
    c_DiscreteTimeIntegrator_DS: LREAL;
END_VAR
CASE ssMethodType OF
    SS_INITIALIZE: 
        (* SystemInitialize for Atomic SubSystem: '<Root>/Subsystem' *)
        (* InitializeConditions for DiscreteIntegrator: '<S1>/Discrete-Time Integrator' *)
        c_DiscreteTimeIntegrator_DS := 0.0;
        c_DiscreteTimeIntegrator_Pr := 0;
        (* End of SystemInitialize for SubSystem: '<Root>/Subsystem' *)
    SS_STEP: 
        (* Outputs for Atomic SubSystem: '<Root>/Subsystem' *)
        (* DiscreteIntegrator: '<S1>/Discrete-Time Integrator' *)
        IF (In2 <> 0.0) OR (c_DiscreteTimeIntegrator_Pr <> 0) THEN 
            c_DiscreteTimeIntegrator_DS := 0.0;
        END_IF;
        (* Outport: '<Root>/Out1' incorporates:
         *  DiscreteIntegrator: '<S1>/Discrete-Time Integrator' *)
        Out1 := c_DiscreteTimeIntegrator_DS;
        (* Update for DiscreteIntegrator: '<S1>/Discrete-Time Integrator' *)
        c_DiscreteTimeIntegrator_DS := (0.01 * In1) + c_DiscreteTimeIntegrator_DS;
        IF In2 > 0.0 THEN 
            c_DiscreteTimeIntegrator_Pr := 1;
        ELSIF In2 < 0.0 THEN 
            c_DiscreteTimeIntegrator_Pr := -1;
        ELSIF In2 = 0.0 THEN 
            c_DiscreteTimeIntegrator_Pr := 0;
        ELSE 
            c_DiscreteTimeIntegrator_Pr := 2;
        END_IF;
        (* End of Update for DiscreteIntegrator: '<S1>/Discrete-Time Integrator' *)
        (* End of Outputs for SubSystem: '<Root>/Subsystem' *)
END_CASE;
END_FUNCTION_BLOCK
VAR_GLOBAL CONSTANT
    SS_INITIALIZE: SINT := 0;
    SS_STEP: SINT := 1;
END_VAR
