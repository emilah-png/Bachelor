clc; clear; close;
file="Adjusted_10ms_Main1Test_090525.csv";
data = readtable(file);

jib_xref=[data.time ,smooth(data.JibXRef,100)];

jib_xdotref=[data.time ,smooth(data.JibXDotRef,100)];

main_xref=[data.time ,smooth(data.MainXRef,100)];

main_xdotref=[data.time ,smooth(data.MainXDotRef,100)];

plot(data.time,smooth(data.JibXRef,100))

hold on 
plot(data.time,data.JibXRef)