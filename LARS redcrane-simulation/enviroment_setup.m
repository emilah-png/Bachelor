clc; clear; close all;
Ts = 0.001;
%% Add path to librarys
addpath("cylinder_mapping_functions\");
addpath("ModernRobotics\packages\MATLAB\mr\");
addpath("Markus_and_Talak_functions\");
addpath("helper_functions\");

%% Load polinomial coeffisients for cylinder mapping
load("cylinder_mapping_functions\p_k_angle_to_stroke.mat");
load("cylinder_mapping_functions\p_k_stroke_to_angle.mat");
load("cylinder_mapping_functions\p_m_angle_to_stroke.mat");
load("cylinder_mapping_functions\p_m_stroke_to_angle.mat");
load("cylinder_mapping_functions\dp_k_angle_to_stroke.mat");
load("cylinder_mapping_functions\dp_k_stroke_to_angle.mat");
load("cylinder_mapping_functions\dp_m_angle_to_stroke.mat");
load("cylinder_mapping_functions\dp_m_stroke_to_angle.mat");

%% Deffine zero configuration trasform and screw axis without telescope
% Lengths
L1 = 250/1000; 
L2 = 1568.50/1000; 
L3 = 69.97/1000;
L4 = 2400/1000; 
L5 = 2428.99/1000; 
L6 = 92.52/1000;
L7 = 336.2/1000;

% zero configuration trasform
M = [1, 0, 0, (L5 + L4 - L1);
    0, 1, 0 (L7);
    0, 0, 1, (L2+ L3 - L6);
    0, 0, 0, 1];

% screw axis
ws1 = [0, 0, 1]';
ws2 = [0, -1, 0]';
ws3 = [0, -1, 0]';
ws4 = [0, 1, 0]';
ws5 = [0, 0, 1]';

% coordinates of an arbitrary point along the screw axis
qs1 = [0, 0, 0]';
qs2 = [-L1, 0, L2]';
qs3 = [(L4 - L1), 0, (L2 + L3)]';
qs4 = [(L5 + L4 - L1), L7, (L2 + L3 - L6)]';
qs5 = qs4;

% Building screw axis matrix
ws_mat = [ws1, ws2, ws3, ws4, ws5];
vs_mat = [cross(qs1, ws1), cross(qs2, ws2), ...
          cross(qs3, ws3), cross(qs4, ws4), ...
          cross(qs5, ws5)];

SList = [ws_mat;
    vs_mat];

%% Intal conditions

thetaList0 = [-pi/4, pi/8, 0, 0, 0]*0';
thetaList0 = [0, 0,-pi/8, 0, 0]';
telescope0 = 0;
Cartesian_home = [3.55, 0.4, 1.6]'

T = [1 0 0 Cartesian_home(1); 
     0 1 0 Cartesian_home(2); 
     0 0 1 Cartesian_home(3); 
     0 0 0 1];

% Testing IK
[thetaList, success] = IKinSpace(SList, M, T, thetaList0, 0.00001, 0.0000001)

% Testing FK
T = FKinSpace(M, SList, thetaList0)

% Testing IK
[thetaList, success] = IKinSpace(SList, M, T, thetaList0, 0.00001, 0.0000001)


%tic
%sim("testing_model.slx")
%toc