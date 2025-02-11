clc; clear; close;
load stroke2angle.mat
knuckl_pos = data{17}.extractTimetable;
main_pos = data{31}.extractTimetable;
angle_b = data{32}.extractTimetable;
angle_c = data{33}.extractTimetable;

table1 = [rad2deg(angle_b.Variables),main_pos.Variables];
table2 = [rad2deg(angle_c.Variables),knuckl_pos.Variables];
main = main_pos.Variables;
knuckle = knuckl_pos.Variables;
C = rad2deg(angle_c.Variables);
B = rad2deg(angle_b.Variables);

i = 1;
check = 0;
while check < 0.1   
    check = main(i);
    index1 = i;
    i = i+1;
end

i = 1;
check = 0;
while check < 0.1   
    check = knuckle(i);
    index2 = i;
    i = i+1;
end


p_b = polyfit( main(index1:length(main)) , B(index1:length(B)) ,1);
p_c = polyfit( knuckle(index2:length(knuckle)) , C(index2:length(C)) ,1);

xb = linspace(0 , 0.85);
xc = linspace(0, 0.75);
ploy_b = p_b(1)*xb+p_b(2);
ploy_c = p_c(1)*xc+p_c(2);

plot(knuckl_pos.Variables,rad2deg(angle_c.Variables))
hold on
plot(main_pos.Variables,rad2deg(angle_b.Variables))
plot(xb,ploy_b)
plot(xc,ploy_c)
grid on
legend("Angle C as a function of knuckle stroke","Angle B as a function of main stroke","Location","southeast")