clc; clear; close all;

data = load("data\cylinder_mapping_test_data.mat");
data.out.logsout


main_stroke = data.out.logsout{4}.Values.Data;
knuckle_stroke = data.out.logsout{3}.Values.Data;
main_angle = data.out.logsout{1}.Values.Data;
knuckle_angle = data.out.logsout{2}.Values.Data;



p_m_stroke_to_angle = polyfit(main_stroke, main_angle, 9);
p_k_stroke_to_angle = polyfit(knuckle_stroke, knuckle_angle, 9);
p_m_angle_to_stroke = polyfit(main_angle, main_stroke, 9);
p_k_angle_to_stroke = polyfit(knuckle_angle, knuckle_stroke, 9);

% -- Polynomial derivatives:
%   If y = p(x), then dy/dx = polyder(p).
%   For example:   angle'(stroke) = d(angle)/d(stroke)
dp_m_stroke_to_angle = polyder(p_m_stroke_to_angle);  % d(main_angle)/d(main_stroke)
dp_k_stroke_to_angle = polyder(p_k_stroke_to_angle);  % d(knuckle_angle)/d(knuckle_stroke)

dp_m_angle_to_stroke = polyder(p_m_angle_to_stroke);  % d(main_stroke)/d(main_angle)
dp_k_angle_to_stroke = polyder(p_k_angle_to_stroke);  % d(knuckle_stroke)/d(knuckle_angle)

figure(1)
subplot(2, 1, 1)
plot(main_stroke, main_angle)
hold on
plot(main_stroke, polyval(p_m_stroke_to_angle, main_stroke), '--')
hold off
grid on; box on;
xlabel("main stroke [m]");
ylabel("main angle [rad]");
legend("test data", "poly", Location="southeast")

subplot(2, 1, 2)
plot(main_angle, main_stroke)
hold on
plot(main_angle, polyval(p_m_angle_to_stroke, main_angle), '--')
hold off
grid on; box on;
xlabel("main angle [rad]");
ylabel("main stroke [m]");
legend("test data", "poly", Location="southeast")


figure(2)
subplot(2, 1, 1)
plot(knuckle_stroke, knuckle_angle)
hold on
plot(knuckle_stroke, polyval(p_k_stroke_to_angle, knuckle_stroke), '--')
hold off
grid on; box on;
xlabel("knuckle stroke [m]");
ylabel("knuckle angle [rad]");
legend("test data", "poly", Location="southeast")

subplot(2, 1, 2)
plot(knuckle_angle, knuckle_stroke)
hold on
plot(knuckle_angle, polyval(p_k_angle_to_stroke, knuckle_angle), '--')
hold off
grid on; box on;
xlabel("knuckle angle [rad]");
ylabel("knuckle stroke [m]");
legend("test data", "poly", Location="southeast")