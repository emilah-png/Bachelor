declare namespace TcHmi.BuildingAutomation.Controls.Plants {
    /**
     * A control to display and control a ErcRotation.
     * @category Control
     */
    class ErcRotation<T extends ErcRotation.BaTemplateDefinition> extends Controls.System.BaseTemplate<T> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __attrHandler: AttributeHandler<ErcRotation.IAttributes>;
        protected __defaultBaTemplateDescription: any;
        protected __main: Common.UiIcon | undefined;
        protected __diffPrssSwi: SensorBinary | undefined;
        protected __showFeedback: boolean | null;
        protected __showSetpoint: boolean | null;
        private __displayPosition;
        private __feedback;
        private __setpoint;
        private __legendIconHandler;
        private __diffPrssSwiLegendIconHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /** @ignore
        * Process the DisplaysData.
        * @category Internal
        */
        protected __processDisplaysData(): void;
        /**
        * Set the display position.
        * @category Attribute setter
        * @param p The new value or null.
        * @returns ErcRotation.
        */
        setDisplayPosition(p: Components.UiIcon.DisplayPosition | null): this;
        /**
         * Processor for the DisplayPosition attribute.
         * @category Internal
         */
        protected __processDisplayPosition(): void;
        /**
         * Get the display position.
         * @category Attribute getter
         * @returns The DisplayPosition attribute.
         */
        getDisplayPosition(): Components.UiIcon.DisplayPosition | null;
        /**
        * Sets visibility of feedback.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns ErcRotation.
        */
        setShowFeedbackErc(p: boolean | null | undefined): this;
        /**
         * Gets visibility of feedback.
         * @category Attribute getter
         * @returns The ShowFeedback attribute.
         */
        getShowFeedbackValve(): boolean | null;
        /**
        * Sets visibility of setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns ErcRotation.
        */
        setShowSetpointErc(p: boolean | null | undefined): this;
        /**
         * Gets visibility of setpoint.
         * @category Attribute getter
         * @returns The ShowSetpoint attribute.
         */
        getShowSetpointErc(): boolean | null;
        processBaObject(): void;
    }
    namespace ErcRotation {
        interface IAttributes extends Controls.System.BaseTemplate.IAttributes {
        }
        type BaTemplateDefinition = {
            diffPrssSwi: {};
            feedback?: {};
            setpoint?: {};
            command?: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
    }
}
//# sourceMappingURL=ErcRotation.d.ts.map