declare namespace TcHmi.BuildingAutomation.Controls.Plants {
    /**
     * A control to display and control a cooler.
     * @category Control
    */
    class Cooler<T extends Cooler.BaTemplateDefinition> extends System.BaseTemplate<T> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __attrHandler: AttributeHandler<Cooler.IAttributes>;
        protected __defaultBaTemplateDescription: any;
        protected __main: Controls.Common.UiIcon | undefined;
        protected __flowTempSensor: SensorAnalog | undefined;
        protected __returnTempSensor: SensorAnalog | undefined;
        protected __valve: Valve | undefined;
        protected __legendIconHandler: Components.LegendIconHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        onResized(): void;
        /**
         * Set the FlowPipeColor attribute.
         * @category Attribute setter
         * @param p The new FlowPipeColor or null.
         * @returns Cooler.
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
         * @returns Cooler.
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
         * Set the DisplayMode attribute of the valve.
         * @category Attribute setter
         * @param p The new DisplayMode or null.
         * @returns Cooler.
         */
        setDisplayModeValve(p: Valve.DisplayMode | null | undefined): this;
        /**
         * Processor for the DisplayMode attribute of the valve.
         * @category Internal
         */
        protected __processDisplayModeValve(): void;
        /**
         * Get the DisplayMode attribute of the valve.
         * @category Attribute getter
         * @returns The DisplayMode attribute.
         */
        getDisplayModeValve(): Valve.DisplayMode | null | undefined;
        /**
        * Sets visibility of feedback.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns Cooler.
        */
        setShowFeedbackValve(p: boolean | null | undefined): this;
        /**
         * Gets visibility of feedback.
         * @category Attribute getter
         * @returns The ShowFeedback attribute.
         */
        getShowFeedbackValve(): boolean | null | undefined;
        /**
        * Sets visibility of setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns Cooler.
        */
        setShowSetpointValve(p: boolean | null | undefined): this;
        /**
         * Gets visibility of setpoint.
         * @category Attribute getter
         * @returns The ShowSetpoint attribute.
         */
        getShowSetpointValve(): boolean | null | undefined;
        /**
        * Sets setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns Cooler.
        */
        protected setSetpointSensorFlow(p: BA.BaBasicObject | Symbol | null | undefined): this;
        /**
        * Sets visibility of feedback.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns Cooler.
        */
        setShowFeedbackSensorFlow(p: boolean | null | undefined): this;
        /**
         * Gets visibility of feedback.
         * @category Attribute getter
         * @returns The ShowFeedback attribute.
         */
        getShowFeedbackSensorFlow(): boolean | null | undefined;
        /**
        * Sets visibility of setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns Cooler.
        */
        setShowSetpointSensorFlow(p: boolean | null | undefined): this;
        /**
         * Gets visibility of setpoint.
         * @category Attribute getter
         * @returns The ShowSetpoint attribute.
         */
        getShowSetpointSensorFlow(): boolean | null | undefined;
        /**
        * Sets setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns Cooler.
        */
        setSetpointSensorReturn(p: BA.BaBasicObject | Symbol | null | undefined): this;
        /**
        * Sets visibility of feedback.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns Cooler.
        */
        setShowFeedbackSensorReturn(p: boolean | null | undefined): this;
        /**
         * Gets visibility of feedback.
         * @category Attribute getter
         * @returns The ShowFeedback attribute.
         */
        getShowFeedbackSensorReturn(): boolean | null | undefined;
        /**
        * Sets visibility of setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns Cooler.
        */
        setShowSetpointSensorReturn(p: boolean | null | undefined): this;
        /**
         * Gets visibility of setpoint.
         * @category Attribute getter
         * @returns The ShowSetpoint attribute.
         */
        getShowSetpointSensorReturn(): boolean | null | undefined;
        processBaObject(): void;
        protected __processShowTags(): void;
    }
    namespace Cooler {
        interface IAttributes extends Controls.System.BaseTemplate.IAttributes {
            /** Color for the flow pipe. */
            flowPipeColor?: SolidColor | null;
            /** Color for the return pipe. */
            returnPipeColor?: SolidColor | null;
            /** The display mode of the valve. */
            valveDisplayMode?: Valve.DisplayMode | null;
        }
        type BaTemplateDefinition = {
            tempFlow: {
                subTemplate: SensorAnalog.BaTemplateDefinition;
            };
            tempReturn: {
                subTemplate: SensorAnalog.BaTemplateDefinition;
            };
            valve: {
                subTemplate: Valve.BaTemplateDefinition;
            };
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
        /** The position of the tag of the temperature sensor. */
        let TemperatureSensorTagPosition: Components.UiIcon.DisplayPosition;
    }
}
//# sourceMappingURL=Cooler.d.ts.map