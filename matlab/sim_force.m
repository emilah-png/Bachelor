clc; clear; close all;

load red_crane_sim_force.mat

stroke_main = data{2}{33}.extractTimetable.Variables;
Force_main = data{2}{20}.extractTimetable.Variables;
figure
plot(stroke_main,Force_main)
xlim([0 0.75])

load red_crane_sim_force2.mat
stroke_knuckle = data{2}{19}.extractTimetable.Variables;
Force_knuckle = data{2}{1}.extractTimetable.Variables;
figure
plot(stroke_knuckle,Force_knuckle)
xlim([0 0.75])