clc; 
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

%% calculations

% out stroke (positive load)
% F_tc = P1 * A - P2 * phi * A = FL
% in stroke (negative load)
% F_tc = P1 * A - P2 * phi * A = FL
% A = AC_1, A*phi = AAC_1


% calculation

L1 = 3.625;
L4 = 0.229;
Lg4x = L1-L4/2;
Lg4y = 0.08157;
abx = 0.730-0.100-0.080; %0.550; %730-100-80
aby = (0.223-0.075); %-0.130; %0.223-75
g = 9.81;
G1 =100*g;
G4 = (4*76+16)*g;

G = 440*g; %440*g; %447.10945
Gx = 3.03499; %3.03499; %3.03499
Gy = 0.140; %0.2; %0.06071

Cy = -1.040;
Cx = 0.427;
ang_CA = atan2(Cy,Cx);
ang_k = atan2(aby,abx);
b = abs(sqrt(Cy^2+Cx^2));
c = abs(sqrt(abx^2+aby^2)); %56.73
% FBD Calculations
%syms Ax Ay P gamma beta ang_C ang_AB r_cb r_ab L3(i) w_A w_C VBx VBy Vp crs_abp
L3_min = 0.772;
L3 = L3_min+X; %0.5*(x-1)/(1000-1) + 0.772;  %.172*sin(X)/1 + 0.772+0.175 0;
for i = 1:length(L3)

ang_C = acos((L3(i)^2+b^2-c^2)/(2*L3(i)*b));
beta = ang_CA + pi - ang_C;

bx = L3(i)*cos(beta) + Cx;
by = L3(i)*sin(beta) + Cy;
ang_AB =atan2(by,bx);
gamma = ang_AB + ang_k;

r_cb = [L3(i)*cos(beta);L3(i)*sin(beta);0];
r_ab = [bx; by; 0 ];


crs_abp = cross(r_ab, [cos(beta); sin(beta);0]);
matrix = [1, 0, cos(beta);
          0, 1, sin(beta);
          0, 0, r_ab(1)*sin(beta) - r_ab(2)*cos(beta)];
right = [0;(G1+G4);G*(Gx*cos(gamma)-Gy*sin(gamma))];%(G1*cos(gamma)*L1/2+G4*(cos(gamma)*Lg4x-sin(gamma)*Lg4y))

ANS = inv(matrix)*right;
Ax = ANS(1);
Ay = ANS(2);
Fl  = ANS(3); %N
Fl_data(i) = Fl;
end
Fl_data = Fl_data';



Pa = Pa_bar*1e5; %Pa
Pb = Pb_bar*1e5; %Pa
Ps = Ps_bar*1e5; %Pa
F_tc = Pa*AC_1-Pb*AAC_1;

Timeup = [71.0, 77.9]; %time moving up
Timedown = [140.8, 143.7];%time moving down
index_up_start = find( t == Timeup(1) );
index_up_end = find( t == Timeup(2) );

index_down_start = find( t == Timedown(1) );
index_down_end = find( t == Timedown(2) );

for i = 1:(index_up_end-index_up_start)
F_tc_up(i) = F_tc(i+index_up_start-1);
X_up(i) = X(i+index_up_start-1);
end
for i = 1:(index_down_end-index_down_start)
F_tc_down(i) = F_tc(i+index_down_start-1);
X_down(i) = X(i+index_down_start-1);
end

index_01_Xup = find(abs(X_up-0.1) < 0.001,1);
index_02_Xup = find(abs(X_up-0.2) < 0.001,1);
index_03_Xup = find(abs(X_up-0.3) < 0.001,1);
index_04_Xup = find(abs(X_up-0.4) < 0.001,1);

index_01_Xdown = find(abs(X_down-0.1) < 0.001,1);
index_02_Xdown = find(abs(X_down-0.2) < 0.001,1);
index_03_Xdown = find(abs(X_down-0.3) < 0.001,1);
index_04_Xdown = find(abs(X_down-0.413) < 0.001,1,"last");

F_f_plot = [ (F_tc_up(index_01_Xup)+F_tc_down(index_01_Xdown))/2, (F_tc_up(index_02_Xup)+F_tc_down(index_02_Xdown))/2,(F_tc_up(index_03_Xup)+F_tc_down(index_03_Xdown))/2,(F_tc_up(index_04_Xup)+F_tc_down(index_04_Xdown))/2];
X_fric_plot = [0.1, 0.2, 0.3, 0.4];

F_up = (F_tc(index_up_start)+F_tc(index_up_end))/2; % avrage force up

F_down = (F_tc(index_down_start)+F_tc(index_down_end))/2; % avrage force down

F_friction = (F_up-F_down)/2;



%% PLoting
Image_hight = 700;
Image_with = 2*Image_hight;
figure("Position",[570-Image_with, 2510-Image_hight ,Image_with ,Image_hight],"Name","Force Plot")
% Figure("Name","Force Plot")
plot(X_up,F_tc_up)
hold on
plot(X_down,F_tc_down)
plot(X_fric_plot  ,F_f_plot)
plot(X,Fl_data, "LineStyle","--")
grid on
legend( "Cylinder force going up" , "Cylinder force going down" ,"Calculated friction force from data", "Teoretical cylinder force","Location","southwest")
ylabel("Force [N]")
xlabel("Stroke [m]")
xlim([0 0.5]);

Pa = out.pa * 1e5;
Pb = out.pb * 1e5;
x = out.x;

F_tc = Pa*AC_1-Pb*AAC_1;
plot(x,F_tc)
