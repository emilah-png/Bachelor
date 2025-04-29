declare namespace TcHmi.BuildingAutomation.Controls.Plants {
    /**
     * A control to display and control a ErcPlate.
     * @category Control
     */
    class ErcPlate<T extends ErcPlate.BaTemplateDefinition> extends Controls.System.BaseTemplate<T> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __attrHandler: AttributeHandler<ErcPlate.IAttributes>;
        protected __defaultBaTemplateDescription: any;
        protected __main: Common.UiIcon | undefined;
        protected __damper: Damper | undefined;
        protected __damperBy: Damper | undefined;
        protected __diffPrssSwi: SensorBinary | undefined;
        private __legendIconHandler;
        private __diffPrssSwiLegendIconHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Set the FlowPipeColor attribute.
         * @category Attribute setter
         * @param p The new FlowPipeColor or null.
         * @returns ErcPlate.
         */
        setFlowPipeColor(p: SolidColor | null | undefined): this;
        /**
         * Processor for the FlowPipeColor attribute.
         * @category Internal
         */
        protected __processFlowPipeColor(): void;
        /**
         * Get the FlowPipeColor attribute.
         * @category Attribute getter
         * @returns The FlowPipeColor attribute.
         */
        getFlowPipeColor(): SolidColor | null | undefined;
        /**
         * Set the ReturnPipeColor attribute.
         * @category Attribute setter
         * @param p The new ReturnPipeColor or null.
         * @returns ErcPlate.
         */
        setReturnPipeColor(p: SolidColor | null | undefined): this;
        /**
         * Processor for the ReturnPipeColor attribute.
         * @category Internal
         */
        protected __processReturnPipeColor(): void;
        /**
         * Get the ReturnPipeColor attribute.
         * @category Attribute getter
         * @returns The ReturnPipeColor attribute.
         */
        getReturnPipeColor(): SolidColor | null | undefined;
        /**
        * Sets visibility of feedback.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns ErcPlate.
        */
        setShowFeedbackDamper(p: boolean | null | undefined): this;
        /**
         * Gets visibility of feedback.
         * @category Attribute getter
         * @returns The ShowFeedback attribute.
         */
        getShowFeedbackDamper(): boolean | null | undefined;
        /**
        * Sets visibility of setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns ErcPlate.
        */
        setShowSetpointDamper(p: boolean | null | undefined): this;
        /**
         * Gets visibility of setpoint.
         * @category Attribute getter
         * @returns The ShowSetpoint attribute.
         */
        getShowSetpointDamper(): boolean | null | undefined;
        /**
        * Sets visibility of feedback.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns ErcPlate.
        */
        setShowFeedbackDamperBy(p: boolean | null | undefined): this;
        /**
         * Gets visibility of feedback.
         * @category Attribute getter
         * @returns The ShowFeedback attribute.
         */
        getShowFeedbackDamperBy(): boolean | null | undefined;
        /**
        * Sets visibility of setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns ErcPlate.
        */
        setShowSetpointDamperBy(p: boolean | null | undefined): this;
        /**
         * Gets visibility of setpoint.
         * @category Attribute getter
         * @returns The ShowSetpoint attribute.
         */
        getShowSetpointDamperBy(): boolean | null | undefined;
        processBaObject(): void;
        protected __processShowTags(): void;
    }
    namespace ErcPlate {
        interface IAttributes extends Controls.System.BaseTemplate.IAttributes {
            /** Color for the flow pipe. */
            flowPipeColor?: SolidColor | null;
            /** Color for the return pipe. */
            returnPipeColor?: SolidColor | null;
        }
        type BaTemplateDefinition = {
            damper: {
                subTemplate: Damper.BaTemplateDefinition;
            };
            damperBy: {
                subTemplate: Damper.BaTemplateDefinition;
            };
            diffPrssSwi: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
    }
}
//# sourceMappingURL=ErcPlate.d.ts.map