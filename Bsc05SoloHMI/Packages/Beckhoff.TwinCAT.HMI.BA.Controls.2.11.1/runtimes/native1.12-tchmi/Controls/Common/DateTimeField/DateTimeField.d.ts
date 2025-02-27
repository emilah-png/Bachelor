declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * The DateTimeField can be used to display and edit date and time values.
     * @category Control
    */
    class DateTimeField extends System.TextControl {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.DateTimeField;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Setter for the DateTime attribute.
         * @category Attribute setter and getter
         * @param p The new dateTime or null.
         * @returns The DateTimeField.
         */
        setDateTime(p: Date | BA.IBaDateTime | null | undefined): this;
        /**
         * Processor for the DateTime attribute
         * @category Attribute setter and getter
         */
        protected __processDateTime(): void;
        /**
         * Getter for the DateTime attribute.
         * @category Attribute setter and getter
         * @returns The DateTime attribute.
        */
        getDateTime(): BA.IBaDateTime | null;
    }
}
//# sourceMappingURL=DateTimeField.d.ts.map