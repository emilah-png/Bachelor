declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * The calendar can be used to display and edit calendar entries.
     * @category Control
     */
    class Calendar extends System.BaseControl implements BaObjectHandler.IFCUsesBaObject {
        protected __baFc: Components.Calendar;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        get baObjectHandler(): BaObjectHandler;
        processBaObject(): void;
        /**
         * Sets the StateColors attribute of the internal DailySchedule.
         * @category Public
         * @param stateColors New StateColors.
         */
        setStateColors(stateColors: Components.DailyScheduleEntry.IStateColors | null | undefined): void;
        /**
         * Gets the StateColors attribute of the internal DailySchedule.
         * @category Public
         * @returns Returns StateColors attribute.
         */
        getStateColors(): Components.DailyScheduleEntry.IStateColors | null | undefined;
        /**
         * Sets the SnapPeriode attribute of the internal DailySchedule.
         * @category Public
         * @param snapPeriode New SnapPeriode.
         */
        setSnapPeriode(snapPeriode: number | null | undefined): void;
        /**
         * Gets the SnapPeriode attribute of the internal DailySchedule.
         * @category Public
         * @returns Returns SnapPeriode attribute.
         */
        getSnapPeriode(): number | null | undefined;
        /**
         * Gets ScheduleExceptions of given source and date range.
         * @category Public
         */
        getScheduleExceptions(source?: Components.Calendar.CalendarEventSource, begin?: Date, end?: Date): BA.SchedExceptionList | null;
        /**
         * Set the visibility of events to given value.
         * @category Public
         */
        setVisibilityEvents(visibility: boolean): void;
        /**
         * Set the view to given date.
         * @category Public
         */
        setDate(d?: Date): void;
        /**
         * Get selected date.
         * @category Public
         */
        getSelectedDate(): Date;
        /**
         * Toggle event visibility.
         * @category Public
         */
        toggleVisibilityEvents(): void;
        /**
         * Write all exceptions to PLC.
         * @category Public
         */
        writeToPlc(): Promise<void>;
        /**
         * Resets all changes since the last save.
         * @category Public
         */
        resetChanges(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        /**
         * Sets the DisplayMode attribute.
         * @category Attribute setter and getter
         * @param p The new DisplayMode or null.
         * @returns The Calendar.
         */
        setDisplayMode(p: Components.Calendar.CalendarDisplayMode | null | undefined): this;
        /**
         * Gets the DisplayMode attribute.
         * @category Attribute setter and getter
         * @returns The DisplayMode attribute.
         */
        getDisplayMode(): Components.Calendar.CalendarDisplayMode;
        /**
         * Sets the DisplayView attribute.
         * @category Attribute setter and getter
         * @param p The new DisplayView or null.
         * @returns The Calendar.
         */
        setDisplayView(p: Components.Calendar.CalendarDisplayView | null | undefined): this;
        /**
         *Gets the DisplayView attribute.
         * @category Attribute setter and getter
         * @returns The DisplayView attribute.
         */
        getDisplayView(): Components.Calendar.CalendarDisplayView;
        /**
         * Sets the VisibilityMenu attribute.
         * @category Attribute setter and getter
         * @param p The new VisibilityMenu or null.
         */
        setVisibilityMenu(p: boolean | null | undefined): this;
        /**
         * Gets the VisibilityMenu attribute.
         * @category Attribute setter and getter
         */
        getVisibilityMenu(): boolean;
    }
}
//# sourceMappingURL=Calendar.d.ts.map