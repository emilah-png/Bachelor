declare namespace TcHmi.BuildingAutomation.Controls.Management {
    /**
     * The schedule contains a tab window with tabs for the current weekly schedule, the regular weekly schedule
     * and the calendar with the exceptions.
     * @category Control
    */
    class Schedule extends System.BaseControl implements BaInterfaceHandler.IUsesBaInterface<Schedule.BaInterface>, BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        baObjectHandler: BaObjectHandler;
        baInterfaceHandler: BaInterfaceHandler<Schedule.BaInterface>;
        /**
         * Content window for the schedule.
         * @category Elements
         */
        private __contentWindow;
        /**
         * Tab window to select between the resulting schedule, weekly schedule and calendar.
         * @category Elements
         */
        private __tabWindow;
        /**
         * The schedule which displays the current week.
         * @category Elements
         */
        private __resultSched;
        /**
         * The schedule which displays the weekly schedule.
         * @category Elements
         */
        private __weeklySched;
        /**
         * Calendar which displays the exceptions of the schedule.
         * @category Elements
         */
        private __calendar;
        /**
         * The content menu of the schedule.
         * @category Elements
         */
        private __contextMenu;
        /**
         * Button in the context menu to save changes made to the weekly schedule or calendar.
         * @category Elements
         */
        private __saveButton;
        /**
         * Button in the context menu to save changes made to the weekly schedule or calendar.
         * @category Elements
         */
        private __resetButton;
        private __nowDTSymbol;
        private __destroyNowDtWatch;
        /**
         * Orientation of schedulr.
         * @category Attributes
         */
        private __orientation;
        /**
         * Snap periode in minutes for the weekly schedule.
         * @category Attributes
         */
        private __snapPeriode;
        /**
         * Defines if the time cursor is displayed in the resulting schedule.
         * @category Attributes
         */
        private __displayTimeCursor;
        /**
         * The current date and time.
         * @category Attributes
         */
        private __currentDateTime;
        /**
         * Identifier if the schedule has a header or not.
         * @category Attributes
         */
        private __showHeader;
        /**
         * Text of the label which is displayed when the state of an entry is true.
         * @category Attributes
         */
        private __activeText;
        /**
         * Text of the label which is displayed when the state of an entry is false.
         * @category Attributes
         */
        private __inactiveText;
        /**
         * State texts to be used for the entries of the comboboxes.
         * @category Attributes
         */
        private __stateTexts;
        /**
         * Unit which will be displayed in the entries.
         * @category Attributes
         */
        private __unit;
        /**
         * Handler when the back button was pressed.
         * @category Event handler
         */
        private __saveButtonPressedHandler;
        /**
         * Handler when the reset button was pressed.
         * @category Event handler
         */
        private __resetButtonPressedHandler;
        /**
         * Handler when the weekly schedule data has changed
         * @category Event handler
         */
        private __weeklySchedChangedHandler;
        /**
         * Handler when the calendar data has changed.
         * @category Event handler
         */
        private __calendarChangedHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Updates the resulting schedule if calendar exceptions or the weekly schedule has changed
         * @category Internal
         */
        private __updateResultSchedule;
        /**
         * Merges weekly and exception entries.
         * @category Internal
         * @param currentWeek The current week.
         * @param weeklyEntries The weekly entries.
         * @param exceptions The exceptions.
         */
        private __mergeWeeklyAndExceptions;
        /**
         * Combines two schedule entry lists.
         * @category Internal
         * @param weekly Entries from the weekly schedule.
         * @param exception Entries from the exception schedule.
         */
        private __combineSchedEntries;
        /**
         * Updates the reset and save button if changes have been made or a reset has been done.
         * @category Internal
         */
        private __updateButtons;
        /**
         * Adds the calendar tab to the schedule. The tab is not needed, if no exceptions or calendar is available.
         * @category Internal
         */
        private __addCalendarTab;
        processBaObject(): void;
        /**
         * Getter for the weekly schedule entries.
         * @category Public
         * @returns The schedule entries of the weekly schedule.
         */
        getWeeklyScheudlerEntries(): BA.SchedWeek | null;
        /**
         * Writes the current schedule configuration to the plc.
         * @category Public
         */
        writeScheduleToPlc(): Promise<boolean>;
        /**
         * Identifies if the WeeklySchedule or Calendar have changes since the last reset.
         * @cateory Public
         */
        hasChanges(): boolean;
        /**
         * Reset all made changes.
         * @category Public
         */
        resetChanges(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<Schedule.BaInterface> | null | undefined): this;
        getBaInterface(): BaInterfaceHandler.BaInterfaceSymbol<Schedule.BaInterface> | null | undefined;
        setBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<Schedule.BaInterface> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
        getBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined;
        /**
         * Setter for the Orientation attribute.
         * @category Attribute setter and getter
         * @param p The new orientation or null.
         * @returns The Schedule.
         */
        setOrientation(p: Orientation | null): this;
        /**
         * Processor for the Orientation attribute.
         * @category Attribute setter and getter
         */
        protected __processOrientation(): void;
        /**
         * Getter for the Orientation attribute.
         * @category Attribute setter and getter
         * @returns The Orientation attribute.
         */
        getOrientation(): Orientation | null | undefined;
        /**
         * Setter for ShowHeader attribute.
         * @category Attribute setter and getter
         * @param p The new ShowHeader or null.
         * @returns The Schedule.
         */
        setShowHeader(p: boolean | null): this;
        /**
         * Processor for the ShowHeader attribute.
         * @category Attribute setter and getter
         */
        protected __processShowHeader(): void;
        /**
         * Getter for the ShowHeader attribute.
         * @category Attribute setter and getter
         * @returns The ShowHeader attribute.
         */
        getShowHeader(): boolean | null | undefined;
        /**
         * Setter for the SnapPeriode attribute.
         * @category Attribute setter and getter
         * @param p The new SnapPeriode or null.
         * @returns The Schedule.
         */
        setSnapPeriode(p: number | null | undefined): this;
        /**
         * Processor for the SnapPeriode attribute.
         * @category Attribute setter and getter
         */
        protected __processSnapPeriode(): void;
        /**
         * Getter for SnapPeriode attribute.
         * @category Attribute setter and getter
         * @returns The SnapPeriode attribute.
         */
        getSnapPeriode(): number | null | undefined;
        /**
         * Setter for the DisplayTimeCursor attribute.
         * @category Attribute setter and getter
         * @param p The new DisplayTimeCursor or null.
         * @returns The Schedule.
         */
        setDisplayTimeCursor(p: number | null | undefined): this;
        /**
         * Processor for the DisplayTimeCursor attribute.
         * @category Attribute setter and getter
         */
        protected __processDisplayTimeCursor(): void;
        /**
         * Getter for DisplayTimeCursor attribute.
         * @category Attribute setter and getter
         * @returns The DisplayTimeCursor attribute.
         */
        getDisplayTimeCursor(): boolean | null | undefined;
        /**
         * Setter for the CurrentDateTime attribute.
         * @category Attribute setter and getter
         * @param p The new CurrentDateTime or null.
         * @returns The Schedule.
         */
        setCurrentDateTime(p: string | null | undefined): this;
        /**
         * Processor for the CurrentDateTime attribute.
         * @category Attribute setter and getter
         */
        protected __processCurrentDateTime(): void;
        /**
         * Getter for CurrentDateTime attribute.
         * @category Attribute setter and getter
         * @returns The CurrentDateTime attribute.
         */
        getCurrentDateTime(): string | null | undefined;
        /**
         * Setter for StateColors attribute.
         * @category Attribute setter and getter
         * @param p The new StateColors or null.
         * @returns The Schedule.
         */
        setStateColors(p: {
            value: number;
            color: SolidColor;
        }[] | null): this;
        /**
         * Getter for the StateColors attribute.
         * @category Attribute setter and getter
         * @returns The StateColors attribute.
         */
        getStateColors(): Map<number, Color.RGBAColor> | null | undefined;
        /**
         * Setter for the ActiveText attribute. Text will be shown in the label when the state is true.
         * @category Attribute setter and getter
         * @param p The new ActiveText or null.
         * @returns The Schedule.
         */
        setActiveText(p: string | null): this;
        /**
         * Processor for the ActiveText attribute.
         * @category Attribute setter and getter
         */
        protected __processActiveText(): void;
        /**
         * Getter for the ActiveText attribute.
         * @category Attribute setter and getter
         * @returns The ActiveText attribute.
         */
        getActiveText(): string | null | undefined;
        /**
         * Setter for the InactiveText attribute. Text will be shown in the label when the state is false.
         * @category Attribute setter and getter
         * @param p The new InactiveText or null.
         * @returns The Schedule.
         */
        setInactiveText(p: string | null): this;
        /**
         * Processor for the InactiveText attribute.
         * @category Attribute setter and getter
         */
        protected __processInactiveText(): void;
        /**
         * Getter for the InactiveText attribute.
         * @category Attribute setter and getter
         * @returns The InactiveText attribute.
         */
        getInactiveText(): string | null | undefined;
        /**
         * Setter for the StateTexts attribute.
         * @category Attribute setter and getter
         * @param p The new StateTexts or null.
         * @returns The Schedule.
         */
        setStateTexts(p: Components.Combobox.IItem<number>[] | null): this;
        /**
         * Processor for the StateTexts attribute.
         * @category Attribute setter and getter
         */
        protected __processStateTexts(): void;
        /**
         * Getter for the StateTexts attribute.
         * @category Attribute setter and getter
         * @returns The StateTexts attribute.
         */
        getStateTexts(): Components.Combobox.IItem<number>[] | null | undefined;
        /**
         * Setter for the Unit attribute.
         * @category Attribute setter and getter
         * @param p The new Unit or null.
         * @returns The Schedule.
         */
        setUnit(p: string | BA.Unit | null): this;
        /**
         * Processor for the Unit attribute.
         * @category Attribute setter and getter
         */
        protected __processUnit(): void;
        /**
         * Getter for the unit attribute.
         * @category Attribute setter and getter
         * @returns The Unit attribute.
         */
        getUnit(): string | null | undefined;
        protected __processReadOnly(): void;
    }
    namespace Schedule {
        enum ScheduleEvents {
            onChanged = "onChanged",
            onSaved = "onSaved"
        }
        interface BaInterface {
            week: BA.SchedWeek;
            presentValue: boolean | number;
            writeWeek?: boolean;
            exceptions?: BA.SchedExceptionList;
            writeExceptions?: boolean;
            calendar?: BA.SchedCalendarList;
            writeCalendar?: boolean;
            activeText?: string;
            inactiveText?: string;
            stateTexts?: string[];
            unit?: string;
        }
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface>;
    }
}
//# sourceMappingURL=Schedule.d.ts.map