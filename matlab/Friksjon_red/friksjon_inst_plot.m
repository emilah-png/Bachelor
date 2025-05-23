clc; 
%% load data friction test
load FrictionTest2ndTry_030325.mat

Pa_main_data = data{42}.extractTimetable;
Pb_main_data = data{28}.extractTimetable;
X_main_data = data{31}.extractTimetable;

Pa_jib_data = data{39}.extractTimetable;
Pb_jib_data = data{38}.extractTimetable;
X_jib_data = data{5}.extractTimetable;

t = time2num(Pa_main_data.Time); %s 

% Data main
Pa_main_bar = Pa_main_data.Variables; %Bar
Pb_main_bar = Pb_main_data.Variables; %Bar
X_main = X_main_data.Variables; %m

% Data jib
Pa_jib_bar = Pa_jib_data.Variables; %Bar
Pb_jib_bar = Pb_jib_data.Variables; %Bar
X_jib = X_jib_data.Variables; %m

% 
% % Load data simulink test
% stroke_main = out.Pos_main;
% Force_main = out.Force_main;
% 
% stroke_knuckle = out.Pos_jib;
% Force_knuckle = out.Force_jib;

load red_crane_sim_force_winchload4.mat 

stroke_main_wire = data{1}{37}.extractTimetable.Variables;
Force_main_wire = data{1}{22}.extractTimetable.Variables;

% load red_crane_sim_force_wire.mat
stroke_knuckle_wire = data{2}{21}.extractTimetable.Variables;
Force_knuckle_wire = data{2}{1}.extractTimetable.Variables;

% load red_crane_sim_force_wire2.mat 
% 
% stroke_main_wire2 = data{1}{33}.extractTimetable.Variables;
% Force_main_wire2 = data{1}{20}.extractTimetable.Variables;
% 
% load red_crane_sim_force_wire2.mat
% stroke_knuckle_wire2 = data{2}{19}.extractTimetable.Variables;
% Force_knuckle_wire2 = data{2}{1}.extractTimetable.Variables;

%% Cylinder data
% Cylinder main
sC_main = 0.75; % Stroke
l0C_main = 0.4; % ?? Deadlength
x0C_main = 0.2; % ?? Initial position
dC_main = 0.160; % Piston diameter
dRC_main = 0.100; % Rod diameter 

% Derived values
d0C_main = dC_main + dC_main/4; % Cylinder outer diameter
lC_main = sC_main + l0C_main/3; % Cylinder length
tEPC_main = l0C_main/6; % Thickness of end plate
dJC_main = l0C_main/3; % Diameter of joint
lRC_main = dRC_main; % Length of joint
lRC_main = sC_main + tEPC_main; % Length of rod
tPC_main = l0C_main/3; % Thickness of piston
AC_main = pi*dC_main^2/4; % Piston area
ARC_main = pi*dRC_main^2/4; % Rod area
AAC_main = AC_main - ARC_main; % Annulus area

%Cylinder jib
sC_jib = 0.85; %Stroke
l0C_jib = 0.4; % ?? Deadlength
x0C_jib = 0.2; % ?? Initial position
dC_jib = 0.150; %Piston diameter
dRC_jib = 0.100; %Rod diameter

%Derived values
d0C_jib = dC_jib + dC_jib/4; %Cylinder outer diameter
lC_jib = sC_jib + l0C_jib/3; %Cylinder length
tEPC_jib = l0C_jib/6; %Thickness of end plate
dJC_jib = l0C_jib/3; %Diameter of joint
lRC_jib = dRC_jib; %Length of joint
lRC_jib = sC_jib + tEPC_jib; %Length of rod
tPC_jib = l0C_jib/3; %Thickness of piston
AC_jib = pi*dC_jib^2/4; %Piston area
ARC_jib = pi*dRC_jib^2/4; %Rod area
AAC_jib = AC_jib - ARC_jib; %Annulus area


%% Calculations force

Pa_main = Pa_main_bar*1e5; %Pa
Pb_main = Pb_main_bar*1e5; %Pa
F_main_tc = Pa_main*AC_main-Pb_main*AAC_main;

Pa_jib = Pa_jib_bar*1e5; %Pa
Pb_jib = Pb_jib_bar*1e5; %Pa
F_jib_tc = Pa_jib*AC_jib-Pb_jib*AAC_jib; 

%% Ploting

% Stroke main and jib
figure("Name","Stroke Plot")
plot(t,X_jib)
hold on
plot(t,X_main)
grid on
legend("Stroke jib","Stroke main")
xlabel("Time [s]")
ylabel("Stroke [m]")

% % Force Main
% figure("Name","Force Plot Main")
% plot(X_main,F_main_tc)
% hold on 
% % plot(stroke_main,Force_main)
% % plot(stroke_main_wire,Force_main_wire)
% % plot(stroke_main_wire2,Force_main_wire2)
% grid on
% legend("Force Main")
% % legend("Force Main", "Simulated Force","With wire","With wire+winch")
% ylabel("Force [N]")
% xlabel("Stroke [m]")
% xlim([0 0.75])
% 
% % Force Jib
% figure("Name","Force Plot Jib")
% plot(X_jib,F_jib_tc)
% hold on 
% % plot(stroke_knuckle,Force_knuckle)
% % plot(stroke_knuckle_wire,Force_knuckle_wire)
% % plot(stroke_knuckle_wire2,Force_knuckle_wire2)
% grid on
% legend("Force Jib")
% % legend("Force Jib", "Simulated Force","With wire","With wire+winch")
% ylabel("Force [N]")
% xlabel("Stroke [m]")
% xlim([0 0.85]) 


%% Plotting with interval
% Main interval
Timeup_main = [318, 383]; % Time moving up
Timedown_main = [390, 779];% Time moving down

index_up_start_main = find( t == Timeup_main(1) );
index_up_end_main = find( t == Timeup_main(2) );
index_down_start_main = find( t == Timedown_main(1) );
index_down_end_main = find( t == Timedown_main(2) );

for i = 1:(index_up_end_main-index_up_start_main)
F_tc_up_main(i) = F_main_tc(i+index_up_start_main-1);
X_up_main(i) = X_main(i+index_up_start_main-1);
end
for i = 1:(index_down_end_main-index_down_start_main)
F_tc_down_main(i) = F_main_tc(i+index_down_start_main-1);
X_down_main(i) = X_main(i+index_down_start_main-1);
end


% Jib interval
Timeup_jib = [27, 122]; % Time moving up
Timedown_jib = [133, 190];% Time moving down

index_up_start_jib = find( t == Timeup_jib(1) );
index_up_end_jib = find( t == Timeup_jib(2) );
index_down_start_jib = find( t == Timedown_jib(1) );
index_down_end_jib = find( t == Timedown_jib(2) );

for i = 1:(index_up_end_jib-index_up_start_jib)
F_tc_up_jib(i) = F_jib_tc(i+index_up_start_jib-1);
X_up_jib(i) = X_jib(i+index_up_start_jib-1);
end
for i = 1:(index_down_end_jib-index_down_start_jib)
F_tc_down_jib(i) = F_jib_tc(i+index_down_start_jib-1);
X_down_jib(i) = X_jib(i+index_down_start_jib-1);
end


figure("Name","Force Plot Main Interval")
plot(X_down_main,F_tc_down_main)
hold on 
plot(X_up_main,F_tc_up_main)
% plot(stroke_main,Force_main)
% plot(stroke_main_wire,Force_main_wire)
% plot(stroke_main_wire2,Force_main_wire2)
% legend("Force up", "Force down")
legend("Force up", "Force down", "Simulated Force","With wire","With wire+winch")
ylabel("Force [N]")
xlabel("Stroke [m]")
xlim([0.15 0.75])
ylim([0 14e4])


figure("Name","Force Plot Jib Interval")
plot(X_up_jib,F_tc_up_jib)
hold on 
plot(X_down_jib,F_tc_down_jib)
% plot(stroke_knuckle,Force_knuckle)
% plot(stroke_knuckle_wire,Force_knuckle_wire)
% plot(stroke_knuckle_wire2,Force_knuckle_wire2)
% legend("Force up", "Force down")
legend("Force up", "Force down", "Simulated Force","With wire","With wire+winch")
ylabel("Force [N]")
xlabel("Stroke [m]")
xlim([0 0.9])
ylim([0 5e4])


%%
index_main_down_025 = find(abs(X_down_main-0.25) < 1e-3,1) ;
index_main_up_025 = find(abs(X_up_main-0.25) < 1e-3,1); 
F_down_main_025 = F_tc_down_main(index_main_down_025);
F_Up_main_025 = F_tc_up_main(index_main_up_025);

index_main_down_04 = find(abs(X_down_main-0.4) < 1e-3,1) ;
index_main_up_04 = find(abs(X_up_main-0.4) < 1e-3,1); 
F_down_main_04 = F_tc_down_main(index_main_down_04);
F_Up_main_04 = F_tc_up_main(index_main_up_04);

index_main_down_06 = find(abs(X_down_main-0.6) < 1e-3,1) ;
index_main_up_06 = find(abs(X_up_main-0.6) < 1e-3,1); 
F_down_main_06 = F_tc_down_main(index_main_down_06);
F_Up_main_06 = F_tc_up_main(index_main_up_06);

F_down_main = [F_down_main_025, F_down_main_04,F_down_main_06];
F_Up_main = [F_Up_main_025,F_Up_main_04,F_Up_main_06];
F_main = (F_down_main-F_Up_main)/2;
X_main_fric = [0.25,0.4,0.6];
figure()
plot(X_main_fric,F_main)
for i = 1:1:(600-250)
    ref = i/1000+0.25;
    index_main_down_fric = find(abs(X_down_main-ref) < 1e-3,1) ;
    index_main_up_fric = find(abs(X_up_main-ref) < 1e-3,1) ;
    F_down_main_fric(i) = F_tc_down_main(index_main_down_fric);
    F_Up_main_fric(i) = F_tc_up_main(index_main_up_fric);
    F_main_fric(i) = (F_down_main_fric(i)-F_Up_main_fric(i))/2;
    X_main_fric(i) = ref;
end
hold on
plot(X_main_fric,F_main_fric)
plot(X_main_fric,smoothdata(F_main_fric,"SmoothingFactor",0.5))

index_jib_down_025 = find(abs(X_down_jib-0.25) < 1e-3,1) ;
index_jib_up_025 = find(abs(X_up_jib-0.25) < 1e-3,1); 
F_down_jib_025 = F_tc_down_jib(index_jib_down_025);
F_Up_jib_025 = F_tc_up_jib(index_jib_up_025);

index_jib_down_04 = find(abs(X_down_jib-0.4) < 1e-3,1) ;
index_jib_up_04 = find(abs(X_up_jib-0.4) < 1e-3,1); 
F_down_jib_04 = F_tc_down_jib(index_jib_down_04);
F_Up_jib_04 = F_tc_up_jib(index_jib_up_04);

index_jib_down_06 = find(abs(X_down_jib-0.6) < 1e-3,1) ;
index_jib_up_06 = find(abs(X_up_jib-0.6) < 1e-3,1); 
F_down_jib_06 = F_tc_down_jib(index_jib_down_06);
F_Up_jib_06 = F_tc_up_jib(index_jib_up_06);

F_down_jib = [F_down_jib_025, F_down_jib_04,F_down_jib_06];
F_Up_jib = [F_Up_jib_025,F_Up_jib_04,F_Up_jib_06];
F_jib = (-F_down_jib+F_Up_jib)/2;
X_jib_fric = [0.25,0.4,0.6];
figure()
plot(X_jib_fric,F_jib)
for i = 1:1:(600-250)
    ref = i/1000+0.25;
    index_jib_down_fric = find(abs(X_down_jib-ref) < 1e-3,1) ;
    index_jib_up_fric = find(abs(X_up_jib-ref) < 1e-3,1) ;
    F_down_jib_fric(i) = F_tc_down_jib(index_jib_down_fric);
    F_Up_jib_fric(i) = F_tc_up_jib(index_jib_up_fric);
    F_jib_fric(i) = (-F_down_jib_fric(i)+F_Up_jib_fric(i))/2;
    X_jib_fric(i) = ref;
end
hold on
plot(X_jib_fric,F_jib_fric)
plot(X_jib_fric,smoothdata(F_jib_fric,"SmoothingFactor",0.8))
