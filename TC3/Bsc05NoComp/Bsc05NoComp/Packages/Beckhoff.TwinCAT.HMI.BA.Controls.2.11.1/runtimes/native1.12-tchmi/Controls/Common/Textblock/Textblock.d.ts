declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * A basic textblock to display texts.
     * @category Control
    */
    class Textblock extends System.TextControl implements BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.Textblock;
        get baObjectHandler(): BaObjectHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        /**
         * Setter for the Text attribute.
         * @category Attribute setter and getter
         * @param p The new Text or null.
         * @returns The TextControl.
         */
        setText(p: string | null | undefined): this;
        /**
         * Processor for the Text attribute.
         * @category Attribute setter and getter
         */
        protected __processText(): void;
        /**
         * Getter for the Text attribute.
         * @category Attribute setter and getter
         * @returns The Text attribute.
         */
        getText(): string | null | undefined;
        /**
         * Setter for the Digits attribute.
         * @category Attribute setter and getter
         * @param p The new Digits or null.
         * @returns The Textblock.
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
        processBaObject(): void;
    }
}
//# sourceMappingURL=Textblock.d.ts.map