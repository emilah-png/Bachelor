clc; clear; close all;
file="MainValveResponseTime_3Pressure_010425.csv"; %write file name including .csv
data = readtable(file);
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%logic to change variable name
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
data = renamevars(data,"Name","time");
%%%%%%%%%%%%%%%%%%%%
%logic to remove NaN
%%%%%%%%%%%%%%%%%%%%
% var = data.Name(420);
% if var>=0
%     x=1;
% else
%     x=0;
% end
%data([1,2,4],:) = [];
%-------------------
j=1;
missing_data = false;
for i = 1:length(data.time)
    if data.time(i)>=0
        %Do nothing
    else
        Lost_Data_Index(j)=i;
        j=j+1;
        missing_data = true;
    end
end
if missing_data
data(Lost_Data_Index,:) = [];
end

data.time = data.time/1000; % ms to s
%%%%%%%%%%%%%%%%%%%%%%
% Making Adjusted File
%%%%%%%%%%%%%%%%%%%%%%
writetable(data,'Adjusted_'+file);