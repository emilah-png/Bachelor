clc; clear; close all;
%% Adding data plots check list
 % - added data extration in "inserting data"
 % - added plot lits in "plot limits"
 % - added ploting parameters for data
 %    -enable plotting and plasement
 %    -added into subplot logic
 % - added into "subplot" and into "singular plot" if statement
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
error = Run{1}.extractTimetable;
%% plot limits
time_start = error.Time(1) ; % standard: error.Time(1), for spesific start: seconds(20)
time_end =error.Time(end) ;    % standrad: error.Time(end), for spesific end:   seconds(50)

maxpressure = max(Psupply.Variables)+10;
minpressure = 0;

maxstroke = max(Piston_stroke.Variables)+0.1;
minstroke = 0;

maxsignal = max(Control_signal.Variables)+0.1;
minsignal = min(Control_signal.Variables)-0.1;

maxflow = max(flow_bit.Variables)+0.1;
minflow = min(flow_bit.Variables)-0.1;

maxerror = max(error.Variables)+0.005;
minerror = min(error.Variables)-0.005;
%% ploting parameters
%----------------------------------------
singularplot = true;
subplot_enable = true;

%subplot parameter
subplot_xplot = 2; %max 2
subplot_yplot = 3; %max 3
subplot_xsize = 1550/2 * subplot_xplot;
subplot_ysize = 790;

%--Subplot placement------------What to plot-------------
pressure_plasement = 1;     plot_pressure = true;
stroke_plasement   = 2;     plot_stroke   = true;
signal_plasement   = 3;     plot_signal   = true;
flow_plasement     = 4;     plot_flow     = true;
error_plasement    = 5;     plot_error    = true;

%% subplot logic
number_of_subplots = 0;
    if (plot_pressure == true && pressure_plasement > number_of_subplots)
        number_of_subplots = pressure_plasement;
    end

    if (plot_stroke == true && stroke_plasement > number_of_subplots)
        number_of_subplots = stroke_plasement;
    end

    if (plot_signal == true && signal_plasement > number_of_subplots)
        number_of_subplots = signal_plasement;
    end

    if (plot_flow == true && flow_plasement > number_of_subplots)
        number_of_subplots = flow_plasement;
    end

    if (plot_error == true && error_plasement > number_of_subplots)
        number_of_subplots = error_plasement;
    end

    if subplot_xplot > 2
        subplot_enable = false;
        fprintf("max nubmer of plots in x direction is 2")
    elseif subplot_yplot > 3
        subplot_enable = false;
        fprintf("max nubmer of plots in y direction is 3")
    elseif number_of_subplots > (subplot_yplot*subplot_xplot)
        subplot_enable = false;
        fprintf("Error in subplots \n" + ...
            "- Reduce amount of data plotted \n" + ...
            "- Increase size of subplot figure \n" + ...
            "- Make sure all plot plasement is valid")
    end

%% Ploting

if subplot_enable == true
    figure('Position', [0 0 subplot_xsize subplot_ysize]) %predetermind size and position of plot window
    %% pressure ploting
    if plot_pressure == true
    %ploting pressure plot
    subplot(subplot_yplot,subplot_xplot,pressure_plasement)

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
    xlim([time_start time_end])
    ylim([minpressure maxpressure])
    legend("P_{A CBV-Cyl}","P_{A CBV-DCV}","P_B","P{Supply}",'Orientation','horizontal','NumColumns',2)
    %---------------------------------------------------
    end
    %% ploting piston stroke
    if plot_stroke == true
    subplot(subplot_yplot,subplot_xplot,stroke_plasement)
    plot(Piston_stroke.Time,Piston_stroke.Variables,"LineWidth",2,Color=[0.6 0.1 0])
    grid on
    % --------Plot parameters--------------------------
    title("Piston stroke plot")
    xlim([time_start time_end])
    ylim([minstroke maxstroke])
    legend("Piston stroke")
    %---------------------------------------------------
    end
    %% ploting control signal to valve
    if plot_signal == true
    subplot(subplot_yplot,subplot_xplot,signal_plasement)
    plot(Control_signal.Time,Control_signal.Variables,"LineWidth",2,Color=[1 0.5 0])
    grid on
    % --------Plot parameters--------------------------
    title("Control signal plot")
    xlim([time_start time_end])
    ylim([minsignal maxsignal])
    legend("Control signal")
    %---------------------------------------------------
    end
    %% ploting flow
    if plot_flow == true
    subplot(subplot_yplot,subplot_xplot,flow_plasement)
    plot(flow_bit.Time,flow_bit.Variables,"LineWidth",2,Color="c")
    grid on
    % --------Plot parameters--------------------------
    title("Flow plot")
    xlim([time_start time_end])
    ylim([minflow maxflow])
    legend("Flow")
    %---------------------------------------------------
    end
    %% ploting error
    if plot_error == true
    subplot(subplot_yplot,subplot_xplot,error_plasement)
    plot(error.Time,error.Variables,"LineWidth",2,Color="r")
    grid on
    % --------Plot parameters--------------------------
    title("Cylinder stroke error plot")
    xlim([time_start time_end])
    ylim([minerror maxerror])
    legend("stroke error")
    %---------------------------------------------------
    end

end

%--------------------------------------------------------------------

if singularplot == true
    %% pressure ploting
    if plot_pressure == true
    %ploting pressure plot
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
    xlim([time_start time_end])
    ylim([minpressure maxpressure])
    legend("P_{A CBV-Cyl}","P_{A CBV-DCV}","P_B","P{Supply}",'Orientation','horizontal','NumColumns',2)
    %---------------------------------------------------
    end
    %% ploting piston stroke
    if plot_stroke == true
    figure()
    plot(Piston_stroke.Time,Piston_stroke.Variables,"LineWidth",2,Color=[0.6 0.1 0])
    grid on
    % --------Plot parameters--------------------------
    title("Piston stroke plot")
    xlim([time_start time_end])
    ylim([minstroke maxstroke])
    legend("Piston stroke")
    %---------------------------------------------------
    end
    %% ploting control signal to valve
    if plot_signal == true
    figure()
    plot(Control_signal.Time,Control_signal.Variables,"LineWidth",2,Color=[1 0.5 0])
    grid on
    % --------Plot parameters--------------------------
    title("Control signal plot")
    xlim([time_start time_end])
    ylim([minsignal maxsignal])
    legend("Control signal")
    %---------------------------------------------------
    end
    %% ploting av flow
    if plot_flow == true
    figure()
    plot(flow_bit.Time,flow_bit.Variables,"LineWidth",2,Color="c")
    grid on
    % --------Plot parameters--------------------------
    title("Flow plot")
    xlim([time_start time_end])
    ylim([minflow maxflow])
    legend("Flow")
    %---------------------------------------------------
    end
    %% ploting error
    if plot_error == true
    figure()
    plot(error.Time,error.Variables,"LineWidth",2,Color="r")
    grid on
    % --------Plot parameters--------------------------
    title("Cylinder stroke error plot")
    xlim([time_start time_end])
    ylim([minerror maxerror])
    legend("stroke error")
    %---------------------------------------------------
    end
end
%% 