close all;
figure
plot(out.U,out.PA)
hold on
grid on
plot(out.U,out.PB)
plot(out.U,out.AT)
plot(out.U,out.BT)
legend('PA','PB','AT','BT')
figure
plot(out.U,out.u)

figure
plot([0, 20, 40, 60, 80] ,[0, 6/22*5 , 17/22*5, 35/44*10, 60/66*15])
hold on
plot([0, 20, 40, 60, 80, 100] ,[0, 2/22*5 , 7/22*5, 14/22*5, 5, 33/44*10])

