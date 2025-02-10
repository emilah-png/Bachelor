declare namespace TcHmi.BuildingAutomation.Controls.Common {
    class ManualOverrideBinary extends System.BaseControl implements BaInterfaceHandler.IUsesBaInterface<ManualOverrideBinary.BaInterface>, BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.ManualOverrideBinary;
        baInterfaceHandler: BaInterfaceHandler<ManualOverrideBinary.BaInterface>;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        get baObjectHandler(): BaObjectHandler;
        processBaObject(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<ManualOverrideBinary.BaInterface> | null | undefined): this;
        getBaInterface(): BaInterfaceHandler.BaInterfaceSymbol<ManualOverrideBinary.BaInterface> | null | undefined;
        setBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<ManualOverrideBinary.BaInterface> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
        getBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined;
        /**
         * Setter for the ManualEnable attribute.
         * @category Attribute setter and getter
         * @param p The new ManualEnable or null.
         * @returns The ManualOverrideBinary.
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
         * @returns The ManualOverrideBinary.
         */
        setManualValue(p: boolean | null | undefined): this;
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
        getManualValue(): boolean | null | undefined;
        /**
         * Setter for the AutoValue attribute.
         * @category Attribute setter and getter
         * @param p The new AutoValue or null.
         * @returns The ManualOverrideBinary.
         */
        setAutoValue(p: boolean | null | undefined): this;
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
        getAutoValue(): boolean | null | undefined;
    }
    namespace ManualOverrideBinary {
        type BaInterface = {
            manualEnable: boolean;
            manualValue?: boolean;
            autoValue?: boolean;
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface>;
    }
}
//# sourceMappingURL=ManualOverrideBinary.d.ts.map