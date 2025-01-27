clc; clear; close all; 

% Get data from file
load('SinusHorisontalStartMedFlow.mat')

Run = data{17}.extractTimetable;
Control_signal = Run.("<fU_G_OPCfU>");

time = Run.Time;
time = time2num(time);

inputData = timeseries(Control_signal,time);
save("inputData.mat","inputData","-v7.3");

