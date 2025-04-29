declare namespace TcHmi.BuildingAutomation.Controls.System {
    /**
     * The BaseRoomControl is the base class of all room automation controls.
     * @category Hidden control
     */
    class BaseRoomControl<I extends BaseRoomControl.BaInterface> extends System.TextControl implements BaInterfaceHandler.IUsesBaInterface<I>, BaObjectHandler.IUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        baObjectHandler: BaObjectHandler;
        protected __baFc: Components.Button;
        protected __attrHandler: AttributeHandler<BaseRoomControl.IAttributes>;
        private __priorityLegendIconHandler;
        private __resetManualModeLegendIconHandler;
        protected __iconBadgeHandler: Helper.IconBadges.Handler;
        baInterfaceHandler: BaInterfaceHandler<I>;
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
         * Container for the different control elements.
         * @category Elements
         */
        protected __controlContainerElement: JQuery<HTMLElement>;
        /**
         * Containers for the different control elements.
         * @category Elements
         */
        private __controlContainers;
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
        private __oldZIndex;
        private __transitionendProcessed;
        private static __resetManualButtonName;
        private static __openBaObjectButtonName;
        private static __buttonsContainerName;
        /**
         * Handler when the body was pressed.
         * @category Event handler
         */
        protected __bodyPressedHandler: (ev: JQuery.TriggeredEvent<any, any, any, HTMLElement>) => void;
        /**
         * Handler when the transition for closing the control container has ended.
         * @category Event handler
         */
        protected __closeTransitionEndHandler: () => void;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Event callback when the body was pressed.
         * @category Event callback
         */
        protected __onBodyPressed(ev: JQuery.TriggeredEvent<any, any, any, HTMLElement>): void;
        /**
         * Event callback when the reset manual operation mode button was pressed.
         * @category Event callback
         */
        protected __onResetManualButtonPressed(): void;
        /**
         * Adds a control to the control container drop down.
         * @category Internal
         * @param containerName The control container where the new control will be added to. Control container will be created if none is existing.
         * @param control The control options or the control.
         * @param order The order where the control container will be placed in the drop down.
         */
        protected __addControl<T extends Components.Base>(containerName: string, control: Components.ControlContainer.IControlOptions | Components.Base, order?: number): T;
        /**
         * Adds a control to the control container drop down.
         * @category Internal
         * @param containerName The control container where the new control will be added to. Control container will be created if none is existing.
         * @param controls The controls options or the controls.
         * @param order The order where the control container will be placed in the drop down.
         */
        protected __addControls(containerName: string, controls: (Components.ControlContainer.IControlOptions | Components.Base)[], order?: number): Components.Base[];
        /**
         * Get a specific control from the control container drop down.
         * @category Internal
         * @param containerName The name of the control container.
         * @param controlName The name of the control.
         */
        protected __getControl<T extends Components.Base>(containerName: string, controlName: string): T | undefined;
        /**
         * Get all controls from a container in the control container drop down.
         * @category Internal
         * @param containerName The name of the control container.
         */
        protected __getControls(containerName: string): Components.Base[];
        /**
         * Remove a control from the control container drop down.
         * @category Internal
         * @param containerName The name of the control container.
         * @param control The control which should be removed.
         */
        protected __removeControl(containerName: string, control: Components.Base | string | null | undefined): boolean;
        /**
         * Remove all controls of a control container from the control cotainer drop down.
         * @category Internal
         * @param containerName The name of the control container.
         */
        protected __removeAllControls(containerName: string): boolean;
        /**
         * Updates the height of the control container drop down.
         * @category Internal
         */
        private __updateControlContainerHeight;
        /**
         * Opens the control container drop down.
         * @category Internal
         */
        protected __openControlContainer(): void;
        /**
         * Closes the control container drop down.
         * @category Internal
         */
        protected __closeControlContainer(): void;
        /**
         * Appends a button to the control container drop down to reset the manual mode.
         * @category Internal
         * @param append If true the button will be appended, otherwise it will be detached.
         */
        private __appendResetManualButton;
        protected __processIsControllable(isControllable: boolean): void;
        /**
         * Resets the manual operation mode to automatic operation mode.
         * @category Public
         */
        resetManualToPlc(): void;
        static processBaObject(ctrl: BaObjectHandler.IUsesBaObject, baInterfaceSymNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaseRoomControl.BaInterface> | null, attr: BaseRoomControl.IProcessorAttributes): void;
        static processBaInterface(ctrl: BaseRoomControl<BaseRoomControl.BaInterface> | RoomAutomation.RoomControl.ControlUnit<BaseRoomControl.BaInterface>, attr: BaseRoomControl.IProcessorAttributes): void;
        processBaObject(): void;
        static getIsLocked(attrHandler: AttributeHandler<BaseRoomControl.IAttributes>): boolean;
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
        getPriorityIcon(priority: number): Icons.IIconAttributes | null;
        /**
         * Checks if the priority is the manual priority (manual operation mode.)
         * @category Public
         * @param priority The priority to be checked.
         * @returns True if priority is manual, otherwise false.
         */
        hasManualPriority(): boolean;
        setAttributes(attr: BaseRoomControl.IAttributes): this;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<BaseRoomControl.BaInterface> | null | undefined): this;
        getBaInterface(): Symbol | null | undefined;
        setBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<I> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
        getBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined;
        /**
         * Setter for the Error attribute.
         * @category Attribute setter and getter
         * @param p The new Error attribute or null.
         * @returns The control.
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
        __processIsEnabled(): void;
        protected __processReadOnly(): void;
    }
    namespace BaseRoomControl {
        interface IAttributes extends System.TextControl.IAttributes {
            /** Identifies an error. */
            error?: boolean | null;
            /** The active priority of the control. */
            priority?: number | null;
        }
        interface IProcessorAttributes {
            processError: (error: boolean | null | undefined) => any;
            processPriority: (priority: number | null | undefined) => any;
        }
        type BaInterface = {
            name?: string;
            error?: boolean;
            priority?: number;
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface>;
        let ErrorIcon: Icons.IIconAttributes;
        let MinimumControlRole: BA.Role;
    }
}
//# sourceMappingURL=BaseRoomControl.d.ts.map