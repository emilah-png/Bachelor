clc; 
dC_1 = 0.065; %Piston diameter
dRC_1 = 0.035; %Rod diameter
AC_1 = pi*dC_1^2/4; %Piston area
ARC_1 = pi*dRC_1^2/4; %Rod area
AAC_1 = AC_1 - ARC_1; %Annulus area


Pa = out.pa * 1e5;
Pb = out.pb * 1e5;
x = out.x;

F_tc = Pa*AC_1-Pb*AAC_1;
plot(x,F_tc)