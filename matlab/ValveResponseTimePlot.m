
%%%%%%
% Flow
%%%%%%
%Main
Main_flow = zeros(1,length(Main_data_150.time));
for i = 1:length(Main_data_150.time)
if Main_data_150.MainPistonVelocity(i) >=0
    Main_flow(i) = Main_data_150.MainPistonVelocity(i)*Area_Main;
elseif Main_data_150.MainPistonVelocity(i) <0
    Main_flow(i) = Main_data_150.MainPistonVelocity(i)*RArea_Main;
end
end
%Jib
Jib_flow = zeros(1,length(Jib_data_150.time));
for i = 1:length(Jib_data_150.time)
if Jib_data_150.JibVelocity(i) >=0
    Jib_flow(i) = Jib_data_150.JibVelocity(i)*Area_Jib;
elseif Jib_data_150.JibVelocity(i) <0
    Jib_flow(i) = Jib_data_150.JibVelocity(i)*RArea_Jib;
end
end
%%%%%%%%%%%%%%%
% Calculating K
%%%%%%%%%%%%%%%
%Main
Main_K = zeros(1,length(Main_data_150.time));
dp_Main = zeros(1,length(Main_data_150.time));
for i = 1:length(Main_data_150.time)
if Main_data_150.MainPistonVelocity(i) >=0
    dp_Main(i) = Main_data_150.Ps(i)-Main_data_150.MainPaDCV(i);
    Main_K(i) = Main_flow(i)/sqrt(dp_Main(i));
elseif Main_data_150.MainPistonVelocity(i) <0
    dp_Main(i) = Main_data_150.Ps(i)-Main_data_150.MainPbDCV(i) ;
    Main_K(i) = Main_flow(i)/sqrt(dp_Main(i));
end
end
%Jib
Jib_K = zeros(1,length(Jib_data_150.time));
dp_Jib = zeros(1,length(Jib_data_150.time));
for i = 1:length(Jib_data_150.time)
if Jib_data_150.JibVelocity(i) >=0
    dp_Jib(i) = Jib_data_150.Ps(i)-Jib_data_150.JibPaDCV(i);
    Jib_K(i) = Jib_flow(i)/sqrt(dp_Jib(i));
elseif Jib_data_150.JibVelocity(i) <0
    dp_Jib(i) = Jib_data_150.Ps(i)-Jib_data_150.JibPbDCV(i);
    Jib_K(i) = Jib_flow(i)/sqrt(dp_Jib(i));
end
end
% 
% j = 1;
% for i =1:length(Main_data_150.time)
% if   0.19 <= Main_data_150.MainU(i) && Main_data_150.MainU(i) <= 0.21
%     time_index_02mu(j) = i;
%     j=j+1;
% end
% end
% 
% j = 1;
% for i =1:length(Main_data_150.time)
% if   -0.19 >= Main_data_150.MainU(i) && Main_data_150.MainU(i) >= -0.21
%     time_index_02md(j) = i;
%     j=j+1;
% end
% end
% 
% j = 1;
% for i =1:length(Jib_data_150.time)
% if   0.79 <= Jib_data_150.JibU(i) && Jib_data_150.JibU(i) <= 0.81
%     time_index_02ju(j) = i;
%     j=j+1;
% end
% end
% 
% j = 1;
% for i =1:length(Jib_data_150.time)
% if   -0.79 >= Jib_data_150.JibU(i) && Jib_data_150.JibU(i) >= -0.81
%     time_index_02jd(j) = i;
%     j=j+1;
% end
% end
%%%%%%%%%%%%%
% K without u
%%%%%%%%%%%%%
for i =1:length(Main_data_150.time)
    if Main_data_150.MainPistonVelocity(i) >= 0
    %Main_Ku = (sum(Main_K(time_index_02mu([100 190])))/length(time_index_02mu([100 190])))/u_end;
    Main_U(i) = Main_K(i)/( (20/6e4)/sqrt(6) );
    elseif Main_data_150.MainPistonVelocity(i) < 0
    %Main_Ku = (sum(Main_K(time_index_02md([130 190])))/length(time_index_02md([130 190])))/(-u_end);
    Main_U(i) = Main_K(i)/( (12/6e4)/sqrt(6) );   
    end
end

for i =1:length(Jib_data_150.time)
    if Jib_data_150.JibVelocity(i) >= 0
    % Jib_Ku = (sum(Jib_K(time_index_02ju([100 160])))/length(time_index_02ju([100 160])))/u_init;
    Jib_U(i) = Jib_K(i)/( (20/6e4)/sqrt(6) );
    elseif Jib_data_150.JibVelocity(i) < 0
    % Jib_Ku = (sum(Jib_K(time_index_02jd([130 160])))/length(time_index_02jd([130 160])))/(-u_init);
    Jib_U(i) = Jib_K(i)/( (15/6e4)/sqrt(6) );   
    end
end


%%%%%%%%
%Ploting
%%%%%%%%
Main_flow_lpm = Main_flow * 6e4;
Jib_flow_lpm = Jib_flow * 6e4;
set(0, 'DefaultLineLineWidth', 2);
figure()
plot(Main_data_150.time,Main_flow_lpm,Color='b');
hold on
plot(Jib_data_150.time,Jib_flow_lpm,Color='r');

% figure()
% plot(Main_data.time,dp_Main,Color='b');
% hold on
% plot(Jib_data.time,dp_Jib,Color='r');

figure()
plot(Main_data_150.time,Main_K,Color='b');
% hold on
% plot(Jib_data_150.time,Jib_K,Color='r');
% plot(Jib_data_130.time,Jib_data_130.JibU)
%hold on
%plot(Jib_data.time,Jib_data.JibU)
figure()
% plot(Jib_data_140.time,Jib_data_140.JibU)
% figure()
plot(Main_data_150.time,Main_data_150.MainU)
hold on
plot(Main_data_150.time,Main_U)
xlim([90 110])

figure()
% plot(Jib_data_140.time,Jib_data_140.JibU)
% figure()
plot(Jib_data_150.time,Jib_data_150.JibU)
hold on
plot(Jib_data_150.time,Jib_U)
xlim([141 161])