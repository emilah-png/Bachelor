
clc; clear; close all;

% [fThetaRef, fThetaDotRef, isDone] =
% parabolicVelocityGenerator(fTheta0, fThetaDesired, fThetaDotMax, t, bEnable)


fDt = 0.01;
t_vec = [0:fDt:120];


t_start_1 = 15;

t_start_2 = 50;

fActualAngle = 1;
bEnable = false;
fThetaDotMax = 0.2;
fThetaDesired = pi;
isDone = false;

fThetaRef_vec = ones(1, length(t_vec));
fThetaDotRef_vec = zeros(1, length(t_vec));
isDone_vec = zeros(1, length(t_vec));
test_vec = zeros(1, length(t_vec));
enable_vec = zeros(1, length(t_vec));


fThetaRef_vec = fThetaRef_vec*fActualAngle;

tempBool = true;

bEnable = false;
for i = 2:length(t_vec)-1


    if(t_vec(i) >= t_start_1)
        bEnable = true;
    end

%    if(isDone || tempBool)
%        bEnable = false;
%        tempBool = false;
%    end

    if(t_vec(i) >= 40)
        bEnable = false;
    end

    if(t_vec(i) >= t_start_2)
        bEnable = true;
        fThetaDesired = -2*pi;
    end


    [fThetaRef, fThetaDotRef, isDone, test] = cosinePositionGenerator(fThetaRef_vec(1, i-1), ...
        fThetaDesired, ...
        fThetaDotMax, ...
        t_vec(1, i), ...
        bEnable);

    enable_vec(i) = bEnable;
    fThetaRef_vec(1, i) = fThetaRef;
    fThetaDotRef_vec(1, i) = fThetaDotRef;
    isDone_vec(1, i) = isDone;
    test_vec(i) = test;

    if test
        fprintf("First cykle triggerd at t = %f [s]\n", t_vec(i))
    end

end

figure(1)

subplot(4, 1, 1)
plot(t_vec, fThetaRef_vec)
ylabel("Theta")

subplot(4, 1, 2)
plot(t_vec, fThetaDotRef_vec)
ylabel("ThetaDot")

subplot(4, 1, 3)
plot(t_vec, isDone_vec)
hold on
plot(t_vec, test_vec, 'r-')
legend("isDone vec", "test vec")
hold off

subplot(4, 1, 4)
plot(t_vec, enable_vec, 'b')
legend("enable vec")

%figure(4)
%plot(t_vec, a_vec)
%ylabel("a")

