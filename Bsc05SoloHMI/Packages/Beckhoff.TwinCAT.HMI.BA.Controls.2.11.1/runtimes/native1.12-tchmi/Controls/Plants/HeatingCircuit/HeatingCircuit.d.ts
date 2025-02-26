declare namespace TcHmi.BuildingAutomation.Controls.Plants {
    /**
     * A control to display and control a heating circuit.
     * @category Control
     */
    class HeatingCircuit<T extends HeatingCircuit.BaTemplateDefinition> extends Cooler<T> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __attrHandler: AttributeHandler<HeatingCircuit.IAttributes>;
        protected __defaultBaTemplateDescription: any;
        protected __pump: Pump | undefined;
        private __stp;
        private __stpDesigner;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /** @ignore
        * Process setpoint value.
        * @category Internal
        */
        private __processFlowTempSensorSetpoint;
        /**
        * Sets setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns HeatingCircuit.
        */
        protected setSetpointSensorFlow(p: BA.BaBasicObject | Symbol | null | undefined): this;
        /**
        * Sets visibility of feedback.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns HeatingCircuit.
        */
        setShowFeedbackPump(p: boolean | null | undefined): this;
        /**
         * Gets visibility of feedback.
         * @category Attribute getter
         * @returns The ShowFeedback attribute.
         */
        getShowFeedbackPump(): boolean | null | undefined;
        /**
        * Sets visibility of setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns HeatingCircuit.
        */
        setShowSetpointPump(p: boolean | null | undefined): this;
        /**
         * Gets visibility of setpoint.
         * @category Attribute getter
         * @returns The ShowSetpoint attribute.
         */
        getShowSetpointPump(): boolean | null | undefined;
        processBaObject(): void;
        protected __processShowTags(): void;
    }
    namespace HeatingCircuit {
        interface IAttributes extends Cooler.IAttributes {
        }
        type BaTemplateDefinition = Cooler.BaTemplateDefinition & {
            pump: {
                subTemplate: Pump.BaTemplateDefinition;
            };
            tempFlowSp: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
    }
}
//# sourceMappingURL=HeatingCircuit.d.ts.map