declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * The Scale can be used to display and edit different scales (e.g. heating curve).
     * @category Control
    */
    class Scale extends System.BaseControl implements Components.ResizeHandler.IOnResized, BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        baObjectHandler: BaObjectHandler;
        resizeHandler: Components.ResizeHandler;
        protected __loadBaChildren: boolean;
        /**
         * Data for the different scales.
         * @category Attribute
         */
        private __data;
        /**
         * Defines how much the x axis is extended from XMin and XMax..
         * @category Attribute
         */
        private __xAxisExtension;
        /**
         * Title of the scale.
         * @category Attribute
         */
        private __title;
        /**
         * Defines if the header is shown or not.
         * @category Attribute
         */
        private __showHeader;
        /**
         * Content window for the Scale.
         * @category Elements
         */
        private __contentWindow;
        /**
         * Content container of the content window.
         * @category Elements
         */
        private __contentContainer;
        /**
         * Line chart to display the different scales
         * @category Elements
         */
        private __lineChart;
        /**
         * Container where all setpoints are placed.
         * @category Elements
         */
        private __setpointsContainer;
        /**
         * Container for the parameter list.
         * @category Elements
         */
        private __parameterListContainer;
        /**
         * Parameter list to display and edit min and max values.
         * @category Elements
         */
        private __parameterList;
        /**
         * The context menu for the scale.
         * @category Elements
         */
        private __contextMenu;
        /**
         * The different scales in the diagramm.
         * @category Internal
         */
        private __scales;
        /**
         * Maximum X value in the data sets.
         * @category Internal
         */
        private __dataXMax;
        /**
         * Minimum X value in the data sets.
         * @category Internal
         */
        private __dataXMin;
        private __lineChartYAxis;
        private __lineGraphDescriptions;
        private __lineChartData;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Handler when the save button was pressed.
         * @category Event handler
         */
        private __saveButtonPressedHandler;
        /**
         * Handler when the reset button was pressed.
         * @category Event handler
         */
        private __resetButtonPressedHandler;
        /**
         * Handler when the value of a limit entry in the parameter window has changed.
         * @category Event handler
         */
        private __limitValueChangedHandler;
        /**
         * Callback function for the onSetPointValueChanged event which is fired when a scale setpoint changed its value.
         * @category Event callbacks
         */
        private __onSetPointValueChanged;
        /**
         * Callback function for the onResized event.
         * @category Event callbacks
         */
        onResized(): void;
        /**
         * Makes sure that ticks are always can be divided by 10 to only have ticks with out deciamls.
         * @category Internal
         * @param min The minimum value.
         * @param max The maximum value.
         */
        private __normalizeAxisTicks;
        /**
         * Updates the line chart after value or setting changes.
         * @category Internal
         */
        private __updateLineChart;
        /**
         * Updates the size of the Setpoints container -> has to be same size as drawing area of the line chart canvas.
         * Depends on how many y axis are shown and which labels are placed on the axis.
         * @category Internal
         */
        private __updateSetpointContainer;
        /**
         * Updates the limit identifiers when the minimum and maximum values of a scale have been changed.
         * @category Internal
         * @param idx Index of the scale.
         */
        private __updateLimitIdentifiers;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        /**
         * Setter for the Data attribute.
         * @category Attribute setter and getter
         * @param p The new Data or null.
         * @returns The Scale.
         */
        setData(p: Scale.Data[] | null): this;
        /**
         * Processor for the Data attribute.
         * @category Attribute setter and getter
         */
        protected __processData(): void;
        /**
         * Getter for the Data attribute.
         * @category Attribute setter and getter
         * @returns The Data attribute.
         */
        getData(): Scale.Data[] | null;
        /**
         * Setter for the XAxisExtension attribute.
         * @category Attribute setter and getter
         * @param p The new XAxisExtension or null.
         * @returns The Scale
         */
        setXAxisExtension(p: number | null | undefined): this;
        /**
         * Processor for the XAxisExtension attribute.
         * @category Attribute setter and getter
         */
        protected __processXAxisExtension(): void;
        /**
         * Getter for the XAxisExtension attribute.
         * @category Attribute setter and getter
         * @returns The XAxisExtension attribute.
         */
        getXAxisExtension(): number | null;
        /**
         * Setter for the Title attribute.
         * @category Attribute setter and getter
         * @param p The new Title or null.
         * @returns The Scale
         */
        setTitle(p: string | null | undefined): this;
        /**
         * Processor for the Title attribute.
         * @category Attribute setter and getter
         */
        protected __processTitle(): void;
        /**
         * Getter for the Title attribute.
         * @category Attribute setter and getter
         * @returns The Title attribute.
         */
        getTitle(): string | null;
        /**
         * Setter for ShowHeader attribute.
         * @category Attribute setter and getter
         * @param p The new ShowHeader or null.
         * @returns The Scale.
         */
        setShowHeader(p: boolean | null): this;
        /**
         * Processor the ShowHeader attribute.
         * @category Attribute setter and getter
         */
        protected __processShowHeader(): void;
        /**
         * Getter for the ShowHeader attribute.
         * @category Attribute setter and getter
         * @returns The ShowHeader attribute.
         */
        getShowHeader(): boolean | null;
        processBaObject(): void;
    }
    namespace Scale {
        enum ScaleEvents {
            /** Is raised when the scale was saved. */
            onSave = "onScaleSave",
            /** Is raised when the scale was reseted. */
            onReset = "onScaleReset"
        }
        /**
         * Defines a scale.
         * @category Scale
         */
        interface Data {
            /** ScaleSetpoints of the scale. */
            ScaleSetpoints: ICoordinateXY[];
            /** YMax value for the scale. */
            YMax?: number;
            /** YMin value of the scale. */
            YMin?: number;
            /** Title will be displayed on the Y-Axis. */
            Title?: string;
            /** The direction behavior of the scale. */
            Behavior: Behavior;
            /** The type of the ending of the scale. */
            Ending: Ending;
            /** Defines how detailed ScaleSetpoints can be moved (e.g. 1, 0.25 or 5). */
            SnapPeriode: number;
            /** Defines if scale points are allowed to be moved vertically. */
            AllowVerticalMovement: boolean;
            /** Defines if scale points are allowed to be moved horizontally. */
            AllowHorizontalMovement: boolean;
            /** Defines how much the YAxis should be extended after YMax and YMin. */
            YAxisExtension: number;
            /** Defines if the scale should be editable or not. */
            ReadOnly: boolean;
            /** The unit will be displayed on the YAxis of the scale. */
            Unit?: string;
        }
        /**
         * Defines the behavior of a scale which means the direction of the scale.
         * This behavior limits the movements of the ScaleSetpoints.
         * @category Scale
         */
        enum Behavior {
            /** The scale can go up and down. */
            any = 0,
            /** The scale is only decreasing. */
            onlyDecreasing = 1,
            /** The scale is only increasing. */
            onlyIncreasing = 2
        }
        /**
         * Defines where the scale after the last Scale.Setpoint should end / start.
         * @category Scale
         */
        enum Ending {
            /** The scale will end on the first / last Scale.Setpoint. */
            direct = 0,
            /** The scale will go on with the pitch of the last / first two ScaleSetpoints. */
            infinity = 1,
            /** The scale will go on with the pitch of the last / first two ScaleSetpoints and will be cut off on YMax / YMin. */
            limits = 2,
            /** The scale will be cut off on the last / first Scale.Setpoint and goes horizontal to the end of the scale. */
            cutOff = 3
        }
        /**
         * The Setpoint is a x | y point in the Scale. It can be moved to change its position (value).
         * @category Scale
         */
        class Setpoint extends Components.Base {
            constructor(id: string, parent: Components.Base.IBase | null);
            private __value;
            private __snapToValue;
            private __snapPeriode;
            private __range;
            private __yAxisMax;
            private __yAxisMin;
            private __xAxisMax;
            private __xAxisMin;
            private __yMax;
            private __yMin;
            private __xMax;
            private __xMin;
            private __allowVerticalMovement;
            private __allowHorizontalMovement;
            private __curMoveX;
            private __curMoveY;
            private __selector;
            private __display;
            private __onElementMovedHandler;
            private __pressedHandler;
            __attach(): void;
            __detach(): void;
            destroy(): void;
            /**
             * Callback function when the dragable element has moved.
             * @param e Event data.
             * @param event The event data of the mouse move event.
             * @param moveX The pixels the dragable element has moved in x direction.
             * @param moveY The pixels the dragable element has moved in y direction.
             */
            private __onElementMoved;
            /**
             * Callback function if the display has been selected to edit the value of the setpoint by input.
             * @param e Event data.
             */
            private __onEditValue;
            /** Updates the position of the scale setpoint for a given value. */
            private __updatePosition;
            /**
             * Makes the setpoint dragable.
             * @category Internal
             */
            private __makeDragable;
            /**
             * Setter for the value attribute.
             * @param p The new value or null.
             */
            setValue(p: ICoordinateXY | null): this;
            /** Processor for the value attribute. */
            protected __processValue(): void;
            /** Getter for the value attribute. */
            getValue(): ICoordinateXY | null;
            /**
             * Setter for the snapPeriode. The periode to which the setpoint shall be snapped.
             * @param p The new snapPeriode or null.
             */
            setSnapPeriode(p: number | null): this;
            /** Getter for the snapPeriode attribute. */
            getSnapPeriode(): number | null;
            /**
             * Setter for the range attribute. Define the height and width of the sourrunding container to calculate values.
             * @param p The new range or null
             */
            setRange(p: ISizeWH | null): this;
            /** Getter for the range attribute. */
            getRange(): ISizeWH | null;
            /**
             * Setter for YAxisMax attribute. The maximum value of the y axis.
             * @param p The new YAxisMax or null.
             */
            setYAxisMax(p: number | null | undefined): this;
            /** Getter for the YAxisMax attribute. */
            getYAxisMax(): number | null;
            /**
             * Setter for YAxisMin attribute. The minimum value of the y axis.
             * @param p The new YAxisMin or null.
             */
            setYAxisMin(p: number | null | undefined): this;
            /** Getter for the YAxisMin attribute. */
            getYAxisMin(): number | null;
            /**
             * Setter for XAxisMax attribute. The maximum value of the x axis.
             * @param p The new XAxisMax or null.
             */
            setXAxisMax(p: number | null): this;
            /** Getter for the XAxisMax attribute. */
            getXAxisMax(): number | null;
            /**
             * Setter for XAxisMin attribute. The minimum value of the x axis.
             * @param p The new XAxisMin or null.
             */
            setXAxisMin(p: number | null): this;
            /** Getter for the XAxisMin attribute. */
            getXAxisMin(): number | null;
            /**
             * Setter for the YMax attribute. Maximum value of the y value.
             * @param p The new YMax or null;
             */
            setYMax(p: number | null | undefined): this;
            /** Getter for the YMax attribute. */
            getYMax(): number | null;
            /**
             * Setter for the YMin attribute. Minimum value of the y value.
             * @param p The new YMin or null;
             */
            setYMin(p: number | null | undefined): this;
            /** Getter for the YMin attribute. */
            getYMin(): number | null;
            /**
             * Setter for the XMax attribute. Maximum value of the x value.
             * @param p The new XMax or null;
             */
            setXMax(p: number | null): this;
            /** Getter for the XMax attribute. */
            getXMax(): number | null;
            /**
             * Setter for the XMin attribute. Minimum value of the x value.
             * @param p The new XMin or null;
             */
            setXMin(p: number | null): this;
            /** Getter for the XMin attribute. */
            getXMin(): number | null;
            /**
             * Setter for the allowVerticalMovement. Defines if the vertical movement is allowed or not.
             * @param p The new allowVerticalMovement | null.
             */
            setAllowVerticalMovement(p: boolean | null): this;
            /** Getter for the allowVerticalMovement attribute. */
            getAllowVerticalMovement(): boolean | null;
            /**
             * Setter for the allowHorizontalMovement. Defines if the horizontal movement is allowed or not.
             * @param p The new allowHorizontalMovement | null.
             */
            setAllowHorizontalMovement(p: boolean | null): this;
            /** Getter for the allowHorizontalMovement attribute. */
            getAllowHorizontalMovement(): boolean | null;
        }
        namespace Setpoint {
            enum SetpointEvents {
                /** Is raised when the value (x / y) of a Scale.Setpoint has changed. */
                onSetpointValueChanged = "onSetpointValueChanged"
            }
        }
    }
}
//# sourceMappingURL=Scale.d.ts.map