declare namespace TcHmi.BuildingAutomation.Controls.Plants {
    /**
     * A control to display and control a variable air volume box.
     * @category Control
     */
    class VAV extends Controls.System.UiIconFdbStp<VAV.DisplayMode, VAV.BaTemplateDefinition> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<VAV.BaTemplateDefinition>;
        private __legendIconHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        processBaObject(): void;
        protected __processDisplayMode(): void;
    }
    namespace VAV {
        enum DisplayMode {
            invalid = -1,
            vav = 0,
            custom
        }
        type BaTemplateDefinition = {
            setpoint: {};
            feedback?: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
    }
}
//# sourceMappingURL=VAV.d.ts.map