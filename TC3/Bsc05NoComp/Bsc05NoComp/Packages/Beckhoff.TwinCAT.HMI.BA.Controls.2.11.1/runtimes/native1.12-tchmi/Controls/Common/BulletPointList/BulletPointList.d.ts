declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * A control to display a bullet point list.
     * @category Control
     */
    class BulletPointList extends System.TextControl {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __elementTemplateRoot: JQuery;
        protected __list: JQuery<HTMLUListElement>;
        protected __entries: string[] | undefined | null;
        protected __listStyleType: BulletPointList.ListStyleType | string | undefined | null;
        protected __listStyleImage: string | undefined | null;
        private __localeSymbols;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Get the CSS value for a {@link BulletPointList.ListStyleType}
         * @param type The {@link BulletPointList.ListStyleType} to be converted.
         * @returns The CSS value of the {@link BulletPointList.ListStyleType}.
         */
        protected __getListStyleTypeName(type: BulletPointList.ListStyleType): string;
        /**
         * Setter for the Entries attribute.
         * @category Attribute setter and getter
         * @param p The new Entries or null.
         * @returns The BulletPointList.
         */
        setEntries(p: string[] | null | undefined): this;
        /**
         * Processor for the Entries attribute.
         * @category Attribute setter and getter
         */
        protected __processEntries(): void;
        /**
         * Getter for the Entries attribute.
         * @category Attribute setter and getter
         * @returns The Entries attribute.
         */
        getEntries(): string[] | null | undefined;
        /**
         * Setter for the ListStyleType attribute.
         * @category Attribute setter and getter
         * @param p The new ListStyleType or null.
         * @returns The BulletPointList.
         */
        setListStyleType(p: BulletPointList.ListStyleType | string | null | undefined): this;
        /**
         * Processor for the ListStyleType attribute.
         * @category Attribute setter and getter
         */
        protected __processListStyleType(): void;
        /**
         * Getter for the ListStyleType attribute.
         * @category Attribute setter and getter
         * @returns The ListStyleType attribute.
         */
        getListStyleType(): BulletPointList.ListStyleType | string | null | undefined;
        /**
         * Setter for the ListStyleImage attribute.
         * @category Attribute setter and getter
         * @param p The new ListStyleImage or null.
         * @returns The BulletPointList.
         */
        setListStyleImage(p: string | null | undefined): this;
        /**
         * Processor for the ListStyleImage attribute.
         * @category Attribute setter and getter
         */
        protected __processListStyleImage(): void;
        /**
         * Getter for the ListStyleImage attribute.
         * @category Attribute setter and getter
         * @returns The ListStyleImage attribute.
         */
        getListStyleImage(): string | null | undefined;
        protected __processTextColor(): void;
    }
    namespace BulletPointList {
        enum ListStyleType {
            none = 0,
            disc = 1,
            circle = 2,
            square = 3,
            decimal = 4,
            decimalLeadingZero = 5,
            lowerRoman = 6,
            upperRoman = 7,
            lowerLatin = 8,
            upperLatin = 9
        }
    }
}
//# sourceMappingURL=BulletPointList.d.ts.map