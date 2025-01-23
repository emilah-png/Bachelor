clc; clear; close;

% inserting data------------------------------------------------------------
load NewK_090125.mat
Run = data{7};
Pa_CBV_DCV = Run{4}.extractTimetable;
Pa_CBV_Cyl = Run{3}.extractTimetable;
Pb = Run{7}.extractTimetable;
Psupply = Run{10}.extractTimetable;
Piston_stroke = Run{9}.extractTimetable;
Control_signal = Run{15}.extractTimetable;

time_start = 70;
time_end = 93;
% plotting----------------------------------------------------------------------
figure('Position', [100 0 900 750]) %predetermind size and position of plot window

%plotting pressure plot
subplot(3,1,1)

%Pa between Counter balance valve and directional control valve
plot(Pa_CBV_Cyl.Time,Pa_CBV_Cyl.Variables,"LineWidth",2,Color="m") 
hold on

%Pa between counter balance valve and directional control valve
plot(Pa_CBV_DCV.Time,Pa_CBV_DCV.Variables,"LineWidth",2,Color="r")

%Pb
plot(Pb.Time,Pb.Variables,"LineWidth",2,Color="g")

%Psupply
plot(Psupply.Time,Psupply.Variables,"LineWidth",2,Color="b")
grid on
% --------Plot parameters--------------------------
title("Pressure plot")
xlim([seconds(time_start) seconds(time_end)])
ylim([0 115])
legend("P_{A CBV-Cyl}","P_{A CBV-DCV}","P_B","P{Supply}",'Orientation','horizontal','NumColumns',2 ...
    ,'Location','west')
%---------------------------------------------------

%plotting piston stroke 
subplot(3,1,2)
plot(Piston_stroke.Time,Piston_stroke.Variables,"LineWidth",2,Color=[0.6 0.1 0])
grid on
% --------Plot parameters--------------------------
title("Piston stroke plot")
xlim([seconds(time_start) seconds(time_end)])
ylim([0 0.3])
legend("Piston stroke")
%---------------------------------------------------

%plotting control signal to valve 
subplot(3,1,3)
plot(Control_signal.Time,Control_signal.Variables,"LineWidth",2,Color=[1 0.5 0])
grid on
% --------Plot parameters--------------------------
title("Piston stroke plot")
xlim([seconds(time_start) seconds(time_end)])
ylim([-0.3 0.3])
legend("Control signal")
%---------------------------------------------------