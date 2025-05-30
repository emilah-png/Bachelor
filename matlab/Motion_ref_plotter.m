clc; clear; close all; 

set(0,'DefaultLineLineWidth',2)

t_sys=40;
initial_pos_Main = 0.45; 
amplitude = 0.1;
median = initial_pos_Main+amplitude;
frekvens = 1/t_sys; % 1/20

dt = 0.1; 
t = 0:dt:t_sys;

x = median - amplitude * cos(2 * pi * frekvens * t);
x_dot = amplitude * 2 * pi * frekvens * sin(2 * pi * frekvens * t);

% Plot
figure;
subplot(2,2,1)
plot(t, x);
grid on;

subplot(2,2,2)
plot(t, x_dot);
grid on 




a_max = 0.1;
a_0 = 0;
v_0 = 0;
v_max = 0.01;
t_ramp = 5;
a_ref = v_max/t_ramp;
start_time = 1;
hold_time = 10;
if a_ref>a_max
    a_ref=a_max;
    y=0;
end
t1 = start_time;
t2 = t1 + t_ramp;
t3 = t2 + hold_time;
t4 = t3 + t_ramp; 
t5 = t4 + start_time;
t6 = t5 + t_ramp;
t7 = t6 + hold_time;
t8 = t7 + t_ramp;
t9 = t8 + start_time;

for t_ms = 0:(t9+1)*1000
i = t_ms+1;
t(i)=t_ms/1000;
if t(i) < t1
    y(i) = v_0;
    y_int(i) = v_0*t(i);
elseif t(i) < t2 % ramp up speed
    y(i) = v_0 + a_ref*(t(i)-t1);
    y_int(i) = v_0*t(i) + a_ref*(t(i)-t1)^2/2;
elseif t(i) < t3 %holding speed
    y(i) = v_0 + a_ref*t_ramp;
    y_int(i) = (a_ref*t_ramp)*(t(i)-t2)+a_ref*t_ramp^2/2;
elseif t(i) < t4 %ramping down speed
    y(i) = v_0 + a_ref*t_ramp - a_ref*(t(i)-t3);
    y_int(i) =  (a_ref*t_ramp*hold_time + a_ref*t_ramp^2/2) +a_ref*t_ramp*(t(i)-t3) - a_ref*(t(i)-t3)^2/2; %- a_ref*(t(i)-t3)^2/2
elseif t(i) < t5 %holding 0
    y(i) = v_0;
    y_int(i) = (v_0)*t(i)+(a_ref*t_ramp*hold_time + a_ref*t_ramp^2/2) +a_ref*t_ramp*(t_ramp) - a_ref*(t_ramp)^2/2;

elseif t(i) < t6 %ramping down speed
    y(i) = v_0 - a_ref*(t(i)-t5);
    y_int(i) = v_0 - a_ref*(t(i)-t5)^2/2 +(a_ref*t_ramp*hold_time + a_ref*t_ramp^2/2) +a_ref*t_ramp*(t_ramp) - a_ref*(t_ramp)^2/2;
elseif t(i) < t7 %holdin speed
    y(i)  = v_0 - a_ref*t_ramp;
    y_int(i) = (v_0 - a_ref*t_ramp)*(t(i)-t6) - a_ref*(t_ramp)^2/2+(v_0)*t(i)+(a_ref*t_ramp*hold_time + a_ref*t_ramp^2/2) +a_ref*t_ramp*(t_ramp) - a_ref*(t_ramp)^2/2;
elseif t(i) < t8 %ramping up speed
    y(i) = v_0 - a_ref*t_ramp + a_ref*(t(i)-t7);
    y_int(i) =  - a_ref*t_ramp*(t(i)-t7) + a_ref*(t(i)-t7)^2/2 +(v_0 - a_ref*t_ramp)*hold_time - a_ref*(t_ramp)^2/2+(v_0)*t(i)+(a_ref*t_ramp*hold_time + a_ref*t_ramp^2/2) +a_ref*t_ramp*(t_ramp) - a_ref*(t_ramp)^2/2;
else %holding 0
    y(i) = v_0;
    y_int(i) = (v_0)*t(i);
end
end

subplot(2,2,4)
plot(t,y)
grid on
subplot(2,2,3)
plot(t,y_int)
grid on