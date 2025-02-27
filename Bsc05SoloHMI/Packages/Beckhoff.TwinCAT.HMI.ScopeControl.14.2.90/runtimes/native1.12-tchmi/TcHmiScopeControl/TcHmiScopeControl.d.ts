declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl {
    class TcHmiScopeControl extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Global triggerImages as map (string = base64 image string, HTMLImageElement = loaded image) */
        static triggerImages: Map<string, HTMLImageElement>;
        /** Reference to the root dom element of the current control template as jquery object. */
        protected __elementTemplateRoot: JQuery;
        /** Reference to the div element used as chart container as jquery object. */
        __elementChartings: JQuery;
        /** Reference to the div element used as trigger window container as jquery object. */
        protected __elementTriggerWindow: JQuery;
        /** Reference to the canvas element used as resize border view as jquery object. */
        protected __elementBorder: JQuery<HTMLCanvasElement>;
        /** Reference to the div element used as overview container as jquery object. */
        protected __elementOverview: JQuery;
        /** Reference to the div element used as chart name as jquery object. */
        protected __elementChartName: JQuery;
        /** Reference to the div element used as menu-bar as jquery object. */
        protected __elementMenuBar: JQuery;
        /** Reference to the div element used as parent for buttons (top most layer) as jquery ouserinterabject. */
        protected __elementMenuBarDropdown: JQuery;
        /** Reference to the div element used as button-menu-bar as jquery object. */
        protected __elementToolBar: JQuery;
        /** Reference to the div element used as time-menu-bar as jquery object. */
        protected __elementTimeBar: JQuery;
        /** Reference to the div element used as legend as jquery object. */
        protected __elementLegend: JQuery;
        /** Reference to the div element used loading element as jquery object. */
        __elementLoading: JQuery;
        /** Reference to the div element used tooltip as jquery object. */
        protected __elementTooltip: JQuery;
        /** Reference to the div element used tooltip text as jquery object. */
        protected __elementTooltipText: JQuery;
        /** Reference to the div element used tooltip arrow as jquery object. */
        protected __elementTooltipArrow: JQuery;
        /** Reference to the div element used dialog as jquery object. */
        protected __elementDialog: JQuery;
        /** Reference to the div element used time range dialog as jquery object. */
        protected __elementTimeRangeDialog: JQuery;
        __storage: LocalStorage<{
            replace: boolean;
            activeLegendElements: string[];
        }, {
            replace: ReturnType<TcHmiScopeControl['getReplace']>;
            activeLegendElements: ReturnType<TcHmiScopeControl['getScopeConfig']>;
        }> | undefined;
        __replace: boolean | undefined;
        /** Localization */
        protected __localizedElements: Map<string, {
            element: HTMLElement;
            value: string | null;
        }>;
        protected __localizedEngineeringElements: Map<string, Element>;
        __localizationReader: Locale.LocalizationReader | undefined;
        protected __destroyLocalizationWatch: DestroyFunction | null;
        /** Internal variable for init request has been executed  */
        protected __scopeIsInitialized: boolean;
        /** Internal variable for legend */
        protected __showLegend: boolean;
        /** Internal variable for the browser scaling */
        protected __scaling: {
            x: number;
            y: number;
        };
        /** Attributes */
        /** Internal reference to the attribute 'data-TcHmi_Controls_Beckhoff_TcHmiScopeControl_TcHmiScopeControl-config' */
        __scopeConfig: TcHmiScopeControl.ScopeConfig | undefined;
        /** Internal reference to the attribute 'data-tchmi-server-interval */
        protected __serverInterval: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-server-domain */
        __serverDomain: string | undefined;
        /** Internal reference to the attribute 'data-tchmi-enable-record-controls */
        protected __enableRecordControls: boolean | undefined;
        /** Internal reference to the attribute 'data-TcHmi_Controls_Beckhoff_TcHmiScopeControl_TcHmiScopeControl-chart-color-source' */
        protected __chartChartColorSource: ChartColorSource | undefined;
        /** Internal reference to the attribute 'data-TcHmi_Controls_Beckhoff_TcHmiScopeControl_TcHmiScopeControl-trigger-window-position' */
        protected __triggerWindowPosition: TriggerWindowPosition | undefined;
        /** Internal reference to the attribute 'data-TcHmi_Controls_Beckhoff_TcHmiScopeControl_TcHmiScopeControl-show-trigger-window' */
        protected __showTriggerWindow: boolean | undefined;
        /** Linechart element' */
        protected __lineCharts: Beckhoff.TcHmiScopeControl.Charting.ScopeChart[];
        /** Overviewchart element' */
        protected __overviewChart: Beckhoff.TcHmiScopeControl.Charting.ScopeChart | null;
        /** Reference to the div elements used as chart container as jquery object. */
        protected __chartingElements: JQuery[];
        /** Stores the toolButtons as Dictionary<System.TcHmiControl | JQuery> */
        __toolBarControls: Dictionary<System.TcHmiControl | JQuery>;
        /** Stores the toolButtons as (System.TcHmiControl | JQuery)[] */
        protected __toolBarControlsArray: (System.TcHmiControl | JQuery<Element>)[];
        /** Stores the toolButtons as JQuery[] */
        protected __timeBarControls: Dictionary<JQuery>;
        /** Stores the triggerWindow as TcHmiDatagrid */
        protected __datagrid: TcHmiDatagrid | undefined;
        /**
         * Stores a reference to the function called when the resize event is raised
         */
        protected __initEventDestroyEvent: DestroyFunction | null;
        protected __resizeEventDestroyEvent: DestroyFunction | null;
        protected __themeDataLoadedEventDestroyEvent: DestroyFunction | null;
        protected __userDataChangedEventDestroyEvent: DestroyFunction | null;
        protected __scopeEventsDestroyEvent: DestroyFunction | null;
        protected __configEventsDestroyEvent: DestroyFunction | null;
        /** Event handlers */
        protected __mousedownHandler: (event: MouseEvent) => void;
        protected __mousedownGlobalHandler: (event: MouseEvent) => void;
        protected __mouseupHandler: (event: MouseEvent) => void;
        protected __mousemoveHandler: (event: MouseEvent) => void;
        protected __mousemoveChangeCursorHandler: (event: MouseEvent) => void;
        protected __mousemoveOverviewHandler: (event: MouseEvent) => void;
        protected __mouseupOverviewHandler: (event: MouseEvent) => void;
        protected __touchstartHandler: (event: TouchEvent) => void;
        protected __touchmoveHandler: (event: TouchEvent) => void;
        protected __touchendHandler: (event: TouchEvent) => void;
        protected __mousewheelHandler: (event: WheelEvent) => void;
        /** Subscription ID for ListDomain::Domain::state as number (null if no subscription is created) */
        protected __subscriptionIdOnExtensionStateChanged: number | null;
        /** Request ID for init as number (null if no request is created) */
        protected __initRequestId: number | null;
        /** Request ID for openConnection as number (null if no request is created) */
        __openConnectionRequestId: number | null;
        /** Subscription ID for GetMenubar and optionally GetLegend as number (null if no subscription is created) */
        protected __subscriptionIdMenubar: number | null;
        /** Request ID for setChartSize as number (null if no request is created) */
        __setChartSizeRequestId: number | null;
        /** Subscription ID for main data as number (null if no subscription is created) */
        protected __subscriptionId: number | null;
        /** Subscription ID for GetActualWindow as number (null if no subscription is created) */
        protected __subscriptionIdActualWindow: number | null;
        /** Request ID for startRecord as number (null if no request is created) */
        __startRecordRequestId: number | null;
        /** Request ID for startDisplay onPressed as number (null if no request is created) */
        __startRequestId: number | null;
        /** Request ID for stopRecord as number (null if no request is created) */
        __stopRecordRequestId: number | null;
        /** Request ID for stopDisplay in onPressed as number (null if no request is created) */
        __stopRequestId: number | null;
        /** Request ID for zoom in userInteractionEnd as number (null if no request is created) */
        __zoomRequestId: number | null;
        /** Request ID for pan in userInteractionEnd as number (null if no request is created) */
        __panRequestId: number | null;
        /** Request ID for wheel in userInteractionEnd as number (null if no request is created) */
        __wheelRequestId: number | null;
        /** Request ID for unzoom in userInteractionEnd as number (null if no request is created) */
        __unzoomRequestId: number | null;
        /** Request ID for unzoom in userInteractionEnd as number (null if no request is created) */
        __zoomOutRequestId: number | null;
        /** Request ID for setDisplayWidth in userInteractionEnd as number (null if no request is created) */
        __displayWidthRequestId: number | null;
        /** Request ID for Goto in userInteractionEnd as number (null if no request is created) */
        __gotoRequestId: number | null;
        /** Request ID for Scroll in userInteractionEnd as number (null if no request is created) */
        __scrollRequestId: number | null;
        /** Request ID for ScrollBig in userInteractionEnd as number (null if no request is created) */
        __scrollBigRequestId: number | null;
        /** Request ID for Undo in userInteractionEnd as number (null if no request is created) */
        __undoRequestId: number | null;
        /** Request ID for Redo in userInteractionEnd as number (null if no request is created) */
        __redoRequestId: number | null;
        /** Request ID for setOverviewMode in userInteractionEnd as number (null if no request is created) */
        __setOverviewModeRequestId: number | null;
        /** Request ID for setOvervieRect in userInteractionEnd as number (null if no request is created) */
        __setOverviewRectRequestId: number | null;
        /** Request ID for getTooltip in userInteractionEnd as number (null if no request is created) */
        protected __getTooltipRequestId: number | null;
        /** Request ID for resizeCharts in userInteractionEnd as number (null if no request is created) */
        protected __resizeChartsRequestId: number | null;
        /** Request ID for changeChannelState in userInteractionEnd as number (null if no request is created) */
        __changeChannelStateRequestId: number | null;
        /** Request ID for saveCurrentReocrd in userInteractionEnd as number (null if no request is created) */
        __saveCurrentRecordRequestId: number | null;
        /** Subscription ID for getTriggerWindow as number (null if no subscription is created) */
        protected __subscriptionIdTriggerWindow: number | null;
        /** Request ID for setTriggerComment as number (null if no subscription is created) */
        protected __setTriggerCommentRequestId: number | null;
        /** Request ID for getAllUploadedRecords or getOwnUploadedRecords as number (null if no request is created) */
        protected __uploadedRecordsRequestId: number | null;
        /** Request ID for deleteScopeRecord as number (null if no request is created) */
        __deleteScopeRecordRequestId: number | null;
        /** Request ID for changePersist as number (null if no request is created) */
        __changePersistRequestId: number | null;
        /** Request ID for getAnalyticsData as number (null if no request is created) */
        __getAnalyticsDataRequestId: number | null;
        /** Subscription ID for getRecords as number (null if no subscription is created) */
        protected __subscriptionIdGetRecords: number | null;
        /** Request ID for getChartList as number (null if no request is created) */
        __getChartListRequestId: number | null;
        /** Request ID for openConnectionToFile as number (null if no request is created) */
        __openConnectionToFileRequestId: number | null;
        /** Request ID for getMenubar,getLegend as number (null if no request is created) */
        protected __getMenubarRequestId: number | null;
        /** Request ID for getLayout, getWindow, getData, getTriggerWindow as number (null if no request is created) */
        __getDataRequestId: number | null;
        /** Request ID for closeConnection as number (null if no request is created) */
        __closeConnectionRequestId: number | null;
        /** Subscription ID for GetAllUploadedRecords as number (null if no subscription is created) */
        protected __subscriptionIdGetAllUploadedRecords: number | null;
        /** Subscription ID for GetOwnUploadedRecords as number (null if no subscription is created) */
        protected __subscriptionIdGetOwnUploadedRecords: number | null;
        /** Request ID for clickOverviewElement in userInteractionEnd as number (null if no request is created) */
        protected __clickOverviewElementRequestId: number | null;
        /** Request ID for setAnalyticsRecord as number (null if no request is created) */
        __setAnalyticsRecordRequestId: number | null;
        /** Tooltip timeout as number (null if no tooltip is shown) */
        protected __tooltipTimeout: number | null;
        /** Internal menubar options from extension (fill in getMenubarCallback) */
        protected __menubar: TcHmiScopeControl.Menubar | undefined;
        /** Internal menubar options from extension (fill in getMenubarCallback) */
        protected __legend: TcHmiScopeControl.LegendElement[] | undefined;
        /** Internal layout options from extension (fill in getMenubarCallback) */
        __scopeLayout: TcHmiScopeControl.ScopeLayout | undefined;
        /** Internal line graph data from scope-extension (fill in getDataCallback) */
        protected __scopeGraphData: TcHmiScopeControl.GetDataDatatype | undefined;
        /** Internal window data from scope-extension (fill in getDataCallback) */
        protected __scopeGraphWindow: TcHmiScopeControl.Window | null;
        /** Internal trigger window data from scope-extension (fill in getDataCallback) */
        protected __triggerWindow: TcHmiScopeControl.TriggerWindow[] | null;
        /** Internal enabledButtons as enum flag */
        protected __enabledButtons: ButtonsEnabled;
        /** Internal enabledTimes as enum flag */
        protected __enabledTimes: TimesEnabled;
        /** Internal sessionId as string */
        protected __sessionId: string | null;
        /** Internal socketId as number */
        protected __socketId: number | null;
        /** Internal information if init is finished as bool */
        protected __extensionInitCompleted: boolean;
        /** Internal information if scopeConfig is loaded as bool */
        protected __scopeConfigLoaded: boolean;
        /** Mouse mode for zooming or panning as MouseMode */
        __mouseMode: MouseMode;
        /** Internal variable to save the manipulation infos */
        protected __manipulationInfo: {
            isManipulating: boolean;
            start: {
                x: number;
                y: number;
            };
            end: {
                x: number;
                y: number;
            };
            offset: {
                left: number;
                top: number;
            };
            transform: {
                x: number;
                y: number;
            };
            click: boolean;
            mousePosition: {
                x: number;
                y: number;
            };
            elementIndex: number;
            isOverviewSizeChanged: boolean;
            beginOverviewRectChanging: boolean;
            chartSizeChanged: boolean;
            resizeLineIndex: number;
            touchIdentifier: number;
            resizeTriggerWindow: boolean;
        };
        /** Internal variable to save the manipulation infos */
        protected __multitouchInfo: {
            multitouchMode: boolean;
            first: {
                identifier: number | null;
                startPoint: {
                    x: number;
                    y: number;
                };
            };
            second: {
                identifier: number | null;
                startPoint: {
                    x: number;
                    y: number;
                };
            };
            offset: {
                left: number;
                top: number;
            };
            distance: number;
            elementIndex: number;
            middlePoint: {
                x: number;
                y: number;
            };
        };
        protected __wheelInfo: {
            isWheeling: boolean;
            wheelSteps: number;
            mousePosition: {
                x: number;
                y: number;
            };
            timeout: number;
        };
        /** Internal variable for resize lines */
        protected __resizeLines: {
            orientation: Orientation;
            startPoint: TcHmiScopeControl.Point;
            endPoint: TcHmiScopeControl.Point;
            chartIndex: number;
        }[];
        /** Events */
        private __destroyEvents;
        protected __themeChartBackgroundColor: string | null;
        protected __themeChartForegroundColor: string | null;
        protected __themeOverviewBackgroundColor: string | null;
        protected __themeOverviewForegroundColor: string | null;
        protected __themeCanvasBackgroundColor: string | null;
        protected __themeAxisColor: string | null;
        protected __themeGridColor: string | null;
        protected __themeAxisGroupForegroundColor: string | null;
        /** Stores the displayWidth textbox text */
        __displayWidthText: string | undefined;
        /** Stores the goto textbox text */
        __gotoText: string | undefined;
        /** Stores the showOverview toggle */
        __showOverview: boolean | undefined;
        /** Stores the overview rectangle */
        protected __overviewRectangle: {
            position: {
                x: number;
                y: number;
            };
            dimensions: {
                width: number;
                height: number;
            };
        };
        /** LoadingSpinner */
        __loadingSpinner: Element | null;
        protected __virtualMappingForControlRecord: VirtualControlRightMapping[];
        protected __virtualMappingForChangeHistoricalAquisitions: VirtualControlRightMapping[];
        protected __timeRangeDialog: TimeRangeDialog | null;
        __dialog: Dialog | null;
        __uploadedRecordsForActUser: any[] | null;
        __scopeConfigToFile: TcHmiScopeControl.ScopeConfig | null;
        protected __oldScopeConfig: TcHmiScopeControl.ScopeConfig | undefined;
        protected __errorPrompt: Helpers.TextAndButtonsPrompt<undefined> | null;
        protected __activeLegendElements: string[] | undefined;
        __serverSymbolsHelper: ServerSymbols;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __previnit(): void;
        /**
         * If raised, all attributes have been set to it's default or dom values.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __init(): void;
        /**
         * Returns the current value of the member variable replace.
         */
        getReplace(): boolean | undefined;
        /**
         * Delete all subscriptions, call Init function from scope extension and openConnection
         */
        protected __clearInit(): void;
        /**
         * Is raised if the init callback is raised.
         */
        protected __initCallback(): (result: Server.IResultObject) => void;
        /**
         * Is raised if the GetAllUploadedRecords or GetOwnUploadedRecords callback is raised.
         */
        protected __getUploadedRecordsCallback(): (result: Server.IResultObject) => void;
        /**
         * Is raised if the init callback is raised.
         */
        protected __eventRegisterDoneCallback(): (data: TcHmi.IResultObject) => void;
        /**
         * Is raised if the onInitChanged event is raised.
         */
        protected __initChanged(): (evt: EventProvider.Event) => void;
        /**
         * Is called by the system after the control instance gets part of the current DOM.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __attach(): void;
        /**
         * Is called by the system after the control instance is no longer part of the current DOM.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __detach(): void;
        /**
         * Destroy the current control instance.
         * Will be called automatically if system destroys control!
         */
        destroy(): void;
        /**
         * Add an element to be localized.
         * @param element The element.
         * @param key The localization key.
         * @param parameters Optional parameters to pass to tchmi_format_string.
         */
        __addOrUpdateLocalizedElement(element: HTMLElement, key: string, value?: string | null): void;
        /**
         * Remove a localized element.
         * @param key The key to remove.
         */
        __removeLocalizedElement(key: string): void;
        /**
         * Load theme resources for drawing the scope chart.
         */
        protected __loadThemedResources(): void;
        /**
         * Is raised if the control should be redrawn.
         */
        protected __onThemeDataChanged(): (evt: EventProvider.Event, ctrl?: Controls.System.TcHmiControl) => void;
        /**
         * Is raised if the control should be redrawn.
         */
        protected __onUserDataChanged(): (event: EventProvider.Event, data: any) => void;
        /**
         * Is raised if the extension state changed.
         */
        protected __onExtensionStateChanged(): (result: Server.IResultObject<Dictionary<TcHmi.Server.Domains.IDomainInfo>>) => void;
        /**
         * Is raised if scope events or thrown.
         */
        protected __scopeEventCallback(): (data: Server.Events.SubscriptionResult<TcHmiScopeControl.ScopeEventPayload>) => void;
        /**
         * Is raised if config events are thrown.
         */
        protected __configEventCallback(): (data: Server.Events.SubscriptionResult<TcHmiScopeControl.ConfigEventPayload>) => void;
        /**
         * Is raised if the control should be redrawn.
         */
        protected __rebuild(): (evt: EventProvider.Event, ctrl?: Controls.System.TcHmiControl) => void;
        /**
         * Is called if timespan or startTime changed.
         */
        protected __openWebsocket(): void;
        /**
         * Call OpenConnection.
         */
        protected __openConnection(): void;
        /**
         * Clear all lineCharts and the menubar with events etc.
         */
        protected __clearFullControl(): void;
        /**
         * Is raised if the requestDisplay callback is raised.
         */
        protected __connectionCallback(): (result: Server.IResultObject) => void;
        /**
         * Is raised if the requestDisplay callback is raised.
         */
        __setChartSizeCallback(): (result: Server.IResultObject) => void;
        /**
         * Delete subscriptions __subscriptionId and __subscriptionIdActualWindow.
         */
        protected __resubscribeMenubar(): void;
        /**
         * Is called from __onWebSocketOpen and after all interactions and called getData, getLayout and getWindow from Scope-Extension.
         */
        protected __resubscribeMenubarCallback(): (result: Server.IResultObject) => void;
        /**
         * Is called from __onWebSocketOpen and called GetMenubar from Scope-Extension.
         */
        protected __subscribeMenubar(): void;
        /**
         * Delete subscriptions __subscriptionIdTriggerWindow.
         */
        protected __unsubscribeTriggerWindow(): void;
        /**
         * Is called from __onWebSocketOpen and after all interactions and called getData, getLayout and getWindow from Scope-Extension.
         */
        protected __resubscribeTriggerWindowCallback(): (result: Server.IResultObject) => void;
        /**
         * Is called from showTriggerWindow attribute or the button in menubar and called GetTriggerWindow from Scope-Extension.
         */
        protected __subscribeTriggerWindow(): void;
        /**
         * Is raised if the requestDisplay callback is raised.
         */
        protected __getMenubarCallback(): (result: Server.IResultObject) => void;
        /**
         * Delete subscriptions __subscriptionId and __subscriptionIdActualWindow.
         */
        protected __resubscribe(changedServerInterval?: boolean): void;
        /**
         * Is called from __onWebSocketOpen and after all interactions and called getData, getLayout and getWindow from Scope-Extension.
         */
        protected __resubscribeGetDataCallback(): (result: Server.IResultObject) => void;
        /**
         * Called GetLayout, GetData and GetWindow from Scope-Extension.
         */
        protected __subscribeGetData(): void;
        /**
         * Is raised if __subscriptionIdActualWindow is unsubscribe.
         */
        protected __resubscribeActualWindowCallback(): (result: Server.IResultObject) => void;
        /**
         * Called GetActualWindow from Scope-Extension.
         */
        protected __subscribeActualWindow(): void;
        /**
         * Is raised if the requestDisplay callback is raised.
         */
        __getDataCallback(): (result: Server.IResultObject) => void;
        /**
         * Create a popup for error message.
         */
        __createErrorDialog(symbol: string, errorMessage?: string | null): void;
        /**
         * Is called initial and and if size changed.
         */
        protected __drawLineChart(drawOnlyOverview?: boolean): void;
        /**
         * Is called if onPressed event of start or stop button has raised.
         */
        private __onPressed;
        /**
         * Is called if onDataChanged event of datagrid has raised.
         */
        private __onTriggerDatagrid_DataChanged;
        /**
         * Is called if onPressed event of start or stop button has raised.
         */
        private __onUserInteractionFinished;
        /**
         * Created legend
         */
        __createLegend(legend: TcHmiScopeControl.LegendElement[] | undefined | null): void;
        /**
         * Created menuButtons from enableButtons/enableTimes
         */
        __createMenuButtons(enableButtons: ButtonsEnabled, enableTimes: TimesEnabled): void;
        /**
         * Calculated which menuButtons added to topMostLayer
         */
        __calcMenuButtons(): void;
        /**
         * Called the enableOrDisableMenuControls method.
         */
        enableOrDisableMenuControls(): void;
        /**
         * Set all menubuttons enabled or disabled
         */
        __enableOrDisableMenuControls(scopeState: string, live: boolean, undo: boolean, redo: boolean, chartType: ChartType): void;
        /**
         * Updated menuButtons and -Times
         */
        __updatedMenuValues(windowData: TcHmiScopeControl.Window | null): void;
        /**
         * Show options-div (with buttons which can not be shown)
         */
        showOptions(): void;
        /**
         * Transforms client coordinates of mouse and touch events into the coordinate system of the target element.
         * Respects translation and sscaling.
         * @param clientX The x coordinate.
         * @param clientY The y coodinate.
         * @param targetElement The target element.
         */
        protected __transformEventCoords(clientX: number, clientY: number, targetElement?: Element): {
            x: number;
            y: number;
        };
        /**
         * Is raised if mouseDown on legend.
         * @param e The event of mouseDown.
         */
        protected __onCheckboxMouseDown: (event: MouseEvent) => void;
        /**
         * Is raised if touchstart on legend.
         * @param e The event of touchstart.
         */
        protected __onCheckboxTouchStart: (event: TouchEvent) => void;
        /**
         * Is raised if mouseDown on canvasDrawing.
         * @param e The event of mouseDown.
         */
        protected __onMouseDown(): (e: MouseEvent) => void;
        /**
         * Is raised if mouseDown on canvasDrawing.
         * @param e The event of mouseDown.
         */
        protected __onMouseDownGlobal(): (e: MouseEvent) => void;
        /**
         * Is raised if mouseMove on document.
         * @param e The event of mouseMove.
         */
        protected __onMouseMove(): (e: MouseEvent) => void;
        /**
         * Is raised if mouseMove on control.
         * @param e The event of mouseMove.
         */
        protected __onMouseMoveChangeCursor(): (e: MouseEvent) => void;
        /**
         * Is raised if mouseMove on document.
         * @param e The event of mouseMove.
         */
        protected __onMouseMoveOverview(): (e: MouseEvent) => void;
        /**
         * Is raised if mouseUp on overview canvas.
         * @param e The event of mouseMove.
         */
        protected __onMouseUpOverview(): (e: MouseEvent) => void;
        /**
         * Is raised if mouseUp on document.
         * @param e The event of mouseDown.
         */
        protected __onMouseUp(): (e: MouseEvent) => void;
        /**
         * Is raised if mouseDown on canvasDrawing.
         * @param e The event of mouseWheel.
         */
        protected __onMouseWheel(): (e: WheelEvent) => void;
        /**
         * Is raised if touchStart on canvasDrawing.
         * @param e The event of touchStart.
         */
        protected __onTouchStart(): (e: TouchEvent) => void;
        /**
         * Is raised if touchMove on document.
         * @param e The event of touchMove.
         */
        protected __onTouchMove(): (e: TouchEvent) => void;
        /**
         * Is raised if touchEnd on document.
         * @param e The event of touchEnd.
         */
        protected __onTouchEnd(): (e: TouchEvent) => void;
        /**
         * Is called from onTouchStart and onMouseDown.
         * @param x The x coordinate of the mouse or touch.
         * @param y The y coordinate of the mouse or touch.
         */
        protected __userInteractionStart(x: number, y: number, position: number): void;
        /**
         * Is called from onTouchMove and onMouseMove.
         * @param x The x coordinate of the mouse or touch.
         * @param y The y coordinate of the mouse or touch.
         */
        protected __userInteractionMove(x: number, y: number): void;
        /**
         * Is called from onTouchEnd and onMouseUp.
         * Resets this.__drawing on canvas.
         * Zoom mode:    Clears the canvas.
         * Pan mode:     resets this.__drawing.
         */
        protected __userInteractionEnd(): void;
        /**
         * Is called from onTouchEnd and onMouseUp.
         * @param displayText The text for the tooltip
         * @param chartIndex The chart index
         * @param mousePosition The mouse position
         * @param timeout The timeout for showing the tooltip
         */
        protected __showTooltip(tooltipObj: TcHmiScopeControl.Tooltip): void;
        /**
         * Called the startRecord method from the scope extension.
         */
        startRecord(recordTime?: number): void;
        /**
         * Called the stopRecord method from the scope extension.
         */
        stopRecord(): void;
        /**
         * Called the startDisplay method from the scope extension.
         */
        startDisplay(): void;
        /**
         * Called the stopDisplay method from the scope extension.
         */
        stopDisplay(): void;
        /**
         * Called the zoomToDefault method from the scope extension.
         */
        zoomToDefault(): void;
        /**
         * Called the zoomOutMax method from the scope extension.
         */
        zoomOutMax(): void;
        /**
         * Called the goTo method from the scope extension.
         */
        goTo(goTo: string): void;
        /**
         * Called the setDisplayWidth method from the scope extension.
         */
        setDisplayWidth(displayWidth: string): void;
        /**
         * Called the scroll method from the scope extension.
         */
        scroll(direction: TcHmiScopeControl.Direction): void;
        /**
         * Called the scrollBig method from the scope extension.
         */
        scrollBig(direction: TcHmiScopeControl.Direction): void;
        /**
         * Called the undo method from the scope extension.
         */
        undo(): void;
        /**
         * Called the redo method from the scope extension.
         */
        redo(): void;
        /**
         * Called the setOverviewMode method from the scope extension.
         */
        setOverviewMode(): void;
        /**
         * Called the setMouseMode method from the scope extension.
         */
        setMouseMode(valueNew: MouseMode | keyof typeof MouseMode): void;
        /**
         * Return the mouseMode value.
         * @returns The current value of mouseMode.
         */
        getMouseMode(): "None" | "ZoomX" | "ZoomY" | "ZoomXY" | "PanX" | "PanY" | "PanXY" | null;
        /**
         * Sets the ScopeConfig.
         * @param valueNew The new value for ScopeConfig
         */
        setScopeConfig(valueNew: TcHmiScopeControl.ScopeConfig | null): void;
        /**
         * The watch callback for the yAxis object resolver.
         */
        protected __onResolverForScopeConfigWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiScopeControl.ScopeConfig>) => void;
        /**
         * Return the value of ScopeConfig
         * @returns The current value of scopeConfig.
         */
        getScopeConfig(): ScopeConfig | undefined;
        /**
         * Processes the current value of attribute ScopeConfig.
         */
        protected __processScopeConfig(): void;
        /**
         * Sets the server interval and calls the associated process function (processServerInterval).
         * @param valueNew The new value for server interval.
         */
        setServerInterval(valueNew: number | null): void;
        /**
         * Returns the current value of server interval.
         * @returns The current value of serverInterval.
         */
        getServerInterval(): number | undefined;
        /**
         * Processes the current server interval attribute value.
         */
        protected __processServerInterval(): void;
        /**
         * Sets the server domain for the extension
         * @param valueNew The new value for serverDomain
         */
        setServerDomain(valueNew: string | null): void;
        /**
         * Returns the value of serverDomain
         * @returns The current value of serverDomain.
         */
        getServerDomain(): string | undefined;
        /**
         * Processes the current value of attribute serverDomain.
         */
        protected __processServerDomain(): void;
        /**
         * Sets the enableRecordControls value and calls the associated process function (processEnableRecordControls).
         * @param valueNew The new value for enableRecordControls.
         */
        setEnableRecordControls(valueNew: boolean | null): void;
        /**
         * Returns the current value of enableRecordControls.
         * @returns The current value of enableRecordControls.
         */
        getEnableRecordControls(): boolean | undefined;
        /**
         * Processes the current enableRecordControls attribute value.
         */
        protected __processEnableRecordControls(): void;
        /**
         * Sets the ChartColorSource.
         * @param valueNew The new value for ChartColorSource
         */
        setChartColorSource(valueNew: ChartColorSource | keyof typeof ChartColorSource | null): void;
        /**
         * Returns the value of ChartColorSource
         * @returns The current value of chartColorSource.
         */
        getChartColorSource(): "ScopeConfig" | "Theme" | undefined;
        /**
         * Processes the current value of attribute ChartColorSource.
         */
        protected __processChartColorSource(): void;
        /**
         * Sets the TriggerWindowPosition.
         * @param valueNew The new value for TriggerWindowPosition
         */
        setTriggerWindowPosition(valueNew: TriggerWindowPosition | keyof typeof TriggerWindowPosition | null): void;
        /**
         * Returns the value of TriggerWindowPosition
         * @returns The current value of triggerWindowPosition.
         */
        getTriggerWindowPosition(): TriggerWindowPosition | undefined;
        /**
         * Processes the current value of attribute TriggerWindowPosition.
         */
        protected __processTriggerWindowPosition(): void;
        /**
         * Sets the showTriggerWindow value and calls the associated process function (processShowTriggerWindow).
         * @param valueNew The new value for showTriggerWindow.
         */
        setShowTriggerWindow(valueNew: boolean | null): void;
        /**
         * Returns the current value of showTriggerWindow.
         * @returns The current value of showTriggerWindow.
         */
        getShowTriggerWindow(): boolean | undefined;
        /**
         * Processes the current showTriggerWindow attribute value.
         */
        protected __processShowTriggerWindow(): void;
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl.Charting {
    class ScopeChart {
        /** The elementRoot as jquery object. */
        protected __elementRoot: JQuery;
        /** The canvas to drawing axis, grid and subgrid as HTMLCanvasElement. */
        protected __canvasFrame: HTMLCanvasElement | undefined;
        /** The canvas to drawing the lines as HTMLCanvasElement. */
        protected __canvasDrawing: HTMLCanvasElement | undefined;
        /** The canvas to drawing the lines as HTMLCanvasElement. */
        protected __canvasZooming: HTMLCanvasElement | undefined;
        /** The canvas to drawing the marker as HTMLCanvasElement. */
        protected __canvasMarker: HTMLCanvasElement | undefined;
        /** The canvas frame context as CanvasRenderingContext2D. */
        protected __contextFrame: CanvasRenderingContext2D | null | undefined;
        /** The canvas context drawing as CanvasRenderingContext2D. */
        protected __contextDrawing: CanvasRenderingContext2D | null | undefined;
        /** The canvas context drawing as CanvasRenderingContext2D. */
        protected __contextZooming: CanvasRenderingContext2D | null | undefined;
        /** The canvas context marker as CanvasRenderingContext2D. */
        protected __contextMarker: CanvasRenderingContext2D | null | undefined;
        /** The yAxis as YAxis[]. */
        protected __yAxis: Charting.YAxis[];
        /** The xAxis as XAxis object. */
        protected __xAxis: XAxis[];
        /** The grid as Grid object. */
        protected __grid: Grid[];
        /** The subgrid as Subgrid object. */
        protected __subgrid: Subgrid[];
        /** The trigger as Trigger object */
        protected __trigger: Trigger[];
        /** The xyTrigger as Trigger object */
        protected __xyTrigger: XYTrigger[];
        /** The xyTrigger as Trigger object */
        protected __axisGroupForegroundColor: string;
        /** The lineGraphs as LineGraph object. */
        protected __lineGraph: Map<string, Beckhoff.TcHmiScopeControl.Charting.LineGraph>;
        /** The hasChanged as boolean. */
        private __hasChanged;
        /** The lineChanged as boolean. */
        protected __lineChanged: boolean;
        /**
         * Creates a new ScopeChart.
         * @param elementRoot The root element where the canvas elements added to.
         */
        constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number);
        /**
         * Adds a xAxis (only one xAxis are exists).
         * @returns The hasChanged attribute.
         */
        addXAxis(xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): XAxis | null;
        /**
         * Adds a xAxis at index.
         * @param index The index where the new xAxis should added in array.
         */
        addXAxisAtPosition(index: number, xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): void;
        /**
         * Delete the xAxis at index.
         * @param index The index.
         */
        deleteXAxis(index: number): void;
        /**
         * Delete all xAxis.
         */
        deleteAllXAxis(): void;
        /**
         * Adds a yAxis.
         */
        addYAxis(yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): void;
        /**
         * Adds a yAxis at index.
         * @param index The index where the new yAxis should added in array.
         */
        addYAxisAtPosition(index: number, yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): void;
        /**
         * Delete the yAxis at index.
         * @param index The index.
         */
        deleteYAxis(index: number): void;
        /**
         * Delete all yAxis.
         */
        deleteAllYAxis(): void;
        /**
         * Adds a grid.
         */
        addGrid(xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, gridSize: {
            dimensions: TcHmiScopeControl.Dimensions;
            position: TcHmiScopeControl.Position;
        }, themeResourcesGridColor: string | null): void;
        /**
         * Adds a grid at index.
         * @param index The index where the new grid should added in array.
         */
        addGridAtPosition(index: number, xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, gridSize: {
            dimensions: TcHmiScopeControl.Dimensions;
            position: TcHmiScopeControl.Position;
        }, themeResourcesGridColor: string | null): void;
        /**
         * Delete the grid at index.
         * @param index The index.
         */
        deleteGrid(index: number): void;
        /**
         * Delete all xAxis.
         */
        deleteAllGrids(): void;
        /**
         * Adds a subgrid.
         */
        addSubgrid(xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, gridSize: {
            dimensions: TcHmiScopeControl.Dimensions;
            position: TcHmiScopeControl.Position;
        }, themeResourcesSubgridColor: string | null): void;
        /**
         * Adds a subgrid at index.
         * @param index The index where the new subgrid should added in array.
         */
        addSubgridAtPosition(index: number, xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, gridSize: {
            dimensions: TcHmiScopeControl.Dimensions;
            position: TcHmiScopeControl.Position;
        }, themeResourcesSubgridColor: string | null): void;
        /**
         * Delete the subgrid at index.
         * @param index The index.
         */
        deleteSubgrid(index: number): void;
        /**
         * Delete all xAxis.
         */
        deleteAllSubgrids(): void;
        /**
         * Adds a __trigger.
         */
        addTrigger(triggerData: TcHmiScopeControl.TriggerData | null): void;
        /**
         * Adds a __trigger at index.
         * @param index The index where the new __trigger should added in array.
         */
        addTriggerAtPosition(index: number, triggerData: TcHmiScopeControl.TriggerData | null): void;
        /**
         * Delete the __trigger at index.
         * @param index The index.
         */
        deleteTrigger(index: number): void;
        /**
         * Delete all trigger.
         */
        deleteAllTriggers(): void;
        /**
         * Adds a xyTrigger.
         */
        addXYTrigger(xyTriggerData: TcHmiScopeControl.XYTriggerData | null): void;
        /**
         * Adds a xyTrigger at index.
         * @param index The index where the new __trigger should added in array.
         */
        addXYTriggerAtPosition(index: number, xyTriggerData: TcHmiScopeControl.XYTriggerData | null): void;
        /**
         * Delete the xyTrigger at index.
         * @param index The index.
         */
        deleteXYTrigger(index: number): void;
        /**
         * Delete all xyTrigger.
         */
        deleteAllXYTriggers(): void;
        /**
         * Adds a linegraph.
         */
        addLineGraph(graphLayout: TcHmiScopeControl.ScopeGraphLayout | null, gridSize: {
            dimensions: TcHmiScopeControl.Dimensions;
            position: TcHmiScopeControl.Position;
        }): void;
        /**
         * Delete all linegtaphs.
         */
        deleteAllLineGraphs(): void;
        /**
         * Removes all canvas elements.
         */
        remove(): void;
        /**
         * Clears all canvas elements.
         */
        clear(width: number, height: number): void;
        /**
         * Returns all yAxis.
         * @returns The yAxis.
         */
        getYAxis(): YAxis[];
        /**
         * Returns the specific yAxis.
         * @param index The index.
         * @returns The yAxis at index.
         */
        getYAxisAtPosition(index: number): YAxis;
        /**
         * Returns all xAxis.
         * @returns The xAxis.
         */
        getXAxis(): XAxis[];
        /**
         * Returns the specific xAxis.
         * @param index The index.
         * @returns The xAxis at index.
         */
        getXAxisAtPosition(index: number): XAxis;
        /**
         * Returns the grid.
         * @returns The grid.
         */
        getGrid(): Grid[];
        /**
         * Returns the specific grid.
         * @param index The index.
         * @returns The grid at index.
         */
        getGridAtPosition(index: number): Grid;
        /**
         * Returns the subgrid.
         * @returns The subgrid.
         */
        getSubgrid(): Subgrid[];
        /**
         * Returns the specific subgrid.
         * @param index The index.
         * @returns The subgrid at index.
         */
        getSubgridAtPosition(index: number): Subgrid;
        /**
         * Returns the specific trigger.
         * @param index The index.
         * @returns The trigger at index.
         */
        getTriggerAtPosition(index: number): Trigger;
        /**
         * Returns the trigger.
         * @returns The trigger.
         */
        getTrigger(): Trigger[];
        /**
         * Returns the specific xyTrigger.
         * @param index The index.
         * @returns The xyTrigger at index.
         */
        getXYTriggerAtPosition(index: number): XYTrigger;
        /**
         * Returns all xyTrigger.
         * @returns The xyTrigger.
         */
        getXYTrigger(): XYTrigger[];
        /**
         * Returns the linegraph.
         * @returns The linegraph.
         */
        getLineGraph(): Map<string, LineGraph>;
        /**
         * Returns the specific lineGraph.
         * @param index The index.
         * @returns The linegraph at index.
         */
        getLineGraphWithName(name: string): LineGraph | undefined;
        /**
         * Returns the canvas object where the graphs are drawing.
         * @returns The canvas where drawing the graphs.
         */
        getCanvasDrawing(): HTMLCanvasElement | undefined;
        /**
         * Returns the canvas object where the axis, grid and subgrid are drawing.
         * @returns The canvas where drawing axis, grid and subgrid.
         */
        getCanvasFrame(): HTMLCanvasElement | undefined;
        /**
         * Returns the canvas object where you can make interactions.
         * @returns The canvas for interactions.
         */
        getCanvasZooming(): HTMLCanvasElement | undefined;
        /**
         * Returns the canvas object where the marker are drawing.
         * @returns The canvas where drawing marker.
         */
        getCanvasMarker(): HTMLCanvasElement | undefined;
        /**
         * Returns the hasChanged attribute which saved if axis, grid and subgrid must be redrawing.
         * @returns The hasChanged attribute.
         */
        getHasChanged(): boolean;
        /**
         * Creates the canvas where axis, grid and subgrid are drawing.
         */
        __initCanvas(canvasWidth: number, canvasHeight: number): void;
        /**
         * Sets the hasChanged.
         * @param hasChanged The hasChanged attribute.
         */
        setHasChanged(hasChanged: boolean): void;
        /**
         * Sets the lineChanged which saved if graphs must be redrawing.
         * @param lineChanged The lineChanged attribute.
         */
        setLineChanged(lineChanged: boolean): void;
        /**
         * Sets the axisGroupForegroundColor.
         * @param axisGroupForegroundColor The axisGroupForegroundColor attribute.
         */
        setAxisGroupForegroundColor(axisGroupForegroundColor: string): void;
        /**
         * Draws the lineChart if anything is changed.
         */
        draw(layout: TcHmiScopeControl.ScopeLayoutChart, themeResourcesCanvasColor: string | null): void;
    }
    namespace ScopeChart {
        enum LineStyle {
            Dotted = 0,
            Dashed = 1,
            Solid = 2
        }
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl.Charting {
    class Grid {
        /** The canvas as HTMLCanvasElement. */
        protected __canvas: HTMLCanvasElement;
        /** The canvas context as CanvasRenderingContext2D. */
        protected __context: CanvasRenderingContext2D | null;
        /** The layout for the xAxis. */
        protected __xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null;
        /** The layout for the yAxis. */
        protected __yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null;
        /** The gridSize. */
        protected __gridSize: {
            dimensions: TcHmiScopeControl.Dimensions;
            position: TcHmiScopeControl.Position;
        } | null;
        /** The themeResourcesSubgridColor as string. */
        protected __themeResourcesGridColor: string | null;
        /**
         * Creates a new Grid.
         * @param canvas The canvas element where drawing the grid.
         */
        constructor(canvas: HTMLCanvasElement, xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, gridSize: {
            dimensions: TcHmiScopeControl.Dimensions;
            position: TcHmiScopeControl.Position;
        }, themeResourcesGridColor: string | null);
        /**
         * Draws the grid to the canvas.
         * @param startPoint The startpoint to drawing (bottom/left).
         * @param width The width of the grid.
         * @param height The height of the grid.
         * @param numberOfWidthLines The number of width lines.
         * @param numberOfHeightLines The number of height lines.
         * @param drawingBorder The border (bigger than grid) of all sites.
         */
        draw(): void;
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl.Charting {
    class Subgrid {
        /** The canvas as HTMLCanvasElement. */
        protected __canvas: HTMLCanvasElement;
        /** The canvas context as CanvasRenderingContext2D. */
        protected __context: CanvasRenderingContext2D | null;
        /** The layout for the xAxis. */
        protected __xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null;
        /** The layout for the yAxis. */
        protected __yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null;
        /** The gridSize. */
        protected __gridSize: {
            dimensions: TcHmiScopeControl.Dimensions;
            position: TcHmiScopeControl.Position;
        } | null;
        /** The themeResourcesSubgridColor as string. */
        protected __themeResourcesSubgridColor: string | null;
        /**
         * Creates a new Grid.
         * @param canvas The canvas element where drawing the grid.
         */
        constructor(canvas: HTMLCanvasElement, xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, gridSize: {
            dimensions: TcHmiScopeControl.Dimensions;
            position: TcHmiScopeControl.Position;
        }, themeResourcesSubgridColor: string | null);
        /**
         * Draws the subgrid to the canvas.
         * @param startPoint The startpoint to drawing (bottom/left).
         * @param width The width of the subgrid.
         * @param height The height of the subgrid.
         * @param numberOfLinesBetweenMainGridWidth The number of lines between maingrid in width.
         * @param widthBetweenMainGrid The width between two main grid lines.
         * @param numberOfLinesBetweenMainGridHeight The number of lines between maingrid in height.
         * @param heightBetweenMainGrid The height between two main grid lines.
         * @param numberOfMainGridWidthLines The number of main grid width lines.
         * @param numberOfMainGridHeightLines The number of main grid height lines.
         * @param gridLineWidth The line width of the grid.
         * @param drawingBorder The border (bigger than grid) of all sites.
         */
        draw(): void;
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl.Charting {
    class XAxis {
        /** The labelFontFamily as string. */
        protected __labelFontFamily: TcHmi.FontFamily | null;
        /** The labelFontSize as number. */
        protected __labelFontSize: number | null;
        /** The labelFontSizeUnit as string. */
        protected __labelFontSizeUnit: TcHmi.FontSizeUnit | null;
        /** The labelFontWeight as string. */
        protected __labelFontWeight: TcHmi.FontWeight | null;
        /** The axisNameFontFamily as string. */
        protected __axisNameFontFamily: TcHmi.FontFamily | null;
        /** The axisNameFontSize as number. */
        protected __axisNameFontSize: number | null;
        /** The axisNameFontSizeUnit as string. */
        protected __axisNameFontSizeUnit: TcHmi.FontSizeUnit | null;
        /** The axisNameFontWeight as string. */
        protected __axisNameFontWeight: TcHmi.FontWeight | null;
        /** The layout for the axis. */
        protected __xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null;
        /** The id as number. */
        protected __id: number;
        /** The canvas element as HTMLCanvasElement. */
        protected __canvas: HTMLCanvasElement;
        /** The canvas context as CanvasRenderingContext2D. */
        protected __context: CanvasRenderingContext2D | null;
        /** The themeResourcesHeadlineColor as string. */
        protected __themeResourcesHeadlineColor: string | null;
        /** The themeResourcesAxisColor as string. */
        protected __themeResourcesAxisColor: string | null;
        /**
         * Creates a new YAxis.
         * @param id The number of yAxis.
         * @param canvas The canvas element where drawing the grid.
         * @param xAxisLayout The xAxis layout.
         */
        constructor(id: number, canvas: HTMLCanvasElement, xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null);
        /**
         * Draws the xAxis to the canvas.
         * @param startPoint The startpoint to drawing (bottom/left).
         * @param endPoint The endpoint to drawing (top/right).
         */
        drawAxis(): void;
        /**
         * Returns the id.
         * @returns The id of the axis.
         */
        getId(): number;
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl.Charting {
    class YAxis {
        /** The labelFontFamily as string. */
        protected __labelFontFamily: TcHmi.FontFamily | null;
        /** The labelFontSize as number. */
        protected __labelFontSize: number | null;
        /** The labelFontSizeUnit as string. */
        protected __labelFontSizeUnit: TcHmi.FontSizeUnit | null;
        /** The labelFontWeight as string. */
        protected __labelFontWeight: TcHmi.FontWeight | null;
        /** The axisNameFontFamily as string. */
        protected __axisNameFontFamily: TcHmi.FontFamily | null;
        /** The axisNameFontSize as number. */
        protected __axisNameFontSize: number | null;
        /** The axisNameFontSizeUnit as string. */
        protected __axisNameFontSizeUnit: TcHmi.FontSizeUnit | null;
        /** The axisNameFontWeight as string. */
        protected __axisNameFontWeight: TcHmi.FontWeight | null;
        /** The layout for the axis. */
        protected __yAxisLayout: ScopeLayoutAxis | null;
        /** The id as number. */
        protected __id: number;
        /** The canvas element as HTMLCanvasElement. */
        protected __canvas: HTMLCanvasElement;
        /** The canvas context as CanvasRenderingContext2D. */
        protected __context: CanvasRenderingContext2D | null;
        /** The themeResourcesHeadlineColor as string. */
        protected __themeResourcesHeadlineColor: string | null;
        /** The themeResourcesAxisColor as string. */
        protected __themeResourcesAxisColor: string | null;
        /**
         * Creates a new YAxis.
         * @param id The number of yAxis.
         * @param canvas The canvas element where drawing the grid.
         * @param xAxisLayout The yAxis layout.
         */
        constructor(id: number, canvas: HTMLCanvasElement, yAxisLayout: ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null);
        /**
         * Draws the yAxis to the canvas.
         * @param startPoint The startpoint to drawing (bottom/left).
         * @param endPoint The endpoint to drawing (top/right).
         * @param showOnlyYAxis Only y Axis is drawing..
         */
        drawAxis(): void;
        /**
         * Returns the id.
         * @returns The id of the axis.
         */
        getId(): number;
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl.Charting {
    class Trigger {
        /** The axisNameFontFamily as string. */
        protected __fontFamily: TcHmi.FontFamily | null;
        /** The axisNameFontSize as number. */
        protected __fontSize: number | null;
        /** The axisNameFontSizeUnit as string. */
        protected __fontSizeUnit: TcHmi.FontSizeUnit | null;
        /** The axisNameFontWeight as string. */
        protected __fontWeight: TcHmi.FontWeight | null;
        /** The canvas element as HTMLCanvasElement. */
        protected __canvas: HTMLCanvasElement;
        /** The canvas context as CanvasRenderingContext2D. */
        protected __context: CanvasRenderingContext2D | null;
        /** The positions for the marker */
        protected __triggerData: TcHmiScopeControl.TriggerData | null;
        /**
         * Creates a new YAxis.
         * @param canvas The canvas element where drawing the grid.
         * @param markerLayout The marker layout.
         */
        constructor(canvas: HTMLCanvasElement, triggerData: TcHmiScopeControl.TriggerData | null);
        /**
         * Draws the marker to the canvas.
         */
        draw(): void;
        /**
         * Returns the calculated label.
         * @returns The calculated label.
         */
        private getCuttedString;
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl.Charting {
    class XYTrigger {
        /** The axisNameFontFamily as string. */
        protected __fontFamily: TcHmi.FontFamily | null;
        /** The axisNameFontSize as number. */
        protected __fontSize: number | null;
        /** The axisNameFontSizeUnit as string. */
        protected __fontSizeUnit: TcHmi.FontSizeUnit | null;
        /** The axisNameFontWeight as string. */
        protected __fontWeight: TcHmi.FontWeight | null;
        /** The canvas element as HTMLCanvasElement. */
        protected __canvas: HTMLCanvasElement;
        /** The canvas context as CanvasRenderingContext2D. */
        protected __context: CanvasRenderingContext2D | null;
        /** The positions for the marker */
        protected __xyTriggerData: TcHmiScopeControl.XYTriggerData | null;
        /**
         * Creates a new YAxis.
         * @param canvas The canvas element where drawing the grid.
         * @param markerLayout The marker layout.
         */
        constructor(canvas: HTMLCanvasElement, triggerData: TcHmiScopeControl.XYTriggerData | null);
        /**
         * Draws the marker to the canvas.
         */
        draw(): void;
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl.Charting {
    class LineGraph {
        /** The canvas as HTMLCanvasElement. */
        protected __canvas: HTMLCanvasElement | undefined;
        /** The canvas context as CanvasRenderingContext2D. */
        protected __context: CanvasRenderingContext2D | null;
        /** The points for the graph. */
        protected __points: LineGraph.Point[] | null;
        /** The point value from zero points for the graph. */
        protected __zeroPoint: TcHmiScopeControl.Position | null;
        /** The point value from zero points for the graph. */
        protected __lineSeries: TcHmiScopeControl.LineSeries[] | null;
        /** The layout for the graph. */
        protected __graphLayout: TcHmiScopeControl.ScopeGraphLayout | null;
        /** The size for the grid. */
        protected __gridSizeLayout: {
            dimensions: TcHmiScopeControl.Dimensions;
            position: TcHmiScopeControl.Position;
        };
        /**
         * Creates a new LineGraph.
         * @param canvas The optional canvas element to drawing.
         */
        constructor(canvas: HTMLCanvasElement, graphLayout: TcHmiScopeControl.ScopeGraphLayout | null, gridSize: {
            dimensions: TcHmiScopeControl.Dimensions;
            position: TcHmiScopeControl.Position;
        });
        /**
         * Draws the lineGraph to the canvas.
         */
        draw(): void;
        /**
         * Draws the line from start to end with the current lineState.
         * @param start The index of the first element in the line.
         * @param end The index of the last element in the line.
         * @param current The current lineState of the line.
         */
        private __renderLineSegment;
        /**
         * Draws the mark from start to end with the current markState.
         * @param start The index of the first element in the line.
         * @param end The index of the last element in the line.
         * @param current The current lineState of the line.
         */
        private __renderMarkSegment;
        /**
         * Draws the fill area from start to end with the current fillState.
         * @param start The index of the first element in the line.
         * @param end The index of the last element in the line.
         * @param current The current lineState of the line.
         */
        private __renderFillSegment;
        /**
         * Sets the points.
         * @param points The new points.
         */
        setPoints(points: LineGraph.Point[]): void;
        /**
         * Sets the zeroPoint.
         * @param zeroPoint The new zeroPoint value.
         */
        setZeroPoint(zeroPoint: TcHmiScopeControl.Position): void;
        /**
         * Sets the lineSeries.
         * @param lineSeries The new lineSeries value.
         */
        setLineSeries(lineSeries: TcHmiScopeControl.LineSeries[]): void;
    }
    namespace LineGraph {
        interface Point {
            x: number;
            y: number;
        }
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl {
    /**
     * A basic dialog.
     */
    class Dialog {
        /**
         * Creates a new Dialog.
         * @param element The HTML element that hosts the dialog.
         * @param control The control that has the dialog.
         */
        constructor(element: HTMLElement, control: TcHmiScopeControl);
        protected __parentControl: TcHmiScopeControl;
        protected __element: HTMLElement;
        protected __elementChunkSizeRow: HTMLTableRowElement;
        protected __noFile: HTMLSpanElement;
        protected __elementCharts: JQuery;
        protected __elementProgressbar: HTMLProgressElement;
        protected __toggleSwitch: TcHmiToggleSwitch;
        protected __persistCheckbox: TcHmiCheckbox;
        protected __chunksizeTextbox: TcHmiTextbox;
        protected __file: File | null;
        protected __uploadedRecordsDatagrid: TcHmiDatagrid;
        protected __chartsCombobox: TcHmiCombobox<string>;
        protected __deleteSelectedButton: TcHmiButton;
        protected __saveButton: TcHmiButton;
        protected __fileButton: TcHmiButton;
        protected __uploadButton: TcHmiButton;
        protected __detachButton: TcHmiButton;
        protected __eventDestroyers: DestroyFunction[];
        protected __isShowing: boolean;
        protected __isWaitingForServer: boolean;
        protected __confirmationPrompt: Helpers.TextAndButtonsPrompt<boolean> | null;
        protected __replacePrompt: ReplacePrompt | null;
        protected attachedGuid: string | null;
        /**
         * Shows the dialog.
         */
        show(): void;
        /**
         * Hides the dialog.
         */
        hide(): void;
        /**
         * Add Charts (from record file) to combobox.
         */
        addChartsToCombobox(chartArray: string[]): void;
        /**
         * Show chart dialog.
         */
        showChartsDialog(): void;
        /**
         * Close chart dialog.
         */
        closeChartsDialog(): void;
        /**
         * Destroys the dialog and all its controls.
         */
        destroy(): void;
        /**
         * Disable all buttons in control.
         */
        disableAllButtons(): void;
        /**
         * Enable all buttons in control.
         */
        enableAllButtons(): void;
        /**
         * Clear all content tabs.
         */
        resetToDefault(): void;
        /**
         * Handles the tabChanged event of a content tab.
         */
        protected __onTabChanged: (tabIndex: string) => void;
        /**
         * Set guid of attached file.
         * @param tabIndex The tabIndex of content tabs
         */
        setAttachedGuid(guid: string | null): void;
        /**
         * Set srcData of records datagrid.
         * @param tabIndex The srcData
         */
        setSrcDataOfRecordsDatagrid(srcData: any[] | null): void;
        /**
         * Handles the pressed event of a button.
         */
        protected __onButtonPressed(hide: boolean, id: string | undefined): void;
        /**
         * Handles the onDataChanged event of datagrid.
         */
        protected __onDataChanged(): (evt: EventProvider.Event, value: {
            index: number;
            property: string;
            value: any;
        }) => void;
        /**
         * Handles the onToggleStateChanged event of toggleSwitch.
         */
        protected __onToggleStateChanged(): () => void;
        /**
         * Prompt the user to confirm if they really want to delete, then delete the given items from the server.
         */
        protected __delete(): Promise<void>;
        /**
         * Prompt the user to replace or increment the file.
         */
        replaceOrIncrementCurrentRecord(): Promise<{
            result: "replace" | "increment";
            saveResult: boolean;
        } | {
            result: "cancel";
        }>;
        /**
         * Return the isShowing value.
         * @returns The current value of isShowing.
         */
        isShowing(): boolean;
        /**
         * Return the isWaitingForServer value.
         * @returns The current value of isWaitingForServer.
         */
        getIsWaitingForServer(): boolean;
        /**
         * Set isWaitingForServer.
         * @param isWaitingForServer The new value for isWaitingForServer
         */
        setIsWaitingForServer(isWaitingForServer: boolean): void;
        /**
         * Set progressbar value.
         * @param newValue The new value for progressbar
         */
        setProgressbarValue(newValue: number): void;
        /**
         * Set progressbar max value.
         * @param maxValue The new max value for progressbar
         */
        setProgressbarMaxValue(maxValue: number): void;
        /**
         * Return the progressbar value.
         * @returns The current value of progressbar.
         */
        getProgressbarValue(): number;
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl {
    class ReplacePrompt extends TcHmi.Controls.Helpers.Popup<{
        result: 'replace' | 'increment';
        saveResult: boolean;
    } | {
        result: 'cancel';
    }> {
        protected __parentControl: TcHmi.Controls.System.TcHmiControl;
        protected __cancelButton: Beckhoff.TcHmiButton;
        protected __replaceButton: Beckhoff.TcHmiButton;
        protected __incrementButton: Beckhoff.TcHmiButton;
        protected __saveToggleSwitch: Beckhoff.TcHmiToggleSwitch;
        protected __backgroundAction: Helpers.Popup.BackgroundAction<ReplacePrompt.AvailableActions>;
        protected __closeButton: Helpers.Popup.CloseButton<ReplacePrompt.AvailableActions>;
        /**
         * Creates a new ReplacePrompt instance.
         * @param localizations A collection of localization symbol expressions to localize texts in the control.
         * @param parentControl The control which owns the popup.
         */
        constructor(parentControl: TcHmi.Controls.System.TcHmiControl);
        /**
         * Destroys the popup and all its controls.
         * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
         */
        destroy(force?: boolean): void;
        /**
         * Aborts a prompted popup and performs the given action to answer the prompt. If no action is specified, the promise is rejected.
         * @param action The action to perform to answer the prompt.
         */
        abort(action?: Helpers.Popup.PromptAction<ReplacePrompt.AvailableActions>): void;
        /**
         * Handler for the onPressed event of the Cancel button.
         */
        protected __onCancelPressed: () => void;
        /**
         * Handler for the onPressed event of the Replace button.
         */
        protected __onReplacePressed: () => void;
        /**
         * Handler for the onPressed event of the increment button.
         */
        protected __onIncrementPressed: () => void;
        /**
         * Performs the action for the cancel button, i.e. calling prompt.answer(). Must be implemented by inheriting class.
         */
        protected __cancel(): void;
        /**
         * Performs the action for the Replace button, i.e. calling prompt.answer(). Must be implemented by inheriting class.
         */
        protected __replace(): void;
        /**
         * Performs the action for the increment button.
         */
        protected __increment(): void;
        /**
         * Sets what happens when the user clicks the background while the popup is showing.
         * @param action The action to perform when the user clicks the background. If the popup should be closed,
         * you can specify replace or increment to perform the associated action.
         */
        setBackgroundAction(action: Helpers.Popup.BackgroundAction<ReplacePrompt.AvailableActions>): void;
        /**
         * Sets if the close button should be used or not.
         * @param button Defines whether to show the button and if yes, what action should be taken to answer the prompt.
         */
        setCloseButton(button: Helpers.Popup.CloseButton<ReplacePrompt.AvailableActions>): void;
        /**
         * Sets if the close button should be used or not.
         * @param show Defines whether to show the button.
         */
        setCloseButton(show: boolean): void;
        /**
         * Performs the background action.
         */
        protected __performPromptAction(toPerform: Helpers.Popup.PromptAction<ReplacePrompt.AvailableActions>): void;
        /**
         * Sets localizable texts to the given localization symbols.
         * @param texts A collection of localization symbol expressions.
         */
        setLocalizations(texts: Partial<ReplacePrompt.LocalizableTexts>): void;
    }
    namespace ReplacePrompt {
        interface LocalizableTexts {
            headerText: Localizable;
            contentText: Localizable;
            buttonTextCancel: Localizable;
            buttonTextReplace: Localizable;
            buttonTextIncrement: Localizable;
            toggleSwitchTextSave: Localizable;
        }
        type AvailableActions = 'replace' | 'increment' | 'cancel';
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl {
    /**
     * A basic dialog.
     */
    class TimeRangeDialog {
        /**
         * Creates a new Dialog.
         * @param element The HTML element that hosts the dialog.
         * @param control The control that has the dialog.
         */
        constructor(element: HTMLElement, control: TcHmiScopeControl);
        protected __parentControl: TcHmiScopeControl;
        protected __element: HTMLElement;
        protected __elementLoading: HTMLDivElement;
        protected __elementList: HTMLUListElement;
        protected __elementRecordTimespanControl: HTMLDivElement;
        protected __elementSliderTemplate: HTMLDivElement;
        protected __elementSliderValue: HTMLDivElement;
        protected __elementSliderValueText: HTMLDivElement;
        protected __elementSliderMin: HTMLDivElement;
        protected __elementSliderMax: HTMLDivElement;
        protected __elementNoDataText: HTMLDivElement;
        protected __elementLoadingOverlay: HTMLDivElement;
        protected __data: TcHmiScopeControl.AnalyticsData[];
        protected __activeData: TimeRangeDialog.SelectedAnalyticsData | null;
        protected __isShowing: boolean;
        protected __eventDestroyers: DestroyFunction[];
        protected __listElements: TcHmiScopeControl.AnalyticsData[];
        protected __datetimeStart: TcHmiDateTimeInput;
        protected __datetimeEnd: TcHmiDateTimeInput;
        protected __intervalTime: TcHmiTextblock;
        protected __applyButton: TcHmiButton;
        protected __refreshButton: TcHmiButton;
        protected __cancelButton: TcHmiButton;
        /** Event handlers */
        protected __mousedownHandler: (event: MouseEvent) => void;
        protected __touchstartHandler: (event: TouchEvent) => void;
        protected __mousemoveHandler: (event: MouseEvent) => void;
        protected __touchmoveHandler: (event: TouchEvent) => void;
        protected __mouseupHandler: (event: MouseEvent) => void;
        protected __touchendHandler: (event: TouchEvent) => void;
        protected __ignoreDateTimeInputEvents: boolean;
        protected __draggingInfo: {
            isDragging: boolean;
            draggingElem: HTMLDivElement | null;
            offsetLeft: number;
            startPositionX: number;
        };
        protected __textFontStyle: string;
        /** LoadingSpinner */
        protected __loadingSpinner: Element | null;
        /**
         * Shows the dialog.
         */
        show(): void;
        /**
         * Hides the dialog.
         */
        hide(): void;
        /**
         * Destroys the dialog and all its controls.
         */
        destroy(): void;
        /**
         * Return the isShowing value.
         * @returns The current value of isShowing.
         */
        isShowing(): boolean;
        /**
         * Add data to the dialog.
         */
        addData(data: TcHmiScopeControl.AnalyticsData[]): void;
        /**
         * Function to calculate the slider and timespan from start value and end value.
         */
        private __calcValuesFromSlider;
        /**
         * Function to calculate the start value, end value and timespan when the user interacts with the slider.
         */
        private __calcSliderFromValues;
        private __getTextWidth;
        private __setRoundedValueText;
        private __calcRoundedValue;
        /**
         * Is called if onPressed event from cancel button has raised.
         */
        private __onCancelPressed;
        /**
         * Is called if onPressed event from refresh button has raised.
         */
        private __onRefreshPressed;
        /**
         * Is called if onPressed event from apply button has raised.
         */
        private __onApplyPressed;
        /**
         * Is called if onValueChanged event from dateTimePickerStart has raised.
         */
        private __onValueChangedStart;
        /**
         * Is called if onValueChanged event from dateTimePickerEnd has raised.
         */
        private __onValueChangedEnd;
        /**
         * Is raised if mouseDown on slider.
         * @param e The event of mouseDown.
         */
        protected __onMouseDownList(): (evt: MouseEvent) => void;
        /**
         * Is raised if mouseDown on slider.
         * @param e The event of mouseDown.
         */
        protected __onMouseDown(): (e: MouseEvent) => void;
        /**
         * Is raised if touchStart on slider.
         * @param e The event of touchStart.
         */
        protected __onTouchStart(): (e: TouchEvent) => void;
        /**
         * Is raised if mouseMove on slider.
         * @param e The event of mouseDown.
         */
        protected __onMouseMove(): (e: MouseEvent) => void;
        /**
         * Is raised if touchMove on slider.
         * @param e The event of touchMove.
         */
        protected __onTouchMove(): (e: TouchEvent) => void;
        /**
         * Is raised if mouseUp on slider.
         * @param e The event of mouseDown.
         */
        protected __onMouseUp(): (e: MouseEvent) => void;
        /**
         * Is raised if touchEnd on slider.
         * @param e The event of touchEnd.
         */
        protected __onTouchEnd(): (e: TouchEvent) => void;
    }
    namespace TimeRangeDialog {
        interface SelectedAnalyticsData {
            id: number;
            name: string;
            startTime: string;
            endTime: string;
            startTimeNow: string;
            endTimeNow: string;
        }
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl {
    class ServerSymbols {
        /**
         * Creates a new ServerSymbol helper class.
         * @param scopeControl The parent scope control.
         */
        constructor(scopeControl: TcHmiScopeControl);
        protected __parentControl: TcHmiScopeControl;
        protected __fileUploader: FileUploader | null;
        /**
         * Called the setChartSize method from the scope extension.
         */
        setChartSize(setLoadingSpinner: boolean): void;
        /**
         * Called the startRecord method from the scope extension.
         */
        startRecord(recordTime?: number): void;
        /**
         * Called the stopRecord method from the scope extension.
         */
        stopRecord(): void;
        /**
         * Called the startDisplay method from the scope extension.
         */
        startDisplay(): void;
        /**
         * Called the stopDisplay method from the scope extension.
         */
        stopDisplay(): void;
        /**
         * Called the startRecord method from the scope extension.
         */
        __getDataAsRequest(): void;
        /**
         * Called the setDisplayWidth method from the scope extension.
         */
        setDisplayWidth(displayWidth: string): void;
        /**
         * Called the scroll method from the scope extension.
         */
        scroll(direction: TcHmiScopeControl.Direction): void;
        /**
         * Called the scrollBig method from the scope extension.
         */
        scrollBig(direction: TcHmiScopeControl.Direction): void;
        /**
         * Called the goTo method from the scope extension.
         */
        goTo(goTo: string): void;
        /**
         * Called the undo method from the scope extension.
         */
        undo(): void;
        /**
         * Called the undo method from the scope extension.
         */
        redo(): void;
        /**
         * Called the zoomToDefault method from the scope extension.
         */
        zoomToDefault(): void;
        /**
         * Called the zoomOutMax method from the scope extension.
         */
        zoomOutMax(): void;
        /**
         * Called the setOverviewMode method from the scope extension.
         */
        setOverviewMode(): void;
        /**
         * Set the mouseMode for interactions.
         */
        setMouseMode(valueNew: MouseMode | keyof typeof MouseMode): void;
        /**
         * Called the changeChannelState method from the scope extension.
         */
        changeChannelState(id: string, state: boolean): void;
        /**
         * Is called from onPressed for download the scope record file.
         */
        __downloadScopeRecord(element?: {
            userName: string;
            extensionName: string;
            fileName: string;
            guid: string;
            persist: boolean;
        } | null): void;
        /**
         * Called the uploadRecord method from the scope extension.
         */
        uploadRecord(file: File, persist: boolean, chunkSize: number): void;
        /**
         * Is raised if the requestDisplay callback is raised.
         */
        __uploadCallback(): (result: FileUploader.ProgressResult) => void;
        /**
         * Called the saveCurrentRecord method from the scope extension.
         */
        saveCurrentRecord(): Promise<void>;
        /**
         * Called the DeleteScopeRecord method from the scope extension.
         */
        deleteScopeUpload(elements: {
            userName: string;
            extensionName: string;
            fileName: string;
            guid: string;
            persist: boolean;
        }[]): void;
        /**
         * Called the DeleteScopeRecord method from the scope extension.
         */
        changePersist(element: {
            userName: string;
            extensionName: string;
            fileName: string;
            guid: string;
            persist: boolean;
        }): void;
        /**
         * Called the GetChartList method from the scope extension.
         */
        getChartList(element: {
            userName: string;
            extensionName: string;
            fileName: string;
            guid: string;
            persist: boolean;
        }): void;
        /**
         * Called the download function.
         */
        download(element: {
            userName: string;
            extensionName: string;
            fileName: string;
            guid: string;
            persist: boolean;
        }): void;
        /**
         * Called the OpenConnectionToFile method from the scope extension.
         */
        openConnectionToFile(element: {
            userName: string;
            extensionName: string;
            fileName: string;
            guid: string;
            persist: boolean;
            chartName: string;
        }): void;
        /**
         * Called the closeConnection method from the scope extension.
         */
        detachFromScopeRecord(): void;
        /**
         * Called the closeConnection method from the scope extension.
         */
        closeConnection(scopeConfig: TcHmiScopeControl.ScopeConfig | undefined): void;
        /**
         * Called the getAnalyticsData method from the scope extension.
         */
        getAnalyticsData(): void;
        /**
         * Called the SetAnalyticsRecord method from the scope extension.
         */
        setAnalyticsRecord(recordName: string, recordId: number, startTime: string, endTime: string): void;
    }
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeHelpers.ScopeHelper {
    /**
     * Convert scopeString to iso 8601 string
     * @param scopeString scopeString
     */
    function __scopeStringToIso(scopeString: string): string;
    /**
     * Convert iso 8601 string to scope string
     * @param t Iso 8601 string
     */
    function __isoToScopeString(t: string): string;
    /**
     * Convert iso 8601 string to milliseconds
     * @param t Iso 8601 string
     */
    function __isoToMilliSec(t: string): number;
}
declare namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl {
    interface ScopeEventPayload {
        sessionId: string;
        socketId: number;
        message: string;
        severity: Server.Events.Severity;
    }
    interface ConfigEventPayload {
        configName: string;
        oldConfigName: string | null;
        configType: ConfigType;
        severity: Server.Events.Severity;
    }
    enum ConfigType {
        Add = 0,
        Change = 1,
        Rename = 2,
        Delete = 3
    }
    interface ScopeConfig {
        name: string;
        chart: string;
    }
    enum ChartColorSource {
        ScopeConfig = 0,
        Theme = 1
    }
    enum TriggerWindowPosition {
        Left = 0,
        Right = 1,
        Top = 2,
        Bottom = 3
    }
    interface TriggerWindow {
        id: string;
        count: number;
        triggerGroup: string;
        releaseTime: string;
        comment?: string;
    }
    interface LegendElement {
        id: string;
        text: string;
        enabled: boolean;
        color: string;
    }
    interface Point {
        x: number;
        y: number;
    }
    interface Window {
        xAxisStart: string;
        xAxisEnd: string;
        xAxisPosition: string;
        displayWidth: string;
        startDisplayTime: string;
        scopeState: string;
        liveState: boolean;
        undo: boolean;
        redo: boolean;
        overviewRect?: {
            dimensions: Dimensions;
            position: Position;
        };
    }
    interface ActualWindow {
        xAxisStart: string;
        xAxisEnd: string;
        displayWidth: string;
        scopeState: string;
        liveState: boolean;
        undo: boolean;
        redo: boolean;
    }
    interface GetDataDatatype {
        overview?: Chart;
        charts: Chart[];
    }
    interface Chart {
        graphs: Dictionary<TcHmiScopeControl.Graph>;
        trigger: TcHmiScopeControl.TriggerData[];
        xyTrigger: TcHmiScopeControl.XYTriggerData[];
    }
    interface Graph {
        axesData: TcHmiScopeControl.Point[];
        lineSeries: LineSeries[];
        tooltipDelta: number;
        zeroPoint: TcHmiScopeControl.Position;
    }
    interface TriggerData {
        id: number;
        dimensions: Dimensions;
        position: Position;
        color: string;
        lineWidth: number;
        orientation: keyof typeof Beckhoff.TcHmiScopeControl.Orientation;
        text?: {
            dimensions: Dimensions;
            position: Position;
            color: string;
            backgroundColor: string;
            fontSize: number;
            text: string;
        };
        label?: {
            color: string;
            fontSize?: number;
            label: string;
            position: string;
        };
        icon?: {
            icon: string;
            dimensions: Dimensions;
            position: Position;
        };
    }
    interface XYTriggerData {
        id: number;
        color: string;
        lineWidth: number;
        marker: {
            vertical: {
                point1: Position;
                point2: Position;
            };
            horizontal: {
                point1: Position;
                point2: Position;
            };
        };
        circle?: {
            middlePoint: Position;
            diameter: number;
        };
    }
    interface LineSeries {
        index: number;
        lineStates: string[];
    }
    enum ChartType {
        YT = 0,
        XY = 1,
        ArrayBarChart = 2,
        SingleBarChart = 3
    }
    enum Orientation {
        Vertical = 1,
        Horizontal = 2
    }
    enum ButtonsEnabled {
        None = 0,
        RunButton = 1,
        PauseButton = 2,
        Splitter1 = 4,
        DisplaywidthTextBox = 8,
        Splitter2 = 16,
        ScrollBackBigButton = 32,
        ScrollBackSmallButton = 64,
        ScrollForwardSmallButton = 128,
        ScrollForwardBigButton = 256,
        Splitter3 = 512,
        GotoTextBox = 1024,
        Splitter4 = 2048,
        UndoButton = 4096,
        RedoButton = 8192,
        Splitter5 = 16384,
        PanToggleButton = 65536,
        PanYToggleButton = 33554432,
        PanXYToggleButton = 131072,
        ZoomToggleButton = 262144,
        ZoomYToggleButton = 67108864,
        ZoomXYToggleButton = 524288,
        UnzoomButton = 1048576,
        ZoomOutMaxButton = 2097152,
        OverviewButton = 4194304
    }
    enum TimesEnabled {
        None = 0,
        StartTimeLabel = 1,
        Splitter1 = 2,
        EndTimeLabel = 4,
        Splitter2 = 8,
        PositionLabel = 16,
        Splitter3 = 32,
        AbsTimeLabel = 64,
        Splitter4 = 128,
        DateLabel = 256
    }
    enum LineState {
        None = 0,
        Normal = 1,
        Bold = 2,
        MediumBold = 4,
        Invisible = 8,
        Up = 16,
        Down = 32,
        Dashed = 256,
        DashedLine = 4352,
        MarkerArrowRight = 17408,
        MarkerArrowLeft = 18432,
        ApplyToLine = 4096,
        ApplyToFillArea = 8192,
        ApplyToMark = 16384,
        ApplyToLineNMarkNFill = 28672,
        InvisibleLine = 4104,
        InvisibleMark = 16392,
        InvisibleLineNMark = 20488,
        LineUp = 4112,
        LineDown = 4128,
        MarkUp = 16400,
        MarkDown = 16416,
        LineNMarkUp = 20496,
        LineNMarkDown = 20512,
        NormalLine = 4097,
        NormalLineUp = 4113,
        NormalLineDown = 4129,
        NormalFill = 8193,
        NormalMark = 16385,
        NormalMarkUp = 16401,
        NormalMarkDown = 16417,
        NormalLineNMark = 20481,
        NormalLineNMarkUp = 20497,
        NormalLineNMarkDown = 20513,
        BoldLine = 4098,
        BoldLineUp = 4114,
        BoldLineDown = 4130,
        BoldMark = 16386,
        BoldMarkUp = 16402,
        BoldMarkDown = 16418,
        BoldLineNMark = 20482,
        BoldLineNMarkUp = 20498,
        BoldLineNMarkDown = 20514,
        MediumBoldLine = 4100,
        MediumBoldLineUp = 4116,
        MediumBoldLineDown = 4132,
        MediumBoldMark = 16388,
        MediumBoldMarkUp = 16404,
        MediumBoldMarkDown = 16420,
        MediumBoldLineNMark = 20484,
        MediumBoldLineNMarkUp = 20500,
        MediumBoldLineNMarkDown = 20516,
        Colored = 1099511562240,
        ColoredRed = 1095216660480,
        ColoredGreen = 4278190080,
        ColoredBlue = 16711680,
        Transparent = 280375465082880
    }
    interface Menubar {
        visibleToolstrip: boolean;
        visibleTimestrip: boolean;
        enabledButtons: number;
        enabledTimeLabels: number;
        existsHistoricalAcquisition: boolean;
    }
    interface Tooltip {
        displayText: string;
        timeoutMS: string;
        chartIndex: number;
        position: Position;
    }
    interface ScopeLayout {
        chartType: keyof typeof ChartType;
        dimensions: Dimensions;
        position: Position;
        backgroundColor: string;
        foregroundColor: string;
        gradientBackground?: boolean;
        gradientBackgroundColor?: number;
        showTooltip: boolean;
        headline?: {
            dimensions: Dimensions;
            position: Position;
            label: string;
            color: string;
            fontSize: number;
        };
        overview?: ScopeLayoutOverview;
        charts: ScopeLayoutChart[];
    }
    interface ScopeLayoutAxis {
        visible: boolean;
        visibleTicks: boolean;
        dimensions: Dimensions;
        position: Position;
        color: string;
        lineWidth: number;
        headline?: {
            dimensions: Dimensions;
            position: Position;
            label: string;
            color: string;
            fontSize: number;
        };
        labels?: {
            dimensions: Dimensions;
            position: Position;
            label: string;
            color: string;
            fontSize: number;
        }[];
        grid?: {
            visible: boolean;
            ticks: number;
            color: string;
            lineWidth: number;
        };
        subGrid?: {
            visible: boolean;
            ticks: number;
            color: string;
            lineWidth: number;
        };
    }
    interface ScopeLayoutChart {
        visible: boolean;
        dimensions: Dimensions;
        preferredSize: Dimensions;
        position: Position;
        canvas: {
            dimensions: Dimensions;
            position: Position;
            backgroundColor: string;
        };
        gridSize: {
            dimensions: Dimensions;
            position: Position;
        };
        headline?: {
            dimensions: Dimensions;
            position: Position;
            label: string;
            color: string;
            fontSize: number;
        };
        verticalAxis: ScopeLayoutAxis[];
        horizontalAxis: ScopeLayoutAxis[];
        graphs: ScopeGraphLayout[];
    }
    interface ScopeLayoutOverview {
        visible: boolean;
        dimensions: Dimensions;
        preferredSize: Dimensions;
        position: Position;
        canvas: {
            dimensions: Dimensions;
            position: Position;
            backgroundColor: string;
        };
        gridSize: {
            dimensions: Dimensions;
            position: Position;
        };
        verticalAxis: ScopeLayoutAxis[];
        horizontalAxis: ScopeLayoutAxis[];
        graphs: ScopeGraphLayout[];
    }
    interface ScopeGraphLayout {
        graphName: string;
        graphType: GraphType;
        marks: boolean;
        lineColor: string;
        lineWidth: number;
        markColor: string;
        markWidth: number;
        fillMode: FillMode;
        fillColor: string;
        fillTransparency: number;
        showEndCap: boolean;
        showStartCap: boolean;
        capSize: number;
        capColor: string;
        antialias: boolean;
    }
    interface UploadedRecord {
        fileName: string;
        guid: string;
        persist: boolean;
        userName: string;
    }
    interface Dimensions {
        width: number;
        height: number;
    }
    interface Position {
        x: number;
        y: number;
    }
    enum MouseMode {
        None = 0,
        ZoomX = 1,
        ZoomY = 2,
        ZoomXY = 3,
        PanX = 4,
        PanY = 5,
        PanXY = 6
    }
    enum Direction {
        Forward = "Forward",
        Reverse = "Reverse"
    }
    enum GraphType {
        Line = "Line",
        Stair = "Stair",
        Bar = "Bar",
        ExtendedLine = "ExtendedLine",
        RoundShape = "RoundShape"
    }
    enum FillMode {
        None = "None",
        FromHorizontalZero = "FromHorizontalZero",
        FromBottom = "FromBottom",
        FromTop = "FromTop",
        FromCenter = "FromCenter",
        FromSource = "FromSource",
        FromFirst = "FromFirst"
    }
    interface AnalyticsData {
        id: number;
        name: string;
        startTime: string;
        endTime: string;
    }
}
//# sourceMappingURL=TcHmiScopeControl.d.ts.map