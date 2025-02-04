declare namespace TcHmi.BuildingAutomation.Controls.Plants {
    /**
     * A control to display and control a damper.
     * @category Control
     */
    class Damper extends Controls.System.UiIconFdbStp<Damper.DisplayMode, Damper.BaTemplateDefinition> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<Damper.BaTemplateDefinition>;
        static openPosition: number;
        static closePosition: number;
        static usePercentageForBoolean: boolean;
        private __damperType;
        private __flapPosition;
        private __switchOpn;
        private __switchCls;
        private __destroyerLocaleWatch;
        private __texts;
        private __legendIconHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /** @ignore
         * Sets damper type.
         * @category Internal
         * @param damperType Type of damper.
         */
        private __setDamperType;
        /** @ignore */
        private __processSwitches;
        /**
         * Gets damper type.
         * @category Public
         * @returns The damper type.
         */
        getDamperType(): Damper.Type | null;
        /**
         * Set FlapPosition.
         * @category Attribute setter
         * @param p The new FlapPosition in percent (0 is closed) or null.
         * @returns Damper.
         */
        setFlapPosition(p: number | boolean | null | undefined): this;
        /**
         * Processor for the FlapPosition attribute.
         * @category Internal
         */
        protected __processFlapPosition(): void;
        /**
         * Get FlapPosition.
         * @category Attribute getter
         * @returns The FlapPosition attribute.
         */
        getFlapPosition(): number | null | undefined;
        processBaObject(): void;
        protected __processDisplaysData(): void;
        /** @ignore
        * Process display mode.
        * @category Internal
        */
        protected __processDisplayMode(): void;
    }
    namespace Damper {
        enum DisplayMode {
            invalid = -1,
            damper = 0,
            fireDamper = 1,
            shutOffValve = 2,
            custom
        }
        enum Type {
            invalid = -1,
            dmp2P = 0,
            analog = 1
        }
        type BaTemplateDefinition = {
            feedback?: {};
            setpoint?: {};
            command?: {};
            swiOpn?: {};
            swiCls?: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
    }
}
//# sourceMappingURL=Damper.d.ts.map