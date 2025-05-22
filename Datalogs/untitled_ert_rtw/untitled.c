/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: untitled.c
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

#include "untitled.h"
#include "rtwtypes.h"
#include "untitled_types.h"
#include "untitled_private.h"
#include <math.h>
#include <string.h>
#include <stddef.h>

/* Block signals (default storage) */
B_untitled_T untitled_B;

/* Continuous states */
X_untitled_T untitled_X;

/* Disabled State Vector */
XDis_untitled_T untitled_XDis;

/* Block states (default storage) */
DW_untitled_T untitled_DW;

/* Real-time model */
static RT_MODEL_untitled_T untitled_M_;
RT_MODEL_untitled_T *const untitled_M = &untitled_M_;

/* Forward declaration for local functions */
static void untitled_MedianFilter_resetImpl(e_dsp_internal_codegen_Median_T *obj);
static void unt_MedianFilter_trickleDownMin(e_dsp_internal_codegen_Median_T *obj,
  real_T i);
static void unt_MedianFilter_trickleDownMax(e_dsp_internal_codegen_Median_T *obj,
  real_T i);

/*
 * This function updates continuous states using the ODE3 fixed-step
 * solver algorithm
 */
static void rt_ertODEUpdateContinuousStates(RTWSolverInfo *si )
{
  /* Solver Matrices */
  static const real_T rt_ODE3_A[3] = {
    1.0/2.0, 3.0/4.0, 1.0
  };

  static const real_T rt_ODE3_B[3][3] = {
    { 1.0/2.0, 0.0, 0.0 },

    { 0.0, 3.0/4.0, 0.0 },

    { 2.0/9.0, 1.0/3.0, 4.0/9.0 }
  };

  time_T t = rtsiGetT(si);
  time_T tnew = rtsiGetSolverStopTime(si);
  time_T h = rtsiGetStepSize(si);
  real_T *x = rtsiGetContStates(si);
  ODE3_IntgData *id = (ODE3_IntgData *)rtsiGetSolverData(si);
  real_T *y = id->y;
  real_T *f0 = id->f[0];
  real_T *f1 = id->f[1];
  real_T *f2 = id->f[2];
  real_T hB[3];
  int_T i;
  int_T nXc = 2;
  rtsiSetSimTimeStep(si,MINOR_TIME_STEP);

  /* Save the state values at time t in y, we'll use x as ynew. */
  (void) memcpy(y, x,
                (uint_T)nXc*sizeof(real_T));

  /* Assumes that rtsiSetT and ModelOutputs are up-to-date */
  /* f0 = f(t,y) */
  rtsiSetdX(si, f0);
  untitled_derivatives();

  /* f(:,2) = feval(odefile, t + hA(1), y + f*hB(:,1), args(:)(*)); */
  hB[0] = h * rt_ODE3_B[0][0];
  for (i = 0; i < nXc; i++) {
    x[i] = y[i] + (f0[i]*hB[0]);
  }

  rtsiSetT(si, t + h*rt_ODE3_A[0]);
  rtsiSetdX(si, f1);
  untitled_step();
  untitled_derivatives();

  /* f(:,3) = feval(odefile, t + hA(2), y + f*hB(:,2), args(:)(*)); */
  for (i = 0; i <= 1; i++) {
    hB[i] = h * rt_ODE3_B[1][i];
  }

  for (i = 0; i < nXc; i++) {
    x[i] = y[i] + (f0[i]*hB[0] + f1[i]*hB[1]);
  }

  rtsiSetT(si, t + h*rt_ODE3_A[1]);
  rtsiSetdX(si, f2);
  untitled_step();
  untitled_derivatives();

  /* tnew = t + hA(3);
     ynew = y + f*hB(:,3); */
  for (i = 0; i <= 2; i++) {
    hB[i] = h * rt_ODE3_B[2][i];
  }

  for (i = 0; i < nXc; i++) {
    x[i] = y[i] + (f0[i]*hB[0] + f1[i]*hB[1] + f2[i]*hB[2]);
  }

  rtsiSetT(si, tnew);
  rtsiSetSimTimeStep(si,MAJOR_TIME_STEP);
}

static void untitled_MedianFilter_resetImpl(e_dsp_internal_codegen_Median_T *obj)
{
  real_T cnt2;
  int16_T cnt1;
  int16_T i;
  for (i = 0; i < 5; i++) {
    obj->pBuf[i] = 0.0;
    obj->pPos[i] = 0.0;
    obj->pHeap[i] = 0.0;
  }

  /* Start for MATLABSystem: '<Root>/Median Filter' */
  obj->pWinLen = 5.0;
  obj->pIdx = obj->pWinLen;

  /* Start for MATLABSystem: '<Root>/Median Filter' */
  obj->pMidHeap = ceil((obj->pWinLen + 1.0) / 2.0);
  cnt2 = (obj->pWinLen - 1.0) / 2.0;

  /* Start for MATLABSystem: '<Root>/Median Filter' */
  if (cnt2 < 0.0) {
    obj->pMinHeapLength = ceil(cnt2);
  } else {
    obj->pMinHeapLength = floor(cnt2);
  }

  cnt2 = obj->pWinLen / 2.0;

  /* Start for MATLABSystem: '<Root>/Median Filter' */
  if (cnt2 < 0.0) {
    obj->pMaxHeapLength = ceil(cnt2);
  } else {
    obj->pMaxHeapLength = floor(cnt2);
  }

  cnt1 = 1;
  cnt2 = obj->pWinLen;
  for (i = 0; i < 5; i++) {
    /* Start for MATLABSystem: '<Root>/Median Filter' */
    if (fmod(5.0 - (real_T)i, 2.0) == 0.0) {
      obj->pPos[4 - i] = cnt1;
      cnt1++;
    } else {
      obj->pPos[4 - i] = cnt2;
      cnt2--;
    }

    obj->pHeap[(int16_T)obj->pPos[4 - i] - 1] = 5.0 - (real_T)i;
  }
}

static void unt_MedianFilter_trickleDownMin(e_dsp_internal_codegen_Median_T *obj,
  real_T i)
{
  real_T ind1;
  real_T ind2;
  real_T tmp;
  real_T u;
  boolean_T exitg1;
  exitg1 = false;
  while ((!exitg1) && (i <= obj->pMinHeapLength)) {
    if ((i > 1.0) && (i < obj->pMinHeapLength) && (obj->pBuf[(int16_T)obj->
         pHeap[(int16_T)((i + 1.0) + obj->pMidHeap) - 1] - 1] < obj->pBuf
         [(int16_T)obj->pHeap[(int16_T)(i + obj->pMidHeap) - 1] - 1])) {
      i++;
    }

    u = i / 2.0;
    if (u < 0.0) {
      u = ceil(u);
    } else {
      u = floor(u);
    }

    ind1 = i + obj->pMidHeap;
    ind2 = u + obj->pMidHeap;
    u = obj->pHeap[(int16_T)ind1 - 1];
    tmp = obj->pHeap[(int16_T)ind2 - 1];
    if (!(obj->pBuf[(int16_T)u - 1] < obj->pBuf[(int16_T)tmp - 1])) {
      exitg1 = true;
    } else {
      obj->pHeap[(int16_T)ind1 - 1] = tmp;
      obj->pHeap[(int16_T)ind2 - 1] = u;
      obj->pPos[(int16_T)obj->pHeap[(int16_T)ind1 - 1] - 1] = ind1;
      obj->pPos[(int16_T)obj->pHeap[(int16_T)ind2 - 1] - 1] = ind2;
      i *= 2.0;
    }
  }
}

static void unt_MedianFilter_trickleDownMax(e_dsp_internal_codegen_Median_T *obj,
  real_T i)
{
  real_T ind1;
  real_T ind2;
  real_T tmp;
  real_T u;
  boolean_T exitg1;
  exitg1 = false;
  while ((!exitg1) && (i >= -obj->pMaxHeapLength)) {
    if ((i < -1.0) && (i > -obj->pMaxHeapLength) && (obj->pBuf[(int16_T)
         obj->pHeap[(int16_T)(i + obj->pMidHeap) - 1] - 1] < obj->pBuf[(int16_T)
         obj->pHeap[(int16_T)((i - 1.0) + obj->pMidHeap) - 1] - 1])) {
      i--;
    }

    u = i / 2.0;
    if (u < 0.0) {
      u = ceil(u);
    } else {
      u = floor(u);
    }

    ind1 = u + obj->pMidHeap;
    ind2 = i + obj->pMidHeap;
    u = obj->pHeap[(int16_T)ind1 - 1];
    tmp = obj->pHeap[(int16_T)ind2 - 1];
    if (!(obj->pBuf[(int16_T)u - 1] < obj->pBuf[(int16_T)tmp - 1])) {
      exitg1 = true;
    } else {
      obj->pHeap[(int16_T)ind1 - 1] = tmp;
      obj->pHeap[(int16_T)ind2 - 1] = u;
      obj->pPos[(int16_T)obj->pHeap[(int16_T)ind1 - 1] - 1] = ind1;
      obj->pPos[(int16_T)obj->pHeap[(int16_T)ind2 - 1] - 1] = ind2;
      i *= 2.0;
    }
  }
}

/* System initialize for atomic system: */
void untitled_MedianFilter_Init(DW_MedianFilter_untitled_T *localDW)
{
  /* Start for MATLABSystem: '<Root>/Median Filter' */
  localDW->obj.matlabCodegenIsDeleted = false;
  localDW->objisempty = true;
  localDW->obj.isInitialized = 1L;
  localDW->obj.NumChannels = 1L;
  localDW->obj.pMID.isInitialized = 0L;
  localDW->obj.isSetupComplete = true;
}

/* Output and update for atomic system: */
void untitled_MedianFilter(real_T rtu_0, B_MedianFilter_untitled_T *localB,
  DW_MedianFilter_untitled_T *localDW)
{
  real_T ind1;
  real_T ind2;
  real_T tmp;
  real_T tmp_0;
  boolean_T exitg1;

  /* MATLABSystem: '<Root>/Median Filter' */
  if (localDW->obj.pMID.isInitialized != 1L) {
    localDW->obj.pMID.isInitialized = 1L;
    localDW->obj.pMID.isSetupComplete = true;
    untitled_MedianFilter_resetImpl(&localDW->obj.pMID);
  }

  localB->vprev = localDW->obj.pMID.pBuf[(int16_T)localDW->obj.pMID.pIdx - 1];
  localDW->obj.pMID.pBuf[(int16_T)localDW->obj.pMID.pIdx - 1] = rtu_0;
  localB->p = localDW->obj.pMID.pPos[(int16_T)localDW->obj.pMID.pIdx - 1];
  localDW->obj.pMID.pIdx++;
  if (localDW->obj.pMID.pWinLen + 1.0 == localDW->obj.pMID.pIdx) {
    localDW->obj.pMID.pIdx = 1.0;
  }

  if (localB->p > localDW->obj.pMID.pMidHeap) {
    if (localB->vprev < rtu_0) {
      unt_MedianFilter_trickleDownMin(&localDW->obj.pMID, (localB->p -
        localDW->obj.pMID.pMidHeap) * 2.0);
    } else {
      localB->vprev = localB->p - localDW->obj.pMID.pMidHeap;
      exitg1 = false;
      while ((!exitg1) && (localB->vprev > 0.0)) {
        ind1 = localB->vprev + localDW->obj.pMID.pMidHeap;
        ind2 = floor(localB->vprev / 2.0) + localDW->obj.pMID.pMidHeap;
        tmp = localDW->obj.pMID.pHeap[(int16_T)ind1 - 1];
        tmp_0 = localDW->obj.pMID.pHeap[(int16_T)ind2 - 1];
        if (!(localDW->obj.pMID.pBuf[(int16_T)tmp - 1] < localDW->obj.pMID.pBuf
              [(int16_T)tmp_0 - 1])) {
          exitg1 = true;
        } else {
          localDW->obj.pMID.pHeap[(int16_T)ind1 - 1] = tmp_0;
          localDW->obj.pMID.pHeap[(int16_T)ind2 - 1] = tmp;
          localDW->obj.pMID.pPos[(int16_T)localDW->obj.pMID.pHeap[(int16_T)ind1
            - 1] - 1] = ind1;
          localDW->obj.pMID.pPos[(int16_T)localDW->obj.pMID.pHeap[(int16_T)ind2
            - 1] - 1] = ind2;
          localB->vprev = floor(localB->vprev / 2.0);
        }
      }

      if (localB->vprev == 0.0) {
        unt_MedianFilter_trickleDownMax(&localDW->obj.pMID, -1.0);
      }
    }
  } else if (localB->p < localDW->obj.pMID.pMidHeap) {
    if (rtu_0 < localB->vprev) {
      unt_MedianFilter_trickleDownMax(&localDW->obj.pMID, (localB->p -
        localDW->obj.pMID.pMidHeap) * 2.0);
    } else {
      localB->vprev = localB->p - localDW->obj.pMID.pMidHeap;
      exitg1 = false;
      while ((!exitg1) && (localB->vprev < 0.0)) {
        localB->p = localB->vprev / 2.0;
        if (localB->p < 0.0) {
          tmp = ceil(localB->p);
        } else {
          tmp = -0.0;
        }

        ind1 = tmp + localDW->obj.pMID.pMidHeap;
        ind2 = localB->vprev + localDW->obj.pMID.pMidHeap;
        tmp = localDW->obj.pMID.pHeap[(int16_T)ind1 - 1];
        tmp_0 = localDW->obj.pMID.pHeap[(int16_T)ind2 - 1];
        if (!(localDW->obj.pMID.pBuf[(int16_T)tmp - 1] < localDW->obj.pMID.pBuf
              [(int16_T)tmp_0 - 1])) {
          exitg1 = true;
        } else {
          localDW->obj.pMID.pHeap[(int16_T)ind1 - 1] = tmp_0;
          localDW->obj.pMID.pHeap[(int16_T)ind2 - 1] = tmp;
          localDW->obj.pMID.pPos[(int16_T)localDW->obj.pMID.pHeap[(int16_T)ind1
            - 1] - 1] = ind1;
          localDW->obj.pMID.pPos[(int16_T)localDW->obj.pMID.pHeap[(int16_T)ind2
            - 1] - 1] = ind2;
          if (localB->p < 0.0) {
            localB->vprev = ceil(localB->p);
          } else {
            localB->vprev = -0.0;
          }
        }
      }

      if (localB->vprev == 0.0) {
        unt_MedianFilter_trickleDownMin(&localDW->obj.pMID, 1.0);
      }
    }
  } else {
    if (localDW->obj.pMID.pMaxHeapLength != 0.0) {
      unt_MedianFilter_trickleDownMax(&localDW->obj.pMID, -1.0);
    }

    if (localDW->obj.pMID.pMinHeapLength > 0.0) {
      unt_MedianFilter_trickleDownMin(&localDW->obj.pMID, 1.0);
    }
  }

  /* MATLABSystem: '<Root>/Median Filter' */
  localB->MedianFilter = localDW->obj.pMID.pBuf[(int16_T)localDW->
    obj.pMID.pHeap[(int16_T)localDW->obj.pMID.pMidHeap - 1] - 1];
}

/* Termination for atomic system: */
void untitled_MedianFilter_Term(DW_MedianFilter_untitled_T *localDW)
{
  /* Terminate for MATLABSystem: '<Root>/Median Filter' */
  if (!localDW->obj.matlabCodegenIsDeleted) {
    localDW->obj.matlabCodegenIsDeleted = true;
    if ((localDW->obj.isInitialized == 1L) && localDW->obj.isSetupComplete) {
      localDW->obj.NumChannels = -1L;
      if (localDW->obj.pMID.isInitialized == 1L) {
        localDW->obj.pMID.isInitialized = 2L;
      }
    }
  }

  /* End of Terminate for MATLABSystem: '<Root>/Median Filter' */
}

/* Model step function */
void untitled_step(void)
{
  if (rtmIsMajorTimeStep(untitled_M)) {
    /* set solver stop time */
    rtsiSetSolverStopTime(&untitled_M->solverInfo,
                          ((untitled_M->Timing.clockTick0+1)*
      untitled_M->Timing.stepSize0));
  }                                    /* end MajorTimeStep */

  /* Update absolute time of base rate at minor time step */
  if (rtmIsMinorTimeStep(untitled_M)) {
    untitled_M->Timing.t[0] = rtsiGetT(&untitled_M->solverInfo);
  }

  /* MATLABSystem: '<Root>/I2C Read1' */
  untitled_B.status = 192U;
  untitled_B.status = MW_I2C_MasterWrite
    (untitled_DW.obj.I2CDriverObj.MW_I2C_HANDLE, 72UL, &untitled_B.status, 1UL,
     true, false);
  if (untitled_B.status == 0) {
    MW_I2C_MasterRead(untitled_DW.obj.I2CDriverObj.MW_I2C_HANDLE, 72UL,
                      &untitled_B.output_raw[0], 2UL, false, true);
    memcpy((void *)&untitled_B.rtb_I2CRead1_m[0], (void *)
           &untitled_B.output_raw[0], (size_t)2 * sizeof(uint8_T));
  } else {
    untitled_B.rtb_I2CRead1_m[0] = 0U;
    untitled_B.rtb_I2CRead1_m[1] = 0U;
  }

  /* Sum: '<Root>/Sum1' incorporates:
   *  Gain: '<Root>/Gain1'
   *  MATLABSystem: '<Root>/I2C Read1'
   */
  untitled_B.Sum1 = (uint16_T)untitled_P.Gain1_Gain * untitled_B.rtb_I2CRead1_m
    [0] + untitled_B.rtb_I2CRead1_m[1];
  untitled_B.b = rtmIsMajorTimeStep(untitled_M);
  if (untitled_B.b) {
    /* Memory: '<Root>/Memory' */
    untitled_B.Memory = untitled_DW.Memory_PreviousInput;
  }

  /* Switch: '<Root>/Switch' incorporates:
   *  Constant: '<Root>/Constant2'
   *  RelationalOperator: '<Root>/Less Than'
   */
  if (untitled_B.Sum1 < untitled_P.Constant2_Value) {
    /* Switch: '<Root>/Switch' */
    untitled_B.Switch = untitled_B.Memory;
  } else {
    /* Switch: '<Root>/Switch' */
    untitled_B.Switch = untitled_B.Sum1;
  }

  /* End of Switch: '<Root>/Switch' */

  /* Gain: '<Root>/Gain2' incorporates:
   *  Constant: '<Root>/Constant1'
   *  Sum: '<Root>/Sum2'
   */
  untitled_MedianFilter(untitled_P.Gain2_Gain * ((real_T)untitled_B.Switch -
    untitled_P.Constant1_Value), &untitled_B.MedianFilter,
                        &untitled_DW.MedianFilter);
  if (untitled_B.b) {
  }

  /* TransferFcn: '<Root>/Transfer Fcn' */
  untitled_B.TransferFcn = 0.0;
  untitled_B.TransferFcn += untitled_P.TransferFcn_C *
    untitled_X.TransferFcn_CSTATE;
  untitled_B.TransferFcn += untitled_P.TransferFcn_D *
    untitled_B.MedianFilter.MedianFilter;
  if (untitled_B.b) {
  }

  /* MATLABSystem: '<Root>/I2C Read' */
  untitled_B.status = 208U;
  untitled_B.status = MW_I2C_MasterWrite
    (untitled_DW.obj_p.I2CDriverObj.MW_I2C_HANDLE, 72UL, &untitled_B.status, 1UL,
     true, false);
  if (untitled_B.status == 0) {
    MW_I2C_MasterRead(untitled_DW.obj_p.I2CDriverObj.MW_I2C_HANDLE, 72UL,
                      &untitled_B.output_raw[0], 2UL, false, true);
    memcpy((void *)&untitled_B.rtb_I2CRead1_m[0], (void *)
           &untitled_B.output_raw[0], (size_t)2 * sizeof(uint8_T));
  } else {
    untitled_B.rtb_I2CRead1_m[0] = 0U;
    untitled_B.rtb_I2CRead1_m[1] = 0U;
  }

  /* Sum: '<Root>/Sum' incorporates:
   *  Gain: '<Root>/Gain'
   *  MATLABSystem: '<Root>/I2C Read'
   */
  untitled_B.Sum = (uint16_T)untitled_P.Gain_Gain * untitled_B.rtb_I2CRead1_m[0]
    + untitled_B.rtb_I2CRead1_m[1];
  if (untitled_B.b) {
    /* Memory: '<Root>/Memory1' */
    untitled_B.Memory1 = untitled_DW.Memory1_PreviousInput;
  }

  /* Switch: '<Root>/Switch1' */
  if (untitled_B.Sum > untitled_P.Switch1_Threshold) {
    /* Switch: '<Root>/Switch1' */
    untitled_B.Switch1 = untitled_B.Memory1;
  } else {
    /* Switch: '<Root>/Switch1' */
    untitled_B.Switch1 = untitled_B.Sum;
  }

  /* End of Switch: '<Root>/Switch1' */

  /* Gain: '<Root>/Gain3' incorporates:
   *  Constant: '<Root>/Constant3'
   *  Sum: '<Root>/Sum3'
   */
  untitled_MedianFilter(untitled_P.Gain3_Gain * ((real_T)untitled_B.Switch1 -
    untitled_P.Constant3_Value), &untitled_B.MedianFilter1,
                        &untitled_DW.MedianFilter1);
  if (untitled_B.b) {
  }

  /* TransferFcn: '<Root>/Transfer Fcn1' */
  untitled_B.TransferFcn1 = 0.0;
  untitled_B.TransferFcn1 += untitled_P.TransferFcn1_C *
    untitled_X.TransferFcn1_CSTATE;
  untitled_B.TransferFcn1 += untitled_P.TransferFcn1_D *
    untitled_B.MedianFilter1.MedianFilter;
  if (untitled_B.b) {
    /* MATLABSystem: '<Root>/PWM' */
    untitled_DW.obj_h.PWMDriverObj.MW_PWM_HANDLE = MW_PWM_GetHandle(3UL);

    /* Saturate: '<Root>/Saturation' incorporates:
     *  Constant: '<Root>/Constant'
     */
    if (untitled_P.Constant_Value > untitled_P.Saturation_UpperSat) {
      untitled_B.y = untitled_P.Saturation_UpperSat;
    } else if (untitled_P.Constant_Value < untitled_P.Saturation_LowerSat) {
      untitled_B.y = untitled_P.Saturation_LowerSat;
    } else {
      untitled_B.y = untitled_P.Constant_Value;
    }

    /* End of Saturate: '<Root>/Saturation' */

    /* Start for MATLABSystem: '<Root>/PWM' */
    if (!(untitled_B.y <= 255.0)) {
      /* Start for MATLABSystem: '<Root>/PWM1' */
      untitled_B.y = 255.0;
    }

    if (untitled_B.y >= 0.0) {
      untitled_B.d = untitled_B.y;
    } else {
      untitled_B.d = 0.0;
    }

    /* MATLABSystem: '<Root>/PWM' */
    MW_PWM_SetDutyCycle(untitled_DW.obj_h.PWMDriverObj.MW_PWM_HANDLE,
                        untitled_B.d);

    /* MATLABSystem: '<Root>/PWM1' */
    untitled_DW.obj_j.PWMDriverObj.MW_PWM_HANDLE = MW_PWM_GetHandle(5UL);

    /* Start for MATLABSystem: '<Root>/PWM1' */
    if (!(untitled_B.y >= 0.0)) {
      untitled_B.y = 0.0;
    }

    /* MATLABSystem: '<Root>/PWM1' */
    MW_PWM_SetDutyCycle(untitled_DW.obj_j.PWMDriverObj.MW_PWM_HANDLE,
                        untitled_B.y);
  }

  if (rtmIsMajorTimeStep(untitled_M)) {
    if (rtmIsMajorTimeStep(untitled_M)) {
      /* Update for Memory: '<Root>/Memory' */
      untitled_DW.Memory_PreviousInput = untitled_B.Switch;

      /* Update for Memory: '<Root>/Memory1' */
      untitled_DW.Memory1_PreviousInput = untitled_B.Switch1;
    }

    if (rtmIsMajorTimeStep(untitled_M)) {/* Sample time: [0.2s, 0.0s] */
      extmodeErrorCode_T errorCode = EXTMODE_SUCCESS;
      extmodeSimulationTime_T extmodeTime = (extmodeSimulationTime_T)
        ((untitled_M->Timing.clockTick1 * 1) + 0);

      /* Trigger External Mode event */
      errorCode = extmodeEvent(1, extmodeTime);
      if (errorCode != EXTMODE_SUCCESS) {
        /* Code to handle External Mode event errors
           may be added here */
      }
    }
  }                                    /* end MajorTimeStep */

  if (rtmIsMajorTimeStep(untitled_M)) {
    rt_ertODEUpdateContinuousStates(&untitled_M->solverInfo);

    /* Update absolute time for base rate */
    /* The "clockTick0" counts the number of times the code of this task has
     * been executed. The absolute time is the multiplication of "clockTick0"
     * and "Timing.stepSize0". Size of "clockTick0" ensures timer will not
     * overflow during the application lifespan selected.
     */
    ++untitled_M->Timing.clockTick0;
    untitled_M->Timing.t[0] = rtsiGetSolverStopTime(&untitled_M->solverInfo);

    {
      /* Update absolute timer for sample time: [0.2s, 0.0s] */
      /* The "clockTick1" counts the number of times the code of this task has
       * been executed. The resolution of this integer timer is 0.2, which is the step size
       * of the task. Size of "clockTick1" ensures timer will not overflow during the
       * application lifespan selected.
       */
      untitled_M->Timing.clockTick1++;
    }
  }                                    /* end MajorTimeStep */
}

/* Derivatives for root system: '<Root>' */
void untitled_derivatives(void)
{
  XDot_untitled_T *_rtXdot;
  _rtXdot = ((XDot_untitled_T *) untitled_M->derivs);

  /* Derivatives for TransferFcn: '<Root>/Transfer Fcn' */
  _rtXdot->TransferFcn_CSTATE = untitled_P.TransferFcn_A *
    untitled_X.TransferFcn_CSTATE;
  _rtXdot->TransferFcn_CSTATE += untitled_B.MedianFilter.MedianFilter;

  /* Derivatives for TransferFcn: '<Root>/Transfer Fcn1' */
  _rtXdot->TransferFcn1_CSTATE = untitled_P.TransferFcn1_A *
    untitled_X.TransferFcn1_CSTATE;
  _rtXdot->TransferFcn1_CSTATE += untitled_B.MedianFilter1.MedianFilter;
}

/* Model initialize function */
void untitled_initialize(void)
{
  /* Registration code */
  {
    /* Setup solver object */
    rtsiSetSimTimeStepPtr(&untitled_M->solverInfo,
                          &untitled_M->Timing.simTimeStep);
    rtsiSetTPtr(&untitled_M->solverInfo, &rtmGetTPtr(untitled_M));
    rtsiSetStepSizePtr(&untitled_M->solverInfo, &untitled_M->Timing.stepSize0);
    rtsiSetdXPtr(&untitled_M->solverInfo, &untitled_M->derivs);
    rtsiSetContStatesPtr(&untitled_M->solverInfo, (real_T **)
                         &untitled_M->contStates);
    rtsiSetNumContStatesPtr(&untitled_M->solverInfo,
      &untitled_M->Sizes.numContStates);
    rtsiSetNumPeriodicContStatesPtr(&untitled_M->solverInfo,
      &untitled_M->Sizes.numPeriodicContStates);
    rtsiSetPeriodicContStateIndicesPtr(&untitled_M->solverInfo,
      &untitled_M->periodicContStateIndices);
    rtsiSetPeriodicContStateRangesPtr(&untitled_M->solverInfo,
      &untitled_M->periodicContStateRanges);
    rtsiSetContStateDisabledPtr(&untitled_M->solverInfo, (boolean_T**)
      &untitled_M->contStateDisabled);
    rtsiSetErrorStatusPtr(&untitled_M->solverInfo, (&rtmGetErrorStatus
      (untitled_M)));
    rtsiSetRTModelPtr(&untitled_M->solverInfo, untitled_M);
  }

  rtsiSetSimTimeStep(&untitled_M->solverInfo, MAJOR_TIME_STEP);
  rtsiSetIsMinorTimeStepWithModeChange(&untitled_M->solverInfo, false);
  rtsiSetIsContModeFrozen(&untitled_M->solverInfo, false);
  untitled_M->intgData.y = untitled_M->odeY;
  untitled_M->intgData.f[0] = untitled_M->odeF[0];
  untitled_M->intgData.f[1] = untitled_M->odeF[1];
  untitled_M->intgData.f[2] = untitled_M->odeF[2];
  untitled_M->contStates = ((X_untitled_T *) &untitled_X);
  untitled_M->contStateDisabled = ((XDis_untitled_T *) &untitled_XDis);
  untitled_M->Timing.tStart = (0.0);
  rtsiSetSolverData(&untitled_M->solverInfo, (void *)&untitled_M->intgData);
  rtsiSetSolverName(&untitled_M->solverInfo,"ode3");
  rtmSetTPtr(untitled_M, &untitled_M->Timing.tArray[0]);
  rtmSetTFinal(untitled_M, -1);
  untitled_M->Timing.stepSize0 = 0.2;

  /* External mode info */
  untitled_M->Sizes.checksums[0] = (910395928U);
  untitled_M->Sizes.checksums[1] = (650016284U);
  untitled_M->Sizes.checksums[2] = (2677201825U);
  untitled_M->Sizes.checksums[3] = (2886745753U);

  {
    static const sysRanDType rtAlwaysEnabled = SUBSYS_RAN_BC_ENABLE;
    static RTWExtModeInfo rt_ExtModeInfo;
    static const sysRanDType *systemRan[7];
    untitled_M->extModeInfo = (&rt_ExtModeInfo);
    rteiSetSubSystemActiveVectorAddresses(&rt_ExtModeInfo, systemRan);
    systemRan[0] = &rtAlwaysEnabled;
    systemRan[1] = &rtAlwaysEnabled;
    systemRan[2] = &rtAlwaysEnabled;
    systemRan[3] = &rtAlwaysEnabled;
    systemRan[4] = &rtAlwaysEnabled;
    systemRan[5] = &rtAlwaysEnabled;
    systemRan[6] = &rtAlwaysEnabled;
    rteiSetModelMappingInfoPtr(untitled_M->extModeInfo,
      &untitled_M->SpecialInfo.mappingInfo);
    rteiSetChecksumsPtr(untitled_M->extModeInfo, untitled_M->Sizes.checksums);
    rteiSetTFinalTicks(untitled_M->extModeInfo, -1);
  }

  /* InitializeConditions for Memory: '<Root>/Memory' */
  untitled_DW.Memory_PreviousInput = untitled_P.Memory_InitialCondition;

  /* InitializeConditions for TransferFcn: '<Root>/Transfer Fcn' */
  untitled_X.TransferFcn_CSTATE = 0.0;

  /* InitializeConditions for Memory: '<Root>/Memory1' */
  untitled_DW.Memory1_PreviousInput = untitled_P.Memory1_InitialCondition;

  /* InitializeConditions for TransferFcn: '<Root>/Transfer Fcn1' */
  untitled_X.TransferFcn1_CSTATE = 0.0;

  /* Start for MATLABSystem: '<Root>/I2C Read1' */
  untitled_DW.obj.DefaultMaximumBusSpeedInHz = 400000.0;
  untitled_DW.obj.matlabCodegenIsDeleted = false;
  untitled_DW.obj.isInitialized = 1L;
  untitled_DW.obj.I2CDriverObj.MW_I2C_HANDLE = MW_I2C_Open(0, MW_I2C_MASTER);
  untitled_DW.obj.BusSpeed = 100000UL;
  MW_I2C_SetBusSpeed(untitled_DW.obj.I2CDriverObj.MW_I2C_HANDLE, 100000UL);
  untitled_DW.obj.isSetupComplete = true;
  untitled_MedianFilter_Init(&untitled_DW.MedianFilter);

  /* Start for MATLABSystem: '<Root>/I2C Read' */
  untitled_DW.obj_p.DefaultMaximumBusSpeedInHz = 400000.0;
  untitled_DW.obj_p.matlabCodegenIsDeleted = false;
  untitled_DW.obj_p.isInitialized = 1L;
  untitled_DW.obj_p.I2CDriverObj.MW_I2C_HANDLE = MW_I2C_Open(0, MW_I2C_MASTER);
  untitled_DW.obj_p.BusSpeed = 100000UL;
  MW_I2C_SetBusSpeed(untitled_DW.obj_p.I2CDriverObj.MW_I2C_HANDLE, 100000UL);
  untitled_DW.obj_p.isSetupComplete = true;
  untitled_MedianFilter_Init(&untitled_DW.MedianFilter1);

  /* Start for MATLABSystem: '<Root>/PWM' */
  untitled_DW.obj_h.matlabCodegenIsDeleted = false;
  untitled_DW.obj_h.isInitialized = 1L;
  untitled_DW.obj_h.PWMDriverObj.MW_PWM_HANDLE = MW_PWM_Open(3UL, 0.0, 0.0);
  untitled_DW.obj_h.isSetupComplete = true;

  /* Start for MATLABSystem: '<Root>/PWM1' */
  untitled_DW.obj_j.matlabCodegenIsDeleted = false;
  untitled_DW.obj_j.isInitialized = 1L;
  untitled_DW.obj_j.PWMDriverObj.MW_PWM_HANDLE = MW_PWM_Open(5UL, 0.0, 0.0);
  untitled_DW.obj_j.isSetupComplete = true;
}

/* Model terminate function */
void untitled_terminate(void)
{
  /* Terminate for MATLABSystem: '<Root>/I2C Read1' */
  if (!untitled_DW.obj.matlabCodegenIsDeleted) {
    untitled_DW.obj.matlabCodegenIsDeleted = true;
    if ((untitled_DW.obj.isInitialized == 1L) && untitled_DW.obj.isSetupComplete)
    {
      MW_I2C_Close(untitled_DW.obj.I2CDriverObj.MW_I2C_HANDLE);
    }
  }

  /* End of Terminate for MATLABSystem: '<Root>/I2C Read1' */
  untitled_MedianFilter_Term(&untitled_DW.MedianFilter);

  /* Terminate for MATLABSystem: '<Root>/I2C Read' */
  if (!untitled_DW.obj_p.matlabCodegenIsDeleted) {
    untitled_DW.obj_p.matlabCodegenIsDeleted = true;
    if ((untitled_DW.obj_p.isInitialized == 1L) &&
        untitled_DW.obj_p.isSetupComplete) {
      MW_I2C_Close(untitled_DW.obj_p.I2CDriverObj.MW_I2C_HANDLE);
    }
  }

  /* End of Terminate for MATLABSystem: '<Root>/I2C Read' */
  untitled_MedianFilter_Term(&untitled_DW.MedianFilter1);

  /* Terminate for MATLABSystem: '<Root>/PWM' */
  if (!untitled_DW.obj_h.matlabCodegenIsDeleted) {
    untitled_DW.obj_h.matlabCodegenIsDeleted = true;
    if ((untitled_DW.obj_h.isInitialized == 1L) &&
        untitled_DW.obj_h.isSetupComplete) {
      untitled_DW.obj_h.PWMDriverObj.MW_PWM_HANDLE = MW_PWM_GetHandle(3UL);
      MW_PWM_SetDutyCycle(untitled_DW.obj_h.PWMDriverObj.MW_PWM_HANDLE, 0.0);
      untitled_DW.obj_h.PWMDriverObj.MW_PWM_HANDLE = MW_PWM_GetHandle(3UL);
      MW_PWM_Close(untitled_DW.obj_h.PWMDriverObj.MW_PWM_HANDLE);
    }
  }

  /* End of Terminate for MATLABSystem: '<Root>/PWM' */

  /* Terminate for MATLABSystem: '<Root>/PWM1' */
  if (!untitled_DW.obj_j.matlabCodegenIsDeleted) {
    untitled_DW.obj_j.matlabCodegenIsDeleted = true;
    if ((untitled_DW.obj_j.isInitialized == 1L) &&
        untitled_DW.obj_j.isSetupComplete) {
      untitled_DW.obj_j.PWMDriverObj.MW_PWM_HANDLE = MW_PWM_GetHandle(5UL);
      MW_PWM_SetDutyCycle(untitled_DW.obj_j.PWMDriverObj.MW_PWM_HANDLE, 0.0);
      untitled_DW.obj_j.PWMDriverObj.MW_PWM_HANDLE = MW_PWM_GetHandle(5UL);
      MW_PWM_Close(untitled_DW.obj_j.PWMDriverObj.MW_PWM_HANDLE);
    }
  }

  /* End of Terminate for MATLABSystem: '<Root>/PWM1' */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
