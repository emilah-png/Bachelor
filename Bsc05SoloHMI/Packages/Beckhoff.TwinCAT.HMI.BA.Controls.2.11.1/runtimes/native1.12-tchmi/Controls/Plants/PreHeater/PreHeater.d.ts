declare namespace TcHmi.BuildingAutomation.Controls.Plants {
    /**
     * A control to display and control a PreHeater.
     * @category Control
     */
    class PreHeater<T extends PreHeater.BaTemplateDefinition> extends HeatingCircuit<T> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __attrHandler: AttributeHandler<PreHeater.IAttributes>;
        protected __defaultBaTemplateDescription: any;
        protected __frostThermostat: SensorBinary | undefined;
        protected __tFrost: SensorAnalog | undefined;
        private __frostThermostatLegendHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        onResized(): void;
        /**
        * Sets setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns PreHeater.
        */
        setSetpointSensorFrost(p: BA.BaBasicObject | Symbol | null | undefined): this;
        /**
        * Sets visibility of feedback.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns PreHeater.
        */
        setShowFeedbackSensorFrost(p: boolean | null | undefined): this;
        /**
         * Gets visibility of feedback.
         * @category Attribute getter
         * @returns The ShowFeedback attribute.
         */
        getShowFeedbackSensorFrost(): boolean | null | undefined;
        /**
        * Sets visibility of setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns PreHeater.
        */
        setShowSetpointSensorFrost(p: boolean | null | undefined): this;
        /**
         * Gets visibility of setpoint.
         * @category Attribute getter
         * @returns The ShowSetpoint attribute.
         */
        getShowSetpointSensorFrost(): boolean | null | undefined;
        processBaObject(): void;
        protected __processShowTags(): void;
    }
    namespace PreHeater {
        interface IAttributes extends HeatingCircuit.IAttributes {
        }
        type BaTemplateDefinition = HeatingCircuit.BaTemplateDefinition & {
            tempFlowSp: {};
            frostThermostat: {};
            tFrost: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
    }
}
//# sourceMappingURL=PreHeater.d.ts.map