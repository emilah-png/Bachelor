clc; clear; close all;
file_path = 'Simulink_Data\';
PNG_path = 'Simulink_figures\PNG\'; 
EPS_path = 'Simulink_figures\EPS\';
% 15
file15 = "ResponseTimeTest_omega15_sinus_24042025";
file_name15 = file_path+file15+'.mat';
Data15 = load(file_name15);
% 25
file25 = "ResponseTimeTest_omega25_sinus_24042025";
file_name25 = file_path+file25+'.mat';
Data25 = load(file_name25);
% 35 
file35 = "ResponseTimeTest_omega35_sinus_24042025";
file_name35 = file_path+file35+'.mat';
Data35 = load(file_name35);


%% Reading data

Time = Data15.data{1}.Values.time;
Time25 = Data25.data{1}.Values.Time;
Time35 = Data35.data{1}.Values.Time;
% Jib cylinder signals
Jib15.Vref     = Data15.data{5}.Values.Data;
Jib15.Vreal    = Data15.data{25}.Values.Data;
Jib15.Error    = Data15.data{9}.Values.Data;
% 25
Jib25.Vref     = Data25.data{5}.Values.Data;
Jib25.Vreal    = Data25.data{25}.Values.Data;
Jib25.Error    = Data25.data{9}.Values.Data;
% 35
Jib35.Vref     = Data35.data{5}.Values.Data;
Jib35.Vreal    = Data35.data{25}.Values.Data;
Jib35.Error    = Data35.data{9}.Values.Data;

%% Plotting Data
set(0, 'DefaultLineLineWidth', 2);

% Velocity (Vref vs Vreal)
Jib_velocity = figure('Name','Velocity of Jib cylinder');
plot(Time25, Jib25.Vref)
hold on; grid on
plot(Time25, Jib25.Vreal)
title('Simulated Velocity of Jib cylinder')
legend('V_{ref}', 'V_{real}')
ylim([-0.1 0.1])


% Error
Jib_Error = figure('Name','Error of Jib cylinder');
plot(Time25, Jib25.Error)
hold on; grid on
title('Simulated Error of Jib cylinder')
legend('Error')
ylim([-0.0045 0.0045])

%% 
% Gernral sub plot
f = figure;
f.Position = [50 50 1400 900];
title('Jib cylinder')
subplot(3,2,1)
    plot(Time35, Jib35.Vref)
    hold on; grid on
    plot(Time35, Jib35.Vreal)
    title('Cylinder velocity when ω = 3.5')
    legend('V_{ref}', 'V_{real}')
    xlim([-0.5 41.5])
    ylim([-0.02 0.02])
subplot(3,2,2)
    plot(Time35, Jib35.Error)
    hold on; grid on
    title('Position error when ω = 3.5')
    legend('Error')
    xlim([-0.5 41.5])
    ylim([-0.003 0.0048])
subplot(3,2,3)
    plot(Time25, Jib25.Vref)
    hold on; grid on
    plot(Time25, Jib25.Vreal)
    title('Cylinder velocity when ω = 2.5')
    legend('V_{ref}', 'V_{real}')
    xlim([-0.5 41.5])
    ylim([-0.02 0.02])
    % ylim([-1 1])
subplot(3,2,4)
    plot(Time25, Jib25.Error)
    hold on; grid on
    title('Position error when ω = 2.5')
    legend('Error')
    xlim([-0.5 41.5])
    ylim([-0.003 0.0048])
subplot(3,2,5)
    plot(Time, Jib15.Vref)
    hold on; grid on
    plot(Time, Jib15.Vreal)
    title('Cylinder velocity when ω = 1.5')
    legend('V_{ref}', 'V_{real}')
    xlim([-0.5 41.5])
    ylim([-0.02 0.02])
subplot(3,2,6)
    plot(Time, Jib15.Error)
    hold on; grid on
    title('Position error when ω = 1.5')
    legend('Error')
    xlim([-0.5 41.5])
    ylim([-0.003 0.0048])
sgt = sgtitle('Simulated slower system response time');
fontsize(f,13,'points')
sgt.FontSize = 20;

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

% % % Velocity
% % saveas(Jib_velocity,PNG_path+file+'_Jib_velocity.png')
% % saveas(Jib_velocity,EPS_path+file+'_Jib_velocity.eps') 


% Velocity
saveas(f,PNG_path+file+'_Jib_responsetime.png')
% % saveas(f,EPS_path+file+'_Jib_responsetime.eps') 