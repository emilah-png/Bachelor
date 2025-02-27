declare namespace TcHmi.BuildingAutomation.Controls.Plants {
    /**
     * A control to display and control an binary sensor.
     * @category Control
    */
    class SensorBinary extends Controls.System.Sensor<System.Sensor.DisplayMode, SensorBinary.BaTemplateDefinition> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<SensorBinary.BaTemplateDefinition>;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        processBaObject(): void;
    }
    namespace SensorBinary {
        type BaTemplateDefinition = {
            feedback: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
    }
}
//# sourceMappingURL=SensorBinary.d.ts.map