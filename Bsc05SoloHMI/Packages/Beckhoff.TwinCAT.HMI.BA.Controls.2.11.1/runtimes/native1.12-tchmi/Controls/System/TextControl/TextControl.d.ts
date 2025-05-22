declare namespace TcHmi.BuildingAutomation.Controls.System {
    /**
     * The TextControl is the base class for many controls that display a text.
     * @category Hidden control
     */
    class TextControl extends System.BaseControl {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.TextControl;
        protected __attrHandler: AttributeHandler<TextControl.IAttributes>;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Getter for the text element to append it to the root of a derived control.
         * @category Public
         * @returns The HTML element.
         */
        getTextElement(): JQuery;
        setAttributes(attr: TextControl.IAttributes): this;
        getAttributes(): AttributeHandler<TextControl.IAttributes>;
        /**
         * Setter for the TextColor attribute.
         * @category Attribute setter and getter
         * @param p The new TextColor or null.
         * @returns The TextControl.
         */
        setTextColor(p: SolidColor | null | undefined): this;
        /**
         * Processor for the TextColor attribute.
         * @category Attribute setter and getter
         */
        protected __processTextColor(): void;
        /**
         * Getter for the TextColor attribute.
         * @category Attribute setter and getter
         * @returns The TextColor attribute.
         */
        getTextColor(): SolidColor | null;
        /**
         * Setter for the TextHorizontalAlignment attribute.
         * @category Attribute setter and getter
         * @param p The new TextHorizontalAlignment or null.
         * @returns The TextControl.
         */
        setTextHorizontalAlignment(p: HorizontalAlignment | null | undefined): this;
        /**
         * Processor for the TextHorizontalAlignment attribute.
         * @category Attribute setter and getter
         */
        protected __processTextHorizontalAlignment(): void;
        /**
         * Getter for the TextHorizontalAlignment attribute.
         * @category Attribute setter and getter
         * @returns The TextHorizontalAlignment attribute.
         */
        getTextHorizontalAlignment(): HorizontalAlignment | null | undefined;
        /**
         * Setter for the TextVerticalAlignment attribute.
         * @category Attribute setter and getter
         * @param p The new TextVerticalAlignment or null.
         * @returns The TextControl.
         */
        setTextVerticalAlignment(p: VerticalAlignment | null | undefined): this;
        /**
         * Processor for the TextHorizontalAlignment attribute.
         * @category Attribute setter and getter
         */
        protected __processTextVerticalAlignment(): void;
        /**
         * Getter for the TextVerticalAlignment attribute.
         * @category Attribute setter and getter
         * @returns The TextVerticalAlignment attribute.
         */
        getTextVerticalAlignment(): VerticalAlignment | null | undefined;
        /**
         * Setter for the TextFontSize attribute.
         * @category Attribute setter and getter
         * @param p The new TextFontSize or null.
         * @returns The TextControl.
         */
        setTextFontSize(p: number | null | undefined): this;
        /**
         * Processor for the TextFontSize attribute.
         * @category Attribute setter and getter
         */
        protected __processTextFontSize(): void;
        /**
         * Getter for the TextFontSize attribute.
         * @category Attribute setter and getter
         * @returns The TextFontSize attribute.
         */
        getTextFontSize(): number | null | undefined;
        /**
         * Setter for the TextFontSizeUnit attribute.
         * @category Attribute setter and getter
         * @param p The new TextFontSize unit.
         * @returns The TextControl.
         */
        setTextFontSizeUnit(p: DimensionUnit | null | undefined): this;
        /**
         * Getter for TextFontSizeUnit attribute.
         * @category Attribute setter and getter
         * @returns The TextFontSizeUnit attribute.
         */
        getTextFontSizeUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the TextFontWeight attribute.
         * @category Attribute setter and getter
         * @param p The new TextFontWeight or null.
         * @returns The TextControl.
         */
        setTextFontWeight(p: FontWeight | null | undefined): this;
        /**
         * Processor for the TextFontWeight attribute.
         * @category Attribute setter and getter
         */
        protected __processTextFontWeight(): void;
        /**
         * Getter for the TextFontWeight attribute.
         * @category Attribute setter and getter
         * @returns The TextFontWeight attribute.
         */
        getTextFontWeight(): FontWeight | null | undefined;
        /**
         * Setter for the TextFontStyle attribute.
         * @category Attribute setter and getter
         * @param p The new TextFontStyle or null.
         * @returns The TextControl.
         */
        setTextFontStyle(p: FontStyle | null | undefined): this;
        /**
         * Processor for the TextFontStyle attribute.
         * @category Attribute setter and getter
         */
        protected __processTextFontStyle(): void;
        /**
         * Getter for the TextFontStyle attribute.
         * @category Attribute setter and getter
         * @returns The TextFontStyle attribute.
         */
        getTextFontStyle(): FontStyle | null | undefined;
        /**
         * Setter for the TextFontFamily attribute.
         * @category Attribute setter and getter
         * @param p The new TextFontFamily or null.
         * @returns The TextControl.
         */
        setTextFontFamily(p: FontFamily | null | undefined): this;
        /**
         * Processor for the TextFontFamily attribute.
         * @category Attribute setter and getter
         */
        protected __processTextFontFamily(): void;
        /**
         * Getter for TextFontFamily attribute.
         * @category Attribute setter and getter
         * @returns The TextFontFamily attribute.
         */
        getTextFontFamily(): FontFamily | null | undefined;
        /**
         * Setter for the TextDecorationColor attribute.
         * @category Attribute setter and getter
         * @param p The new TextDecorationColor or null.
         * @returns The TextControl.
         */
        setTextDecorationColor(p: SolidColor | null | undefined): this;
        /**
         * Processor for the TextDecorationColor attribute.
         * @category Attribute setter and getter
         */
        protected __processTextDecorationColor(): void;
        /**
         * Getter for the TextDecorationColor attribute.
         * @category Attribute setter and getter
         * @retruns The TextDecorationColor attribute.
         */
        getTextDecorationColor(): SolidColor | null;
        /**
         * Setter for the TextDecorationLine attribute.
         * @category Attribute setter and getter
         * @param p The new TextDecorationLine or null.
         * @returns The TextControl.
         */
        setTextDecorationLine(p: Components.TextHandler.DecorationLine | null | undefined): this;
        /**
         * Processor for the TextDecorationLine attribute.
         * @category Attribute setter and getter
         */
        protected __processTextDecorationLine(): void;
        /**
         * Getter for the TextDecorationLine attribute.
         * @category Attribute setter and getter
         * @returns The TextDecorationLine attribute.
         */
        getTextDecorationLine(): Components.TextHandler.DecorationLine | null | undefined;
        /**
         * Setter for the TextDecorationStyle attribute.
         * @category Attribute setter and getter
         * @param p The new TextDecorationStyle or null.
         * @returns The TextControl.
         */
        setTextDecorationStyle(p: Components.TextHandler.DecorationStyle | null | undefined): this;
        /**
         * Processor for the TextDecorationStyle attribute.
         * @category Attribute setter and getter
         */
        protected __processTextDecorationStyle(): void;
        /**
         * Getter for the TextDecorationStyle attribute.
         * @category Attribute setter and getter
         * @returns The TextDecorationStyle attribute.
         */
        getTextDecorationStyle(): Components.TextHandler.DecorationStyle | null | undefined;
        /**
         * Setter for the UserSelect attribute.
         * @category Attribute setter and getter
         * @param p The new UserSelect or null.
         * @returns The TextControl.
         */
        setUserSelect(p: Components.TextHandler.UserSelect | null | undefined): this;
        /**
         * Processor for the UserSelect attribute.
         * @category Attribute setter and getter
         */
        protected __processUserSelect(): void;
        /**
         * Getter for the UserSelect attribute.
         * @category Attribute setter and getter
         * @returns The UserSelect attribute.
         */
        getUserSelect(): Components.TextHandler.UserSelect | null | undefined;
        /**
         * Setter for the TextOverflow attribute.
         * @category Attribute setter and getter
         * @param p The new TextOverflow or null.
         * @returns The TextControl.
         */
        setTextOverflow(p: Components.TextHandler.Overflow | null | undefined): this;
        /**
         * Processor for the TextOverflow attribute.
         * @category Attribute setter and getter
         */
        protected __processTextOverflow(): void;
        /**
         * Getter for the TextOverflow attribute.
         * @category Attribute setter and getter
         * @returns The TextOverflow attribute.
         */
        getTextOverflow(): Components.TextHandler.Overflow | null | undefined;
        protected __processReadOnly(): void;
    }
    namespace TextControl {
        interface IAttributes extends BaseControl.IAttributes, Components.TextControl.IAttributes {
        }
    }
}
//# sourceMappingURL=TextControl.d.ts.map