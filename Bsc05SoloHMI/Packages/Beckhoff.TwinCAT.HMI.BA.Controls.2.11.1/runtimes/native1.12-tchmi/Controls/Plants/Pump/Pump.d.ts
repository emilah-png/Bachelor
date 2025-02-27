declare namespace TcHmi.BuildingAutomation.Controls.Plants {
    /**
     * A control to display and control a pump.
     * @category Control
     */
    class Pump extends Controls.System.UiIconFdbStp<Pump.DisplayMode, Pump.BaTemplateDefinition> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<Pump.BaTemplateDefinition>;
        private __pumpType;
        private __legendIconHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Sets pump type.
         * @category Internal
         * @param pumpType Type of pump.
         */
        private __setPumpType;
        /**
         * Gets valve type.
         * @category Public
         * @returns The pump type.
         */
        getPumpType(): Pump.Type;
        processBaObject(): void;
        /**
         * Process display mode.
         * @category Internal
         */
        protected __processDisplayMode(): void;
    }
    namespace Pump {
        enum DisplayMode {
            invalid = -1,
            pu1st = 0,
            custom
        }
        enum Type {
            invalid = -1,
            pu1st = 0,
            puCtl = 1
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
//# sourceMappingURL=Pump.d.ts.map