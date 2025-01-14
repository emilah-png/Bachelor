function main_stroke = main_angle_to_stroke(main_angle)
load("p_m_angle_to_stroke.mat");
main_stroke = polyval(p_m_angle_to_stroke, main_angle);
end

