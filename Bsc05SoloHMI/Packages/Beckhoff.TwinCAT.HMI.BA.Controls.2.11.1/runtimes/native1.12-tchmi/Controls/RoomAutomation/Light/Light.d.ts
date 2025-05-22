declare namespace TcHmi.BuildingAutomation.Controls.RoomAutomation {
    /**
     * A control to display and control a light.
     * @category Control
     */
    class Light extends System.BaseRoomControl<Light.BaInterface> implements BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Light.Icon;
        protected __attrHandler: AttributeHandler<Light.IAttributes>;
        /** If true both, the feedback and control value, will be displayed be the slider. */
        static showFeedbackInSlider: boolean;
        /**
         * The slider to control the brightness of the light.
         * @cateogry Elements
         */
        private __brightnessSlider;
        /**
         * The switch to control the brightness of the light.
         * @cateogry Elements
         */
        private __brightnessSwitch;
        /**
         * IReadyFunction to reset the busy invoking after changing the brightness.
         * @category Internal
         */
        private __brightnessFeedbackReady;
        /**
         * If true the brightness will be displayed, otherwise the brightness feedback may be displayed.
         * @category Internal
         */
        private __useCurrentBrightness;
        /**
         * Is true when the value of the brightness was written to the server and the client is now waiting for the result.
         * @category Internal
         */
        private __waitingForBrightnessFeedback;
        private __destroyOnBrightnessSliderChanged;
        private __destroyOnBrightnessSliderUIFinised;
        private __destroyOnBrightnessSwitchUIFinised;
        private static __brightnessToggleName;
        /**
         * Handler when the user interaction on a slider has finished.
         * @category Event handler
         */
        private __uiFinishedHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Processes the brightness if a new brightness was set through the control.
         * @category Internal
         * @param newBrightness The value of the new brightness.
         */
        private __processChangedBrightness;
        /**
         * Updates the visuals of the control.
         * @category Internal
         */
        private __createOrUpdateControls;
        /**
         * Create the quick links for certain brightness values if brightness data type is number.
         * @category Internal
         */
        private __createOrUpdateQuickLinks;
        /**
         * Updates the position display.
         * @param pos The position whose percentage will be calculated and displayed.
         */
        private __updateDisplay;
        static processBaObject(ctrl: BaObjectHandler.IUsesBaObject, baInterfaceSymNames: BaInterfaceHandler.BaInterfaceSymbolNames<Light.BaInterface> | null, attr: Light.IProcessorAttributes): void;
        /**
         * Writes a new brightness value to the plc.
         * @category Public
         * @param newBrightness The new brightness to write.
         */
        static writeBrightnessToPlc(newBrightness: number | boolean | null | undefined, target: BA.BaObject<Light.BaInterface> | BaInterfaceHandler<Light.BaInterface>): void;
        /**
         * Writes a new brightness value to the plc.
         * @category Public
         * @param newBrightness The new brightness to write.
         */
        writeBrightnessToPlc(newBrightness: number | boolean | null | undefined): void;
        /**
         * Resets the manual operation mode to automatic operation mode.
         * @category Public
         */
        static resetManualToPlc(target: BA.BaObject<Light.BaInterface> | BaInterfaceHandler<Light.BaInterface>): void;
        /**
         * Resets the manual operation mode to automatic operation mode.
         * @category Public
         */
        resetManualToPlc(): void;
        static getPriorityDisplayIcon(priority: number | null | undefined): Icons.IIconAttributes | null;
        getPriorityIcon(priority: number): Icons.IIconAttributes | null;
        static getIsLocked(attrHandler: AttributeHandler<Light.IAttributes>): boolean;
        getIsLocked(): boolean;
        static isManualPriority(priority: number | null | undefined): boolean;
        hasManualPriority(): boolean;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setAttributes(attr: Light.IAttributes): this;
        getAttributes(): AttributeHandler<Light.IAttributes>;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<Light.BaInterface> | null | undefined): this;
        /**
         * Setter for the Brightness attribute.
         * @category Attribute setter and getter
         * @param p The new Brightness or null.
         * @returns The Light.
         */
        setBrightness(p: number | boolean | null | undefined): this;
        /**
         * Processor for the Brightness attribute.
         * @category Attribute setter and getter
         */
        protected __processBrightness(): void;
        /**
         * Getter for the Brightness attribute.
         * @category Attribute setter and getter
         * @returns The Brightness attribute.
         */
        getBrightness(): number | boolean | null | undefined;
        /**
         * Setter for the BrightnessFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new BrightnessFeedback or null.
         * @returns The Light.
         */
        setBrightnessFeedback(p: number | boolean | null | undefined): this;
        /**
         * Processor for the BrightnessFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processBrightnessFeedback(): void;
        /**
         * Getter for the BrightnessFeedback attribute.
         * @category Attribute setter and getter
         * @returns The BrightnessFeedback attribute.
         */
        getBrightnessFeedback(): number | boolean | null | undefined;
        setLightColor(p: SolidColor | Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the LightColor attribute.
         * @category Attribute setter and getter
         */
        protected __processLightColor(): void;
        /**
         * Getter for the LightColor attribute.
         * @category Attribute setter and getter
         * @returns The LightColor attribute.
         */
        getLightColor(): SolidColor | null | undefined;
        /**
         * Setter for the DisplayMode attribute.
         * @category Attribute setter and getter
         * @param p The new DisplayMode or null.
         * @returns The Light.
         */
        setDisplayMode(p: Light.Icon.DisplayMode | null | undefined): this;
        /**
         * Processor for the DisplayMode attribute.
         * @category Attribute setter and getter
         */
        protected __processDisplayMode(): void;
        /**
         * Getter for the DisplayMode attribute.
         * @category Attribute setter and getter
         * @returns The DisplayMode attribute.
         */
        getDisplayMode(): Light.Icon.DisplayMode | null | undefined;
        /**
         * Setter for the ShowValue attribute.
         * @category Attribute setter and getter
         * @param p The new ShowValue or null.
         * @returns The Light.
         */
        setShowValue(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowValue attribute.
         * @category Attribute setter and getter
         */
        protected __processShowValue(): void;
        /**
         * Getter for the ShowValue attribute.
         * @category Attribute setter and getter
         * @returns The ShowValue attribute.
         */
        getShowValue(): boolean | null | undefined;
        processBaObject(): void;
        static processBaInterface(ctrl: Light | RoomControl.LightControl, attr: Light.IProcessorAttributes): void;
    }
    namespace Light {
        interface IGeneralAttributes {
            /** The color of the lamp icon when the brightness is at 100%. */
            lightColor?: Color.RGBAColor | null;
            /** The type of the used light icon. */
            displayMode?: Icon.DisplayMode | null;
        }
        interface IAttributes extends System.BaseRoomControl.IAttributes, IGeneralAttributes {
            /** The brightness of the light. */
            brightness?: number | boolean | null;
            /** The feedback for the brightness of the light. */
            brightnessFeedback?: number | boolean | null;
            /** Defines if the percentage of the brightness is shown. */
            showValue?: boolean | null;
        }
        type BaInterface = System.BaseRoomControl.BaInterface & {
            fdbLightOn: boolean;
            resetManual?: boolean;
            cmdBrightness?: boolean | number;
            setCmdBrightness?: boolean;
            fdbBrightness?: boolean | number;
            cmdTemperature?: boolean | number;
            setCmdTemperature?: boolean;
            fdbTemperature?: boolean | number;
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface>;
        interface IProcessorAttributes extends System.BaseRoomControl.IProcessorAttributes {
            processHasBrightnessCmd: (hasBrightnessCmd: boolean) => any;
            processBrightness: (brightness: number | boolean | null | undefined) => any;
            processBrightnessFeedback: (brightnessFeedback: number | boolean | null | undefined) => any;
            processHasResetSymbol: (hasResetSymbol: boolean) => any;
        }
        enum ControlType {
            sliderHorizontal = 0
        }
        enum Priority {
            none = 0,
            fire = 1,
            communicationError = 2,
            burglary = 3,
            maintenance = 4,
            cleaning = 8,
            nightWatch = 9,
            simple = 12,
            manual = 13,
            automaticLight = 14,
            scene1 = 18,
            scene2 = 19,
            scene3 = 20
        }
        /**
         * The color of the light, if the light is off. Default is black and white in dark theme.
         * Default is black.
         */
        let LightOffColor: Color.RGBAColor;
        /**
         * Defines if the quick links are displayed or not. Default is false.
         * Default is false.
         */
        let ShowQuickLinks: boolean;
        /**
         * The minimum brightness of the light.
         * Defautl is 0.
         */
        let MinimumBrightness: number;
        /**
         * The maximum brightness of the light.
         * Defautl is 100.
         */
        let MaximumBrightness: number;
        /**
         * Defines the icons that will be displayed, when a certain priority is active.
         * If no icon is defined for a certain priority, then no icon will be displayed, if the priority is active.
         */
        let PriorityIcons: Map<number, Icons.IIconAttributes>;
        /** The threshold when the light control will be disabled, when a priority with a lower value is active. */
        let PriorityLockThreshold: number;
        let PriorityManual: number;
        /**
         * Icon that displays the brightness of a light.
        */
        class Icon extends Components.Button {
            constructor(id: string, parent?: Components.IBaseNode | null);
            protected __attrHandler: AttributeHandler<Icon.IAttributes>;
            protected __attach(): void;
            protected __detach(): void;
            destroy(): void;
            /**
             * Animates the brigtness of the light.
             * @category Internal
             */
            private __animateBrightness;
            /**
             * Get a converted text with the current brightness in percent.
             * @category Public
             * @param brightness The brightness whose text is required.
             * @param minBrightness The minimum brightness.
             * @param maxBrightness The maximum brightness.
             * @param cb Callback which will be raised when the text has changed. The text contains the current brightness in percent.
             */
            static getBrightnessText(brightness: number | boolean | null | undefined, minBrightness: number | null | undefined, maxBrightness: number | null | undefined, cb: (text: string) => void): void;
            setAttributes(attr: Icon.IAttributes): this;
            getAttributes(): Icon.IAttributes;
            /**
             * Setter for the Brightness attribute.
             * @category Attribute setter and getter
             * @param p The new Brightness or null.
             * @returns The Icon.
             */
            setBrightness(p: number | boolean | null | undefined): this;
            /**
             * Processor for the Brightness attribute.
             * @category Attribute setter and getter
             */
            protected __processBrightness(): void;
            /**
             * Getter for the Brightness attribute.
             * @category Attribute setter and getter
             * @returns The Brightness attribute.
             */
            getBrightness(): number | boolean | null | undefined;
            setLightColor(p: Color.RGBAColor | null | undefined): this;
            /**
             * Processor for the LightColor attribute.
             * @category Attribute setter and getter
             */
            protected __processLightColor(): void;
            /**
             * Getter for the LightColor attribute.
             * @category Attribute setter and getter
             * @returns The LightColor attribute.
             */
            getLightColor(): Color.RGBAColor | null | undefined;
            /**
             * Setter for the DisplayMode attribute.
             * @category Attribute setter and getter
             * @param p The new DisplayMode or null.
             * @returns The Icon.
             */
            setDisplayMode(p: Icon.DisplayMode | null | undefined): this;
            /**
             * Processor for the DisplayMode attribute.
             * @category Attribute setter and getter
             */
            protected __processDisplayMode(): void;
            /**
             * Getter for the DisplayMode attribute.
             * @category Attribute setter and getter
             * @returns The DisplayMode attribute.
             */
            getDisplayMode(): Icon.DisplayMode | null | undefined;
            protected __processReadOnly(): void;
            protected __updateLegendIcon(): void;
        }
        namespace Icon {
            interface IAttributes extends Components.Button.IAttributes {
                brightness?: number | boolean | null;
                lightColor?: Color.RGBAColor | null;
                displayMode?: DisplayMode | null;
            }
            enum DisplayMode {
                lightBulb = 0,
                lightBulbFilled = 1,
                filled = 2
            }
        }
    }
}
//# sourceMappingURL=Light.d.ts.map