declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiRecipeSelect extends TcHmi.Controls.System.TcHmiControl {
        #private;
        /**
         * Constructor
         * @param element
         * @param pcElement
         * @param attrs
         */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __serverDomain: string | undefined;
        protected __serverInterval: number | undefined | null;
        protected __serverDomainDestroyWatchCallback: DestroyFunction | null;
        protected __serverDomainIsValid: boolean;
        protected __documentMouseMoveListener: ((event: MouseEvent) => void) | undefined;
        protected __elementTemplateRoot: HTMLElement | null | undefined;
        protected __elementTopMostSelection: HTMLElement | null | undefined;
        protected __elementTopMostSelectionList: HTMLElement | null | undefined;
        protected __elementSelectDiv: HTMLElement | null | undefined;
        protected __elementSelectDivMouseDownListener: ((event: MouseEvent) => void) | null | undefined;
        protected __elementBreadcrumbScrollContainer: HTMLElement | null | undefined;
        protected __elementBreadcrumbScrollContainerMouseDownListener: ((event: MouseEvent) => void) | null | undefined;
        protected __documentMouseUpListener: ((event: MouseEvent) => void) | undefined;
        protected __elementBreadcrumbList: HTMLElement | null | undefined;
        protected __buttonActivate: Beckhoff.TcHmiButton | null | undefined;
        protected __buttonTeach: Beckhoff.TcHmiButton | null | undefined;
        protected __topMostButtonOK: Beckhoff.TcHmiButton | null | undefined;
        protected __topMostButtonCancel: Beckhoff.TcHmiButton | null | undefined;
        protected __destroyButtonActivateOnPressed: DestroyFunction | null | undefined;
        protected __destroyButtonTeachOnPressed: DestroyFunction | null | undefined;
        protected __destroyTopMostButtonOKOnPressed: DestroyFunction | null | undefined;
        protected __destroyTopMostButtonCancelPressed: DestroyFunction | null | undefined;
        protected __currentSelectionFolderTemp: TcHmiRecipeSelect.RecipeItem<Server.RecipeManagement.FolderRecipe> | null;
        protected __currentSelectionRecipeTemp: TcHmiRecipeSelect.RecipeItem<Server.RecipeManagement.Recipe> | null;
        protected __currentSelectionFolder: TcHmiRecipeSelect.RecipeItem<Server.RecipeManagement.FolderRecipe> | null;
        protected __currentSelectionRecipe: TcHmiRecipeSelect.RecipeItem<Server.RecipeManagement.Recipe> | null;
        protected __currentActiveRecipes: string[] | null;
        protected __breadcrumbScrollingMouseDown: boolean;
        protected __topMostLayerOpened: boolean;
        protected __breadcrumbItems: TcHmiRecipeSelect.RecipeItem<TcHmi.Server.RecipeManagement.FolderRecipe>[];
        protected __subscrIdGetSymbolAccess: number | null;
        protected __subscrIdGetActiveRecipes: number | null;
        protected __subscrIdCurrentSelectionFolderRecipes: number | null;
        protected __localizedElements: Map<HTMLElement, {
            key: string;
            parameters?: any[];
        }>;
        protected __localizationReader: Locale.LocalizationReader | undefined;
        protected __destroyLocalizationWatch: DestroyFunction | null;
        protected __hasConfigAccess: boolean;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __previnit(): void;
        /**
         * If raised, all attributes have been set to it's default or dom values.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __init(): void;
        /**
         * Is called by the system after the control instance gets part of the current DOM.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __attach(): void;
        /**
         * Is called by the system after the control instance is no longer part of the current DOM.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __detach(): void;
        /**
         * Destroy the current control instance.
         * Will be called automatically if system destroys control!
         */
        destroy(): void;
        /**
         * Add an element to be localized.
         * @param element The element.
         * @param key The localization key.
         * @param parameters Optional parameters to pass to tchmi_format_string.
         */
        private __addLocalizedElement;
        /**
         * Remove a localized element.
         * @param element The element to remove.
         */
        private __removeLocalizedElement;
        /**
         * Domain Watch Callback
         */
        protected __onServerDomainWatchCallback(): (data: Symbol.IWatchResultObject<TcHmi.Server.Domains.IDomainInfo>) => void;
        /**
         * Sets the current value of attribute ServerDomain.
         * @param valueNew
         */
        setServerDomain(valueNew: string | null): void;
        /**
         * Returns the current value of attribute ServerDomain.
         */
        getServerDomain(): string | undefined;
        /**
         * Processes the current value of attribute ServerDomain.
         */
        protected __processServerDomain(): void;
        /**
         *  Sets the current value of attribute ServerInterval.
         * @param valueNew
         */
        setServerInterval(valueNew: number | null): void;
        /**
         * Returns the current value of attribute ServerInterval.
         */
        getServerInterval(): number | null | undefined;
        /**
         * Processes the current value of attribute ServerInterval.
         */
        protected __processServerInterval(): void;
        /**
         * Returns the path & name of the selected recipe or null if no reicpe is selected.
         */
        getSelectedRecipeFullName(): string | null;
        /**
         * Returns the name of the selected recipe or null if no reicpe is selected.
         */
        getSelectedRecipeName(): string | null;
        /**
         * Returns the path of the selected recipe or null if no reicpe is selected.
         */
        getSelectedRecipePath(): string | null;
        /**
         * Highlights the current selected recipe if its the active recipe or removes the highlighting if not.
         */
        protected __processesActiveRecipe(): void;
        /**
         * Watch symbol access.
         */
        protected __watchSymbolAccess(): void;
        /**
         * Unwatch symbol access.
         */
        protected __unwatchSymbolAccess(): void;
        /**
         * Watch active recipes.
         */
        protected __watchActiveRecipes(): void;
        /**
         * Unwatch active recipes.
         */
        protected __unwatchActiveRecipes(): void;
        /**
         * Watch recipes.
         */
        protected __watchCurrentSelectionFolderRecipes(): void;
        /**
         * Unwatch recipes.
         */
        protected __unwatchCurrentSelectionFolderRecipes(): void;
        /**
         *  Processes the current selection. Display breadcrumb. Update selection div caption. Etc.
         */
        protected __processSelection(): void;
        /**
         * Display TopMost Selection Folder
         * @param folder
         * @param path
         */
        protected __displayTopMostSelectionFolder(folder: TcHmi.Server.RecipeManagement.FolderRecipe, path?: string | undefined): void;
        /**
         * Open TopMost Selection Folder
         * @param path
         */
        protected __openTopMostSelectionFolder(path?: string | undefined): void;
        /**
         * Is raised if TopMost Recipe Item is clicked.
         * @param item
         */
        protected __onTopMostRecipeItemClicked(item: TcHmiRecipeSelect.RecipeItem<Server.RecipeManagement.FolderRecipe | Server.RecipeManagement.Recipe>): (e: MouseEvent) => void;
        /**
         * Is raised if TopMost Recipe Item is clicked.
         * @param item
         */
        protected __onTopMostRecipeItemDoubleClicked(item: TcHmiRecipeSelect.RecipeItem<Server.RecipeManagement.FolderRecipe | Server.RecipeManagement.Recipe>): (e: MouseEvent) => void;
        /**
         * Returns an event handler function.
         */
        protected __onSelectDivMouseDown(): (event: MouseEvent) => void;
        /**
         * Returns an event handler function which is raised if Breadcrumb Item is clicked.
         * @param item
         */
        protected __onBreadcrumbItemClicked(item: TcHmiRecipeSelect.RecipeItem<Server.RecipeManagement.FolderRecipe>): (e: MouseEvent) => void;
        /**
         * Returns an event handler function which is raised on mousedown on the BreadcrumbScrolling container.
         */
        protected __onBreadcrumbScrollingContainerMouseDown(): (event: MouseEvent) => void;
        /**
         * Returns an event handler function which is raised on mouseup on the document.
         */
        protected __onDocumentMouseUp(): (event: MouseEvent) => void;
        /**
         * Returns an event handler function which is raised on mousemove on the document.
         */
        protected __onDocumentMouseMove(): (event: MouseEvent) => void;
        /**
         * Returns an event handler function for the {Id}_TopMostButtonOK onPressed event.
         */
        protected __onTopMostButtonOKPressed(): (e: EventProvider.Event, data: any) => void;
        /**
         * Returns an event handler function for the {Id}_TopMostButtonCancel onPressed event.
         */
        protected __onTopMostButtonCancelPressed(): (e: EventProvider.Event, data: any) => void;
        /**
         * Returns an event handler function for the {Id}__onButtonActive onPressed event.
         */
        protected __onButtonActivePressed(): (e: EventProvider.Event, data: any) => void;
        /**
         * Returns an event handler function  for the {Id}__onButtonTeach onPressed event.
         */
        protected __onButtonTeachPressed(): (e: EventProvider.Event, data: any) => void;
    }
    namespace TcHmiRecipeSelect {
        enum RecipeItemType {
            Invalid = 0,
            Recipe = 1,
            Folder = 2
        }
        /**
         * @template T Type of the payload of the recipe item
         */
        interface RecipeItem<T> {
            type: RecipeItemType;
            path?: string;
            key?: string;
            payload?: T;
            selectionElement?: HTMLElement | null;
            selectionEventListenerClick?: (e: MouseEvent) => void;
            selectionEventListenerDoubleClick?: (e: MouseEvent) => void;
            breadcrumbElement?: HTMLElement | null;
            breadcrumbEventListenerClick?: (e: MouseEvent) => void;
        }
    }
}
//# sourceMappingURL=TcHmiRecipeSelect.d.ts.map