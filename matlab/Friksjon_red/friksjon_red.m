clc; clear; close all;
%% load data friction test
load FrictionTestRun_03_AllDirections_240225.mat

Pa_main_data = data{6}.extractTimetable;
Pb_main_data = data{8}.extractTimetable;
X_main_data = data{9}.extractTimetable;

Pa_jib_data = data{1}.extractTimetable;
Pb_jib_data = data{3}.extractTimetable;
X_jib_data = data{5}.extractTimetable;

t = time2num(Pa_main_data.Time); %s 

% Data main
Pa_main_bar = Pa_main_data.("<fDanielFilter_G_OPCfMainPaCylfDanielFilter>"); %Bar
Pb_main_bar = Pb_main_data.("<fDanielFilter_G_OPCfMainPbDCVfDanielFilter>"); %Bar
X_main = X_main_data.("<fDanielFilter_G_OPCfMainPistonPositionfDanielFilter>"); %m

% Data jib
Pa_jib_bar = Pa_jib_data.("<fDanielFilter_G_OPCfJibPaCylfDanielFilter>"); %Bar
Pb_jib_bar = Pb_jib_data.("<fDanielFilter_G_OPCfJibPbCylfDanielFilter>"); %Bar
X_jib = X_jib_data.("<fDanielFilter_G_OPCfJibPistonPositionfDanielFilter>"); %m


% Load data simulink test
load red_crane_sim_force.mat 

stroke_main = data{2}{33}.extractTimetable.Variables;
Force_main = data{2}{20}.extractTimetable.Variables;

load red_crane_sim_force2.mat
stroke_knuckle = data{2}{19}.extractTimetable.Variables;
Force_knuckle = data{2}{1}.extractTimetable.Variables;

%% Cylinder data
% Cylinder main
sC_main = 0.75; % Stroke
l0C_main = 0.4; % ?? Deadlength
x0C_main = 0.2; % ?? Initial position
dC_main = 0.160; % Piston diameter
dRC_main = 0.100; % Rod diameter 

% Derived values
d0C_main = dC_main + dC_main/4; % Cylinder outer diameter
lC_main = sC_main + l0C_main/3; % Cylinder length
tEPC_main = l0C_main/6; % Thickness of end plate
dJC_main = l0C_main/3; % Diameter of joint
lRC_main = dRC_main; % Length of joint
lRC_main = sC_main + tEPC_main; % Length of rod
tPC_main = l0C_main/3; % Thickness of piston
AC_main = pi*dC_main^2/4; % Piston area
ARC_main = pi*dRC_main^2/4; % Rod area
AAC_main = AC_main - ARC_main; % Annulus area

%Cylinder jib
sC_jib = 0.85; %Stroke
l0C_jib = 0.4; % ?? Deadlength
x0C_jib = 0.2; % ?? Initial position
dC_jib = 0.150; %Piston diameter
dRC_jib = 0.100; %Rod diameter

%Derived values
d0C_jib = dC_jib + dC_jib/4; %Cylinder outer diameter
lC_jib = sC_jib + l0C_jib/3; %Cylinder length
tEPC_jib = l0C_jib/6; %Thickness of end plate
dJC_jib = l0C_jib/3; %Diameter of joint
lRC_jib = dRC_jib; %Length of joint
lRC_jib = sC_jib + tEPC_jib; %Length of rod
tPC_jib = l0C_jib/3; %Thickness of piston
AC_jib = pi*dC_jib^2/4; %Piston area
ARC_jib = pi*dRC_jib^2/4; %Rod area
AAC_jib = AC_jib - ARC_jib; %Annulus area


%% Calculations force

Pa = Pa_main_bar*1e5; %Pa
Pb = Pb_main_bar*1e5; %Pa
F_main_tc = Pa*AC_main-Pb*AAC_main;

Pa = Pa_jib_bar*1e5; %Pa
Pb = Pb_jib_bar*1e5; %Pa
F_jib_tc = Pa*AC_jib-Pb*AAC_jib;

%% Ploting

% Stroke main and jib
figure("Name","Stroke Plot")
plot(t,X_jib)
hold on
plot(t,X_main)
grid on
legend("Stroke jib","Stroke main")
xlabel("Time [s]")
ylabel("Stroke [m]")

% Force Main
figure("Name","Force Plot Main")
plot(X_main,F_main_tc)
hold on 
plot(stroke_main,Force_main)
grid on
legend("Force Main", "Simulated Force")
ylabel("Force [N]")
xlabel("Stroke [m]")
xlim([0 0.75])

% Force Jib
figure("Name","Force Plot Jib")
plot(X_jib,F_jib_tc)
hold on 
plot(stroke_knuckle,Force_knuckle)
grid on
legend("Force Jib", "Simulated Force")
ylabel("Force [N]")
xlabel("Stroke [m]")
xlim([0 0.85]) 