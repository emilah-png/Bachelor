function knuckle_angle = knuckle_stroke_to_angle(knuckle_stroke)
load("p_k_stroke_to_angle.mat");
knuckle_angle = polyval(p_k_, knuckle_stroke);
end

