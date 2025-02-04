declare namespace TcHmi.BuildingAutomation.Controls.System {
    /**
     * The BaseTemplate is the base class of all template (plants) controls.
     * @category Hidden control
    */
    class BaseTemplate<T extends BA.BaView.BaTemplateStructure> extends TcHmi.Controls.System.TcHmiControl implements Components.Base.IBase, Components.ResizeHandler.IOnResized, Logger.ILogger, BA.IBaTemplateHandler<T>, BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /**
         * Overwrite in derived class to set the default template description that will be used for this control.
         * @category BA
         */
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<T> | undefined;
        baTemplateHandler: BA.BaTemplateHandler<T>;
        /**
         * Overwrite in derived class to load all children when a BaObject (as an BaView) was set.
         * @category BA
         */
        protected __loadBaChildren: boolean;
        /**
         * Overwrite in derived class to load all texts when a BaObject (as an BaView) was set.
         * @category BA
         */
        protected __loadTexts: boolean;
        /**
         * TcHmi parent of the class. TcHmi controls of this control will be childs of this parent control.
         * @category Children
         */
        protected __baParent: Components.IBaseNode | null | undefined;
        protected __attrHandler: AttributeHandler<BaseTemplate.IAttributes>;
        /** @ignore
         * Collection of language watch ids for static text.
         * @category Internal
         */
        protected __lwiStatic: DestroyFunction[];
        /** @ignore
        * Localized strings for DialogWindow headline.
        * @category Internal
        */
        private __strHeader;
        private __langKeys;
        baObjectHandler: BaObjectHandler;
        resizeHandler: Components.ResizeHandler;
        logger: Logger;
        eventHandler: EventHandler<this>;
        busyHandler: BusyHandler;
        childrenHandler: Components.BaseNode.ChildrenHandler;
        errorIndicator: Components.ErrorIndicator;
        __previnit(): void;
        destroy(): void;
        onResized(): void;
        processBaObject(): void;
        /**
         * Sets the BA parent for this control.
         * @category Public
         * @param parent The parent of the control.
         */
        setBaParent(parent?: Components.IBaseNode | null): void;
        getBaParent(): Components.IBaseNode | null | undefined;
        log(severity: Logger.Severity, logOutput: BaseTemplate.LogOutput, langKey: Locale.LangKey, ...args: any[]): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setBaTemplateDescription(p: BA.BaTemplateDescriptionDesigner | null | undefined): this;
        getBaTemplateDescription(): BA.BaView.BaTemplateDescription<any> | null | undefined;
        /**
         * Setter for the ShowTags attribute.
         * @category Attribute setter and getter
         * @param p The new ShowTags or null.
         * @returns The UiIcon.
         */
        setShowTags(p: boolean | null): this;
        /**
         * Processor for the ShowTags attribute.
         * @category Attribute setter and getter
         */
        protected __processShowTags(): void;
        /**
         * Getter for the ShowTag attribute.
         * @category Attribute setter and getter
         * @returns The ShowTag attribute.
         */
        getShowTags(): boolean | null | undefined;
    }
    namespace BaseTemplate {
        interface IAttributes {
            /** Defines if the tags will be displayed or not. */
            showTags?: boolean | null;
        }
        enum LogOutput {
            console = 1,
            dialog = 2
        }
    }
}
//# sourceMappingURL=BaseTemplate.d.ts.map