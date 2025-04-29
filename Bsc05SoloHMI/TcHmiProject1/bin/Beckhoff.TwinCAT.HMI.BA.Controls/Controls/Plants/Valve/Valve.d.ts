declare namespace TcHmi.BuildingAutomation.Controls.Plants {
    /**
     * A control to display and control a valve.
     * @category Control
     */
    class Valve extends Controls.System.UiIconFdbStp<Valve.DisplayMode, Valve.BaTemplateDefinition> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<Valve.BaTemplateDefinition>;
        private __valveType;
        private __legendIconHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /** @ignore
         * Sets valve type.
         * @category Internal
         * @param valveType Type of valve.
         */
        private __setValveType;
        /**
         * Gets valve type.
         * @category Public
         * @returns The valve type.
         */
        getValveType(): Valve.Type;
        processBaObject(): void;
        /** @ignore
         * Process display mode.
         * @category Internal
         */
        protected __processDisplayMode(): void;
    }
    namespace Valve {
        enum DisplayMode {
            invalid = -1,
            twoDirection_0 = 0,
            twoDirection_1 = 1,
            twoDirection_2 = 2,
            twoDirection_3 = 3,
            threeDirection_0 = 4,
            threeDirection_1 = 5,
            threeDirection_2 = 6,
            threeDirection_3 = 7,
            threeDirection_4 = 8,
            custom
        }
        enum Type {
            invalid = -1,
            analog = 0,
            threePoint = 1
        }
        type BaTemplateDefinition = {
            feedback: {};
            setpoint?: {};
            command?: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription_TwoPoint: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
        let BaTemplateDescription_ThreePoint: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
    }
}
//# sourceMappingURL=Valve.d.ts.map