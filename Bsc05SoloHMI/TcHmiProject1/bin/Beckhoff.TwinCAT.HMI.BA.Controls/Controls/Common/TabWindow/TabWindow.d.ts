declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * The TabWindow can be used to switch between different contents by selecting tabs.
     * @category Control
     */
    class TabWindow extends System.BaseControl {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.TabWindow;
        /**
         * The Data for the different tabs.
         * @category Attributes
         */
        private __data;
        /**
         * The position where the tabs are placed. (only top and bottom is supported).
         * @category Attributes
         */
        protected __tabPosition: Position.top | Position.bottom | null;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Adds a new tab to the tab window.
         * @category Public
         * @param id The id of the new tab.
         * @returns The created tab or undefined if a tab with this id already exists.
         */
        addTab(id: string): Components.TabWindow.Tab | undefined;
        /**
         * Removes a tab from the tab window.
         * @category Public
         * @param id The id of the tab.
         * @returns True if the tab was successfully removed and false if not.
         */
        removeTab(id: string): boolean;
        /**
         * Remove all tabs from the tab window.
         * @category Public
         */
        removeAllTabs(): void;
        /**
         * Get a tab with a certain id.
         * @category Public
         * @param id The id of the tab.
         * @returns The tab or undefined if no tab with this id exists.
         */
        getTab(id: string): Components.TabWindow.Tab | undefined;
        /**
         * Get the current selected tab
         * @category Public
         * @returns The current selected tab or undefined if no tab is selected
         */
        getSelectedTab(): Components.TabWindow.Tab | undefined;
        /**
         * Get all created tabs.
         * @category Public
         */
        getTabs(): Map<string, Components.TabWindow.Tab>;
        /**
         * Select a created tab.
         * @param tab The id of the tab or the hab itself.
         * @returns True if the tab was selected successfully and false if not.
         */
        selectTab(tab: string | Components.TabWindow.Tab): boolean;
        /**
         * Setter for the Data attribute.
         * @category Attribute setter and getter
         * @param p The new data or null.
         * @returns The TabWindow.
         */
        setData(p: TabWindow.ITabData[] | null | undefined): this;
        /**
         * Processor for the Data attribute.
         * @category Attribute setter and getter
         */
        protected __processData(): void;
        /**
         * Getter for the Data attribute.
         * @category Attribute setter and getter
         * @returns The data attribute.
         */
        getData(): TabWindow.ITabData[] | null;
        /**
         * Setter for the TabPosition attribute.
         * @category Attribute setter and getter
         * @param p The new TabPosition or null.
         * @returns The TabWindow.
         */
        setTabPosition(p: Position | string | null | undefined): this;
        /**
         * Processor for the TabPosition attribute.
         * @category Attribute setter and getter
         */
        protected __processTabPosition(): void;
        /**
         * Getter for the TabPosition attribute.
         * @category Attribute setter and getter
         * @returns The TabPosition attribute.
         */
        getTabPosition(): Position | null | undefined;
        /**
         * Setter for the TabDistance attribute.
         * @category Attribute setter and getter
         * @param p The new TabDistance or null.
         * @returns The TabWindow.
         */
        setTabDistance(p: number | null | undefined): this;
        /**
         * Processor for the TabDistance attribute.
         * @category Attribute setter and getter
         */
        protected __processTabDistance(): void;
        /**
         * Getter for the TabDistance attribute.
         * @category Attribute setter and getter
         * @returns The TabDistance attribute.
         */
        getTabDistance(): number | null | undefined;
        /**
         * Setter for the TabContainerSize attribute.
         * @category Attribute setter and getter
         * @param p The new TabContainerSize or null.
         * @returns The TabWindow.
         */
        setTabContainerSize(p: number | null | undefined): this;
        /**
         * Processor for the TabContainerSize attribute.
         * @category Attribute setter and getter
         */
        protected __processTabContainerSize(): void;
        /**
         * Getter for the TabContainerSize attribute.
         * @category Attribute setter and getter
         * @returns The TabContainerSize attribute.
         */
        getTabContainerSize(): number | null | undefined;
        /**
         * Setter for the TabSizeAuto attribute.
         * @category Attribute setter and getter
         * @param p The new TabSizeAuto or null.
         * @returns The TabWindow.
         */
        setTabSizeAuto(p: boolean | null | undefined): this;
        /**
         * Processor for the TabSizeAuto attribute.
         * @category Attribute setter and getter
         */
        protected __processTabSizeAuto(): void;
        /**
         * Getter for the TabSizeAuto attribute.
         * @category Attribute setter and getter
         * @returns The TabSizeAuto attribute.
         */
        getTabSizeAuto(): boolean | null | undefined;
        /**
         * Setter for the TabIconPadding attribute.
         * @category Attribute setter and getter
         * @param p The new TabIconPadding or null.
         * @returns The TabWindow.
         */
        setTabIconPadding(p: number | null | undefined): this;
        /**
         * Processor for the TabIconPadding attribute.
         * @category Attribute setter and getter
         */
        protected __processTabIconPadding(): void;
        /**
         * Getter for the TabIconPadding attribute.
         * @category Attribute setter and getter
         * @returns The TabIconPadding attribute.
         */
        getTabIconPadding(): number | null | undefined;
    }
    namespace TabWindow {
        /**
         * Defines the data of a tab.
         * @category TabWindow
         */
        interface ITabData {
            /** The unique ID of the tab. */
            ID: string | null;
            /** The text that will be displayed in the tab. */
            Text?: string | null;
            /** The icon that will be displayed in the tab. */
            Icon?: string | null;
            /** The content that will be displayed when the tab was selected. */
            Content: string | JQuery | null;
            /** Symbol for the text if the text was passed as a symbol. */
            TextSymbol?: Symbol<string>;
        }
        /**
         * Validates the interface 'TabData'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isTabData(p: object | null | undefined): p is ITabData;
    }
}
//# sourceMappingURL=TabWindow.d.ts.map