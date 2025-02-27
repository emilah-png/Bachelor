declare namespace TcHmi.BuildingAutomation.Controls.System {
    /**
     * The Sensor is the base control for different sensors like SensorAnalog or SensorBinary.
     * @category Hidden control
     */
    class Sensor<E extends number, T extends BA.BaView.BaTemplateStructure> extends Controls.System.UiIconFdbStp<Sensor.DisplayMode, Sensor.BaTemplateDefinition> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<Sensor.BaTemplateDefinition>;
        protected __legendIconHandler: Components.LegendIconHandler;
        protected __fdb: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | string | null | undefined;
        protected __stpDesigner: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | string | null | undefined;
        protected __customLetter: string | null | undefined;
        protected __pinLayout: Sensor.PinLayout | null | undefined;
        protected __pinPosition: Position | null | undefined;
        protected __pinConnection: number | null | undefined;
        protected __pinExtension: number | null | undefined;
        protected __pinWidth: number | null | undefined;
        protected __isAnalog: boolean;
        private __iconSuffix;
        private __svgCLP;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /** @ignore
        * Process current value and setpoint.
        * @category Internal
        */
        protected __processValues(): void;
        /**
         * Update custom letter in SVG.
         * @category Internal
         */
        private __updateCustomLetter;
        /**
        * Sets setpoint.
        * @category Attribute setter
        * @param p The new value or null.
        * @returns Sensor.
        */
        setSetpointDesigner(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | string | null | undefined): this;
        setCustomLetter(p: string | null | undefined): this;
        /**
         * Processor for the CustomLetter attribute.
         * @category Internal
         */
        protected __processCustomLetter(): void;
        /**
         * Gets the CustomLetter attribute.
         * @category Attribute getter
         * @returns CustomLetter.
         */
        getCustomLetter(): string | null | undefined;
        setPinLayout(p: Sensor.PinLayout | string | null | undefined): this;
        /**
         * Processor for the PinLayout attribute.
         * @category Internal
         */
        protected __processPinLayout(): void;
        /**
         * Gets the PinLayout attribute.
         * @category Attribute getter
         * @returns PinLayout.
         */
        getPinLayout(): Sensor.PinLayout | null | undefined;
        setPinPosition(p: Position | string | null | undefined): this;
        /**
         * Processor for the PinPosition attribute.
         * @category Internal
         */
        protected __processPinPosition(): void;
        /**
         * Gets the PinPosition attribute.
         * @category Attribute getter
         * @returns PinPosition.
         */
        getPinPosition(): Position | null | undefined;
        setPinConnection(p: number | null | undefined): this;
        /**
         * Processor for the PinConnection attribute.
         * @category Internal
         */
        protected __processPinConnection(): void;
        /**
         * Gets the PinConnection attribute.
         * @category Attribute getter
         * @returns PinConnection.
         */
        getPinConnection(): number | null | undefined;
        setPinExtension(p: number | null | undefined): this;
        /**
         * Processor for the PinExtension attribute.
         * @category Internal
         */
        protected __processPinExtension(): void;
        /**
         * Gets the PinExtension attribute.
         * @category Attribute getter
         * @returns PinExtension.
         */
        getPinExtension(): number | null | undefined;
        setPinWidth(p: number | null | undefined): this;
        /**
         * Processor for the PinWidth attribute.
         * @category Internal
         */
        protected __processPinWidth(): void;
        /**
         * Gets the PinWidth attribute.
         * @category Attribute getter
         * @returns PinWidth.
         */
        getPinWidth(): number | null | undefined;
        processBaObject(): void;
        /** @ignore
         * Process display mode.
         * @category Internal
         */
        protected __processDisplayMode(): void;
        /** @ignore
         * Process connections.
         * @category Internal
         */
        protected __processConnections(): void;
        /** @ignore
         * Process connection extension.
         * @category Internal
         */
        protected __processConnectionExtension(): void;
        /** @ignore
         * Process connections width.
         * @category Internal
         */
        protected __processConnectionsWidth(): void;
    }
    namespace Sensor {
        enum DisplayMode {
            invalid = -1,
            temperature = 0,
            pressure = 1,
            humidity = 2,
            humidityAbs = 3,
            enthalpy = 4,
            globalRadiation = 5,
            co2 = 6,
            voc = 7,
            volumeFlow = 8,
            heatAmount = 9,
            current = 10,
            voltage = 11,
            brightness = 30,
            custom,
            customLetter
        }
        enum PinLayout {
            none = -1,
            single = 0,
            parallel = 1
        }
        type BaTemplateDefinition = {
            feedback: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
    }
}
//# sourceMappingURL=Sensor.d.ts.map