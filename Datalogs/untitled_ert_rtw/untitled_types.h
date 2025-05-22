/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: untitled_types.h
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

#ifndef untitled_types_h_
#define untitled_types_h_
#include "rtwtypes.h"
#include "MW_SVD.h"
#ifndef struct_tag_KH1GJakkX2IHMZSxCcfvtG
#define struct_tag_KH1GJakkX2IHMZSxCcfvtG

struct tag_KH1GJakkX2IHMZSxCcfvtG
{
  int32_T isInitialized;
  boolean_T isSetupComplete;
  real_T pWinLen;
  real_T pBuf[5];
  real_T pHeap[5];
  real_T pMidHeap;
  real_T pIdx;
  real_T pPos[5];
  real_T pMinHeapLength;
  real_T pMaxHeapLength;
};

#endif                                 /* struct_tag_KH1GJakkX2IHMZSxCcfvtG */

#ifndef typedef_e_dsp_internal_codegen_Median_T
#define typedef_e_dsp_internal_codegen_Median_T

typedef struct tag_KH1GJakkX2IHMZSxCcfvtG e_dsp_internal_codegen_Median_T;

#endif                             /* typedef_e_dsp_internal_codegen_Median_T */

#ifndef struct_tag_BlgwLpgj2bjudmbmVKWwDE
#define struct_tag_BlgwLpgj2bjudmbmVKWwDE

struct tag_BlgwLpgj2bjudmbmVKWwDE
{
  uint32_T f1[8];
};

#endif                                 /* struct_tag_BlgwLpgj2bjudmbmVKWwDE */

#ifndef typedef_cell_wrap_untitled_T
#define typedef_cell_wrap_untitled_T

typedef struct tag_BlgwLpgj2bjudmbmVKWwDE cell_wrap_untitled_T;

#endif                                 /* typedef_cell_wrap_untitled_T */

#ifndef struct_tag_K0FadUkDjNPyvxQGEfW0ZC
#define struct_tag_K0FadUkDjNPyvxQGEfW0ZC

struct tag_K0FadUkDjNPyvxQGEfW0ZC
{
  boolean_T matlabCodegenIsDeleted;
  int32_T isInitialized;
  boolean_T isSetupComplete;
  cell_wrap_untitled_T inputVarSize;
  int32_T NumChannels;
  e_dsp_internal_codegen_Median_T pMID;
};

#endif                                 /* struct_tag_K0FadUkDjNPyvxQGEfW0ZC */

#ifndef typedef_dsp_simulink_MedianFilter_unt_T
#define typedef_dsp_simulink_MedianFilter_unt_T

typedef struct tag_K0FadUkDjNPyvxQGEfW0ZC dsp_simulink_MedianFilter_unt_T;

#endif                             /* typedef_dsp_simulink_MedianFilter_unt_T */

/* Custom Type definition for MATLABSystem: '<Root>/PWM1' */
#include "MW_SVD.h"
#ifndef struct_tag_BczSCX0m9Gp7rApo3jZAxG
#define struct_tag_BczSCX0m9Gp7rApo3jZAxG

struct tag_BczSCX0m9Gp7rApo3jZAxG
{
  MW_Handle_Type MW_I2C_HANDLE;
};

#endif                                 /* struct_tag_BczSCX0m9Gp7rApo3jZAxG */

#ifndef typedef_c_arduinodriver_ArduinoI2C_un_T
#define typedef_c_arduinodriver_ArduinoI2C_un_T

typedef struct tag_BczSCX0m9Gp7rApo3jZAxG c_arduinodriver_ArduinoI2C_un_T;

#endif                             /* typedef_c_arduinodriver_ArduinoI2C_un_T */

#ifndef struct_tag_NY00b9HBulK1thgQUijEwC
#define struct_tag_NY00b9HBulK1thgQUijEwC

struct tag_NY00b9HBulK1thgQUijEwC
{
  boolean_T matlabCodegenIsDeleted;
  int32_T isInitialized;
  boolean_T isSetupComplete;
  c_arduinodriver_ArduinoI2C_un_T I2CDriverObj;
  uint32_T BusSpeed;
  real_T DefaultMaximumBusSpeedInHz;
};

#endif                                 /* struct_tag_NY00b9HBulK1thgQUijEwC */

#ifndef typedef_codertarget_arduinobase_inter_T
#define typedef_codertarget_arduinobase_inter_T

typedef struct tag_NY00b9HBulK1thgQUijEwC codertarget_arduinobase_inter_T;

#endif                             /* typedef_codertarget_arduinobase_inter_T */

#ifndef struct_tag_7VFuPw0vSNrn5pRgG8Mc4C
#define struct_tag_7VFuPw0vSNrn5pRgG8Mc4C

struct tag_7VFuPw0vSNrn5pRgG8Mc4C
{
  MW_Handle_Type MW_PWM_HANDLE;
};

#endif                                 /* struct_tag_7VFuPw0vSNrn5pRgG8Mc4C */

#ifndef typedef_e_matlabshared_ioclient_perip_T
#define typedef_e_matlabshared_ioclient_perip_T

typedef struct tag_7VFuPw0vSNrn5pRgG8Mc4C e_matlabshared_ioclient_perip_T;

#endif                             /* typedef_e_matlabshared_ioclient_perip_T */

#ifndef struct_tag_RWocY1aAVmuibq0rYX5t0G
#define struct_tag_RWocY1aAVmuibq0rYX5t0G

struct tag_RWocY1aAVmuibq0rYX5t0G
{
  boolean_T matlabCodegenIsDeleted;
  int32_T isInitialized;
  boolean_T isSetupComplete;
  e_matlabshared_ioclient_perip_T PWMDriverObj;
};

#endif                                 /* struct_tag_RWocY1aAVmuibq0rYX5t0G */

#ifndef typedef_codertarget_arduinobase_int_b_T
#define typedef_codertarget_arduinobase_int_b_T

typedef struct tag_RWocY1aAVmuibq0rYX5t0G codertarget_arduinobase_int_b_T;

#endif                             /* typedef_codertarget_arduinobase_int_b_T */

/* Parameters (default storage) */
typedef struct P_untitled_T_ P_untitled_T;

/* Forward declaration for rtModel */
typedef struct tag_RTM_untitled_T RT_MODEL_untitled_T;

#endif                                 /* untitled_types_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
