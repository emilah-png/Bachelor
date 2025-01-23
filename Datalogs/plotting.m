clc; clear; close all;

%% inserting data
load SinusHorisontalStartMedFlow.mat
Run = data;
Pa_CBV_DCV = Run{6}.extractTimetable;
Pa_CBV_Cyl = Run{5}.extractTimetable;
Pb = Run{9}.extractTimetable;
Psupply = Run{12}.extractTimetable;
Piston_stroke = Run{11}.extractTimetable;
Control_signal = Run{17}.extractTimetable;
flow_bit = Run{2}.extractTimetable;
%% plot limits
time_start = 20;
time_end =50;

maxpressure = max(Psupply.Variables)+10;
minpressure = 0;

maxstroke = max(Piston_stroke.Variables)+0.1;
minstroke = 0;

maxsignal = max(Control_signal.Variables)+0.1;
minsignal = min(Control_signal.Variables)-0.1;

maxflow = max(flow_bit.Variables)+0.1;
minflow = min(flow_bit.Variables)-0.1;
%% ploting parameters
%----------------------------------------
singularplot = true;
subplot_enable = true;

%subplot parameter
subplot_xsize = 2;
subplot_ysize = 2;

%--Subplot placement------------What to plot-------------
pressure_plasement = 1;     plot_pressure = true;
stroke_plasement   = 2;     plot_stroke   = true;
signal_plasement   = 3;     plot_signal   = true;
flow_plasement     = 4;     plot_flow     = true;

%% PLoting

if subplot_enable == true
    figure('Position', [100 0 900 750]) %predetermind size and position of plot window
    %% pressure plotting
    if plot_pressure == true
    %plotting pressure plot
    subplot(subplot_ysize,subplot_xsize,pressure_plasement)

    %Pa between Counter balance valve and directional control valve
    plot(Pa_CBV_Cyl.Time,Pa_CBV_Cyl.Variables,"LineWidth",2,Color="m")
    hold on

    %Pa between counter balance valve and directional control valve
    plot(Pa_CBV_DCV.Time,Pa_CBV_DCV.Variables,"LineWidth",2,Color="r")

    %Pb
    plot(Pb.Time,Pb.Variables,"LineWidth",2,Color="g")

    %Psupply
    plot(Psupply.Time,Psupply.Variables,"LineWidth",2,Color="b")
    grid on
    % --------Plot parameters--------------------------
    title("Pressure plot")
    xlim([seconds(time_start) seconds(time_end)])
    ylim([minpressure maxpressure])
    legend("P_{A CBV-Cyl}","P_{A CBV-DCV}","P_B","P{Supply}",'Orientation','horizontal','NumColumns',2 ...
        ,'Location','west')
    %---------------------------------------------------
    end
    %% plotting piston stroke
    if plot_stroke == true
    subplot(subplot_ysize,subplot_xsize,stroke_plasement)
    plot(Piston_stroke.Time,Piston_stroke.Variables,"LineWidth",2,Color=[0.6 0.1 0])
    grid on
    % --------Plot parameters--------------------------
    title("Piston stroke plot")
    xlim([seconds(time_start) seconds(time_end)])
    ylim([minstroke maxstroke])
    legend("Piston stroke")
    %---------------------------------------------------
    end
    %% plotting control signal to valve
    if plot_signal == true
    subplot(subplot_ysize,subplot_xsize,signal_plasement)
    plot(Control_signal.Time,Control_signal.Variables,"LineWidth",2,Color=[1 0.5 0])
    grid on
    % --------Plot parameters--------------------------
    title("Control signal plot")
    xlim([seconds(time_start) seconds(time_end)])
    ylim([minsignal maxsignal])
    legend("Control signal")
    %---------------------------------------------------
    end
    %% plotting av flow
    if plot_flow == true
    subplot(subplot_ysize,subplot_xsize,flow_plasement)
    plot(flow_bit.Time,flow_bit.Variables,"LineWidth",2,Color="c")
    grid on
    % --------Plot parameters--------------------------
    title("Flow plot")
    xlim([seconds(time_start) seconds(time_end)])
    ylim([minflow maxflow])
    legend("Flow")
    %---------------------------------------------------
    end
end

%--------------------------------------------------------------------

if singularplot == true
    %% pressure plotting
    if plot_pressure == true
    %plotting pressure plot
    figure()

    %Pa between Counter balance valve and directional control valve
    plot(Pa_CBV_Cyl.Time,Pa_CBV_Cyl.Variables,"LineWidth",2,Color="m")
    hold on

    %Pa between counter balance valve and directional control valve
    plot(Pa_CBV_DCV.Time,Pa_CBV_DCV.Variables,"LineWidth",2,Color="r")

    %Pb
    plot(Pb.Time,Pb.Variables,"LineWidth",2,Color="g")

    %Psupply
    plot(Psupply.Time,Psupply.Variables,"LineWidth",2,Color="b")
    grid on
    % --------Plot parameters--------------------------
    title("Pressure plot")
    xlim([seconds(time_start) seconds(time_end)])
    ylim([minpressure maxpressure])
    legend("P_{A CBV-Cyl}","P_{A CBV-DCV}","P_B","P{Supply}",'Orientation','horizontal','NumColumns',2 ...
        ,'Location','west')
    %---------------------------------------------------
    end
    %% plotting piston stroke
    if plot_stroke == true
    figure()
    plot(Piston_stroke.Time,Piston_stroke.Variables,"LineWidth",2,Color=[0.6 0.1 0])
    grid on
    % --------Plot parameters--------------------------
    title("Piston stroke plot")
    xlim([seconds(time_start) seconds(time_end)])
    ylim([minstroke maxstroke])
    legend("Piston stroke")
    %---------------------------------------------------
    end
    %% plotting control signal to valve
    if plot_signal == true
    figure()
    plot(Control_signal.Time,Control_signal.Variables,"LineWidth",2,Color=[1 0.5 0])
    grid on
    % --------Plot parameters--------------------------
    title("Control signal plot")
    xlim([seconds(time_start) seconds(time_end)])
    ylim([minsignal maxsignal])
    legend("Control signal")
    %---------------------------------------------------
    end
    %% plotting av flow
    if plot_flow == true
    figure()
    plot(flow_bit.Time,flow_bit.Variables,"LineWidth",2,Color="c")
    grid on
    % --------Plot parameters--------------------------
    title("Flow plot")
    xlim([seconds(time_start) seconds(time_end)])
    ylim([minflow maxflow])
    legend("Flow")
    %---------------------------------------------------
    end

end
%% 