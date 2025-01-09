(*
 *
 * File: Sim2Twin_controlsystem_pos_Discrete.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "Sim2Twin_controlsystem_pos_Discrete/Derivator"
 *
 * Model name                      : Sim2Twin_controlsystem_pos_Discrete
 * Model version                   : 1.19
 * Model creator                   : Emila
 * Model last modified by          : Are-Laptop
 * Model last modified on          : Mon Nov 11 18:36:19 2024
 * Model sample time               : 0.001s
 * Subsystem name                  : Sim2Twin_controlsystem_pos_Discrete/Derivator
 * Subsystem sample time           : 0.001s
 * Simulink PLC Coder version      : 24.2 (R2024b) 21-Jun-2024
 * ST code generated on            : Tue Dec 03 14:01:35 2024
 *
 * Target IDE selection            : Beckhoff TwinCAT 3
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK Derivator
VAR_INPUT
    ssMethodType: SINT;
    fSignal: LREAL;
END_VAR
VAR_OUTPUT
    fSignalDerivative: LREAL;
END_VAR
VAR
    UD_DSTATE: LREAL;
END_VAR
VAR_TEMP
    rtb_TSamp: LREAL;
END_VAR
CASE ssMethodType OF
    SS_INITIALIZE: 
        (* SystemInitialize for Atomic SubSystem: '<Root>/Derivator' *)
        (* InitializeConditions for UnitDelay: '<S2>/UD'
         *
         * Block description for '<S2>/UD':
         *  
         *  Store in Global RAM *)
        UD_DSTATE := 0.0;
        (* End of SystemInitialize for SubSystem: '<Root>/Derivator' *)
    SS_STEP: 
        (* Outputs for Atomic SubSystem: '<Root>/Derivator' *)
        (* SampleTimeMath: '<S2>/TSamp'
         *
         * About '<S2>/TSamp':
         *  y = u * K where K = 1 / ( w * Ts )
         *   *)
        rtb_TSamp := fSignal * 1000.0;
        (* Outport: '<Root>/fSignalDerivative' incorporates:
         *  Sum: '<S2>/Diff'
         *  UnitDelay: '<S2>/UD'
         *
         * Block description for '<S2>/Diff':
         *  
         *  Add in CPU
         *
         * Block description for '<S2>/UD':
         *  
         *  Store in Global RAM *)
        fSignalDerivative := rtb_TSamp - UD_DSTATE;
        (* Update for UnitDelay: '<S2>/UD'
         *
         * Block description for '<S2>/UD':
         *  
         *  Store in Global RAM *)
        UD_DSTATE := rtb_TSamp;
        (* End of Outputs for SubSystem: '<Root>/Derivator' *)
END_CASE;
END_FUNCTION_BLOCK
VAR_GLOBAL CONSTANT
    SS_INITIALIZE: SINT := 0;
    SS_STEP: SINT := 1;
END_VAR
