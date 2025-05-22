declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * The Slider can be used to slide a numeric value from a min value to a max value.
     * @category Control
    */
    class Slider extends System.TextControl implements BaInterfaceHandler.IUsesBaInterface<Slider.BaInterface>, BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.Slider;
        baInterfaceHandler: BaInterfaceHandler<Slider.BaInterface>;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        get baObjectHandler(): BaObjectHandler;
        processBaObject(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<Slider.BaInterface> | null | undefined): this;
        getBaInterface(): BaInterfaceHandler.BaInterfaceSymbol<Slider.BaInterface> | null | undefined;
        setBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<Slider.BaInterface> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
        getBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined;
        /**
         * Setter for the Value attribute.
         * @category Attribute setter and getter
         * @param p The new Value or null.
         * @returns The InputBox.
         */
        setValue(p: number | null | undefined): this;
        /**
         * Processor for the Value attribute.
         * @category Attribute setter and getter
         */
        protected __processValue(): void;
        /**
         * Getter for the Value attribute.
         * @category Attribute setter and getter
         * @returns The Value attribute.
         */
        getValue(): number | null | undefined;
        /**
         * Setter for the ValueFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new ValueFeedback or null.
         * @returns The Slider.
         */
        setValueFeedback(p: number | null | undefined): this;
        /**
         * Processor for the ValueFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processValueFeedback(): void;
        /**
         * Getter for the ValueFeedback attribute.
         * @category Attribute setter and getter
         * @returns The MinValue attribute.
         */
        getValueFeedback(): number | null | undefined;
        /**
         * Setter for the ShowValue attribute.
         * @category Attribute setter and getter
         * @param p The new ShowValue or null.
         * @returns The Slider.
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
        /**
         * Setter for the ShowScale attribute.
         * @category Attribute setter and getter
         * @param p The new ShowScale or null.
         * @returns The Slider.
         */
        setShowScale(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowScale attribute.
         * @category Attribute setter and getter
         */
        protected __processShowScale(): void;
        /**
         * Getter for the ShowScale attribute.
         * @category Attribute setter and getter
         * @returns The ShowScale attribute.
         */
        getShowScale(): boolean | null | undefined;
        /**
         * Setter for the MinValue attribute.
         * @category Attribute setter and getter
         * @param p The new MinValue or null.
         * @returns The Slider.
         */
        setMinValue(p: number | null | undefined): this;
        /**
         * Processor for the MinValue attribute.
         * @category Attribute setter and getter
         */
        protected __processMinValue(): void;
        /**
         * Getter for the MinValue attribute.
         * @category Attribute setter and getter
         * @returns The MinValue attribute.
         */
        getMinValue(): number | null | undefined;
        /**
         * Setter for the MaxValue attribute.
         * @category Attribute setter and getter
         * @param p The new MaxValue or null.
         * @returns The Slider.
         */
        setMaxValue(p: number | null | undefined): this;
        /**
         * Processor for the MaxValue attribute.
         * @category Attribute setter and getter
         */
        protected __processMaxValue(): void;
        /**
         * Getter for the MaxValue attribute.
         * @category Attribute setter and getter
         * @returns The MaxValue attribute.
         */
        getMaxValue(): number | null | undefined;
        /**
         * Setter for the Orientation attribute.
         * @category Attribute setter and getter
         * @param p The new orientation or null.
         * @returns The Slider.
         */
        setOrientation(p: Orientation | string | null | undefined): this;
        /**
         * Processor for the Orientation attribute.
         * @category Attribute setter and getter
         */
        protected __processOrientation(): void;
        /**
         * Getter for the Orientation attribute.
         * @category Attribute setter and getter
         * @returns The Orientation attribute.
         */
        getOrientation(): Orientation | null | undefined;
        /**
         * Setter for the SwitchMinMax attribute.
         * @category Attribute setter and getter
         * @param p The new SwitchMinMax attribute or null.
         * @returns The control.
         */
        setSwitchMinMax(p: boolean | null | undefined): this;
        /**
         * Processor for the SwitchMinMax attribute.
         * @category Attribute setter and getter
         */
        protected __processSwitchMinMax(): void;
        /**
         * Getter for the SwitchMinMax attribute.
         * @category Attribute setter and getter
         * @returns The SwitchMinMax attribute.
         */
        getSwitchMinMax(): boolean | null | undefined;
        /**
         * Setter for the Step attribute. (e.g. '0.1' or '0.25')
         * @category Attribute setter and getter
         * @param p The new Step or null.
         * @returns The Slider.
         */
        setStep(p: number | null | undefined): this;
        /**
         * Processor for the Step attribute.
         * @category Attribute setter and getter
         */
        protected __processStep(): void;
        /**
         * Getter for the Step attribute.
         * @category Attribute setter and getter
         * @returns The Step attribute.
         */
        getStep(): number | null | undefined;
        /**
         * Setter for the Ranges attribute.
         * @category Attribute setter and getter
         * @param p The new Ranges or null.
         * @returns The Slider.
         */
        setRanges(p: Components.Slider.IRange[] | null | undefined): this;
        /**
         * Processor for the Ranges attribute.
         * @category Attribute setter and getter
         */
        protected __processRanges(): void;
        /**
         * Getter for the Ranges attribute.
         * @category Attribute setter and getter
         * @returns The Ranges attribute.
         */
        getRanges(): Components.Slider.IRange[] | null | undefined;
        /**
         * Setter for the Unit attribute.
         * @category Attribute setter and getter
         * @param p The new Unit or null.
         * @returns The Slider.
         */
        setUnit(p: string | null | undefined): this;
        /**
         * Processor for the Unit attribute.
         * @category Attribute setter and getter
         */
        protected __processUnit(): void;
        /**
         * Getter for the Unit attribute.
         * @category Attribute setter and getter
         * @returns The Unit attribute.
         */
        getUnit(): string | null | undefined;
        /**
         * Setter for the KnobAppearance attribute.
         * @category Attribute setter and getter
         * @param p The new KnobAppearance or null.
         * @returns The Slider.
         */
        setKnobAppearance(p: Components.Slider.KnobAppearance | string | null | undefined): this;
        /**
         * Processor for the KnobAppearance attribute.
         * @category Attribute setter and getter
         */
        protected __processKnobAppearance(): void;
        /**
         * Getter for the KnobAppearance attribute.
         * @category Attribute setter and getter
         * @returns The KnobAppearance attribute.
         */
        getKnobAppearancen(): Components.Slider.KnobAppearance | null | undefined;
        __processIsEnabled(): void;
        __processAccessConfig(): void;
    }
    namespace Slider {
        type BaInterface = {
            value: number;
            valueFeedback?: number;
            unit?: string;
            minVal?: number;
            maxVal?: number;
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface>;
    }
}
//# sourceMappingURL=Slider.d.ts.map