declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * The UiIcon contains a button to open a BA.BaView. Around the button active events will be displayed.
     * @category Control
     */
    class UiIcon extends Button implements BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.UiIcon;
        /**
         * Data for different displays around the icon.
         * @category Attributes
         */
        private __displaysDataFromDesigner;
        /**
         * Data for different events that can be displayed around the icon.
         * @category Attributes
         */
        private __eventsDataFromDesigner;
        private __connections;
        private __connectionExtensions;
        private __connectionsWidth;
        private __connectionColors;
        private __connectionColorPerSide;
        private __showFaceplate;
        /**
         * Stores the IconStatus attribute value, which was set from outside of the control.
         * Needed because the IconStatus attribute is set internally if events are configured.
         * @category Internal
         */
        protected __externalSetIconStatus: Components.UiIcon.Status | null;
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
        /**
         * Callback function for the onDisplayValueChanged event.
         * @category Event callbacks
         */
        protected __onDisplayValueChanged(ev: EventProvider.Event, owner: Components.UiIcon, ...args: any[]): void;
        get baObjectHandler(): BaObjectHandler;
        processBaObject(): void;
        /**
         * Adds a display to the UiIcon.
         * @category Public
         * @param data The data for the display.
         */
        addDisplay(name: string, data: Components.UiIcon.IDisplayData): Components.InputBox<string | number>;
        /**
         * Get a specific display by its name.
         * @category Public
         * @param name The name of the requested display.
         * @returns The display or null
         */
        getDisplay(name: string): Components.InputBox<string | number> | null;
        /**
        * Get all created displays.
        * @category Public
        * @returns All created displays.
        */
        getDisplays(): Map<string, Components.InputBox<string | number>> | undefined;
        /**
         * Updates a certain display.
         * @category Public
         * @param name The name of the display to be updated.
         * @param data The data that shall be updated.
         */
        updateDisplay(name: string, data: Components.UiIcon.IDisplayData): void;
        /**
         * Removes the display with the given name.
         * @category Public
         * @param name The name of the display which should be removed.
         */
        removeDisplay(name: string): boolean;
        /**
        * Set a position for a specific display.
        * @category Public
        * @param name The name of the display.
        * @param pos The new position of the display.
        */
        setDisplayPosition(name: string, pos: Components.UiIcon.DisplayPosition): this;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        /**
         * Setter for the DisplaysData attribute if set from the designer.
         * @category Attribute setter and getter
         * @param p The new displaysData or null.
         * @returns The UiIcon.
         */
        private __setDisplaysDataDesigner;
        /**
         * Getter for the DisplaysData attribute if requested from the designer.
         * @category Attribute setter and getter
         * @returns The DisplaysData attribute.
         */
        private __getDisplaysDataDesigner;
        /**
         * Setter for the DisplaysData attribute.
         * @category Attribute setter and getter
         * @param p The new displaysData or null.
         * @returns The UiIcon.
         */
        setDisplaysData(p: Map<string, Components.UiIcon.IDisplayData> | null | undefined): this;
        /**
         * Getter for the DisplaysData attribute.
         * @category Attribute setter and getter
         * @returns The DisplaysData attribute.
         */
        getDisplaysData(): Map<string, Components.UiIcon.IDisplayData> | null | undefined;
        /**
         * Setter for the DisplayedDigits attribute.
         * @category Attribute setter and getter
         * @param p The new DisplayedDigits or null.
         * @returns The UiIcon.
         */
        setDisplayedDigits(p: number | null): this;
        /**
         * Processor for the DisplayedDigits attribute.
         * @category Attribute setter and getter
         */
        protected __processDisplayedDigits(): void;
        /**
         * Getter for the DisplayedDigits attribute.
         * @category Attribute setter and getter
         * @returns The DisplayedDigits attribute.
         */
        getDisplayedDigits(): number | null | undefined;
        /**
         * Setter for the IsActive attribute.
         * @category Attribute setter and getter
         * @param p The new IsActive or null.
         * @returns The UiIcon.
         * @deprecated Use setIconStatus.
         */
        setIsActive(p: boolean | null | undefined): this;
        /**
         * Processor for the IsActive attribute.
         * @category Attribute setter and getter
         */
        protected __processIsActive(): void;
        /**
         * Getter for the IsActive attribute.
         * @category Attribute setter and getter
         * @returns The IsActive attribute.
         * @deprecated Use getIconStatus.
         */
        getIsActive(): boolean | null | undefined;
        /**
         * Setter for the HasEvent attribute.
         * @category Attribute setter and getter
         * @param p The new HasEvent or null.
         * @returns The UiIcon.
         * @deprecated Use setIconStatus.
         */
        setHasEvent(p: BA.EventType | null | undefined): this;
        /**
         * Processor for the HasEvent attribute.
         * @category Attribute setter and getter
         */
        protected __processHasEvent(): void;
        /**
         * Getter for the HasEvent attribute.
         * @category Attribute setter and getter
         * @returns The HasEvent attribute.
         * @deprecated Use getIconStatus.
         */
        getHasEvent(): EventType | null | undefined;
        /**
         * Setter for the IconStatus attribute.
         * @category Attribute setter and getter
         * @param p The new IconStatus or null.
         * @returns The UiIcon.
         */
        setIconStatus(p: Components.UiIcon.Status | null | undefined): this;
        /**
         * Processor for the IconStatus attribute.
         * @category Attribute setter and getter
         */
        protected __processIconStatus(): void;
        /**
         * Getter for the IconStatus attribute.
         * @category Attribute setter and getter
         * @returns The IconStatus attribute.
         */
        getIconStatus(): Components.UiIcon.Status | null | undefined;
        /**
         * Setter for the BorderStatus attribute.
         * @category Attribute setter and getter
         * @param p The new BorderStatus or null.
         * @returns The UiIcon.
         */
        setBorderStatus(p: Components.UiIcon.Status | null | undefined): this;
        /**
         * Processor for the BorderStatus attribute.
         * @category Attribute setter and getter
         */
        protected __processBorderStatus(): void;
        /**
         * Getter for the BorderStatus attribute.
         * @category Attribute setter and getter
         * @returns The BorderStatus attribute.
         */
        getBorderStatus(): Components.UiIcon.Status | null | undefined;
        /**
         * Setter for the EventsData attribute if set from the designer.
         * @category Attribute setter and getter
         * @param p The new EventsData or null.
         * @returns The UiIcon.
         */
        private __setEventsDataDesigner;
        /**
         * Getter for the EventsData attribute if requested from the designer.
         * @category Attribute setter and getter
         * @returns The EventsData attribute.
         */
        private __getEventsDataDesigner;
        /**
         * Setter for the EventsData attribute.
         * @category Attribute setter and getter
         * @param p The new EventsData or null.
         * @returns The UiIcon.
         */
        setEventsData(p: Components.UiIcon.IEventData[] | null | undefined): this;
        /**
         * Getter for the EventsData attribute.
         * @category Attribute setter and getter
         * @returns The EventsData attribute.
         */
        getEventsData(): Components.UiIcon.IEventData[] | null | undefined;
        /**
         * Setter for the ShowDisplays attribute.
         * @category Attribute setter and getter
         * @param p The new ShowDisplays or null.
         * @returns The UiIcon.
         */
        setShowDisplays(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowDisplays attribute.
         * @category Attribute setter and getter
         */
        protected __processShowDisplays(): void;
        /**
         * Getter for the ShowDisplays attribute.
         * @category Attribute setter and getter
         * @returns The ShowDisplays attribute.
         */
        getShowDisplays(): boolean | null | undefined;
        /**
         * Setter for the Connections attribute.
         * @category Attribute setter and getter
         * @param p The new Connections or null.
         * @returns The UiIcon.
         */
        setConnections(p: Partial<FourSidedCss> | null | undefined): this;
        /**
         * Processor for the Conntections attribute.
         * @category Internal
         */
        protected __processConnections(): void;
        /**
         * Getter for the Connections attribute.
         * @category Attribute setter and getter
         * @returns The Connections attribute.
         */
        getConnections(): Partial<FourSidedCss> | null | undefined;
        /**
         * Setter for the ConnectionExtensions attribute.
         * @category Attribute setter and getter
         * @param p The new ConnectionExtensions or null.
         * @returns The UiIcon.
         */
        setConnectionExtensions(p: Partial<FourSidedCss> | null | undefined): this;
        /**
         * Processor for the ConntectionExtension attribute.
         * @category Internal
         */
        protected __processConnectionExtension(): void;
        /**
         * Getter for the ConnectionExtensions attribute.
         * @category Attribute setter and getter
         * @returns The ConnectionExtensions attribute.
         */
        getConnectionExtensions(): Partial<FourSidedCss> | null | undefined;
        /**
         * Setter for the ConnectionsWidth attribute.
         * @category Attribute setter and getter
         * @param p The new ConnectionsWidth or null.
         * @returns The UiIcon.
         */
        setConnectionsWidth(p: number | null | undefined): this;
        /**
         * Processor for the ConntectionsWidth attribute.
         * @category Internal
         */
        protected __processConnectionsWidth(): void;
        /**
         * Getter for the ConnectionsWidth attribute.
         * @category Attribute setter and getter
         * @returns The ConnectionsWidth attribute.
         */
        getConnectionsWidth(): number | null | undefined;
        /**
         * Setter for the ConnectionColors attribute.
         * @category Attribute setter and getter
         * @param p The new ConnectionColors or null.
         * @returns The UiIcon.
         */
        setConnectionColors(p: SolidColor | Color.RGBAColor | Color.IFourSidedColor | null | undefined): this;
        /**
         * Getter for the ConnectionColors attribute.
         * @category Attribute setter and getter
         * @returns The ConnectionColors attribute.
         */
        getConnectionColors(): SolidColor | null | undefined;
        /**
         * Setter for the ConnectionColorPerSide attribute.
         * @category Attribute setter and getter
         * @param p The new ConnectionColorPerSide or null.
         * @returns The UiIcon.
         */
        setConnectionColorPerSide(p: Color.IFourSidedColor | null | undefined): this;
        /**
         * Getter for the ConnectionColorPerSide attribute.
         * @category Attribute setter and getter
         * @returns The ConnectionColorPerSide attribute.
         */
        getConnectionColorPerSide(): Color.IFourSidedColor | null | undefined;
        /**
         * Setter for the ShowTag attribute.
         * @category Attribute setter and getter
         * @param p The new ShowTag or null.
         * @returns The UiIcon.
         */
        setShowTag(p: Components.UiIcon.DisplayPosition | null | undefined): this;
        /**
         * Getter for the ShowTag attribute.
         * @category Attribute setter and getter
         * @returns The ShowTag attribute.
         */
        getShowTag(): Components.UiIcon.DisplayPosition | null | undefined;
        /**
         * Setter for the ShowFaceplate attribute.
         * @category Attribute setter and getter
         * @param p The new ShowFaceplate or null.
         * @returns The UiIcon.
         */
        setShowFaceplate(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowFaceplate attribute.
         * @category Attribute setter and getter
         */
        protected __processShowFaceplate(): void;
        /**
         * Getter for the ShowFaceplate attribute.
         * @category Attribute setter and getter
         * @returns The ShowFaceplate attribute.
         */
        getShowFaceplate(): boolean | null | undefined;
    }
}
//# sourceMappingURL=UiIcon.d.ts.map