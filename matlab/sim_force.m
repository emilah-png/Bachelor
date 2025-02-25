clc; clear; close;

load red_crane_sim_force.mat

stroke_main = data{31}.extractTimetable.Variables;
Force_main = data{18}.extractTimetable.Variables;
plot(stroke_main,Force_main)
xlim([0 0.75])