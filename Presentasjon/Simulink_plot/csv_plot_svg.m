clc; clear; close all;
% Data = readtable("Adjusted_JibSineTest_230425.csv" );
file="Adjusted_RampDisturbanceTest_230425"; %write file name including .csv
Data = readtable(file+'.csv');
% Data = readtable("JibSTDTest2_270325.csv" );

%% Reading data

Time = Data.time;
% Main cylinder signals
Main.PaDCV   = Data.MainPaDCV;
Main.PaCyl   = Data.MainPaCyl;
Main.Pb      = Data.MainPbDCV;
Supply_pressure = Data.Ps;
Main.Xref    = Data.MainXRef;
Main.Xreal   = Data.MainPistonPosition;
Main.Vref    = Data.MainXDotRef;
Main.Vreal   = Data.MainPistonVelocity;
Main.FlowA   = Data.MainFlowA;
Main.FlowB   = Data.MainFlowB;
Main.FF      = Data.MainFF;
Main.PID     = Data.MainPID;
Main.U       = Data.MainU;
Main.Error   = Data.MainError;

% Jib cylinder signals
Jib.PaDCV    = Data.JibPaDCV;
Jib.PaCyl    = Data.JibPaCyl;
Jib.PbDCV    = Data.JibPbDCV;
Jib.PbCyl    = Data.JibPbCyl;
Jib.Xref     = Data.JibXRef;
Jib.Xreal    = Data.JibPistonPosition;
Jib.Vref     = Data.JibXDotRef;
Jib.Vreal    = Data.JibVelocity;
Jib.FlowA    = Data.JibFlowA;
Jib.FlowB    = Data.JibFlowB;
Jib.FF       = Data.JibFF;
Jib.PID      = Data.JibPID;
Jib.U        = Data.JibU;
Jib.Error    = Data.JibError;
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
fig1 = figure('Name','Pressure at Main cylinder');
plot(Time, Supply_pressure)
hold on; grid on
plot(Time, Main.PaDCV)   % Main Pressure at Directional Control Valve A port
plot(Time, Main.Pb)      % Main Pressure at Directional Control Valve B port
plot(Time, Main.PaCyl)   % Main Pressure at Counter Balance Valve A port
title('Pressure at Main cylinder')
legend('Supply pressure', 'Pa @DCV', 'Pb @DCV', 'Pa @Cylinder')
xlabel('Time [s]')
ylabel('Pressure [bar]')
ylim([0 160])
saveas(fig1,'New Folder\'+file+'_test.svg')
end 
if Enable.Main_Position
% Position (Xref vs Xreal)
figure('Name','Position of Main cylinder')
plot(Time, Main.Xref)
hold on; grid on
plot(Time, Main.Xreal)
title('Position of Main cylinder')
legend('X_{ref}', 'X_{real}')
ylim([0 1])
end 
if Enable.Main_Velocity
% Velocity (Vref vs Vreal)
figure('Name','Velocity of Main cylinder')
plot(Time, Main.Vref)
hold on; grid on
plot(Time, Main.Vreal)
title('Velocity of Main cylinder')
legend('V_{ref}', 'V_{real}')
ylim([0 1])
end 
if Enable.Main_Flow
% Flow (FlowA vs FlowB)
figure('Name','Flow at Main cylinder')
plot(Time, Main.FlowA)
hold on; grid on
plot(Time, Main.FlowB)
title('Flow at Main cylinder')
legend('Flow A', 'Flow B')
ylim([0 50])
end 
if Enable.Main_ControlSignal
% Control Signals (FF, PID, U)
figure('Name','Control Signals for Main cylinder')
plot(Time, Main.FF)
hold on; grid on
plot(Time, Main.PID)
plot(Time, Main.U)
title('Control Signals for Main DCV')
legend('Feedforward', 'PID', 'Output Signal')
xlabel('Time [s]')
ylabel('Control Signal')
ylim([-0.4 0.4])
end
% ------------ Jib Cylinder Plots ---------------
if Enable.Jib_Pressure
% Pressure at Jib Cylinder
figure('Name','Pressure at Jib cylinder')
plot(Time, Supply_pressure)
hold on; grid on
plot(Time, Jib.PaDCV)   % Main Pressure at Directional Control Valve A port
plot(Time, Jib.PbDCV)   % Main Pressure at Directional Control Valve B port
plot(Time, Jib.PaCyl)   % Main Pressure at Counter Balance Valve A port
plot(Time, Jib.PbCyl)   % Main Pressure at Counter Balance Valve B port
title('Pressure at Jib cylinder')
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
title('Position of Jib cylinder')
legend('X_{ref}', 'X_{real}')
ylim([0 1])
end
if Enable.Jib_Velocity
% Velocity (Vref vs Vreal)
figure('Name','Velocity of Jib cylinder')
plot(Time, Jib.Vref)
hold on; grid on
plot(Time, Jib.Vreal)
title('Velocity of Jib cylinder')
legend('V_{ref}', 'V_{real}')
ylim([0 1])
end
if Enable.Jib_Flow
% Flow (FlowA vs FlowB)
figure('Name','Flow at Jib cylinder')
plot(Time, Jib.FlowA)
hold on; grid on
plot(Time, Jib.FlowB)
title('Flow at Jib cylinder')
legend('Flow A', 'Flow B')
ylim([0 50])
end
if Enable.Jib_ControlSignal
% Control Signals (FF, PID, U)
figure('Name','Control Signals for Jib cylinder')
plot(Time, Jib.FF)
hold on; grid on
plot(Time, Jib.PID)
plot(Time, Jib.U)
title('Control Signals for Jib DCV')
legend('Feedforward', 'PID', 'Output Signal')
xlabel('Time [s]')
ylabel('Control Signal')
ylim([-0.4 0.4])
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
%     title('Pressure at Main cylinder')
%     legend('P_{Supply}', 'Pa @DCV', 'Pb @DCV', 'Pa @Cylinder','Position',[0.06 0.874 0 0])
%     % ylim([0 160])
% subplot(2,2,2)
%     plot(Time, Supply_pressure)
%     hold on; grid on
%     plot(Time, Jib.PaDCV)   % Main Pressure at Directional Control Valve A port
%     plot(Time, Jib.PbDCV)   % Main Pressure at Directional Control Valve B port
%     plot(Time, Jib.PaCyl)   % Main Pressure at Counter Balance Valve A port
%     plot(Time, Jib.PbCyl)   % Main Pressure at Counter Balance Valve B port
%     title('Pressure at Jib cylinder')
%     legend('P_{Supply}', 'Pa @DCV', 'Pb @DCV', 'Pa @Cylinder', 'Pb @Cylinder','Position',[0.95 0.863 0 0])
%     % ylim([0 160])
% subplot(2,2,3)
%     plot(Time, Main.FF)
%     hold on; grid on
%     plot(Time, Main.PID)
%     plot(Time, Main.U)
%     title('Control Signals for Main DCV')
%     legend('Feedforward', 'PID', 'Control Signal','Position',[0.06 0.589 0 0])
%     % ylim([-1 1])
% subplot(2,2,4)
%     plot(Time, Jib.FF)
%     hold on; grid on
%     plot(Time, Jib.PID)
%     plot(Time, Jib.U)
%     title('Control Signals for Jib DCV')
%     legend('Feedforward', 'PID', 'Control Signal','Position',[0.95 0.589 0 0])
%     % ylim([-1 1])
% % subplot(3,2,5)
% %     plot(Time, Main.Xref)
% %     hold on; grid on
% %     plot(Time, Main.Xreal)
% %     title('Position of Main cylinder')
% %     legend('X_{ref}', 'X_{real}','Position',[0.06 0.289 0 0])
% %     ylim([0 1])
% % subplot(3,2,6)
% %     plot(Time, Jib.Xref)
% %     hold on; grid on
% %     plot(Time, Jib.Xreal)
% %     title('Position of Jib cylinder')
% %     legend('X_{ref}', 'X_{real}','Position',[0.95 0.289 0 0])
% %     ylim([0 1])