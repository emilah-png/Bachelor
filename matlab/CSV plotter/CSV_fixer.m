clc; clear; close all;
file="Main2Test_090525.csv"; %write file name including .csv
data = readtable(file);
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%logic to change variable name
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
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
for i = 2:length(data.Name)
    if data.Name_1(i)>=0
        %Do nothing
    else
        Lost_Data_Index_10ms(j)=i;
        j=j+1;
        missing_data = true;
    end
end
yup = size(data);
p=1;
for k = 1:yup(2)
    y = data((length(data.Name)),k);
    y = y.Variables;
    if y>=0
        %Do nothing
    else
        Lost_Data_Index_5ms(p)=k;
        p=p+1;
        missing_data = true;
    end
end

data_10ms = data;
data_5ms = data;


data_10ms = renamevars(data,"Name_1","time");
data_5ms = renamevars(data,"Name","time");
data_10ms.time = data_10ms.time/1000; % ms to s
data_5ms.time = data_5ms.time/1000; % ms to s
data_10ms(Lost_Data_Index_10ms,:) = [];
data_5ms(:,Lost_Data_Index_5ms) = [];
%%%%%%%%%%%%%%%%%%%%%%
% Making Adjusted File
%%%%%%%%%%%%%%%%%%%%%%
writetable(data_10ms,'Adjusted_10ms_'+file);
writetable(data_5ms,'Adjusted_5ms_'+file);