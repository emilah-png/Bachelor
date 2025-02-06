function knuckle_stroke = knuckle_angle_to_stroke(knuckle_angle)
load("p_k_angle_to_stroke.mat");
knuckle_stroke = polyval(p_k_angle_to_stroke, knuckle_angle);
end

