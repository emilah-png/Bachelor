declare namespace TcHmi.BuildingAutomation.Controls.System {
    /**
     * The BaseControl is the base class for many BA controls.
     * @category Hidden control
    */
    class BaseControl extends TcHmi.Controls.System.TcHmiControl implements Components.Base.IBase, Logger.ILogger {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /**
         * TcHmi parent of the class. TcHmi controls of this control will be childs of this parent control.
         * @category Children
         */
        protected __baParent: Components.IBaseNode | null | undefined;
        /**
         * The corresponding class object from TcHmiBaFramework.
         * @category TcHmiBaFramework
         */
        protected __baFc: Components.Base;
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
        busyHandler: BusyHandler;
        logger: Logger;
        eventHandler: EventHandler<this>;
        childrenHandler: Components.BaseNode.ChildrenHandler;
        errorIndicator: Components.ErrorIndicator;
        /**
         * Event destroy functions which will be called when the control is detached.
         * @category Internal
         */
        protected __destroyersToCallOnDetach: DestroyFunction[];
        /**
         * Event destroy functions which will be called when the control is destroyed.
         * @category Internal
         */
        protected __destroyersToCallOnDestroy: DestroyFunction[];
        /**
         * Attributes for the background styler
         * @category Internal
         */
        protected __attrHandler: AttributeHandler<BaseControl.IAttributes>;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Sets the BA parent for this control.
         * @category Public
         * @param parent The parent of the control.
         */
        setBaParent(parent?: Components.IBaseNode | null): void;
        getBaParent(): Components.IBaseNode | null | undefined;
        /**
         * Sets the css display property of the root element to 'none'.
         * @category Public
         */
        hide(): BaseControl;
        /**
         * Resets the css display property of the root element.
         * @category Public
         */
        show(): BaseControl;
        /**
         * Gets the next attached parent of this instance.
         * @category Internal
         * @returns The next attached parent or null if no attached parent was found.
         */
        private __getNextAttachedParent;
        /**
         * Set all attributes of the BackgroundStyler.
         * @category Attributes
         * @param attr The new attributes for the BackgroundStyler.
         * @returns The BaseNode.
         */
        setAttributes(attr: BaseControl.IAttributes): this;
        /**
         * Getter for the current attributes.
         * @category Attributes
         * @returns The current attributes.
         */
        getAttributes(): BaseControl.IAttributes;
        /**
         * Setter for the ReadOnly attribute.
         * @category Attribute setter and getter
         * @param p The new ReadOnly attribute or null.
         * @returns The control.
         */
        setReadOnly(p: boolean | null | undefined): this;
        /**
         * Processor for the ReadOnly attribute.
         * @category Attribute setter and getter
         */
        protected __processReadOnly(): void;
        /**
         * Getter for the ReadOnly attribute.
         * @category Attribute setter and getter
         * @returns The ReadOnly attribute.
         */
        getReadOnly(): boolean | null | undefined;
        /**
         * Setter for the new ContentPadding attribute.
         * @param p The new ContentPadding Attribute (top, right, bottom, left) or null.
         * @category Attribute setter and getter
         * @returns The control.
         */
        setContentPadding(p: FourSidedCss | number | null | undefined): this;
        /**
         * Processor for the ContentPadding attribute.
         * @category Attribute setter and getter
         */
        protected __processContentPadding(): void;
        /**
         * Getter for the ContentPadding attribute.
         * @category Attribute setter and getter
         * @returns The ContentPadding attribute.
         */
        getContentPadding(): FourSidedCss | number | null | undefined;
        protected __processAllBackground(): void;
        protected __processBorderRadius(): void;
    }
    namespace BaseControl {
        interface IAttributes extends Components.Base.IAttributes {
        }
    }
}
//# sourceMappingURL=BaseControl.d.ts.map