clc; clear; close;
load stroke2angle.mat
knuckl_pos = data{17}.extractTimetable;
main_pos = data{31}.extractTimetable;
angle_b = data{32}.extractTimetable;
angle_c = data{33}.extractTimetable;
plot(knuckl_pos.Variables,rad2deg(angle_c.Variables))
hold on
plot(main_pos.Variables,rad2deg(angle_b.Variables))
grid on
legend("Angle C as a function of knuckle stroke","Angle B as a function of main stroke","Location","southeast")
table1 = [rad2deg(angle_b.Variables),main_pos.Variables];
table2 = [rad2deg(angle_c.Variables),knuckl_pos.Variables];
p = polyfit(main_pos.Variables,rad2deg(angle_b.Variables),1)