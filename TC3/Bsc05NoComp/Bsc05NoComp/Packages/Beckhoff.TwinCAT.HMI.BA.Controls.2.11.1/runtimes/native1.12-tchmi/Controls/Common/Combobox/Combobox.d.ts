declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * The combobox can be used to display multistate values or any other enumerations.
     * @category Control
     * @typeparam T Describes the generic type of the value property of the combobox items.
    */
    class Combobox<T> extends System.TextControl implements BaInterfaceHandler.IUsesBaInterface<Combobox.BaInterface<T>>, BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.Combobox<T>;
        baInterfaceHandler: BaInterfaceHandler<Combobox.BaInterface<T>>;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        get baObjectHandler(): BaObjectHandler;
        processBaObject(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<Combobox.BaInterface<T>> | null | undefined): this;
        getBaInterface(): BaInterfaceHandler.BaInterfaceSymbol<Combobox.BaInterface<T>> | null | undefined;
        setBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<Combobox.BaInterface<T>> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
        getBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined;
        /**
         * Setter for the Data attribute.
         * @category Attribute setter and getter
         * @param p The new Data or null.
         * @returns The Combobox.
         */
        setData(p: Components.Combobox.IItem<T>[] | null): this;
        /**
         * Processor for the Data attribute.
         * @category Attribute setter and getter
         */
        protected __processData(): void;
        /**
         * Getter for the Data attribute.
         * @category Attribute setter and getter
         * @returns The Data attribute.
         */
        getData(): Components.Combobox.IItem<T>[] | null | undefined;
        /**
         * Getter for the SelectedData attribute.
         * @category Attribute setter and getter
         * @returns The SelectedData attribute.
         */
        getSelectedData(): Components.Combobox.IItem<T> | null | undefined;
        /**
         * Setter for the SelectedValue attribute.
         * @category Attribute setter and getter
         * @param p The new SelectedValue or null.
         * @returns The Combobox.
         */
        setSelectedValue(p: T | null): this;
        /**
         * Processor for the SelectedValue attribute.
         * @category Attribute setter and getter
         */
        protected __processSelectedValue(): void;
        /**
         * Getter for the SelectedValue.
         * @category Attribute setter and getter
         * @returns The SelectedValue.
         */
        getSelectedValue(): T | null | undefined;
        /**
         * Setter for the SelectedValueFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new SelectedValueFeedback or null.
         * @returns The Combobox.
         */
        setSelectedValueFeedback(p: T | null): this;
        /**
         * Processor for the SelectedValueFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processSelectedValueFeedback(): void;
        /**
         * Getter for the SelectedValueFeedback attribute.
         * @category Attribute setter and getter
         * @returns The SelectedValueFeedback.
         */
        getSelectedValueFeedback(): T | null | undefined;
        /**
         * Setter for the ButtonColor attribute. Background color for the drop down button.
         * @category Attribute setter and getter
         * @param p The new ButtonColor or null.
         * @returns The Combobox.
         */
        setButtonColor(p: SolidColor | null): this;
        /**
         * Processor for the ButtonColor attribute.
         * @category Attribute setter and getter
         */
        protected __processButtonColor(): void;
        /**
         * Getter for the ButtonColor attribute.
         * @category Attribute setter and getter
         * @returns The ButtonColor attribute.
         */
        getButtonColor(): SolidColor | null;
        /**
         * Setter for the ButtonArrowColor attribute.
         * @category Attribute setter and getter
         * @param p The new ButtonArrowColor or null.
         * @returns The Combobox.
         */
        setButtonArrowColor(p: SolidColor | null): this;
        /**
         * Processor for the ButtonArrowColor attribute.
         * @category Attribute setter and getter
         */
        protected __processButtonArrowColor(): void;
        /**
         * Getter for the ButtonArrowColor attribute.
         * @category Attribute setter and getter
         * @returns The ButtonArrowColor attribute.
         */
        getButtonArrowColor(): SolidColor | null;
    }
    namespace Combobox {
        type BaInterface<T> = {
            value: T;
            valueFeedback?: T;
            stateTexts?: string[];
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface<number>>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface<number>>;
    }
}
//# sourceMappingURL=Combobox.d.ts.map