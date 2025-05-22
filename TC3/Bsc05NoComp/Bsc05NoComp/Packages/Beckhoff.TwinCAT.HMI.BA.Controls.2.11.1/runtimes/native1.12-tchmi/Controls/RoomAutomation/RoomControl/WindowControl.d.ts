declare namespace TcHmi.BuildingAutomation.Controls.RoomAutomation.RoomControl {
    class WindowControl extends ControlUnit<Window.BaInterface> {
        constructor(id: string, parent?: Components.IBaseNode | null);
        protected __icon: Window.Icon | undefined;
        protected __attrHandler: AttributeHandler<WindowControl.IAttributes>;
        private __positionFeedbackReady;
        /**
         * If true the position will be displayed, otherwise the position feedback may be displayed.
         * @category Internal
         */
        private __useCurrentPosition;
        /**
         * Is true when the value of the brightness was written to the server and the client is now waiting for the result.
         * @category Internal
         */
        private __waitingForPositionFeedback;
        private static __positionDisplayName;
        private static __positionCtrlName;
        private static __positionSwitchName;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        createElement(): void;
        /**
         * Get the corresponding side control for this window control.
         * @category Public
         * @returns The side control for this window control.
         */
        getSideControl(): JQuery<HTMLDivElement>;
        /**
        * Writes a new position value to the plc.
        * @category Public
        * @param newPosition The new brightness to write.
        */
        writePositionToPlc(newPosition: boolean | number | null | undefined): void;
        getIsLocked(): boolean;
        getPriorityIcon(priority: number): Icons.IIconAttributes | null;
        hasManualPriority(): boolean;
        /**
         * Setter for the Position attribute.
         * @category Attribute setter and getter
         * @param p The new Position or null.
         */
        private __processChangedPosition;
        /**
         * Updates the visuals of the control for the current position.
         * @category Internal
         */
        private __updateElements;
        /**
         * Updates the side control depending of the position data type.
         * @category Internal
         */
        private __updateSideControl;
        setAttributes(attr: WindowControl.IAttributes): this;
        getAttributes(): WindowControl.IAttributes;
        protected __processBaInterface(): void;
        /**
         * Setter for the Position attribute.
         * @category Attribute setter and getter
         * @param p The new Position.
         * @returns The SunblindControl.
         */
        setPosition(p: number | boolean | null | undefined): this;
        /**
         * Processor for the Position attribute.
         * @category Attribute setter and getter
         */
        protected __processPosition(): void;
        /**
         * Getter for the Position attribute.
         * @category Attribute setter and getter
         * @returns The Position attribute.
         */
        getPosition(): number | boolean | null | undefined;
        /**
         * Setter for the PositionFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new Position.
         * @returns The SunblindControl.
         */
        setPositionFeedback(p: number | boolean | null | undefined): this;
        /**
         * Processor for the BrightnessFeedback attribute.
         * @category Internal
         */
        protected __processPositionFeedback(): void;
        /**
         * Getter for the PositionFeedback attribute.
         * @category Attribute setter and getter
         * @returns The PositionFeedback attribute.
         */
        getPositionFeedback(): number | boolean | null | undefined;
        /**
         * Setter for the DisplayMode attribute.
         * @category Attribute setter and getter
         * @param p The new DisplayMode or null.
         * @returns The WindowControl.
         */
        setDisplayMode(p: Window.Icon.DisplayMode | null | undefined): this;
        /**
         * Getter for the DisplayMode attribute.
         * @category Attribute setter and getter
         * @returns The DisplayMode attribute.
         */
        getDisplayMode(): Window.Icon.DisplayMode | null | undefined;
        /**
         * Setter for the IconRotation attribute.
         * @category Attribute setter and getter
         * @param p The new IconRotation or null.
         * @returns The WindowControl.
         */
        setIconRotation(p: number | null | undefined): this;
        /**
         * Getter for the IconRotation attribute.
         * @category Attribute setter and getter
         * @returns The IconRotation attribute.
         */
        getIconRotation(): number | null | undefined;
        processBaObject(): void;
    }
    namespace WindowControl {
        interface IAttributes extends Window.IAttributes, ControlUnit.IAttributes {
            positionMapping?: string;
            positionFeedbackMapping?: string;
            modeMapping?: string;
        }
    }
}
//# sourceMappingURL=WindowControl.d.ts.map