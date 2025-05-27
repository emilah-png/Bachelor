clc; clear; close all;
set(0, 'DefaultLineLineWidth', 2.5);

Data = readtable("CSVplotter/Adjusted_10ms_FSTest_090525.csv");

Enable.Jib = 1;
Enable.Main = 1;
Enable.Plot = 1;

Time = Data.time;

if Enable.Main
    Main.U = Data.MainOutSignal;
    Main.FF = Data.MainFF;
    Main.PID = Data.MainPID;
    Main.XRef = Data.MainXRef;
    Main.Error = Data.MainError;
    Main.VRef = Data.MainXDotRef;
    
    
    for i = 1:1:length(Main.VRef)
        if Main.VRef(i) ~= 0
            break
        end
    end
    for j = i+1:1:length(Main.VRef)
        if Main.VRef(j) == 0
            break
        end
    end
    [Main.FFM, Main.FFMInd] = max(Main.FF);
    [Main.FFm, Main.FFmInd] = min(Main.FF);
    Main.Avg = sum(abs(Main.Error(i:1:j)))/(j-i) * 1000; % mm
    Main.FFU = Main.FFM/Main.U(Main.FFMInd) * 100;
    Main.FFD = Main.FFm/Main.U(Main.FFmInd) * 100;
    fprintf('Average Error Main: %.3f mm\n Main FF Up: %.0f \n Main FF Down: %.0f \n', Main.Avg, Main.FFU, Main.FFD)
    if Enable.Plot
        MainSignal = figure('Units', 'normalized', 'Position', [0.1 0.1 0.5 0.4]);
        % Use tiled layout for automatic space handling
        t = tiledlayout(1,1, 'Padding', 'compact', 'TileSpacing', 'compact');
        nexttile
        grid on
        hold on
        plot(Time, Main.FF)
        % plot(Time, Main.PID)
        plot(Time, Main.U)
        title('Main Signal Flow Sharing')
        xlabel('Time [s]')
        xlim([Time(i) Time(j)])
        legend('u_{ff}','u', 'Location','eastoutside')
        fontsize(MainSignal,13,'points')
        saveas(MainSignal,'EPSs\Main_FSTest','epsc')
    end

end

if Enable.Jib
    Jib.U = Data.JibOutSignal;
    Jib.FF = Data.JibFF;
    Jib.PID = Data.JibPID;
    Jib.XRef = Data.JibXRef;
    Jib.Error = Data.JibError;
    Jib.VRef = Data.JibXDotRef;
    
    for k = 1:1:length(Jib.VRef)
        if Jib.VRef(k) ~= 0
            break
        end
    end
    for l = k+1:1:length(Jib.VRef)
        if Jib.VRef(l) == 0
            break
        end
    end

    [Jib.FFM, Jib.FFMInd] = max(Jib.FF);
    [Jib.FFm, Jib.FFmInd] = min(Jib.FF);
    Jib.Avg = sum(abs(Jib.Error(k:1:l)))/(l-k) * 1000; % mm
    Jib.FFU = Jib.FFM/Jib.U(Jib.FFMInd) * 100;
    Jib.FFD = Jib.FFm/Jib.U(Jib.FFmInd) * 100;
    fprintf('Average Error Jib: %.3f mm\n Jib FF Up: %.0f \n Jib FF Down: %.0f \n', Jib.Avg, Jib.FFU, Jib.FFD)
    if Enable.Plot
        JibSignal = figure('Units', 'normalized', 'Position', [0.1 0.1 0.5 0.4]);
        % Use tiled layout for automatic space handling
        t = tiledlayout(1,1, 'Padding', 'compact', 'TileSpacing', 'compact');
        nexttile
        grid on
        hold on
        plot(Time, Jib.FF)
        % plot(Time, Jib.PID)
        plot(Time, Jib.U)
        title('Jib Signal Flow Sharing')
        xlabel('Time [s]')
        
        xlim([Time(k) Time(l)])
        legend('u_{ff}','u', 'Location','eastoutside')
        fontsize(JibSignal,13,'points')
        saveas(JibSignal,'EPSs\Jib_FSTest','epsc')

    end
end


