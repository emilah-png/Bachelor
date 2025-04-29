declare namespace TcHmi.BuildingAutomation.Controls.RoomAutomation.RoomControl {
    class LightControl extends ControlUnit<Light.BaInterface> {
        constructor(id: string, parent?: Components.IBaseNode | null);
        protected __icon: Light.Icon | undefined;
        protected __attrHandler: AttributeHandler<LightControl.IAttributes>;
        private __brightnessFeedbackReady;
        /**
         * If true the brightness will be displayed, otherwise the brightness feedback may be displayed.
         * @category Internal
         */
        private __useCurrentBrightness;
        /**
         * Is true when the value of the brightness was written to the server and the client is now waiting for the result.
         * @category Internal
         */
        private __waitingForBrightnessFeedback;
        private static __brightnessDisplayName;
        private static __brightnessCtrlName;
        private static __lightSwitchName;
        private static __noControlDisplayName;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        createElement(): void;
        /**
         * Get the corresponding side control for this light control.
         * @category Public
         * @returns The side control for this light control.
         */
        getSideControl(): JQuery<HTMLDivElement>;
        /**
        * Writes a new brightness value to the plc.
        * @category Public
        * @param newBrightness The new brightness to write.
        */
        writeBrightness(newBrightness: boolean | number | null | undefined): void;
        resetManualToPlc(): void;
        getIsLocked(): boolean;
        getPriorityIcon(priority: number): Icons.IIconAttributes | null;
        hasManualPriority(): boolean;
        /**
         * Setter for the Brightness attribute.
         * @category Attribute setter and getter
         * @param p The new Brightness or null.
         */
        private __processChangedBrightness;
        /**
         * Updates the visuals of the control for the current brightness.
         * @category Internal
         */
        private __updateElements;
        /**
         * Updates the side control depending of the brightness data type.
         * @category Internal
         */
        private __updateSideControl;
        setAttributes(attr: LightControl.IAttributes): this;
        getAttributes(): LightControl.IAttributes;
        protected __processBaInterface(): void;
        /**
         * Setter for the Brightness attribute.
         * @category Attribute setter and getter
         * @param p The new Brightness.
         * @returns The LightControl.
         */
        setBrightness(p: number | boolean | null | undefined): this;
        /**
         * Processor for the Brightness attribute.
         * @category Attribute setter and getter
         */
        protected __processBrightness(): void;
        /**
         * Getter for the Brightness attribute.
         * @category Attribute setter and getter
         * @returns The Brightness attribute.
         */
        getBrightness(): number | boolean | null | undefined;
        /**
         * Setter for the BrightnessFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new Brightness.
         * @returns The LightControl.
         */
        setBrightnessFeedback(p: number | boolean | null | undefined): this;
        /**
         * Processor for the BrightnessFeedback attribute.
         * @category Internal
         */
        protected __processBrightnessFeedback(): void;
        /**
         * Getter for the Brightness attribute.
         * @category Attribute setter and getter
         * @returns The Brightness attribute.
         */
        getBrightnessFeedback(): number | boolean | null | undefined;
        setLightColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Getter for the LightColor attribute.
         * @category Attribute setter and getter
         * @returns The LightColor attribute.
         */
        getLightColor(): Color.RGBAColor | null | undefined;
        protected __processReadOnly(): void;
        processBaObject(): void;
    }
    namespace LightControl {
        interface IAttributes extends ControlUnit.IAttributes, Light.IAttributes {
            brightnessMapping?: string;
            brightnessFeedbackMapping?: string;
            modeMapping?: string;
        }
    }
}
//# sourceMappingURL=LightControl.d.ts.map