/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: untitled_private.h
 *
 * Code generated for Simulink model 'untitled'.
 *
 * Model version                  : 1.0
 * Simulink Coder version         : 24.2 (R2024b) 21-Jun-2024
 * C/C++ source code generated on : Wed Feb 12 10:57:55 2025
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Atmel->AVR
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#ifndef untitled_private_h_
#define untitled_private_h_
#include "rtwtypes.h"
#include "multiword_types.h"
#include "untitled.h"
#include "untitled_types.h"
#include "rtw_continuous.h"
#include "rtw_solver.h"

/* Private macros used by the generated code to access rtModel */
#ifndef rtmIsMajorTimeStep
#define rtmIsMajorTimeStep(rtm)        (((rtm)->Timing.simTimeStep) == MAJOR_TIME_STEP)
#endif

#ifndef rtmIsMinorTimeStep
#define rtmIsMinorTimeStep(rtm)        (((rtm)->Timing.simTimeStep) == MINOR_TIME_STEP)
#endif

#ifndef rtmSetTFinal
#define rtmSetTFinal(rtm, val)         ((rtm)->Timing.tFinal = (val))
#endif

#ifndef rtmSetTPtr
#define rtmSetTPtr(rtm, val)           ((rtm)->Timing.t = (val))
#endif

extern void untitled_MedianFilter_Init(DW_MedianFilter_untitled_T *localDW);
extern void untitled_MedianFilter(real_T rtu_0, B_MedianFilter_untitled_T
  *localB, DW_MedianFilter_untitled_T *localDW);
extern void untitled_MedianFilter_Term(DW_MedianFilter_untitled_T *localDW);

/* private model entry point functions */
extern void untitled_derivatives(void);

#endif                                 /* untitled_private_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
