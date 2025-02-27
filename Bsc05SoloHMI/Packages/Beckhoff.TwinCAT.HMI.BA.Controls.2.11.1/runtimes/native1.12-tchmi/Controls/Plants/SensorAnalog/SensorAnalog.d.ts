declare namespace TcHmi.BuildingAutomation.Controls.Plants {
    /**
     * A control to display and control an analog sensor.
     * @category Control
    */
    class SensorAnalog extends Controls.System.Sensor<System.Sensor.DisplayMode, SensorAnalog.BaTemplateDefinition> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<SensorAnalog.BaTemplateDefinition>;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /** @ignore
        * Ensure downward compatibility of pin connection handling (=< TcHmiBa V2.8.7).
        * @category Internal
        */
        private __compatibilityV287;
        processBaObject(): void;
    }
    namespace SensorAnalog {
        type BaTemplateDefinition = {
            feedback: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
    }
}
//# sourceMappingURL=SensorAnalog.d.ts.map