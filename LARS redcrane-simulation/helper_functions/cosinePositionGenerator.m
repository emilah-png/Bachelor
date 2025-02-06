% COSINEPOSITIONGENERATOR Generates a smooth cosine velocity and position profile
%
% [fThetaRef, fThetaDotRef, isDone, test] = cosinePositionGenerator(fTheta0, fThetaDesired, fThetaDotMax, t, bEnable, fDt)
%
% Generates a cosine velocity and position trajectory profile for smooth motion.
%
% INPUTS:
%   - fTheta0: Initial position (rad)
%   - fThetaDesired: Desired position (rad)
%   - fThetaDotMax: Maximum velocity (rad/s)
%   - t: Current time (s)
%   - bEnable: Boolean to start or stop the motion (true/false)
%   - fDt: Time step (s)
%
% OUTPUTS:
%   - fThetaRef: Reference position (rad)
%   - fThetaDotRef: Reference velocity (rad/s)
%   - isDone: Boolean indicating whether the motion has finished (true/false)
%   - test: Debugging flag to indicate first cycle behavior

function [fThetaRef, fThetaDotRef, isDone, test] = cosinePositionGenerator(fTheta0, fThetaDesired, fThetaDotMax, t, bEnable)
% Persistent variables to retain state between function calls
persistent bRunning fTheta0_persistent bFirstCycle t0_persistent fThetaDesired_persistent
persistent bEnableOld

% Ensure persistent variables are initialized properly
if isempty(bRunning)
    bRunning = false;
end
if isempty(bFirstCycle)
    bFirstCycle = false;
end
if isempty(bEnableOld)
    bEnableOld = false;
end
if isempty(t0_persistent)
    t0_persistent = 0;
end
if isempty(fThetaDesired_persistent)
    fThetaDesired_persistent = 0;
end
if isempty(fTheta0_persistent)
    fTheta0_persistent = 0;
end
% Default output values (holding position)
fThetaRef = fTheta0;
fThetaDotRef = 0.0;
isDone = false;
test = false;

%% START MOVEMENT IF TOGGLED ENABLED
% If enable signal toggles from off to on, start a new movement cycle
if bEnable && ~bEnableOld && ~bRunning
    bFirstCycle = true;
    bRunning = true;
end

%% STOP MOVEMENT WHEN TOGGLED OFF
% If the enable signal turns off, stop the motion and reset outputs
if ~bEnable
    fThetaRef = fTheta0;
    fThetaDotRef = 0.0;
    isDone = false;
    bRunning = false;
    bEnableOld = bEnable;
    return
end

%% INITIALIZE MOVEMENT ON FIRST CYCLE
% On the first cycle of motion, initialize the position, time, and desired goal
if bFirstCycle
    test = true;
    fTheta0_persistent = fTheta0;
    t0_persistent = t;
    bFirstCycle = false;
    fThetaDesired_persistent = fThetaDesired;
end

%% CALCULATE ELAPSED TIME
% Compute the time elapsed since the start of the motion
t_elapsed = (t - t0_persistent);

%% CALCULATE TIME TO REACH DESIRED POSITION
% Compute the total time required for a smooth transition using a cosine profile
A = (fThetaDesired_persistent - fTheta0_persistent);  % Total movement amplitude
T = 2 * pi * (abs(A) / 2) / fThetaDotMax;             % Total duration of the motion

%% STOP CONDITION: CHECK IF MOTION IS COMPLETE
% If the elapsed time exceeds half the period, hold the final position
if t_elapsed >= T / 2
    fThetaRef = fThetaDesired_persistent;
    fThetaDotRef = 0.0;
    isDone = true;
    bRunning = false;
    bEnableOld = bEnable;
    return
end

%% UPDATE TOGGLE STATE
% Update the persistent toggle state variable
bEnableOld = bEnable;

%% GENERATE COSINE POSITION AND VELOCITY PROFILE
% Cosine-based motion profile for smooth acceleration and deceleration
fThetaRef = (A / 2) * cos(2 * pi / T * t_elapsed - pi) + A / 2 + fTheta0_persistent;
fThetaDotRef = -2 * pi / T * (A / 2) * sin(2 * pi / T * t_elapsed - pi);

end
