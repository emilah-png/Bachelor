function main_angle = main_stroke_to_angle(main_stroke)
load("p_m_stroke_to_angle.mat");
main_angle = polyval(p_k_angle_to_stroke, main_stroke);
end

