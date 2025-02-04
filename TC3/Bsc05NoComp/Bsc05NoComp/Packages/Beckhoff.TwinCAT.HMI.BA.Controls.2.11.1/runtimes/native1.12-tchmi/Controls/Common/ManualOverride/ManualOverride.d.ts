declare namespace TcHmi.BuildingAutomation.Controls.Common {
    class ManualOverride extends System.BaseControl implements BaInterfaceHandler.IUsesBaInterface<ManualOverride.BaInterface>, BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.ManualOverride;
        baInterfaceHandler: BaInterfaceHandler<ManualOverride.BaInterface>;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        get baObjectHandler(): BaObjectHandler;
        processBaObject(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<ManualOverride.BaInterface> | null | undefined): this;
        getBaInterface(): BaInterfaceHandler.BaInterfaceSymbol<ManualOverride.BaInterface> | null | undefined;
        setBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<ManualOverride.BaInterface> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
        getBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined;
        /**
         * Setter for the ManualEnable attribute.
         * @category Attribute setter and getter
         * @param p The new ManualEnable or null.
         * @returns The ManualOverride.
         */
        setManualEnable(p: boolean | null | undefined): this;
        /**
         * Processor for the ManualEnable attribute.
         * @category Attribute setter and getter
         */
        protected __processManualEnable(): void;
        /**
         * Getter for the ManualEnable attribute.
         * @category Attribute setter and getter
         * @returns The ManualEnable attribute.
         */
        getManualEnable(): boolean | null | undefined;
        /**
         * Setter for the ManualValue attribute.
         * @category Attribute setter and getter
         * @param p The new ManualValue or null.
         * @returns The ManualOverride.
         */
        setManualValue(p: boolean | number | null | undefined): this;
        /**
         * Processor for the ManualValue attribute.
         * @category Attribute setter and getter
         */
        protected __processManualValue(): void;
        /**
         * Getter for the ManualValue attribute.
         * @category Attribute setter and getter
         * @returns The ManualValue attribute.
         */
        getManualValue(): boolean | number | null | undefined;
        /**
         * Setter for the AutoValue attribute.
         * @category Attribute setter and getter
         * @param p The new AutoValue or null.
         * @returns The ManualOverride.
         */
        setAutoValue(p: boolean | number | null | undefined): this;
        /**
         * Processor for the AutoValue attribute.
         * @category Attribute setter and getter
         */
        protected __processAutoValue(): void;
        /**
         * Getter for the AutoValue attribute.
         * @category Attribute setter and getter
         * @returns The AutoValue attribute.
         */
        getAutoValue(): boolean | number | null | undefined;
        /**
         * Setter for the ActiveText attribute.
         * @category Attribute setter and getter
         * @param p The new ActiveText or null.
         * @returns The ManualOverride.
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
         * Setter for the InactiveText attribute.
         * @category Attribute setter and getter
         * @param p The new InactiveText or null.
         * @returns The ManualOverride.
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
         * Setter for the Unit attribute.
         * @category Attribute setter and getter
         * @param p The new Unit or null.
         * @returns The ManualOverride.
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
         * Setter for the StateTexts attribute.
         * @category Attribute setter and getter
         * @param p The new StateTexts or null.
         * @returns The ManualOverride.
         */
        setStateTexts(p: Components.Combobox.IItem<number>[] | null | undefined): this;
        /**
         * Processor for the StateTexts attribute.
         * @category Attribute setter and getter
         */
        protected __processStateTexts(): void;
        /**
         * Getter for the StateTexts attribute.
         * @category Attribute setter and getter
         * @returns The StateTexts attribute.
         */
        getStateTexts(): Components.Combobox.IItem<number>[] | null | undefined;
    }
    namespace ManualOverride {
        type BaInterface = {
            manualEnable: boolean;
            manualValue?: boolean | number;
            autoValue?: boolean | number;
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface>;
    }
}
//# sourceMappingURL=ManualOverride.d.ts.map