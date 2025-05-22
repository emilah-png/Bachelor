function [p, v] = Cubic(t0, t1, t_, p0, p1, v0, v1)

    %{
        ##########   Cubic trajectory generation   ###########

        Inputs:
            t0  ==> time at initial point
            t1  ==> time at final point
            t   ==> current time
            p0  ==> position of initial point
            p1  ==> position of final point
            v0  ==> velocity at initial point
            v1  ==> velocity at final point

        Ouputs:
            p   ==> array of position points
            v   ==> array of velocity points
            a   ==> array of acceleration points
            t   ==> time array used to generate trajectory
        
    %}

    % time matrix
    A = [   
            1, t0, t0^2, t0^3;
            1, t1, t1^2, t1^3;
            0, 1, 2*t0, 3*t0^2;
            0, 1, 2*t1, 3*t1^2;
    ];

    % trajectory constraints
    b = [   
            p0;
            p1;
            v0;
            v1
    ];

    x = A\b;

    p_ = x(1) + x(2)*t_ + x(3)*t_^2 + x(4)*t_^3;   % position
    v_ = x(2) + 2*x(3)*t_ + 3*x(4)*t_^2;           % velocity
    
    % write to output variables
    p = p_;
    v = v_;
end