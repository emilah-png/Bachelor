clc; clear;
Jib_data=readtable('CSV plotter\Adjusted_JibValveResponseTime_3Pressure_010425.csv');
Main_data=readtable('CSV plotter\Adjusted_MainValveResponseTime_3Pressure_010425.csv');

%%%%%%%%%%
%constants
%%%%%%%%%%
D_Main = 0.160; %m
r_Main = 0.100; %m
D_Jib = 0.150; %m
r_Jib = 0.100; %m
Area_Main = pi/4*(D_Main^2);
RArea_Main = pi/4*(D_Main^2-r_Main^2);
Area_Jib = pi/4*(D_Jib^2);
RArea_Jib = pi/4*(D_Jib^2-r_Jib^2);
u_init = 0.2;
u_end = 0.8;

% for i = 1:4000
%     Main_data_130(i,:) = Main_data(i,:);
% end
% for i = 4000:8000
%     Main_data_140(i,:) = Main_data(i,:);
% end
for i = 8000:11000
    Main_data_150(i,:) = Main_data(i,:);
end

% for i = 1:4000
%     Jib_data_130(i,:) = Jib_data(i,:);
% end
% for i = 8000:12000
%     Jib_data_140(i,:) = Jib_data(i,:);
% end
for i = 13000:17000
    Jib_data_150(i,:) = Jib_data(i,:);
end