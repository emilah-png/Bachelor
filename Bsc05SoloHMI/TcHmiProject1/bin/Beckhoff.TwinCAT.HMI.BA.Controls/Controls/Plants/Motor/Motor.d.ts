declare namespace TcHmi.BuildingAutomation.Controls.Plants {
    /**
     * A control to display and control a motor.
     * @category Control
     */
    class Motor extends Controls.System.UiIconFdbStp<Motor.DisplayMode, Motor.BaTemplateDefinition> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<Motor.BaTemplateDefinition>;
        private __motorType;
        private __legendIconHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /** @ignore
         * Sets motor type.
         * @category Internal
         * @param motorType Type of motor.
         */
        private __setMotorType;
        /**
         * Gets motor type.
         * @category Public
         * @returns The motor type.
         */
        getMotorType(): Motor.Type;
        processBaObject(): void;
        /** @ignore
        * Process display mode.
        * @category Internal
        */
        protected __processDisplayMode(): void;
    }
    namespace Motor {
        enum DisplayMode {
            invalid = -1,
            fan = 0,
            motor = 1,
            pump = 2,
            custom
        }
        enum Type {
            invalid = -1,
            motor = 0
        }
        type BaTemplateDefinition = {
            feedback?: {};
            setpoint?: {};
            command: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
    }
}
//# sourceMappingURL=Motor.d.ts.map