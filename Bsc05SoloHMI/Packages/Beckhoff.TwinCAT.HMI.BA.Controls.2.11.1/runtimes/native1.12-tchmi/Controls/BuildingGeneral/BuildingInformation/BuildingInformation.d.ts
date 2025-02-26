declare namespace TcHmi.BuildingAutomation.Controls.BuildingGeneral {
    /**
     * Control which can display different building information.
     * @category Control
    */
    class BuildingInformation extends Common.Button {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __attrHandler: AttributeHandler<BuildingInformation.IAttributes>;
        private __dialogContent;
        private __dialog;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Callback function for the onObjectTypeButtonClicked event.
         * @category Event callbacks
         * @param ev The event object.
         */
        protected __onPressed(): void;
        private __createIconWithLabel;
        /**
         * Create the content for the dialog.
         * @category Public
         */
        private __createDialogContent;
        /**
         * Updates the count display which indicates if abnormal information are active.
         * @category Internal
         */
        private __updateCountDisplay;
        private static __defaultIconColor;
        static getIconColor(alarm: BuildingInformation.Alarms, state?: boolean | null): Color.RGBAColor;
        static getIcon(alarm: BuildingInformation.Alarms): Icons.IIconData;
        setAttributes(attr: BuildingInformation.IAttributes): this;
        getAttributes(): AttributeHandler<BuildingInformation.IAttributes>;
        /**
         * Setter for the FireAlarm attribute.
         * @category Attribute setter and getter
         * @param p The new FireAlarm or null.
         * @returns The BuildingInformation.
         */
        setFireAlarm(p: boolean | null | undefined): this;
        /**
         * Processor for the FireAlarm attribute.
         * @category Attribute setter and getter
         */
        protected __processFireAlarm(): void;
        /**
         * Getter for the FireAlarm attribute.
         * @category Attribute setter and getter
         * @returns The FireAlarm attribute.
         */
        getFireAlarm(): boolean | null | undefined;
        /**
         * Setter for the BurglarAlarm attribute.
         * @category Attribute setter and getter
         * @param p The new BurglarAlarm or null.
         * @returns The BuildingInformation.
         */
        setBurglarAlarm(p: boolean | null | undefined): this;
        /**
         * Processor for the BurglarAlarm attribute.
         * @category Attribute setter and getter
         */
        protected __processBurglarAlarm(): void;
        /**
         * Getter for the BurglarAlarm attribute.
         * @category Attribute setter and getter
         * @returns The BurglarAlarm attribute.
         */
        getBurglarAlarm(): boolean | null | undefined;
        /**
         * Setter for the IceAlarm attribute.
         * @category Attribute setter and getter
         * @param p The new IceAlarm or null.
         * @returns The BuildingInformation.
         */
        setIceAlarm(p: boolean | null | undefined): this;
        /**
         * Processor for the IceAlarm attribute.
         * @category Attribute setter and getter
         */
        protected __processIceAlarm(): void;
        /**
         * Getter for the IceAlarm attribute.
         * @category Attribute setter and getter
         * @returns The IceAlarm attribute.
         */
        getIceAlarm(): boolean | null | undefined;
        /**
         * Setter for the ThermalAutomatic attribute.
         * @category Attribute setter and getter
         * @param p The new ThermalAutomatic or null.
         * @returns The BuildingInformation.
         */
        setThermalAutomatic(p: boolean | null | undefined): this;
        /**
         * Processor for the ThermalAutomatic attribute.
         * @category Attribute setter and getter
         */
        protected __processThermalAutomatic(): void;
        /**
         * Getter for the ThermalAutomatic attribute.
         * @category Attribute setter and getter
         * @returns The ThermalAutomatic attribute.
         */
        getThermalAutomatic(): boolean | null | undefined;
        /**
         * Setter for the Facades attribute.
         * @category Attribute setter and getter
         * @param p The new Facades or null.
         * @returns The BuildingInformation.
         */
        setFacades(p: BuildingInformation.IFacadeInfo[] | null | undefined): this;
        /**
         * Resolver callback for the Facades attribute.
         * @category Attribute setter and getter
         */
        private __onResolverForFacadesWatchCallback;
        /**
         * Processor for the Facades attribute.
         * @category Attribute setter and getter
         */
        protected __processFacades(): void;
        /**
         * Getter for the Facades attribute.
         * @category Attribute setter and getter
         * @returns The Facades attribute.
         */
        getFacades(): BuildingInformation.IFacadeInfo[] | null | undefined;
        protected __processIcon(): void;
    }
    namespace BuildingInformation {
        interface IAttributes extends System.TextControl.IAttributes {
            /** Flag if the fire alarm is active in the building or not. */
            fireAlarm?: boolean | null;
            /** Flag if the burgler alarm is active in the building or not. */
            burglarAlarm?: boolean | null;
            /** Flag if the ice alarm is active in the building or not. */
            iceAlarm?: boolean | null;
            /** Flag if thermal automatic is active. */
            thermalAutomatic?: boolean | null;
            /** Defines the different facades of the building. */
            facades?: IFacadeInfo[] | null;
        }
        interface IFacadeInfo {
            /** The name of the facade (e.g. west). */
            name?: string | null;
            /** Flag if maintenance is active. */
            maintenance?: boolean | null;
            /** Flag if storm protection is active. */
            stormProtection?: boolean | null;
            /** Flag if sun protection is active. */
            sunProtection?: boolean | null;
        }
        enum Alarms {
            fire = 0,
            burglar = 1,
            ice = 2,
            maintenance = 3,
            storm = 4,
            sun = 5,
            thermal = 6
        }
        enum BuildingInformantionEvents {
            onBuildingInformationChanged = "onBuildingInformationChanged"
        }
        let BuildingInformationInstances: BuildingInformation[] | undefined;
    }
}
//# sourceMappingURL=BuildingInformation.d.ts.map