clc; clear; close all;
file_path = 'Simulink_Data\';
PNG_path = 'Simulink_figures\PNG\'; 
EPS_path = 'Simulink_figures\EPS\';
file = "sim_Main1Test_090525";
file_name = file_path+file+'.mat';
Data = load(file_name);



%% Reading data

Time = Data.data{1}.Values.time;
% Main cylinder signals
Main.PaDCV   = Data.data{29}.Values.Data;
Main.PaCyl   = Data.data{30}.Values.Data;
Main.Pb      = Data.data{31}.Values.Data;
Supply_pressure = Data.data{34}.Values.Data;
% Main.Xref    = Data.data{14}.Values.Data;
% Main.Xreal   = Data.data{32}.Values.Data;
% Main.Vref    = Data.data{--}.Values.Data;
% Main.Vreal   = Data.data{33}.Values.Data;
Main.FF      = Data.data{16}.Values.Data;
Main.PID     = Data.data{17}.Values.Data;
Main.U       = Data.data{19}.Values.Data;
% Main.Error   = Data.data{18}.Values.Data;

% Jib cylinder signals
Jib.PaDCV    = Data.data{23}.Values.Data;
Jib.PaCyl    = Data.data{22}.Values.Data;
Jib.PbDCV    = Data.data{25}.Values.Data;
Jib.PbCyl    = Data.data{24}.Values.Data;
% Jib.Xref     = Data.data{14}.Values.Data;
% Jib.Xreal    = Data.data{3}.Values.Data;
% Jib.Vref     = Data.data{--}.Values.Data;
% Jib.Vreal    = Data.data{27}.Values.Data;
Jib.FF       = Data.data{8}.Values.Data;
Jib.PID      = Data.data{10}.Values.Data;
Jib.U        = Data.data{9}.Values.Data;
% Jib.Error    = Data.data{11}.Values.Data;
%% Choosing Plots
Enable.All = 0;
if Enable.All
Enable.Main_Pressure = 1;
Enable.Main_Position = 1;
Enable.Main_Velocity = 1;
Enable.Main_ControlSignal = 1;
Enable.Main_Error =1;
Enable.Jib_Pressure = 1;
Enable.Jib_Position = 1;
Enable.Jib_Velocity = 1;
Enable.Jib_ControlSignal = 1;
Enable.Jib_Error = 1;
else
Enable.Main_Pressure = 1;
Enable.Main_Position = 0;
Enable.Main_Velocity = 0;
Enable.Main_ControlSignal = 1;
Enable.Main_Error =0;
Enable.Jib_Pressure = 1;
Enable.Jib_Position = 0;
Enable.Jib_Velocity = 0;
Enable.Jib_ControlSignal = 1;
Enable.Jib_Error = 0;
end

%% Plotting Data
set(0, 'DefaultLineLineWidth', 2);

% ------------ Main Cylinder Plots ---------------

% Pressure at Main Cylinder
if Enable.Main_Pressure
Main_pressure = figure('Name','Pressure at Main cylinder');
plot(Time, Supply_pressure)
hold on; grid on
plot(Time, Main.PaDCV)   % Main Pressure at Directional Control Valve A port
plot(Time, Main.Pb)      % Main Pressure at Directional Control Valve B port
plot(Time, Main.PaCyl)   % Main Pressure at Counter Balance Valve A port
title('Simulated Pressure at Main cylinder')
legend('Supply pressure', 'Pa @DCV', 'Pb @DCV', 'Pa @Cylinder')
xlabel('Time [s]')
ylabel('Pressure [bar]')
xlim([0 50])
ylim([0 210])
end 

% Position (Xref vs Xreal)
if Enable.Main_Position
Main_position = figure('Name','Position of Main cylinder');
plot(Time, Main.Xref)
hold on; grid on
plot(Time, Main.Xreal)
title('Simulated Position of Main cylinder')
legend('X_{ref}', 'X_{real}')
ylim([0 1])
end 

% Velocity (Vref vs Vreal)
if Enable.Main_Velocity
Main_velocity = figure('Name','Velocity of Main cylinder');
plot(Time, Main.Vref)
hold on; grid on
plot(Time, Main.Vreal)
title('Simulated Velocity of Main cylinder')
legend('V_{ref}', 'V_{real}')
ylim([0 1])
end 

% Control Signals (FF, PID, U)
if Enable.Main_ControlSignal
Main_ControlSignal = figure('Name','Control Signals for Main cylinder');
plot(Time, Main.FF)
hold on; grid on
plot(Time, Main.PID)
plot(Time, Main.U)
title('Simulated Control Signals for Main DCV')
legend('Feedforward', 'PID', 'Output Signal')
xlabel('Time [s]')
ylabel('Control Signal')
ylim([-0.4 0.4])
end

% Error
if Enable.Main_Error
Main_error = figure('Name','Error of Main cylinder');
plot(Time, Main.Error)
hold on; grid on
title('Simulated Error of Main cylinder')
legend('Error')
ylim([-0.003 0.003])
end 

% ------------ Jib Cylinder Plots ---------------

% Pressure at Jib Cylinder
if Enable.Jib_Pressure
Jib_pressure = figure('Name','Pressure at Jib cylinder');
plot(Time, Supply_pressure)
hold on; grid on
plot(Time, Jib.PaDCV)   % Main Pressure at Directional Control Valve A port
plot(Time, Jib.PbDCV)   % Main Pressure at Directional Control Valve B port
plot(Time, Jib.PaCyl)   % Main Pressure at Counter Balance Valve A port
plot(Time, Jib.PbCyl)   % Main Pressure at Counter Balance Valve B port
title('Simulated Pressure at Jib cylinder')
legend('Supply pressure', 'Pa @DCV', 'Pb @DCV', 'Pa @Cylinder', 'Pb @Cylinder')
xlabel('Time [s]')
ylabel('Pressure [bar]')
xlim([0 50])
ylim([0 210])
end

% Position (Xref vs Xreal)
if Enable.Jib_Position
Jib_position = figure('Name','Position of Jib cylinder');
plot(Time, Jib.Xref)
hold on; grid on
plot(Time, Jib.Xreal)
title('Simulated Position of Jib cylinder')
legend('X_{ref}', 'X_{real}')
ylim([0 1])
end

% Velocity (Vref vs Vreal)
if Enable.Jib_Velocity
Jib_velocity = figure('Name','Velocity of Jib cylinder');
plot(Time, Jib.Vref)
hold on; grid on
plot(Time, Jib.Vreal)
title('Simulated Velocity of Jib cylinder')
legend('V_{ref}', 'V_{real}')
ylim([0 1])
end

% Control Signals (FF, PID, U)
if Enable.Jib_ControlSignal
Jib_ControlSignal = figure('Name','Control Signals for Jib cylinder');
plot(Time, Jib.FF)
hold on; grid on
plot(Time, Jib.PID)
plot(Time, Jib.U)
title('Simulated Control Signals for Jib DCV')
legend('Feedforward', 'PID', 'Output Signal')
xlabel('Time [s]')
ylabel('Control Signal')
ylim([-0.5 0.5])
end

% Error
if Enable.Jib_Error
Jib_Error = figure('Name','Error of Jib cylinder');
plot(Time, Jib.Error)
hold on; grid on
title('Simulated Error of Jib cylinder')
legend('Error')
ylim([-0.0045 0.0045])
end 

%% Gernral sub plot
% f = figure;
% f.Position = [50 50 1400 700];
% subplot(2,2,1)
%     plot(Time, Supply_pressure)
%     hold on; grid on
%     plot(Time, Main.PaDCV)   % Main Pressure at Directional Control Valve A port
%     plot(Time, Main.Pb)      % Main Pressure at Directional Control Valve B port
%     plot(Time, Main.PaCyl)   % Main Pressure at Counter Balance Valve A port
%     title('Simulated Pressure at Main cylinder')
%     legend('P_{Supply}', 'Pa @DCV', 'Pb @DCV', 'Pa @Cylinder','Position',[0.06 0.874 0 0])
%     % ylim([0 160])
% subplot(2,2,2)
%     plot(Time, Supply_pressure)
%     hold on; grid on
%     plot(Time, Jib.PaDCV)   % Main Pressure at Directional Control Valve A port
%     plot(Time, Jib.PbDCV)   % Main Pressure at Directional Control Valve B port
%     plot(Time, Jib.PaCyl)   % Main Pressure at Counter Balance Valve A port
%     plot(Time, Jib.PbCyl)   % Main Pressure at Counter Balance Valve B port
%     title('Simulated Pressure at Jib cylinder')
%     legend('P_{Supply}', 'Pa @DCV', 'Pb @DCV', 'Pa @Cylinder', 'Pb @Cylinder','Position',[0.95 0.863 0 0])
%     % ylim([0 160])
% subplot(2,2,3)
%     plot(Time, Main.FF)
%     hold on; grid on
%     plot(Time, Main.PID)
%     plot(Time, Main.U)
%     title('Simulated Control Signals for Main DCV')
%     legend('Feedforward', 'PID', 'Control Signal','Position',[0.06 0.589 0 0])
%     % ylim([-1 1])
% subplot(2,2,4)
%     plot(Time, Jib.FF)
%     hold on; grid on
%     plot(Time, Jib.PID)
%     plot(Time, Jib.U)
%     title('Simulated Control Signals for Jib DCV')
%     legend('Feedforward', 'PID', 'Control Signal','Position',[0.95 0.589 0 0])
%     % ylim([-1 1])
% subplot(3,2,5)
%     plot(Time, Main.Xref)
%     hold on; grid on
%     plot(Time, Main.Xreal)
%     title('Simulated Position of Main cylinder')
%     legend('X_{ref}', 'X_{real}','Position',[0.06 0.289 0 0])
%     ylim([0 1])
% subplot(3,2,6)
%     plot(Time, Jib.Xref)
%     hold on; grid on
%     plot(Time, Jib.Xreal)
%     title('Simulated Position of Jib cylinder')
%     legend('X_{ref}', 'X_{real}','Position',[0.95 0.289 0 0])
%     ylim([0 1])

%% Save images
% % 
% % %%%%%% MAIN %%%%%%%%
% % % Save images Main
% % Pressure
% saveas(Main_pressure,PNG_path+file+'_Main_pressure.png') 
% saveas(Main_pressure,EPS_path+file+'_Main_pressure.eps') 
% 
% % Control Signal
% saveas(Main_ControlSignal,PNG_path+file+'_Main_ControlSignal.png')
% saveas(Main_ControlSignal,EPS_path+file+'_Main_ControlSignal.eps')
% 
% % % Error
% % saveas(Main_Error,PNG_path+file+'_Jib_Error.png')
% % saveas(Main_Error,EPS_path+file+'_Jib_Error.eps') 
% 
% % % %%%%%% JIB %%%%%%%%
% % % Save images Jib
% % Pressure
% saveas(Jib_pressure,PNG_path+file+'_Jib_pressure.png') 
% saveas(Jib_pressure,EPS_path+file+'_Jib_pressure.eps') 
% 
% % Control Signal
% saveas(Jib_ControlSignal,PNG_path+file+'_Jib_ControlSignal.png')
% saveas(Jib_ControlSignal,EPS_path+file+'_Jib_ControlSignal.eps')
% 
% % % Error
% % saveas(Jib_Error,PNG_path+file+'_Jib_Error.png')
% % saveas(Jib_Error,EPS_path+file+'_Jib_Error.eps') 
