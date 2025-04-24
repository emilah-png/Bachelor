clc; clear; close all;
file_path = 'Simulink_Data\';
PNG_path = 'Simulink_figures\PNG\'; 
EPS_path = 'Simulink_figures\EPS\';
file = "Simulink_Dual2SineTest_FlowSharing_230425";
file_name = file_path+file+'.mat';
Data = load(file_name);


%% Reading data

Time = Data.data{1}.Values.time;
% Main cylinder signals
Main.PaDCV   = Data.data{13}.Values.Data;
Main.PaCyl   = Data.data{14}.Values.Data;
Main.Pb      = Data.data{15}.Values.Data;
Supply_pressure = Data.data{16}.Values.Data;
% Main.Xref    = Data.data{--}.Values.Data;
% Main.Xreal   = Data.data{--}.Values.Data;
% Main.Vref    = Data.data{--}.Values.Data;
% Main.Vreal   = Data.data{--}.Values.Data;
% Main.FlowA   = Data.data{--}.Values.Data;
% Main.FlowB   = Data.data{--}.Values.Data;
Main.FF      = Data.data{6}.Values.Data;
Main.PID     = Data.data{7}.Values.Data;
Main.U       = Data.data{5}.Values.Data;
% Main.Error   = Data.data{--}.Values.Data;

% Jib cylinder signals
Jib.PaDCV    = Data.data{10}.Values.Data;
Jib.PaCyl    = Data.data{9}.Values.Data;
Jib.PbDCV    = Data.data{12}.Values.Data;
Jib.PbCyl    = Data.data{11}.Values.Data;
% Jib.Xref     = Data.data{--}.Values.Data;
% Jib.Xreal    = Data.data{--}.Values.Data;
% Jib.Vref     = Data.data{--}.Values.Data;
% Jib.Vreal    = Data.data{--}.Values.Data;
% Jib.FlowA    = Data.data{--}.Values.Data;
% Jib.FlowB    = Data.data{--}.Values.Data;
Jib.FF       = Data.data{2}.Values.Data;
Jib.PID      = Data.data{4}.Values.Data;
Jib.U        = Data.data{1}.Values.Data;
% Jib.Error    = Data.data{--}.Values.Data;
%% Choosing Plots
Enable.All = 1;
if Enable.All
Enable.Main_Pressure = 1;
Enable.Main_Position = 0;
Enable.Main_Velocity = 0;
Enable.Main_Flow = 0;
Enable.Main_ControlSignal = 1;
Enable.Jib_Pressure = 1;
Enable.Jib_Position = 0;
Enable.Jib_Velocity = 0;
Enable.Jib_Flow = 0;
Enable.Jib_ControlSignal = 1;
else
 Enable.Main_Pressure = 0;
Enable.Main_Position = 0;
Enable.Main_Velocity = 0;
Enable.Main_Flow = 0;
Enable.Main_ControlSignal = 0;
Enable.Jib_Pressure = 0;
Enable.Jib_Position = 0;
Enable.Jib_Velocity = 0;
Enable.Jib_Flow = 0;
Enable.Jib_ControlSignal = 0;
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
ylim([0 160])
end 
if Enable.Main_Position
% Position (Xref vs Xreal)
figure('Name','Position of Main cylinder')
plot(Time, Main.Xref)
hold on; grid on
plot(Time, Main.Xreal)
title('Simulated Position of Main cylinder')
legend('X_{ref}', 'X_{real}')
ylim([0 1])
end 
if Enable.Main_Velocity
% Velocity (Vref vs Vreal)
figure('Name','Velocity of Main cylinder')
plot(Time, Main.Vref)
hold on; grid on
plot(Time, Main.Vreal)
title('Simulated Velocity of Main cylinder')
legend('V_{ref}', 'V_{real}')
ylim([0 1])
end 
if Enable.Main_Flow
% Flow (FlowA vs FlowB)
figure('Name','Flow at Main cylinder')
plot(Time, Main.FlowA)
hold on; grid on
plot(Time, Main.FlowB)
title('Simulated Flow at Main cylinder')
legend('Flow A', 'Flow B')
ylim([0 50])
end 
if Enable.Main_ControlSignal
% Control Signals (FF, PID, U)
Main_ControlSignal = figure('Name','Control Signals for Main cylinder');
plot(Time, Main.FF)
hold on; grid on
plot(Time, Main.PID)
plot(Time, Main.U)
title('Simulated Control Signals for Main DCV')
legend('Feedforward', 'PID', 'Output Signal')
xlabel('Time [s]')
ylabel('Control Signal')
ylim([-0.5 0.5])
end
% ------------ Jib Cylinder Plots ---------------
if Enable.Jib_Pressure
% Pressure at Jib Cylinder
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
ylim([0 160])
end
if Enable.Jib_Position
% Position (Xref vs Xreal)
figure('Name','Position of Jib cylinder')
plot(Time, Jib.Xref)
hold on; grid on
plot(Time, Jib.Xreal)
title('Simulated Position of Jib cylinder')
legend('X_{ref}', 'X_{real}')
ylim([0 1])
end
if Enable.Jib_Velocity
% Velocity (Vref vs Vreal)
figure('Name','Velocity of Jib cylinder')
plot(Time, Jib.Vref)
hold on; grid on
plot(Time, Jib.Vreal)
title('Simulated Velocity of Jib cylinder')
legend('V_{ref}', 'V_{real}')
ylim([0 1])
end
if Enable.Jib_Flow
% Flow (FlowA vs FlowB)
figure('Name','Flow at Jib cylinder')
plot(Time, Jib.FlowA)
hold on; grid on
plot(Time, Jib.FlowB)
title('Simulated Flow at Jib cylinder')
legend('Flow A', 'Flow B')
ylim([0 50])
end
if Enable.Jib_ControlSignal
% Control Signals (FF, PID, U)
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
% 
% %%%%%% MAIN %%%%%%%%
% % Save images Main
% % Pressure
% saveas(Main_pressure,PNG_path+file+'_Main_pressure.png') 
% % saveas(Main_pressure,EPS_path+file+'_Main_pressure.eps') 
% 
% % Control Signal
% saveas(Main_ControlSignal,PNG_path+file+'_Main_ControlSignal.png')
% % saveas(Main_ControlSignal,EPS_path+file+'_Main_ControlSignal.eps')
% 
% % %%%%%% JIB %%%%%%%%
% % Save images Jib
% % Pressure
% saveas(Jib_pressure,PNG_path+file+'_Jib_pressure.png') 
% % saveas(Jib_pressure,EPS_path+file+'_Jib_pressure.eps') 
% 
% % Control Signal
% saveas(Jib_ControlSignal,PNG_path+file+'_Jib_ControlSignal.png')
% % saveas(Jib_ControlSignal,EPS_path+file+'_Jib_ControlSignal.eps')