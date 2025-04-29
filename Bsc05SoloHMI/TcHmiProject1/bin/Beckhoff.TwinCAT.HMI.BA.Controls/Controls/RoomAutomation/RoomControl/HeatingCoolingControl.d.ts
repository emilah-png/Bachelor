declare namespace TcHmi.BuildingAutomation.Controls.RoomAutomation.RoomControl {
    class HeatingCoolingControl extends ControlUnit<HeatingCooling.BaInterface> {
        constructor(id: string, parent?: Components.IBaseNode | null);
        /**
         * The HC icon which displays the status of the AC.
         * @category Public
         */
        private __acIcon;
        /**
         * The HC icon which displays the status of the AC in the side menu.
         * @category Public
         */
        private __acIconSideMenu;
        private __zonesOuterContainer;
        private __tempAdjustSlider;
        private __tempAdjustSliderSideMenu;
        protected __attrHandler: AttributeHandler<HeatingCoolingControl.IAttributes>;
        private __oldHeatingActive;
        private __oldCoolingActive;
        private __roomTempAdjustFeedbackReady;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        createElement(): void;
        /**
         * Get the corresponding side control for this hc control.
         * @category Public
         * @returns The side control for this hc control.
         */
        getSideControl(): JQuery<HTMLDivElement>;
        /**
        * Writes a new room temperature adjust value to the PLC.
        * @category Public
        * @param newRoomTempAdjust The new room temperature adjustment to write.
        */
        writeRoomTempAdjust(newRoomTempAdjust: number | null | undefined): void;
        getIsLocked(): boolean;
        getPriorityIcon(priority: number): null;
        hasManualPriority(): boolean;
        showRoomTemperature(): void;
        hideRomTemperature(): void;
        /**
         * Processor for the RoomTempAdjust attribute.
         * @category Attribute setter and getter
         * @param newVal The new RoomTempAdjust or null.
         */
        private __processChangedRoomTempAdjust;
        /**
         * Updates the side control depending of the brightness data type.
         * @category Internal
         */
        private __updateSideControl;
        setAttributes(attr: HeatingCoolingControl.IAttributes): this;
        getAttributes(): HeatingCoolingControl.IAttributes;
        protected __processBaInterface(): void;
        /**
         * Setter for the RoomTemp attribute.
         * @category Attribute setter and getter
         * @param p The new RoomTemp.
         * @returns The HeatingCoolingControl.
         */
        setRoomTemp(p: number | null | undefined): this;
        /**
         * Processor for the RoomTemp attribute.
         * @category Attribute setter and getter
         */
        protected __processRoomTemp(): void;
        /**
         * Getter for the RoomTemp attribute.
         * @category Attribute setter and getter
         * @returns The RoomTemp attribute.
         */
        getRoomTemp(): number | null | undefined;
        /**
         * Setter for the RoomTempAdjust attribute.
         * @category Attribute setter and getter
         * @param p The new RoomTempAdjust.
         * @returns The HeatingCoolingControl.
         */
        setRoomTempAdjust(p: number | null | undefined): this;
        /**
         * Processor for the RoomTempAdjust attribute.
         * @category Attribute setter and getter
         */
        protected __processRoomTempAdjust(): void;
        /**
         * Getter for the RoomTempAdjust attribute.
         * @category Attribute setter and getter
         * @returns The RoomTempAdjust attribute.
         */
        getRoomTempAdjust(): number | null | undefined;
        /**
         * Setter for the RoomTempAdjustFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new RoomTempAdjustFeedback.
         * @returns The HeatingCoolingControl.
         */
        setRoomTempAdjustFeedback(p: number | null | undefined): this;
        /**
         * Processor for the RoomTempAdjustFeedback attribute.
         * @category Internal
         */
        protected __processRoomTempAdjustFeedback(): void;
        /**
         * Getter for the RoomTempAdjustFeedback attribute.
         * @category Attribute setter and getter
         * @returns The RoomTempAdjustFeedback attribute.
         */
        getRoomTempAdjustFeedback(): number | null | undefined;
        /**
         * Setter for the RoomTempAdjustRange attribute.
         * @category Attribute setter and getter
         * @param p The new RoomTempAdjustRange or null.
         * @returns The HeatingCooling
         */
        setRoomTempAdjustRange(p: number | null | undefined): this;
        /**
         * Processor for the RoomTempAdjustRange attribute.
         * @category Internal
         */
        protected __processRoomTempAdjustRange(): void;
        /**
         * Getter for the RoomTempAdjustRange attribute.
         * @category Attribute setter and getter
         * @returns The RoomTempAdjustRange attribute.
         */
        getRoomTempAdjustRange(): number | null | undefined;
        /**
         * Setter for the HeatingSetpoint attribute.
         * @category Attribute setter and getter
         * @param p The new HeatingSetpoint.
         * @returns The HeatingCoolingControl.
         */
        setHeatingSetpoint(p: number | null | undefined): this;
        /**
         * Processor for the HeatingSetpoint attribute.
         * @category Attribute setter and getter
         */
        protected __processHeatingSetpoint(): void;
        /**
         * Getter for the HeatingSetpoint attribute.
         * @category Attribute setter and getter
         * @returns The HeatingSetpoint attribute.
         */
        getHeatingSetpoint(): number | null | undefined;
        /**
         * Setter for the HeatingActive attribute.
         * @category Attribute setter and getter
         * @param p The new HeatingActive.
         * @returns The HeatingCoolingControl.
         */
        setHeatingActive(p: boolean | number | null | undefined): this;
        /**
         * Processor for the HeatingActive attribute.
         * @category Attribute setter and getter
         */
        protected __processHeatingActive(): void;
        /**
         * Getter for the HeatingActive attribute.
         * @category Attribute setter and getter
         * @returns The HeatingActive attribute.
         */
        getHeatingActive(): boolean | number | null | undefined;
        /**
         * Setter for the CoolingSetpoint attribute.
         * @category Attribute setter and getter
         * @param p The new CoolingSetpoint.
         * @returns The HeatingCoolingControl.
         */
        setCoolingSetpoint(p: number | null | undefined): this;
        /**
         * Processor for the CoolingSetpoint attribute.
         * @category Attribute setter and getter
         */
        protected __processCoolingSetpoint(): void;
        /**
         * Getter for the CoolingSetpoint attribute.
         * @category Attribute setter and getter
         * @returns The CoolingSetpoint attribute.
         */
        getCoolingSetpoint(): number | null | undefined;
        /**
         * Setter for the CoolingActive attribute.
         * @category Attribute setter and getter
         * @param p The new CoolingActive.
         * @returns The HeatingCoolingControl.
         */
        setCoolingActive(p: boolean | number | null | undefined): this;
        /**
         * Processor for the CoolingActive attribute.
         * @category Internal
         */
        protected __processCoolingActive(): void;
        /**
         * Getter for the CoolingActive attribute.
         * @category Attribute setter and getter
         * @returns The CoolingActive attribute.
         */
        getCoolingActive(): boolean | number | null | undefined;
        /**
         * Setter for the Unit attribute.
         * @category Attribute setter and getter
         * @param p The new Unit or null.
         * @returns The HeatingCooling
         */
        setUnit(p: string | null | undefined): this;
        /**
         * Processor for the Unit attribute.
         * @category Internal
         */
        protected __processUnit(): void;
        /**
         * Getter for the Unit attribute.
         * @category Attribute setter and getter
         * @returns The Unit attribute.
         */
        getUnit(): string | null | undefined;
        /**
         * Setter for the EnergyLevel attribute.
         * @category Attribute setter and getter
         * @param p The new EnergyLevel or null.
         * @returns The HeatingCooling
         */
        setEnergyLevel(p: HeatingCooling.EnergyLevel | null | undefined): this;
        /**
         * Processor for the EnergyLevel attribute.
         * @category Internal
         */
        protected __processEnergyLevel(): void;
        /**
         * Getter for the EnergyLevel attribute.
         * @category Attribute setter and getter
         * @returns The EnergyLevel attribute.
         */
        getEnergyLevel(): HeatingCooling.EnergyLevel | null | undefined;
        processBaObject(): void;
        protected __processReadOnly(): void;
    }
    namespace HeatingCoolingControl {
        interface IAttributes extends ControlUnit.IAttributes, HeatingCooling.IBaseAttributes {
            roomTempMapping?: string;
            roomTempAdjustMapping?: string;
            roomTempAdjustFeedbackMapping?: string;
            heatingSetpointMapping?: string;
            coolingSetpointMapping?: string;
            heatingActiveMapping?: string;
            coolingActiveMapping?: string;
        }
    }
}
//# sourceMappingURL=HeatingCoolingControl.d.ts.map