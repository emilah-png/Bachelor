declare namespace TcHmi.BuildingAutomation.Controls.RoomAutomation.RoomControl {
    class ControlUnit<I extends System.BaseRoomControl.BaInterface> extends Components.TextControl implements BaInterfaceHandler.IUsesBaInterface<I>, BaObjectHandler.IUsesBaObject {
        constructor(id: string, parent?: Components.IBaseNode | null);
        protected __baParent: RoomControl.Control;
        baObjectHandler: BaObjectHandler;
        baInterfaceHandler: BaInterfaceHandler<I>;
        protected __iconBadgeHandler: Helper.IconBadges.Handler;
        /**
         * The icon which visualizes the control unit in the room control (not in the side menu).
         * @category Public
         */
        protected __icon: Components.Button | undefined;
        /**
         * The container where the icon of the control unit will be placed.
         * @category Elements
         */
        protected __iconContainer: JQuery<HTMLDivElement> | undefined;
        /**
         * The container where all the content will be placed.
         * @category Elements
         */
        protected __controlContainer: Components.ControlContainer | undefined;
        /**
         * The side control container for this LightControl.
         * @category Elements
         */
        protected __sideControlContainer: JQuery<HTMLDivElement> | undefined;
        /**
         * The header for the control of this LightControl.
         * @category Elements
         */
        protected __sideControlHeader: Components.ControlContainer | undefined;
        /**
         * The side control for this LightControl.
         * @category Elements
         */
        protected __sideControl: Components.ControlContainer | undefined;
        /**
         * If true a reset symbol is available in the BaObject or BaInterface.
         * @category Internal
         */
        protected __hasResetSymbol: boolean;
        /**
         * Stores the old priority to reset priority displaying.
         * category Internal
         */
        private __oldPriority;
        protected __elementCreated: boolean;
        protected __attrHandler: AttributeHandler<ControlUnit.IAttributes>;
        private __priorityLegendIconHandler;
        private __resetManualModeLegendIconHandler;
        private __subscriptionIds;
        private __propSymbols;
        private static __nameFieldName;
        private static __resetManualButtonName;
        private static __priorityIconName;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Event callback when the reset manual operation mode button was pressed.
         * @category Event callback
         */
        private __onResetManualButtonPressed;
        processBaObject(): void;
        /**
         * Create the HTML representation of the class.
         * @category Public
         */
        createElement(): void;
        /**
         * Get the corresponding side control for this light control.
         * @category Public
         * @returns The side control for this light control.
         */
        getSideControl(): JQuery<HTMLDivElement>;
        /**
         * Resets the manual operation mode to automatic operation mode.
         * @category Public
         */
        resetManualToPlc(): void;
        /**
         * Checks if the control is locked due to errors or priorities.
         * @category Public
         * @returns If the control is locked due to errors or priorities.
         */
        getIsLocked(): boolean;
        /**
         * Get the corresponding icon for a certain priority.
         * @category Public
         * @param priority The priority for which the icon should be returned.
         * @returns The priority icon.
         */
        getPriorityIcon(priority: number | null | undefined): Icons.IIconAttributes | null;
        /**
         * Checks if the priority is the manual priority (manual operation mode.)
         * @category Public
         * @param priority The priority to be checked.
         * @returns True if priority is manual, otherwise false.
         */
        hasManualPriority(): boolean;
        /**
         * Checks if a reset manual symbol is available. Otherwise the control can not be set to automatic mode from HMI side.
         * @category Public
         * @returns True if a reset manual symbol is available, otherwise false.
         */
        hasResetManualSymbol(): boolean;
        /**
         * Handles a property by converting it and calling the corresponding processor.
         * @param propName The name of the property in the options object.
         * @param setter The setter to be called when converting was successfully.
         * @param dataType The possible type / types for the property. If array -> the first successfully conversion wins.
         */
        protected __handleProperty(attributes: ControlUnit.IAttributes, propName: string, setter: (val: any) => any, type: PrimitiveType | PrimitiveType[]): void;
        /**
         * Appends the iconBadgeHandler to the sideControlContainer
         * @param append If true the container will be appended, otherwise false.
         */
        private __appendIconBadgeHandler;
        /**
         * Appends the priority display next to the controls in the side menu.
         * @category Internal
         * @param append If true the display will be appended, otherwise it will be detached.
         */
        private __appendPriorityIcon;
        /**
         * Appends a button to the control container drop down to reset the manual mode.
         * @category Internal
         * @param append If true the button will be appended, otherwise it will be detached.
         */
        private __appendResetManualButton;
        setAttributes(attr: ControlUnit.IAttributes): this;
        getAttributes(): ControlUnit.IAttributes;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<System.BaseRoomControl.BaInterface> | null | undefined): this;
        /**
         * Processor for the BaInterface attribute.
         */
        protected __processBaInterface(): void;
        getBaInterface(): Symbol | null | undefined;
        setBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<I> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
        getBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined;
        /**
         * Setter for the Name attribute.
         * @category Attribute setter and getter
         * @param p The new Name.
         * @returns The ControlUnit.
         */
        setName(p: string | null | undefined): this;
        /**
         * Processor for the Name attribute.
         * @category Attribute setter and getter
         */
        protected __processName(): void;
        /**
         * Getter for the Name attribute.
         * @category Attribute setter and getter
         * @returns The Name attribute.
         */
        getName(): string | null | undefined;
        /**
         * Setter for the Error attribute.
         * @category Attribute setter and getter
         * @param p The new Error.
         * @returns The LightControl.
         */
        setError(p: boolean | null | undefined): this;
        /**
         * Processor for the Error attribute.
         * @category Attribute setter and getter
         */
        protected __processError(): void;
        /**
         * Getter for the Error attribute.
         * @category Attribute setter and getter
         * @returns The Error attribute.
         */
        getError(): boolean | null | undefined;
        /**
         * Setter for the Priority attribute.
         * @category Attribute setter and getter
         * @param p The new Priority.
         * @returns The ControlUnit.
         */
        setPriority(p: number | null | undefined): this;
        /**
         * Processor for the Priority attribute.
         * @category Attribute setter and getter
         */
        protected __processPriority(): void;
        /**
         * Getter for the Priority attribute.
         * @category Attribute setter and getter
         * @returns The Priority attribute.
         */
        getPriority(): number | null | undefined;
    }
    namespace ControlUnit {
        interface IAttributes extends Components.TextControl.IAttributes, System.BaseRoomControl.IAttributes {
            type?: ControlUnitType;
            name?: string | null;
            nameSym?: Symbol<string>;
            resetManualSym?: Symbol<boolean>;
            /** The BaObject for the class. */
            baObject?: BA.BaBasicObject | Symbol | null;
        }
    }
}
//# sourceMappingURL=ControlUnit.d.ts.map