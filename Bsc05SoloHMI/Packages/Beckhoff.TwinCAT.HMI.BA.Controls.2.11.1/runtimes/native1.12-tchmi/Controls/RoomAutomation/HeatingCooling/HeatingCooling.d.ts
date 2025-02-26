declare namespace TcHmi.BuildingAutomation.Controls.RoomAutomation {
    /**
     * A control to display and control heating and cooling application in a room.
     * @category Control
     */
    class HeatingCooling extends System.BaseRoomControl<HeatingCooling.BaInterface> implements BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: HeatingCooling.Icon;
        protected __attrHandler: AttributeHandler<HeatingCooling.IAttributes>;
        /**
         * The slider to control the room temperature adjustment.
         * @cateogry Elements
         */
        private __tempAdjustSlider;
        /**
         * IReadyFunction to reset the busy invoking after changing the room temperature adjustment.
         * @category Internal
         */
        private __tempAdjustFeedbackReady;
        private static __controlContainerName;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Processes the room temperature adjustment if a new room temperature adjustment was set through the control.
         * @category Internal
         * @param newTempAdjust The value of the new room temperature adjustment.
         */
        private __processChangedRoomTempAdjust;
        /**
         * Updates the temperature displays of the control.
         * @category Internal
         */
        private __updateDisplay;
        static processBaObject(ctrl: BaObjectHandler.IUsesBaObject, baInterfaceSymNames: BaInterfaceHandler.BaInterfaceSymbolNames<HeatingCooling.BaInterface> | null, attr: HeatingCooling.IProcessorAttributes): void;
        /**
         * Writes a new room temperature adjustment value to the PLC.
         * @category Public
         * @param newRoomTempAdjust The new room temperature adjustment to write.
         */
        static writeRoomTempAdjustToPlc(newRoomTempAdjust: number | null | undefined, target: BA.BaObject<HeatingCooling.BaInterface> | BaInterfaceHandler<HeatingCooling.BaInterface>): void;
        /**
         * Writes a new room temperature adjustment value to the PLC.
         * @category Public
         * @param newRoomTempAdjust The new room temperature adjustment to write.
         */
        writeRoomTempAdjustToPlc(newRoomTempAdjust: number | null): void;
        /**
         * Get the converted text with the current temperature and the current setpoint.
         * @category Public
         * @returns The converted text with the current temperature and the current setpoint.
         */
        static getTemperatureText(attr: HeatingCooling.IBaseAttributes, currentSetpoint: HeatingCooling.CurrentSetpoint): string;
        /**
         * Get the converted text with the current temperature and the current setpoint.
         * @category Public
         * @returns The converted text with the current temperature and the current setpoint.
         */
        getTemperatureText(): string;
        getIsLocked(): boolean;
        getPriorityIcon(priority: number): null;
        hasManualPriority(): boolean;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setAttributes(attr: HeatingCooling.IAttributes): this;
        getAttributes(): AttributeHandler<HeatingCooling.IAttributes>;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<HeatingCooling.BaInterface> | null | undefined): this;
        /**
         * Setter for the RoomTemp attribute.
         * @category Attribute setter and getter
         * @param p The new RoomTemp or null.
         * @returns The HeatingCooling
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
         * @param p The new RoomTempAdjust or null.
         * @returns The HeatingCooling
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
        getTemperatureAdjust(): number | null | undefined;
        /**
         * Setter for the RoomTempAdjustFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new RoomTempAdjustFeedback or null.
         * @returns The HeatingCooling.
         */
        setRoomTempAdjustFeedback(p: number | null | undefined): this;
        /**
         * Processor for the RoomTempAdjustFeedback attribute.
         * @category Attribute setter and getter
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
         * @category Attribute setter and getter
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
         * @param p The new HeatingSetpoint or null.
         * @returns The HeatingCooling
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
         * Setter for the CoolingSetpoint attribute.
         * @category Attribute setter and getter
         * @param p The new CoolingSetpoint or null.
         * @returns The HeatingCooling
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
         * Setter for the HeatingActive attribute.
         * @category Attribute setter and getter
         * @param p The new HeatingActive or null.
         * @returns The HeatingCooling
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
         * Setter for the CoolingActive attribute.
         * @category Attribute setter and getter
         * @param p The new CoolingActive or null.
         * @returns The HeatingCooling
         */
        setCoolingActive(p: boolean | number | null | undefined): this;
        /**
         * Processor for the CoolingActive attribute.
         * @category Attribute setter and getter
         */
        protected __processCoolingActive(): void;
        /**
         * Getter for the CoolingActive attribute.
         * @category Attribute setter and getter
         * @returns The CoolingActive attribute.
         */
        getCoolingActive(): boolean | number | null | undefined;
        /**
         * Setter for the ShowTemperatures attribute.
         * @category Attribute setter and getter
         * @param p The new ShowTemperatures or null.
         * @returns The HeatingCooling.
         */
        setShowTemperatures(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowTemperatures attribute.
         * @category Attribute setter and getter
         */
        protected __processShowTemperatures(): void;
        /**
         * Getter for the ShowTemperatures attribute.
         * @category Attribute setter and getter
         * @returns The ShowTemperatures attribute.
         */
        getShowTemperatures(): boolean | null | undefined;
        /**
         * Setter for the Unit attribute.
         * @category Attribute setter and getter
         * @param p The new Unit or null.
         * @returns The HeatingCooling.
         */
        setUnit(p: string | null | undefined): this;
        /**
         * Processor for the Unit attribute.
         * @category Attribute setter and getter
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
         * @returns The HeatingCooling.
         */
        setEnergyLevel(p: HeatingCooling.EnergyLevel | null | undefined): this;
        /**
         * Processor for the EnergyLevel attribute.
         * @category Attribute setter and getter
         */
        protected __processEnergyLevel(): void;
        /**
         * Getter for the EnergyLevel attribute.
         * @category Attribute setter and getter
         * @returns The EnergyLevel attribute.
         */
        getEnergyLevel(): HeatingCooling.EnergyLevel | null | undefined;
        processBaObject(): void;
        static processBaInterface(ctrl: HeatingCooling | RoomControl.HeatingCoolingControl, attr: HeatingCooling.IProcessorAttributes): void;
    }
    namespace HeatingCooling {
        interface IGeneralAttributes {
            /** The range of the temperature adjustment in Kelvin. */
            roomTempAdjustRange?: number | null;
            /** Temperature unit. */
            unit?: string | null;
        }
        interface IBaseAttributes extends IGeneralAttributes {
            /** The temperature.*/
            roomTemp?: number | null;
            /** The temperature adjustment. */
            roomTempAdjust?: number | null;
            /** The feedback for the temperature adjustment. */
            roomTempAdjustFeedback?: number | null;
            /** The heating setpoint. */
            heatingSetpoint?: number | null;
            /** The cooling setpoint. */
            coolingSetpoint?: number | null;
            /** Identifies if heating is active or not. */
            heatingActive?: boolean | number | null;
            /** Identifies if cooling is active or not. */
            coolingActive?: boolean | number | null;
            /** The energy level. */
            energyLevel?: EnergyLevel | null;
        }
        interface IAttributes extends System.BaseRoomControl.IAttributes, IBaseAttributes {
            /** Defines if the current temperature and the current active setpoint is displayed or not. */
            showTemperatures?: boolean | null;
        }
        enum CurrentSetpoint {
            invalid = 0,
            heating = 1,
            cooling = 2
        }
        enum EnergyLevel {
            invalid = 0,
            protection = 1,
            economy = 2,
            preComfort = 3,
            comfort = 4
        }
        type BaInterface = System.BaseRoomControl.BaInterface & {
            roomTemp: number;
            roomTempAdjust: number;
            roomTempAdjustRange?: number;
            heatingSetpoint: number;
            heatingActive: boolean | number;
            coolingSetpoint: number;
            coolingActive: boolean | number;
            energyLevel?: number;
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface>;
        interface IProcessorAttributes extends System.BaseRoomControl.IProcessorAttributes {
            processRoomTemp: (roomTemp: number | null | undefined) => any;
            processRoomTempAdjust: (roomTempAdjust: number | null | undefined) => any;
            processRoomTempAdjustFeedback: (roomTempAdjustFeedback: number | null | undefined) => any;
            processRoomTempAdjustReadOnly: (readOnly: boolean) => any;
            processRoomTempAdjustRange: (roomTempAdjustRange: number | null | undefined) => any;
            processHeatingSetpoint: (heatingSp: number | null | undefined) => any;
            processHeatingActive: (heatingActive: boolean | number | null | undefined) => any;
            processCoolingSetpoint: (coolingSp: number | null | undefined) => any;
            processCoolingActive: (coolingActive: boolean | number | null | undefined) => any;
            processEnergyLevel: (energyLevel: EnergyLevel | null | undefined) => any;
        }
        /**
         * Icon that displays the ac state of a room.
        */
        class Icon extends Components.Button {
            constructor(id: string, parent?: Components.IBaseNode | null);
            currentSetpoint: HeatingCooling.CurrentSetpoint;
            protected __attrHandler: AttributeHandler<Icon.IAttributes>;
            __attach(): void;
            __detach(): void;
            destroy(): void;
            /**
             * Updates the visuals of the control.
             * @category Internal
             */
            private __updateElements;
            setAttributes(attr: Icon.IAttributes): this;
            getAttributes(): Icon.IAttributes;
            /**
             * Setter for the HeatingActive attribute.
             * @category Attribute setter and getter
             * @param p The new HeatingActive or null.
             * @returns The Icon
             */
            setHeatingActive(p: boolean | null | undefined): this;
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
            getHeatingActive(): boolean | null | undefined;
            /**
             * Setter for the CoolingActive attribute.
             * @category Attribute setter and getter
             * @param p The new CoolingActive or null.
             * @returns The Icon
             */
            setCoolingActive(p: boolean | null | undefined): this;
            /**
             * Processor for the CoolingActive attribute.
             * @category Attribute setter and getter
             */
            protected __processCoolingActive(): void;
            /**
             * Getter for the CoolingActive attribute.
             * @category Attribute setter and getter
             * @returns The CoolingActive attribute.
             */
            getCoolingActive(): boolean | null | undefined;
            protected __processReadOnly(): void;
            protected __updateLegendIcon(): void;
        }
        namespace Icon {
            interface IAttributes extends Components.Button.IAttributes {
                heatingActive?: boolean | null;
                coolingActive?: boolean | null;
            }
        }
        class TemperatureAdjustSlider extends Components.Base {
            constructor(id: string, parent?: Components.IBaseNode | null);
            protected __attrHandler: AttributeHandler<TemperatureAdjustSlider.IAttributes>;
            private __coolingZoneDisplay;
            private __neutralZoneDisplay;
            private __tempAdjustDisplay;
            private __heatingZoneDisplay;
            private __miniumTempDisplay;
            private __maxiumTempDisplay;
            private __tempCursor;
            private __tempCursorDisplay;
            private __isDragging;
            private __isMouseover;
            private __originalPosInBtn;
            private __internalCoolingSetpoint;
            private __internalHeatingSetpoint;
            private __offset;
            private __roomTempAdjust;
            private __mouseoverHandler;
            private __pointerdownHandler;
            __attach(): void;
            __detach(): void;
            destroy(): void;
            /**
             * Callback for the mouseover event.
             * @category Event callbacks
             */
            private __onMouseoverHandler;
            /**
             * Callback for the pointerdown event on a zone.
             * @category Event callbacks
             */
            private __onZonePointerDown;
            /**
             * Callback for the pointerdown event on the neutral zone.
             * @category Event callbacks
             */
            private __onNeutralZonePointerDown;
            /**
             * Callback for the mousemove/touchmove event on the neutral zone.
             * @category Event callbacks
             */
            private __onNeutralZoneMoved;
            /**
             * Shows the minimun, maximum and current temperature.
             * @category Public
             */
            showDisplays(): void;
            /**
             * Hides the minimun, maximum and current temperature.
             * @category Public
             */
            hideDisplays(): void;
            private __updateZones;
            setAttributes(attr: TemperatureAdjustSlider.IAttributes): this;
            getAttributes(): TemperatureAdjustSlider.IAttributes;
            /**
             * Setter for the RoomTemp attribute.
             * @category Attribute setter and getter
             * @param p The new RoomTemp.
             * @returns The TemperatureAdjustSlider.
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
             * @returns The TemperatureAdjustSlider.
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
             * Setter for the RoomTempAdjustRange attribute.
             * @category Attribute setter and getter
             * @param p The new RoomTempAdjustRange or null.
             * @returns The TemperatureAdjustSlider.
             */
            setRoomTempAdjustRange(p: number | null | undefined): this;
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
             * @returns The TemperatureAdjustSlider.
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
             * @returns The TemperatureAdjustSlider.
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
             * @returns The TemperatureAdjustSlider.
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
             * @returns The TemperatureAdjustSlider.
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
             * @returns The TemperatureAdjustSlider.
             */
            setUnit(p: string | null | undefined): this;
            /**
             * Getter for the Unit attribute.
             * @category Attribute setter and getter
             * @returns The Unit attribute.
             */
            getUnit(): string | null | undefined;
            protected __processReadOnly(): void;
        }
        namespace TemperatureAdjustSlider {
            interface IAttributes extends Components.Base.IAttributes, Omit<HeatingCooling.IBaseAttributes, 'temperatureAdjustFeedback, tempAdjustReadOnly'> {
            }
            enum TimeAdjustSliderEvents {
                onUserInteractionFinished = "onTemperatureAdjustSliderUserInteractionFinished",
                onShowDisplays = "onTemperatureAdjustSliderShowDisplays",
                onHideDisplays = "onTemperatureAdjustSliderHideDisplays"
            }
            let MinimumRoomTemperature: number;
            let MaximumRoomTemperature: number;
            let RoomTemperatureAdjustStep: number;
            let DisplayRoomTemperatureRole: BA.Role;
            let DisplayRoomTemperatureLimitsRole: BA.Role;
            let DisplayControllerOutputRole: BA.Role;
            let DisplayRoomTemperatureAdjustRole: BA.Role;
            let EditLevel: BA.Role;
        }
    }
}
//# sourceMappingURL=HeatingCooling.d.ts.map