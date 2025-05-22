declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * The color picker can be used to pick a color in different formats.
     * @category Control
    */
    class ColorPicker extends TcHmi.Controls.System.TcHmiControl implements Components.ResizeHandler.IOnResized {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        resizeHandler: Components.ResizeHandler;
        /**
         * Selected solid color (TcHmiColor)
         * @category Attribute
         */
        private __selectedSolidColor;
        /**
         * Select color in RGBA format.
         * @category Attribute
         */
        private __selectedRgbaColor;
        /**
         * Type of the color plate.
         * @category Attribute
         */
        private __plateType;
        /**
         * Thickness of the color ring in hslRing mode.
         * @category Internal
         */
        private __hslRingThickness;
        /**
         * Last position of the cursor.
         * @category Internal
         */
        private __lastPos;
        /**
         * Outer height of the control.
         * @category Internal
         */
        private __outerHeight;
        /**
         * Outer width of the control.
         * @category Internal
         */
        private __outerWidth;
        /**
         * Position offset of the canvas.
         * @category Internal
         */
        private __canvasPosOffset;
        /**
         * 2D context of the canvas.
         * @category Internal
         */
        private __ctx;
        /**
         * ?????????????????
         * @category Internal
         */
        private __ratio;
        /**
         * Canvas element to display different plate types.
         * @category Elements
         */
        private __canvas;
        /**
         * Selector on the canvas.
         * @category Elements
         */
        private __selector;
        /**
         * Handler for the pressed event.
         * @category Event handler
         */
        private __pressedHandler;
        /**
         * Handler for the mousemove event.
         * @category Event handler
         */
        private __moveHandler;
        /**
         * Handler for the mouseup event.
         * @category Event handler
         */
        private __endHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Callback function for the resize event.
         * @category Event callbacks
         */
        onResized(): void;
        /**
         * Callback function for the mousedown event.
         * @category Event callbacks
         */
        private __onPressed;
        /**
         * Callback function for the mousemove event.
         * @category Event callbacks
         */
        private __onMove;
        /**
         * Callback function for the mouseup event.
         * @category Event callbacks
         */
        private __onEnd;
        /**
         * Callback function for the documentReady event.
         * @category Event callbacks
         */
        private __onDocumentReady;
        /**
         * Updates the size of the canvas.
         * @category Internal
         */
        private __updateSize;
        /**
         * Calculates the inner position to a certain cursor position.
         * @category Internal
         * @param clientX Cursor X position.
         * @param clientY Cursor Y position.
         * @returns The inner position of the cursor position.
         */
        private __calcInnerPos;
        /**
        * Sets the position of the selector.
        * @category Internal
        * @param pos Inner position of the cursor.
        */
        private __setSelectorPos;
        /**
         * Calculates the color corresponding to the inner position of the cursor.
         * @category Internal
         * @param pos Inner position of the cursor.
         * @returns The selected color.
         */
        private __calcSelectedColor;
        /**
         * Draws the canvas for the color block.
         * @category Internal
         */
        private __draw;
        /**
         * Setter for the PlateType attribute.
         * @category Attribute setter and getter
         * @param p The new PlateType or null.
         * @returns The ColorPicker.
         */
        setPlateType(p: ColorPicker.ColorPlateType | string | null): this;
        /**
         * Processor for the PlateType attribute.
         * @category Attribute setter and getter
         */
        protected __processPlateType(): void;
        /**
         * Getter for the PlateType attribute.
         * @category Attribute setter and getter
         * @returns The PlateType attribute.
         */
        getPlateType(): ColorPicker.ColorPlateType | null;
        /**
         * Internal setter for the selectedColorRGBA attribute.
         * @category Attribute setter and getter
         * @param p The new selectedColorRGBA or null.
         * @returns The ColorPicker.
         */
        private __setSelectedRgbaColor;
        /**
         * Getter for the SelectedColorRGBA attribute.
         * @category Attribute setter and getter
         * @returns The SelectedColorRGBA attribute.
         */
        getSelectedRgbaColor(): Color.RGBAColor | null;
        /**
         * Internal setter for the SelectedSolidColor attribute.
         * @category Attribute setter and getter
         * @param p The new selectedSolidColor.
         * @returns The ColorPicker.
         */
        private __setSelectedSolidColor;
        /**
         * Getter for the SelectedSolidColor attribute.
         * @category Attribute setter and getter
         * @returns The SelectedSolidColor attribute.
         */
        getSelectedSolidColor(): SolidColor | null;
        protected __processBackgroundColor(): void;
    }
    namespace ColorPicker {
        /**
         * Type of the color plate of a color picker.
         * @category ColorPicker
         */
        enum ColorPlateType {
            /** A rectangle with a single color which fades from white to the color and to black. */
            hslRect1 = 0,
            /** A rectangle with all colors fading to black (no white). */
            hslRectAll = 1,
            /** A circle which fades through all colors (no black). */
            hsvCircle = 2,
            /** A ring which fades through all colors (no black and white). */
            hslRing = 3
        }
    }
}
//# sourceMappingURL=ColorPicker.d.ts.map