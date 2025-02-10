declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * The InputBox can be used to display and edit number and string values.
     * @category Control
     * @typeparam T Describes the generic type of the value property. Can only be string or number.
    */
    class InputBox<T extends string | number> extends System.TextControl implements BaInterfaceHandler.IUsesBaInterface<InputBox.BaInterface<T>>, BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.InputBox<T>;
        baInterfaceHandler: BaInterfaceHandler<InputBox.BaInterface<T>>;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        get baObjectHandler(): BaObjectHandler;
        processBaObject(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<InputBox.BaInterface<T>> | null | undefined): this;
        getBaInterface(): BaInterfaceHandler.BaInterfaceSymbol<InputBox.BaInterface<T>> | null | undefined;
        setBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<InputBox.BaInterface<T>> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
        getBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined;
        /**
         * Setter for the Value attribute.
         * @category Attribute setter and getter
         * @param p The new Value or null.
         * @returns The InputBox.
         */
        setValue(p: T | null | undefined): this;
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
        getValue(): T | null | undefined;
        /**
         * Setter for the ValueFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new ValueFeedback or null.
         * @returns The InputBox.
         */
        setValueFeedback(p: T | null | undefined): this;
        /**
         * Processor for the ValueFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processValueFeedback(): void;
        /**
         * Getter for the ValueFeedback attribute.
         * @category Attribute setter and getter
         * @returns The ValueFeedback attribute.
         */
        getValueFeedback(): T | null | undefined;
        /**
         * Setter for the DataType attribute.
         * @category Attribute setter and getter
         * @param p The new DataType or null.
         * @returns The InputBox.
         */
        setDataType(p: Components.InputBox.DataType | string | null | undefined): this;
        /**
         * Processor for the DataType attribute.
         * @category Attribute setter and getter
         */
        protected __processDataType(): void;
        /**
         * Getter for the DataType attribute.
         * @category Attribute setter and getter
         * @returns The DataType attribute.
         */
        getDataType(): Components.InputBox.DataType | null | undefined;
        /**
         * Getter for the Text attribute.
         * @category Attribute setter and getter
         * @returns The Text attribute.
         */
        getText(): string | null | undefined;
        /**
         * Setter for the MinValue attribute.
         * @category Attribute setter and getter
         * @param p The new MinValue or null.
         * @returns The Inputbox.
         */
        setMinValue(p: number | null): this;
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
         * @returns The InputBox.
         */
        setMaxValue(p: number | null): this;
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
         * Setter for the Unit attribute.
         * @category Attribute setter and getter
         * @param p The new Unit or null.
         * @returns The InputBox.
         */
        setUnit(p: string | BA.Unit | null): this;
        /**
         * Processor for the Unit attribute.
         * @category Attribute setter and getter
         */
        protected __processUnit(): void;
        /**
         * Getter for the unit attribute.
         * @category Attribute setter and getter
         * @returns The Unit attribute.
         */
        getUnit(): string | null | undefined;
        /**
         * Setter for the Digits attribute.
         * @category Attribute setter and getter
         * @param p The new Digits or null.
         * @returns The InputBox.
         */
        setDigits(p: number | null): this;
        /**
         * Processor for the Digits attribute.
         * @category Attribute setter and getter
         */
        protected __processDigits(): void;
        /**
         * Getter for the Digits attribute.
         * @category Attribute setter and getter
         * @returns The Digits attribute.
         */
        getDigits(): number | null | undefined;
    }
    namespace InputBox {
        type BaInterface<T> = {
            value: T;
            valueFeedback?: T;
            unit?: string;
            minVal?: number;
            maxVal?: number;
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface<string | number>>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface<string | number>>;
    }
}
//# sourceMappingURL=InputBox.d.ts.map