clc; clear; close all;
%% load data
load DataForFriction_170125.mat

Pa_data = data{3}.extractTimetable;
Pb_data = data{7}.extractTimetable;
Ps_data = data{10}.extractTimetable;
X_data = data{9}.extractTimetable;

t = time2num(Pa_data.Time); %s

Pa_bar = Pa_data.("<fPaFiltered_G_OPCfPaFiltered>"); %Bar
Pb_bar = Pb_data.("<fPbFiltered_G_OPCfPbFiltered>") ; %Bar
Ps_bar = Ps_data.("<fPsFiltered_G_OPCfPsFiltered>"); %Bar
X = X_data.("<fPistonPosition_G_OPCfPistonPosition>") ; %m

%% cylinder data
%Cylinder 1
sC_1 = 0.45; %Stroke
l0C_1 = 0.4; %Deadlength
x0C_1 = 0.2; %Initial position
dC_1 = 0.065; %Piston diameter
dRC_1 = 0.035; %Rod diameter

%Derived values
d0C_1 = dC_1 + dC_1/4; %Cylinder outer diameter
lC_1 = sC_1 + l0C_1/3; %Cylinder length
tEPC_1 = l0C_1/6; %Thickness of end plate
dJC_1 = l0C_1/3; %Diameter of joint
lRC_1 = dRC_1; %Length of joint
lRC_1 = sC_1 + tEPC_1; %Length of rod
tPC_1 = l0C_1/3; %Thickness of piston
AC_1 = pi*dC_1^2/4; %Piston area
ARC_1 = pi*dRC_1^2/4; %Rod area
AAC_1 = AC_1 - ARC_1; %Annulus area

%% calculation

L1 = 3.625;
L4 = 0.229;
Lg4x = L1-L4/2;
Lg4y = 0.08157;
abx = 0.550;
aby = -0.130;
g = 9.81;
G1 =100*g;
G4 = (4*76+16)*g;
Cy = -1.055;
Cx = 0.420;
ang_CA = atan2(Cy,Cx);
ang_k = atan2(aby,abx);
b = abs(sqrt(Cy^2+Cx^2));
c = abs(sqrt(abx^2+aby^2));
% FBD Calculations
%syms Ax Ay P gamma beta ang_C ang_AB r_cb r_ab L3(i) w_A w_C VBx VBy Vp crs_abp
L3_min = 0.772;
L3 = X+L3_min;  %0.5*(x-1)/(1000-1) + 0.772;  %.172*sin(X)/1 + 0.772+0.175 0;
for i = 1 : length(t)
ang_C = acos((L3(i)^2+b^2-c^2)/(2*L3(i)*b));
beta = ang_CA + pi - ang_C;

bx = L3(i)*cos(beta) + Cx;
by = L3(i)*sin(beta) + Cy;
ang_AB =atan2(by,bx);
gamma = ang_AB + ang_k;

r_cb = [L3(i)*cos(beta);L3(i)*sin(beta);0];
r_ab = [abx*cos(gamma) - aby*sin(gamma); aby*cos(gamma) + abx*sin(gamma); 0 ];
rot_rab = [-1*r_ab(2); r_ab(1)];
rot_rcb = [-1*r_cb(2); r_cb(1)];

crs_abp = cross(r_ab, [cos(beta); sin(beta);0]);
matrix = [1, 0, cos(beta);
          0, 1, sin(beta);
          0, 0, r_ab(1)*sin(beta) - r_ab(2)*cos(beta)];
right = [0;(G1+G4);(G1*cos(gamma)*L1/2+G4*(cos(gamma)*Lg4x-sin(gamma)*Lg4y))];

ANS = inv(matrix)*right;
Ax = ANS(1);
Ay = ANS(2);
Fl  = ANS(3); %N
Fl_data(i) = Fl;
end
Fl_data = Fl_data';


% out stroke (positive load)
% F_tc = P1 * A - P2 * phi * A = FL
% in stroke (negative load)
% F_tc = P1 * A - P2 * phi * A = FL
% A = AC_1, A*phi = AAC_1


Pa = Pa_bar*1e5; %Pa
Pb = Pb_bar*1e5; %Pa
Ps = Ps_bar*1e5; %Pa
F_tc = Pa*AC_1-Pb*AAC_1;

F_mc = F_tc-Fl_data;


%% PLoting
figure() ;
sgtitle("Out Stroke")
subplot(2,2,1) %pressure
plot(t,Ps_bar)
hold on
plot(t,Pa_bar)
plot(t,Pb_bar)
grid on
legend("Ps","Pa","Pb")
ylabel("Pressure [Bar]")
xlabel("Time [s]")
xlim([68 80]);

subplot(2,2,2) %F_tc Fl_data
plot(t,F_tc)
hold on
plot(t,Fl_data)
grid on
legend("F_{Piston}", "F_{Load}")
ylabel("Force [N]")
xlabel("Time [s]")
%xlim([68 80]);

subplot(2,2,3) %F_mc
plot(t,F_mc)
grid on
legend("F_{Friction}")
ylabel("Friction force [N]")
xlabel("Time [s]")
xlim([68 80]);

subplot(2,2,4) %stroke
plot(t,X)
grid on
legend("Stroke")
ylabel("Piston stroke [m]")
xlabel("Time [s]")
xlim([68 80]);


% 80 138
%------------------------------------------------------------------------


figure();
sgtitle("In Stroke")
title("in_stroke")
subplot(2,2,1) %pressure
plot(t,Ps_bar)
hold on
plot(t,Pa_bar)
plot(t,Pb_bar)
grid on
legend("Ps","Pa","Pb")
ylabel("Pressure [Bar]")
xlabel("Time [s]")
xlim([138 146]);

subplot(2,2,2) %F_tc
plot(t,F_tc)
hold on
plot(t,Fl_data)
grid on
legend("F_{Piston}", "F_{Load}")
ylabel("Piston force [N]")
xlabel("Time [s]")
%xlim([138 146]);

subplot(2,2,3) %F_mc
plot(t,F_mc)
grid on
legend("F_{mc}")
ylabel("Friction force [N]")
xlabel("Time [s]")
xlim([138 146]);

subplot(2,2,4) %stroke
plot(t,X)
grid on
legend("Stroke")
ylabel("Piston stroke [m]")
xlabel("Time [s]")
xlim([138 146]);
