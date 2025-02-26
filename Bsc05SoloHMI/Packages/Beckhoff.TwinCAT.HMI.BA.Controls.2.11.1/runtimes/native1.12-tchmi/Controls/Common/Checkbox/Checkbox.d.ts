declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * The checkbox can be used to display and edit a binary value. It consist of a checkbox input and a label.
     * @category Control
    */
    class Checkbox extends System.TextControl implements BaInterfaceHandler.IUsesBaInterface<Checkbox.BaInterface>, BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.Checkbox;
        baInterfaceHandler: BaInterfaceHandler<Checkbox.BaInterface>;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        get baObjectHandler(): BaObjectHandler;
        processBaObject(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<Checkbox.BaInterface> | null | undefined): this;
        getBaInterface(): BaInterfaceHandler.BaInterfaceSymbol<Checkbox.BaInterface> | null | undefined;
        setBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<Checkbox.BaInterface> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
        getBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined;
        /**
         * Setter for the State attribute.
         * @category Attribute setter and getter
         * @param p The new State or null.
         * @returns The Checkbox.
         */
        setState(p: boolean | null | undefined): this;
        /**
         * Processor for the State attribute.
         * @category Attribute setter and getter
         */
        protected __processState(): void;
        /**
         * Getter for the State attribute.
         * @category Attribute setter and getter
         * @returns The State attribute.
         */
        getState(): boolean | null | undefined;
        /**
         * Setter for the StateFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new StateFeedback or null.
         * @returns The Checkbox.
         */
        setStateFeedback(p: boolean | null): this;
        /**
         * Processor for the StateFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processStateFeedback(): void;
        /**
         * Getter for the StateFeedback attribute.
         * @category Attribute setter and getter
         * @returns The StateFeedback attribute.
         */
        getStateFeedback(): boolean | null | undefined;
        /**
         * Setter for the ActiveText attribute. Text will be shown in the label when the state is true.
         * @category Attribute setter and getter
         * @param p The new ActiveText or null.
         * @returns The Checkbox.
         */
        setActiveText(p: string | null): this;
        /**
         * Processor for the ActiveText attribute.
         * @category Attribute setter and getter
         */
        protected __processActiveText(): void;
        /**
         * Getter for the ActiveText attribute.
         * @category Attribute setter and getter
         * @returns The ActiveText attribute.
         */
        getActiveText(): string | null | undefined;
        /**
         * Setter for the InactiveText attribute. Text will be shown in the label when the state is false.
         * @category Attribute setter and getter
         * @param p The new InactiveText or null.
         * @returns The Checkbox.
         */
        setInactiveText(p: string | null): this;
        /**
         * Processor for the InactiveText attribute.
         * @category Attribute setter and getter
         */
        protected __processInactiveText(): void;
        /**
         * Getter for the InactiveText attribute.
         * @category Attribute setter and getter
         * @returns The InactiveText attribute.
         */
        getInactiveText(): string | null | undefined;
        /**
         * Setter for the CheckedBackgroundColor attribute.
         * @category Attribute setter and getter
         * @param p The new CheckedBackgroundColor or null.
         * @returns The Checkbox.
         */
        setCheckedBackgroundColor(p: SolidColor | null): this;
        /**
         * Processor for the CheckedBackgroundColor attribute.
         * @category Attribute setter and getter
         */
        protected __processCheckedBackgroundColor(): void;
        /**
         * Getter for the CheckedBackgroundColor attribute.
         * @category Attribute setter and getter
         * @returns The CheckedBackgroundColor attribute.
         */
        getCheckedBackgroundColor(): SolidColor | null;
        /**
         * Setter for the CheckmarkColor attribute.
         * @category Attribute setter and getter
         * @param p The new CheckmarkColor or null.
         * @returns The Checkbox.
         */
        setCheckmarkColor(p: SolidColor | null): this;
        /**
         * Processor for the CheckmarkColor attribute.
         * @category Attribute setter and getter
         */
        protected __processCheckmarkColor(): void;
        /**
         * Getter for the CheckmarkColor attribute.
         * @category Attribute setter and getter
         * @returns The CheckmarkColor attribute.
         */
        getCheckmarkColor(): SolidColor | null;
        setAppearance(p: Components.Checkbox.Appearance | null | undefined): this;
        /**
         * Processor for the Appearance attribute.
         * @category Attribute setter and getter
         */
        protected __processAppearance(): void;
        /**
         * Getter for the Appearance attribute.
         * @category Attribute setter and getter
         * @returns The Appearance attribute.
         */
        getAppearance(): Components.Checkbox.Appearance | null | undefined;
    }
    namespace Checkbox {
        type BaInterface = {
            state: boolean;
            stateFeedback?: boolean;
            activeText?: string;
            inactiveText?: string;
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface>;
    }
}
//# sourceMappingURL=Checkbox.d.ts.map