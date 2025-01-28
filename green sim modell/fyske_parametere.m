clc; clear; close;
%% Constants
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
%% Calculations
%syms Ax Ay P gamma beta ang_C ang_AB r_cb r_ab L3 w_A w_C VBx VBy Vp crs_abp

for x = 1 : 1000
    X = 8*pi*(x-1)/(1000-1);
L3 = 0.5*(x-1)/(1000-1) + 0.772;  %.172*sin(X)/1 + 0.772+0.175 0;
L3_plot(x) = L3;
x_plot(x) = x;
Vp = 1;

ang_C = acos((L3^2+b^2-c^2)/(2*L3*b));
beta = ang_CA + pi - ang_C;

bx = L3*cos(beta) + Cx;
by = L3*sin(beta) + Cy;
ang_AB =atan2(by,bx);
gamma = ang_AB + ang_k;

r_cb = [L3*cos(beta);L3*sin(beta);0];
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
P  = ANS(3);
p_plot(x) = P;

roh = 850;
u = 1;
u_0 = 0.8/7;
Fl = P;
Ffr = 0.005*Fl;
A = 33.1/100^2;
A2 = 23.6/100^2;
phi = A2/A;
Q_max = 25/60000;
dp0 = 7*10^5; 
Pcr = 210*10^5;
Q = Q_max*(u-u_0)/(1-u_0);
Cd = 0.6;
Ad_dcv = Q_max/(Cd*sqrt(2/roh)*sqrt(dp0));

%% out stroke
dp_chk = 4*10^5;
P3_out = dp0;
P2_out = (Fl/A + phi*P3_out + Ffr/A) ;
P1_out = (P2_out + dp_chk);
plot_p1_out(x) = P1_out;
x_dot = Q/A;

%% inn stroke
P1_in = dp0;
alpha = 3;
M =[A, -phi*A;
    1, alpha];
N =[Fl-Ffr;
    Pcr+(1+alpha)*P1_in];
X = M\N;
P2_in = X(1);
P3_in = X(2);
plot_p3_in(x) = P3_in;

Ad = Q/phi * 1/(Cd*sqrt(2/roh)*sqrt(P2_in-P1_in));
end
plot(x_plot , p_plot)
hold on
plot(x_plot , plot_p1_out)
% VBx = Vp * cos(beta);
% VBy = Vp * sin(beta);
% w_A = VBx/rot_rab(1);
% w_A1 = VBy/rot_rab(2);
% w_C = VBx/rot_rcb(1);
% w_C1 = VBy/rot_rcb(2);

%VBx = w_A*rot_rab(1);
%eqn_way = VBy == w_A*rot_rab(2);
%eqn_wcx = VBx == w_C*rot_rcb(1);
%eqn_wcy = VBy == w_C*rot_rcb(2);


%sumfx = 0 == Ax + P*cos(beta);
%sumfy = 0 == Ay + P*sin(beta);
%sumMa = 0 == crs_abp(3)*P + G4*(L1-L4/2)*cos(gamma);


%crs_abp = cross(r_ab, [cos(beta); sin(beta);0] );



%input= L3 == 1;
%input2 = Vp == 1;
%sumfx = 0 == Ax + P*cos(beta);
%sumfy = 0 == Ay + P*sin(beta);
%eqn_rcb = r_cb == [L3*cos(beta);L3*sin(beta);0];
%eqn_rab = r_ab == [abx*cos(gamma)+aby*sin(gamma); -aby*cos(gamma)+abx*sin(gamma); 0 ];
%sumMa = 0 == crs_abp(3)*P + G4*(L1-L4/2)*cos(gamma);
%eqn_angC = ang_C == acos((L3^2+b^2-c^2)/(2*L3*b));
%eqn_gamma = gamma == ang_AB-ang_k;
%egn_beta = beta == ang_CA-ang_C;
%eqn_wax = VBx == w_A*rot_rab(1);
%eqn_way = VBy == w_A*rot_rab(2);
%eqn_wcx = VBx == w_C*rot_rcb(1);
%eqn_wcy = VBy == w_C*rot_rcb(2);
%eqn_vbx = VBx == Vp * cos(beta);
%eqn_vby = VBy == Vp * sin(beat);

%eqns = [inpu input2 sumfx sumfy eqn_rcb eqn_rab sumMa eqn_angC eqn_gamma eqn_beta eqn_wax eqn_way eqn_wcx eqn_wcy eqn_vbx eqn_vby];

%s = solve(eqns, [Ax Ay P gamma beta ang_C ang_AB r_cb r_ab L3 w_A w_C VBx VBy Vp crs_abp])

