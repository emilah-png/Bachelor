declare namespace TcHmi.BuildingAutomation.Controls.Management {
    /**
     * The ProjectNavigationTextual can be used to navigate through a project structure of a device or a BaObject / BA.BaView.
     * It displays the descriptions, object type, value and events of BaObjects.
     * @category Control
     */
    class ProjectNavigationTextual extends System.BaseControl implements BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        baObjectHandler: BaObjectHandler;
        protected __loadBaChildren: boolean;
        protected __loadTexts: boolean;
        /**
         * Defines which text attribute of a BaObject is set as the title.
         * @category Attribute
         */
        private __baUsedTitle;
        /**
         * If true the header is shown.
         * @category Attribute
         */
        private __showHeader;
        /**
         * Defines if entries are automatically collapsed when another entry was selected.
         * @category Attribute
         */
        private __autoCollapse;
        /**
         * Content window.
         * @category Elements
         */
        private __contentWindow;
        /**
         * Search through the project structure descriptions and only show the entries that match.
         * @category Elements
         */
        private __searchField;
        /**
         * Context menu to display options.
         * @category Elements
         */
        private __contextMenu;
        /**
         * Combobox for the BaUsedTitle attribute.
         * @category Elements
         */
        private __comboboxUsedTitle;
        /**
         * Container for the project navigation list of the current view.
         * @category Elements
         */
        private __listContainer;
        /**
         * Dialog for schedule or trend
         * @category Elements
         */
        private __dialog;
        /**
         * The navigation provider for the data of the navigation.
         * @category Internal
         */
        private __navigationProvider;
        /**
         * The root view. Important if the list is not displayed as a nested list.
         * @category Internal
         */
        private __navigation;
        /**
         * Stores the number of BaObject that load there attributes.
         * @category Internal
         */
        private __loadingCnt;
        private __destroyOnEntryOpened;
        private __destroyOnEntryClosed;
        private __destroyOnEntryContentViewButtonPressed;
        private __destroyWatchProjectStructureText;
        /**
         * Handler when an entry was selected.
         * @category Event handler
         */
        private __entrySelectedHandler;
        /**
         * Handler when the toggle button for the event list was toggled.
         * @category Event handler
         */
        private __cbUsedTitleChangedHandler;
        /**
         * Handler when the search field looses the focus.
         * @category Event handler
         */
        private __searchFieldFocusOutHandler;
        /**
         * Handler when a content view button of an entry was pressed.
         * @category Event handler
         */
        private __contentViewButtonPressedHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Callback function for the onObjectSelected event. Fired when an entry with child elements was selected in the list.
         * @category Event callbacks
         * @param entry The selected project navigation list entry.
         */
        private __onObjectSelectedAsync;
        /**
         * Callback function if a character was entered in the search field.
         * @category Event callbacks
         */
        private __onFilterListAsync;
        /**
         * Makes an entry of a ProjetNavigationList selectable if there is a special dialog for it (e.g. Schedule, Heating_Curve)
         * @param obj The ProjectNavigationList which shall be modified.
         */
        private __editEntriesAsync;
        processBaObject(): void;
        /**
         * Close all entries of the project navigation list
         * @category Public
         */
        closeAllEntries(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        /**
         * Setter for the BaUsedTitle attribute. Define which BA text attribute is displayed as the title.
         * @category Attribute setter and getter
         * @param p The new BaUsedTitle or null.
         * @returns The ProjectNavigationTextual.
         */
        setBaUsedTitle(p: string | BA.BaVariable.DescriptionVariables | null | undefined): this;
        /**
         * Processor for the BaUsedTitle attribute.
         * @category Attribute setter and getter
         */
        protected __processBaUsedTitle(): void;
        /**
         * Getter for the BaUsedTitle attribute.
         * @category Attribute setter and getter
         * @returns The BaUsedTitle attribute.
         */
        getBaUsedTitle(): BA.BaVariable.DescriptionVariables | null;
        /**
         * Setter for the ShowHeader attribute.
         * @category Attribute setter and getter
         * @param p The new ShowHeader or null.
         * @returns The ProjectNavigationTextual.
         */
        setShowHeader(p: boolean | null): this;
        /**
         * Processor for the ShowHeader attribute.
         * @category Attribute setter and getter
         */
        protected __processShowHeader(): void;
        /**
         * Getter for the ShowHeader attribute.
         * @category Attribute setter and getter
         * @returns The ShowHeader attribute.
         */
        getShowHeader(): boolean | null;
        /**
         * Setter for the AutoCollapse attribute. Defines if entries are automatically collapsed when another entry was selected.
         * @category Attribute setter and getter
         * @param p The new AutoCollapse or null.
         * @returns The ProjectNavigationTextual.
         */
        setAutoCollapse(p: boolean | null): this;
        /**
         * Processor for the AutoCollapse attribute.
         * @category Attribute setter and getter
         */
        protected __processAutoCollapse(): void;
        /**
         * Getter for the AutoCollapse attribute.
         * @category Attribute setter and getter
         * @returns The AutoCollapse attribute.
         */
        getAutoCollapse(): boolean | null;
        /**
         * Getter for the HeadlineText attribute.
         * @category Attribute setter and getter
         * @returns The HeadlineText attribute.
         */
        getHeadlineText(): string | null | undefined;
    }
    namespace ProjectNavigationTextual {
        /**
         * Defines the default width of the content view dialog.
         * Default is 1000px.
         */
        let DefaultContentViewDialogWidth: number;
    }
}
//# sourceMappingURL=ProjectNavigationTextual.d.ts.map