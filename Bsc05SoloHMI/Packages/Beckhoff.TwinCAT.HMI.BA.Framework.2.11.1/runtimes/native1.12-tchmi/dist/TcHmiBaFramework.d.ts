declare namespace TcHmi.BuildingAutomation.BA {
    /** Class that holds all data of a BaBasicObject and additional methods. */
    class BaBasicObject<P extends BaInterfaceHandler.IBaInterfaceStructure = any> implements Logger.ILogger, Navigation.INodeData {
        constructor(baObj: BaBasicObject.IBaBaseBasicObjectAttributes, mapping: string, device: BaDevice, isTop?: boolean);
        Identifier: BaIdentifier;
        IdentifierEx: BaIdentifierEx;
        InstancePath: string;
        InstanceName: string;
        Device: BaDevice;
        IsTop: boolean;
        SubjectInfo?: BaSubjectInfo;
        Purpose?: ObjectPurpose;
        OperationType?: OperationType;
        NodeType?: NodeType;
        DataType?: DataType;
        TypeName?: string;
        /** Key: BaVariableID, Value: BaVariable */
        Params?: Map<BaParameterId, BaVariable>;
        /** Key: InstanceName, Value: BaVariable */
        AddParams?: Map<keyof P, BaVariable>;
        private __baInterfaceSymName;
        get AllParams(): BaVariable<any>[];
        /** Text attributes that can be loaded for the BaObject by calling loadTexts() */
        texts?: BaBasicObject.IBaBasicObjectTexts;
        /**
         * Mapping of the BaObject. Needed to access the BaObject data in the BaExtension.
         */
        Mapping: string;
        /**
         * Instance names of all watched BaVariables.
         */
        private __watchedBaVariables;
        /**
         * Holds the data for all watches on properties of the BaObject.
         */
        private __propertyWatches;
        /**
         * URL for a corresponding content. Content must have the ObjectName as name.
         */
        private __content;
        private __eventList;
        private __baVarList;
        logger: Logger;
        protected __isLoadingAttributes: {
            includeChildren: boolean;
            excludeChildren: boolean;
            includeTexts: boolean;
            excludeTexts: boolean;
        };
        protected __loadingAttributesReady: {
            includeChildren?: {
                resolver: ((val: BaBasicObject) => any)[];
                rejecter: ((reason: any) => any)[];
            };
            excludeChildren?: {
                resolver: ((val: BaBasicObject) => any)[];
                rejecter: ((reason: any) => any)[];
            };
            includeTexts?: {
                resolver: ((val: BaBasicObject) => any)[];
                rejecter: ((reason: any) => any)[];
            };
            excludeTexts?: {
                resolver: ((val: BaBasicObject) => any)[];
                rejecter: ((reason: any) => any)[];
            };
        };
        protected __parameterDialog: Components.DialogWindow | undefined | null;
        protected __trendSettingsContextMenu: Components.ContextMenu.IContextMenuAndButton | undefined;
        private __pendingRequestConstellations;
        /**
         * Set the attributes of the BaBasicObject.
         * @param baObj The new attributes to set.
         */
        setAttributes(baObj: BaBasicObject.IBaBasicObjectAttributes): void;
        /**
         * Set the texts of the BaObject.
         * @param texts The new texts.
         */
        setTexts(texts: BaBasicObject.IBaBasicObjectTexts): void;
        /**
         * Get the text of an addressing parameter.
         * @param id The ID of the parameter.
         * @returns The text of an addressing parameter.
         */
        getAddressingText(id: BaTextAddressingParameter): string;
        /**
         * Get the content url if a content with SymbolPath as name was found.
         */
        getContent(): Promise<string | undefined>;
        /**
         * Get the attributes for the icon of the object.
         */
        getIconAttributes(): Icons.IIconAttributes;
        /**
         * Get the Symbol of the BaObject.
         * @returns The symbol of the BaObject.
         */
        getSymbolExpression(): SymbolExpression;
        /**
         * If false the BaBaiscObject was not loaded completley (use loadAttributes()).
         * @param includeChildren Defines if also the children are checked if they are valid. Default is false.
         * @param includeTexts Defines if the {@link BaTextAddressingParameter} are checked if they are loaded. Default is false.
         * @returns True if the BaBasicObject is valid, otherwise false.
         */
        getIsValid(includeChildren?: boolean, includeTexts?: boolean): this is Required<Omit<BaBasicObject, 'AddParams'>>;
        /**
         * Checks if the BaBasicObject is trendable or not.
         * @returns True if the BaBasicObject is trendable, otherwise false.
         */
        isTrendable(): this is BA.BaObject;
        /**
         * @returns `BaBasicObject 'InstancePath' is not valid!`.
         */
        get isNotValidText(): string;
        /**
         * Checks if the BaBasicObject has a certain set of parameters.
         * @param def The parameters to check.
         * @param instance The instance that checks the template. If set warnings will be logged with the logger of the instance.
         * @param showAlert If the template does not fit an alert will be shown. Default is false.
         * @returns True if the parameters are available, otherwise false.
         */
        checkParams<S extends BaInterfaceHandler.IBaInterfaceStructure>(def: BaInterfaceHandler.BaInterfaceDefinition<S>, symNames: BaInterfaceHandler.BaInterfaceSymbolNames<S>, instance?: Logger.ILogger & IHasId, showAlert?: boolean): this is BaObject<S> & {
            AddParams: Map<string, BaVariable.IBaVariableAttributes>;
        };
        /**
         * Checks if the BaBasicObject is a BaView which fits to a certain template definition. Template definition and description must be set before.
         * @param def The used template definition.
         * @param desc The used template description.
         * @param instance The instance that checks the template. If set warnings will be logged with the logger of the instance.
         * @param showAlert If the template does not fit an alert will be shown. Default is true.
         */
        checkTemplate<S extends BaView.BaTemplateStructure>(def: BaView.BaTemplateDefinition<S>, desc: BaView.BaTemplateDescription<S>, instance?: Logger.ILogger & IHasId, showAlert?: boolean): this is BaView<S>;
        /**
         * Logs a warning that this BaBasicObject is not a BaView.
         * @param logger The logger which is used to log.
         */
        logIsNotBaView(logger: Logger): void;
        /**
         * Alerts that an invalid template was bound.
         * @param id The id of the control.
         */
        alertInvalidTemplate(id: string, skipLog?: boolean): void;
        /**
         * Logs that an invalid BaObject was bound.
         * @param id The id of the control.
         * @param showAlert If true an alert will be displayed. Default is true.
         */
        logInvalidBaObject(id: string, showAlert?: boolean): void;
        /**
         * Loads all attributes of the BaObject but not the texts. A request is only send to the server if the attributes have not been requested before.
         * @category Public
         * @param includeChildren Define if the attributes of the children of a BaView should be loaded too.
         */
        loadAttributes(includeChildren?: boolean, includeTexts?: boolean): Promise<BaBasicObject<any>>;
        /**
         * Loads all texts of the BaObject. A request is only send to the server if the texts have not been requested before.
         * @category Public
         * @param includeChildren Define if the texts of the children of a BaView should be loaded too.
         */
        loadTextsAsync(includeChildren?: boolean): Promise<void>;
        /**
         * Update the object info of the object.
         * @category Public
         */
        updateObjectInfo(): Promise<void>;
        /**
         * Create a watch for the variable.
         * @param name The name of the property.
         * @param callback Callback is called if the value of the variable has changed.
         * @returns The id for the created watch. This id and name is needed to destroy the watch for this certain callback.
         */
        watchProperty<T>(name: string, callback: (data: T | null | undefined) => void): number;
        /**
         * Stops a specified watch of a property.
         * @param name The name of the property.
         * @param id The id of the watch.
         */
        stopWatchProperty(name: string, id: number): void;
        /**
         * Stops watching of properties.
         * @param name Name of the property for which all watches shall be stopped.
         */
        stopAllWatchesProperty(name: string): void;
        /**
         * Try to return the BaVariable with the id.
         * @param id Id of the BaVariable.
         * @returns The BaVariable or undefined if the BaObject has no variable with this id.
         */
        tryGetBaVariable<T>(id: BaParameterId): BaVariable<T> | undefined;
        tryGetBaVariable<K extends keyof P>(id: K): BaVariable<P[K]> | undefined;
        /**
         * Read a BaVariable.
         * @param id Id of the BaVariable.
         * @returns True if the read was created successfully and false if no read was created because the BaObject has no variable with this id.
         */
        tryReadBaVariable<T>(id: BaParameterId): Promise<T | undefined>;
        tryReadBaVariable<K extends keyof P>(id: K): Promise<P[K] | undefined>;
        /**
         * Checks if the BaVariable is availiable in the BaObject and then writes the value to the server.
         * @param baVarId The Id of the BaVariable.
         * @param value The value that should be written to it.
         * @param cb Callback when the value was written.
         */
        tryWriteBaVariableValueAsync<T>(baVarId: BaParameterId, value: T, cb?: (data: Symbol.IWriteResultObject) => any): Promise<boolean>;
        tryWriteBaVariableValueAsync<K extends keyof P>(baVarId: K, value: P[K], cb?: (data: Symbol.IWriteResultObject) => any): Promise<boolean>;
        /**
         * Checks if the BaVariable is availiable in the BaObject and then writes the value to the server.
         * @param baVarId The Id of the BaVariable.
         * @param value The value that should be written to it.
         * @param cb Callback when the value was written.
         */
        tryWriteBaVariableValue<T>(baVarId: BaParameterId, value: T, cb?: (data: Symbol.IWriteResultObject) => any): boolean;
        tryWriteBaVariableValue<K extends keyof P>(baVarId: K, value: P[K], cb?: (data: Symbol.IWriteResultObject) => any): boolean;
        /**
         * Try watching a BaVariable.
         * @param id Id of the BaVariable.
         * @param callback Callback is called if the value of the variable has changed.
         * @returns The id of the created watch to destroy the watch later and undefined if the BaObject does not contain this Variable.
         */
        tryWatchBaVariable<T>(id: BaParameterId, callback: (data: T | null | undefined) => void): BaVariable.IBaVariableWatchIdentifier | undefined;
        tryWatchBaVariable<K extends keyof P>(id: K, callback: (data: P[K] | null | undefined) => void): BaVariable.IBaVariableWatchIdentifier | undefined;
        /**
         * Stops watching of a BaVariable.
         * @param identifier ID of the BaVariable watch.
         */
        stopWatchBaVariable(identifier: BaVariable.IBaVariableWatchIdentifier): void;
        /**
         * Stops all watches of the BaVariable.
         * @param id Id of the BaVariable.
         */
        stopAllWatchesBaVariable(id: BaParameterId | keyof P): void;
        /**
         * Stops watching of all BaVariables and properties.
         */
        stopAllWatches(): void;
        /**
         * Opens the parameter dialog for this BaBasicObject.
         * @param show Defines the initial content of the parameter dialog.
         * @returns The created and opened dialog.
         */
        openParameterDialog(show?: 'Events' | 'Parameter'): Components.DialogWindow | null | undefined;
        /**
         * Checks if the BaBasicObject fullfills a filter or not.
         * @param filter The filter to be fullfilled.
         * @param options The option for the filter.
         * @returns True if the filter if fullfilled by the BaBasicObject and false if not.
         */
        matchesTextFilter(filter: string, options: BaTextAddressingParameter[]): boolean;
        /**
         * Determine if the BaObject has a special visualization (e.g. a trend or schedule).
         * @returns True if the BaObject has a special visualization and false if not.
        */
        hasSpecialVisu(): boolean;
        /**
         * Checks the access of the user to a certain parameter.
         * @param id The id of the parameter.
         * @param scope The scope of the access. If not defined both scopes are validated.
         * @returns True if the user has access, otherwise false.
         */
        checkParameterAccess<T>(id: BaParameterId, scope: Scope): boolean;
        checkParameterAccess<K extends keyof P>(id: K, scope: Scope): boolean;
        /**
         * Checks if the user can write a manual value.
         * @category Public
         * @returns True if the user can write a manual value, otherwise false.
         */
        checkManualValueWriteAccess(): boolean;
        /**
         * Destroys internals of the BaObject (Symbols, Watches, ...).
         */
        destroy(): void;
        /**
         * Get the icon for the given {@link NodeType}.
         * @param nodeType The {@link NodeType}.
         * @returns The icon for the given {@link NodeType} or undefined if none was found.
         */
        static getNodeTypeIcon(nodeType: NodeType): Icons.IIconAttributes | undefined;
        /**
         * Converts an object or array to a Map.
         * @category BaObject preparation
         * @param obj The object or array that should be converted to a Map.
         * @returns The created Map.
         */
        static convertToMap<T>(obj: Map<string, any> | Dictionary<any> | any[]): Map<string, T>;
    }
    namespace BaBasicObject {
        interface IBaBaseBasicObjectAttributes {
            /** The identifier contains information about the BaObject. It contains the ObjectType of the BaObject. */
            Identifier: BaIdentifier;
            /** Path of the BaObject to find it in the device of the  */
            InstancePath: string;
        }
        /** Interface that defines the properties of a BaBasicObject. */
        interface IBaBasicObjectAttributes extends IBaBaseBasicObjectAttributes {
            /** Profile of the BaObject. */
            SubjectInfo: BaSubjectInfo;
            /** Purpose of the BaObject (e.g. structurize, general). */
            Purpose: ObjectPurpose;
            /** Operation type of the object (e.g. none, setpoint or display). */
            OperationType: OperationType;
            /** Node type of the object. */
            NodeType: NodeType;
            /** Data type of the BaObject (e.g. string, number, object, enum). */
            DataType: DataType;
            /** Parameters of the BaObject. */
            Params?: Map<string, BaVariable.IBaVariableAttributes>;
            /** Additional parameters of the BaObject. */
            AddParams?: Map<string, BaVariable.IBaVariableAttributes>;
            /** Type name of the BaObject (e.g. FB_BA_Light). Only transmitted if the BaObject contains additional parameters */
            TypeName?: string;
            /** Name of the device. */
            DeviceName?: string;
            /** Texts of the BaObject */
            texts?: IBaBasicObjectTexts;
        }
        /**
         * Validates the interface 'IBaBasicObjectAttributes'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isIBaBasicObjectAttributes(p: any): p is BA.BaBasicObject.IBaBasicObjectAttributes;
        /**
         * Validates the BaVariables of an BaObject.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isBaObjectVariables(p: any): p is Map<string, BA.BaVariable.IBaVariableAttributes> | Dictionary<BaVariable.IBaVariableAttributes>;
        interface IBaBasicObjectTexts {
            instObjectName: string;
            objectName: string;
            instDescription: string;
            description: string;
            children?: Map<string, IBaBasicObjectTexts>;
        }
        /** A collection of {@link BaVariable.BaParameterInformation}. Used to store {@link BaVariable.BaParameterInformation} for different {@link BaBasicObject}. */
        type BaObjectsParameterInformation = Map<string, BaVariable.BaParameterInformation>;
        /**
         * Defines if the object/node type icon is displayed in the parameter dialog header.
         * Default is false.
         */
        let DisableParameterDialogHeaderIcon: boolean;
        /**
         * Defines the default width of the parameter dialog.
         * Default is 800px.
         */
        let DefaultParameterDialogWidth: number;
        /**
         * Defines the default height and width of the online trend dialog.
         * Default is { height: 250, height: 450 }
         */
        let DefaultOnlineTrendDialogSize: {
            height: number;
            width: number;
        };
        /**
         * Defines if parameter categories automatically collapsed in parameter window.
         * Default is false.
         */
        let AutoCollapseParameterCategories: boolean;
        /**
         * The IDs which will be used as the default filter if no options are passed to {@link matchesFilter}.
         */
        let DefaultTextFilterIds: BaTextAddressingParameter[];
        /**
         * An error to be thrown when something went wrong during working with a {@link BaBasicObject}.
         */
        class Error extends BaseError {
            /**
             * An error to be thrown when something went wrong during working with a {@link BaBasicObject}.
             * @param message The message of the error. Placeholder in format "{deviceName}" will be replaced with the device name.
             * @param options Options for the error.
             */
            constructor(msg: string, options?: IBaseErrorOptions);
        }
    }
    /**
     * Handles the events of an event enabled {@link BaBasicObject}.
     */
    class BaEventEnabledObjectHandling {
        /**
         * Handles the events of an event enabled {@link BaBasicObject}.
         * @param baObj The owner {@link BaBasicObject} of the event handling.
         */
        constructor(baObj: BaBasicObject);
        protected __owner: BaBasicObject;
        protected __watchEventsPerIconCallbacks: ((data: Map<EventCondition, EventsPerIconImage>) => any)[];
        protected __activeEvents: Map<EventCondition, EventsPerIconImage> | undefined;
        /**
         * Activate monitoring of events, staus flags and active priority.
         * @param cb Callback is raised if an event has changed.
         * @returns The id for the created watch. This id is needed to destroy the watch for this certain callback.
         */
        watchEventsPerIcon(cb: (data: Map<EventCondition, EventsPerIconImage>) => any): number;
        /**
         * Stops a specified watch of the events.
         * @param id The id of the watch.
         */
        stopWatchEventsPerIcon(id: number): void;
        /**
         * Stops all event watches.
         */
        stopAllEventsPerIconWatches(): void;
        /**
         * Acknowledge the BaObject if it is acknowledgeable.
         * @returns True if acknowledging was successful and false if not.
         */
        acknowledgeAsync(): Promise<void>;
    }
    interface IBaEventEnabledAttributes extends BaBasicObject.IBaBasicObjectAttributes {
        /** Identifier is the BaObject has events. Not all object types have events. */
        IsEventEnabled: boolean;
    }
    /**
     * Validates the interface 'IBaObjectAttributes'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isIBaEventEnabledAttributes(p: any): p is IBaEventEnabledAttributes;
    /** Interface that defines the properties of a BaObject. */
    interface IBaEventEnabled {
        /** Takes care about the event handling of the {@link BaBasicObject}. */
        eventHandler: BaEventEnabledObjectHandling;
    }
}
//# sourceMappingURL=BaBasicObject.d.ts.map
declare namespace TcHmi.BuildingAutomation.BA {
    enum Events {
        onDeviceLoaded = "onBaDeviceLoaded",
        onAllDevicesLoaded = "onAllBaDevicesLoaded"
    }
    let BaDevices: Map<string, BaDevice> | undefined;
    /**
     * Represents a device from the BA
     */
    class BaDevice implements Logger.ILogger {
        constructor(deviceName: string);
        /** Project structure of the device. */
        ProjectStructure: BaView;
        /** Description of the device (e.g. "PLC!"). */
        Description: string;
        /** Names of different events that can be trigger by the device. Register to them by EventProvider.register(). */
        eventNames: {
            onDiagnosticsChanged: string;
            onConnectionStateChanged: string;
            onProjectStructureLoaded: string;
        };
        private __eventDestroyFunctions;
        /** Current diagnostics of the device. */
        diagnostics: Server.BaSite.IDeviceDiagnostics;
        /** Flag if the project structure of the device has been loaded. */
        projectStructureLoaded: BaDevice.ProjectStructureLoadingStatus;
        logger: Logger;
        private __disconnectedReported;
        private __connectedReported;
        private __deviceNotAvailableAlert;
        /**
         * Get a BaObject in the project structure of the device.
         * @category Public
         * @param instance Instance path or BaIdentifier of the BaObject to find.
         * @param baObj [Optional] is used for recursion.
         */
        findBaObject(instance: string | BaIdentifier, baObj?: BaBasicObject): BaBasicObject | null;
        /**
         * Validates the device.
         * @category Public
         * @returns True if the device is connected and the ProjectStructure is not empty, otherwise false.
         */
        validate(): boolean;
        /**
         * Validates a project structure of a BaDevice.
         * @category Public
         * @param projectStructure The project structure to be validated.
         * @returns True if the project structure is valid, otherwise false.
         */
        static validateProjectStructure(projectStructure: BaView | BaView.IBaViewAttributes): boolean;
        /**
         * Update the object info of the all objects in the project structure.
         * @category Public
         */
        updateObjectInfo(): Promise<void>;
        /**
         * Callback when the diagnostics have changed.
         * @category Event callbacks
         * @param ev The event data.
         * @param diag The new diagnostics.
         */
        private __onDiagnosticsChanged;
        /**
         * Destroys the device.
         * @category Public
         */
        destroy(): void;
    }
    namespace BaDevice {
        interface IBaDeviceAttributes {
            /** Project structure of the device. */
            ProjectStructure: BaView.IBaViewAttributes;
        }
        /** A collection of devices with the collection of {@link BaBasicObject.BaObjectsParameterInformation}. */
        type BaDevicesAdditionalParameterInformation = Map<string, BaBasicObject.BaObjectsParameterInformation>;
        enum ConnectionState {
            disabled = -2,
            unknown = -1,
            connecting = 0,
            connected = 1,
            disconnecting = 2,
            disconnected = 3,
            error = 4
        }
        enum ProjectStructureLoadingStatus {
            invalid = -1,
            loading = 0,
            loaded = 1,
            failed = 2
        }
        /** Defines if the dialog, that is displayed, when the device lost connection, is closed automatically after reconnecting of the device. Default is true. */
        let DialogConnectionAutoCloseStateChanged: boolean;
        /** Defines if the page is reloaded automatically after a device was reconnected. Default is true. */
        let DialogConnectionAutoReloadOnReconnect: boolean;
        /** The time (in seconds) that will be waited until the page will be automatically reloaded. Default is 30. */
        let DialogConnectionAutoReloadOnReconnectTime: number;
        /**
         * An error to be thrown when something went wrong during working with a {@link BaDevice}.
         */
        class Error extends BaseError {
            /**
         * An error to be thrown when something went wrong during working with a {@link BaDevice}.
             * @param message The message of the error. Placeholder in format "{deviceName}" will be replaced with the device name.
             * @param deviceName The name of the device.
             * @param options Options for the error.
             */
            constructor(msg: string, deviceName?: string, options?: IBaseErrorOptions);
            private static __deviceNamePlaceHolder;
        }
        /**
         * An error to be thrown when the connection state of a {@link BaDevice} is invalid.
         */
        class InvalidConnectionStateError extends Error {
            /**
         * An error to be thrown when the connection state of a {@link BaDevice} is invalid.
             * @param message The message of the error.
             * @param deviceName The name of the device.
             * @param options Options for the error.
             */
            constructor(device: BaDevice, msg?: string, options?: IBaseErrorOptions);
        }
    }
}
//# sourceMappingURL=BaDevice.d.ts.map
declare namespace TcHmi.BuildingAutomation.BA {
    /** Enumeration of different event types. */
    enum EventType {
        Invalid = 0,
        eAlarm = 1,
        eDisturb = 2,
        eMaintenance = 3,
        eNotification = 4,
        eOther = 5
    }
    /** Enumeration of separated event-conditions. */
    enum EventCondition {
        Invalid = 0,
        /** Separated in event-types (See "EventType") */
        eTypeAlarm = 1,
        eTypeDisturb = 2,
        eTypeMaintenance = 3,
        eTypeNotification = 4,
        eTypeOther = 5,
        /** Separated in object-states (See "ST_ObjectStateFlags") */
        eFlagOverridden = 6,
        eFlagOutOfService = 7,
        eFlagFault = 8,
        eFlagActiveEvent = 9,
        /** Separated in priorities (See "E_Priority") */
        ePrioLifeSafety = 10,
        ePrioCritical = 11,
        ePrioManualLocal = 12,
        ePrioManualRemote = 13,
        /** Separated in lock-priorities (See "LockPriority") */
        eLockPrioLocalMedium = 14,
        eLockPrioLocalHigh = 15,
        eLockPrioMedium = 16,
        eLockPrioHigh = 17,
        /** Other: */
        eEventIconDisplayed = 18
    }
    /** Enumeration of different event icon states. */
    enum EventIconState {
        Invalid = 0,
        eNone = 1,
        eIndicated = 2,
        eGoneAcked = 3,
        eGone = 4,
        ePresentAcked = 5,
        ePresent = 6
    }
    enum ProcessSignalSource {
        Invalid = 0,
        /** Source of process value is a variable input (FB-Pin). */
        eVarInput = 1,
        /** Source of process value is a parameter (Input/Constant-Variable). */
        eParameter = 2
    }
    /** Enumeration of different alarm modes */
    enum AlarmMode {
        Invalid = 0,
        /** Indication disapears itself when alarm is gone */
        eSimple = 1,
        /** Indication disapears when gone alarm is acknowledged. */
        eStandard = 2,
        /** Indication disapears when gone alarm is acknowledged and reset. */
        eExtended = 3,
        First = 1,
        Last = 3,
        Count = 3
    }
    /** Enumeration of different object types. */
    enum ObjectType {
        Invalid = 0,
        Undefined = 1,
        eAnalogInput = 10,
        eAnalogOutput = 11,
        eAnalogValue = 12,
        eBinaryInput = 15,
        eBinaryOutput = 16,
        eBinaryValue = 17,
        eMultiStateInput = 20,
        eMultiStateOutput = 21,
        eMultiStateValue = 22,
        eObject = 25,
        eStructuredView = 26,
        eProject = 27,
        eEventClass = 28,
        eCalendar = 29,
        eSchedule = 30,
        eLoop = 31,
        eTrend = 32
    }
    /** Enumeration of different lock priorities. */
    enum LockPriority {
        Invalid = 0,
        eNoLock = 1,
        /** Lock COMPONENTS (means lower in project structure) via medium priority */
        eLocalMedium = 2,
        /** Lock COMPONENTS (means lower in project structure) via high priority */
        eLocalHigh = 3,
        /** Lock PLANTS (means higher in project structure) via medium priority */
        eMedium = 4,
        /** Lock PLANTS (means higher in project structure) via high priority */
        eHigh = 5
    }
    /** Enumeration of different priorities. */
    enum Priority {
        Invalid = 0,
        /** Default, if no priority is used. */
        eDefault = 1,
        eProgram = 2,
        /** manual override via parameter. */
        eManualRemote = 3,
        /** E.g. manual override via physically switches. */
        eManualLocal = 4,
        eCritical = 5,
        eLifeSafety = 6
    }
    enum ParamCOVMode {
        Invalid = 0,
        /** COV-indication of parameter is inactive */
        eNone = 1,
        /** COV-indication of parameter is evaluated periodically (payload balanced) */
        eStandard = 2,
        /** COV-Indication is executed, but changed values has to be read from / written to supplement manually! */
        eManual = 3,
        /** COV-indication of parameter is evaluated every PLC cycle: */
        ePrioritized = 4
    }
    /** Enumeration of different sun protection positions. */
    enum PosMod {
        Invalid = 0,
        eFix = 1,
        eTab = 2,
        eMaxIndc = 3
    }
    /** Enumeration of different shadow object types. */
    enum ShdObjType {
        Invalid = 0,
        eTetragon = 1,
        eGlobe = 2
    }
    enum Month {
        Invalid = 0,
        Unspecified = 255,
        eJanuary = 1,
        eFebruary = 2,
        eMarch = 3,
        eApril = 4,
        eMay = 5,
        eJune = 6,
        eJuly = 7,
        eAugust = 8,
        eSeptember = 9,
        eOctober = 10,
        eNovember = 11,
        eDecember = 12,
        odd = 13,
        even = 14
    }
    enum Day {
        Invalid = 0,
        Unspecified = 255,
        eDay01 = 1,
        eDay02 = 2,
        eDay03 = 3,
        eDay04 = 4,
        eDay05 = 5,
        eDay06 = 6,
        eDay07 = 7,
        eDay08 = 8,
        eDay09 = 9,
        eDay10 = 10,
        eDay11 = 11,
        eDay12 = 12,
        eDay13 = 13,
        eDay14 = 14,
        eDay15 = 15,
        eDay16 = 16,
        eDay17 = 17,
        eDay18 = 18,
        eDay19 = 19,
        eDay20 = 20,
        eDay21 = 21,
        eDay22 = 22,
        eDay23 = 23,
        eDay24 = 24,
        eDay25 = 25,
        eDay26 = 26,
        eDay27 = 27,
        eDay28 = 28,
        eDay29 = 29,
        eDay30 = 30,
        eDay31 = 31,
        eLastDayOfMonth = 32,
        eOddDaysOfMonth = 33,
        eEvenDaysOfMonth = 34
    }
    enum Weekday {
        Invalid = 0,
        Unspecified = 255,
        eMonday = 1,
        eTuesday = 2,
        eWednesday = 3,
        eThursday = 4,
        eFriday = 5,
        eSaturday = 6,
        eSunday = 7
    }
    enum Week {
        Invalid = 0,
        Unspecified = 255,
        eWeek1 = 1,
        eWeek2 = 2,
        eWeek3 = 3,
        eWeek4 = 4,
        eWeek5 = 5
    }
    enum DateValChoice {
        Invalid = 0,
        eDate = 1,
        eDateRange = 2,
        eWeekNDay = 3
    }
    enum SchedEntryState {
        Invalid = 0,
        eUndefined = 1,
        eValue = 2,
        eNull = 3
    }
    /** Enumeration of different object purposes */
    enum ObjectPurpose {
        eUndefined = 0,
        eInternal = 1,
        eStructurize = 2,
        eDescriptive = 3,
        eGeneral = 10,
        eOperation = 11,
        eValue = 12,
        eInput = 13,
        eOutput = 14,
        eManagement = 20,
        eAggregate = 21
    }
    /** Enumeration of different object state flags. */
    enum ObjectStateFlags {
        eOutOfService = 1,
        eOverridden = 2
    }
    enum Unit {
        Invalid = -1,
        eArea_SquareMeters = 0,
        eArea_SquareFeet = 1,
        eElectrical_Milliamperes = 2,
        eElectrical_Amperes = 3,
        eElectrical_Ohms = 4,
        eElectrical_Volts = 5,
        eElectrical_Kilovolts = 6,
        eElectrical_Megavolts = 7,
        eElectrical_VoltAmperes = 8,
        eElectrical_KilovoltAmperes = 9,
        eElectrical_MegavoltAmperes = 10,
        eElectrical_VoltAmperesReactive = 11,
        eElectrical_KilovoltAmperesReactive = 12,
        eElectrical_MegavoltAmperesReactive = 13,
        eElectrical_DegreesPhase = 14,
        eElectrical_PowerFactor = 15,
        eEnergy_Joules = 16,
        eEnergy_Kilojoules = 17,
        eEnergy_WattHours = 18,
        eEnergy_KilowattHours = 19,
        eEnergy_Btus = 20,
        eEnergy_Therms = 21,
        eEnergy_TonHours = 22,
        eEnthalpy_JoulesPerKilogramDryAir = 23,
        eEnthalpy_BtusPerPoundDryAir = 24,
        eFrequency_CyclesPerHour = 25,
        eFrequency_CyclesPerMinute = 26,
        eFrequency_Hertz = 27,
        eHumidity_GramsOfWaterPerKilogramDryAir = 28,
        eHumidity_PercentRelativeHumidity = 29,
        eLength_Millimeters = 30,
        eLength_Meters = 31,
        eLength_Inches = 32,
        eLength_Feet = 33,
        eLight_WattsPerSquareFoot = 34,
        eLight_WattsPerSquareMeter = 35,
        eLight_Lumens = 36,
        eLight_Luxes = 37,
        eLight_FootCandles = 38,
        eMass_Kilograms = 39,
        eMass_PoundsMass = 40,
        eMass_Tons = 41,
        eMassFlow_KilogramsPerSecond = 42,
        eMassFlow_KilogramsPerMinute = 43,
        eMassFlow_KilogramsPerHour = 44,
        eMassFlow_PoundsMassPerMinute = 45,
        eMassFlow_PoundsMassPerHour = 46,
        ePower_Watts = 47,
        ePower_Kilowatts = 48,
        ePower_Megawatts = 49,
        ePower_BtusPerHour = 50,
        ePower_Horsepower = 51,
        ePower_TonsRefrigeration = 52,
        ePressure_Pascals = 53,
        ePressure_Kilopascals = 54,
        ePressure_Bars = 55,
        ePressure_PoundsForcePerSquareInch = 56,
        ePressure_CentimetersOfWater = 57,
        ePressure_InchesOfWater = 58,
        ePressure_MillimetersOfMercury = 59,
        ePressure_CentimetersOfMercury = 60,
        ePressure_InchesOfMercury = 61,
        eTemperature_DegreesCelsius = 62,
        eTemperature_DegreesKelvin = 63,
        eTemperature_DegreesFahrenheit = 64,
        eTemperature_DegreeDaysCelsius = 65,
        eTemperature_DegreeDaysFahrenheit = 66,
        eTime_Years = 67,
        eTime_Months = 68,
        eTime_Weeks = 69,
        eTime_Days = 70,
        eTime_Hours = 71,
        eTime_Minutes = 72,
        eTime_Seconds = 73,
        eVelocity_MetersPerSecond = 74,
        eVelocity_KilometersPerHour = 75,
        eVelocity_FeetPerSecond = 76,
        eVelocity_FeetPerMinute = 77,
        eVelocity_MilesPerHour = 78,
        eVolume_CubicFeet = 79,
        eVolume_CubicMeters = 80,
        eVolume_ImperialGallons = 81,
        eVolume_Liters = 82,
        eVolume_UsGallons = 83,
        eVolumetricFlow_CubicFeetPerMinute = 84,
        eVolumetricFlow_CubicMetersPerSecond = 85,
        eVolumetricFlow_ImperialGallonsPerMinute = 86,
        eVolumetricFlow_LitersPerSecond = 87,
        eVolumetricFlow_LitersPerMinute = 88,
        eVolumetricFlow_UsGallonsPerMinute = 89,
        eOther_DegreesAngular = 90,
        eOther_DegreesCelsiusPerHour = 91,
        eOther_DegreesCelsiusPerMinute = 92,
        eOther_DegreesFahrenheitPerHour = 93,
        eOther_DegreesFahrenheitPerMinute = 94,
        eOther_NoUnits = 95,
        eOther_PartsPerMillion = 96,
        eOther_PartsPerBillion = 97,
        eOther_Percent = 98,
        eOther_PercentPerSecond = 99,
        eOther_PerMinute = 100,
        eOther_PerSecond = 101,
        eOther_PsiPerDegreeFahrenheit = 102,
        eOther_Radians = 103,
        eOther_RevolutionsPerMinute = 104,
        eCurrency_Currency1 = 105,
        eCurrency_Currency2 = 106,
        eCurrency_Currency3 = 107,
        eCurrency_Currency4 = 108,
        eCurrency_Currency5 = 109,
        eCurrency_Currency6 = 110,
        eCurrency_Currency7 = 111,
        eCurrency_Currency8 = 112,
        eCurrency_Currency9 = 113,
        eCurrency_Currency10 = 114,
        eArea_SquareInches = 115,
        eArea_SquareCentimeters = 116,
        eEnthalpy_BtusPerPound = 117,
        eLength_Centimeters = 118,
        eMassFlow_PoundsMassPerSecond = 119,
        eTemperature_DeltaDegreesFahrenheit = 120,
        eTemperature_DeltaDegreesKelvin = 121,
        eElectrical_Kilohms = 122,
        eElectrical_Megohms = 123,
        eElectrical_Millivolts = 124,
        eEnergy_KilojoulesPerKilogram = 125,
        eEnergy_Megajoules = 126,
        eEntropy_JoulesPerDegreeKelvin = 127,
        eEntropy_JoulesPerKilogramDegreeKelvin = 128,
        eFrequency_Kilohertz = 129,
        eFrequency_Megahertz = 130,
        eFrequency_PerHour = 131,
        ePower_Milliwatts = 132,
        ePressure_Hectopascals = 133,
        ePressure_Millibars = 134,
        eVolumetricFlow_CubicMetersPerHour = 135,
        eVolumetricFlow_LitersPerHour = 136,
        eOther_KilowattHoursPerSquareMeter = 137,
        eOther_KilowattHoursPerSquareFoot = 138,
        eOther_MegajoulesPerSquareMeter = 139,
        eOther_MegajoulesPerSquareFoot = 140,
        eOther_WattsPerSquareMeterDegreeKelvin = 141,
        eVolumetricFlow_CubicFeetPerSecond = 142,
        eOther_PercentObscurationPerFoot = 143,
        eOther_PercentObscurationPerMeter = 144,
        eElectrical_Milliohms = 145,
        eEnergy_MegawattHours = 146,
        eEnergy_KiloBtus = 147,
        eEnergy_MegaBtus = 148,
        eEnthalpy_KilojoulesPerKilogramDryAir = 149,
        eEnthalpy_MegajoulesPerKilogramDryAir = 150,
        eEntropy_KilojoulesPerDegreeKelvin = 151,
        eEntropy_MegajoulesPerDegreeKelvin = 152,
        eForce_Newton = 153,
        eMassFlow_GramsPerSecond = 154,
        eMassFlow_GramsPerMinute = 155,
        eMassFlow_TonsPerHour = 156,
        ePower_KiloBtusPerHour = 157,
        eTime_HundredthsSeconds = 158,
        eTime_Milliseconds = 159,
        eTorque_NewtonMeters = 160,
        eVelocity_MillimetersPerSecond = 161,
        eVelocity_MillimetersPerMinute = 162,
        eVelocity_MetersPerMinute = 163,
        eVelocity_MetersPerHour = 164,
        eVolumetricFlow_CubicMetersPerMinute = 165,
        eAcceleration_MetersPerSecondPerSecond = 166,
        eElectrical_AmperesPerMeter = 167,
        eElectrical_AmperesPerSquareMeter = 168,
        eElectrical_AmpereSquareMeters = 169,
        eElectrical_Farads = 170,
        eElectrical_Henrys = 171,
        eElectrical_OhmMeters = 172,
        eElectrical_Siemens = 173,
        eElectrical_SiemensPerMeter = 174,
        eElectrical_Teslas = 175,
        eElectrical_VoltsPerDegreeKelvin = 176,
        eElectrical_VoltsPerMeter = 177,
        eElectrical_Webers = 178,
        eLight_Candelas = 179,
        eLight_CandelasPerSquareMeter = 180,
        eTemperature_DegreesKelvinPerHour = 181,
        eTemperature_DegreesKelvinPerMinute = 182,
        eOther_JouleSeconds = 183,
        eOther_RadiansPerSecond = 184,
        eOther_SquareMetersPerNewton = 185,
        eOther_KilogramsPerCubicMeter = 186,
        eOther_NewtonSeconds = 187,
        eOther_NewtonsPerMeter = 188,
        eOther_WattsPerMeterPerDegreeKelvin = 189,
        eMicro_Siemens = 190,
        eCubic_FeetPerHour = 191,
        eUs_GallonsPerHour = 192,
        eKilometers = 193,
        eMicrometers = 194,
        eGrams = 195,
        eMilligrams = 196,
        eMilliliters = 197,
        eMillilitersPerSecond = 198,
        eDecibels = 199,
        eDecibelsMillivolt = 200,
        eDecibelsVolt = 201,
        eMillisiemens = 202,
        eWatt_HoursReactive = 203,
        eKilowattHoursReactive = 204,
        eMegawattHoursReactive = 205,
        eMillimetersOfWater = 206,
        ePer_Mille = 207,
        eGrams_PerGram = 208,
        eKilograms_PerKilogram = 209,
        eGrams_PerKilogram = 210,
        eMilligrams_PeGram = 211,
        eMilligrams_PeKilogram = 212,
        eGrams_PerMilliliter = 213,
        eGrams_PerLiter = 214,
        eMilligrams_PerLiter = 215,
        eMicrograms_PerLiter = 216,
        eGrams_PerCubicMeter = 217,
        eMilligrams_PerCubicMeter = 218,
        eMicrograms_PerCubicMeter = 219,
        eNanograms_PerCubicMeter = 220,
        eGrams_PerCubicCentimeter = 221,
        eBecquerels = 222,
        eKilobecquerels = 223,
        eMegabecquerels = 224,
        eGray = 225,
        eMilligray = 226,
        eMicrogray = 227,
        eSieverts = 228,
        eMillisieverts = 229,
        eMicrosieverts = 230,
        eMicrosievertsPerHour = 231,
        eDecibels_A = 232,
        eNephelometric_TurbidityUnit = 233,
        ePH = 234,
        eGrams_PerSquareMeter = 235,
        eMinutes_PerDegreeKelvin = 236
    }
    enum Role {
        Undefined = 0,
        eGuest = 1,
        eBasic = 2,
        eAdvanced = 3,
        eExpert = 4,
        eInternal = 5,
        eLocked = 6
    }
    enum Scope {
        read = 0,
        write = 1
    }
    enum BaParameterId {
        Invalid = 0,
        eConfigurate = 1,
        eToggleMode = 2,
        eStepDelay = 3,
        eCovIncrement = 4,
        eAction = 5,
        eMinOffTime = 6,
        eMinOnTime = 7,
        eStateChangeCount = 11,
        eStateChangeTime = 12,
        eStateChangeResetPoint = 13,
        eActiveTimeElapsed = 14,
        eActiveTimeResetPoint = 15,
        eEventChangeTime = 16,
        eInstructionText = 20,
        eAckedTransitions = 21,
        eAcknowledgeRm = 22,
        eEnPlantLock = 23,
        eAlarmValue = 24,
        eAlarmValues = 25,
        eFaultValues = 26,
        eTimeDelay = 27,
        eLowLimit = 28,
        eHighLimit = 29,
        eLimitDeadband = 30,
        eEventDetectionEnable = 31,
        eEventEnable = 32,
        eEventClassID = 33,
        eEventMessage = 34,
        eEventMessageFormat = 35,
        eEventTransitionText = 36,
        eEventState = 37,
        eStatusFlags = 38,
        eReliability = 39,
        eEventAlgorithmInhibit = 40,
        eEnable = 45,
        eOutOfService = 46,
        eTrigger = 47,
        eInactiveText = 55,
        eActiveText = 56,
        eStateText = 57,
        eStateCount = 58,
        eUnit = 59,
        ePresentValue = 60,
        eDefaultValue = 61,
        eTag = 62,
        eAssignAsTrendReference = 63,
        eDeviceType = 80,
        ePolarity = 81,
        eMappingMode = 82,
        eFeedbackMappingMode = 83,
        eFeedbackPolarity = 84,
        eOverriddenPolarity = 85,
        eScaleOffset = 86,
        eResolution = 87,
        eFeedbackValue = 88,
        eRawValue = 89,
        eRawFeedback = 90,
        eRawOverride = 91,
        eRawState = 92,
        eTerminal = 93,
        eSensor = 94,
        eAddress = 95,
        eCommissioningState = 96,
        eSymbolPath = 105,
        eSymbolName = 106,
        eInstanceID = 107,
        eObjectName = 108,
        eDescription = 109,
        eObjectType = 110,
        ePurpose = 111,
        eNodeType = 112,
        ePriorityArray = 120,
        eActivePriority = 121,
        eProjectInfo = 124,
        eOperatorInfo = 125,
        eTechnicalStaffInfo = 126,
        eEngineerInfo = 127,
        eRebuildSegments = 134,
        eDateList = 137,
        eEventType = 140,
        eAlarmMode = 141,
        ePriority = 142,
        eAcknowledgeRequired = 143,
        eSetpoint = 145,
        eControlledValue = 146,
        eCtrlDeviation = 147,
        eProportionalConstant = 148,
        eIntegralConstant = 149,
        eDerivativeConstant = 150,
        eDampConstant = 151,
        eOutputUnit = 152,
        eOpMode = 153,
        eNeutralZone = 154,
        eSynchronizedLoop = 155,
        eMinOutput = 156,
        eMaxOutput = 157,
        eWeek = 160,
        eCalendar = 161,
        eException = 162,
        eReferencedParam = 165,
        eBufferSize = 166,
        eLogBuffer = 167,
        eLoggingType = 168,
        eLogInterval = 169,
        eStartTime = 170,
        eStopTime = 171,
        eStopOnFull = 172,
        eNotificationThreshold = 173,
        eRecordCount = 174,
        eTotalRecordCount = 175,
        eInstObjectName = 1000,
        eInstDescription = 1001,
        eActiveEvent = 1002,
        Additional = 2000,
        eEnManualRm = 1500,
        eValManualRm = 1501
    }
    type BaTextAddressingParameter = BaParameterId.eDescription | BaParameterId.eInstDescription | BaParameterId.eObjectName | BaParameterId.eInstObjectName | BaParameterId.eSymbolName | BaParameterId.eSymbolPath;
    function isBaTextAddressingParameter(p: any): p is BaTextAddressingParameter;
    enum BaParameterCategory {
        addressing = 0,
        dataExchange = 1,
        configuration = 2,
        operationalData = 3,
        eventManagement = 4,
        trending = 5,
        scheduling = 6,
        controlling = 7,
        deviceManagement = 8,
        networkManagement = 9,
        hardware = 10,
        additional = 99,
        miscellaneous = 999
    }
    /**
     * BaParameterIds in this array will not be displayed in the generic parameter dialog.
     * By default no BaParameterIds are hidden.
     */
    let HiddenBaParameterIds: BaParameterId[];
    /**
     * Assigns the different BaParameterIds to the different parameter categories.
     * The order of categories and the order in the BaParameterId array will be used in the generic parameter dialog.
     */
    let BaParameterCategories: Map<BaParameterCategory, BaParameterId[]>;
    enum OperationType {
        Invalid = -1,
        eNone = 0,
        eSetpoint = 1,
        eDisplayValue = 2
    }
    enum NodeType {
        Undefined = 0,
        eUnknown = 10,
        eOther = 11,
        eGeneral = 12,
        eLocation = 13,
        eBuilding = 14,
        eBuildingElement = 15,
        eInformationFocus = 16,
        eControlCabinet = 17,
        eTrade = 18,
        eFloor = 19,
        eRoom = 20,
        ePlant = 21,
        eComponent = 22,
        eAggregate = 23,
        eFunction = 24
    }
    namespace LanguageManager {
        enum EChoice {
            Invalid = 0,
            en_US = 1,
            de_DE = 2
        }
    }
}
//# sourceMappingURL=BaEnums.d.ts.map
declare namespace TcHmi.BuildingAutomation.BA {
    interface IBaScope {
        /** Read access of the BaVariable. */
        readonly Read: Role;
        /** Write access of the BaVariable. */
        readonly Write: Role;
    }
    /**
     * Validates the interface 'IBaScope'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isBaScope(p: any): p is BA.IBaScope;
    interface BaIdentifier {
        ObjectType: ObjectType;
        InstanceID: number;
    }
    /**
     * Validates the interface 'BaIdentifier'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isBaIdentifier(p: any): p is BA.BaIdentifier;
    interface BaIdentifierEx {
        instancePath: string;
        deviceName: string;
    }
    /**
     * Validates the interface 'BaIdentifierEx'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isBaIdentifierEx(p: any): p is BA.BaIdentifierEx;
    interface BaSubjectInfo {
        Identifier: string;
        Index: number;
        Hash: number;
    }
    /**
     * Validates the interface 'BaSubjectInfo'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isBaSubjectInfo(p: any): p is BA.BaSubjectInfo;
    interface BaObjectParameter {
        ReferenceObject: BaBasicObject;
        ReferenceObjectIdentifier: BaIdentifier;
        ReferencedParameter: BaParameterId;
        OwnerObject: BaBasicObject;
    }
    interface IBaObjectParameterAttributes {
        ReferenceObject: BaBasicObject.IBaBasicObjectAttributes;
        ReferenceObjectIdentifier: BaIdentifier;
        ReferencedParameter: BaParameterId;
        OwnerObject: BaBasicObject.IBaBasicObjectAttributes;
    }
    /**
     * Validates the interface 'BaObjectParameter'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isBaObjectParameterAttributes(p: any): p is BA.IBaObjectParameterAttributes;
    interface ClassValue {
        bVal: boolean;
        rVal: number;
        udiVal: number;
    }
    /**
     * Validates the interface 'ClassValue'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isClassValue(p: any): p is BA.ClassValue;
    /**
     * Create JSON object with default values based on interface 'ClassValue'.
     * @returns JSON object based on interface 'ClassValue'.
     */
    function createEmptyClassValue(): ClassValue;
    interface EnumInfo {
        sName: string;
        sDescription: string;
        sShortcut: string;
    }
    interface StatusFlagBits {
        InAlarm: boolean;
        Fault: boolean;
        Overridden: boolean;
        OutOfService: boolean;
    }
    /**
     * Validates the interface 'StatusFlagBits'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isStatusFlagBits(p: any): p is BA.StatusFlagBits;
    interface EventIcon {
        eEventType: EventType;
        eState: EventIconState;
    }
    interface EventsPerIconImage {
        /** Most priorized icon state with one or more active events */
        eMostPriorisedState: EventIconState;
        /** Count of active events referred to most priorised icon state} */
        nCount: number;
    }
    interface StatusFlags {
        bInAlarm: boolean;
        bFault: boolean;
        bOverridden: boolean;
        bOutOfService: boolean;
    }
    type EventConditionFlags = boolean[];
    type EventTransitions = boolean[];
    type EventTransitionText = string[];
    interface LimitParam {
        bEnable: true;
        fValue: number;
    }
    interface IBaTime {
        /** Hour (0..23) */
        nHour: number;
        /** Minute (0..59) */
        nMinute: number;
        /** Second (0..59) */
        nSecond: number;
    }
    /**
     * Validates the interface 'BaTime'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    interface IBaDate {
        /** Year minus 1900 */
        nYear: number;
        eMonth: Month;
        /** Day of month (1..31) */
        nDay: Day;
        eDayOfWeek: Weekday;
    }
    interface IBaDateTime {
        stDate: IBaDate;
        stTime: IBaTime;
    }
    interface DateRange {
        stDateFrom: IBaDate;
        stDateTo: IBaDate;
    }
    interface WeekNDay {
        eMonth: Month;
        eWeekOfMonth: Week;
        eWeekday: Weekday;
    }
    interface DateVal {
        stDate: IBaDate;
        stDateRange: DateRange;
        stWeekNDay: WeekNDay;
    }
    interface CalendarEntry {
        eType: DateValChoice;
        uDate: DateVal;
    }
    type CalendarDateList = CalendarEntry[];
    /**
     * Validates the interface 'BaDate'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isBaDate(p: any): p is BA.IBaDate;
    /**
     * Create JSON object with default values based on interface 'IBaDate'.
     * @returns JSON object based on interface 'IBaDate'.
     */
    function createEmptyIBaDate(): IBaDate;
    /**
     * Validates the interface 'BaDateTime'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isBaDateTime(p: any): p is BA.IBaDateTime;
    function isBaTime(p: any): p is BA.IBaTime;
    type StateText = string;
    type StateTextArray = StateText[];
    interface SchedEntry {
        eState: SchedEntryState;
        stTime: IBaTime;
        uValue: ClassValue;
    }
    interface SchedException {
        aEntry: SchedExceptionEntryList;
        eType: DateValChoice;
        uDate: DateVal;
    }
    interface SchedCalendar {
        stRefCalendarID: {
            eObjectType: ObjectType;
            nInstanceID: number;
        };
        aEntry: SchedEntry[];
    }
    type SchedExceptionEntryList = SchedEntry[];
    type SchedExceptionList = SchedException[];
    type SchedCalendarList = SchedCalendar[];
    type SchedWeek = SchedEntry[][];
    /**
     * Validates the interface 'SchedEntry'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isSchedEntry(p: any): p is BA.SchedEntry;
    /**
     * Create JSON object with default values based on interface 'SchedEntry'.
     * @returns JSON object based on interface 'SchedEntry'.
     */
    function createEmptySchedEntry(): SchedEntry;
    interface TrendEntry {
        TimeStamp: Date;
        StatusFlags: StatusFlagBits;
        Value: boolean | number | null;
        Events?: TrendEntryEvents;
    }
    interface TrendEntryEvents {
        Start: boolean;
        Stop: boolean;
        BufferPurged: boolean;
        Interrupted: boolean;
    }
}
//# sourceMappingURL=BaInterfaces.d.ts.map
declare namespace TcHmi.BuildingAutomation.BA {
    /** Class that holds all data of a BaObject and additional methods. */
    class BaObject<P extends BaInterfaceHandler.IBaInterfaceStructure = any> extends BaBasicObject<P> {
        constructor(baObj: BaBasicObject.IBaBaseBasicObjectAttributes, mapping: string, device: BaDevice, isTop?: boolean);
        private __addMenuEntryReferredTrend;
        setAttributes(baObj: BaObject.IBaObjectAttributes): void;
        /**
         * Get the referring objects of this BaObject.
         */
        getReferringObjectsAsync(): Promise<BaObjectParameter[] | null>;
        openParameterDialog(show?: 'Events' | 'Parameter'): Components.DialogWindow | null | undefined;
    }
    namespace BaObject {
        type IBaObject = IBaObjectAttributes & BaObject;
        /** Interface that defines the properties of a BaObject. */
        interface IBaObjectAttributes extends BaBasicObject.IBaBasicObjectAttributes {
        }
    }
    class BaEventObject extends BaObject implements IBaEventEnabled {
        constructor(baObj: BaBasicObject.IBaBaseBasicObjectAttributes, mapping: string, device: BaDevice, isTop?: boolean);
        Event?: BaEvent | null | undefined;
        eventHandler: BaEventObject.EventHandling;
        setAttributes(baObj: BaEventObject.IBaEventObjectAttributes): void;
        destroy(): void;
    }
    namespace BaEventObject {
        type IBaEventObject = IBaEventObjectAttributes & BaEventObject;
        /** Interface that defines the properties of a BaEventObject. */
        interface IBaEventObjectAttributes extends IBaEventEnabledAttributes {
            /** Event of a BaObject. */
            Event?: BaEvent.IBaEvent | null | undefined;
        }
        /**
         * Validates the interface 'IBaEventObjectAttributes'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isIBaEventObjectAttributes(p: any): p is IBaEventObjectAttributes;
        /**
         * Handles the events of an {@link BaEventObject}.
         */
        class EventHandling extends BaEventEnabledObjectHandling {
            /**
             * Handles the events of an event enabled {@link BaEventObject}.
             * @param baObj The owner {@link BaEventObject} of the event handling.
             */
            constructor(baObj: BaEventObject);
            protected __owner: BaEventObject;
            private __eventWatchIds;
            watchEventsPerIcon(cb: (data: Map<EventCondition, EventsPerIconImage>) => any): number;
            stopAllEventsPerIconWatches(): void;
        }
    }
    class BaTrendObject extends BaEventObject {
        constructor(baObj: BaBasicObject.IBaBaseBasicObjectAttributes, mapping: string, device: BaDevice, isTop?: boolean);
        openParameterDialog(show?: 'Events' | 'Parameter'): Components.DialogWindow | null | undefined;
    }
    /** Class that holds all data of a BaEvent and additional methods. */
    class BaEvent implements BaEvent.IBaEvent {
        readonly TimeStamp: Date | null;
        readonly Type: EventType;
        readonly State: EventIconState;
        readonly IsHistorical: boolean;
        readonly LockPriority: LockPriority;
        readonly Identifier: BaIdentifier;
        readonly DeviceName: string;
        readonly IsActive?: boolean;
        readonly EventClassId: number;
        readonly EventClassInstanceDescription: string;
        readonly EventClassDescription: string;
        readonly RefObject: BaEventObject;
        private __watchEventCallbacks;
        /**
         * Symbol for watching the events of the BaObject.
         * @category Symbols
         */
        private __eventSubscriptionId;
        protected __logger: Logger;
        constructor(baEvent: BaEvent.IBaEvent, refObj: BaEventObject);
        /**
         * Watch the event.
         * @param callback Callback is called with the current event and if the event has changed.
         * @returns The id for the created watch. This id is needed to destroy this watch.
         */
        watch(callback: (data?: BaEvent.IBaEvent) => void): number;
        /**
         * Stops a specified event watch.
         * @param id The id of the watch.
         */
        stopWatchEvent(id: number): void;
        /**
         * Stops watching of the event.
         */
        stopAllEventsPerIconWatches(): void;
        /**
         * Acknowledge the event.
         */
        acknowledge(): void;
        /**
         * Destroys internals of the BaObject (Symbols, Watches, ...).
         */
        destroy(): void;
    }
    namespace BaEvent {
        /** Interface that describes a BaEvent. */
        interface IBaEvent {
            readonly TimeStamp: Date | null;
            readonly Type: EventType;
            readonly State: EventIconState;
            readonly IsActive?: boolean;
            readonly IsHistorical: boolean;
            readonly LockPriority: LockPriority;
            readonly Identifier: BaIdentifier;
            readonly DeviceName: string;
            readonly EventClassId: number;
            readonly EventClassInstanceDescription: string;
            readonly EventClassDescription: string;
        }
        /**
         * Validates the interface 'BaEvent'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isBaEvent(p: any): p is IBaEvent;
    }
    namespace EventHelper {
        /** Define the maximum event condition which will be displayed. */
        let MaximumEventCondition: Map<Role, EventCondition>;
        /**
         * Invokes the passed callbacks with the provided events, depending on the defined {@link MaximumEventCondition}.
         * @param events The events to be passed to the callbacks.
         * @param cbs The callsbacks to be invoked.
         */
        function invokeEventCallbacks(events: Map<EventCondition, EventsPerIconImage> | undefined, cbs: ((data: Map<EventCondition, EventsPerIconImage>) => any)[]): void;
    }
}
//# sourceMappingURL=BaObject.d.ts.map
declare namespace TcHmi.BuildingAutomation {
    class BaObjectHandler implements IDestroy {
        constructor(ctrl: BaObjectHandler.IUsesBaObject);
        /** Owner of the BaObjectHandler instance */
        private __owner;
        /**
         * The BA object or view
         * @category Internal
         */
        private __baObject;
        private __baVariable;
        private __loadBaChildren;
        private __loadTexts;
        private __baObjectSymbolExpression;
        /**
         * Stores all watch identifiers for BaVariables that have been created with this instance.
         * @category Internal
         */
        private __baVarWatchIdentifier;
        /**
         * Stores watch identifiers for children of BaObject.
         * @category Internal
         */
        private __baChildrenWatchIdentifier;
        /**
         * Stores {@link DestroyFunction}s for value range watches.
         * @category Internal
         */
        private __baWatchValueRangeDestroyers;
        /**
         * DESCRIPTION
         * @category Internal
         */
        private __loadingReadyResolver;
        /**
         * Indicates whether the BaObject is still loading.
         * @category Internal
         */
        private __isLoadingBaObject;
        /**
         * Destroyer for the onDevcieConnectionStateChanged event of the device.
         * @category Internal
         */
        private __destroyOnDeviceConnectionStateChanged;
        /**
         * Checks if the BaObject is currently loading.
         * @category Public
         * @returns True when the BaObject was loaded, otherwise false.
         */
        isLoadingBaObject(): Promise<boolean>;
        destroy(): void;
        /**
         * Defines if all children are loaded when a BaObject (as an BaView) was set.
         */
        set loadChildren(p: boolean);
        /**
         * Defines if all texts are loaded when a BaObject (as an BaView) was set.
         */
        set loadTexts(p: boolean);
        /**
         * Gets the BaObject.
         * @category Public
         * @returns The BaObject.
         */
        get baObject(): BA.BaBasicObject<any> | null | undefined;
        /**
         * Sets the BaVariable.
         * @category Public
         */
        set baVariable(p: BA.BaVariable | null | undefined);
        /**
         * Gets the BaVariable.
         * @category Public
         * @returns The BaVariable.
         */
        get baVariable(): BA.BaVariable | null | undefined;
        /**
         * Gets the SymbolExpression of the BaObject.
         * @category Public
         * @returns The SymbolExpression of the BaObject.
         */
        get baObjectSymbolExpression(): SymbolExpression | null;
        /**
         * Sets the BaObject.
         * @category Public
         * @param p The new BaObject or null.
         * @param options Options for setting the BaObject.
         * @returns The BaObjectHandler.
         */
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | string | null | undefined, options?: BaObjectHandler.ISetBaObjectOptions): this;
        /**
         * Resolve the given information to create a BaObject.
         * @category Public
         * @param p Information to obtain a BaObject from.
         * @param loadChildren Defines if children are loaded when a BaObject (as an BaView) was set.
         * @param loadTexts Defines if all texts are loaded when a BaObject (as an BaView) was set.
         * @param ctrl Control that is owner of the BaObjectHandler instance.
         */
        static resolveBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | string | null | undefined, loadChildren?: boolean, loadTexts?: boolean, ctrl?: Components.Base.IBase): Promise<BaObjectHandler.IResolveBaObject>;
        /**
         * Reads a BaBasicObject from the server.
         * @category Public
         * @param mapping The symbol expression for the BaBasicObject.
         * @param includeChildren Defines if children of the BaObject should be loaded.
         * @param includeTexts Defines if the texts of the BaObject are loaded.
         */
        static readBaObject(mapping: string, includeChildren?: boolean, includeTexts?: boolean): Promise<BA.BaBasicObject<any>>;
        /**
         * Adds a watch to the given BaVariable. The watch will be destroyed once the class is destroyed.
         * @category Public
         * @param baVar The variable to watch.
         * @param callback Callback is called if the value of the variable has changed.
         * @param setBusy (Default true) If true the control will be set to busy when the variable is read the first time.
         */
        watchBaVariable<T>(baVar: BA.BaVariable<T>, callback: (data: T | null | undefined) => void, setBusy?: boolean): BA.BaVariable.IBaVariableWatchIdentifier;
        /**
         * Try watching a BaVariable.
         * @category Public
         * @param baVarId Id of the BaVariable.
         * @param callback Callback is called if the value of the variable has changed.
         * @param setBusy (Default true) If true the control will be set to busy when the variable is read the first time.
         * @returns Returns IBaVariableWatchIdentifier.
         */
        tryWatchBaVariable<T>(baVarId: BA.BaParameterId, callback: (data: T | null | undefined) => void, setBusy?: boolean): BA.BaVariable.IBaVariableWatchIdentifier | undefined;
        /**
         * Tries to watch a BaVariable of a child of the BaView.
         * @category Public
         * @param child Child of the BaView.
         * @param baVarId BaVariableId of the BaVariable to watch.
         * @param callback Callback to be called.
         * @param setBusy (Default true) If true the control will be set to busy when the variable is read the first time.
         * @returns Returns TRUE if watch was created successfully. FALSE if not.
         */
        tryWatchChildrenBaVariable<T>(child: BA.BaBasicObject | null | undefined, baVarId: BA.BaParameterId, callback: (data: T | null | undefined) => any, setBusy?: boolean): boolean;
        /**
         * Watch the value range of a specific variable.
         * @param baVarId The ID or the instance of the BaParameter whose value range should be watched.
         * @param callback The callback which will be invoked, when the value range has changed.
         * @param setBusy (Default true) If true the control will be set to busy when the value range is read the first time.
         */
        watchValueRange(baVarId: BA.BaVariable | BA.BaParameterId, callback: (data: BA.BaVariable.ValueRange | undefined) => void, setBusy?: boolean): boolean;
        onBaObjectChanged(callback: (data: BA.BaBasicObject | null | undefined) => void): TcHmi.DestroyFunction;
        /**
         * Internal setter for the BaObject.
         * @category Internal
         * @param p The BaObject.
         * @param options Options for setting the BaObject.
         */
        private __setBaObjectInternal;
        /**
         * Stops all watches for the created identifiers.
         * @category Internal
         */
        private __stopAllWatches;
    }
    namespace BaObjectHandler {
        enum Events {
            /** Is fired if the BaObject has changed. */
            onBaObjectChanged = "onBaObjectChanged"
        }
        interface IUsesBaObject extends Components.Base.IBase {
            /**
             * Handles all work for the BaBasicObject.
             * @category Public
             */
            baObjectHandler: BaObjectHandler;
            /**
            * Process BaObject.
            * @category Public
            */
            processBaObject: () => void;
        }
        interface IFCUsesBaObject extends IUsesBaObject {
            /**
             * Sets the BaObject attribute.
             * @category Attribute setter
             * @param p New BaObject or NULL.
             * @returns Returns the control.
             */
            setBaObject: (p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined) => this;
            /**
             * Gets the BaObject attribute.
             * @category Attribute getter
             * @returns The BaObject attribute.
             */
            getBaObject: () => BA.BaBasicObject | null | undefined;
        }
        interface IResolveBaObject {
            baObject: BA.BaBasicObject | null | undefined;
            baVariable: BA.BaVariable | null | undefined;
        }
        interface ISetBaObjectOptions {
            /** Defines if the onPropertyChanged event for the BaObject attribute is fired for the parent control of the owner of the BaObjectHandler. */
            notifyOwnerParent?: boolean;
        }
        /**
         * Validates the interface IUsesBaObject.
         * @param p The input that should be checked.
         * @returns Returns TRUE if the input is valid. FALSE if not.
        */
        function isIUsesBaObject(p: object | null | undefined): p is BaObjectHandler.IUsesBaObject;
    }
}
//# sourceMappingURL=BaObjectHandler.d.ts.map
declare namespace TcHmi.BuildingAutomation.BA {
    /** Class for a BaVariable. */
    class BaVariable<T = any> implements Navigation.INodeData, Logger.ILogger {
        constructor(baVar: BaVariable.IBaVariableAttributes<T>, refObj: BaBasicObject, parentVariable?: BaVariable<T>);
        /** Value of the BaVariable. BETA Value is currently only availiable for primitive values because BA do not support non primitive values yet. */
        Value?: T;
        /** Information about the BaVariable. */
        Info: BaVariable.IBaParameterInfo;
        /** Access of the BaVariable. */
        readonly Access: IBaScope;
        /** Data type of the BaVariable (e.g. string, number, object, enum). */
        readonly DataType: DataType | null;
        /** If DataType is "array" the ArrayType of the BaVariable describes which data type the entries of the array have. */
        readonly ArrayType: DataType | null;
        /** BETA Used to display structured BaVariables or arrays. */
        readonly Children?: Map<string, BaVariable> | null;
        /** Mapping to access the data in the BaExtension. BETA Or to read data directly from the PLC. */
        readonly Mapping: string;
        /** The reference object to built the Mapping. */
        readonly RefObject: BaBasicObject;
        /** If the Value is temporary edited but not yet written to the server you can save the value here. */
        editedValue?: T;
        /** Subscription identifier if a subscription for the BaVariable was created. */
        private __subscriptionIdentifier;
        /** Collection of callbacks that are called when the watch was triggered. */
        private __watchCallbacks;
        /** The category of the variable. */
        private __category;
        /**
         * Collection of callbacks for BaVariables that are not periodically updated.
         * Those will be called by calling {@link BaBasicObject.updateObjectInfo} and than calling {@link invokeNoWatchCallbacks}.
         */
        private __noWatchCallbacks;
        /** Stores the different BaVariable requests for getting the {@link BaVariable.ValueRange}. */
        private static __requestedValueRanges;
        /** Stores the resolvers for getting the {@link BaVariable.ValueRange}. */
        private static __valueRangeResolvers;
        /** Stores the resolvers for getting the {@link BaVariable.ValueRange}. */
        private static __valueRangeRejecters;
        /** Callbacks for the {@link BaVariable.ValueRange} watches registered by {@link watchValueRange}. */
        private __valueRangeCallbacks;
        /** The original mapping which is not changed to the ads mapping. */
        private __originalMapping;
        /** Destroy function for the OnBaVariablesParameterInformationLoaded event. */
        private __destroyOnBaParameterInformationLoaded;
        private __symbol;
        logger: Logger;
        /**
         * ID of the BaVariable.
         * @category Property
         */
        get ID(): BaParameterId;
        /**
         * Instance name of the BaVariable.
         * @category Property
         */
        get InstanceName(): string;
        /**
         * Identifier if the value of the BaVariable is primitive or not.
         * @category Property
         */
        get HasPrimitiveValue(): boolean;
        /**
         * Title of the BaVariable.
         * @category Property
         */
        get Title(): string;
        /**
         * The category of the BaVariable.
         * @category Property
         */
        get Category(): BaParameterCategory;
        /**
         * Checks if the current user has sufficient access.
         * @category Public
         * @param scope The scope for which the acces will be checked.
         * @returns True if the user has sufficient access, otherwise false.
         */
        checkUserAccess(scope: Scope): boolean;
        /**
         * Get the {@link BaVariable.ValueRange} of the {@link BaVariable}.
         * The method will also invoke all callbacks registered from {@link watchValueRange}.
         * @category Public
         */
        getValueRangeAsync(): Promise<BaVariable.ValueRange>;
        /**
         * Updates the {@link BaVariable.ValueRange} of the {@link BaVariable}. All callbacks registered with {@link watchValueRange} will be raised.
         * @category Public
         */
        updateValueRangeAsync(): Promise<void>;
        /**
         * Watch the value range of a BaVariable. Value ranges will not be updated automatically. To update them you need to call {@link updateValueRangeAsync}.
         * @category Public
         * @param callback The callback which will be invoked when the value range has changed. (Use BaBasicObject.updateObjectInfo()).
         * @returns The {@link DestroyFunction} to destroy the watch.
         */
        watchValueRange(callback: Server.Callback<BaVariable.ValueRange>): DestroyFunction;
        /**
         * Get the decorating info of a BaVariable.
         * @category Public
         */
        getDecoratingInfoAsync(): Promise<object | null>;
        /**
         * Get the mapping for a property of the BaVariable (e.g. Title).
         * @category Public
         * @param prop The name of the property (e.g. Title).
         * @returns The mapping for the property.
         */
        getPropertyMapping(prop: string): string;
        /**
         * Get the to the BaVariable corresponding expression (e.g. '%s%MAIN.fbTest.bTest%/s%').
         * @category Public
         * @returns The expression for the BaVariable.
         */
        toExpression(): string;
        /**
         * Create a watch for the variable.
         * @category Public
         * @param callback Callback is called if the value of the variable has changed.
         * @returns The id for the created watch. This id is needed to destroy this watch.
         */
        watch(callback: (data: T | null | undefined) => void): number;
        /**
         * Invokes the callbacks that are registered for BaVariables, which are not periodically updated.
         * @category Public
         */
        invokeNoWatchCallbacks(): void;
        /**
         * Stops a specified watch.
         * @category Public
         * @param id The id of the watch.
         */
        stopWatch(id: number): void;
        /**
         * Stops watching of the BaVariable.
         * @category Public
         */
        stopAllWatches(): void;
        /**
         * Number of registered watch callbacks.
         * @category Public
         */
        watchesCount(): number;
        /**
         * Create a read for the variable.
         * @category Public
         * @param callback Callback is called if the value of the variable was read.
         */
        read(): Promise<T | undefined>;
        /**
         * Writes a new value to the variable in the server.
         * @category Public
         * @param value The value to write.
         * @param cb Callback when the value was written.
         */
        write<T>(value: T, cb?: (data: TcHmi.Server.IResultObject<T>) => any): void;
        /**
         * Destroys internals of the BaVariable (Symbols, Watches, ...).
         * @category Public
         */
        destroy(): void;
        /**
         * Processes the value after it was read or updated.
         * @category Internal
         * @param data The new value of the BaVariable.
         */
        private __processValue;
        /**
         * Creates the subscription for the values of the BaVariable.
         * @category Internal
         */
        private __createSubscription;
        /**
         * Stops the subscription for the values of the BaVariable.
         * @category Internal
         */
        private __stopSubscription;
        /**
         * Processes the {@link Server.BaSite.IGetReferringObjectsServerResult} of a BaVariable.
         * @param objParam The server result.
         * @returns The {@link BaObjectParameter} of the referring object.
         */
        static processBaObjectParameter(objParam: Server.BaSite.IGetReferringObjectsServerResult): Promise<BaObjectParameter | undefined>;
        /**
         * Checks if the ID is of an object info ID (not changing -> only manual update) or not.
         * @category Public
         * @param id The ID to check.
         * @returns True if the ID is an object info (not changing -> only manual update) and false if it can change frequently.
         */
        private static __isPeriodicallyUpdatedVariable;
    }
    namespace BaVariable {
        interface IBaParameterInfo {
            /** Title of the BaVariable (localized). */
            readonly Title: string;
            /** ID of the BaVariable. */
            readonly ID: BaParameterId;
            /** Identifier if the value of the BaVariable is primitive or not. */
            readonly HasPrimitiveValue: boolean;
            /** Instance name of the BaVariable. */
            readonly InstanceName: string;
        }
        /**
         * Validates the interface 'IBaParameterInfo'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isIBaParameterInfo(p: any): p is IBaParameterInfo;
        /** A collection of {@link IBaParameterInfo}. */
        type BaParameterInformation = Map<string, IBaParameterInfo>;
        interface IBaDecoratedParameterInfo extends IBaParameterInfo {
            readonly Decorated: string;
        }
        /**
         * Validates the interface 'IBaDecoratedParameterInfo'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isIBaDecoratedParameterInfo(p: any): p is IBaDecoratedParameterInfo;
        interface IBaDecoratingParameterInfo extends IBaParameterInfo {
            readonly Decorating: boolean;
        }
        /**
         * Validates the interface 'IBaDecoratingParameterInfo'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isIBaDecoratingParameterInfo(p: any): p is IBaDecoratingParameterInfo;
        interface IBaEnumeratedParameterInfo extends IBaParameterInfo {
            readonly Enumerated: {
                [index: number]: string;
            };
        }
        /**
         * Validates the interface 'IBaEnumeratedParameterInfo'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isIBaEnumeratedParameterInfo(p: any): p is IBaEnumeratedParameterInfo;
        interface IBaEnumeratingParameterInfo extends IBaParameterInfo {
            readonly Enumerating: boolean;
        }
        /**
         * Validates the interface 'IBaEnumeratingParameterInfo'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isIBaEnumeratingParameterInfo(p: any): p is IBaEnumeratingParameterInfo;
        /** Interface that defines the properties of a BaVariable. */
        interface IBaVariableAttributes<T = any> {
            /** Value of the BaVariable. BETA Value is currently only availiable for primitive values because BA do not support non primitive values yet. */
            Value?: T;
            /** Information about the BaVariable. */
            Info: IBaParameterInfo;
            /** Access of the BaVariable. */
            Access: IBaScope;
            /** Data type of the BaVariable (e.g. string, number, object, enum). */
            DataType: DataType | null;
            /** If DataType is "array" the ArrayType of the BaVariable describes which data type the entries of the array have. */
            ArrayType?: DataType | null;
            /** BETA Used to display structured BaVariables or arrays. */
            Children?: Map<string, BaVariable.IBaVariableAttributes<T>> | null;
        }
        /**
         * Validates the interface 'BaVariable'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isIBaVariableAttributes<T>(p: any): p is BaVariable.IBaVariableAttributes;
        /** Variables of a BaBasicObject that can be used for displays. */
        type DescriptionVariables = BaParameterId.eInstDescription | BaParameterId.eDescription | BaParameterId.eObjectName | BaParameterId.eInstObjectName | BaParameterId.eSymbolPath;
        /** Interface that describes the information for a watch on a certain BaVariable of a BaBasicObject. */
        interface IBaVariableWatchIdentifier {
            /** InstanceName */
            InstanceName: string;
            WatchId: number;
        }
        /** The value range of a {@link BaBasicObject}. E.g., active/inactive texts for binary objects or state texts for multistate objects. */
        type ValueRange = Map<number, string>;
        /** Requests made with {@link BaVariable.getValueRangeAsync} are collected to combine them. If this wait time expires, the request will be send to the server.  */
        let GetValueRangeWaitTime: number;
        class Error extends BaseError {
            constructor(message: string, baVar: BaVariable, options?: IBaseErrorOptions);
        }
    }
}
//# sourceMappingURL=BaVariable.d.ts.map
declare namespace TcHmi.BuildingAutomation.BA {
    /** Class that holds the data of a BaView and additional methods. */
    export class BaView<T extends BaView.BaTemplateStructure = any, P extends BaInterfaceHandler.IBaInterfaceStructure = any> extends BaBasicObject<P> implements IBaEventEnabled {
        constructor(baView: BaBasicObject.IBaBaseBasicObjectAttributes, mapping: string, device: BaDevice, isTop?: boolean);
        Events?: BaEvent[] | null | undefined;
        Children: Map<string, BaBasicObject<any>>;
        eventHandler: BaView.EventHandling;
        /**
         * All properties regarding to the template handling
         * @category Internal
         */
        private __template;
        setAttributes(baView: BaView.IBaViewAttributes): void;
        getIsValid(includeChildren?: boolean, includeTexts?: boolean): this is Required<BaView>;
        getIconAttributes(): Icons.IIconAttributes;
        updateObjectInfo(): Promise<void>;
        openParameterDialog(show?: 'Events' | 'Parameter'): Components.DialogWindow | null | undefined;
        /**
         * Filter the children of the BaView that match the condition specified in a callback function.
         * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each child of the BaView.
         * @returns The children of the BaView that meet the condition specified in a callback function
         */
        filterChildren(predicate: (val: BaBasicObject) => boolean): BaBasicObject<any>[];
        /**
         * Find a child by the identifier of its subject info.
         * @param identifier The identifier of the subject info.
         * @returns The found BaBasicObject or null.
         */
        findChildBySubjectInfoIdentifier(identifier: string): (BaBasicObject<any> & Required<Omit<BaBasicObject<any>, "AddParams">>) | null;
        /**
         * Get all trendable objects that are availiable in the BA.BaView.
         * @category Public
         * @returns The found trendable objects.
         */
        getTrendableObjects(): BaBasicObject<any>[];
        /**
         * Get all trend objects that are availiable in the BA.BaView.
         * @category Public
         * @returns The found trends.
         */
        getBaTrendObjects(): BaObject<any>[];
        /**
         * Get a specific child of the template
         * @param key The key in the template.
         * @returns The specific child of the template.
         */
        getTemplateChild<K extends keyof T>(key: K): (T[K] extends {
            subTemplate: Dictionary<any>;
        } ? BaView<T[K]['subTemplate']> : BaBasicObject) | null;
        /**
         * Verfifies if the BaView fits to a certain BaTemplate.
         * @param baView The BaView to be checked.
         * @param def The used template definition.
         * @param desc The used template description.
         */
        static verifyTemplate<S extends BaView.BaTemplateStructure>(baView: BaView, def: BaView.BaTemplateDefinition<S>, desc: BaView.BaTemplateDescription<S>): baView is BaView<S>;
        /**
         * Goes through all children and returns every child that fits to the template.
         * @param baView The BaView whose children should be filtered for matching BaViews.
         * @param def The used template definition.
         * @param desc The used template description.
         * @returns All children that fit to the template.
         */
        static getTemplates<S extends BaView.BaTemplateStructure>(baView: BaView, def: BaView.BaTemplateDefinition<S>, desc: BaView.BaTemplateDescription<S>): BaView<S>[];
        static getTemplates<S extends BaView.BaTemplateStructure>(baView: BaView, def: BaInterfaceHandler.BaInterfaceDefinition<S>, desc: BaInterfaceHandler.BaInterfaceSymbolNames<S>): BaBasicObject<S>[];
        /**
         * Logs a warning for an incorrect bound BaView.
         * @param logger The logger which is used to log.
         * @param ctrlName The name of the control.
         * @param boundBaView The bound BaView.
         */
        logIncorrectTemplate(logger: Logger): Promise<void>;
        /**
         * Destroys internals of the BaView (Symbols, Watches, ...).
         */
        destroy(): void;
    }
    export namespace BaView {
        interface IBaViewAttributes extends IBaEventEnabledAttributes {
            Events?: BaEvent[] | null | undefined;
            EventsPerIcon?: Dictionary<EventsPerIconImage> | null | undefined;
            /** Children of the BaObject. */
            Children?: Map<string, BaBasicObject.IBaBasicObjectAttributes | IBaViewAttributes>;
        }
        /**
         * Validates the interface 'IBaViewAttributes'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isIBaViewAttributes(p: any): p is BaView.IBaViewAttributes;
        /**
         * Validates the Children of an BaObject.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isBaViewChildren(p: any): p is Map<string, BaBasicObject> | Dictionary<BaBasicObject>;
        /** If true all BaViews will have the same icon, which means the {@link BA.NodeType} will be ignored. */
        let DisableNodeTypeIcons: boolean;
        /**
         * Handles the events of an {@link BaView}.
         */
        class EventHandling extends BaEventEnabledObjectHandling {
            /**
             * Handles the events of an event enabled {@link BaView}.
             * @param baObj The owner {@link BaView} of the event handling.
             */
            constructor(baObj: BaView);
            protected __owner: BaView;
            private __eventSubscriptionId;
            setAttributes(baView: BaView.IBaViewAttributes): void;
            watchEventsPerIcon(cb: (data: Map<EventCondition, EventsPerIconImage>) => any): number;
            stopAllEventsPerIconWatches(): void;
        }
        function isBaTemplateDescriptionWithSubTemplate<T extends BaView.BaTemplateStructure>(p: any): p is BaTemplateDescriptionWithSubTemplate<T>;
        type BaTemplateStructure = {
            [index: string]: any;
        };
        type BaTemplateDefinition<T extends BaTemplateStructure> = {
            [K in keyof T]-?: T[K] extends {
                subTemplate: BaTemplateStructure;
            } ? BaTemplateDefinitionWithSubTemplate<T[K]['subTemplate']> : Omit<BaTemplateChild, 'identifier'>;
        };
        type BaTemplateDescription<T extends BaTemplateStructure> = {
            [K in keyof T]: T[K] extends {
                subTemplate: BaTemplateStructure;
            } ? BaTemplateDescriptionWithSubTemplate<T[K]['subTemplate']> : Omit<BaTemplateChild, 'optional'>;
        };
        function isBaTemplateDescription<T extends BaView.BaTemplateStructure>(p: any): p is BaTemplateDescription<T>;
    }
    type BaTemplateChild = {
        optional?: boolean;
        identifier: string;
    };
    type BaTemplateDefinitionWithSubTemplate<T extends BaView.BaTemplateStructure> = Omit<BaTemplateChild, 'identifier'> & {
        subTemplate: BaView.BaTemplateDefinition<T>;
    };
    type BaTemplateDescriptionWithSubTemplate<T extends BaView.BaTemplateStructure> = BaTemplateChild & {
        subTemplate: BaView.BaTemplateDescription<T>;
    };
    export {};
}
//# sourceMappingURL=BaView.d.ts.map
declare namespace TcHmi.BuildingAutomation.Charting {
    class Axis implements IDestroy {
        constructor(id: string, parent: Chart);
        /**
         * Holds the information about the axis in the format for the setOption() method of echarts.
         * @category Public
         */
        echartsOption: echarts.XAXisComponentOption | echarts.YAXisComponentOption;
        /**
         * The unique ID of the axis.
         * @category Attribute
         */
        protected __id: string;
        /**
         * The name the axis.
         * @category Attribute
         */
        protected __name: string | undefined;
        /**
         * The name the axis.
         * @category Attribute
         */
        protected __options: Axis.IOptions | null;
        /**
         * The unit of the axis.
         * @category Attribute
         */
        protected __unit: string | undefined;
        /**
         * Color of the axis, line and labels.
         * @category Attribute
         */
        protected __color: Color.RGBAColor | undefined;
        /**
         * The datatype of the displayed data.
         * @category Attributes
         */
        protected __dataType: DataType | undefined;
        /**
         * Text which will be displayed if data type is boolean and the value is true.
         * @category Attributes
         */
        private __activeText;
        /**
         * Text which will be displayed if data type is boolean and the value is false.
         * @category Attributes
         */
        private __inactiveText;
        /**
         * Texts that are displayed if the data type is enum.
         * @category Attributes
         */
        private __stateTexts;
        /**
         * The parent graph of the axis.
         * @category Internal
         */
        protected __parent: Chart;
        /**
         * The series that are linked to this axis.
         * @category Internal
         */
        protected __linkedSeries: SeriesLine[] | undefined;
        /**
         * Use to log message or validate result objects.
         * @category Internal
         */
        protected __logger: Logger;
        /**
         * Handler when the axis was clicked.
         * @category Event handler
         */
        protected __axisClickedHandler: (params: {
            componentType: string;
            targetType: 'axisLabel' | 'axisName';
            xAxisIndex?: number;
            yAxisIndex?: number;
        }) => void;
        /**
         * Opens a dialog to configure axis settings.
         * @category Internal
         */
        private __openConfigureAxisDialog;
        /**
         * Set the complete options for the Axis.
         * @category Public
         * @param option The echart option for the Axis
         * @returns The Axis
         */
        updateEchartsOption(): void;
        /**
         * Resets the echart option to the default values of an axis.
         * @category Public
         */
        resetToDefault(): void;
        /**
         * Get the index of this axis in the collection of axes in the parent graph.
         * @category Public
         */
        getAxisIndex(): number;
        /**
         * Get the Id of the axis.
         * @category Public
         */
        getId(): string;
        /**
         * Creates a fromatter for labels depending on the current data type.
         * @category Public
         */
        getFormatter(): ((value: any) => string);
        /**
         * Get the required space that is needed to show all labels and name.
         * @category Public
         */
        getRequiredSpace(): number;
        /**
         * Hide the axis in the chart.
         * @category Public
         */
        hide(): void;
        /**
         * Get if the axis is hided.
         * @category Public
         * @returns True if the axis is hided and false if not.
         */
        getIsHided(): boolean;
        /**
         * Show the axis in the chart.
         * @category Public
         */
        show(): void;
        /**
         * Updates the colors of the axis.
         * @category Public
         */
        updateColors(): void;
        /**
         * Add a series that is linked to this axis
         * @category Public
         * @param series The series to link with this axis.
         */
        addLinkedSeries(series: SeriesLine): void;
        /**
         * Remove a series link from this axis
         * @category Public
         * @param series The series whose is to be removed.
         */
        removeLinkedSeries(series: SeriesLine): boolean;
        /**
         * Get the series that are linked to this axis.
         * @cateogry Public
         * @returns The series that are linked to this axis.
         */
        getLinkedSeries(): SeriesLine[] | undefined;
        destroy(): void;
        /**
         * Setter for the Name attribute.
         * @category Attribute setter and getter
         * @param p The new Name or null.
         * @returns The Axis.
         */
        setName(p: string | null | undefined): this;
        /**
         * Processor for the Name attribute.
         * @category Attribute setter and getter
         */
        protected __processName(): void;
        /**
         * Getter for the Name attribute.
         * @category Attribute setter and getter
         * @returns The Name attribute.
         */
        getName(): string | null | undefined;
        /**
         * Setter for the Options attribute.
         * @category Attribute setter and getter
         * @param p The new Options or null.
         * @returns The Axis.
         */
        setOptions(p: Axis.IOptions | null | undefined): this;
        /**
         * Processor for the Options attribute.
         * @category Attribute setter and getter
         */
        protected __processOptions(): void;
        /**
         * Getter for the Options attribute.
         * @category Attribute setter and getter
         * @returns The Options attribute.
         */
        getOptions(): Axis.IOptions | null;
        /**
         * Setter for the Unit attribute.
         * @category Attribute setter and getter
         * @param p The new Unit or null.
         * @returns The Axis.
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
         * Setter for the Color attribute.
         * @category Attribute setter and getter
         * @param p The new Color or null.
         * @returns The Axis.
         */
        setColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the Color attribute.
         * @category Attribute setter and getter
         */
        protected __processColor(): void;
        /**
         * Getter for the Color attribute.
         * @category Attribute setter and getter
         * @returns The SplColorit attribute.
         */
        getColor(): Color.RGBAColor | undefined;
        /**
         * Setter for the ActiveText attribute.
         * @category Attribute setter and getter
         * @param p The new ActiveText or null.
         * @returns The Axis.
         */
        setActiveText(p: string | null | undefined): this;
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
         * Setter for the InactiveText attribute.
         * @category Attribute setter and getter
         * @param p The new InactiveText or null.
         * @returns The Axis.
         */
        setInactiveText(p: string | null | undefined): this;
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
         * @returns The Axis.
         */
        setStateTexts(p: Components.Combobox.IItem<number>[] | null | undefined): this;
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
    }
    namespace Axis {
        interface IOptions {
            autoScale?: boolean;
            min?: number | string;
            max?: number | string;
        }
        /**
         * Defines the default size of the axis options dialog.
         * Default is {	height: 180, width: 350 }.
         */
        let DefaultAxisOptionsDialogSize: {
            height: number;
            width: number;
        };
    }
    /** Data type of an X Axis. */
    type XAxisDataType = DataType.dateTime | DataType.number | DataType.unknown;
    /** Data type of an Y Axis. */
    type YAxisDataType = DataType.boolean | DataType.number | DataType.enum | DataType.unknown;
    /**
     * Validates the XAxisDataType
     * @param p The value to be validated.
     * @returns True if the value is of type XAxisDataType, otherwise false.
     */
    function isXAxisDataType(p: any): p is XAxisDataType;
    /**
     * Validates the YAxisDataType
     * @param p The value to be validated.
     * @returns True if the value is of type YAxisDataType, otherwise false.
     */
    function isYAxisDataType(p: any): p is YAxisDataType;
    class YAxis extends Axis {
        constructor(id: string, parent: Chart);
        echartsOption: echarts.YAXisComponentOption;
        /**
         * The datatype of the displayed data.
         * @category Attributes
         */
        protected __dataType: YAxisDataType | undefined;
        resetToDefault(): void;
        destroy(): void;
        /**
         * Setter for the DataType attribute.
         * @category Attribute setter and getter
         * @param p The new DataType or null.
         * @returns The YAxis.
         */
        setDataType(p: YAxisDataType | null | undefined): this;
        /**
         * Processor for the DataType attribute
         * @category Attribute setter and getter
         */
        protected __processDataType(): void;
        /**
         * Getter for the DataType attribute.
         * @category Attribute setter and getter
         * @returns The DataType attribute.
         */
        getDataType(): YAxisDataType | undefined;
        protected __processName(): void;
        protected __processUnit(): void;
    }
    class XAxis extends Axis {
        constructor(id: string, parent: Chart);
        echartsOption: echarts.XAXisComponentOption;
        /**
         * The datatype of the displayed data.
         * @category Attributes
         */
        protected __dataType: XAxisDataType | undefined;
        /**
         * Identifies if a handle is shown.
         * @category Attributes
         */
        protected __showAxisHandle: boolean;
        updateEchartsOption(): void;
        updateColors(): void;
        resetToDefault(): void;
        /**
         * Setter for the DataType attribute.
         * @category Attribute setter and getter
         * @param p The new DataType or null.
         * @returns The XAxis.
         */
        setDataType(p: XAxisDataType | null | undefined): this;
        /**
         * Processor for the DataType attribute
         * @category Attribute setter and getter
         */
        protected __processDataType(): void;
        /**
         * Getter for the DataType attribute.
         * @category Attribute setter and getter
         * @returns The DataType attribute.
         */
        getDataType(): XAxisDataType | undefined;
        /**
         * Setter for the ShowAxisHandle attribute.
         * @category Attribute setter and getter
         * @param p The new ShowAxisHandle or null.
         * @returns The Axis.
         */
        setShowAxisHandle(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowAxisHandle attribute.
         * @category Attribute setter and getter
         */
        protected __processShowAxisHandle(): void;
        /**
         * Getter for the ShowAxisHandle attribute.
         * @category Attribute setter and getter
         * @returns The ShowAxisHandle attribute.
         */
        getShowAxisHandle(): boolean;
        protected __processName(): void;
        protected __processUnit(): void;
    }
}
//# sourceMappingURL=Axis.d.ts.map
declare namespace TcHmi.BuildingAutomation.Charting {
    class Chart extends Components.Base implements Components.ResizeHandler.IOnResized {
        constructor(id: string, parent: Components.IBaseNode | null);
        resizeHandler: Components.ResizeHandler;
        /**
         * Identifies if the data zoom is shown.
         * @category Attribute
         */
        protected __showDataZoom: boolean;
        /**
         * Identifies if the handle on the x axis is shown.
         * @category Attribute
         */
        protected __showXAxisHandle: boolean;
        /**
         * Container where ECharts draws the graph.
         * @category Elements
         */
        protected __echartsContainer: JQuery<HTMLDivElement>;
        /**
         * Collection of x axes (currently just one).
         * @category Elements
         */
        protected __xAxes: XAxis[];
        /**
         * Collection of y axes.
         * @category Elements
         */
        protected __yAxes: YAxis[];
        /**
         * Collection of data series.
         * @category Elements
         */
        protected __series: SeriesLine[];
        /**
         * The echart instance in the echart container.
         * @category Internal
         */
        protected __echart: echarts.ECharts;
        /**
         * The currently used colors of the chart.
         * @category Internal
         */
        protected __usedColors: {
            text: Color.RGBAColor;
            handles: Color.RGBAColor;
            lines: Color.RGBAColor;
        };
        /**
         * Destroy function for the onThemeDataChanged.
         * @category Internal
         */
        private __themeDataChangeDF;
        /**
         * Id for the timeout that will be wait before echart gets updated.
         * @category Internal
         */
        private __collectChangesTimeoutId;
        /**
         * Handler for the onThemeDataChanged event.
         * @category Event handler
         */
        private __themeDataChangedHandler;
        protected __autoDrawEnabled: boolean;
        /**
         * Minium space between the grid and the outer border of the __echartsContainer element.
         * @category Constants
         */
        protected readonly __minSpaceGrid = 35;
        /**
         * Space that will be added to he grid.bottom value when DataZoom is shown.
         * @category Constants
         */
        protected readonly __spaceDataZoomSliderX: {
            bottom: number;
            side: number;
        };
        /**
         * Space that will be added to he grid.bottom value when x axis handle is shown.
         * @category Constants
         */
        protected readonly __spaceXAxisHandle = 30;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Callback when the size of the graph has changed.
         * @category Event callbacks
         */
        onResized(): void;
        /**
         * Raised when a series was added to the chart.
         * @param newSeries
         */
        protected __onSeriesAdded(newSeries: SeriesLine): void;
        /**
         * Raised when a series was removed from the chart.
         * @param newSeries
         */
        protected __onSeriesRemoved(removedSeries: SeriesLine): void;
        /**
         * Updates the echarts by setting the setOption method.
         * @category Public
         */
        protected __updateEchartsOption(): void;
        /**
         * Set options for the grid of echarts.
         * @category Public
         * @param p The options that should be set.
         */
        protected __setGrid(p: echarts.GridComponentOption, gridIndex: number): void;
        /**
         * Updates the colors of the chart.
         * @category Internal
         */
        protected __updateColors(): void;
        /**
         * Validates if series where added to the chart. If not an error indicator will be displayed.
         * @category Internal
         */
        protected __validateAddedSeries(): void;
        /**
         * Add an y axis to the chart.
         * @category Public
         */
        addYAxis(id?: string): YAxis | undefined;
        /**
         * Remove an YAxis from the chart.
         * @category Public
         * @param id The id of the YAxis or the YAxis to be removed.
         */
        removeYAxis(id: string | YAxis): boolean;
        /**
         * Add an y axis to the chart.
         * @category Public
         */
        addXAxis(id?: string): XAxis | undefined;
        /**
         * Remove an XAxis from the chart.
         * @category Public
         * @param id The id of the XAxis or the XAxis to be removed.
         */
        removeXAxis(id: string | XAxis): boolean;
        /**
         * Get a series line by its ID.
         * @category Public
         * @param id The ID of the series line.
         * @returns The series line.
         */
        getSeriesLine(id: string | SeriesLine): SeriesLine | undefined;
        /**
         * Add a data series line to the chart.
         * @category Public
         */
        addSeriesLine(id?: string, opt?: SeriesLine.ISeriesLineOptions): SeriesLine | undefined;
        /**
         * Remove a series from the chart.
         * @category Public
         * @param id The id of the series or the series to be removed.
         */
        removeSeriesLine(id: string | SeriesLine): boolean;
        /**
         * Removes all series from the chart.
         * @category Public
         */
        removeAllSeriesLine(): void;
        /**
         * Enables auto drawing when changes have been made to the echart option.
         * @category Public
         */
        enableAutoDraw(enable?: boolean): void;
        /**
         * Update the offsets of the created axes.
         * @category Public
         */
        updateGrid(): void;
        /**
         * Get the instance of echarts.
         * @category Public
         */
        getEchart(): echarts.ECharts;
        /**
         * Set the complete options for the graph.
         * @category Public
         * @param option The echart option for the graph
         * @returns The Graph
         */
        setEchartOption(option: echarts.EChartsCoreOption): this;
        /**
         * Get the current options of echarts.
         * @category Public
         */
        getEchartOption(): echarts.EChartsCoreOption;
        /**
         * Get the currently created y axes.
         * @category Public
         */
        getYAxes(): YAxis[];
        /**
         * Get a certain y axis by its id.
         * @param id The id of the y axis.
         * @returns The YAxis or undefined if none was found.
         */
        getYAxis(id: string): YAxis | undefined;
        /**
         * Get the currently created x axes.
         * @category Public
         */
        getXAxes(): XAxis[];
        /**
         * Get a certain x axis by its id.
         * @param id The id of the x axis.
         * @returns The XAxis or undefined if none was found.
         */
        getXAxis(id: string): XAxis | undefined;
        /**
         * Get the currently created data series.
         * @category Public
         */
        getSeries(): SeriesLine[];
        /**
         * Get a specific series by its id.
         * @category Public
         * @param id The id of the series.
         */
        getSpecificSeries(id: string): SeriesLine | undefined;
        /**
         * Reset the data zoom.
         * @category Public
         */
        restore(): void;
        /**
         * Get the currently used colors.
         * @category Public
         */
        getUsedColors(): {
            text: Color.RGBAColor;
            handles: Color.RGBAColor;
            lines: Color.RGBAColor;
        };
        /**
         * Setter for the ShowDataZoom attribute.
         * @category Attribute setter and getter
         * @param p The new ShowDataZoom or null.
         * @returns The Axis.
         */
        setShowDataZoom(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowDataZoom attribute.
         * @category Attribute setter and getter
         */
        protected __processShowDataZoom(): void;
        /**
         * Getter for the ShowDataZoom attribute.
         * @category Attribute setter and getter
         * @returns The ShowDataZoom attribute.
         */
        getShowDataZoom(): boolean;
        /**
         * Setter for the ShowXAxisHandle attribute.
         * @category Attribute setter and getter
         * @param p The new ShowXAxisHandle or null.
         * @returns The Axis.
         */
        setShowXAxisHandle(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowXAxisHandle attribute.
         * @category Attribute setter and getter
         */
        protected __processShowXAxisHandle(): void;
        /**
         * Getter for the ShowXAxisHandle attribute.
         * @category Attribute setter and getter
         * @returns The ShowXAxisHandle attribute.
         */
        getShowXAxisHandle(): boolean;
    }
    namespace Chart {
        enum ChartEvents {
            onOptionsChanged = "onOptionsChanged"
        }
    }
}
//# sourceMappingURL=Chart.d.ts.map
declare namespace TcHmi.BuildingAutomation.Charting {
    let DotSize: number;
    let DotSymbol: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none';
    class SeriesLine implements Logger.ILogger {
        constructor(id: string, parent: Chart, opt?: SeriesLine.ISeriesLineOptions);
        echartsOption: echarts.LineSeriesOption;
        /**
         * The unique ID of the series.
         * @category Attribute
         */
        protected __id: string;
        /**
         * The name of the series.
         * @category Attribute
         */
        protected __name: string | undefined;
        /**
         * The data of the serie.
         * @category Attribute
         */
        protected __data: SeriesLine.ISeriesLineData[] | undefined;
        /**
         * The YAxis of the serie.
         * @category Attribute
         */
        protected __yAxis: YAxis | null;
        /**
         * The YAxisIndex of the serie.
         * @category Attribute
         */
        protected __yAxisIndex: number;
        /**
         * The XAxis of the serie.
         * @category Attribute
         */
        protected __xAxis: XAxis | null;
        /**
         * The XAxisIndex of the serie.
         * @category Attribute
         */
        protected __xAxisIndex: number;
        /**
         * The data type of the serie.
         * @category Internal
         */
        protected __dataType: SeriesLine.ISeriesLineDataType;
        /**
         * Color of the axis, line and labels.
         * @category Attribute
         */
        protected __color: Color.RGBAColor | undefined;
        /**
         * The BA object or view
         * @category BA
         */
        protected __baObject: BA.BaBasicObject | null;
        /**
         * The parent graph of the series.
         * @category Internal
         */
        protected __parent: Chart;
        /**
         * The maximum x and y values of the series.
         * @category Internal
         */
        protected __maxData: {
            x: number | Date | null;
            y: number | boolean | null;
        };
        /**
         * The minimum x and y values of the series.
         * @category Internal
         */
        protected __minData: {
            x: number | Date | null;
            y: number | boolean | null;
        };
        protected __errObj: {
            series: SeriesLine;
            seriesDataType?: SeriesLine.ISeriesLineDataType;
            yAxisIndex?: number;
            yAxis?: YAxis;
            yAxisDataType?: DataType;
        } | undefined;
        /**
         * Identifies if the series is hided or not.
         * @category Internal
         */
        private __isHided;
        /**
         * Use to log message or validate result objects.
         * @category Internal
         */
        logger: Logger;
        /**
         * Handler when the series was clicked.
         * @category Event handler
         */
        private __seriesClickedHandler;
        /**
         * Detect the data type of a value for x axis.
         * @category Internal
         * @param p The value whose data type should be detected.
         * @returns The detected data type.
         */
        private __detectXAxisDataType;
        /**
         * Detect the data type of a value for a y axis.
         * @category Internal
         * @param p The value whose data type should be detected.
         * @returns The detected data type.
         */
        private __detectYAxisDataType;
        /**
         * Validates if all data in the set of data is consitent.
         * @param data The data to be checked.
         * @returns True if the date is consitent and false if not.
         */
        private __validateData;
        /**
         * Validates if the data type fits to the data type of the axis.
         * @param axis The axis to be checked.
         * @param dataType The data type to be checked.
         * @returns True if both data types are eqaul and false if not.
         */
        private __validateAxis;
        /**
         * Set the complete options for the Series.
         * @category Public
         * @param option The echart option for the Series
         * @returns The Series
         */
        updateEchartsOption(): void;
        /**
         * Verfiy the echarts option of the line series.
         * @category Public
         * @returns True if the data is valid and false if not.
         */
        verify(): boolean;
        /**
         * Get the index of this series in the collection of series of the parent graph.
         * @cateogry Public
         */
        getSeriesIndex(): number;
        /**
         * Get the Id of the axis.
         * @category Public
         */
        getId(): string;
        /**
         * Get the maximum x and y values of the series.
         * @category Public
         * @returns The maximum x and y values of the series.
         */
        getMaxData(): {
            x: number | Date | null;
            y: number | boolean | null;
        };
        /**
         * Get the minimum x and y values of the series.
         * @category Public
         * @returns The minimum x and y values of the series.
         */
        getMinData(): {
            x: number | Date | null;
            y: number | boolean | null;
        };
        /**
         * Add data to the current data.
         * @category Public
         * @param data A new data or data set to add to the exsiting data.
         */
        addData(data: SeriesLine.ISeriesLineData | SeriesLine.ISeriesLineData[]): SeriesLine;
        /**
         * Hide the series in the chart.
         * @category Public
         */
        hide(): void;
        /**
         * Show the series in the chart.
         * @category Public
         */
        show(): void;
        /**
         * Get the isHided flag.
         * @category Public
         * @returns True if the series is hided and false if not.
         */
        getIsHided(): boolean;
        /**
         * Setter for the Name attribute.
         * @category Attribute setter and getter
         * @param p The new Name or null.
         * @returns The Series.
         */
        setName(p: string | null | undefined): this;
        /**
         * Processor for the Name attribute.
         * @category Attribute setter and getter
         */
        protected __processName(): void;
        /**
         * Getter for the Name attribute.
         * @category Attribute setter and getter
         * @returns The Name attribute.
         */
        getName(): string | undefined;
        /**
         * Setter for the Data attribute.
         * @category Attribute setter and getter
         * @param p The new Data or null.
         * @returns The SeriesLine.
         */
        setData(p: SeriesLine.ISeriesLineData | SeriesLine.ISeriesLineData[] | null | undefined): this;
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
        getData(): SeriesLine.ISeriesLineData[] | undefined;
        /**
         * Setter for the YAxis attribute.
         * @category Attribute setter and getter
         * @param p The new YAxis or null.
         * @returns The SeriesLine.
         */
        setYAxis(p: YAxis | null | undefined): this;
        /**
         * Processor for the YAxis attribute.
         * @category Attribute setter and getter
         */
        protected __processYAxis(): void;
        /**
         * Getter for the YAxis attribute.
         * @category Attribute setter and getter
         * @returns The YAxis attribute.
         */
        getYAxis(): YAxis | null;
        /**
         * Getter for the YAxisIndex attribute.
         * @category Attribute setter and getter
         * @returns The YAxisIndex attribute.
         */
        getYAxisIndex(): number;
        /**
         * Setter for the XAxis attribute.
         * @category Attribute setter and getter
         * @param p The new XAxis or null.
         * @returns The SeriesLine.
         */
        setXAxis(p: XAxis | null | undefined): this;
        /**
         * Processor for the XAxis attribute.
         * @category Attribute setter and getter
         */
        protected __processXAxis(): void;
        /**
         * Getter for the XAxis attribute.
         * @category Attribute setter and getter
         * @returns The XAxis attribute.
         */
        getXAxis(): XAxis | null;
        /**
         * Getter for the XAxis attribute.
         * @category Attribute setter and getter
         * @returns The XAxis attribute.
         */
        getXAxisIndex(): number;
        /**
         * Setter for the DataType attribute. Must be set before setting the data of the series.
         * @category Attribute setter and getter
         * @param p The new DataType or null.
         * @returns The SeriesLine.
         */
        setDataType(p: SeriesLine.ISeriesLineDataType): this;
        /**
         * Getter for the DataType attribute.
         * @category Attribute setter and getter
         * @returns The DataType attribute.
         */
        getDataType(): SeriesLine.ISeriesLineDataType;
        /**
         * Setter for the Color attribute.
         * @category Attribute setter and getter
         * @param p The new Color or null.
         * @returns The SeriesLine.
         */
        setColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the Color attribute.
         * @category Attribute setter and getter
         */
        protected __processColor(): void;
        /**
         * Getter for the Color attribute.
         * @category Attribute setter and getter
         * @returns The SplColorit attribute.
         */
        getColor(): Color.RGBAColor | undefined;
        /**
         * Setter for the BaObject attribute.
         * @category Attribute setter and getter
         * @param p The new BaObject or null
         * @returns The Series.
         */
        setBaObject(p: BA.BaBasicObject | null | undefined): this;
        /**
         * Processor for the BaObject attribute. Method can be used in derived class to work with the BA object.
         * @category Attribute setter and getter
         */
        protected __processBaObject(): void;
        /**
         * Getter for the BaObject attribute.
         * @category Attribute setter and getter
         * @returns The BaObject attribute.
         */
        getBaObject(): BA.BaBasicObject | null | undefined;
    }
    namespace SeriesLine {
        /** Type of a single data point. */
        interface ISeriesLineData {
            /**
             * X value of the data point as number or date.
             * Set to null to interrupt line.
             */
            x: number | Date | null;
            /**
             * Y value of the data point as number or boolean.
             * Set to null to interrupt line.
             */
            y: number | boolean | null;
            /** Different options for a data point. */
            options?: {
                /**
                 * Symbol of single data.
                 * Icon types provided by ECharts includes `'circle'`, `'rect'`,
                 * `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`,
                 * `'none'`
                 *
                 * It can be set to an image with `'image://url'` , in which
                 * URL is the link to an image.
                 *
                 * An image URL example:
                 * ```
                 * 'image://http://xxx.xxx.xxx/a/b.png'
                 * ```
                 */
                symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none' | string;
                /**
                 * Single data symbol size.
                 * It can be set to single numbers like `10`, or use an array
                 * to represent width and height.
                 * For example, `[20, 10]` means symbol width is `20`, and height
                 * is`10`.
                 */
                symbolSize?: number | number[];
                /** Rotate degree of single data symbol. */
                symbolRotate?: number;
                /** Offset of single data symbol relative to original position. */
                symbolOffset?: number[];
                symbolColor?: Color.RGBAColor;
                /** Name which will be displayed in the label if label is shown. */
                name?: string;
                /** Options for the label of a single data. */
                label?: {
                    /** Show the label when true. */
                    show?: boolean;
                };
                /** Function will be called, when the data point was pressed. */
                onClicked?: (dataPoint: ISeriesLineData) => any;
            };
        }
        /**
         * Validates the interface 'ISeriesLineData'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
         */
        function isSeriesLineData(p: object | null | undefined): p is Charting.SeriesLine.ISeriesLineData;
        interface ISeriesLineOptions {
            name?: string | null;
            data?: ISeriesLineData | null;
            yAxis?: YAxis | null;
            xAxis?: XAxis | null;
            dataType?: ISeriesLineDataType | null;
            color?: Color.RGBAColor | null;
            baObject?: BA.BaBasicObject | null;
        }
        interface ISeriesLineDataType {
            x?: XAxisDataType;
            y?: YAxisDataType;
        }
    }
}
//# sourceMappingURL=Series.d.ts.map
declare namespace TcHmi.BuildingAutomation.Charting {
    class LineChart extends Chart {
        constructor(id: string, parent: Components.IBaseNode | null);
        /**
        * Button to open the menu.
        * @category Elements
        */
        protected __menuButton: Components.Button;
        /**
         * Menu for the graph.
         * @category Elements
         */
        protected __contextMenu: Components.ContextMenu;
        /**
         * Handler when the state of the show handle button has changed.
         * @categorxy Event handler
         */
        private __showHandleButtonChangedHandler;
        /**
         * Handler when the state of the show data zoom button has changed.
         * @categorxy Event handler
         */
        private __showDataZoomButtonChangedHandler;
        /**
         * Handler when the restore button was pressed.
         * @categorxy Event handler
         */
        private __restoreButtonPressedHandler;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        protected __updateColors(): void;
        addYAxis(id?: string): YAxis | undefined;
        addXAxis(id?: string): XAxis | undefined;
        removeAllSeriesLine(): void;
        updateGrid(): void;
        /**
         * Get the maxium x and y values from all created series.
         * @category Public
         * @returns The maximum x and y values fromm all created series.
         */
        getMaxData(): {
            x: number | Date | null;
            y: number | boolean | null;
        };
        /**
         * Get the minium x and y values from all created series.
         * @category Public
         * @returns The minimum x and y values fromm all created series.
         */
        getMinData(): {
            x: number | Date | null;
            y: number | boolean | null;
        };
        /**
         * Gets the menu button of the line chart (e.g. to append it somewhere else).
         * @category Public
         * @returns The menu button of the line chart.
         */
        getMenuButton(): Components.Button;
        /**
         * Gets the context menu of the line chart.
         * @category Public
         * @returns The context menu of the line chart.
         */
        getContextMenu(): Components.ContextMenu;
        protected __processShowDataZoom(): void;
        protected __processShowXAxisHandle(): void;
    }
}
//# sourceMappingURL=LineChart.d.ts.map
declare namespace TcHmi.BuildingAutomation {
    namespace Charting {
        class Trend extends LineChart implements BaObjectHandler.IUsesBaObject {
            constructor(id: string, parent: Components.IBaseNode | null);
            baObjectHandler: BaObjectHandler;
            /**
             * Container for the series selectors.
             * @cateogry Elements
             */
            private __seriesSelectorsContainer;
            /**
             * List to set visibility of all created series
             * @category Elements
             */
            private __seriesSelectors;
            /**
             * Toggle button to open or close the series selectors.
             * @category Elements
             */
            private __openSeriesSelectorsTB;
            /**
             * Stores trend settings.
             * @category Internal
             */
            private __settings;
            /**
             * The height of an binary grid.
             * @category Internal
             */
            protected readonly __binaryGridHeight = 30;
            /**
             * The collection of created online trends.
             * @category Internal
             */
            private static __onlineTrends;
            /**
             * Stores the id of the online trend internal.
             * @category Internal
             */
            private static __onlineTrendIntervalId;
            /**
             * Identifier for the watch if the BaTrends are updated automatically.
             * @category Internal
             */
            private __baTrendWatchIds;
            /**
             * Flag if BaTrends are updated automatically or not.
             * @category Internal
             */
            private __autoUpdateBaTrend;
            /**
             * Watch IDs for the different description variables.
             * @category Internal
             */
            private __baDescriptionWatchIds;
            /**
             * Handler when the toggle button to open the series selectors was toggled.
             * @category Event handler
             */
            private __openSeriesSelectorTBChangedHandler;
            /**
             * Handler when the update button was pressed.
             * @category Event handler
             */
            private __updateButtonPressedHandler;
            /**
             * Handler when the auto update checkbox state has changed.
             * @category Event handler
             */
            private __autoUpdateCbChangedHandler;
            __attach(): void;
            __detach(): void;
            destroy(): void;
            protected __onSeriesAdded(newSeries: SeriesLine): void;
            protected __onSeriesRemoved(removedSeries: SeriesLine): void;
            private __onSeriesVisibilityChangedAsync;
            /**
             * Loads the settings from the server.
             * @category Internal
             */
            private __loadSettingsAsync;
            /**
             * Saves the current settings to the server.
             * @category Internal
             */
            private __saveSettingsAsync;
            /**
             * Handler when a new interval was fired to add values to the online trend.
             * @category Internal
             * @param maxDataPoints Maximum data points of the online trend.
             */
            private static __onlineTrendIntervalHandler;
            /**
             * Set the y axis for a data series.
             * @category Internal
             * @param trend The trend.
             * @param baObj The BaObject of the data series.
             * @param dataSeries The data series whose y axis should be set.
             */
            private static __setBaTrendYAxisAsync;
            /**
             * Verifies that every boolean trend gets its own coordinate system.
             * @category Internal
             * @param trend The trend.
             */
            private static __verifyBooleanAxis;
            /**
             * Sets the axes for a binary trend.
             * @category Internal
             * @param trend The trend.
             * @param dataSeries The boolean data series.
             */
            private static __setBinaryTrendAxes;
            /**
             * Adds a new online trend data series for a trend.
             * @category Internal
             * @param trend The trend.
             * @param baObj The BaObject whose values should be trended.
             */
            private static __addBaOnlineTrendDataSeriesAsync;
            /**
             * Updates the data series of a BaTrend object.
             * @category Internal
             * @param trend The trend to be updated.
             */
            private __updateBaTrend;
            /**
             * Processes BA trend entries.
             * @category Internal
             * @param logEntries The entries to be processed.
             * @param trend The trend.
             */
            private __processLogEntries;
            /**
             * Toggles the visibility of a series.
             * @category Internal
             * @param series The series whose visibility should be toggled.
             * @param visible Flag if series will be visibile or not.
             */
            private __toggleSeriesVisibility;
            /**
             * Select which objects are displayed in the series selector menu.
             * @param val The type of objects that are displayed.
             */
            private __selectDisplayedObjectAsync;
            /**
             * Select which description variable should be displayed.
             * @param val The BaVariableId.
             */
            private __selectDisplayedDescriptionAsync;
            processBaObject(): void;
            /**
             * Adds a BaTrend object to the trend.
             * @category Public
             * @param trend The trend to be added.
             */
            addBaTrend(trend: BA.BaBasicObject): void;
            /**
             * Removes a BaTrend object to the trend.
             * @category Public
             * @param trend The trend to be removed.
             */
            removeBaTrend(trend: BA.BaBasicObject): boolean;
            /**
             * Checks if a trend object is already displayed in the trend.
             * @param trend The trend to be checked.
             * @returns True if the trend object is already in the trend, otherwise false.
             */
            containsBaTrend(trend: BA.BaBasicObject): boolean;
            /** Updates the grid.
             * @category Public
             */
            updateGrid(): void;
            /**
             * Creates an online trend for a single BaObject or a BaView.
             * @category Public
             * @param baObj The BaObject/BaView which should be trended.
             * @param interval The interval for new values.
             * @param maxDataPoints The maximum amount of values in the trend (FiFo).
             * @returns The created trend or null if BaObject/Baview is not trendable.
             */
            static createBaOnlineTrendAsync(baObj: BA.BaBasicObject | BA.BaView, interval?: number, maxDataPoints?: number): Promise<Trend | null>;
        }
        namespace Trend {
            enum DisplayedObjects {
                trendableObjects = 0,
                trendObjects = 1
            }
            /**
             * Defines the default displayed object.
             * Default is DisplayedObjects.trendableObjects.
             */
            let DefaultDisplayedObjects: DisplayedObjects;
            /**
             * Defines the default displayed description.
             * Default is BaParameterId.eInstDescription.
             */
            let DefaultDisplayedDescription: BA.BaVariable.DescriptionVariables;
            interface ISettings {
                displayedObjects?: DisplayedObjects;
                displayedDescription?: BA.BaVariable.DescriptionVariables;
                autoUpdate?: boolean;
                hiddenSeries?: string[];
            }
            interface ICollectionStorageData {
                [index: string]: CollectionConfigurator.ICollection;
            }
            class CollectionConfigurator {
                static collectionStorage: ICollectionStorageData | null | undefined;
                static logger: Logger;
                private static __currentCollectionName;
                /**
                 * Identifier of the root BaView of the configurator.
                 * @category Internal
                 */
                private static __currentRoot;
                /**
                 * Current configurator options.
                 * @category Internal
                 */
                private static __currentOpt;
                private static __displayedObjects;
                private static __selectedTrends;
                static readonly MAX_SELECTION = 10;
                private static __grid;
                private static __nameContainer;
                private static __list;
                private static __configuratorDialog;
                /**
                 * Initializes the collection configurator.
                 * @category Public
                 */
                static initAsync(): Promise<void>;
                /**
                 * Convert options for the list. Manipulates the created list with additional controls.
                 * @category Internal
                 */
                private static __getListConvertOptions;
                /**
                 * Set the data for the list where the objects that can be selected for the collection are displayed.
                 * @category Internal
                 */
                private static __setListDataAsync;
                /**
                 * Saves a created collection.
                 * @category Internal
                 */
                private static __saveCollectionAsync;
                /**
                 * Opens a window with the configurator.
                 * @category Public
                 * @param opt Optiones for the collection configurator.
                 */
                static openAsync(opt?: CollectionConfigurator.IOpenConfiguratorOptions): Promise<void>;
                /**
                 * Opens a dialog to select a created collection.
                 * @category Public
                 * @returns A promise which will deliver a collection name when full filled.
                 */
                static selectCollectionAsync(): Promise<string | null>;
                /**
                 * Get all created collections.
                 * @category Public
                 * @returns All created collections or null is none have been created.
                 */
                static getCollections(): ICollectionStorageData | null | undefined;
                /**
                 * Get a specific collection.
                 * @category Public
                 * @param collectionName The name of the collection.
                 * @returns The collection or null if the collection was not found.
                 */
                static getCollection(collectionName: string): CollectionConfigurator.ICollection | null;
                /**
                 * Checks if a collection exists.
                 * @category Public
                 * @param collectionName The name of the collection:
                 * @returns True if the collection exists, otherwise false.
                 */
                static hasCollection(collectionName: string): boolean;
                /**
                 * Removes an BaObject from a trend collection.
                 * @category Public
                 * @param collectionName The name of the collection.
                 * @param baObjId The identifier for the BaObject.
                 * @returns True if the BaObject has successfully been removed, otherwise false.
                 */
                static removeObjectFromCollectionAsync(collectionName: string, baObjId: BA.BaIdentifierEx): Promise<boolean>;
                /**
                 * Deletes a certain collection.
                 * @category Public
                 * @param collectionName The name of the collection.
                 * @param showConfirm Display a dialog to confirm deleting of the collection. Default is true.
                 * @returns True if the collection was successfully deleted, otherwise false.
                 */
                static deleteCollectionAsync(collectionName: string, showConfirm?: boolean): Promise<boolean>;
            }
            namespace CollectionConfigurator {
                interface ICollection {
                    /** BaObjects which are part of this selection. */
                    baObjects: BA.BaIdentifierEx[];
                    /** The root of the collection; Is need to edit the collection at a later pointer. */
                    root?: BA.BaIdentifierEx;
                }
                interface IOpenConfiguratorOptions {
                    /** The view whose children will be filtered for trendable objects or trend objects. */
                    baView?: BA.BaView;
                    /** Name of the collection that should be edited. */
                    collectionName?: string;
                    /** Maximum amount of selected trends. */
                    maxSelection?: number;
                    /** Defines if the dialog will be opened modal or not. */
                    modal?: boolean;
                }
                /**
                 * Defines the default width of the configurator dialog.
                 * Default is 1000px.
                 */
                let DefaultConfiguratorDialogWidth: number;
                /**
                 * Defines the default width of the trend collection selection dialog.
                 * Default is 400px.
                 */
                let DefaultTrendCollectionSelectionDialogWidth: number;
            }
            class CollectionView {
                private static __tabWindow;
                private static __dialog;
                /** The collections that are currently displayed by the CollectionView. */
                private static __collectionSelection;
                static logger: Logger;
                /**
                 * Initialize the collection view.
                 * @category Public
                 */
                static initAsync(): Promise<void>;
                /**
                 * Get the collection name of the current selected tab.
                 * @category Internal
                 * @returns The collection name of the current selected tab.
                 */
                private static __getSelectedCollectionName;
                /**
                 * Adds or updates a collection of the collection view.
                 * @category Public
                 * @param collectionName The name of the collection.
                 */
                static addOrUpdateCollectionAsync(collectionName: string): Promise<void>;
                /**
                 * Removes a collection from the collection view.
                 * @category Public
                 * @param collectionName The name of the collection.
                 * @param showConfirm Display a dialog to confirm removing of the collection from the view. Default is true.
                 */
                static removeCollectionAsync(collectionName: string, showConfirm?: boolean): Promise<void>;
                /**
                 * Open the collection view.
                 * @param collectionName When set the collection will be added to the collection view.
                 */
                static openAsync(collectionName?: string): Promise<void>;
                /**
                 * Check if there are already displayed trend collections in the collection view.
                 * @category Public
                 * @returns True if there are already displayed trend collections in the collection view, otherwise false.
                 */
                static showsTrendCollections(): boolean;
            }
        }
    }
}
//# sourceMappingURL=Trend.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    class BackgroundStyler implements Logger.ILogger {
        constructor(owner: IJQueryNode & IEventHandler, attr?: BackgroundStyler.IAttributes);
        /**
         * The control whose background should be styled.
         * @category Internal
         */
        private __owner;
        /**
         * Attributes for the background styler.
         * @category Internal
         */
        protected __attrHandler: AttributeHandler<BackgroundStyler.IAttributes>;
        logger: Logger;
        /**
         * If the image was set as a svg the svg will be stored in this property.
         * @category Elements
         */
        protected __svg: JQuery<SVGElement> | undefined;
        /**
         * Processor for the background. Handles background color and background image.
         * @category Internal
         */
        protected __processBackground(): void;
        /**
         * Processor for the imageHeight and imageWidth.
         * @category Internal
         */
        private __processImageSize;
        /**
         * Processor for the imageHorizontalAlignment and imageVerticalAlignment.
         * @category Internal
         */
        private __processImagePosition;
        /**
         * Get the control which uses this background styler.
         * @category Public
         * @returns The control which used this background styler.
         */
        getControl(): IJQueryNode & IEventHandler;
        /**
         * Getter for the background svg element.
         * @category Public
         * @returns The backgrund svg element if the background image was set as an svg and undefined if the background image was set as an normal image. */
        getSvg(): JQuery<SVGElement> | null;
        /**
         * Set all attributes of the BackgroundStyler.
         * @category Attributes
         * @param attr The new attributes for the BackgroundStyler.
         * @returns The BackgroundStyler.
         */
        setAttributes(attr: BackgroundStyler.IAttributes): this;
        /**
         * Getter for the current attributes.
         * @category Attributes
         * @returns The current attributes.
         */
        getAttributes(): BackgroundStyler.IAttributes;
        /**
         * Setter for the Color attribute. Valid css [color property](https://developer.mozilla.org/en-US/docs/Web/CSS/color).
         * @category Attribute setter and getter
         * @param p The new Color.
         * @param duration The duration to take when the color was changed (in milliseconds).
         * @returns The BackgroundStyler.
         */
        setColor(p: Color.RGBAColor | Color.LinearGradient | TcHmi.RGBAColor | Color.ILinearGradient | null | undefined, duration?: number | null): this;
        /**
         * Processor for the Color attribute.
         * @category Attribute setter and getter
         */
        protected __processColor(): void;
        /**
         * Getter for the Color attribute.
         * @category Attribute setter and getter
         * @returns The Color attribute.
         */
        getColor(): Color.RGBAColor | Color.LinearGradient | null | undefined;
        /**
         * Setter for the image attribute. Valid css [url path](https://developer.mozilla.org/en-US/docs/Web/CSS/url()).
         * ```` ts
         * setImage('Images/SubFolder/MyImage.svg')                   // relative path
         * setImage('/root/MyControl/Images/SubFolder/MyImage.png')   // absolute path
         * ````
         * @category Attribute setter and getter
         * @param p The new Image.
         * @returns The BackgroundStyler.
         */
        setImage(p: string | null | undefined, useSVG?: boolean | null): this;
        /**
         * Processor for the Image attribute.
         * @category Attribute setter and getter
         */
        protected __processImage(): void;
        /**
         * Getter for the Image attribute.
         * @category Attribute setter and getter
         * @returns The Image attribute.
         */
        getImage(): string | null | undefined;
        /**
         * Setter for the ImageHeight attribute.
         * @category Attribute setter and getter
         * @param p The new ImageHeight.
         * @param q The new ImageHeightUnit.
         * @returns The Control.
         */
        setImageHeight(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Getter for the ImageHeight attribute.
         * @category Attribute setter and getter
         * @returns The ImageHeight attribute.
         */
        getImageHeight(): number | null | undefined;
        /**
         * Getter for the ImageHeightUnit attribute.
         * @category Attribute setter and getter
         * @returns The ImageHeightUnit attribute.
         */
        getImageHeightUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the ImageWidth attribute.
         * @category Attribute setter and getter
         * @param p The new ImageWidth.
         * @param q The new ImageWidthUnit.
         * @returns The Control.
         */
        setImageWidth(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Getter for the ImageWidth attribute.
         * @category Attribute setter and getter
         * @returns The ImageWidth attribute.
         */
        getImageWidth(): number | null | undefined;
        /**
         * Getter for the ImageWidthUnit attribute.
         * @category Attribute setter and getter
         * @returns The ImageWidthUnit attribute.
         */
        getImageWidthUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the ImageHorizontalAlignment attribute.
         * @category Attribute setter and getter
         * @param p The new ImageHorizontalAlignment.
         * @returns The Control.
         */
        setImageHorizontalAlignment(p: HorizontalAlignment | null | undefined): this;
        /**
         * Getter for the ImageHorizontalAlignment attribute.
         * @category Attribute setter and getter
         * @returns The ImageHorizontalAlignment attribute.
         */
        getImageHorizontalAlignment(): HorizontalAlignment | null | undefined;
        /**
         * Setter for the ImageVerticalAlignment attribute.
         * @category Attribute setter and getter
         * @param p The new ImageVerticalAlignment.
         * @returns The Control.
         */
        setImageVerticalAlignment(p: VerticalAlignment | null | undefined): this;
        /**
         * Getter for the ImageVerticalAlignment attribute.
         * @category Attribute setter and getter
         * @returns The ImageVerticalAlignment attribute.
         */
        getImageVerticalAlignment(): VerticalAlignment | null | undefined;
        /**
         * Setter for the ImageColor attribute. Valid solid css [color property](https://developer.mozilla.org/en-US/docs/Web/CSS/color).
         * @category Attribute setter and getter
         * @param p The new ImageColor.
         * @param duration The duration to take when the color was changed (in milliseconds).
         * @returns The Control.
         */
        setImageColor(p: Color.RGBAColor | TcHmi.RGBAColor | null | undefined, duration?: number | null): this;
        /**
         * Processor for the ImageColor attribute.
         * @category Attribute setter and getter
         */
        protected __processImageColor(): void;
        /**
         * Getter for the ImageColor attribute.
         * @category Attribute setter and getter
         * @returns The ImageColor attribute.
         */
        getImageColor(): Color.RGBAColor | null | undefined;
        /**
         * Setter for the ImageRotation attribute.
         * @category Attribute setter and getter
         * @param p The new ImageRotation in deg.
         * @returns The Control.
         */
        setImageRotation(p: number | null | undefined): this;
        /**
         * Processor for the ImageRotation attribute.
         * @category Attribute setter and getter
         */
        protected __processImageRotation(): void;
        /**
         * Getter for the ImageRotation attribute.
         * @category Attribute setter and getter
         * @returns The ImageRotation attribute.
         */
        getImageRotation(): number | null | undefined;
        /**
         * Setter for the ImageRotationSpeed attribute.
         * @category Attribute setter and getter
         * @param p The new ImageRotationSpeed in s.
         * @returns The Control.
         */
        setImageRotationSpeed(p: number | null | undefined): this;
        /**
         * Processor for the ImageRotationSpeed attribute.
         * @category Attribute setter and getter
         */
        protected __processImageRotationSpeed(): void;
        /**
         * Getter for the ImageRotationSpeed attribute.
         * @category Attribute setter and getter
         * @returns The ImageRotationSpeed attribute.
         */
        getImageRotationSpeed(): number | null | undefined;
        /**
         * Setter for the ImageRotationSpeed attribute.
         * @category Attribute setter and getter
         * @param p The new ImageRotationSpeed in deg.
         * @returns The Control.
         */
        setImageRotationDirection(p: BackgroundStyler.RotationDirection | null | undefined): this;
        /**
         * Processor for the ImageRotationSpeed attribute.
         * @category Attribute setter and getter
         */
        protected __processImageRotationDirection(): void;
        /**
         * Getter for the ImageRotationSpeed attribute.
         * @category Attribute setter and getter
         * @returns The ImageRotationSpeed attribute.
         */
        getImageRotationDirection(): BackgroundStyler.RotationDirection | null | undefined;
        /**
         * Sets the ImageStrokeWidth attribute.
         * @category Attribute setter
         * @param p New ImageStrokeWidth attribute or NULL.
         * @returns Returns the control.
         */
        setImageStrokeWidth(p: number | null | undefined, q: DimensionUnit | null | undefined): this;
        /**
         * Processor for the ImageStrokeWidth attribute.
         * @category Internal
         */
        protected __processImageStrokeWidth(): void;
        /**
         * Gets the ImageStrokeWidth attribute.
         * @category Attribute getter
         * @returns Returns the ImageStrokeWidth attribute.
         */
        getImageStrokeWidth(): number | null | undefined;
        /**
         * Gets the ImageStrokeWidthUnit attribute.
         * @category Attribute getter
         * @returns Returns the ImageStrokeWidthUnit attribute.
         */
        getImageStrokeWidthUnit(): DimensionUnit | null | undefined;
    }
    namespace BackgroundStyler {
        enum RotationDirection {
            left = 0,
            right = 1
        }
        /**
         * Validates the enumaration 'RotationDirection'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isRotationDirection(p: any): p is RotationDirection;
        interface IAttributes {
            /** Background color of the element. */
            color?: Color.RGBAColor | Color.LinearGradient | null;
            /** Duration to take when background has changed. */
            colorChangeDuration?: number | null;
            /** Set true when the background image should be an svg and the svg content is passed into the element directly and not via <img>-tag. */
            useSVG?: boolean | null;
            /** Background image of the element. */
            image?: string | null;
            /** Color of the background image when useSVG is true. */
            imageColor?: Color.RGBAColor | null;
            /** Duration to take when the color of the background image has changed. */
            imageColorChangeDuration?: number | null;
            /** Height of the background image. */
            imageHeight?: number | null;
            /** Height unit of the background image. */
            imageHeightUnit?: DimensionUnit | null;
            /** Width of the background image. */
            imageWidth?: number | null;
            /** Width unit of the background image. */
            imageWidthUnit?: DimensionUnit | null;
            /** Horizontal alignment of the background image. */
            imageHorizontalAlignment?: HorizontalAlignment | null;
            /** Vertical alignment of the background image. */
            imageVerticalAlignment?: VerticalAlignment | null;
            /** Rotation of the background image in degree. */
            imageRotation?: number | null;
            /** Rotation direction of the background image. */
            imageRotationDirection?: RotationDirection | null;
            /** Rotation speed of the background image. */
            imageRotationSpeed?: number | null;
            /** The stroke width of the background image. */
            imageStrokeWidth?: number | null;
            /** The stroke width unit of the background image. */
            imageStrokeWidthUnit?: DimensionUnit | null;
        }
        enum Events {
            /** Is fired when the background svg was loaded. */
            onSvgLoaded = "onSvgLoaded"
        }
        let ImageFileEndings: string[];
    }
}
//# sourceMappingURL=BackgroundStyler.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Base class for all helper classes whose represent a control. */
    class Base extends BaseNode implements Base.IBase {
        constructor(id: string, parent?: IBaseNode | null);
        busyHandler: BusyHandler;
        errorIndicator: ErrorIndicator;
        /**
         * Handles the layout of the class.
         * @category Public
         */
        layoutHandler: LayoutHandler;
        /**
         * Styles the background of the class.
         * @category Public
         */
        backgroundStyler: BackgroundStyler;
        /**
         * Styles the border of the class.
         * @category Public
         */
        borderStyler: BorderStyler;
        protected __attrHandler: AttributeHandler<Base.IAttributes>;
        private __deviceDiagEventDf;
        /** @ignore */
        protected __attach(): void;
        /** @ignore */
        protected __detach(): void;
        /** @ignore */
        destroy(): void;
        /** @ignore
         * Gets the next attached parent of this instance.
         * @category Internal
         * @returns Returns the next attached parent. NULL if no attached parent was found.
         */
        private __getNextAttachedParent;
        /**
         * Checks the access right of the current user for this control, when the parent control is a TcHmiControl.
         * @category Public
         * @param right The right to check.
         * @returns True if the right is granted. False if the control does not have this right. Null when the access right cannot be decided.
         */
        checkAccess(right: Server.AccessRight): boolean | null;
        setAttributes(attr: Base.IAttributes): this;
        getAttributes(): Base.IAttributes;
        /**
         * Sets the ReadOnly attribute.
         * @category Attribute setter
         * @param p New ReadOnly attribute or NULL.
         * @returns Returns the control.
         */
        setReadOnly(p: boolean | null | undefined): this;
        /** @ignore
         * Processor for the ReadOnly attribute.
         * @category Internal
         */
        protected __processReadOnly(): void;
        /**
         * Gets the ReadOnly attribute.
         * @category Attribute getter
         * @returns Returns the ReadOnly attribute.
         */
        getReadOnly(): boolean | null | undefined;
        /**
         * Sets the ShowBusyIndicator attribute.
         * If ShowBusyIndicator is set to false, the BusyIndicator will not be displayed, even if the control was set to busy.
         * @category Attribute setter
         * @param p New ShowBusyIndicator attribute or NULL.
         * @returns Returns the control.
         */
        setShowBusyIndicator(p: boolean | null | undefined): this;
        /** @ignore
         * Processor for the ShowBusyIndicator attribute.
         * @category Internal
         */
        protected __processShowBusyIndicator(): void;
        /**
         * Gets the ShowBusyIndicator attribute.
         * @category Attribute getter
         * @returns Returns the ShowBusyIndicator attribute.
         */
        getShowBusyIndicator(): boolean | null | undefined;
        /**
         * Sets the IsEnabled attribute.
         * @category Attribute setter
         * @param p New IsEnabled attribute or NULL.
         * @returns Returns the control.
         */
        setIsEnabled(p: boolean | null | undefined): this;
        /** @ignore
         * Processor for the IsEnabled attribute.
         * @category Internal
         */
        protected __processIsEnabled(): void;
        /**
         * Gets the IsEnabled attribute.
         * @category Attribute getter
         * @returns Returns the IsEnabled attribute.
         */
        getIsEnabled(): boolean | null | undefined;
        /**
         * Sets the BoxShadow attribute. Valid CSS see [box-shadow property](https://developer.mozilla.org/de/docs/Web/CSS/box-shadow).
         * ```ts
         * setBoxShadow('5px 10px');
         * setBoxShadow('5px 10px #888888');
         * ```
         * @category Attribute setter
         * @param p New BoxShadow.
         * @returns Returns the control.
         */
        setBoxShadow(p: string | null | undefined): this;
        /** @ignore
         * Processor for the BoxShadow attribute.
         * @category Internal
         */
        protected __processBoxShadow(): void;
        /**
         * Gets the BoxShadow attribute.
         * @category Attribute getter
         * @returns Returns the BoxShadow attribute.
         */
        getBoxShadow(): string | null | undefined;
        /**
         * Sets the ContentPadding attribute.
         * @category Attribute setter
         * @param p New ContentPadding attribute.
         * @returns Returns the Control.
         */
        setContentPadding(p: FourSidedCss | number | null | undefined): this;
        /** @ignore
         * Processor for the ContentPadding attribute.
         * @category Internal
         */
        protected __processContentPadding(): void;
        /**
         * Gets the ContentPadding attribute.
         * @category Attribute getter
         * @returns Returns the ContentPadding attribute.
         */
        getContentPadding(): FourSidedCss | number | null | undefined;
    }
    namespace Base {
        /** DESCRIPTION */
        interface IAttributes extends BaseNode.IAttributes {
            /** Layout of the class. */
            layout?: LayoutHandler.IAttributes;
            /** Background of the class. */
            background?: BackgroundStyler.IAttributes;
            /** Border of the class. */
            border?: BorderStyler.IAttributes;
            /** Padding for the content of the class. */
            contentPadding?: FourSidedCss | number | null;
            /** Box shadow of the class. */
            boxShadow?: string | null;
            /** Defines if the class is displayed as enabled or disabled. */
            isEnabled?: boolean | null;
            /** Defines if the user can modify the class or not. */
            readOnly?: boolean | null;
            /** Defines if the busy indicator is shown, when the control gets busy. */
            showBusyIndicator?: boolean | null;
        }
        /** Interface for base controls. */
        interface IBase extends IBaseNode, Logger.ILogger, BusyHandler.IBusyHandler, ErrorIndicator.IErrorIndicator {
        }
        /**
         * Validates the interface IBase.
         * @param p The input that should be checked.
         * @returns Returns TRUE if the input is valid. FALSE if not.
        */
        function isIBase(p: object | null | undefined): p is Base.IBase;
    }
    class ErrorIndicator {
        constructor(ctrl: Base | TcHmi.Controls.System.baseTcHmiControl);
        /**
         * The control of the busy handler.
         * @category Internal
         */
        private __ctrl;
        private __legendIconHandler;
        /**
         * Get the control which uses this busy handler.
         * @category Public
         * @returns The control which used this busy handler.
         */
        getControl(): Controls.System.baseTcHmiControl | Base;
        /**
         * Set the control in the error state.
         * @category Public
         * @param level The level of the error.
         */
        set(level: ErrorIndicator.ErrorLevel): void;
        /**
         * Reset the control from the error state.
         * @category Public
         */
        reset(): void;
        /**
         * Event handler for the on pressed event on the ErrorIndicator. The handler will stop the propagation of the event.
         * @category Internal
         * @param ev The event.
         */
        private static __onPressedHandler;
        /**
         * Appends the error indicator to the element.
         * @category Public
         * @param el The element where the error indicator shall be appended.
         * @param level The level of the error.
         * @param legendIconHandler The icon of the {@link Components.LegendIconHandler} will be set.
         * @returns True if the error indicator was appended and false if the error indicator was already appended before.
         */
        static appendErrorIndicator(el: JQuery, level: ErrorIndicator.ErrorLevel, legendIconHandler?: Components.LegendIconHandler): boolean;
        /**
         * Detaches the error indicator from the control.
         * @param el The element where the error indicator shall be removed from.
         * @category Public
         */
        static detachErrorIndicator(el: JQuery): void;
    }
    namespace ErrorIndicator {
        interface IErrorIndicator {
            /**
             * Helper class to display if an error has occured.
             * @category Public
             */
            errorIndicator: ErrorIndicator;
        }
        enum ErrorLevel {
            error = 0,
            connection = 1
        }
    }
}
//# sourceMappingURL=Base.d.ts.map
declare namespace TcHmi.BuildingAutomation {
    /** DESCRIPTION */
    interface IHasId {
        /**
         * Getter for the ID.
         * @category Public
         * @returns The ID of the element.
         */
        getId: () => string;
    }
    /** DESCRIPTION */
    interface IDestroy {
        /**
         * Destroy all created classes that need to be destroyed.
         * Destroy all symbols and watches.
         * @category Management
         */
        destroy: () => void;
    }
    namespace Components {
        /** Describes a class with a JQuery node. */
        interface IJQueryNode extends IHasId {
            /**
             * Getter for the root html element.
             * @category Public
             * @returns The root html element.
             */
            getElement: () => JQuery;
        }
        /** Describes a class which can has children and a parent. */
        interface IParent extends IJQueryNode {
            /**
             * Handles all children of the control.
             * @category Public
             */
            childrenHandler: BaseNode.ChildrenHandler;
            /**
             * Gets the parent of the class.
             * @category Public
             * @returns The parent of the class.
             */
            getBaParent: () => IBaseNode | null | undefined;
        }
        /** Describes a basic node with several properties. */
        interface IBaseNode extends IJQueryNode, IDestroy, IParent, Logger.ILogger {
            /**
             * Checks if the control is attached to the DOM or not.
             * @category Public
             */
            getIsAttached: () => boolean;
        }
        /**
         * Class which supports general DOM functionalities like attach and detach detacing.
         * @typeParam Interface of the used attributes object.
         */
        class BaseNode implements IBaseNode, IEventHandler, Logger.ILogger {
            /**
             * Constructor of the BaseNode class.
             * @param id Unique Id of the class. Cannot be empty.
             * @param parent TcHmi parent of the class. Prerequisite to use TcHmi contols within the class.
             */
            constructor(id: string, parent?: IBaseNode | null);
            /**
             * DESCRIPTION
             * @category Public
             */
            childrenHandler: BaseNode.ChildrenHandler;
            /**
             * Use to log different messages to the console, to check attributes or result objects.
             * @category Public
             */
            logger: Logger;
            eventHandler: EventHandler<this>;
            /** @ignore
             * Attributes for the BaseNode.
             * @category Internal
             */
            protected __attrHandler: AttributeHandler<BaseNode.IAttributes>;
            /**
             * Event destroy functions which will be called when the control is detached.
             * @category Internal
             */
            protected __destroyersToCallOnDetach: DestroyFunction[];
            /**
             * Event destroy functions which will be called when the control is destroyed.
             * @category Internal
             */
            protected __destroyersToCallOnDestroy: DestroyFunction[];
            /** @ignore
             * The unique id of the control.
             * @category Internal
             */
            protected __id: string;
            /** @ignore
             * Flag when the control is already attached.
             * @category Internal
             */
            protected __isAttached: boolean;
            /** @ignore
             * Flag if the control was already destroyed.
             * @category Internal
             */
            protected __isDestroyed: boolean;
            /**
             * Id of the attach obserser for the root element of the BaseNode.
             * @category Internal
             */
            private __attachId;
            /** @ignore
             * Root HTML element of the class. All other HTML elements will be appended to this element.
             * @category Elements
             */
            protected __element: JQuery<HTMLElement>;
            /** @ignore
             * TcHmi parent of the class. TcHmi controls of this control will be childs of this parent control.
             * @category Elements
             */
            protected __baParent: IBaseNode | null | undefined;
            /** @ignore
             * Method is called when the element is attached to the DOM.
             * BETA Implement DOM listener to detect if the control was attached/detached. Should be protected.
             * @category Internal
             */
            protected __attach(): void;
            /** @ignore
             * Method is called when the element is dettached to the DOM.
             * BETA Implement DOM listener to detect if the control was attached/detached. Should be protected.
             * @category Internal
             */
            protected __detach(): void;
            /**
             * Destroys the current instance.
             * @category Public
             */
            destroy(): void;
            /**
             * Gets the id.
             * @category Public
             * @returns Returns the id of the element.
             */
            getId(): string;
            getBaParent(): IBaseNode | null | undefined;
            /**
             * Gets the root HTML element.
             * @category Public
             * @returns Returns the root HTML element.
             */
            getElement(): JQuery;
            /**
             * Sets the CSS display property of the root element to 'none'.
             * @category Public
             * @returns The BaseNode.
             */
            hide(): this;
            /**
             * Resets the CSS display property of the root element.
             * @category Public
             * @returns The BaseNode.
             */
            show(): this;
            /**
             * DESCRIPTION
             * @category Public
             */
            getIsAttached(): boolean;
            /**
             * Sets all attributes of the BaseNode.
             * @category Attribute setter
             * @param attr New attributes for the BaseNode.
             * @returns The BaseNode.
             */
            setAttributes(attr: BaseNode.IAttributes): this;
            /**
             * Gets the current attributes.
             * @category Attribute getter
             * @returns The current attributes.
             */
            getAttributes(): BaseNode.IAttributes;
            /**
             * Sets the Visibility attribute.
             * @category Attribute setter
             * @param p New Visibility.
             * @returns Returns the control.
             */
            setVisibility(p: Visibility | null | undefined): this;
            /** @ignore
             * Processor for the Visibility attribute.
             * @category Internal
             */
            protected __processVisibility(): void;
            /**
             * Gets the Visibility attribute.
             * @category Attribute getter
             * @returns Returns the Visibility attribute.
             */
            getVisibility(): Visibility | null | undefined;
            /**
             * Sets the Hide attribute.
             * @category Attribute setter
             * @param p New Hide.
             * @returns Returns the control.
             */
            setHide(p: boolean | null | undefined): this;
            /** @ignore
             * Processor for the Hide attribute.
             * @category Internal
             */
            protected __processHide(): void;
            /**
             * Gets the Hide attribute.
             * @category Attribute getter
             * @returns Returns the Hide attribute.
             */
            getHide(): boolean | null | undefined;
            /**
             * Sets the CssClass attribute.
             * @category Attribute setter
             * @param p New CssClass attribute or NULL.
             * @returns Returns the control.
             */
            setCssClass(p: string | null | undefined): this;
            /** @ignore
             * Processor for the CssClass attribute.
             * @category Internal
             */
            protected __processCssClass(): void;
            /**
             * Gets the CssClass attribute.
             * @category Attribute getter
             * @returns Returns the CssClass attribute.
             */
            getCssClass(): string | null | undefined;
        }
        namespace BaseNode {
            /** The attributes of a BaseNode. */
            interface IAttributes {
                /** Visibility of the class. */
                visibility?: Visibility | null;
                /** Hide the control (display: none) if true. */
                hide?: boolean | null;
                /** A single css class or a list of css classes (JQuery addClass syntax) */
                cssClass?: string | null;
            }
            /** The events that can be fired by a BaseNode */
            enum BaseNodeEvents {
                /** Is fired if the control was attached to the DOM. */
                onAttached = "onAttached",
                /** Is fired if the control was detached to the DOM. */
                onDetached = "onDetached",
                /** Is fired if the control was destroyed. */
                onDestroyed = "onDestroyed"
            }
            class ChildrenHandler {
                /**
                 * Constructor of the ChildrenHandler class.
                 * @param ctrl DESCRIPTION
                 */
                constructor(ctrl: IParent);
                /** @ignore
                 * The control of the children handler.
                 * @category Internal
                 */
                private __ctrl;
                /** @ignore
                 * The children of the class.
                 * @category Internal
                 */
                protected __children: Map<string, IBaseNode>;
                /**
                 * Adds a child.
                 * @category Public
                 * @param child Child to be added.
                 * @returns Returns TRUE if child could be added. FALSE if not.
                 */
                addChild(child: IBaseNode | null | undefined): boolean;
                /**
                 * Removes a child.
                 * @category Public
                 * @param child Child to be removed.
                 * @returns Returns TRUE if child could be removed. FALSE if not.
                 */
                removeChild(child: IBaseNode | null | undefined): boolean;
                /**
                 * Gets the number of children.
                 * @category Public
                 * @returns Returns the number of children.
                 */
                getChildCount(): number;
                /**
                 * Gets all children that are registered in this children handler.
                 * @category Public
                 * @returns Returns all registered children.
                 */
                getChildren(): Map<string, IBaseNode>;
                /**
                 * Gets a specific child by its id.
                 * @category Public
                 * @param id Id of the child.
                 * @returns Returns the child. Undefined if no child with this id is registered.
                 */
                getChild<T = BaseNode>(id: string): T | undefined;
            }
        }
    }
}
//# sourceMappingURL=BaseNode.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    class BorderStyler implements Logger.ILogger {
        constructor(owner: IJQueryNode, attr?: BorderStyler.IAttributes);
        /**
         * The control whose border should be styled.
         * @category Internal
         */
        private __owner;
        /**
         * Attributes for the border styler.
         * @category Internal
         */
        protected __attrHandler: AttributeHandler<BorderStyler.IAttributes>;
        logger: Logger;
        /**
         * Get the control which uses this border styler.
         * @category Public
         * @returns The control which used this border styler.
         */
        getControl(): IJQueryNode;
        /**
         * Set all attributes of the BackgroundStyler.
         * @category Attributes
         * @param attr The new attributes for the BackgroundStyler.
         * @returns The BackgroundStyler.
         */
        setAttributes(attr: BorderStyler.IAttributes): this;
        /**
         * Getter for the current attributes.
         * @category Attributes
         * @returns The current attributes.
         */
        getAttributes(): BorderStyler.IAttributes;
        /**
         * Setter for the Border attribute. Valid css [border property](https://developer.mozilla.org/de/docs/Web/CSS/border).
         * ```` ts
         * setBorder('1px solid black');
         * setBorder('1px 0 0 5px');
         * ````
         * @category Attribute setter and getter
         * @param p The new Border.
         * @returns The BorderStyler.
         */
        setBorder(p: string | null | undefined): this;
        /**
         * Processor for the Border attribute.
         * @category Attribute setter and getter
         */
        protected __processBorder(): void;
        /**
         * Getter for the Border attribute.
         * @category Attribute setter and getter
         * @returns The Border attribute.
         */
        getBorder(): string | null | undefined;
        /**
         * Setter for the Color attribute. Valid css [color property](https://developer.mozilla.org/en-US/docs/Web/CSS/color).
         * `````ts
         * setColor('red');
         * setColor('rgb(0, 255, 0)');
         * ````
         * @category Attribute setter and getter
         * @param p The new Color.
         * @returns The BorderStyler.
         */
        setColor(p: string | IFourSidedString | null | undefined): this;
        /**
         * Processor for the Color attribute.
         * @category Attribute setter and getter
         */
        protected __processColor(): void;
        /**
         * Getter for the Color attribute.
         * @category Attribute setter and getter
         * @returns The BorderBolor attribute.
         */
        getColor(): string | IFourSidedString | null | undefined;
        /**
         * Setter for the Width attribute.
         * @category Attribute setter and getter
         * @param p The new Width.
         * @param q The new WidthUnit.
         * @returns The BorderStyler.
         */
        setWidth(p: number | BorderWidth | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Processor for the Width attribute.
         * @category Attribute setter and getter
         */
        protected __processWidth(): void;
        /**
         * Getter for the Width attribute.
         * @category Attribute setter and getter
         * @returns The Width attribute.
         */
        getWidth(): number | FourSidedCss | null | undefined;
        /**
         * Getter for the WidthUnit attribute.
         * @category Attribute setter and getter
         * @returns The WidthUnit attribute.
         */
        getWidthUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the Style attribute.
         * @category Attribute setter and getter
         * @param p The new Style.
         * @returns The BorderStyler.
         */
        setStyle(p: BorderStyle | BorderStyleValue | null | undefined): this;
        /**
         * Processor for the Style attribute.
         * @category Attribute setter and getter
         */
        protected __processStyle(): void;
        /**
         * Getter for the Style attribute.
         * @category Attribute setter and getter
         * @returns The Style attribute.
         */
        getStyle(): BorderStyle | BorderStyleValue | null | undefined;
        /**
         * Setter for the Radius attribute.
         * @category Attribute setter and getter
         * @param p The new Radius.
         * @param q The new RadiusUnit.
         * @returns The BorderStyler.
         */
        setRadius(p: number | BorderRadius | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Processor for the Radius attribute.
         * @category Attribute setter and getter
         */
        protected __processRadius(): void;
        /**
         * Getter for the Radius attribute.
         * @category Attribute setter and getter
         * @returns The Radius attribute.
         */
        getRadius(): number | BorderRadius | null | undefined;
        /**
         * Getter for the RadiusUnit attribute.
         * @category Attribute setter and getter
         * @returns The RadiusUnit attribute.
         */
        getRadiusUnit(): DimensionUnit | null | undefined;
    }
    namespace BorderStyler {
        interface IAttributes {
            /** Border of the element. */
            border?: string | null;
            /** Border color of the element. */
            color?: string | IFourSidedString | null;
            /** Border width of the element. */
            width?: number | BorderWidth | null;
            /** Border width unit of the element. */
            widthUnit?: DimensionUnit | null;
            /** Border style of the element. */
            style?: BorderStyle | BorderStyleValue | null;
            /** Border radius of the element. */
            radius?: number | BorderRadius | null;
            /** Border radius unit of the element. */
            radiusUnit?: DimensionUnit | null;
        }
    }
}
//# sourceMappingURL=BorderStyler.d.ts.map
declare namespace TcHmi.BuildingAutomation {
    class BusyHandler {
        constructor(owner: Components.IParent & IEventHandler);
        /**
         * The control of the busy handler.
         * @category Internal
         */
        private __owner;
        private __logger;
        /**
         * Flag if the control or one of its children is busy or not.
         * @category Internal
         */
        private __isBusy;
        /**
         * Collection of created timeout ids and timeout messages. Everytime {@link setBusy} is called a new timeout id will be created.
         * @category Internal
         */
        private __timeoutIds;
        /**
         * Busy children of the owner.
         * @category Internal
         */
        private __busyChildren;
        /**
         * Callbacks which will be raised when all children are ready.
         * @category Internal
         */
        private __busyChildrenReadyCallbacks;
        private __timerResults;
        /** The logged timer results. A timer result is automatically logged when a ready function was executed. */
        get timerResults(): BusyHandler.ITimerResult[];
        /**
         * Gets all busy children of the control.
         * @category Internal
         * @returns The busy children of the control.
         */
        private __getBusyChildren;
        /**
         * Checks if the control has a busy parent.
         * @category Internal
         */
        private __hasBusyParent;
        /**
         * Create the timeout which will be triggered when the busy setting took to long.
         * @param timeoutMessage The message to be printed when timout elapsed.
         * @param opt Options for the busy setting.
         */
        private __createTimeout;
        /**
         * Create the ready function which will be called when the busy state for this busy setting is ready.
         * @param timeoutId The id of the created timeout.
         * @param timeoutMessage The timeout message which will be used for the timer results.
         * @param opt Options for the busy setting.
         * @returns The ready function.
         */
        private __createReadyFunction;
        /**
         * Set the control in the ready state.
         * @category Internal
         * @param timeoutId The timeout identifier.
         */
        private __setReady;
        /**
         * Notifies the control about a ready child.
         * @category Public
         * @param childComp The child component.
         */
        private __childBusy;
        /**
         * Notifies the control about a ready child.
         * @category Public
         * @param childComp The child component.
         */
        private __childReady;
        /**
         * Get the control which uses this busy handler.
         * @category Public
         * @returns The control which used this busy handler.
         */
        getControl(): Components.IParent & IEventHandler;
        /**
         * Set the control in the busy state.
         * @category Public
         * @param timeoutMessage A message which is wirtten to the console, when control timeouts after setting it to busy.
         * @param opt Options for the busy setting.
         * @returns The function to be called to reset the specific busy invoking.
         */
        setBusy(timeoutMessage: string, opt?: BusyHandler.IBusyOptions): BusyHandler.ReadyFunction;
        /**
         * Get the controls busy state.
         * @category Public
         */
        getIsBusy(): boolean;
        /**
         * Call this function when the control was attached.
         * @category Public
         * @param cbOnReady Callback will be called when all children are ready.
         * @returns True if there are busy children and false if not.
         */
        checkForBusyChildren(cbOnReady?: () => any): boolean;
        /**
         * Logs the timer result of a BA control.
         * To use this funtion make sure that you activate the {@link BusyHandler.RecordTimerResults} by setting it to true.
         * @category Public
         */
        logTimerResults(): void;
        /**
         * Destroys the busy handler and unregisters all setBusy timeouts.
         * @category Public
         */
        destroy(): void;
        /**
         * Appends the busy indicator to the control.
         * @category Public
         * @param el The element where the busy indicator shall be appended.
         */
        static appendBusyIndicator(el: JQuery): void;
        /**
         * Detaches the busy indicator from the control.
         * @category Public
         * @param el The element where the busy indicator shall be removed from.
         */
        static detachBusyIndicator(el: JQuery): void;
    }
    namespace BusyHandler {
        /** The default time out if a control was set to busy. */
        let DefaultTimeout: number;
        /** Defines if timer results are recorded for different operations. */
        let RecordTimerResults: boolean;
        /** Defines if a busy indicator is displayed, when events are loaded. */
        let ShowEventLoading: boolean;
        /** Function to be called when busy status should be reseted. */
        type ReadyFunction = () => void;
        type TimerStopFunction = () => void;
        interface IBusyHandler {
            /**
             * Handles the busy and ready state of this control and its children.
             * @category Public
             */
            busyHandler: BusyHandler;
        }
        /**
         * Validates the IBusyHandler interface.
         * @param p The object that should be checked.
         * @returns True if the object is valid, otherwise false.
         */
        function isIBusyHandler(p: any): p is IBusyHandler;
        interface IBusyOptions {
            /** Notifies the parent, that the control gets busy. */
            notifyParent?: boolean;
            /** Time in milliseconds that will be waited until timeout event is fired. Default is  */
            timeout?: number;
            /** Callback which is raised when the timeout occurs. */
            cbOnTimeout?: (params?: any) => any;
            /** Any object which is passed into the cbOnTimeout function. */
            cbTimeoutParams?: any;
            /** Callback which is raised when the ready function was called. */
            cbOnReady?: (params?: any) => any;
            /** Any object which is passed into the cbOnTimeout function. */
            cbReadyParams?: any;
            /** Any object which is also logged to the console when timeout occurs. */
            optionalOutput?: any;
            /** If false the busy indicator will not be shown. Default is true */
            showIndicator?: boolean;
        }
        interface ITimerResult {
            requiredTime: string;
            action: string;
        }
        enum Events {
            /**
             * Is fired when the control was to busy for to long.
             * Passes the BusyHandler as an parameter.
             */
            onIsBusyTimeOut = "onIsBusyTimeOut"
        }
        /**
         * Logs the timer result of a BA control.
         * This function will be called in the console of the browser after a control was loaded.
         * It can only be applied to controls/classes which implement the {@link IBusyHandler} interface.
         * To use this funtion make sure that you activate the {@link BusyHandler.RecordTimerResults} by setting it to true.
         * @param id The id of the control.
         */
        function logTimerResultsOfControl(id: string): void;
    }
}
//# sourceMappingURL=BusyHandler.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Enmeration for the different component types. */
    enum ComponentType {
        Invalid = -1,
        Button = 0,
        ToggleButton = 1,
        Combobox = 2,
        Checkbox = 3,
        InputBox = 4,
        DateTimeField = 5,
        Slider = 6,
        Textblock = 7,
        Icon = 8
    }
    /** A class which can hold different controls in it. */
    class ControlContainer extends BaseNode {
        constructor(id: string, parent?: IBaseNode | null);
        /**
         * Internal collection of the created controls and their options.
         * @category Internal
         */
        private __controls;
        /**
         * Callbacks which are called when the collection of created controls has changed.
         * @category Internal
         */
        private __controlCollectionChangedCBs;
        /**
         * Handler when user interaction has ended on a control.
         * @category Event handler
         */
        private __controlInteractionHandler;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Adds a control with the specified options.
         * @category Internal
         * @param options The options for the new control.
         */
        private __addControl;
        /**
         * Get the correct user interaction event depending on a control.
         * @param ctrl The control whose user interaction event should be get.
         */
        private __getEvent;
        /**
         * Appends the controls with respect to the defined order of each control.
         * @category Internal
         */
        private __appendControlsInOrder;
        /**
         * Creates a new control with the passed options.
         * @category Public
         * @param id The id of the control.
         * @param options Options for the control.
         * @param parent Parent of the control.
         * @returns The created control.
         */
        static createControl<T extends Base>(id: string, options: ControlContainer.IControlOptionsInternal, parent: IBaseNode | null): T;
        /**
         * Add a single control options to create a control.
         * @category Public
         * @param options The single options for the new control.
         * @returns The created control.
         */
        addControl<T extends Base>(options: ControlContainer.IControlOptions | Base): T;
        /**
         * Add a set of control options to create controls.
         * @category Public
         * @param options The set of options for the new controls.
         * @returns The created controls.
         */
        addControls<T extends Base>(options: (ControlContainer.IControlOptions | Base)[]): T[];
        /**
         * Removes a control.
         * @param control The control to be removed. If string -> name of the control.
         * @returns True if the control was removed successfully, otherwise false.
         */
        removeControl(control: Base | string | null | undefined): boolean;
        /**
         * Removes all controls from the control container.
         * @category Public
         */
        removeAllControls(): void;
        /**
         * Get the JQuery element where all created controls will be appended.
         * @category Public
         * @returns The JQuery element where all created controls will be appended.
         */
        getElement(): JQuery<HTMLElement>;
        /**
         * Get all created controls.
         * @category Pulblic
         * @returns All created controls.
         */
        getControls(): Base[];
        /**
         * Get a certain control.
         * @category Public
         * @param name The name of the control.
         */
        getControl<T extends Base>(name: string): T | undefined;
        /**
         * Get a certain control.
         * @category Public
         * @param ctrl The instance of the control.
         */
        getControl<T extends Base>(ctrl: Base): T | undefined;
        /**
         * Check if the control is already added.
         * @category Public
         * @param name The name of the control.
         */
        hasControl(name: string): boolean;
        /**
         * Check if the control is already added.
         * @category Public
         * @param ctrl The instance of the control.
         */
        hasControl(ctrl: Base): boolean;
        /**
         * Add a callback which will be called when a control has been added.
         * @category Public
         * @param cb Callback which will be called when a control has been added.
         */
        onControlsCollectionChanged(cb: (ctrl: Base, status: 'added' | 'removed') => any): void;
        /**
         * Set the horizontal alignment of the controls in the control container element.
         * @param align The new horizontal alignment of the control container
         */
        setControlsHorizonzalAlignment(align: HorizontalAlignment | null): this;
        /**
         * Set the vertical alignment of the controls in the control container element.
         * @param align The new vertical alignment of the control container
         */
        setControlsVerticalAlignment(align: VerticalAlignment | null): this;
    }
    namespace ControlContainer {
        /** Defines a control */
        interface IControlOptions<T = any> {
            /** Type of the control. */
            type: ComponentType;
            /**
             * Function that will be called when the user has interacted with the control.
             * @param newValue The new value of the control (if there is a value for the control).
             * @param params Additional parameters that can be set in settings.callbackParams.
             * @param ctrl The control whose value has changed.
             */
            callback?: (newValue?: any, params?: any, ctrl?: Base) => any;
            /**
             * Function that will be called when the control has been created.
             * @param ctrl The created control.
             */
            cbOnCreated?: (ctrl: Base) => any;
            /** Optional id of the control to get it from ControlContainer. */
            name?: string;
            /** Various options for the control */
            settings?: TextControl.IAttributes & Icon.IAttributes & Button.IAttributes & ToggleButton.IAttributes & Combobox.IAttributes<T> & Checkbox.IAttributes & Omit<InputBox.IAttributes<number | string>, 'value'> & DateTimeField.IAttributes & Omit<Slider.IAttributes, 'value'> & {
                /** The value to display. */
                value?: string | number | null;
                /** The value feedback. */
                valueFeedback?: string | number | null;
                /** Order of the control in the control container (lowest is left). */
                order?: number;
                /** Parameter that will be passed to the callback. */
                callbackParams?: any;
            };
        }
        /**
         * Validates the interface 'ControlContainer.IControlOptions'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
         */
        function isIControlOptions(p: any): p is ControlContainer.IControlOptions;
        interface IControlOptionsInternal extends ControlContainer.IControlOptions {
            internalCallback?: () => any;
            /** If true the control will not be destroyed when the control container is destroyed. */
            omitDestroy?: boolean;
            /** Destroy function for the user interaction finished event. */
            destroyOnUserInteractionFinished?: DestroyFunction;
        }
        /**
         * Create a instance of ControlContainer.IControlOptions with basic parameters.
         * @returns The created instance.
         */
        function createIControlOptions(): ControlContainer.IControlOptions;
    }
}
//# sourceMappingURL=ControlContainer.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    type AutoUpdateAttributes = ('width' | 'height' | 'left' | 'top')[];
    export class LayoutHandler implements Logger.ILogger {
        constructor(owner: IJQueryNode, attr?: LayoutHandler.IAttributes);
        /**
         * The control whose layout should be handled.
         * @category Internal
         */
        private __owner;
        /**
         * Attributes for the layout handler.
         * @category Internal
         */
        protected __attrHandler: AttributeHandler<LayoutHandler.IAttributes>;
        private __mutationObserver;
        private __attachId;
        logger: Logger;
        /**
         * Use this method to validate an dimension input of a class.
         * @param attributes The attributes object of the class.
         * @param name The name of the attribute (property name in attributes).
         * @param p The dimension or size.
         * @param q The unit.
         * @returns True if the input is valid, otherwise false.
         */
        static dimensionSetter<A extends object, K extends keyof A>(attrHandler: AttributeHandler<A>, name: K, p: number | null | undefined, q?: DimensionUnit | null): p is number | null;
        /**
         * Processed a dimension.
         * @param name The name of the dimension.
         */
        private __dimensionProcessor;
        /**
         * Get the control which uses this layout handler.
         * @category Public
         * @returns The control which used this layout handler.
         */
        getControl(): IJQueryNode;
        /**
         * Resets the layout be setting all attributes to null.
         * @category Public
         * @returns A copy of the old layout attributes.
         */
        reset(): LayoutHandler.IAttributes;
        /**
         * Set the position of the owner.
         * To get the position use the corresponding getters.
         * @param p The new position.
         * @returns The LayoutHandler.
         */
        setPosition(p: Partial<FourSidedCss> | null | undefined): this;
        /**
         * Destroys the LayoutHandler.
         * @category Public
         */
        destroy(): void;
        /**
         * Set all attributes of the BackgroundStyler.
         * @category Attributes
         * @param attr The new attributes for the BackgroundStyler.
         * @returns The LayoutHandler.
         */
        setAttributes(attr: LayoutHandler.IAttributes): this;
        /**
         * Getter for the current attributes.
         * @category Attributes
         * @returns The current attributes.
         */
        getAttributes(): LayoutHandler.IAttributes;
        /**
         * Setter for Height attribute.
         * @category Attribute setter and getter
         * @param p The new Height.
         * @param q The new HeightUnit.
         * @returns The LayoutHandler.
         */
        setHeight(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Getter for the Height attribute.
         * @category Attribute setter and getter
         * @returns The Height attribute.
         */
        getHeight(): number | null | undefined;
        /**
         * Getter for the HeightUnit attribute.
         * @category Attribute setter and getter
         * @returns The HeightUnit attribute.
         */
        getHeightUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the Width attribute.
         * @category Attribute setter and getter
         * @param p The new Width.
         * @param q The new WidthUnit.
         * @returns The LayoutHandler.
         */
        setWidth(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Getter for the Width attribute.
         * @category Attribute setter and getter
         * @returns The Width attribute.
         */
        getWidth(): number | null | undefined;
        /**
         * Getter for the WidthUnit attribute.
         * @category Attribute setter and getter
         * @returns The WidthUnit attribute.
         */
        getWidthUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the Right attribute.
         * @category Attribute setter and getter
         * @param p The new Right.
         * @param q The new RightUnit.
         * @returns The LayoutHandler.
         */
        setRight(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Getter for the Right attribute.
         * @category Attribute setter and getter
         * @returns The Right attribute.
         */
        getRight(): number | null | undefined;
        /**
         * Getter for the RightUnit attribute.
         * @category Attribute setter and getter
         * @returns The RightUnit attribute.
         */
        getRightUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the Left attribute.
         * @category Attribute setter and getter
         * @param p The new Left.
         * @param q The new LeftUnit.
         * @returns The LayoutHandler.
         */
        setLeft(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Getter for the Left attribute.
         * @category Attribute setter and getter
         * @returns The Left attribute.
         */
        getLeft(): number | null | undefined;
        /**
         * Getter for the LeftUnit attribute.
         * @category Attribute setter and getter
         * @returns The LeftUnit attribute.
         */
        getLeftUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the Top attribute.
         * @category Attribute setter and getter
         * @param p The new Top.
         * @param q The new TopUnit.
         * @returns The LayoutHandler.
         */
        setTop(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Getter for the Top attribute.
         * @category Attribute setter and getter
         * @returns The Top attribute.
         */
        getTop(): number | null | undefined;
        /**
         * Getter for the TopUnit attribute.
         * @category Attribute setter and getter
         * @returns The TopUnit attribute.
         */
        getTopUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the Bottom attribute.
         * @category Attribute setter and getter
         * @param p The new Bottom.
         * @param q The new BottomUnit.
         * @returns The LayoutHandler.
         */
        setBottom(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Getter for the Bttom attribute.
         * @category Attribute setter and getter
         * @returns The Bottom attribute.
         */
        getBottom(): number | null | undefined;
        /**
         * Getter for the BottomUnit attribute.
         * @category Attribute setter and getter
         * @returns The BottomUnit attribute.
         */
        getBottomUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the MaxWidth attribute.
         * @category Attribute setter and getter
         * @param p The new MaxWidth.
         * @param q The new MaxWidthUnit.
         * @returns The LayoutHandler.
         */
        setMaxWidth(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Getter for the MaxWidth attribute.
         * @category Attribute setter and getter
         * @returns The MaxWidth attribute.
         */
        getMaxWidth(): number | null | undefined;
        /**
         * Getter for the MaxWidthUnit attribute.
         * @category Attribute setter and getter
         * @returns The MaxWidthUnit attribute.
         */
        getMaxWidthUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the MaxHeight attribute.
         * @category Attribute setter and getter
         * @param p The new MaxHeight.
         * @param q The new MaxHeightUnit.
         * @returns The LayoutHandler.
         */
        setMaxHeight(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Getter for the MaxHeight attribute.
         * @category Attribute setter and getter
         * @returns The MaxHeight attribute.
         */
        getMaxHeight(): number | null | undefined;
        /**
         * Getter for the MaxHeightUnit attribute.
         * @category Attribute setter and getter
         * @returns The MaxHeightUnit attribute.
         */
        getMaxHeightUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the MinWidth attribute.
         * @category Attribute setter and getter
         * @param p The new MinWidth.
         * @param q The new MinWidthUnit.
         * @returns The LayoutHandler.
         */
        setMinWidth(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Getter for the MinWidth attribute.
         * @category Attribute setter and getter
         * @returns The MinWidth attribute.
         */
        getMinWidth(): number | null | undefined;
        /**
         * Getter for the MinWidthUnit attribute.
         * @category Attribute setter and getter
         * @returns The MinWidthUnit attribute.
         */
        getMinWidthUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the MinHeight attribute.
         * @category Attribute setter and getter
         * @param p The new MinHeight.
         * @param q The new MinHeightUnit.
         * @returns The LayoutHandler.
         */
        setMinHeight(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Getter for the MinHeight attribute.
         * @category Attribute setter and getter
         * @returns The MinHeight attribute.
         */
        getMinHeight(): number | null | undefined;
        /**
         * Getter for the MinHeightUnit attribute.
         * @category Attribute setter and getter
         * @returns The MinHeightUnit attribute.
         */
        getMinHeightUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the Z-Index attribute.
         * @category Attribute setter and getter
         * @param p The new Z-Index.
         * @returns The LayoutHandler.
         */
        setZindex(p: number | null | undefined): this;
        /**
         * Processor for the Z-Index attribute.
         * @category Attribute setter and getter
         */
        protected __processZindex(): void;
        /**
         * Getter for the Z-Index attribute.
         * @category Attribute setter and getter
         * @returns The Z-Index attribute.
         */
        getZindex(): number | null | undefined;
        /**
         * Setter for the AutoUpdateAttributes attribute.
         * Changes on the listed attributes that have been made during runtime and not via the LayoutHandler will be updated in the attributes object of this LayoutHandler.
         * @category Attribute setter and getter
         * @param p The new AutoUpdateAttributes.
         * @returns The LayoutHandler.
         */
        setAutoUpdateAttributes(p: AutoUpdateAttributes | null | undefined): this;
        /**
         * Processor for the AutoUpdateAttributes attribute.
         * @category Attribute setter and getter
         */
        protected __processAutoUpdateAttributes(): void;
        /**
         * Getter for the AutoUpdateAttributes attribute.
         * @category Attribute setter and getter
         * @returns The AutoUpdateAttributes attribute.
         */
        getAutoUpdateAttributes(): AutoUpdateAttributes | null | undefined;
    }
    export namespace LayoutHandler {
        interface IAttributes {
            /** Height of the element. */
            height?: number | null;
            /** Height unit of the element. */
            heightUnit?: DimensionUnit | null;
            /** Width of the element. */
            width?: number | null;
            /** Width unit of the element. */
            widthUnit?: DimensionUnit | null;
            /** Right coordinate of the element. */
            right?: number | null;
            /** Right unit of the element. */
            rightUnit?: DimensionUnit | null;
            /** Bottom coordinate of the element. */
            bottom?: number | null;
            /** Bottom unit of the element. */
            bottomUnit?: DimensionUnit | null;
            /** Left coordinate of the element. */
            left?: number | null;
            /** Left unit of the element. */
            leftUnit?: DimensionUnit | null;
            /** Top coordinate of the element. */
            top?: number | null;
            /** Top unit of the element. */
            topUnit?: DimensionUnit | null;
            /** Max width of the element. */
            maxWidth?: number | null;
            /** MaxWidth unit of the element. */
            maxWidthUnit?: DimensionUnit | null;
            /** Max height of the element. */
            maxHeight?: number | null;
            /** MaxHeight unit of the element. */
            maxHeightUnit?: DimensionUnit | null;
            /** Min width of the element. */
            minWidth?: number | null;
            /** MinWidth unit of the element. */
            minWidthUnit?: DimensionUnit | null;
            /** Min height of the element. */
            minHeight?: number | null;
            /** MinHeight unit of the element. */
            minHeightUnit?: DimensionUnit | null;
            /** Z-Index of the element. */
            zIndex?: number | null;
            /** Set attributes that will be updated automatically when they have been changed in the dom. */
            autoUpdateAttributes?: AutoUpdateAttributes | null;
        }
        enum LayoutHandlerEvents {
            /** Is fired when the layout attributes were automatically updated (e.g. after resizing). */
            onAttributesAutoUpdated = "onLayoutHandlerAttributesAutoUpdated"
        }
    }
    export {};
}
//# sourceMappingURL=LayoutHandler.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    class TextHandler implements IDestroy, Logger.ILogger {
        constructor(owner: Components.TextControl.ITextControl);
        /**
         * The control whose text should be handled.
         * @category Internal
         */
        private __owner;
        /**
         * Attributes for the text handler.
         * @category Internal
         */
        protected __attrHandler: AttributeHandler<TextHandler.IAttributes>;
        /**
         * The symbols if the Text attribute contained any symbol expression.
         * In some cases the Text attribute can contain more than one symbol exrpession.
         * @category Internal
         */
        protected __textSymbols: Symbol<string>[] | undefined;
        /**
         * Observer for the size of the control.
         * @category Internals
         */
        protected __resizeObserver: ResizeObserver | undefined;
        logger: Logger;
        /**
         * The text element which will contain the text.
         * Must be appended from the using control.
         * @category Elements
         */
        protected __textElement: JQuery<HTMLSpanElement>;
        destroy(): void;
        protected __onResized(): void;
        /**
         * Get the control which uses this text handler.
         * @category Public
         * @returns The control which used this text handler.
         */
        getControl(): TextControl.ITextControl;
        /**
         * Getter for the text element to append it to the root of a derived control.
         * @category Public
         * @returns The HTML element.
         */
        getTextElement(): JQuery<HTMLSpanElement>;
        /**
         * Destroys all existing text symbols.
         * @category Internal
         */
        private __destroyTextSymbols;
        /**
         * Set all attributes of the BackgroundStyler.
         * @category Attributes
         * @param attr The new attributes for the BackgroundStyler.
         * @returns The TextHandler.
         */
        setAttributes(attr: TextHandler.IAttributes): this;
        /**
         * Getter for the current attributes.
         * @category Attributes
         * @returns The current attributes.
         */
        getAttributes(): TextHandler.IAttributes;
        /**
         * Setter for the Text attribute.
         * @category Attribute setter and getter
         * @param p The new Text or null.
         * @returns The TextHandler.
         */
        setText(p: string | null | undefined): this;
        /**
         * Processor for the Text attribute.
         * @category Attribute setter and getter
         */
        protected __processText(): void;
        /**
         * Getter for the Text attribute.
         * @category Attribute setter and getter
         * @returns The Text attribute.
         */
        getText(): string | null | undefined;
        /**
         * Setter for the TextColor attribute.
         * @category Attribute setter and getter
         * @param p The new TextColor or null.
         * @returns The TextHandler.
         */
        setColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the TextColor attribute.
         * @category Attribute setter and getter
         */
        protected __processColor(): void;
        /**
         * Getter for the TextColor attribute.
         * @category Attribute setter and getter
         * @returns The TextColor attribute.
         */
        getColor(): Color.RGBAColor | null | undefined;
        /**
         * Setter for the TextHorizontalAlignment attribute.
         * @category Attribute setter and getter
         * @param p The new TextHorizontalAlignment or null.
         * @returns The TextHandler.
         */
        setHorizontalAlignment(p: HorizontalAlignment | null | undefined): this;
        /**
         * Processor for the TextHorizontalAlignment attribute.
         * @category Attribute setter and getter
         */
        protected __processHorizontalAlignment(): void;
        /**
         * Getter for the TextHorizontalAlignment attribute.
         * @category Attribute setter and getter
         * @returns The TextHorizontalAlignment attribute.
         */
        getHorizontalAlignment(): HorizontalAlignment | null | undefined;
        /**
         * Setter for the TextVerticalAlignment attribute.
         * @category Attribute setter and getter
         * @param p The new TextVerticalAlignment or null.
         * @returns The TextHandler.
         */
        setVerticalAlignment(p: VerticalAlignment | null | undefined): this;
        /**
         * Processor for the TextHorizontalAlignment attribute.
         * @category Attribute setter and getter
         */
        protected __processVerticalAlignment(): void;
        /**
         * Getter for the TextVerticalAlignment attribute.
         * @category Attribute setter and getter
         * @returns The TextVerticalAlignment attribute.
         */
        getVerticalAlignment(): VerticalAlignment | null | undefined;
        /**
         * Setter for the TextFontSize attribute.
         * @category Attribute setter and getter
         * @param p The new TextFontSize or null.
         * @returns The TextHandler.
         */
        setFontSize(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Processor for the TextFontSize attribute.
         * @category Attribute setter and getter
         */
        protected __processFontSize(): void;
        /**
         * Getter for the TextFontSize attribute.
         * @category Attribute setter and getter
         * @returns The TextFontSize attribute.
         */
        getFontSize(): number | null | undefined;
        /**
         * Getter for the TextFontSizeUnit attribute.
         * @category Attribute setter and getter
         * @returns The TextFontSizeUnit attribute.
         */
        getFontSizeUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the TextFontWeight attribute.
         * @category Attribute setter and getter
         * @param p The new TextFontWeight or null.
         * @returns The TextHandler.
         */
        setFontWeight(p: FontWeight | null | undefined): this;
        /**
         * Processor for the TextFontWeight attribute.
         * @category Attribute setter and getter
         */
        protected __processFontWeight(): void;
        /**
         * Getter for the TextFontWeight attribute.
         * @category Attribute setter and getter
         * @returns The TextFontWeight attribute.
         */
        getFontWeight(): FontWeight | null | undefined;
        /**
         * Setter for the TextFontStyle attribute.
         * @category Attribute setter and getter
         * @param p The new TextFontStyle or null.
         * @returns The TextHandler.
         */
        setFontStyle(p: FontStyle | null | undefined): this;
        /**
         * Processor for the TextFontStyle attribute.
         * @category Attribute setter and getter
         */
        protected __processFontStyle(): void;
        /**
         * Getter for the TextFontStyle attribute.
         * @category Attribute setter and getter
         * @returns The TextFontStyle attribute.
         */
        getFontStyle(): FontStyle | null | undefined;
        /**
         * Setter for the TextFontFamily attribute.
         * @category Attribute setter and getter
         * @param p The new TextFontFamily or null.
         * @returns The TextHandler.
         */
        setFontFamily(p: FontFamily | null | undefined): this;
        /**
         * Processor for the TextFontFamily attribute.
         * @category Attribute setter and getter
         */
        protected __processFontFamily(): void;
        /**
         * Getter for TextFontFamily attribute.
         * @category Attribute setter and getter
         * @returns The TextFontFamily attribute.
         */
        getFontFamily(): string | null | undefined;
        /**
         * Setter for the TextDecorationColor attribute.
         * @category Attribute setter and getter
         * @param p The new TextDecorationColor or null.
         * @returns The TextHandler.
         */
        setDecorationColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the TextDecorationColor attribute.
         * @category Attribute setter and getter
         */
        protected __processDecorationColor(): void;
        /**
         * Getter for the TextDecorationColor attribute.
         * @category Attribute setter and getter
         * @retruns The TextDecorationColor attribute.
         */
        getDecorationColor(): Color.RGBAColor | null | undefined;
        /**
         * Setter for the TextDecorationLine attribute.
         * @category Attribute setter and getter
         * @param p The new TextDecorationLine or null.
         * @returns The TextHandler.
         */
        setDecorationLine(p: TextHandler.DecorationLine | null | undefined): this;
        /**
         * Processor for the TextDecorationLine attribute.
         * @category Attribute setter and getter
         */
        protected __processDecorationLine(): void;
        /**
         * Getter for the TextDecorationLine attribute.
         * @category Attribute setter and getter
         * @returns The TextDecorationLine attribute.
         */
        getDecorationLine(): TextHandler.DecorationLine | null | undefined;
        /**
         * Setter for the TextDecorationStyle attribute.
         * @category Attribute setter and getter
         * @param p The new TextDecorationStyle or null.
         * @returns The TextHandler.
         */
        setDecorationStyle(p: TextHandler.DecorationStyle | null | undefined): this;
        /**
         * Processor for the TextDecorationStyle attribute.
         * @category Attribute setter and getter
         */
        protected __processDecorationStyle(): void;
        /**
         * Getter for the TextDecorationStyle attribute.
         * @category Attribute setter and getter
         * @returns The TextDecorationStyle attribute.
         */
        getDecorationStyle(): TextHandler.DecorationStyle | null | undefined;
        /**
         * Setter for the UserSelect attribute.
         * @category Attribute setter and getter
         * @param p The new UserSelect or null.
         * @returns The TextHandler.
         */
        setUserSelect(p: TextHandler.UserSelect | null | undefined): this;
        /**
         * Processor for the UserSelect attribute.
         * @category Attribute setter and getter
         */
        protected __processUserSelect(): void;
        /**
         * Getter for the UserSelect attribute.
         * @category Attribute setter and getter
         * @returns The UserSelect attribute.
         */
        getUserSelect(): TextHandler.UserSelect | null | undefined;
        /**
         * Setter for the TextOverflow attribute.
         * @category Attribute setter and getter
         * @param p The new TextOverflow or null.
         * @returns The TextHandler.
         */
        setOverflow(p: TextHandler.Overflow | null | undefined): this;
        /**
         * Processor for the TextOverflow attribute.
         * @category Attribute setter and getter
         */
        protected __processOverflow(): void;
        /**
         * Getter for the TextOverflow attribute.
         * @category Attribute setter and getter
         * @returns The TextOverflow attribute.
         */
        getOverflow(): TextHandler.Overflow | null | undefined;
        /**
         * Setter for the WordWrap attribute.
         * @category Attribute setter and getter
         * @param p The new WordWrap or null.
         * @returns The TextHandler.
         */
        setWordWrap(p: boolean | null | undefined): this;
        /**
         * Processor for the WordWrap attribute.
         * @category Attribute setter and getter
         */
        protected __processWordWrap(): void;
        /**
         * Getter for the WordWrap attribute.
         * @category Attribute setter and getter
         * @returns The WordWrap attribute.
         */
        getWordWrap(): boolean | null | undefined;
    }
    namespace TextHandler {
        /** Describes different text attributes. */
        interface IAttributes {
            /** Current text. */
            text?: string | null;
            /** Color of the text. */
            color?: Color.RGBAColor | null;
            /** Horizontal alignment of the text. */
            horizontalAlignment?: HorizontalAlignment | null;
            /** Vertical alignment of the text. */
            verticalAlignment?: VerticalAlignment | null;
            /** Font size of the text. */
            fontSize?: number | null;
            /** Font size unit of the text. */
            fontSizeUnit?: DimensionUnit | null;
            /** Font weight of the text. */
            fontWeight?: FontWeight | null;
            /** Font style of the text. */
            fontStyle?: FontStyle | null;
            /** Font family of the text. */
            fontFamily?: FontFamily | null;
            /** Color of the text decoration. */
            decorationColor?: Color.RGBAColor | null;
            /** Position of the text decoration. */
            decorationLine?: DecorationLine | null;
            /** Style of the text decoration. */
            decorationStyle?: DecorationStyle | null;
            /** Defines how the user can select the text. */
            userSelect?: UserSelect | null;
            /** Defines how an overflow of the text is handled. */
            overflow?: Overflow | null;
            /** Defines if the text is wrapped (line breaks) or not. */
            wordWrap?: boolean | null;
        }
        type DecorationLine = 'none' | 'underline' | 'overline' | 'line-through' | 'initial' | 'inherit';
        /**
         * Validates the type 'DecorationLine'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isTextDecorationLine(p: any): p is DecorationLine;
        type DecorationStyle = 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy' | 'initial' | 'inherit';
        /**
         * Validates the type 'DecorationStyle'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isTextDecorationStyle(p: any): p is DecorationStyle;
        type UserSelect = 'auto' | 'none' | 'text' | 'all';
        /**
         * Validates the type 'UserSelect'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isUserSelect(p: any): p is UserSelect;
        enum Overflow {
            none = 0,
            ellipsis = 1,
            marquee = 2
        }
        function calculateTextSize(attr: IAttributes & {
            fontSize: number;
            text: string;
        }, containerWidth?: number): {
            width: number;
            height: number;
        };
    }
    class TextControl extends Base implements TextControl.ITextControl {
        constructor(id: string, parent?: IBaseNode | null);
        textHandler: TextHandler;
        protected __attrHandler: AttributeHandler<TextControl.IAttributes>;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        onTextChanged(newText: string | null | undefined): void;
        setAttributes(attr: TextControl.IAttributes): this;
        getAttributes(): TextControl.IAttributes;
    }
    namespace TextControl {
        interface IAttributes extends Base.IAttributes {
            /** Attributes for the text. */
            textAttributes?: TextHandler.IAttributes;
        }
        enum TextControlEvents {
            onTextChanged = "onTextChanged"
        }
        interface ITextControl extends IJQueryNode {
            /**
             * Instance that handles all text related attributes.
             * @category Public
             */
            textHandler: TextHandler;
            /**
             * Will be called from the text handler, when the text has changed.
             * @category Event callbacks
             * @param text The new text.
             */
            onTextChanged(text: string | null | undefined): void;
        }
        /**
         * Validates the interface 'ITextControl'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isITextControl(p: any): p is ITextControl;
    }
    class Textblock extends TextControl implements BaObjectHandler.IUsesBaObject, System.ValueHandler.IValueHandler<boolean | number> {
        constructor(id: string, parent: IBaseNode | null);
        baObjectHandler: BaObjectHandler;
        valueHandler: System.ValueHandler<boolean | number>;
        protected __attrHandler: AttributeHandler<Textblock.IAttributes>;
        private __bValue;
        private __activeText;
        private __inactiveText;
        private __rValue;
        private __unit;
        private __stateTexts;
        private __iValue;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        private __updateBaObjectDisplay;
        onValueChanged(newVal: boolean | number | null | undefined): void;
        setAttributes(attr: Textblock.IAttributes): this;
        getAttributes(): Textblock.IAttributes;
        /**
         * Setter for the Digits attribute.
         * @category Attribute setter and getter
         * @param p The new Digits or null.
         * @returns The Textblock.
         */
        setDigits(p: number | null | undefined): this;
        /**
         * Getter for the Digits attribute.
         * @category Attribute setter and getter
         * @returns The Digits attribute.
         */
        getDigits(): number | null | undefined;
        processBaObject(): void;
    }
    namespace Textblock {
        interface IAttributes extends TextControl.IAttributes {
            /** Number of displayed digits when an analog object is used. */
            digits?: number | null;
        }
    }
}
//# sourceMappingURL=TextHandler.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Class that displays a button. */
    class Button extends TextControl implements Icons.IIconHandler {
        constructor(id: string, parent?: IBaseNode | null);
        protected __legendIconHandler: Components.LegendIconHandler;
        iconHandler: Icons.IconHandler;
        protected __iconShowInLegend: boolean | null | undefined;
        protected __iconDescription: string | null | undefined;
        protected __iconCategory: string | null | undefined;
        /**
         * Pointer down handler
         * @category Event handler
         */
        protected __downHandler: (ev: JQuery.TriggeredEvent) => void;
        /**
         * Pointer out handler
         * @category Event handler
         */
        protected __pointerleaveHandler: (ev: JQuery.TriggeredEvent) => void;
        /**
         * Pointer in handler
         * @category Event handler
         */
        protected __pointerenterHandler: (ev: JQuery.TriggeredEvent) => void;
        /**
         * Released handler
         * @category Event handler
         */
        protected __releasedHandler: (ev: JQuery.TriggeredEvent) => void;
        /**
         * Handler when the onPressed event of the button was fired.
         * @category Event handler
         */
        protected __elementPressedHandler: (ev: JQuery.TriggeredEvent, btn: Button) => void;
        protected __attrHandler: AttributeHandler<Button.IAttributes>;
        /**
         * State if the button is pressed or not.
         * @category Internal
         */
        protected __isPressed: boolean;
        /**
         * Click count to identify a double press.
         * @category Internal
         */
        private __pressCnt;
        /**
        * Destroy function for onIconChanged event.
        * @category Internal
        */
        private __destroyOnIconChanged;
        onTextChanged(newText: string | null | undefined): void;
        /**
         * Callback for the pointerdown event.
         * @category Event callbacks
         * @param ev JQuery event object.
         */
        protected __onDown(ev: JQuery.TriggeredEvent): void;
        /**
         * Callback function for the onPointerOut event.
         * @category Event callbacks
         * @param ev JQuery event object.
         */
        protected __onPointerLeave(ev: JQuery.TriggeredEvent): void;
        /**
         * Callback function for the onPointerIn event.
         * @category Event callbacks
         * @param ev JQuery event object.
         */
        protected __onPointerEnter(ev: JQuery.TriggeredEvent): void;
        /**
         * Callback function for the onReleased event.
         * @category Event callbacks
         * @param ev JQuery event object.
         */
        protected __onReleased(ev: JQuery.TriggeredEvent): void;
        /**
         * Callback function for the onPressed event.
         * @category Event callbacks
         */
        protected __onPressed(ev: EventProvider.Event, btn: Button): void;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Update the legend icon.
         * @category Internal
         */
        protected __updateLegendIcon(): void;
        /**
         * Adds a badge to the upper right corner of an element.
         * @param el The element to which the badge should be added.
         * @param cnt The number that should be display. To Remove the badge pass a number < 1 to the function.
         */
        static addBadge(el: JQuery, cnt: number | null): void;
        /**
         * Disables the listening to pointer events.
         * @category Public
         */
        disableInteraction(): void;
        /**
         * Enables the listening to pointer events.
         * @category Public
         */
        enableInteraction(): void;
        /**
         * Define if the color of the icon and text is switched, when the button is pressed.
         */
        set switchColorOnDown(p: boolean);
        setAttributes(attr: Button.IAttributes): this;
        getAttributes(): Button.IAttributes;
        /**
         * Setter for the TextColorPressed attribute.
         * @category Attribute setter and getter
         * @param p The new TextColorPressed or null.
         * @returns The Button.
         */
        setTextColorPressed(p: Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the TextColorPressed attribute.
         * @category Attribute setter and getter
         */
        protected __processTextColorPressed(): void;
        /**
         * Getter for the TextColorPressed attribute.
         * @category Attribute setter and getter
         * @returns The TextColorPressed attribute.
         */
        getTextColorPressed(): Color.RGBAColor | null | undefined;
        /**
         * Setter for the ShowInLegend attribute.
         * @category Attribute setter and getter
         * @param p The new ShowInLegend or null.
         * @returns The Button.
         */
        setShowInLegend(visibility: boolean): this;
        /**
         * Processor for the ShowInLegend attribute.
         * @category Attribute setter and getter
         */
        protected __processShowInLegend(): void;
        /**
         * Getter for the ShowInLegend attribute.
         * @category Attribute setter and getter
         * @returns The ShowInLegend attribute.
         */
        getShowInLegend(): boolean | null | undefined;
        /**
         * Setter for the IconCategoryLegend attribute.
         * @category Attribute setter and getter
         * @param p The new IconCategoryLegend or null.
         * @returns The Button.
         */
        setIconCategoryLegend(category: string): this;
        /**
         * Processor for the IconCategoryLegend attribute.
         * @category Attribute setter and getter
         */
        protected __processIconCategoryLegend(): void;
        /**
         * Getter for the IconCategoryLegend attribute.
         * @category Attribute setter and getter
         * @returns The IconCategoryLegend attribute.
         */
        getIconCategoryLegend(): string | null | undefined;
        /**
         * Setter for the IconDescriptionLegend attribute.
         * @category Attribute setter and getter
         * @param p The new IconDescriptionLegend or null.
         * @returns The Button.
         */
        setIconDescriptionLegend(description: string): this;
        /**
         * Processor for the IconDescriptionLegend attribute.
         * @category Attribute setter and getter
         */
        protected __processIconDescriptionLegend(): void;
        /**
         * Getter for the IconDescriptionLegend attribute.
         * @category Attribute setter and getter
         * @returns The IconDescriptionLegend attribute.
         */
        getIconDescriptionLegend(): string | null | undefined;
        protected __processReadOnly(): void;
    }
    namespace Button {
        enum ButtonEvents {
            onPressed = "onButtonPressed",
            onDoublePressed = "onButtonDoublePressed"
        }
        interface IAttributes extends TextControl.IAttributes, Icons.IconHandler.IAttributes {
            textAttributes?: TextHandler.IAttributes & {
                colorPressed?: Color.RGBAColor | null;
            };
        }
        /** Defines the duration of a double press in ms. */
        let DoublePressDuration: number;
    }
    class ToggleButton extends Button implements BaObjectHandler.IUsesBaObject {
        constructor(id: string, parent: IBaseNode | null);
        baObjectHandler: BaObjectHandler;
        protected __attrHandler: AttributeHandler<ToggleButton.IAttributes>;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        protected __onDown(ev: JQuery.TriggeredEvent): void;
        protected __onPointerLeave(ev: JQuery.TriggeredEvent): void;
        protected __onPointerEnter(ev: JQuery.TriggeredEvent): void;
        protected __onReleased(ev: JQuery.TriggeredEvent): void;
        setAttributes(attr: ToggleButton.IAttributes): this;
        getAttributes(): ToggleButton.IAttributes;
        /**
         * Setter for the ToggleState attribute.
         * @category Attribute setter and getter
         * @param p The new ToggleState or null.
         * @returns The Togglebutton.
         */
        setToggleState(p: boolean | null | undefined): this;
        /**
         * Processor for the ToggleState attrbite.
         * @category Attribute setter and getter
         */
        protected __processToggleState(): void;
        /**
         * Getter for the ToggleState attribute.
         * @category Attribute setter and getter
         * @returns The ToggleState attribute.
         */
        getToggleState(): boolean;
        processBaObject(): void;
    }
    namespace ToggleButton {
        interface IAttributes extends Button.IAttributes {
            /** State of the toggle button. */
            toggleState?: boolean | null;
        }
        enum ToggleButtonEvents {
            onToggleStateChanged = "onToggleStateChanged"
        }
    }
}
//# sourceMappingURL=Button.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    class Calendar extends Base implements Components.ResizeHandler.IOnResized, BaObjectHandler.IUsesBaObject {
        baObjectHandler: BaObjectHandler;
        resizeHandler: Components.ResizeHandler;
        private __initDone;
        private __dataOrigin;
        protected __attrHandler: AttributeHandler<Calendar.IAttributes>;
        /** @ignore
         * State of Calendar changes.
         * @category Internal
         */
        private __hasChanges;
        /** @ignore
         * Display style of the Calendar.
         * @category Internal
         */
        private __displayMode;
        /** @ignore
         * View to be displayed if the CalendarDisplayMode is EventCalendar.
         * @category Internal
         */
        private __displayView;
        /** @ignore
         * Collection of language watch ids for static text.
         * @category Internal
         */
        private __dfStatic;
        /** @ignore
         * Collection of language watch ids for event titles.
         * @category Internal
         */
        private __dfEvents;
        /** @ignore
        * LegendIconHandler for icon 'Today'.
        * @category Internal
        */
        private __lihToday;
        /** @ignore
        * LegendIconHandler for icon 'Month'.
        * @category Internal
        */
        private __lihMonth;
        /** @ignore
        * LegendIconHandler for icon 'Year'.
        * @category Internal
        */
        private __lihYear;
        /** @ignore
         * Current date.
         * @category Internal
         */
        private __dateCurrent;
        /** @ignore
        * Current selected date in DatePicker view.
        * @category Internal
        */
        private __dateSelected;
        /** @ignore
        * Stores last selected date in DatePicker view.
        * @category Internal
        */
        private __dateSelectedLast;
        /** @ignore
        * Initialization date.
        * @category Internal
        */
        private __dateInit;
        /** @ignore
        * Starting day of week.
        * @category Internal
        */
        private __dowStart;
        /** @ignore
         * Previous year.
         * @category Internal
         */
        private __dateYearPrev;
        /** @ignore
        * Weekday names in short form for DatePicker view.
        * @category Internal
        */
        private __daysShort;
        /** @ignore
        * Maximum week count of selected month with dow offset.
        * @category Internal
        */
        private __maxWeeksDow;
        /** @ignore
        * Month names in long form for Calendar view.
        * @category Internal
        */
        private __monthLong;
        /** @ignore
        * Weekday names in long form for Calendar view.
        * @category Internal
        */
        private __daysLong;
        /** @ignore
        * Localized string for menu.
        * @category Internal
        */
        private __strEventsShow;
        /** @ignore
        * Localized string for menu.
        * @category Internal
        */
        private __strEventsHide;
        /** @ignore
        * Maximum amount of Schedule exceptions.
        * @category Internal
        */
        private __maxExceptions;
        /** @ignore
        * Maximum amount of DailySchedule entries.
        * @category Internal
        */
        private __maxDaily;
        /** @ignore
        * Maximum amount of DailySchedule entries of a Calendar reference.
        * @category Internal
        */
        private __maxDailyRef;
        /** @ignore
        * Sum of all events from all sources.
        * @category Internal
        */
        private __events;
        /** @ignore
        * Events added by BA.
        * @category Internal
        */
        private __eventsBa;
        /** @ignore
        * Sum of all new but unconfirmed events.
        * @category Internal
        */
        private __eventsBaNew;
        /** @ignore
        * Sum of all changed but unconfirmed events.
        * @category Internal
        */
        private __eventsBaChanged;
        /** @ignore
        * Events added by BA calendar references.
        * @category Internal
        */
        private __eventsBaRef;
        /** @ignore
        * Sum of all changed but unconfirmed events of calendar references.
        * @category Internal
        */
        private __eventsBaRefChanged;
        /** @ignore
        * Count of invisible events for each day.
        * @category Internal
        */
        private __eventsCountDay;
        /** @ignore
        * Amount of possible visible events.
        * @category Internal
        */
        private __eventsAmountPossible;
        /** @ignore
        * Last amount of possible visible events.
        * @category Internal
        */
        private __eventsAmountPossibleLast;
        /** @ignore
        * Highest count of visible events on a day.
        * @category Internal
        */
        private __eventsAmountDayMax;
        /** @ignore
        * Trigger for call of __attach().
        * @category Internal
        */
        private __flagOnAttach;
        /** @ignore
        * Visibility of events.
        * @category Internal
        */
        private __visibilityEvents;
        /** @ignore
        * Index for events added by BA.
        * @category Internal
        */
        private __indexBaId;
        /** @ignore
        * Index for events added by BA calendar references.
        * @category Internal
        */
        private __indexBaRefId;
        /** @ignore
        * Schedule exceptions from the PLC (BACnet).
        * @category Internal
        */
        private __schedExceptionList;
        /** @ignore
        * Calendars of the PLC (BACnet).
        * @category Internal
        */
        private __schedCalendarList;
        /** @ignore
        * Schedule exceptions from referenced calendars of the PLC (BACnet).
        * @category Internal
        */
        private __schedCalendarExceptions;
        /** @ignore
        * Burger menu based on ContextMenu class.
        * @category Internal
        */
        private __contextMenu;
        /** @ignore
        * Button to jump to current date.
        * @category Internal
        */
        private __buttonToday;
        /** @ignore
        * Button to toggle between year and month view.
        * @category Internal
        */
        private __buttonToggleYearMonth;
        /** @ignore
        * Visibility of menu.
        * @category Internal
        */
        private __visibilityMenu;
        /** @ignore
        * Visibility of menu entry Save.
        * @category Internal
        */
        private __visibilityMenuEntrySave;
        /** @ignore
        * Menu entry for 'Show/Hide' to change visibility of events.
        * @category Internal
        */
        private __menuEntryVisibilityEvents;
        /** @ignore
        * Menu entry to create new exception.
        * @category Internal
        */
        private __menuEntryAdd;
        /** @ignore
        * Menu entry to save changes to PLC.
        * @category Internal
        */
        private __menuEntrySave;
        /** @ignore
        * Menu entry for 'Reset' to discard all unconfirmed newly added events or changes to existing events.
        * @category Internal
        */
        private __menuEntryReset;
        /** @ignore
        * Top level view to show EventContent.
        * @category Internal
        */
        private __dialogWindow;
        /** @ignore
        * Additional button control for DialogWindow.
        * @category Internal
        */
        private __dialogWindowBtnDelete;
        /** @ignore
        * Indicates if the delete button is to be shown.
        * @category Internal
        */
        private __isDialogWindowBtnDelete;
        /** @ignore
        * Localized string for DialogWindow.
        * @category Internal
        */
        private __strDialogWindowTitle;
        /** @ignore
        * Localized string for DialogWindow.
        * @category Internal
        */
        private __strDialogWindowEntryDelete;
        /** @ignore
        * Localized string for user input.
        * @category Internal
        */
        private __strSaveChanges;
        /** @ignore
        * Localized string for user input.
        * @category Internal
        */
        private __strResetChanges;
        /** @ignore
        * Details of events to view in DialogWindow.
        * @category Internal
        */
        private __eventContent;
        /** @ignore
         * Collection of all days of current displayed month.
         * @category HTML elements
         */
        private __htmlDays;
        /** @ignore
         * Collection of all months of current displayed year.
         * @category HTML elements
         */
        private __htmlMonths;
        /** @ignore
         * Layer for day display.
         * @category HTML elements
         */
        private __htmlWrapperDay;
        /** @ignore
         * Layer for month display.
         * @category HTML elements
         */
        private __htmlWrapperMonth;
        /** @ignore
         * Layer for event display.
         * @category HTML elements
         */
        private __htmlWrapperEvent;
        /** @ignore
         * Header area to display month.
         * @category HTML elements
         */
        private __htmlHeaderMonth;
        /** @ignore
         * Header area to display year.
         * @category HTML elements
         */
        private __htmlHeaderYear;
        /** @ignore
         * Navigation elements for months.
         * @category HTML elements
         */
        private __htmlNavMonth;
        /** @ignore
         * Navigation elements for years.
         * @category HTML elements
         */
        private __htmlNavYear;
        /** @ignore
         * Elements with name of months.
         * @category HTML elements
         */
        private __htmlTextMonths;
        /** @ignore
         * Navigation container of month.
         * @category HTML elements
         */
        private __htmlNavConMonth;
        /** @ignore
         * Elements containing the count of invisible events for each day (EventCalendar-> MonthView).
         * @category HTML elements
         */
        private __htmlEventCounts;
        /** @ignore
        * Elements of events of current month for highlight effect (Key(eventId), Value(EventRow[EventRowEntry])).
        * @category Internal
        */
        private __htmlEventHighlights;
        /** @ignore
        * Elements of events with previously applied highlight effect.
        * @category Internal
        */
        private __htmlEventHighlightsLast;
        /** @ignore
         * Elements with events of current displayed month. Each entry represents one week of the month.
         * @category HTML elements
         */
        private __htmlEventRows;
        /**
         * Callback when the size of the Calendar has changed.
         * @category Event callbacks
         */
        onResized(): void;
        /** @ignore
         * Handler for if the month was switched.
         * @category Event handler
         */
        private __handlerSwitchMonth;
        /** @ignore
         * Handler for if the year was switched.
         * @category Event handler
         */
        private __handlerSwitchYear;
        /** @ignore
         * Handler for if an day was selected.
         * @category Event handler
         */
        private __handlerSelectDay;
        /** @ignore
         * Handler for if an month was selected.
         * @category Event handler
         */
        private __handlerSelectMonth;
        /** @ignore
        * Handler for if an event was selected.
        * @category Event handler
        */
        private __handlerSelectEvent;
        /** @ignore
         * Handler for if an event is to be displayed as highlight.
         * @category Event handler
         */
        private __handlerAddHighlight;
        /** @ignore
         * Handler for if an event is no longer to be displayed as highlighted.
         * @category Event handler
         */
        private __handlerRemoveHighlight;
        /** @ignore
         * Handler for if the EventDialog was confirmed.
         * @category Event handler
         */
        private __handlerEventDialogConfirmed;
        /** @ignore
        * Handler for if an event was marked for deletion.
        * @category Event handler
        */
        private __handlerEventDialogDeleted;
        /** @ignore
        * Handler for if the menu entry was selected to change visibility of events.
        * @category Event handler
        */
        private __handlerMenuEntryEventVisibility;
        /** @ignore
        * Handler for if the menu entry was selected to add a new event.
        * @category Event handler
        */
        private __handlerMenuEntryAdd;
        /** @ignore
        * Handler for if the menu entry was selected to save changes to PLC.
        * @category Event handler
        */
        private __handlerMenuEntrySave;
        /** @ignore
        * Handler for if the menu entry was selected to remove all unconfirmed events.
        * @category Event handler
        */
        private __handlerMenuEntryReset;
        /** @ignore
        * Handler for the jump to today button.
        * @category Event handler
        */
        private __handlerButtonToday;
        /** @ignore
        * Handler for the view toggle button.
        * @category Event handler
        */
        private __handlerButtonToggleViewYearMonth;
        /**
         * Constructor of the Calendar class.
         * @param id Unique id of the class. Cannot be empty.
         * @param parent TcHmi parent of the class. Prerequisite to use TcHmi contols within the class.
         * @param opt Initialization options.
         */
        constructor(id: string, parent: IBaseNode | null);
        /** @ignore */
        protected __attach(): void;
        /** @ignore */
        protected __detach(): void;
        /**
         * Destroys the current instance.
         * @category Public
         */
        destroy(): void;
        /** @ignore
         * Determine if DataOrigin equals BaObject.
         * @category Internal
         */
        private __isDataOriginBao;
        /** @ignore
         * Determine if DataOrigin is valid.
         * @category Internal
         */
        private __isDataOriginValid;
        /** @ignore
         * Processes BA ScheduleException entries.
         * @category Internal
         */
        protected __processScheduleExceptions(): void;
        /** @ignore
         * Processes BA ScheduleException calendar reference entries.
         * @category Internal
         */
        private __processScheduleCalendarReferences;
        /** @ignore
         * Processes display mode.
         * @category Internal
         */
        protected __processDisplayMode(): void;
        /** @ignore
        * Processes display view.
        * @category Internal
        */
        protected __processDisplayView(): void;
        /** @ignore
         * Construct the calendar.
         * @category Internal
         */
        private __constructCalendar;
        /** @ignore
         * Creates an CalendarEvent from PLC ScheduleException data.
         * @category Internal
         * @param schExc SchedException object with data of PLC.
         * @param sourceIndex Array index of SchedException in the moment of creation.
         * @param eventSource Source of the PLC data (default: CalendarEventSource.BA).
         * @returns ICalendarEvent on success. NULL on failure.
         */
        private __createEventFromBASchedException;
        /** @ignore
         * Creates an PLC ScheduleException from CalendarEvent data.
         * @category Internal
         * @param evt CalendarEvent with data for PLC.
         * @returns BA.SchedException on success. NULL on failure.
         */
        private __createSchedExceptionFromCalendarEvent;
        /** @ignore
        * Add new CalendarEvent or change existing one.
        * @category Internal
        * @param evt New or existing CalendarEvent.
        * @param remove If CalendarEvent already exists it will be deleted (default: false).
        */
        private __changeEvent;
        /** @ignore
         * Full update of the calendar.
         * @category Internal
         */
        private __updateCalendar;
        /** @ignore
         * Update calendar wrapper.
         * @category Internal
         */
        private __updateCalendarWrappers;
        /** @ignore
         * Update view of days.
         * @category Internal
         */
        private __updateWrapperDays;
        /** @ignore
         * Update displayed count of invisible events.
         * @category Internal
         */
        private __updateInvisibleEventCounts;
        /** @ignore
         * Update view of events for 'year view'.
         * @category Internal
         */
        private __updateWrapperMonths;
        /** @ignore
         * Update view of events for 'month view'.
         * @category Internal
         */
        private __updateWrapperEvents;
        /** @ignore
         * Update current visible events depending on available space.
         * @category Internal
         */
        private __updateVisibleEvents;
        /** @ignore
         * Update current view.
         * @category Internal
         */
        private __updateCalendarView;
        /** @ignore
         * Update visibility of menu.
         * @category Internal
         */
        private __updateMenuVisibility;
        /** @ignore
         * Update menu text of __menuEntryEventVisibility.
         * @category Internal
         */
        private __updateMenuTextEventVisibility;
        /** @ignore
         * Update menu state of __menuEntryEventVisibility.
         * @category Internal
         */
        private __updateMenuStateEventVisibility;
        /** @ignore
         * Update all menu states.
         * @category Internal
         */
        private __updateMenuStates;
        /** @ignore
         * Update menu state of __menuEntryAdd.
         * @category Internal
         */
        private __updateMenuStateAdd;
        /** @ignore
         * Update menu state of __menuEntrySave.
         * @category Internal
         */
        private __updateMenuStateSave;
        /** @ignore
         * Update menu state of __menuEntryReset.
         * @category Internal
         */
        private __updateMenuStateReset;
        /** @ignore
         * Update button state of __buttonToday.
         * @category Internal
         */
        private __updateButtonStateToday;
        /** @ignore
         * Update image of button of __buttonToggleYearMonth.
         * @category Internal
         */
        private __updateButtonImageToggleYear;
        /** @ignore
         * Update visibility of icons in Legend.
         * @category Internal
         */
        private __updateLegendIcons;
        /** @ignore
         * Update visuals of DialogWindow content.
         * @category Internal
         */
        private __updateDialogWindow;
        /** @ignore
         * Reset events of BA collection.
         * @category Internal
         */
        private __resetEventsBa;
        /** @ignore
         * Reset unconfirmed event changes of BA collection.
         * @category Internal
         */
        private __resetChangesBa;
        /** @ignore
         * Reset events of calendar reference collection.
         * @category Internal
         */
        private __resetEventsBaRef;
        /** @ignore
         * Reset unconfirmed event changes of calendar reference collection.
         * @category Internal
         */
        private __resetChangesBaRef;
        /** @ignore
         * Reset all events.
         * @category Internal
         */
        private __resetEvents;
        /** @ignore
         * Reset all unconfirmed event changes.
         * @category Internal
         */
        private __resetChanges;
        /** @ignore
         * Reset all events and changes.
         * @category Internal
         */
        private __reset;
        /** @ignore
         * Function expression for Array.sort() to sort events ascending based on date.
         * @category Internal
         */
        private __sortEvents;
        /** @ignore
         * Swap date.
         * @category Internal
         */
        private __swapDate;
        /** @ignore
         * Combine single event collections into temporary new collection for display purposes.
         * @category Internal
         */
        private __combineEvents;
        /** @ignore
         * Compare two events. TRUE if content is equal, FALSE if content is different.
         * @category Internal
         */
        private __compareEventContent;
        /** @ignore
         * Opens EventDialog (DialogWindow + EventContent) to add new CalendarEvent or view/change existing one.
         * @category Internal
         * @param calEvt CalendarEvent to be shown or NULL to add new one (default: NULL).
         */
        private __openEventDialog;
        /** @ignore
         * Jump to current date.
         * @category Internal
         */
        private __today;
        /** @ignore
         * Toggle between year and month view with event visibility taken into account.
         * @category Internal
         */
        private __toggleViewYearMonth;
        /** @ignore
         * Toggle event visibility.
         * @category Internal
         */
        private __menuVisibilityEvents;
        /** @ignore
         * Open EventDialog to add new CalendarEvent.
         * @category Internal
         */
        private __menuAdd;
        /** @ignore
         * Save changes to PLC.
         * @category Internal
         */
        private __menuSave;
        /** @ignore
         * Reset all unconfirmed event changes.
         * @category Internal
         */
        private __menuReset;
        /** @ignore
         * Gets CalendarEvent with specified id.
         * @category Internal
         * @param id Identifier of CalendarEvent (ICalendarEvent.id).
         * @returns ICalendarEvent on success. NULL if nothing could be found.
         */
        private __getCalendarEvent;
        /** @ignore
         * Gets the week of the day.
         * @category Internal
         * @param date Current date for calculation.
         * @param day Day from which the week is to be determined.
         * @param dowStart Start day of the week (default: 1 - monday).
         * @returns Week of day. 0 on failure.
         */
        private __getWeekOfDay;
        /** @ignore
         * Gets the date of the day of week.
         * @category Internal
         * @param dow Day of week of which the day is to be determined.
         * @param week Week in which the day of week is located.
         * @param date Current date for calculation.
         * @returns Day. 0 on failure.
         */
        private __getDayOfDow;
        /** @ignore
         * Gets new event id for EventSource BA or BARef.
         * @category Internal
         * @param eventSource EventSource for which an id is to be returned (default: BA).
         * @returns Id based on eventSource.
         */
        private __getNextEventId;
        /** @ignore
         * Gets decimal part of a number.
         * @category Internal
         * @param value Value from which to get the decimal number.
         * @returns Decimal number. NULL on failure.
         */
        private __getDecimal;
        /** @ignore
         * Sets calendar ScheduleExceptions.
         * @category Internal
         * @param sel ScheduleExceptions from PLC.
         */
        private __setScheduleExceptions;
        /** @ignore
         * Sets calendar reference ScheduleExceptions.
         * @category Internal
         * @param sel Calendar reference ScheduleExceptions from PLC.
         */
        private __setScheduleCalendarReferences;
        /** @ignore
         * Signal change of selected day/event.
         * @category Internal
         * @param selection Data of selection.
         */
        private __onSelectionChanged;
        /** @ignore
         * Signal change of local events.
         * @category Internal
         */
        private __onEventsChanged;
        /** @ignore
         * Process BA object.
         * @category Public
         */
        processBaObject(): void;
        setAttributes(attr: Calendar.IAttributes): this;
        getAttributes(): Calendar.IAttributes;
        /**
         * Sets the visibility of events.
         * @category Public
         * @param visibility New value.
         */
        setVisibilityEvents(visibility: boolean): void;
        /**
        * Gets visibility of events.
        * @category Public
        * @returns Current visibility of events.
        */
        getVisibilityEvents(): boolean;
        /**
         * Toggle event visibility.
         * @category Public
         */
        toggleVisibilityEvents(): void;
        /**
         * Sets the view to given date.
         * @category Public
         * @param date Date to be set. NULL sets current date.
         */
        setDate(date?: Date): void;
        /**
         * Gets current selected date.
         * @category Public
         * @returns Selected date.
         */
        getSelectedDate(): Date;
        /**
         * Gets change state of calendar events.
         * @category Public
         * @returns Current change state of calendar events.
         */
        hasChanges(): boolean;
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
        /**
         * Sets calendar ScheduleExceptions.
         * @category Public
         * @param sel Calendar ScheduleExceptions from PLC.
         */
        setScheduleExceptions(sel: BA.SchedExceptionList | null | undefined): void;
        /**
         * Gets ScheduleExceptions of given source and date range.
         * @category Public
         * @param source Filters exceptions by given EventSource. NULL returns all exceptions of any EventSource.
         * @param begin Exceptions starting at 'begin' will be part of the result.
         * @param end Exceptions ending at 'end' will be part of the result. If set, 'begin' has to be set aswell.
         * @returns Collection of ScheduleExceptions on success. NULL if no valid data could be found.
         */
        getScheduleExceptions(source?: Calendar.CalendarEventSource, begin?: Date, end?: Date): BA.SchedExceptionList | null;
        /**
         * Gets calendar references.
         * @category Public
         * @returns Collection of calendar references on success. NULL if no valid data could be found.
         */
        getScheduleCalendarReferences(): BA.SchedCalendarList | null | undefined;
        /**
         * Sets DataType attribute.
         * @category Attribute setter and getter
         * @param dataType New DataType or NULL.
         */
        setDataType(dataType: DataType | null | undefined): void;
        /**
         * Gets DataType attribute.
         * @category Attribute setter and getter
         * @returns DataType attribute.
         */
        getDataType(): DataType | null | undefined;
        /**
         * Sets ActiveText attribute.
         * @category Attribute setter and getter
         * @param activeText New ActiveText or NULL.
         */
        setActiveText(activeText: string | null | undefined): void;
        /**
         * Gets ActiveText attribute.
         * @category Attribute setter and getter
         * @returns ActiveText attribute.
         */
        getActiveText(): string | null | undefined;
        /**
         * Sets InactiveText attribute.
         * @category Attribute setter and getter
         * @param inactiveText New InactiveText or NULL.
         */
        setInactiveText(inactiveText: string | null | undefined): void;
        /**
         * Gets InactiveText attribute.
         * @category Attribute setter and getter
         * @returns InactiveText attribute.
         */
        getInactiveText(): string | null | undefined;
        /**
         * Sets Unit attribute.
         * @category Attribute setter and getter
         * @param unit New Unit or NULL.
         */
        setUnit(unit: string | BA.Unit | null | undefined): void;
        /**
         * Gets Unit attribute.
         * @category Attribute setter and getter
         * @returns Unit attribute.
         */
        getUnit(): string | null | undefined;
        /**
         * Sets StateTexts attribute.
         * @category Attribute setter and getter
         * @param stateTexts New StateTexts or NULL.
         */
        setStateTexts(stateTexts: Combobox.IItem<number>[] | null | undefined): void;
        /**
         * Gets StateTexts attribute.
         * @category Attribute setter and getter
         * @returns StateTexts attribute.
         */
        getStateTexts(): Combobox.IItem<number>[] | null | undefined;
        /**
         * Sets StateColors attribute.
         * @category Attribute setter and getter
         * @param stateColors New StateColors or NULL.
         */
        setStateColors(stateColors: DailyScheduleEntry.IStateColors | null | undefined): void;
        /**
         * Gets StateColors attribute.
         * @category Attribute setter and getter
         * @returns StateColors attribute.
         */
        getStateColors(): DailyScheduleEntry.IStateColors | null | undefined;
        /**
         * Sets SnapPeriode attribute.
         * @category Attribute setter and getter
         * @param snapPeriode New SnapPeriode or NULL.
         */
        setSnapPeriode(snapPeriode: number | null | undefined): void;
        /**
         * Gets SnapPeriode attribute.
         * @category Attribute setter and getter
         * @returns SnapPeriode attribute.
         */
        getSnapPeriode(): number | null | undefined;
        /**
         * Gets maximum amount of Schedule exceptions.
         * @category Public
         * @returns Amount of Schedule exceptions.
         */
        getMaximumExcCount(): number;
        /**
         * Gets MaximumEntryCount attribute of DailySchedule.
         * @category Public
         * @returns MaximumEntryCount attribute of DailySchedule.
         */
        getMaximumEntryCount(): number;
        /**
         * Gets amount of calendar refrences.
         * @category Public
         * @returns Amount of calendar refrences.
         */
        getMaximumCalCount(): number;
        /**
         * Sets display mode.
         * @category Attribute setter
         * @param displayMode New value.
         */
        setDisplayMode(displayMode: Calendar.CalendarDisplayMode): this;
        /**
         * Gets display mode.
         * @category Attribute getter
         */
        getDisplayMode(): Calendar.CalendarDisplayMode;
        /**
         * Sets display view.
         * @category Attribute setter
         * @param displayView New value.
         */
        setDisplayView(displayView: Calendar.CalendarDisplayView): this;
        /**
         * Gets display view.
         * @category Attribute getter
         */
        getDisplayView(): Calendar.CalendarDisplayView;
        /**
         * Sets menu visibility.
         * @category Attribute setter
         * @param displayView New value.
         */
        setVisibilityMenu(p: boolean): this;
        /**
         * Gets menu visibility.
         * @category Attribute getter
         */
        getVisibilityMenu(): boolean;
        protected __processReadOnly(): void;
    }
    namespace Calendar {
        /** Events provided by the Calendar. */
        enum CalendarEvent {
            /** Is fired if the collection of CalendarEvents has changed. */
            onEventsChanged = "oneventschanged",
            /** Is fired if the selection in the Calendar has changed depending on the DisplayMode (DatePicker: selected day, EventCalendar: selected event). */
            onSelectionChanged = "onselectionchanged"
        }
        /** Display modes of the Calendar. */
        enum CalendarDisplayMode {
            /** Display with reduced functionality. Events not displayed. */
            DatePicker = 0,
            /** Display with full functionality. */
            EventCalendar = 1
        }
        /** Views of the Calendar. */
        enum CalendarDisplayView {
            /** Month is visible. */
            Month = 0,
            /** Year is visible. */
            Year = 1
        }
        /** Repetition types of an event. */
        enum CalendarEventRepetition {
            /** Repetion not set. */
            None = 0,
            /** Repetition with defined start and end date. */
            Regular = 1,
            /** Repetition on daily basis. */
            Daily = 2,
            /** Repetition on weekly basis. */
            Weekly = 3,
            /** Repetition on monthly basis. */
            Monthly = 4,
            /** Repetition on yearly basis. */
            Yearly = 5,
            /** Repetition on monthly basis but only in specific year. */
            MonthlyOnce = 6,
            /** Repetition on yearly basis but only in specific year. */
            YearlyOnce = 7
        }
        /** Source of events. */
        enum CalendarEventSource {
            /** Source not set. */
            None = 0,
            /** Event added by user. */
            User = 1,
            /** Event added by BA (PLC). */
            BA = 2,
            /** Event added by BA calendar reference (PLC). */
            BARef = 3
        }
        /** Indicates what ISelection.Data contains. */
        enum CalendarSelectionType {
            /** SelectionType not set. */
            None = 0,
            /** ISelection.Data contains an Date object. */
            Date = 1,
            /** ISelection.Data contains an ISelectedEvent. */
            Event = 2
        }
        /** Data for the Calendar to control its behavior. */
        interface IAttributes extends DailyScheduleEntry.IAttributes {
            /** Initialization date. */
            dateInit?: Date;
            /** Starting day of week. */
            dowStart?: BA.Weekday;
            /** Display style of the Calendar. */
            displayMode?: Calendar.CalendarDisplayMode;
            /** View to be displayed if the CalendarDisplayMode is EventCalendar. */
            displayView?: Calendar.CalendarDisplayView;
            /** Visibility of menu. */
            visibilityMenu?: boolean;
            /** Visibility of menu entry Save. */
            visibilityMenuEntrySave?: boolean;
            /** Visibility of events. */
            visibilityEvents?: boolean;
            /** Visibility of events count per day. */
            visibilityEventsCount?: boolean;
        }
        /** Data structure of the CalendarEvent. */
        interface ICalendarEvent {
            /** Unique id of the event. */
            id: number;
            /** Origin source of the event. */
            source: Calendar.CalendarEventSource;
            /** Identifier of the referenced calendar (instanceId) where the event was created from (0: no reference, >=100: references). */
            calInstId: number;
            /** Repetition type based on date data. */
            repitition: Calendar.IRepitition;
            /** Start date. Can be a real date or specifically manipulated date for internal useage. */
            start: Date;
            /** End date. Can be a real date or specifically manipulated date for internal useage. */
            end: Date;
            /** Title of the event to be shown when DisplayMode is set to EventCalendar.*/
            title: string;
            /** Description of the event. */
            desc: string;
            /** The origin ScheduleExceptions. */
            data: BA.SchedExceptionEntryList | null;
        }
        /** Short form of the data structure ICalendarEvent returned in ISelection.Data. */
        interface ISelectedEvent {
            /** Unique id of the event. */
            id: number;
            /** Start date. Can be a real date or specifically manipulated date for internal useage. */
            start: Date;
            /** End date. Can be a real date or specifically manipulated date for internal useage. */
            end: Date;
            /** Title of the event to be shown when DisplayMode is set to EventCalendar.*/
            title: string;
            /** Description of the event. */
            desc: string;
        }
        /** Represents the event repetition with further data. */
        interface IRepitition {
            /** Repetition type of the event. */
            Type: Calendar.CalendarEventRepetition;
            /** Further details depending on the Type. */
            Data: {
                /**
                * Yearly: 0 = not specified, 1 - nth = every nth-year
                * YearlyOnce: no use
                * Monthly, MonthlyOnce: 0 = not specified, 1 - nth = every nth-month
                * Weekly: 0 = not specified, 1 - nth = every nth week within date range
                * Daily: 0 = not specified, 1 - nth = every nth-day
                * every: number [use later when Outlook series are about to be implemented]
                * Yearly, YearlyOnce, Monthly, MonthlyOnce, Weekly: 0 = not specified, 1 = monday, 2 = thuseday, 4 = wednesday, 8 = thursday, 16 = friday, 32 = saturday, 64 = sunday, 127 = every (bit-masked representation of multiple DOW)
                * Daily: no use
                */
                dow: number;
                /**
                * Yearly, Monthly: 0 = not specified, 1 = first DOW of month ... 6 = sixth DOW of month
                * Weekly, Daily: no use
                * YearlyOnce, MonthlyOnce: ???
                * NOTE: not yet implemented
                */
                dowNth: number;
                /**
                * Yearly, YearlyOnce, Monthly, MonthlyOnce: 0 = not specified, 1 - 6 = week of month, 7 = every week of month
                * Weekly, Daily: no use
                */
                dowWeek: number;
                /**
                * Daily: 0 = not specified, 1 - nth = every nth-workday
                * Yearly, YearlyOnce, Monthly, Monthly, Weekly: no use
                * NOTE: not yet implemented
                */
                workday: number;
            };
        }
        /** Data structure returned by CalendarEvent.onSelectionChanged. */
        interface ISelection {
            /** Indicates what Data contains. */
            Type: Calendar.CalendarSelectionType;
            /** Data of the event. */
            Data: Date | ISelectedEvent;
        }
        /**
         * Defines the default size of the event dialog.
         * Default is { width: 700, height: 350 }.
         */
        let DefaultEventDialogSize: {
            width: number;
            height: number;
        };
    }
}
//# sourceMappingURL=Calendar.d.ts.map
declare namespace TcHmi.BuildingAutomation {
    namespace Components {
        /**
         * Class that can display and edit different calendars.
         */
        class CalendarList extends Base implements BaObjectHandler.IUsesBaObject {
            /**
             * Constructor of the CalendarList class.
             * @param id The unique id of the class.
             * @param parent The parent of the class.
             */
            constructor(id: string, parent: IBaseNode | null);
            baObjectHandler: BaObjectHandler;
            protected __attrHandler: AttributeHandler<CalendarList.IAttributes>;
            private __list;
            protected __attach(): void;
            protected __detach(): void;
            destroy(): void;
            processBaObject(): void;
            static calendarEntryToString(calEntry: BA.CalendarEntry): string;
            static createMonthCbData(): Combobox.IItem<BA.Month>[];
            static createWeekOfMonthCbData(): Combobox.IItem<BA.Week>[];
            static createDayOfWeekCbData(): Combobox.IItem<BA.Weekday>[];
            addBaCalendar(calendar: BA.BaBasicObject): Promise<void>;
            setAttributes(attr: CalendarList.IAttributes): this;
            getAttributes(): CalendarList.IAttributes;
        }
        namespace CalendarList {
            interface IAttributes extends Base.IAttributes {
                calendars?: Map<string, BA.BaBasicObject> | null;
            }
            function openCalendarListDialog(baObj?: BA.BaBasicObject): void;
            let WeekDays: string[];
            let WeekDaysShort: string[];
            let MonthNames: string[];
            let MonthNamesShort: string[];
            /**
             * Defines the default size of the calendar list dialog.
             * Default is { width: 750, height: 400 }.
             */
            let DefaultCalendarListDialogSize: {
                width: number;
                height: number;
            };
        }
    }
    namespace BA {
        interface BaView {
            /**
             * Get all calendar objects that are availiable in the BA.BaView.
             * @category Public
             * @param view The view to inspect.
             * @returns The found calendars.
             */
            getBaCalendarObjects(): BA.BaBasicObject[];
        }
    }
}
//# sourceMappingURL=CalendarList.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Class that displays a checkbox. */
    class Checkbox extends TextControl implements Components.ResizeHandler.IOnResized, System.ValueHandler.IValueHandler<boolean>, BaObjectHandler.IUsesBaObject {
        constructor(id: string, parent?: IBaseNode | null);
        baObjectHandler: BaObjectHandler;
        resizeHandler: Components.ResizeHandler;
        valueHandler: System.ValueHandler<boolean>;
        /**
         * The checkbox input element.
         * @category Elements
         */
        protected __checkbox: JQuery<HTMLInputElement>;
        /**
         * The Surrounding container to realize content padding for checkbox and label.
         * @category Elements
         */
        protected __paddingContainer: JQuery<HTMLDivElement>;
        protected __attrHandler: AttributeHandler<Checkbox.IAttributes>;
        /**
         * When true the label is shown and when false the label is hidden.
         * @category Internal
         */
        protected __useLabel: boolean;
        /**
         * Symbol for the ActiveText attribute if the ActiveText was passed as a TcHmiSymbol.
         * @category Internal
         */
        private __activeTextSymbol;
        /**
         * Symbol for the InactiveText attribute if the InactiveText was passed as a TcHmiSymbol.
         * @category Internal
         */
        private __inactiveTextSymbol;
        /**
         * IReadyFunction to reset the busy invoking after changing the state.
         * @category Internal
         */
        private __stateFeedbackReady;
        /**
         * The event handler for the changed event.
         * @category Event handler
         */
        protected __stateChangedHandler: (ev: JQuery.TriggeredEvent) => void;
        /**
         * Handler when the label was pressed.
         * @category Event handler
         */
        protected __labelPressedHandler: (ev: JQuery.TriggeredEvent) => void;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        onResized(): void;
        onValueChanged(newState: boolean | null | undefined): void;
        /**
         * Callback when the state of the checkbox has changed.
         * @category Event callbacks
         */
        private __onStateChanged;
        /**
         * Callback when the label was pressed.
         * @category Event callbacks
         */
        private __onLabelPressed;
        /**
         * Updates the elements of the control for the new state.
         * @category Internal
         * @param state The new state to be set.
         */
        private __updateElements;
        /**
         * Updates the label text behind the checkbox.
         * @category Internal
         */
        protected __updateLabel(state: boolean | null | undefined): void;
        processBaObject(): void;
        /**
         * Getter for the use label flag.
         * @category Public
         * @returns The flag if the label is used or not.
         */
        getUseLabel(): boolean;
        setAttributes(attr: Checkbox.IAttributes): this;
        getAttributes(): Checkbox.IAttributes;
        /**
         * Setter for the State of the checkbox.
         * @category Attribute setter and getter
         * @param p The new State or null.
         * @returns The Checkbox.
         */
        setState(p: boolean | null | undefined): this;
        private __setStateInternal;
        /**
         * Processor for the State attribute.
         * @category Attribute setter and getter
         */
        protected __processState(): void;
        /**
         * Getter for the State attribute.
         * @category Attribute setter and getter
         * @returns The State attribute.
         */
        getState(): boolean | null | undefined;
        /**
         * Setter for the StateFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new StateFeedback or null.
         * @returns The Checkbox.
         */
        setStateFeedback(p: boolean | null | undefined): this;
        /**
         * Processor for the StateFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processStateFeedback(): void;
        /**
         * Getter for the StateFeedback attribute.
         * @category Attribute setter and getter
         * @returns The StateFeedback attribute.
         */
        getStateFeedback(): boolean | null | undefined;
        /**
         * Setter for the ActiveText attribute. Text will be shown in the label when the state is true.
         * @category Attribute setter and getter
         * @param p The new ActiveText or null.
         * @returns The Checkbox.
         */
        setActiveText(p: string | null | undefined): this;
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
         * @returns The Checkbox.
         */
        setInactiveText(p: string | null | undefined): this;
        /**
         * Processor for the ActiveText attribute.
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
         * Setter for the CheckedBackgroundColor attribute.
         * @category Attribute setter and getter
         * @param p The new CheckedBackgroundColor or null.
         * @returns The Checkbox.
         */
        setCheckedBackgroundColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the CheckedBackgroundColor attribute.
         * @category Attribute setter and getter
         */
        protected __processCheckedBackgroundColor(): void;
        /**
         * Getter for the CheckedBackgroundColor attribute.
         * @category Attribute setter and getter
         * @returns The CheckedBackgroundColor attribute.
         */
        getCheckedBackgroundColor(): Color.RGBAColor | null | undefined;
        /**
         * Setter for the CheckmarkColor attribute.
         * @category Attribute setter and getter
         * @param p The new CheckmarkColor or null.
         * @returns The Checkbox.
         */
        setCheckmarkColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the CheckmarkColor attribute.
         * @category Attribute setter and getter
         */
        protected __processCheckmarkColor(): void;
        /**
         * Getter for the CheckmarkColor attribute.
         * @category Attribute setter and getter
         * @returns The CheckmarkColor attribute.
         */
        getCheckmarkColor(): Color.RGBAColor | null | undefined;
        /**
         * Setter for the Appearance attribute.
         * @category Attribute setter and getter
         * @param p The new Appearance or null.
         * @returns The Checkbox.
         */
        setAppearance(p: Checkbox.Appearance | null | undefined): this;
        /**
         * Processor for the Appearance attribute.
         * @category Attribute setter and getter
         */
        protected __processAppearance(): void;
        /**
         * Getter for the Appearance attribute.
         * @category Attribute setter and getter
         * @returns The Appearance attribute.
         */
        getAppearance(): Checkbox.Appearance | null | undefined;
        protected __processReadOnly(): void;
    }
    namespace Checkbox {
        interface IAttributesExState extends System.ValueHandler.IValueHandlerAttributes {
            /** Background color of the active checkbox. */
            checkedBackgroundColor?: Color.RGBAColor | null;
            /** Color of the checkmark which is displayed when the checkbox is active. */
            checkmarkColor?: Color.RGBAColor | null;
            /** Text which is displayed in the label when the checkbox is active. */
            activeText?: string | null;
            /** Text which is displayed in the label when the checkbox is inactive. */
            inactiveText?: string | null;
            /** Aappearance of the checkbox. */
            appearance?: Appearance | null;
        }
        interface IAttributes extends IAttributesExState, TextControl.IAttributes {
            /** State of the checkbox */
            state?: boolean | null;
            /** Feedback of the state. */
            stateFeedback?: boolean | null;
        }
        enum CheckboxEvents {
            /** Is fired when the state of the checkbox has changed. */
            onStateChanged = "onStateChanged",
            /** Is fired when the state feedback of the checkbox has changed. */
            onStateFeedbackChanged = "onStateFeedbackChanged",
            /** Is fired when the user interaction has ended. */
            onUserInteractionFinished = "onUserInteractionFinished",
            /** Is fired when the label is now shown or not. */
            onUseLabelChanged = "onUseLabelChanged"
        }
        enum Appearance {
            checkbox = 0,
            toggleSwitch = 1,
            toggleSlider = 2
        }
    }
}
//# sourceMappingURL=Checkbox.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Control that displays a combobox. */
    class Combobox<T> extends TextControl implements System.ValueHandler.IValueHandler<T>, BaObjectHandler.IUsesBaObject {
        constructor(id: string, parent?: IBaseNode | null);
        baObjectHandler: BaObjectHandler;
        valueHandler: System.ValueHandler<T>;
        /**
         * The HTML select element which represents a combobox
         * @category Elements
         */
        protected __combobox: JQuery<HTMLSelectElement>;
        /**
         * The button to open the combobox.
         * @category Elements
         */
        private __button;
        protected __attrHandler: AttributeHandler<Combobox.IAttributes<T>>;
        /**
         * IReadyFunction to reset the busy invoking after changing the value.
         * @category Internal
         */
        private __valueFeedbackReady;
        /**
         * The event handler for the changed event.
         * @category Event handler
         */
        protected __changedHandler: (ev: JQuery.ChangeEvent) => void;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        onValueChanged(newVal: T | null | undefined): void;
        /**
         * Callback when the combobox value has changed.
         * @category Event callbacks
         */
        private __onChanged;
        /**
         * Add a option element to the html select element.
         * @category Internal
         * @param p The data for the option element.
         */
        private __addOption;
        /**
         * Update the displayed html elements with a new value.
         * @param p The new value.
         */
        private __updateElements;
        setAttributes(attr: Combobox.IAttributes<T>): this;
        getAttributes(): Combobox.IAttributes<T>;
        /**
         * Setter for the Data attribute.
         * @category Attribute setter and getter
         * @param p The new Data or null.
         * @returns The Combobox.
         */
        setData(p: Combobox.IItem<T>[] | null | undefined): this;
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
        getData(): Combobox.IItem<T>[] | null | undefined;
        /**
         * Getter for the SelectedData attribute.
         * @category Attribute setter and getter
         * @returns The SelectedData attribute.
         */
        getSelectedData(): Combobox.IItem<T> | null | undefined;
        /**
         * Setter for the selected value.
         * @param p The new selected value.
         * @returns The Combobox.
         */
        setSelectedValue(p: T | null | undefined): this;
        private __setSelectedValueInternal;
        /**
         * Processor for the Data attribute.
         * @category Attribute setter and getter
         */
        protected __processSelectedValue(): void;
        /**
         * Getter for the SelectedValue.
         * @category Attribute setter and getter
         * @returns The SelectedValue.
         */
        getSelectedValue(): T | null | undefined;
        /**
         * Setter for the SelectedValueFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new SelectedValueFeedback or null.
         * @returns The Combobox.
         */
        setSelectedValueFeedback(p: T | null | undefined): this;
        /**
         * Processor for the SelectedValueFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processSelectedValueFeedback(): void;
        /**
         * Getter for the SelectedValueFeedback attribute.
         * @category Attribute setter and getter
         * @returns The SelectedValueFeedback.
         */
        getSelectedValueFeedback(): T | null | undefined;
        /**
         * Setter for the ButtonColor attribute. Background color for the drop down button.
         * @category Attribute setter and getter
         * @param p The new ButtonColor or null.
         * @returns The Combobox.
         */
        setButtonColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the ButtonColor attribute.
         * @category Attribute setter and getter
         */
        protected __processButtonColor(): void;
        /**
         * Getter for the ButtonColor attribute.
         * @category Attribute setter and getter
         * @returns The ButtonColor attribute.
         */
        getButtonColor(): Color.RGBAColor | null | undefined;
        /**
         * Setter for the ButtonArrowColor attribute.
         * @category Attribute setter and getter
         * @param p The new ButtonArrowColor or null.
         * @returns The Combobox.
         */
        setButtonArrowColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the ButtonColor attribute.
         * @category Attribute setter and getter
         */
        protected __processButtonArrowColor(): void;
        /**
         * Getter for the ButtonArrowColor attribute.
         * @category Attribute setter and getter
         * @returns The ButtonArrowColor attribute.
         */
        getButtonArrowColor(): Color.RGBAColor | null | undefined;
        protected __processReadOnly(): void;
        static toComboboxItemArray(data: string[] | Map<number, string> | {
            [index: number]: string;
        } | null | undefined, startOffset?: number): Combobox.IItem<number>[] | null;
        processBaObject(): void;
    }
    namespace Combobox {
        interface IAttributeExValue<T> extends System.ValueHandler.IValueHandlerAttributes {
            /** Data of the combobox. */
            data?: Combobox.IItem<T>[] | null;
            /** Background color of the drop down button. */
            buttonColor?: Color.RGBAColor | null;
            /** Color of the arrow in the drop down button. */
            buttonArrowColor?: Color.RGBAColor | null;
        }
        interface IAttributes<T> extends IAttributeExValue<T>, TextControl.IAttributes {
            /** The currently selected data of the combobox. */
            selectedData?: Combobox.IItem<T> | null;
            /** The selected value. */
            selectedValue?: T | null;
            /** The feedback for the selected value. */
            selectedValueFeedback?: T | null;
        }
        /** Data for a combobox item. */
        interface IItem<T> {
            /** Text to be displayed when the value is selected. */
            text: string | null;
            /** Value of the combobox item. */
            value: T | null;
        }
        /**
         * Validates the interface 'ComboboxItem'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isComboboxItem<T>(p: object | null | undefined): p is IItem<T>;
        /**
         * Creates a data array for the Combobox based on an enumeration.
         * @param p The enumeration which will be used to create the items.
         * @returns The create data for the Combobox.
         */
        function createDataFromEnum(p: EnumMapping): IItem<number>[];
        enum ComboboxEvents {
            onSelectedValueChanged = "onSelectedValueChanged",
            onSelectedValueFeedbackChanged = "onSelectedValueFeedbackChanged",
            onUserInteractionFinished = "onUserInteractionFinished"
        }
    }
}
//# sourceMappingURL=Combobox.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Class that displays a ContentWindow. */
    class ContentWindow extends Base implements Components.ResizeHandler.IOnResized {
        constructor(id: string, parent?: IBaseNode | null);
        protected __attrHandler: AttributeHandler<ContentWindow.IAttributes>;
        resizeHandler: Components.ResizeHandler;
        /**
         * Container which can create different controls.
         * @category Public
         */
        controlContainer: ControlContainer;
        /**
         * Header of the dialog.
         * @category Elements
         */
        protected __header: JQuery<HTMLDivElement>;
        /**
         * An icon which will be displayed infront of the headline.
         * @category Elements
         */
        protected __headerIcon: Icon | undefined;
        /**
         * Textblock for the headline.
         * @category Elements
         */
        protected __headline: Textblock;
        /**
         * Container which will contain the content of the dialog
         * @category Elements
         */
        protected __contentContainer: JQuery<HTMLDivElement>;
        /**
         * The context menu fpr the content window.
         * @category Elements
         */
        protected __contextMenu: ContextMenu | undefined;
        /**
         * Div element which represents the menu button to open the context menu.
         * @category Elements
         */
        protected __menuButton: ToggleButton | undefined;
        /**
         * Handler when the header menu button was pressed.
         * @category Event handler
         */
        private __headerMenuButtonPressed;
        /**
         * Handler when the context menu was closed.
         * @category Event handler
         */
        private __contextMenuClosedHandler;
        /**
         * Handler when a control was added or removed from the control container.
         * @category Event handler
         */
        private __controlContainerCollectionChangedHandler;
        /**
         * Identifier if the header is appended or not.
         * @category Internal
         */
        private __headerAppended;
        /**
         * Destroy function for the onPressed event of the header menu button.
         * @category Internal
         */
        private __destroyHeaderMenuButtonPressed;
        /**
         * Legend handler for the icon in the header.
         * @ategory Internal
         */
        private __headerIconLegendHandler;
        /**
         * CSS class name of the header icon.
         * @category Internal
         */
        private static __headerIconClassName;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Callback when the collection of the control container has changed.
         * @category Event callbacks
         * @param ctrl The control that has been added or removed.
         * @param status If the control was added or removed.
         */
        protected __onControlContainerCollectionChanged(ctrl: TextControl, status: 'added' | 'removed'): void;
        /**
         * Callback when the size of the graph has changed.
         * @category Event callbacks
         */
        onResized(): void;
        /**
         * Updates the order of the different header elements.
         * @category Internal
         */
        protected __updateHeaderElementsOrder(): void;
        /**
         * Gets the header element of the content window to append other elements to it.
         * @category Public
         * @returns The Html header element.
         */
        getHeader(): JQuery;
        /**
         * Gets the content container element to append more than one content to it.
         * @category Public
         * @returns The Html content container element.
         */
        getContentContainer(): JQuery;
        /**
         * Creates a context menu for the content window.
         * @category Public
         */
        addMenu(rowEntryOptions?: ContextMenu.IRowEntryOptions | ContextMenu.IRowEntryOptions[]): ContextMenu;
        /**
         * Get the headline of the window.
         * @category Public
         * @returns The headline of the window.
         */
        getHeadline(): Textblock;
        setAttributes(attr: ContentWindow.IAttributes): this;
        getAttributes(): ContentWindow.IAttributes;
        /**
         * Setter for the content attribute.
         * @category Attribute setter and getter
         * @param p A JQuery object to append to the contentContainer or null.
         * @returns The ContentWindow.
         */
        setContent(p: JQuery | null | undefined): this;
        /**
         * Processor for the content attribute.
         * @category Attribute setter and getter
         */
        protected __processContent(): void;
        /**
         * Getter for the content attribute.
         * @category Attribute setter and getter
         * @returns The Content attribute.*/
        getContent(): JQuery | null | undefined;
        /**
         * Setter for the HeaderIcon attribute. The icon will be displayed in front of the headline.
         * @category Attribute setter and getter
         * @param p The new HeaderIcon or null.
         * @returns The ContentWindow.
         */
        setHeaderIcon(p: ContentWindow.IHeaderIcon | null | undefined): this;
        /**
         * Processor for the HeaderIcon attribute.
         * @category Attribute setter and getter
         */
        protected __processHeaderIcon(): void;
        /**
         * Getter for the HeaderIcon attribute.
         * @category Attribute setter and getter
         * @returns The HeaderIcon attribute.
         */
        getHeaderIcon(): ContentWindow.IHeaderIcon | null | undefined;
        /**
         * Setter for the HeadlineText attribute. The text that will be displayed in the header.
         * @category Attribute setter and getter
         * @param p The new HeadlineText or null.
         * @returns The ContentWindow.
         */
        setHeadlineText(p: string | null | undefined): this;
        /**
         * Processor for the HeadlineText attribute.
         * @category Attribute setter and getter
         */
        protected __processHeadlineText(): void;
        /**
         * Getter for the HeadlineText attribute.
         * @category Attribute setter and getter
         * @returns The HeadlineText attribute.
         */
        getHeadlineText(): string | null | undefined;
        /**
         * Setter for the HeadlineAttributes attribute.
         * @category Attribute setter and getter
         * @param p The new HeadlineAttributes or null.
         * @returns The ContentWindow.
         */
        setHeadlineAttributes(p: TextControl.IAttributes): this;
        /**
         * Getter for the HeadlineAttributes attribute.
         * @category Attribute setter and getter
         * @returns The HeadlineAttributes attribute.
         */
        getHeadlineAttributes(): TextControl.IAttributes;
        /**
         * Setter for the HeaderColor attribute.
         * @category Attribute setter and getter
         * @param p The new HeaderColor or null.
         * @returns The ContentWindow.
         */
        setHeaderColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the HeaderColor attribute.
         * @category Attribute setter and getter
         */
        protected __processHeaderColor(): void;
        /**
         * Getter for the HeaderColor attribute.
         * @category Attribute setter and getter
         * @returns The HeaderColor attribute.
         */
        getHeaderColor(): Color.RGBAColor | null | undefined;
        /**
         * Setter for the HeaderHeight attribute.
         * @category Attribute setter and getter
         * @param p The new HeaderHeight or null.
         * @returns The ContentWindow.
         */
        setHeaderHeight(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Processor for the HeaderHeight attribute.
         * @category Attribute setter and getter
         */
        protected __processHeaderHeight(): void;
        /**
         * Getter for the HeaderHeight attribute.
         * @category Attribute setter and getter
         * @returns The HeaderHeight attribute.
         */
        getHeaderHeight(): number | null | undefined;
        /**
         * Getter for the HeaderHeightUnit attribute.
         * @category Attribute setter and getter
         * @returns The HeaderHeightUnit attribute.
         */
        getHeaderHeightUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for ShowHeader attribute.
         * @category Attribute setter and getter
         * @param p The new ShowHeader or null.
         * @returns The ContentWindow.
         */
        setShowHeader(p: boolean | null | undefined): this;
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
         * Setter for MenuAppearance attribute.
         * @category Attribute setter and getter
         * @param p The new MenuAppearance or null.
         * @returns The ContentWindow.
         */
        setMenuAppearance(p: ContentWindow.IMenuAppearance | null | undefined): this;
        /**
         * Processor for the MenuAppearance attribute.
         * @category Attribute setter and getter
         */
        protected __processMenuAppearance(): void;
        /**
         * Getter for the MenuAppearance attribute.
         * @category Attribute setter and getter
         * @returns The MenuAppearance attribute.
         */
        getMenuAppearance(): ContentWindow.IMenuAppearance | null | undefined;
    }
    namespace ContentWindow {
        interface IAttributes extends Base.IAttributes {
            /** Content which will be displayed in the window. */
            content?: JQuery | null;
            /** Defines how the menu will appear. */
            menuAppearance?: ContentWindow.IMenuAppearance | null;
            /** An icon which will be displayed in the header before the headline. */
            headerIcon?: IHeaderIcon | null;
            /** Attributes for the headline */
            headline?: TextControl.IAttributes | null;
            /** Defines if the header of the content window is shown of not. */
            showHeader?: boolean | null;
            /** Background color of the header. */
            headerColor?: Color.RGBAColor | null;
            /** Height of the header. */
            headerHeight?: number | null;
            /** Height unit of the header. */
            headerHeightUnit?: DimensionUnit | null;
            /** Menu for the content window. */
            menu?: ContextMenu.IRowEntryOptions | ContextMenu.IRowEntryOptions[];
            /** Additional controls that will be placed in the header. */
            controls?: ControlContainer.IControlOptions | Base | (ControlContainer.IControlOptions | Base)[];
        }
        /** Appearance of the menu. */
        interface IMenuAppearance {
            /** Defines if the menu should overlay or compress the content. */
            overlay?: boolean;
            /** Defines if the menu openes from the side or top */
            sideways?: boolean;
        }
        interface IHeaderIcon extends Icons.IIconAttributes {
            /**
             * Hides the border around the icon.
             * Default is false.
             */
            hideBorder?: boolean;
        }
        /**
         * Validates the type 'FontWeight'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isMenuAppearance(p: object | null | undefined): p is IMenuAppearance;
        /**
         * Defines if the border around the header icon is hided by default. Enabling/Disabling is still be possible for each instance separately.
         * Default is false.
         */
        let HideHeaderIconBorderDefault: boolean;
    }
}
//# sourceMappingURL=ContentWindow.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    class ContextMenu extends Base {
        constructor(id: string, parent?: IBaseNode | null);
        protected __attrHandler: AttributeHandler<ContextMenu.IAttributes>;
        /**
         * Indicator if the context menu is opened or closed.
         * @category Internal
         */
        private __isOpen;
        /**
         * Indicator if the menu was opened sideways.
         * @category Internal
         */
        private __openedSideways;
        protected __element: JQuery<HTMLUListElement>;
        /**
         * Entries of the context menu.
         * @category Elements
         */
        private __rowEntries;
        /**
         * Handler when the body was pressed.
         * @category Event handler
         */
        private __bodyPressedHandler;
        /**
         * Handler when a row entry was pressed
         * @category Event handler
         */
        private __rowEntryPressedHandler;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Callback when a row entry was pressed.
         * @category Event callbacks
         */
        private __onRowEntryPressed;
        /**
         * Opens the menu.
         * @category Internal
         * @param root The root element where the context menu should be appended to.
         * @param cb Callback is invoked when the context menu is completely opened.
         */
        private __open;
        /**
         * Closes the menu.
         * @category Internal
         * @param cb Callback is invoked when the context menu is completely closed.
         */
        private __close;
        /**
         * Add a row entry with certain options to the context menu.
         * @param options Options for the row entry.
         * @returns The created row entry.
         */
        private __addRowEntry;
        /**
         * Toggles the open state of the context menu.
         * @category Public
         * @param root The root element where the context menu should be appended to.
         * @param cb Callback is invoked when the context menu is completely opened or closed.
         */
        toggleOpen(root?: JQuery, sideways?: boolean): void;
        /**
         * Opens the context menu.
         * @category Public
         * @param root The root element where the context menu should be appended to.
         * @param sideways If true the context menu will be opened sideways, otherwise drop down.
         */
        open(root?: JQuery, sideways?: boolean): void;
        /**
         * Closes the context menu.
         * @category Public
         */
        close(): void;
        /**
         * Add a new row entry.
         * @category Public
         * @param id ID for the new menu entry.
         * @returns The created row entry or undefined if a row entry with this ID already excists.
         */
        addRowEntry(options: ContextMenu.IRowEntryOptions | ContextMenu.IRowEntryOptions[]): ContextMenu.RowEntry | ContextMenu.RowEntry[];
        /**
         * Remove an excisiting row entry from the context menu.
         * @category Public
         * @param entry The entry or the id of the row entry.
         */
        removeRowEntry(entry: ContextMenu.RowEntry | string): boolean;
        /**
         * Get the number of created row entries.
         * @category Public
         * @returns The number of created row entries.
         */
        getRowEntriesCount(): number;
        /**
         * Get a row entry by its name.
         * @category Public
         * @param name The name of the options of the row entry.
         * @returns The row entry with the certain name.
         */
        getRowEntry(name: string): ContextMenu.RowEntry | undefined;
        /**
         * Get all created row entries.
         * @category Public
         * @returns All created row entries.
         */
        getRowEntries(): ContextMenu.RowEntry[];
        /**
         * Get if the menu is opened or closed.
         * @category Public
         * @returns True if the menu is opened and false if closed.
         */
        getIsOpen(): boolean;
        setAttributes(attr: ContextMenu.IAttributes): this;
        getAttributes(): ContextMenu.IAttributes;
        /**
         * Setter for the RowEntryHeight attribute.
         * @category Attribute setter and getter
         * @param p The new RowEntryHeight or null.
         * @returns The ContextMenu.
         */
        setRowEntryHeight(p: number | null | undefined): this;
        /**
         * Processor for the RowEntryHeight attribute.
         * @category Attribute setter and getter
         */
        protected __processRowEntryHeight(): void;
        /**
         * Getter for the RowEntryHeight attribute.
         * @category Attribute setter and getter
         * @returns The RowEntryHeight attribute.
         */
        getRowEntryHeight(): number | null | undefined;
        /**
         * Setter for the AutoClose attribute.
         * @category Attribute setter and getter
         * @param p The new AutoClose or null.
         * @returns The ContextMenu.
         */
        setAutoClose(p: boolean | null | undefined): this;
        /**
         * Getter for the AutoClose attribute.
         * @category Attribute setter and getter
         * @returns The AutoClose attribute.
         */
        getAutoClose(): boolean;
    }
    namespace ContextMenu {
        interface IAttributes extends Base.IAttributes {
            /** Defines if the menu closes automatically or not. */
            autoClose?: boolean | null;
            /** Defines the height of a row entry. */
            rowEntryHeight?: number | null;
        }
        enum ContextMenuEvents {
            onMenuOpen = "onMenuOpen",
            onMenuClose = "onMenuClose",
            onMenuToggle = "onMenuToggle"
        }
        interface IRowEntryOptions {
            /** Optional name for the row entry to get the row entry from the context menu. */
            name?: string;
            text?: string | null;
            controls?: ControlContainer.IControlOptions | ControlContainer.IControlOptions[];
            controlsHorizontalAlignment?: HorizontalAlignment;
            /**
             * Function that will be called when the entry was pressed.
             * @param params The callbackParams if set.
             */
            onPressed?: (params: any) => any;
            callbackParams?: any;
            /**
             * Function that will be called when the entry has been created.
             * @param entry The created row entry.
             */
            cbOnCreated?: (entry: RowEntry) => any;
        }
        interface IContextMenuAndButton {
            button: ToggleButton;
            menu: ContextMenu;
        }
        interface IBaseOptions {
            /** Row entry options for the context menu. */
            rowEntryOptions?: ContextMenu.IRowEntryOptions | ContextMenu.IRowEntryOptions[];
        }
        interface IOptions extends IBaseOptions {
            /** The id which will be extended by 'context-menu' and 'context-menu-button' */
            id: string;
            /** The parent of the context menu. */
            parent?: Base.IBase | null;
            /** The JQuery element where the context menu should be appended when opened. */
            root?: JQuery;
        }
        interface IOpenContextMenuOptions extends IBaseOptions {
            /** The position where the context menu will be opened. */
            position: {
                left: number;
                top: number;
            };
        }
        /**
         * Creates a context menu and a button to open and close the menu.
         * @param options Options for the context menu.
         * @returns The create menu button and the context menu.
         */
        function createContextMenuAndButton(options: IOptions): IContextMenuAndButton;
        /**
         * Opens a new context menu.
         * @param options Options for the context menu.
         * @returns The created and opened context menu.
         */
        function openContextMenu(options: IOpenContextMenuOptions): ContextMenu;
        class RowEntry extends TextControl {
            constructor(id: string, parent: IBaseNode | null);
            protected __element: JQuery<HTMLLIElement>;
            /**
             * Container which can create different controls.
             * @category Public
             */
            controlContainer: ControlContainer;
            /**
             * Handler when a control was added or removed from the control container.
             * @category Event handler
             */
            private __controlCreatorCollectionChangedHandler;
            protected __attach(): void;
            protected __detach(): void;
            destroy(): void;
            onTextChanged(newText: string | null | undefined): void;
        }
    }
}
//# sourceMappingURL=ContextMenu.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Class to display date and time.	*/
    class DateTimeField extends TextControl implements System.ValueHandler.IValueHandler<Date>, Components.ResizeHandler.IOnResized {
        constructor(id: string, parent?: IBaseNode | null);
        /**
         * Button to open the DateTimePicker in a dialog window.
         * @category Elements
         */
        private __btn;
        valueHandler: System.ValueHandler<Date>;
        resizeHandler: Components.ResizeHandler;
        protected __attrHandler: AttributeHandler<DateTimeField.IAttributes>;
        /**
         * Destroys the watching of the locale.
         * @category Internals
         */
        private __destroyLocaleWatch;
        private __destroyOnButtonPressed;
        /**
         * Handler when the locale of the client has changed.
         */
        private __localeChangedHandler;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        onResized(): void;
        onValueChanged(newDate: Date): void;
        /**
         * Callback when the button was pressed (only when editable).
         * @category Event callbacks
         */
        private __onButtonPressed;
        openPicker(): void;
        setAttributes(attr: DateTimeField.IAttributes): this;
        getAttributes(): DateTimeField.IAttributes;
        /**
         * Setter for the Date attribute.
         * @category Attribute setter and getter
         * @param p The new Date or null.
         * @returns The DateTimeField.
         */
        setDate(p: Date | null | undefined): this;
        /**
         * Processor for the Date attribute
         * @category Attribute setter and getter
         */
        protected __processDate(): void;
        /**
         * Getter for the Date attribute.
         * @category Attribute setter and getter
         * @returns The Date attribute.
         */
        getDate(): Date | null | undefined;
        /**
         * Setter for the Mode attribute.
         * @category Attribute setter and getter
         * @param p The new Mode or null.
         * @returns The DateTimeField.
         */
        setMode(p: DateTimeField.Mode | null | undefined): this;
        /**
         * Processor for the Mode attribute
         * @category Attribute setter and getter
         */
        protected __processMode(): void;
        /**
         * Getter for the Mode attribute.
         * @category Attribute setter and getter
         * @returns The Mode attribute.
         */
        getMode(): DateTimeField.Mode | null | undefined;
        protected __processReadOnly(): void;
    }
    namespace DateTimeField {
        interface IAttributes extends TextControl.IAttributes, System.ValueHandler.IValueHandlerAttributes {
            /** Date to be displayed. */
            date?: Date | null;
            /** Defines what the date time field should display. */
            mode?: Mode | null;
        }
        enum DateTimeFieldEvents {
            /** Is raised when the date or time has changed. */
            onDateChanged = "onDateChanged",
            /** Is fired when the user interaction has ended. */
            onUserInteractionFinished = "onUserInteractionFinished"
        }
        enum Mode {
            date = 0,
            time = 1,
            dateTime = 2
        }
    }
}
//# sourceMappingURL=DateTimeField.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Class to pick a date and time. */
    class DateTimePicker extends Base {
        constructor(id: string, parent?: IBaseNode | null);
        protected __attrHandler: AttributeHandler<DateTimePicker.IAttributes>;
        /**
         * Picker to pick the time.
         * @category Elements
         */
        private __timePicker;
        /**
         * Picker to pick the date.
         * @category Elements
         */
        private __datePicker;
        /**
         * Displays the current selected date and time.
         * @category Elements
         */
        private __resultField;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Callback when the time has changed.
         * @category Event callbacks.
         */
        private __onTimeChanged;
        /**
         * Callback when the date has changed.
         * @category Event callbacks.
         */
        private __onDateChanged;
        /**
         * Opens a dialog window with a datetime picker.
         * @param date
         * @param headline
         * @param cbConfirmed
         * @param cbClosed
         */
        static openDateTimePickerDialog(date: Date, headline?: string, cbConfirmed?: (newTime: Date | null | undefined) => any, cbClosed?: (newTime: Date | null) => any): void;
        /**
         * Opens a dialog window with a datetime picker.
         * @param date
         * @param headline
         * @param cbConfirmed
         * @param cbClosed
         */
        static openDatePickerDialog(date: Date, headline?: string, cbConfirmed?: (newDate: Date | null) => any, cbClosed?: (newDate: Date | null) => any): void;
        setAttributes(attr: DateTimePicker.IAttributes): this;
        getAttributes(): DateTimePicker.IAttributes;
        /**
         * Setter for the Date.
         * @category Attribute setter and getter
         * @param p The new Value or null.
         * @returns The DateTimePicker.
         */
        setDate(p: Date | null | undefined): this;
        /**
         * Processor for the Date attribute.
         * @category Attribute setter and getter
         */
        protected __processDate(): void;
        /**
         * Getter for the Date attribute.
         * @category Attribute setter and getter
         * @returns The Date attribute.
         */
        getDate(): Date | null | undefined;
    }
    namespace DateTimePicker {
        interface IAttributes extends Base.IAttributes {
            /** The default date of the date picker. */
            date?: Date | null;
        }
        enum DateTimePickerEvents {
            onDateTimeChanged = "onDateTimeChanged"
        }
        /**
         * Defines the default size of the DateTimePicker dialog.
         * Default is { width: 650, height: 450 }.
         */
        let DefaultDateTimePickerDialogSize: {
            width: number;
            height: number;
        };
        /**
         * Defines the default size of the DatePicker dialog.
         * Default is { width: 300, height: 300 }.
         */
        let DefaultDatePickerDialogSize: {
            width: number;
            height: number;
        };
    }
    /** Class which displays a control to select a time. */
    class TimePicker extends Base {
        constructor(id: string, parent?: IBaseNode | null);
        protected __attrHandler: AttributeHandler<TimePicker.IAttributes>;
        /**
         * Selector for the hour.
         * @category Elements
         */
        private __hourSelector;
        /**
         * Selector for the minute.
         * @category Elements
         */
        private __minuteSelector;
        /**
         * Selector for the hour.
         * @category Elements
         */
        private __secondSelector;
        /**
         * Handler when a selector has changed its value.
         * @category Event handler
         */
        private __selectorChangedHandler;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Callback when the value of a selector has changed.
         * @category Event callbacks.
         */
        private __onSelectorChanged;
        /**
         * Opens a dialog window with a time picker.
         * @param time
         * @param headline
         * @param cbConfirmed
         * @param cbClosed
         */
        static openTimePickerDialog(time: Date, headline?: string, cbConfirmed?: (newTime: Date | null | undefined) => any, cbClosed?: (oldTime: Date | null) => any): void;
        setAttributes(attr: TimePicker.IAttributes): this;
        getAttributes(): TimePicker.IAttributes;
        /**
         * Setter for the Time.
         * @category Attribute setter and getter
         * @param p The new Time or null.
         * @returns The TimePicker.
         */
        setTime(p: Date | null | undefined): this;
        /**
         * Processor for the Time attribute.
         * @category Attribute setter and getter
         */
        protected __processTime(): void;
        /**
         * Getter for the Time attribute.
         * @category Attribute setter and getter
         * @returns The Time attribute.
         */
        getTime(): Date | null | undefined;
    }
    namespace TimePicker {
        interface IAttributes extends Base.IAttributes {
            /** The default time of the time picker. */
            time?: Date | null;
        }
        enum TimePickerEvents {
            onTimeChanged = "onTimeChanged"
        }
        /**
         * Defines the default size of the TimePicker dialog.
         * Default is { width: 350, height: 200 }.
         */
        let DefaultTimePickerDialogSize: {
            width: number;
            height: number;
        };
    }
    /** Class to select an integer by clicking up and down or entering a number. */
    class NumberSelectField extends Base {
        constructor(id: string, parent?: IBaseNode | null);
        protected __attrHandler: AttributeHandler<NumberSelectField.IAttributes>;
        /**
         * Input box for the number.
         * @category Elements
         */
        private __input;
        /**
         * Button to increase the number.
         * @category Elements
         */
        private __upButton;
        /**
         * Button to decrease the number.
         * @category Elements
         */
        private __downButton;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Callback when the up button was pressed.
         * @category Event callbacks.
         */
        private __onUpButtonPressed;
        /**
         * Callback when the down button was pressed.
         * @category Event callbacks.
         */
        private __onDownButtonPressed;
        setAttributes(attr: NumberSelectField.IAttributes): this;
        getAttributes(): NumberSelectField.IAttributes;
        /**
         * Setter for the Value.
         * @category Attribute setter and getter
         * @param p The new Value or null.
         * @returns The NumberSelectField.
         */
        setValue(p: number | null | undefined): this;
        /**
         * Processor for the Value attribute.
         * @category Attribute setter and getter
         */
        protected __processValue(): void;
        /**
         * Getter for the Value attribute.
         * @category Attribute setter and getter
         * @returns The Value attribute.
         */
        getValue(): number | null | undefined;
        /**
         * Setter for the MinValue.
         * @category Attribute setter and getter
         * @param p The new MinValue or null.
         * @returns The NumberSelectField.
         */
        setMinValue(p: number | null | undefined): this;
        /**
         * Processor for the MinValue attribute.
         * @category Attribute setter and getter
         */
        protected __processMinValue(): void;
        /**
         * Getter for the MinValue attribute.
         * @category Attribute setter and getter
         * @returns The MinValue attribute.
         */
        getMinValue(): number | null | undefined;
        /**
         * Setter for the MaxValue.
         * @category Attribute setter and getter
         * @param p The new MaxValue or null.
         * @returns The NumberSelectField.
         */
        setMaxValue(p: number | null | undefined): this;
        /**
         * Processor for the MaxValue attribute.
         * @category Attribute setter and getter
         */
        protected __processMaxValue(): void;
        /**
         * Getter for the MaxValue attribute.
         * @category Attribute setter and getter
         * @returns The MaxValue attribute.
         */
        getMaxValue(): number | null | undefined;
        /**
         * Setter for the Orientation.
         * @category Attribute setter and getter
         * @param p The new Orientation or null.
         * @returns The NumberSelectField.
         */
        setOrientation(p: Orientation | null | undefined): this;
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
        getOrientation(): number | null | undefined;
        protected __processReadOnly(): void;
    }
    namespace NumberSelectField {
        interface IAttributes extends Base.IAttributes {
            /** Current selected value. */
            value?: number | null;
            /** Minimum value to select. */
            minValue?: number | null;
            /** Maximum value to select. */
            maxValue?: number | null;
            /** Orientation of the number select field. */
            orientation?: Orientation | null;
        }
        enum NumberSelectFieldEvents {
            onNumberChanged = "onNumberChanged"
        }
    }
}
//# sourceMappingURL=DateTimePicker.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Class which realizes a dialog window functionallity. */
    class DialogWindow extends ContentWindow {
        constructor(id: string, parent?: IBaseNode | null);
        protected __attrHandler: AttributeHandler<DialogWindow.IAttributes>;
        /**
         * Open state of the dialog.
         * @category Internal
         */
        private __isOpen;
        /**
         * Minimized state of the dialog.
         * @category Internal
         */
        private __isMinimized;
        /**
         * The layout attributes before the dialog was maximized
         * @category Internal
         */
        private __layoutBeforeMaximized;
        /**
         * The layout attributes before the dialog was minimized
         * @category Internal
         */
        private __layoutBeforeMinimized;
        /**
         * Flag is true when the dialog was opened modal.
         * @category Internal
         */
        private __openedModal;
        /**
         * If true the closing of the dialog will be stopped.
         * @category Internal
         */
        private __stopClosing;
        /**
         * Container for the default buttons (confirm, cancel or both).
         * @category Elements
         */
        private __defaultButtonsContainer;
        /**
         * Event handler for the pointerdown event on dialog window.
         * @category Event handler
         */
        private __selectHandler;
        /**
         * Event handler for the pointerdown event when the dialog is minimized.
         * @category Event handler
         */
        private __minimizedDownHandler;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        onResized(): void;
        /**
         * Positions the dialog in the middle of the screen when attached and dimensions are known.
         * @category Internal
         */
        private __adjustPositionToCenter;
        /**
         * Updates the order of the different header elements.
         * @category Internal
         */
        protected __updateHeaderElementsOrder(): void;
        /**
         * Makes the dialog dragable.
         * @category Internal
         */
        private __makeDragable;
        /**
         * Makes the dialog non dragable.
         * @category Internal
         */
        private __resetDragable;
        /**
         * Opens the dialog and sets the default position.
         * @category Public
         * @param modal Select if the dialog should open modal or not.
         * @returns The DialogWindow.
         */
        open(modal?: boolean | null): this;
        /**
         * Closes the dialog.
         * @category Public
         * @returns The DialogWindow.
         */
        close(): this;
        /**
         * If a closing process is active (after onClosing or onConfirmed) calling this function will stop the closing.
         * @category Public
         */
        stopClosing(): void;
        /**
         * Closes the dialog by confirming it.
         * @category Public
         * @returns The DialogWindow.
         */
        confirm(): this;
        /**
         * Focuses the dialog.
         * @category Public
         * @returns The DialogWindow
         */
        focus(): this;
        /**
         * Unfocuses the dialog and send it to background.
         * @category Public
         * @param sendToBack Send to background if true.
         */
        unfocus(sendToBack: boolean): void;
        /**
         * Getter for the current open state.
         * @category Public
         * @returns True if the dialog is open and false if not.
         */
        getIsOpen(): boolean;
        /**
         * Getter for the header element of the dialog.
         * @category Public
         * @returns The Html header element.
         */
        getHeader(): JQuery;
        /**
         * Getter for the content container.
         * @category Public
         * @returns The Html content container element.
         */
        getContentContainer(): JQuery;
        /**
         * Toggles between maximized and not maximized. If maximized the dialog window will be stretched over the complete window.
         * @category Public
         */
        toggleMaximize(): void;
        /**
         * Toggles between minimized and not minimized. If minimized the dialog window on the very bottom of the window.
         * @category Public
         */
        toggleMinimize(): void;
        getIsMinimized(): boolean | undefined;
        setAttributes(attr: DialogWindow.IAttributes): this;
        getAttributes(): DialogWindow.IAttributes;
        /**
         * Setter for the buttons attribute.
         * @category Attribute setter and getter
         * @param p The new buttons or null.
         * @param p2 Optional buttons for the DialogWindow
         * @returns The DialogWindow.
         */
        setButtons(p: DialogWindow.Buttons | null | undefined): this;
        /**
         * Processor for the buttons attribute.
         * @category Attribute setter and getter
        */
        protected __processButtons(): void;
        /**
         * Getter for the buttons attribute.
         * @category Attribute setter and getter
         * @returns The buttons attribute.
         */
        getButtons(): DialogWindow.Buttons | null | undefined;
        /**
         * Creates a dialog window. The dialog is not opened automatically. This must be done later by calling dialog.open().
         * @category Public
         * @param options Set options for the dialog.
        */
        static createDialogWindow(options: DialogWindow.IOptions | null): DialogWindow | null;
        /**
         * Opens a dialog window.
         * @category Public
         * @param options Set options for the dialog.
        */
        static openDialogWindow(options: DialogWindow.IOptions | null): void;
        static alert(msg: string, options?: DialogWindow.IAlertOptions): Promise<void>;
        static confirm(msg: string, options?: DialogWindow.IConfirmOptions): Promise<boolean>;
        static prompt(msg: string, defaultVal?: string, options?: DialogWindow.IPromptOptions): Promise<string | null>;
        static promptNumericWithLimits(msg: string, defaultVal: number, minVal?: number | null, maxVal?: number | null, options?: DialogWindow.IPromptOptions): Promise<number | null>;
    }
    namespace DialogWindow {
        interface IPromptOptions {
            /** Defines the headline of the prompt. */
            headline?: string;
            /** The attributes for the message. */
            attr?: TextHandler.IAttributes;
            /** Callbacks for the different dialog events. */
            callbacks?: DialogWindow.ICallbacks & {
                /** Callback when the textblock in the prompt was created. */
                cbOnTextBlockCreated?: (textblock: Textblock) => any;
            };
        }
        interface IConfirmOptions extends IPromptOptions {
        }
        interface IAlertOptions extends IPromptOptions {
            /** If true, the log of the alert in the console will be skipped. */
            skipLog?: boolean;
            /** The logger which will be used to log the alert if skipLog is false. */
            logger?: Logger;
        }
        interface IAttributes extends ContentWindow.IAttributes {
            /** Buttons to close or confirm the dialog. */
            buttons?: Buttons | null;
            /** Defines if the dialog will be opened modal or not. Default is false.*/
            modal?: boolean | null;
        }
        enum Buttons {
            Cancel = 0,
            CancelSize = 1,
            OkCancel = 2,
            OkCancelSize = 3
        }
        enum DialogWindowEvents {
            onOpened = "onDialogWindowOpened",
            onConfirmed = "onDialogWindowConfirmed",
            onCanceled = "onDialogWindowCanceled",
            onClosing = "onDialogWindowClosing",
            onClosed = "onDialogWindowClosed",
            onFocused = "onDialogWindowFocused",
            /** Will be raised either when the dialog was minimized or if it had been resized from minimized. */
            onMinimizedChanged = "onDialogWindowMinimizedChanged"
        }
        interface ICallbacks {
            /** Callback which is raised when the dialog was opened. */
            cbOpened?: () => any;
            /** Callback which is raised when the dialog is closing. */
            cbClosing?: () => any;
            /** Callback which is raised when the dialog was confirmed. */
            cbConfirmed?: () => any;
            /** Callback which is raised when the dialog was canceled. */
            cbCanceled?: () => any;
            /** Callback which is raised when the dialog was closed. */
            cbClosed?: () => any;
            /**
             * Callback which is raised when the dialog was created.
             * @param dialog The created dialog.
             */
            cbOnCreated?: (dialog: DialogWindow) => any;
        }
        interface IOptions {
            /** The appearance of the dialog window. */
            appearance?: DialogWindow.IAttributes;
            /** Callbacks for different events of the dialog. */
            callbacks?: ICallbacks;
            behaviour?: {
                /** Defines if the created dialog gets destroyed after closing the dialog. Default is false. */
                destroyOnClose: boolean;
            };
        }
        /** Limitation of the movement outside of the screen. */
        let MoveLimitation: number;
    }
}
//# sourceMappingURL=DialogWindow.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /**
     * The EventIcon is a class to display a specified button with an event icon, state and count
     * @fires .onAcknowledge
    * */
    class EventIcon extends Icon {
        constructor(id: string, parent?: IBaseNode | null);
        protected __attrHandler: AttributeHandler<EventIcon.IAttributes>;
        private __destroyOnPressed;
        private __iconAttr;
        /**
         * The button which fills the entire control.
         * @category Elements
         */
        private __button;
        /**
         * Event handler for the pressed event.
         * @category Event handler
         */
        private __pressedHandler;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Callback when the element was pressed.
         * @category Event callbacks
         */
        private __onPressedHandler;
        /**
        * Set the displayed event image and count.
        * @category Internal
        */
        private __setDisplayedEvent;
        /**
         * Get the image and the corresponding color for an event condition.
         * @category Public
         * @param con The event condition whose icon should be found.
         * @param state Optional state of the event.
         * @returns The icon path and color.
         */
        static getEventIconAndColor(con: BA.EventCondition | null, state?: BA.EventIconState | null): Icons.IIconAttributes | null;
        setAttributes(attr: EventIcon.IAttributes): this;
        getAttributes(): EventIcon.IAttributes;
        /**
         * Setter for the EventCondition attribute.
         * @category Attribute setter and getter
         * @param p The new EventCondition or null.
         * @returns The EventIcon.
         */
        setEventCondition(p: BA.EventCondition | null | undefined): this;
        /**
         * Processor for the EventCondition attribute.
         * @category Attribute setter and getter
         */
        protected __processEventCondition(): void;
        /**
         * Getter for the EventCondition attribute.
         * @category Attribute setter and getter
         * @returns The EventCondition attribute.
         */
        getEventCondition(): BA.EventCondition | null | undefined;
        /**
         * Setter for the EventState attribute.
         * @category Attribute setter and getter
         * @param p The new EventState or null.
         * @returns The EventIcon.
         */
        setEventState(p: BA.EventIconState | null | undefined): this;
        /**
         * Getter for the EventState attribute.
         * @category Attribute setter and getter
         * @returns The EventState attribute.
         */
        getEventState(): BA.EventIconState | null | undefined;
        /**
         * Setter for the EventCount attribute.
         * @category Attribute setter and getter
         * @param p The new EventCount or null.
         * @returns The EventIcon.
         */
        setEventCount(p: number | null | undefined): this;
        /**
         * Processor for the EventCount attribute.
         * @category Attribute setter and getter
         */
        protected __processEventCount(): void;
        /**
         * Getter for the EventCount attribute.
         * @category Attribute setter and getter
         * @returns The EventCount attribute.
         */
        getEventCount(): number | null | undefined;
        /**
         * Setter for the AcknowledgeSymbol attribute.
         * @category Attribute setter and getter
         * @param p The new AcknowledgeSymbol or null.
         * @returns The EventIcon.
         */
        setAcknowledgeSymbol(p: string | null | undefined): this;
        /**
         * Getter for the AcknowledgeSymbol attribute.
         * @category Attribute setter and getter
         * @returns The AcknowledgeSymbol attribute.
         */
        getAcknowledgeMapping(): string | null | undefined;
        /**
         * Setter for the Icon of the button.
         * @category Attribute setter and getter
         * @param p The new icon path or null.
         * @returns The EventIcon.
         */
        setIcon(p: string | null | undefined): this;
        /**
         * Getter for the Icon of the button.
         * @category Attribute setter and getter
         * @returns The icon path of the button.
         */
        getIcon(): string | null | undefined;
        protected __processReadOnly(): void;
        protected __updateLegendIcon(): void;
    }
    namespace EventIcon {
        interface IAttributes extends Base.IAttributes {
            /** Event condition of the event icon. */
            eventCondition?: BA.EventCondition | null;
            /** Event state of the event icon. */
            eventState?: BA.EventIconState | null;
            /** Number of events. */
            eventCount?: number | null;
            /** Mapping of the PLC variable to acknowledge the event. */
            acknowledgeMapping?: string | null;
            /** Set a specific icon for the event icon if you do not want to use defaults. */
            icon?: string | null;
        }
        enum EventIconEvents {
            onAcknowledged = "onAcknowledged"
        }
        /** The of the event icon if {@link BA.EventIconState} equals Gone or GoneAcked. */
        let GoneAckedColor: Color.RGBAColor;
        let EventConditionColor: RGBAColor[];
        let AckedIconColor: RGBAColor;
        let ManualIconColor: RGBAColor;
        let AckedIconBackgroundColor: RGBAColor;
    }
}
//# sourceMappingURL=EventIcon.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /**
     * A simple component to display a icon.
    */
    class Icon extends Base implements Icons.IIconHandler, Logger.ILogger {
        constructor(id: string, parent?: IBaseNode | null);
        iconHandler: Icons.IconHandler;
        protected __legendIconHandler: Components.LegendIconHandler;
        protected __attrHandler: AttributeHandler<Icon.IAttributes>;
        protected __iconShowInLegend: boolean | null | undefined;
        protected __iconDescription: string | null | undefined;
        protected __iconCategory: string | null | undefined;
        /**
        * Destroy function for onIconChanged event.
        * @category Internal
        */
        private __destroyOnIconChanged;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        private __processLegendVisibility;
        /**
         * Update the legend icon.
         * @category Internal
         */
        protected __updateLegendIcon(): void;
        setAttributes(attr: Icon.IAttributes): this;
        getAttributes(): Icon.IAttributes;
        /**
         * Setter for the ShowInLegend attribute.
         * @category Attribute setter and getter
         * @param p The new ShowInLegend or null.
         * @returns The Button.
         */
        setShowInLegend(visibility: boolean): this;
        /**
         * Processor for the ShowInLegend attribute.
         * @category Attribute setter and getter
         */
        protected __processShowInLegend(): void;
        /**
         * Getter for the ShowInLegend attribute.
         * @category Attribute setter and getter
         * @returns The ShowInLegend attribute.
         */
        getShowInLegend(): boolean | null | undefined;
        /**
         * Setter for the IconCategoryLegend attribute.
         * @category Attribute setter and getter
         * @param p The new IconCategoryLegend or null.
         * @returns The Button.
         */
        setIconCategoryLegend(category: string): this;
        /**
         * Processor for the IconCategoryLegend attribute.
         * @category Attribute setter and getter
         */
        protected __processIconCategoryLegend(): void;
        /**
         * Getter for the IconCategoryLegend attribute.
         * @category Attribute setter and getter
         * @returns The IconCategoryLegend attribute.
         */
        getIconCategoryLegend(): string | null | undefined;
        /**
         * Setter for the IconDescriptionLegend attribute.
         * @category Attribute setter and getter
         * @param p The new IconDescriptionLegend or null.
         * @returns The Button.
         */
        setIconDescriptionLegend(description: string): this;
        /**
         * Processor for the IconDescriptionLegend attribute.
         * @category Attribute setter and getter
         */
        protected __processIconDescriptionLegend(): void;
        /**
         * Getter for the IconDescriptionLegend attribute.
         * @category Attribute setter and getter
         * @returns The IconDescriptionLegend attribute.
         */
        getIconDescriptionLegend(): string | null | undefined;
    }
    namespace Icon {
        interface IAttributes extends Base.IAttributes, Icons.IconHandler.IAttributes {
        }
    }
}
//# sourceMappingURL=Icon.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /**
     * The InputBox can be used to display and edit number and string values.
     * @typeparam T Describes the generic type of the value property. Can only be string or number.
    */
    class InputBox<T extends string | number> extends TextControl implements System.ValueHandler.IValueHandler<T>, BaObjectHandler.IUsesBaObject {
        constructor(id: string, parent?: IBaseNode | null);
        baObjectHandler: BaObjectHandler;
        valueHandler: System.ValueHandler<T>;
        /**
         * The HTML input element | if data type is number and a unit is given the unit will be added to the text of the input element.
         * @category Elements
         */
        private __input;
        protected __attrHandler: AttributeHandler<InputBox.IAttributes<T>>;
        /**
         * The old unit. Is stored to remove it from the current string if a new unit was set.
         * @category Internal
         */
        private __oldUnit;
        /**
         * The currently used data type. It will be set automatically when dataType is set to 'auto'.
         * @category Internal
         */
        private __usedDataType;
        /**
         * The background color of the InputBox before highlight color was set.
         * @category Internal
         */
        private __oldBackgroundColor;
        /**
         * Flag if the warn color is active after illegal input.
         * @category Internal
         */
        private __warnColorActive;
        /**
         * IReadyFunction to reset the busy invoking after changing the value.
         * @category Internal
         */
        private __valueFeedbackReady;
        /**
         * The BaVariable for the high limit of the BaObject.
         * @category Internal
         */
        private __highLimit;
        /**
         * The BaVariable for the low limit of the BaObject.
         * @category Internal
         */
        private __lowLimit;
        /**
         * Event handler for the keydown event.
         * @category Event handler
         */
        private __keydownHandler;
        /**
         * Event handler when a text is pasted in the InputBox.
         * @category Event handler
         */
        private __pasteHandler;
        /**
         * Event handler for the focusin event.
         * @category Event handler
         */
        private __focusinHandler;
        /**
         * Event handler for the focusout event.
         * @category Event handler
         */
        private __focusoutHandler;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Callback function for the keydown event.
         * @category Event callbacks
         * @param ev JQuery event object.
         */
        private __onKeyDown;
        /**
         * The callback function for the paste event.
         * @category Event callbacks
         * @param ev JQuery event object.
         */
        private __onTextPaste;
        /**
         * Callback function for the focusin event.
         * @category Event callbacks
         */
        private __onFocusIn;
        /**
         * Callback function for the focusout event.
         * @category Event callbacks
         * @param ev JQuery event object.
         */
        private __onFocusOut;
        onValueChanged(newVal: T | null | undefined): void;
        /**
         * End the user interaction.
         * @category Internal
         */
        private __endUserInteraction;
        /**
         * Validated the input corresponding to the entered key code and the current used data type.
         * @category Internal
         * @param e Event object of the keydown event.
         * @returns True when the input is valid and false if not.
         */
        private __validateInput;
        /**
         * Updates the html text elements with the correct text. For DataType number the unit will be attached here.
         * @category Internal
         * @param newVal The new value which will be displayed.
         */
        private __updateTextElements;
        /**
         * Check if the new value is within the limits.
         * @category Internal
         * @param p The number that should be checked.
         * @returns True if the value is within the range of MinValue and MaxValue and false if not.
         */
        private __checkMinMax;
        /**
         * Set the background color to red if the input was illegal.
         * @category Internal
         * @param warn Activate or deactivate warn color.
         */
        private __setWarnColor;
        /**
         * Detects the data type from a data input.
         * @category Internal
         * @param data Data from which the data type should be detected.
         * @returns The detected data type.
         */
        private __detectDataType;
        setAttributes(attr: InputBox.IAttributes<T>): this;
        getAttributes(): InputBox.IAttributes<T>;
        /**
         * Setter for the UsedDataType attribute.
         * @category Attribute setter and getter
         * @param p The new UsedDataType.
         */
        private __setUsedDataType;
        /**
         * Processor for the UsedDataType attribute.
         * @category Attribute setter and getter
         */
        protected __processUsedDataType(): void;
        /**
         * Getter for UsedDataType attribute.
         * @category Attribute setter and getter
         * @returns The UsedDataType.
         */
        getUsedDataType(): InputBox.DataType | null;
        /**
         * Setter for the Value attribute.
         * @category Attribute setter and getter
         * @param p The new Value.
         */
        setValue(p: T | null | undefined): this;
        private __setValueInternal;
        /**
         * Processor for the Value attribute.
         * @category Attribute setter and getter
         */
        protected __processValue(): void;
        /**
         * Getter for the Value attribute.
         * @category Attribute setter and getter
         * @returns The Value attribute.
         */
        getValue(): T | null | undefined;
        /**
         * Setter for the ValueFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new ValueFeedback or null.
         * @returns The InputBox.
         */
        setValueFeedback(p: T | null | undefined): this;
        /**
         * Processor for the ValueFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processValueFeedback(): void;
        /**
         * Getter for the ValueFeedback attribute.
         * @category Attribute setter and getter
         * @returns The ValueFeedback attribute.
         */
        getValueFeedback(): T | null | undefined;
        /**
         * Setter for the DataType attribute.
         * @category Attribute setter and getter
         * @param p The new DataType or null.
         * @returns The InputBox.
         */
        setDataType(p: InputBox.DataType | null | undefined): this;
        /**
         * Processor for the DataType attribute.
         * @category Attribute setter and getter
         */
        protected __processDataType(): void;
        /**
         * Getter for the DataType attribute.
         * @category Attribute setter and getter
         * @returns The DataType attribute.
         */
        getDataType(): InputBox.DataType | null | undefined;
        /**
         * Setter for the MinValue attribute.
         * @category Attribute setter and getter
         * @param p The new MinValue or null.
         * @returns The Inputbox.
         */
        setMinValue(p: number | null | undefined): this;
        /**
         * Processor for the MinValue attribute.
         * @category Attribute setter and getter
         */
        protected __processMinValue(): void;
        /**
         * Getter for the MinValue attribute.
         * @category Attribute setter and getter
         * @returns The MinValue attribute.
         */
        getMinValue(): number | null | undefined;
        /**
         * Setter for the MaxValue attribute.
         * @category Attribute setter and getter
         * @param p The new MaxValue or null.
         * @returns The InputBox.
         */
        setMaxValue(p: number | null | undefined): this;
        /**
         * Processor for the MaxValue attribute.
         * @category Attribute setter and getter
         */
        protected __processMaxValue(): void;
        /**
         * Getter for the MaxValue attribute.
         * @category Attribute setter and getter
         * @returns The MaxValue attribute.
         */
        getMaxValue(): number | null | undefined;
        /**
         * Setter for the Unit attribute.
         * @category Attribute setter and getter
         * @param p The new Unit or null.
         * @returns The InputBox.
         */
        setUnit(p: string | BA.Unit | null | undefined): this;
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
        /**
         * Setter for the Digits attribute.
         * @category Attribute setter and getter
         * @param p The new Digits or null.
         * @returns The InputBox.
         */
        setDigits(p: number | null | undefined): this;
        /**
         * Getter for the Digits attribute.
         * @category Attribute setter and getter
         * @returns The Digits attribute.
         */
        getDigits(): number | null | undefined;
        protected __processReadOnly(): void;
        processBaObject(): void;
    }
    namespace InputBox {
        interface IAttributesExValue extends System.ValueHandler.IValueHandlerAttributes {
            /** The data type which was set. */
            dataType?: InputBox.DataType | null;
            /** The number of digits that should be used if __dataType is number. */
            digits?: number | null;
            /** The minimum value if dataType is number. */
            minValue?: number | null;
            /**The maximum value if dataType is number. */
            maxValue?: number | null;
            /** The unit which will be displayed if __dataType is number. */
            unit?: string | null;
        }
        interface IAttributes<T extends string | number> extends IAttributesExValue, TextControl.IAttributes {
            /** The current text. The text can be changed in the HMI by a user.
             * The text represents a number or a string depending on the selected DataType.
             * If DataType if 'number' Text will not contain the unit.
             */
            value?: T | null;
            /** The feedback for the text. The TextFeedback is the text which is displayed in the HMI.
             * When the Text has changed the control will switch into busy mode.
             * When the TextFeedback has changed aswell the control will switch into ready mode and display the TextFeedback text.
             */
            valueFeedback?: T | null;
            /** The BaObject for the class. */
            baObject?: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | string | null | undefined;
        }
        /**
         * Data type for a InputBox.
         * If 'auto' is selected the DataType will be detected automatically based on the default text.
         */
        type DataType = DataType.unknown | DataType.string | DataType.number | DataType.integer;
        enum InputBoxEvents {
            /** Is fired when the InputBox is focused. */
            onFocusIn = "onFocusIn",
            /** Is fired when the InputBox looses the focus. */
            onFocusOut = "onFocusOut",
            /** Is fired when the user interaction has finished. */
            onUserInteractionFinished = "onUserInteractionFinished",
            /** Is fired when the Value has changed. */
            onValueChanged = "onValueChanged",
            /** Is fired when the ValueFeedback has changed. */
            onValueFeedbackChanged = "onValueFeedbackChanged"
        }
    }
}
//# sourceMappingURL=InputBox.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    class Legend extends Base {
        constructor(id: string, parent: IBaseNode | null);
        protected __attrHandler: AttributeHandler<Legend.IAttributes>;
        /**
        * Destroy function for onIconsChanged event.
        * @category Internal
        */
        private __destroyOnIconsChanged;
        /**
        * Destroy function for ObjectResolver watch.
        * @category Internal
        */
        private __destroyObjectResolver;
        /**
        * Destroy function for IconDataSymbolName watch.
        * @category Internal
        */
        private __destroyIconsCustomGlobal;
        /**
        * Instance of the ContentWindow.
        * @category Internal
        */
        private __contentWindow;
        /**
        * Instance of the TabWindow.
        * @category Internal
        */
        private __tabWindow;
        /**
        * Collection of categories.
        * @category Internal
        */
        private __categories;
        /**
        * Collection of entries.
        * @category Internal
        */
        private __entries;
        /**
        * Counter for entries.
        * @category Internal
        */
        private __entryCounter;
        /**
        * Collection of BA icons.
        * @category Internal
        */
        private __icons;
        /**
        * Collection of custom icons.
        * @category Internal
        */
        private __iconsCustom;
        /**
        * Collection of global custom icons.
        * @category Internal
        */
        private __iconsGlobal;
        protected __attach(): void;
        protected __detach(): void;
        /**
         * Destroys the current instance.
         * @category Public
         */
        destroy(): void;
        /**
         * Construct the legend.
         * @category Internal
         */
        private __constructLegend;
        /**
         * Get categories of given icons.
         * @category Internal
         */
        private __getCategories;
        /**
         * Create an entry from given icon.
         * @category Internal
         */
        private __createEntry;
        /**
        * Resolves existing symbol statements in icon paths.
        * @category Internal
        */
        private __resolveIconPaths;
        /**
         * Update collection of icons based on current icons source.
         * @category Internal
         */
        private __updateIcons;
        /**
         * Update collection of tabs based on current categories.
         * @category Internal
         */
        private __updateTabCollection;
        /**
         * Update content of tabs based on current entries.
         * @category Internal
         */
        private __updateTabContent;
        /**
         * Update of the legend.
         * @category Internal
         */
        private __updateLegend;
        setAttributes(attr: Legend.IAttributes): this;
        getAttributes(): Legend.IAttributes;
        /**
         * Sets the VisibilityHeadline attribute.
         * @category Attribute setter and getter
         * @param p The new VisibilityHeadline or null.
         * @returns The Legend.
         */
        setVisibilityHeadline(p: boolean | null | undefined): this;
        /**
        * Processor for the VisibilityHeadline attribute.
        * @category Internal
        */
        protected __processVisibilityHeadline(): void;
        /**
         * Gets the VisibilityHeadline attribute.
         * @category Attribute setter and getter
         * @returns The VisibilityHeadline attribute.
         */
        getVisibilityHeadline(): boolean | null | undefined;
        /**
         * Sets the TabPosition attribute.
         * @category Attribute setter and getter
         * @param p The new TabPosition or null.
         * @returns The Legend.
         */
        setTabPosition(p: Position | null | undefined): this;
        /**
         * Processor for the TabPosition attribute.
         * @category Internal
         */
        protected __processTabPosition(): void;
        /**
         * Gets the TabPosition attribute.
         * @category Attribute setter and getter
         * @returns The TabPosition attribute.
         */
        getTabPosition(): Position | null | undefined;
        /**
        * Sets the EntryWidth (and EntryWidthUnit) attribute.
        * @category Attribute setter and getter
        * @param p The new EntryWidth (and EntryWidthUnit) or null.
        * @returns The Legend.
        */
        setEntryWidth(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
        * Processor for the EntryWidth and EntryWidthUnit attribute.
        * @category Internal
        */
        protected __processEntryWidth(): void;
        /**
        * Gets the EntryWidth attribute.
        * @category Attribute setter and getter
        * @returns The EntryWidth attribute.
        */
        getEntryWidth(): number | null | undefined;
        /**
        * Gets the EntryWidthUnit attribute.
        * @category Attribute setter and getter
        * @returns The EntryWidthUnit attribute.
        */
        getEntryWidthUnit(): DimensionUnit | null | undefined;
        /**
         * Sets the IconSource attribute.
         * @category Attribute setter and getter
         * @param p The new IconSource or null.
         * @returns The Legend.
         */
        setIconSource(p: Legend.IconSource | null | undefined): this;
        /**
        * Processor for the IconSource attribute.
        * @category Internal
        */
        protected __processIconSource(): void;
        /**
         * Gets the IconSource attribute.
         * @category Attribute setter and getter
         * @returns The IconSource attribute.
         */
        getIconSource(): Legend.IconSource | null | undefined;
        /**
         * Sets the IconsCustom attribute.
         * @category Attribute setter and getter
         * @param p The new IconsCustom or null.
         * @returns The Legend.
         */
        setIconsCustom(p: Icons.IIconAttributes[] | null | undefined): this;
        /**
        * Processor for the IconsCustom attribute.
        * @category Internal
        */
        protected __processIconsCustom(): void;
        /**
         * Gets the IconsCustom attribute.
         * @category Attribute setter and getter
         * @returns The IconsCustom attribute.
         */
        getIconsCustom(): Icons.IIconAttributes[] | null | undefined;
    }
    namespace Legend {
        /** Source of icons to be displayed. */
        enum IconSource {
            /** Show all icons. */
            All = 0,
            /** Show only Building Automation icons. */
            OnlyBa = 1,
            /** Show only configured custom icons of Legend instance. */
            OnlyCustom = 2,
            /** Show only global configured custom icons. */
            OnlyCustomGlobal = 3,
            /** Show Building Automation and Legend instance icons. */
            BaAndCustom = 4,
            /** Show Building Automation and global configured custom icons. */
            BaAndCustomGlobal = 5,
            /** Show Legend instance and global configured custom icons. */
            CustomAndCustomGlobal = 6
        }
        interface IAttributes extends Base.IAttributes {
            /** Visibility of headline. */
            visibilityHeadline?: boolean | null;
            /** Position of categories. */
            tabPosition?: Position | null;
            /** Width of an entry. */
            entryWidth?: number | null;
            /** Unit for the entry width. */
            entryWidthUnit?: DimensionUnit | null;
            /** Source of icons to be displayed. */
            iconSource?: IconSource | null;
            /** Custom icon data. */
            iconsCustom?: Icons.IIconAttributes[] | null;
        }
        /** Name of the TcHmi server symbol which provides the global custom icons. */
        let IconsCustomSymbolName: string;
    }
    class LegendIconHandler {
        constructor(icon?: Icons.IIconAttributes | Icons.IIconAttributes[]);
        /**
         * Destroy function of the watched icons.
         * @category Internal
         */
        private __destroyIconWatch;
        /**
         * Icon or icon collection to be displayed.
         * @category Internal
        */
        private __icon;
        /**
         * The icon or icon collection which will be displayed if {@link show} is called.
         */
        set icon(p: Icons.IIconAttributes | Icons.IIconAttributes[] | null);
        get icon(): Icons.IIconAttributes | Icons.IIconAttributes[] | null;
        /**
         * Show the icon or icon collection in every legend.
         * @category Public
         */
        show(): void;
        /**
         * Hide the icon or icon collection in every legend.
         * @category Public
         */
        hide(): void;
        /**
         * Destroys the current instance.
         * @category Public
         */
        destroy(): void;
    }
}
//# sourceMappingURL=Legend.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /**
     * The ManualOverrideBinary is a class to manual override a binary or numeric value.
     */
    class ManualOverride extends ValueField<boolean | number> implements Components.ResizeHandler.IOnResized, BaObjectHandler.IUsesBaObject {
        constructor(id: string, parent?: IBaseNode | null);
        resizeHandler: Components.ResizeHandler;
        protected __attrHandler: AttributeHandler<ManualOverride.IAttributes>;
        /**
         * Button to enabe/disable the manual mode.
         * @category Elements
         */
        private __manualModeButton;
        /**
         * Stores if the BaObject is editable.
         * @category Internal
         */
        private __baObjectIsEditable;
        /**
         * IReadyFunction to reset the busy invoking after changing manual enable.
         * @category Internal
         */
        private __enableManualReady;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        onResized(): void;
        /**
         * Callback function when the manual mode button was pressed.
         * @category Event callbacks
         */
        private __onManualModeToggled;
        /**
         * Callback function when the user interaction on the value field has finished.
         * @category Event callbacks
         */
        protected __onUserInteractionFinished(): void;
        /**
         * Callback function when the data type of the value field has changed.
         * @category Event callbacks
         */
        protected __onDataTypeChanged(): void;
        processBaObject(): void;
        setAttributes(attr: ManualOverride.IAttributes): this;
        getAttributes(): ManualOverride.IAttributes;
        /**
         * Setter for the ManualEnable of the checkbox.
         * @category Attribute setter and getter
         * @param p The new ManualEnable or null.
         * @returns The ManualOverride.
         */
        setManualEnable(p: boolean | null | undefined): this;
        /**
         * Processor for the ManualEnable attribute.
         * @category Attribute setter and getter
         */
        protected __processManualEnable(): void;
        /**
         * Getter for the ManualEnable attribute.
         * @category Attribute setter and getter
         * @returns The ManualEnable attribute.
         */
        getManualEnable(): boolean | null | undefined;
        /**
         * Setter for the ManualValue of the checkbox.
         * @category Attribute setter and getter
         * @param p The new ManualValue or null.
         * @returns The ManualOverride.
         */
        setManualValue(p: boolean | number | null | undefined): this;
        /**
         * Processor for the ManualValue attribute.
         * @category Attribute setter and getter
         */
        protected __processManualValue(): void;
        /**
         * Getter for the ManualValue attribute.
         * @category Attribute setter and getter
         * @returns The ManualValue attribute.
         */
        getManualValue(): boolean | number | null | undefined;
        /**
         * Setter for the ManualValueFeedback of the checkbox.
         * @category Attribute setter and getter
         * @param p The new ManualValueFeedback or null.
         * @returns The ManualOverride.
         */
        setManualValueFeedback(p: boolean | number | null | undefined): this;
        /**
         * Processor for the ManualValueFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processManualValueFeedback(): void;
        /**
         * Getter for the ManualValueFeedback attribute.
         * @category Attribute setter and getter
         * @returns The ManualValueFeedback attribute.
         */
        getManualValueFeedback(): boolean | number | null | undefined;
        /**
         * Setter for the AutoValue of the checkbox.
         * @category Attribute setter and getter
         * @param p The new AutoValue or null.
         * @returns The ManualOverride.
         */
        setAutoValue(p: boolean | number | null | undefined): this;
        /**
         * Processor for the AutoValue attribute.
         * @category Attribute setter and getter
         */
        protected __processAutoValue(): void;
        /**
         * Getter for the AutoValue attribute.
         * @category Attribute setter and getter
         * @returns The AutoValue attribute.
         */
        getAutoValue(): boolean | number | null | undefined;
        protected __processReadOnly(): void;
    }
    namespace ManualOverride {
        interface IAttributes extends Base.IAttributes, Pick<ValueField.IAttributes<any>, 'dataType' | 'activeText' | 'inactiveText' | 'unit' | 'stateTexts'> {
            /** If true the manual value is active. */
            manualEnable?: boolean | null;
            /** The manual value. (Will override the automatic/program value if {@link manualEnable} is true) */
            manualValue?: boolean | number | null;
            /** The manual value feedback. */
            manualValueFeedback?: boolean | number | null;
            /** The current automatic value. (The value from the program) */
            autoValue?: boolean | number | null;
        }
        enum ManulOverrideEvents {
            onManualEnableToggled = "onManualOverrideManualEnableToggled",
            onManualValueChanged = "onManualOverrideManualValueChanged"
        }
    }
}
//# sourceMappingURL=ManualOverride.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /**
     * The ManualOverrideBinary is a class to manual override a binary value.
     */
    class ManualOverrideBinary extends Base implements BaObjectHandler.IUsesBaObject {
        constructor(id: string, parent?: IBaseNode | null);
        baObjectHandler: BaObjectHandler;
        protected __attrHandler: AttributeHandler<ManualOverrideBinary.IAttributes>;
        private __autoButton;
        private __offButton;
        private __onButton;
        private __curStateDisplay;
        /**
         * State if the button is pressed or not.
         * @category Internal
         */
        private __isPressed;
        /**
         * If false the auto button is not displayed. Used if no manual override is available but editing is still possible.
         * @category Internal
         */
        private __displayAutoButton;
        /**
         * The current state of the ManualOverrideBinary.
         * @category Internal
         */
        private __curState;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Callback function for the onStateSelected event.
         * @category Event callbacks
         */
        private __onStateSelected;
        private __updateElements;
        processBaObject(): void;
        getCurrentState(): ManualOverrideBinary.State;
        setAttributes(attr: ManualOverrideBinary.IAttributes): this;
        getAttributes(): ManualOverrideBinary.IAttributes;
        /**
         * Setter for the ManualEnable of the checkbox.
         * @category Attribute setter and getter
         * @param p The new ManualEnable or null.
         * @returns The ManualOverrideBinary.
         */
        setManualEnable(p: boolean | null | undefined): this;
        /**
         * Processor for the ManualEnable attribute.
         * @category Attribute setter and getter
         */
        protected __processManualEnable(): void;
        /**
         * Getter for the ManualEnable attribute.
         * @category Attribute setter and getter
         * @returns The ManualEnable attribute.
         */
        getManualEnable(): boolean | null | undefined;
        /**
         * Setter for the ManualValue of the checkbox.
         * @category Attribute setter and getter
         * @param p The new ManualValue or null.
         * @returns The ManualOverrideBinary.
         */
        setManualValue(p: boolean | null | undefined): this;
        /**
         * Processor for the ManualValue attribute.
         * @category Attribute setter and getter
         */
        protected __processManualValue(): void;
        /**
         * Getter for the ManualValue attribute.
         * @category Attribute setter and getter
         * @returns The ManualValue attribute.
         */
        getManualValue(): boolean | null | undefined;
        /**
         * Setter for the AutoValue of the checkbox.
         * @category Attribute setter and getter
         * @param p The new AutoValue or null.
         * @returns The ManualOverrideBinary.
         */
        setAutoValue(p: boolean | null | undefined): this;
        /**
         * Processor for the AutoValue attribute.
         * @category Attribute setter and getter
         */
        protected __processAutoValue(): void;
        /**
         * Getter for the AutoValue attribute.
         * @category Attribute setter and getter
         * @returns The AutoValue attribute.
         */
        getAutoValue(): boolean | null | undefined;
        protected __processReadOnly(): void;
    }
    namespace ManualOverrideBinary {
        interface IAttributes extends Base.IAttributes {
            /** If true the manual value is active. */
            manualEnable?: boolean | null;
            /** The manual value. (Will override the automatic/program value if {@link manualEnable} is true) */
            manualValue?: boolean | null;
            /** The current automatic value. (The value from the program) */
            autoValue?: boolean | null;
        }
        enum ManulOverrideBinaryEvents {
            onPressed = "onManualOverrideBinaryPressed",
            onStateSelected = "onManualOverrideBinaryStateSelected"
        }
        enum State {
            auto = 0,
            manualOn = 1,
            manualOff = 2
        }
        enum Appearance {
            texts = 0,
            icons = 1,
            mixed = 2
        }
        let DefaultAppearance: Appearance;
    }
}
//# sourceMappingURL=ManualOverrideBinary.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Control that displays a checkbox. */
    class RadioButton extends TextControl {
        constructor(id: string, parent?: IBaseNode | null);
        protected __attrHandler: AttributeHandler<RadioButton.IAttributes>;
        /**
         * The checkbox input element.
         * @category Elements
         */
        protected __radioButton: JQuery<HTMLInputElement>;
        /**
         * The event handler for the changed event.
         * @category Event handler
         */
        protected __stateChangedHandler: (ev: JQuery.ChangeEvent) => void;
        /**
         * Handler when the label was pressed.
         * @category Event handler
         */
        protected __labelPressedHandler: (ev: JQuery.TriggeredEvent) => void;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        onTextChanged(newText: string): void;
        private __onLabelPressed;
        setAttributes(attr: RadioButton.IAttributes): this;
        getAttributes(): RadioButton.IAttributes;
        /**
         * Setter for the RadioState attribute.
         * @category Attribute setter and getter
         * @param p The new RadioState or null.
         * @returns The RadioButton.
         */
        setRadioState(p: boolean | null | undefined): this;
        /**
         * Getter for the RadioState attribute.
         * @category Attribute setter and getter
         * @returns The RadioState attribute.
         */
        getRadioState(): boolean;
        /**
         * Setter for the RadioGroup attribute.
         * @category Attribute setter and getter
         * @param p The new RadioGroup or null.
         * @returns The RadioButton.
         */
        setRadioGroup(p: string | null | undefined): this;
        /**
         * Processor for the RadioGroup attribute.
         * @category Attribute setter and getter
         */
        protected __processRadioGroup(): void;
        /**
         * Getter for the RadioGroup attribute.
         * @category Attribute setter and getter
         * @returns The RadioGroup attribute.
         */
        getRadioGroup(): string | null | undefined;
        /**
         * Setter for the CheckmarkColor attribute.
         * @category Attribute setter and getter
         * @param p The new CheckmarkColor or null.
         * @returns The RadioButton.
         */
        setCheckmarkColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the CheckmarkColor attribute.
         * @category Attribute setter and getter
         */
        protected __processCheckmarkColor(): void;
        /**
         * Getter for the CheckmarkColor attribute.
         * @category Attribute setter and getter
         * @returns The CheckmarkColor attribute.
         */
        getCheckmarkColor(): Color.RGBAColor | null | undefined;
        protected __processReadOnly(): void;
    }
    namespace RadioButton {
        interface IAttributes extends TextControl.IAttributes {
            /** Group of the radio button. */
            radioGroup?: string | null;
            /** Color of the checkmark which is displayed when the checkbox is active. */
            checkmarkColor?: Color.RGBAColor | null;
        }
        enum RadioButtonEvents {
            onSelected = "onSelected"
        }
    }
}
//# sourceMappingURL=RadioButton.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Class that provides the features and visuals of a slider. */
    class Slider extends TextControl implements Components.ResizeHandler.IOnResized, System.ValueHandler.IValueHandler<number>, BaObjectHandler.IUsesBaObject {
        constructor(id: string, parent?: IBaseNode | null);
        baObjectHandler: BaObjectHandler;
        resizeHandler: Components.ResizeHandler;
        valueHandler: System.ValueHandler<number>;
        /**
         * The slider input element.
         * @category Element
         */
        private __input;
        /**
         * The feedback slider for the value feedback.
         * @category Element
         */
        private __feedbackSlider;
        /**
         * The current value display.
         * @category Element
         */
        private __curValueDisplay;
        /**
         * The current value display.
         * @category Element
         */
        private __unitDisplay;
        /**
         * The scale container.
         * @category Element
         */
        private __scaleContainer;
        /**
         * The min value display.
         * @category Element
         */
        private __minValueDisplay;
        /**
         * The max value display.
         * @category Element
         */
        private __maxValueDisplay;
        protected __attrHandler: AttributeHandler<Slider.IAttributes>;
        /**
         * Identifire if the slider was moved or if there was just a press somewhere on the slider.
         * @category Internal
         */
        private __wasMoved;
        /**
         * Calculated number of digits from step attribute.
         * @category Internal
         */
        private __digits;
        /**
         * Background color before setting the ranges.
         * @category Internal
         */
        private __oldBackgroundColor;
        /**
         * IReadyFunction to reset the busy invoking after changing the value.
         * @category Internal
         */
        private __valueFeedbackReady;
        /**
         * Manages the press and hold.
         * @category Internal
         */
        private __managePressAndHold;
        /**
         * Stores the old enabled state if the min and max value are equal.
         * @category Internal
         */
        private __oldEnabled;
        private __changedHandler;
        /**
         * Handler for the pointer down event.
         * @category Event handler
         */
        private __downHandler;
        /**
         * Handler for the pointer move event.
         * @category Event handler
         */
        private __moveHandler;
        /**
         * Handler for the pointer up event.
         * @category Event handler
         */
        private __upHandler;
        /**
         * Handler when the current value display was pressed.
         * @category Event handler
         */
        private __curValueDisplayPressedHandler;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        onTextChanged(newText: string | null | undefined): void;
        onResized(): void;
        onValueChanged(newValue: number | null | undefined): void;
        /**
         * Callback when the value of the slider has changed.
         * @category Event callbacks
         */
        private __onChanged;
        /**
         * Callback for the pointer down event.
         * @category Event callbacks
         */
        private __onDown;
        /**
         * Callback for the pointer move event.
         * @category Event callbacks
         */
        private __onMove;
        /**
         * Callback for the pointer up event.
         * @category Event callbacks
         */
        private __onUp;
        /**
         * Callback when the current value display was pressed.
         * @category Event callbacks
         */
        private __onCurValueDisplayPressed;
        /**
         * Calculate the percentage in the range of the slider of a certain value.
         * @category Internal
         * @param val The value for which the percentage should be calculated.
         */
        private __calculatePercentage;
        /**
         * Opens a dialog to enter a new value.
         * @category Internal
         */
        private __openValueInput;
        /**
         * Gets the value from the HTML input element.
         * @category Internal
         * @returns The value from the HTML input element.
         */
        private __getValueFromHtml;
        /**
         * Validates the minimum and maximum values.
         * @category Internal
         */
        private __validateMinMax;
        setAttributes(attr: Slider.IAttributes): this;
        getAttributes(): Slider.IAttributes;
        /**
         * Setter for the Value attribute.
         * @category Attribute setter and getter
         * @param p The new Value or null.
         * @returns The Slider.
         */
        setValue(p: number | null | undefined): this;
        private __setValueInternal;
        /**
         * Processor for the Value attribute.
         * @category Attribute setter and getter
         */
        protected __processValue(): void;
        /**
         * Getter for the Value attribute.
         * @category Attribute setter and getter
         * @returns The Value attribute.
         */
        getValue(): number | null | undefined;
        /**
         * Setter for the ValueFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new ValueFeedback or null.
         * @returns The Slider.
         */
        setValueFeedback(p: number | null | undefined): this;
        /**
         * Processor for the ValueFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processValueFeedback(): void;
        /**
         * Getter for the ValueFeedback attribute.
         * @category Attribute setter and getter
         * @returns The MinValue attribute.
         */
        getValueFeedback(): number | null | undefined;
        /**
         * Setter for the ShowValue attribute.
         * @category Attribute setter and getter
         * @param p The new ShowValue or null.
         * @returns The Slider.
         */
        setShowValue(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowValue attribute.
         * @category Attribute setter and getter
         */
        protected __processShowValue(): void;
        /**
         * Getter for the ShowValue attribute.
         * @category Attribute setter and getter
         * @returns The ShowValue attribute.
         */
        getShowValue(): boolean | null | undefined;
        /**
         * Setter for the ShowScale attribute.
         * @category Attribute setter and getter
         * @param p The new ShowScale or null.
         * @returns The Slider.
         */
        setShowScale(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowScale attribute.
         * @category Attribute setter and getter
         */
        protected __processShowScale(): void;
        /**
         * Getter for the ShowScale attribute.
         * @category Attribute setter and getter
         * @returns The ShowScale attribute.
         */
        getShowScale(): boolean | null | undefined;
        /**
         * Setter for the MinValue attribute.
         * @category Attribute setter and getter
         * @param p The new MinValue or null.
         * @returns The Slider.
         */
        setMinValue(p: number | null | undefined): this;
        /**
         * Processor for the MinValue attribute.
         * @category Attribute setter and getter
         */
        protected __processMinValue(): void;
        /**
         * Getter for the MinValue attribute.
         * @category Attribute setter and getter
         * @returns The MinValue attribute.
         */
        getMinValue(): number | null | undefined;
        /**
         * Setter for the MaxValue attribute.
         * @category Attribute setter and getter
         * @param p The new MaxValue or null.
         * @returns The Slider.
         */
        setMaxValue(p: number | null | undefined): this;
        /**
         * Processor for the MaxValue attribute.
         * @category Attribute setter and getter
         */
        protected __processMaxValue(): void;
        /**
         * Getter for the MaxValue attribute.
         * @category Attribute setter and getter
         * @returns The MaxValue attribute.
         */
        getMaxValue(): number | null | undefined;
        /**
         * Setter for the Orientation attribute.
         * @category Attribute setter and getter
         * @param p The new orientation or null.
         * @returns The Slider.
         */
        setOrientation(p: Orientation | null | undefined): this;
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
         * Setter for the SwitchMinMax attribute.
         * @category Attribute setter and getter
         * @param p The new SwitchMinMax or null.
         * @returns The Slider.
         */
        setSwitchMinMax(p: boolean | null | undefined): this;
        /**
         * Processor for the SwitchMinMax attribute.
         * @category Attribute setter and getter
         */
        protected __processSwitchMinMax(): void;
        /**
         * Getter for the SwitchMinMax attribute.
         * @category Attribute setter and getter
         * @returns The SwitchMinMax attribute.
         */
        getSwitchMinMax(): boolean | null | undefined;
        /**
         * Setter for the Step attribute. (e.g. '0.1' or '0.25')
         * @category Attribute setter and getter
         * @param p The new Step or null.
         * @returns The Slider.
         */
        setStep(p: number | null | undefined): this;
        /**
         * Processor for the Step attribute.
         * @category Attribute setter and getter
         */
        protected __processStep(): void;
        /**
         * Getter for the Step attribute.
         * @category Attribute setter and getter
         * @returns The Step attribute.
         */
        getStep(): number | null | undefined;
        /**
         * Setter for the Ranges attribute.
         * @category Attribute setter and getter
         * @param p The new Ranges or null.
         * @returns The Slider.
         */
        setRanges(p: Slider.IRange[] | null | undefined): this;
        /**
         * Processor for the Ranges attribute.
         * @category Attribute setter and getter
         */
        protected __processRanges(): void;
        /**
         * Getter for the Ranges attribute.
         * @category Attribute setter and getter
         * @returns The Ranges attribute.
         */
        getRanges(): Slider.IRange[] | null | undefined;
        /**
         * Setter for the Unit attribute.
         * @category Attribute setter and getter
         * @param p The new Unit or null.
         * @returns The Slider.
         */
        setUnit(p: string | BA.Unit | null | undefined): this;
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
         * Setter for the KnobAppearance attribute.
         * @category Attribute setter and getter
         * @param p The new KnobAppearance or null.
         * @returns The Slider.
         */
        setKnobAppearance(p: Slider.KnobAppearance | null | undefined): this;
        /**
         * Processor for the KnobAppearance attribute.
         * @category Attribute setter and getter
         */
        protected __processKnobAppearance(): void;
        /**
         * Getter for the KnobAppearance attribute.
         * @category Attribute setter and getter
         * @returns The KnobAppearance attribute.
         */
        getKnobAppearance(): Slider.KnobAppearance | null | undefined;
        protected __processIsEnabled(): void;
        protected __processReadOnly(): void;
        processBaObject(): void;
    }
    namespace Slider {
        interface IAttributes extends TextControl.IAttributes, System.ValueHandler.IValueHandlerAttributes {
            /** Value of the slider.*/
            value?: number | null;
            /** Value feedback of the slider. */
            valueFeedback?: number | null;
            /** Show value of the slider.  */
            showValue?: boolean | null;
            /** Show scale of the slider. */
            showScale?: boolean | null;
            /** Minimum value of the slider. */
            minValue?: number | null;
            /** Maximum value of the slider. */
            maxValue?: number | null;
            /**Orientation value of the slider. */
            orientation?: Orientation | null;
            /** Switch if min value is at the end or the beginning. */
            switchMinMax?: boolean | null;
            /** Decimal places for the slider value. */
            step?: number | null;
            /** Ranges for the slider. */
            ranges?: Slider.IRange[] | null;
            /** Unit for the slider. */
            unit?: string | null;
            /** KnobAppearance value of the slider. */
            knobAppearance?: Slider.KnobAppearance | null;
        }
        interface IRange {
            color: Color.RGBAColor;
            start: number;
            end?: number;
        }
        /**
         * Validates the interface 'SliderRange'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
        */
        function isSliderRange(p: object | null | undefined): p is IRange;
        enum KnobAppearance {
            rectangle = 0,
            round = 1
        }
        enum SliderEvents {
            /** Is fired when the user interaction has finished. */
            onUserInteractionFinished = "onUserInteractionFinished",
            /** Is fired when the Value has changed. */
            onValueChanged = "onValueChanged",
            /** Is fired when the ValueFeedback has changed. */
            onValueFeedbackChanged = "onValueFeedbackChanged"
        }
        /** The threshold in percent which it is allowed to move the slider before PressAndHold is skipped. */
        let SkipPressAndHoldThreshold: number;
    }
}
//# sourceMappingURL=Slider.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
}
//# sourceMappingURL=Table.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Class represents a window where the user can select between different tabs.	*/
    class TabWindow extends Base {
        constructor(id: string, parent?: IBaseNode | null);
        protected __attrHandler: AttributeHandler<TabWindow.IAttributes>;
        /**
         * Div container where the content of the selected tab is displayed.
         * @category Elements
         */
        private __contentContainer;
        /**
         * Div container where the different tabs are placed.
         * @category Elements
         */
        private __tabContainer;
        /**
         * The created tabs.
         * @category Elements
         */
        private __tabs;
        /**
         * The current select tab.
         * @category Elements
         */
        private __selectedTab;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /** Defines the distance between the tabs in px. */
        set tabDistance(p: number | null | undefined);
        /** Defines the distance between the tabs in px. */
        get tabDistance(): number | null | undefined;
        /** Defines the size of the tab container. Depending on where the tabs are displayed this means the height or widht of the tab container. */
        set tabContainerSize(p: number | null | undefined);
        /** Defines the size of the tab container. Depending on where the tabs are displayed this means the height or widht of the tab container. */
        get tabContainerSize(): number | null | undefined;
        /** If true the tabs will use the entire space of the tab container. */
        set tabSizeAuto(p: boolean | null | undefined);
        /** If true the tabs will use the entire space of the tab container. */
        get tabSizeAuto(): boolean | null | undefined;
        /** Defines the padding of an icon in a tab in px. */
        set tabIconPadding(p: number | null | undefined);
        /** Defines the padding of an icon in a tab in px. */
        get tabIconPadding(): number | null | undefined;
        /**
         * Adds a new tab to the tab window.
         * @category Public
         * @param id The id of the new tab.
         * @returns The created tab or undefined if a tab with this id already exists.
         */
        addTab(id?: string, attr?: TabWindow.Tab.IAttributes): TabWindow.Tab | undefined;
        /**
         * Removes a tab from the tab window.
         * @category Public
         * @param id The id of the tab.
         * @returns True if the tab was successfully removed and false if not.
         */
        removeTab(id: string): boolean;
        /**
         * Remove all tabs from the tab window.
         * @category Public
         */
        removeAllTabs(): void;
        /**
         * Get a tab with a certain id.
         * @category Public
         * @param id The id of the tab.
         * @returns The tab or undefined if no tab with this id exists.
         */
        getTab(id: string): TabWindow.Tab | undefined;
        /**
         * Get the current selected tab
         * @category Public
         * @returns The current selected tab or undefined if no tab is selected
         */
        getSelectedTab(): TabWindow.Tab | undefined;
        /**
         * Get all created tabs.
         * @category Public
         */
        getTabs(): Map<string, TabWindow.Tab>;
        /**
         * Select a created tab.
         * @param tab The id of the tab or the tab itself.
         * @returns True if the tab was selected successfully and false if not.
         */
        selectTab(tab: string | TabWindow.Tab): boolean;
        protected __updateSelectedTab(selectedTab: TabWindow.Tab): void;
        setAttributes(attr: TabWindow.IAttributes): this;
        getAttributes(): TabWindow.IAttributes;
        /**
         * Setter for the TabPosition attribute.
         * @category Attribute setter and getter
         * @param p The new TabPosition or null.
         * @returns The TabWindow.
         */
        setTabPosition(p: Position | null | undefined): this;
        /**
         * Processor for the TabPosition attribute.
         * @category Attribute setter and getter
         */
        protected __processTabPosition(): void;
        /**
         * Getter for the TabPosition attribute.
         * @category Attribute setter and getter
         * @returns The TabPosition attribute.
         */
        getTabPosition(): Position | null | undefined;
    }
    namespace TabWindow {
        interface IAttributes extends Base.IAttributes {
            /** Tabs for the TabWindow. */
            tabs?: TabWindow.Tab.IAttributes[] | null;
            /** The position where the tabs are placed. (only top and bottom is supported). */
            tabPosition?: Position | null;
            /** Defines the margin between the tabs in px. */
            tabDistance?: number | null;
            /** Defines the size of the tab container. Depending on where the tabs are displayed this means the height or widht of the tab container. */
            tabContainerSize?: number | null;
            /** If true the tabs will use the entire space over/next to the content. */
            tabSizeAuto?: boolean | null;
            /** Defines the padding of an icon in a tab in px. */
            tabIconPadding?: number | null;
        }
        enum TabWindowEvents {
            /**
             * Is fired when a tab was selected.
             * Passes the selected tab as an parameter to the callback.
             */
            onTabSelected = "onTabSelected"
        }
        let useAnimation: boolean;
        class Tab extends TextControl {
            constructor(id: string, parent: IBaseNode | null);
            protected __attrHandler: AttributeHandler<Tab.IAttributes>;
            /**
             * Handler when the tab was pressed.
             * @category Event handler
             */
            private __downHandler;
            protected __attach(): void;
            protected __detach(): void;
            destroy(): void;
            /** The text of the tab. */
            set text(p: string | null | undefined);
            /** The text of the tab. */
            get text(): string | null | undefined;
            /** The icon of the tab. */
            set icon(p: string | null | undefined);
            /** The icon of the tab. */
            get icon(): string | null | undefined;
            setAttributes(attr: Tab.IAttributes): this;
            getAttributes(): Tab.IAttributes;
            /**
             * Setter for the Content attribute.
             * @category Attribute setter and getter
             * @param p The new content or null.
             * @returns The Tab.
             */
            setContent(p: JQuery | null | undefined): this;
            /**
             * Processor for the Content attribute.
             * @category Attribute setter and getter
             */
            protected __processContent(): void;
            /**
             * Getter for the Content attribute.
             * @category Attribute setter and getter
             * @returns The Content attribute.
             */
            getContent(): JQuery | null | undefined;
            /**
             * Setter for the BackgroundColorSelected attribute.
             * @category Attribute setter and getter
             * @param p The new BackgroundColorSelected or null.
             * @returns The Tab.
             */
            setBackgroundColorSelected(p: Color.RGBAColor | null | undefined): this;
            /**
             * Processor for the BackgroundColorSelected attribute.
             * @category Attribute setter and getter
             */
            protected __processBackgroundColorSelected(): void;
            /**
             * Getter for the BackgroundColorSelected.
             * @category Attribute setter and getter
             * @returns the BackgroundColorSelected attribute.
             */
            getTabBackgroundColorSelected(): Color.RGBAColor | null | undefined;
            /**
             * Setter for the TextColorSelected attribute.
             * @category Attribute setter and getter
             * @param p The new TextColorSelected or null.
             * @returns The Tab.
             */
            setTextColorSelected(p: Color.RGBAColor | null | undefined): this;
            /**
             * Processor for the TextColorSelected attribute.
             * @category Attribute setter and getter
             */
            protected __processTextColorSelected(): void;
            /**
             * Getter for the TextColorSelected attribute.
             * @category Attribute setter and getter
             * @returns The TextColorSelected attribute.
             */
            getTextColorSelected(): Color.RGBAColor | null | undefined;
        }
        namespace Tab {
            interface IAttributes extends TextControl.IAttributes {
                /** Background color of a selected tab. */
                tabBackgroundColorSelected?: Color.RGBAColor | null;
                /** Text color of a selected tab. */
                textColorSelected?: Color.RGBAColor | null;
                /** Content of the tab. */
                content?: JQuery | null;
            }
            enum TabEvents {
                onContentChanged = "onContentChanged"
            }
        }
    }
}
//# sourceMappingURL=TabWindow.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Class that displays a button. */
    class UiIcon extends Button implements BaObjectHandler.IUsesBaObject, Components.ResizeHandler.IOnResized {
        /**
         * Constructor of the button class.
         * @param id The unique id of the class.
         * @param parent The TcHmi parent of the class. Is needed to use TcHmi contols with in the class.
         */
        constructor(id: string, parent: IBaseNode | null);
        baObjectHandler: BaObjectHandler;
        resizeHandler: Components.ResizeHandler;
        protected __attrHandler: AttributeHandler<UiIcon.IAttributes>;
        /**
         * Internal map to store the created symbols for the display data.
         * @category Internal
         */
        private __displaysDataSymbols;
        /**
         * Internal map to store the created symbols for the display data.
         * @category Internal
         */
        private __eventsDataSymbols;
        /**
         * The identifier for the watch of the Events property of the BaObject.
         * @category Internal
         */
        private __eventWatchIdentifier;
        /**
         * Destroy function for the onCustomBaPulse event.
         * @category Internal
         */
        private __destroyOnCustomBaPulse;
        /**
         * Destroyer for the onDevcieConnectionStateChanged event of the device.
         * @category Internal
         */
        private __destroyOnDeviceConnectionStateChanged;
        /**
         * Created displays around the control.
         * @category Elements
         */
        private __displays;
        /**
         * All created event icons.
         * @category Elements
         */
        private __eventIcons;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Callback function when the activeEventData of a BaObject has changed.
         * @category Event callbacks
         * @param data The activeEventData.
         */
        protected __onEventDataChanged(data: Map<BA.EventCondition, BA.EventsPerIconImage>): void;
        /**
         * Callback function for the onDisplayValueChanged event.
         * @category Event callbacks
         */
        private __onDisplayValueChanged;
        /**
         * Callback when the size of the UiIcon has changed.
         * @category Event callbacks
         */
        onResized(): void;
        /**
         * Manages the pulse around the control if an event is present.
         * @category Internal
         */
        private __managePulse;
        /**
         * Manages the coloring of the icon if an event was configured.
         * @category Internal
         */
        private __manageIconStatus;
        /**
         * Enables or disables the pulse around the object.
         * @category Internal
         * @param enable Bool to identify enable or disable.
         */
        private __enablePulse;
        /**
         * Create all event icons for the EventsData attribute and remove old icons.
         * @category Internal
         */
        private __createEventIcons;
        /**
         * activates and deactivates the available events.
         * @category Internal
         */
        private __activateEvents;
        /**
         * Removes the subscription of event symbols for a certain key.
         * @category Internal
         * @param key
         */
        private __removeEventSubscriptions;
        /**
         * Removes the subscription of display data for a certain key.
         * @category Internal
         * @param key
         */
        private __removeDataSubscriptions;
        /**
         * Processor for the positions of the displays.
         * @category Internal
         */
        private __processDisplayPositions;
        /**
         * Resolve the symbol expression which was used in a attribute of a display.
         * @param str The string which contains the symbol expression.
         * @returns An object which has the original mapping or the actual value of the attribute.
         */
        private __resolveDisplayAttributeSymbolExpression;
        processBaObject(): void;
        /**
         * Get the connection on a certain position.
         * @category Public
         * @param pos The position of the connection.
         * @returns The connection or null if no connection was found.
         */
        getConnection(pos: Position): JQuery<HTMLElement> | null;
        /**
         * Get all created displays.
         * @category Public
         * @returns All created displays.*/
        getDisplays(): Map<string, InputBox<string | number>> | undefined;
        /**
         * Get a specific display by the name which was set in the display data of this display.
         * @category Public
         * @param name The name of the display.
         * @Returns The display or null.
         */
        getDisplay(name: string): InputBox<string | number> | null;
        /**
         * Adds a display to the UiIcon.
         * @category Public
         * @param data The data for the display.
         */
        addDisplay(name: string, data: UiIcon.IDisplayData): InputBox<string | number>;
        /**
         * Updates a certain display.
         * @param name The name of the display to be updated.
         * @param data The data that shall be updated.
         */
        updateDisplay(name: string, data: UiIcon.IDisplayData): void;
        /**
         * Removes the display with the given name.
         * @category Public
         * @param name The name of the display which should be removed.
         */
        removeDisplay(name: string): boolean;
        /**
         * Set a position for a specific display.
         * @category Public
         * @param id The id of the display.
         * @param pos The new position of the display.
         */
        setDisplayPosition(name: string, pos: UiIcon.DisplayPosition): void;
        setAttributes(attr: UiIcon.IAttributes): this;
        getAttributes(): UiIcon.IAttributes;
        /**
         * Setter for the DisplaysData attribute.
         * @category Attribute setter and getter
         * @param p The new displaysData or null.
         * @returns The UiIcon.
         */
        setDisplaysData(p: Map<string, UiIcon.IDisplayData> | null | undefined): this;
        /**
         * Processor for the DisplaysData attribute.
         * @category Attribute setter and getter
         */
        protected __processDisplaysData(): void;
        /**
         * Getter for the DisplaysData attribute.
         * @category Attribute setter and getter
         * @returns The DisplaysData attribute.
         */
        getDisplaysData(): Map<string, UiIcon.IDisplayData> | null | undefined;
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
         * @param p The new IsActive.
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
         * @param p The new HasEvent.
         * @deprecated Use setIconStatus.
         */
        setHasEvent(p: EventType | null | undefined): this;
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
         * @param p The new IconStatus.
         */
        setIconStatus(p: UiIcon.Status | null | undefined): this;
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
        getIconStatus(): UiIcon.Status | null | undefined;
        /**
         * Setter for the BorderStatus attribute.
         * @category Attribute setter and getter
         * @param p The new BorderStatus.
         */
        setBorderStatus(p: UiIcon.Status | null | undefined): this;
        /**
         * Processor for the ShowStatus attribute.
         * @category Attribute setter and getter
         */
        protected __processBorderStatus(): void;
        /**
         * Getter for the BorderStatus attribute.
         * @category Attribute setter and getter
         * @returns The BorderStatus attribute.
         */
        getBorderStatus(): UiIcon.Status | null | undefined;
        /**
         * Setter for the EventsData attribute.
         * @category Attribute setter and getter
         * @param p The new EventsData or null.
         * @returns The UiIcon.
         */
        setEventsData(p: UiIcon.IEventData[] | null | undefined): this;
        /**
         * Processor for the EventsData attribute.
         * @category Attribute setter and getter
         */
        protected __processEventsData(): void;
        /**
         * Getter for the EventsData attribute.
         * @category Attribute setter and getter
         * @returns The EventsData attribute.
         */
        getEventsData(): UiIcon.IEventData[] | null | undefined;
        /**
         * Setter for the ShowDisplays attribute.
         * @category Attribute setter and getter
         * @param p The new ShowDisplays.
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
         * Processor for the Connections attribute.
         * @category Attribute setter and getter
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
         * Processor for the ConnectionExtensions attribute.
         * @category Attribute setter and getter
         */
        protected __processConnectionExtensions(): void;
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
         * Processor for the ConnectionsWidth attribute.
         * @category Attribute setter and getter
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
        setConnectionColors(p: Color.RGBAColor | Color.IFourSidedColor | null | undefined): this;
        /**
         * Processor for the ConnectionColors attribute.
         * @category Attribute setter and getter
         */
        protected __processConnectionColors(): void;
        /**
         * Getter for the ConnectionColors attribute.
         * @category Attribute setter and getter
         * @returns The ConnectionColors attribute.
         */
        getConnectionColors(): Color.IFourSidedColor | null | undefined;
        /**
         * Setter for the ShowTag attribute.
         * @category Attribute setter and getter
         * @param p The new ShowTag.
         */
        setShowTag(p: UiIcon.DisplayPosition | null | undefined): this;
        /**
         * Processor for the ShowTag attribute.
         * @category Attribute setter and getter
         */
        protected __processShowTag(): void;
        /**
         * Getter for the ShowTag attribute.
         * @category Attribute setter and getter
         * @returns The ShowTag attribute.
         */
        getShowTag(): UiIcon.DisplayPosition | null | undefined;
    }
    namespace UiIcon {
        interface IAttributes extends Button.IAttributes {
            /** Data for different displays around the icon. */
            displaysData?: Map<string, UiIcon.IDisplayData> | null;
            /** Number of displayed digits when a display contains a number. */
            displayedDigits?: number | null;
            /**
             * If a BaIcon is used and the attribute is true, the icon will be colored in the active color. If false the icon color will have the default color.
             * @deprecated Use iconStatus.
             * */
            isActive?: boolean | null;
            /**
             * If a BaIcon is used and the attribute is not Invalid, the icon will be colored in the defined event color. If Invalid the icon color will have the default color.
             * @deprecated Use iconStatus.
             */
            hasEvent?: EventType | null;
            /** If a BaIcon is used and the attribute is not Invalid, the icon will be colored in the defined status color. If Invalid the icon color will have the default color. */
            iconStatus?: Status | null;
            /** The border will be colored in the defined status color. If Invalid the border color will have the default color. */
            borderStatus?: Status | null;
            /** Data for different events that can be displayed around the icon. */
            eventsData?: UiIcon.IEventData[] | null;
            /** Define if displays are visible or not. */
            showDisplays?: boolean | null;
            /** Different connections for the UiIcon. */
            connections?: Partial<FourSidedCss> | null;
            /** Connection extensions for available connections. */
            connectionExtensions?: Partial<FourSidedCss> | null;
            /** The width of the connections. */
            connectionsWidth?: number | null;
            /** Colors of the connections. */
            connectionColors?: Color.IFourSidedColor | null;
            /** Defines where the tag of the bound BaObject is displayed. If null the tag will not be displayed */
            showTag?: DisplayPosition | null;
        }
        enum UiIconEvents {
            onActiveEventsChanged = "onUiIconActiveEventsChanged",
            onDisplayedEventsChanged = "onUiIconDisplayedEventsChanged",
            onDisplayValueChanged = "onUiIconDisplayValueChanged"
        }
        enum DisplayPosition {
            left = 0,
            top = 1,
            right = 2,
            bottom = 3,
            topLeft = 4,
            topRight = 5,
            bottomRight = 6,
            bottomLeft = 7
        }
        /**
         * Describes the data for a display on the UiIcon control.
         * @category UiIcon
         */
        interface IDisplayData extends InputBox.IAttributes<string | number> {
            /** Position of the display. */
            position?: DisplayPosition | null;
            /** Order of the display. The higher the order the higher the display is stacked. */
            order?: number;
        }
        /**
         * Describes the data for an event icon on the UiIcon control.
         * A click on the event will acknowledge it
         * @category UiIcon
         */
        interface IEventData extends EventIcon.IAttributes {
            /** If true the event will be displayed on the UiIcon. */
            activate: boolean | null;
            /** If true the event can be clicked, when false it is not enabled. */
            isAcknowledgeable?: boolean | null;
            /** Icon path for the displayed icon if 'eventCondition' and 'eventState' is not set. */
            icon?: string | null;
            /** activates or deactivated the pulse if 'eventCondition' and 'eventState' is not set. */
            enablePulse?: boolean | null;
        }
        enum Status {
            invalid = 0,
            alarm = 1,
            disturb = 2,
            maintenance = 3,
            notification = 4,
            other = 5,
            active = 20,
            inactive = 21
        }
        /**
         * Defines if the IconStatus attribute is set automatically, if events are configured.
         * This will color the icon in the defined event color, if a certain event is active.
         * Default is false.
         */
        let AutoActivateIconStatus: boolean;
        /**
         * Defines if the amount of events of a type is displayed as a badge in the upper right corner.
         * Default is true.
         */
        let EnableEventCountBadge: boolean;
        /** Defines for each user level if a pulse is displayed, when an event with this or a higher priority is active. */
        let MaximumEventTypePulse: Map<BA.Role, BA.EventType>;
        /** Defines for each user level the maximum event condition that will be displayed. */
        let MaximumEventConditionDisplayed: Map<BA.Role, BA.EventCondition>;
        /**
         * Defines the initial width and height of the event icon.
         * Default is 30.
         */
        let EventIconSize: number;
        /**
         * Defines the threshold value that the width or height must undershot before the automatic scaling for the event symbol begins.
         * Default is 40.
         */
        let AutoScaleEventIconThreshold: number;
    }
}
//# sourceMappingURL=UiIcon.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    /** Class that displays and edits different value types. */
    class ValueField<T extends ValueField.ValueType> extends TextControl implements BaObjectHandler.IUsesBaObject {
        constructor(id: string, parent?: IBaseNode | null);
        baObjectHandler: BaObjectHandler;
        protected __attrHandler: AttributeHandler<ValueField.IAttributes<T>>;
        /**
         * Stores the current data type that is used from the value field.
         * @category Internal
         */
        private __curDataType;
        protected __valueField: Checkbox | InputBox<string | number> | Combobox<number> | DateTimeField | undefined;
        private __checkbox;
        private __inputField;
        private __combobox;
        private __dateTimeField;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Is called when the data type of the ValueField has changed.
         * @category Event handler
         */
        protected __onDataTypeChanged(): void;
        /**
         * Callback function for the onUserInteractionFinished event of the subcontrols.
         * @category Event handler
         * @param e The EventProvider event.
         * @param component The component which raised the event.
         */
        protected __onUserInteractionFinished(e: EventProvider.Event, component: Base): void;
        /**
         * Updates the different controls.
         * @category Internal
         * @param val The new value that is to be set to the controls.
         */
        private __updateValue;
        /**
         * Processes the use label flag of the check box.
         * This will centralize the checkbox in the control if no label is used.
         * @category Internal*/
        private __processCheckboxUseLabel;
        processBaObject(): void;
        /**
         * Get the current value field (Depends on current data type)
         * @returns The current value field.
         */
        getValueField(): Checkbox | DateTimeField | Combobox<number> | InputBox<string | number> | undefined;
        setAttributes(attr: ValueField.IAttributes<T>): this;
        getAttributes(): ValueField.IAttributes<T>;
        /**
         * Setter function for the value attribute.
         * @category Attribute setter and getter
         * @param p The new value.
         * @returns The ValueField.
         */
        setValue(p: T | null): this;
        /**
         * Processor for the Value attribute.
         * @category Attribute setter and getter
         */
        protected __processValue(): void;
        /**
         * Getter for the Value attribute.
         * @category Attribute setter and getter
         * @returns The Value attribute.
         */
        getValue(): T | null | undefined;
        /**
         * Setter for the ValueFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new ValueFeedback or null.
         * @returns The ValueField.
         */
        setValueFeedback(p: T | null | undefined): this;
        /**
         * Processor for the ValueFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processValueFeedback(): void;
        /**
         * Getter for the ValueFeedback attribute.
         * @category Attribute setter and getter
         * @returns The ValueFeedback.
         */
        getValueFeedback(): T | null | undefined;
        /**
         * Setter for the DataType attribute.
         * @category Attribute setter and getter
         * @param p The new DataType or null.
         * @returns The ValueField.
         */
        setDataType(p: DataType | null | undefined): this;
        /**
         * Processor for the DataType attribute.
         * @category Attribute setter and getter
         */
        protected __processDataType(): void;
        /**
         * Getter for the DataType attribute.
         * @category Attribute setter and getter
         * @returns The DataType attribute.
         */
        getDataType(): DataType | null | undefined;
        /**
         * Setter for the ActiveText attribute.
         * @category Attribute setter and getter
         * @param p The new ActiveText or null.
         * @returns The ValueField.
         */
        setActiveText(p: string | null | undefined): this;
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
         * Setter for the InactiveText attribute.
         * @category Attribute setter and getter
         * @param p The new InactiveText or null.
         * @returns The ValueField.
         */
        setInactiveText(p: string | null | undefined): this;
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
         * Setter for the Unit attribute.
         * @category Attribute setter and getter
         * @param p The new Unit or null.
         * @returns The ValueField.
         */
        setUnit(p: string | BA.Unit | null | undefined): this;
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
         * Setter function for MinValue attribute.
         * @category Attribute setter and getter
         * @param p the new MinValue or null.
         * @returns The ValueField.
         */
        setMinValue(p: number | null | undefined): this;
        /**
         * Processor for the MinValue attribute.
         * @category Attribute setter and getter
         */
        protected __processMinValue(): void;
        /**
         * Getter for the MinValue attribute.
         * @category Attribute setter and getter
         * @returns The MinValue attribute.
         */
        getMinValue(): number | null | undefined;
        /**
         * Setter for the MaxValue attribute.
         * @category Attribute setter and getter
         * @param p the new MaxValue or null.
         * @returns The ValueField
         */
        setMaxValue(p: number | null | undefined): this;
        /**
         * Processor for the MaxValue attribute.
         * @category Attribute setter and getter
         */
        protected __processMaxValue(): void;
        /**
         * Getter for MaxValue attribute.
         * @category Attribute setter and getter
         * @returns The MaxValue attribute.
         */
        getMaxValue(): number | null | undefined;
        /**
         * Setter for the StateTexts attribute.
         * @category Attribute setter and getter
         * @param p The new StateTexts or null.
         * @returns The ValueField.
         */
        setStateTexts(p: Combobox.IItem<number>[] | null | undefined): this;
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
        getStateTexts(): Combobox.IItem<number>[] | null | undefined;
        /**
         * Setter for the Digits attribute.
         * @category Attribute setter and getter
         * @param p The new Digits or null.
         * @returns The ValueField.
         */
        setDigits(p: number | null | undefined): this;
        /**
         * Getter for the Digits attribute.
         * @category Attribute setter and getter
         * @returns The Digits attribute.
         */
        getDigits(): number | null | undefined;
        /**
         * Setter for the AutoWrite attribute.
         * @category Attribute setter and getter
         * @param p The new AutoWrite.
         */
        setValueHandler(p: System.ValueHandler.IAttributes | null | undefined): this;
        /**
         * Getter for the AutoWrite attribute.
         * @category Attribute setter and getter
         * @returns The AutoWrite attribute.
         */
        getAutoWrite(): System.ValueHandler.IAttributes | null | undefined;
        protected __processReadOnly(): void;
        protected __processContentPadding(): void;
        protected __processTextHorizontalAlignment(): void;
        protected __processTextVerticalAlignment(): void;
    }
    namespace ValueField {
        interface IAttributes<T extends ValueType> extends Omit<InputBox.IAttributesExValue, 'dataType'>, Omit<Combobox.IAttributes<number>, 'data'>, Checkbox.IAttributesExState, DateTimeField.IAttributes {
            /** The value to display. */
            value?: T | null;
            /** The value feedback. */
            valueFeedback?: T | null;
            /** The data type of the value field. */
            dataType?: DataType | null;
            /** Data of the combobox. */
            stateTexts?: Combobox.IItem<number>[] | null;
        }
        type ValueType = boolean | number | string | Date | null | undefined;
        enum ValueFieldEvents {
            onValueChanged = "onValueFieldValueChanged",
            onUserInteractionFinished = "onValueFieldUserIneractionFinished",
            onDataTypeChanged = "onValueFieldDataTypeChanged"
        }
    }
}
//# sourceMappingURL=ValueField.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    class DailySchedule extends Base implements Components.ResizeHandler.IOnResized {
        constructor(id: string, parent?: IBaseNode | null);
        resizeHandler: Components.ResizeHandler;
        /**
         * Data of the schedule.
         * @category Attribute
         */
        private __data;
        /**
         * Old data of the schedule. Can be used to reset the DailySchedule.
         * @category Attribute
         */
        private __oldData;
        protected __attrHandler: AttributeHandler<DailySchedule.IAttributes>;
        /**
         * Created daily schedule entries.
         * @category Internal
         */
        private __scheduleEntries;
        /**
         * Identifies if a entry in the DailySchedule has changed after last reset/save.
         * @category Internal
         */
        private __hasChanges;
        /**
         * Headline of the schedule which is normally the week day.
         * @category Elements
         */
        private __headline;
        /**
         * Container for the schedule entries.
         * @category Elements
         */
        private __scheduleEntriesContainer;
        /**
         * Button to open the menu of the schedule.
         * @category Elements
         */
        private __menuButton;
        /**
         * Menu for the schedule.
         * @category Elements
         */
        private __contextMenu;
        /**
         * Reset button for the menu.
         * @category Elements
         */
        private __resetEntry;
        /**
         * JQuery element for the time cursor.
         * @category Elements
         */
        private __timeCursor;
        private static __localeStorage;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        private static __sortData;
        private static __convertDataToArray;
        private __convertDataToMap;
        /**
         * Converts an array of {@link BA.SchedEntry} to the internal data structure.
         * @category Internal
         * @param schedEntries The entries to be converted.
         * @returns The data in the internal structure.
         */
        private __convertSchedEntriesToData;
        /**
         * Set the __hasChanges property. Affects if the reset entry is enabled and raises the onDataChanged event.
         * @category Internal
         * @param hasChanges The new hasChanges value.
         */
        private __setHasChanges;
        /**
         * Calculate the offset for one second.
         * @category Internal
         * @returns The offset for one second.
         */
        private __calculateOffset;
        /**
         * Made changes to the daily schedule entry will be reset to the last collection of setted entries by using setData().
         * @category Public
         */
        resetChanges(): void;
        /**
         * Resets the hasChanges flag.
         * @category Public
         */
        resetHasChanges(): void;
        /**
         * Accesses the map of created schedule entries.
         * @category Public
         */
        getScheduleEntries(): Map<string, DailyScheduleEntry>;
        /**
         * Update the positions of all entries.
         * @category Public
         */
        updatePositions(): void;
        /**
         * Identifies if the DailySchedule has changes since the last reset.
         * @category Public
         */
        hasChanges(): boolean;
        /**
         * Appends the time cursor.
         * @category Internal
         */
        appendTimeCursor(): void;
        /**
         * Detaches the time cursor.
         * @category Internal
         * @returns True if the time cursor was detached, false if no time cursor was attached.
         */
        detachTimeCursor(): boolean;
        /**
         * Callback when the schedule was resized.
         * @category Event callbacks
         */
        onResized(): void;
        /**
         * Callback when the add entry was pressed.
         * @category Event callbacks
         */
        private __onAddEntryPressed;
        /**
         * Callback when the reset entry was pressed.
         * @category Event callbacks
         */
        private __onResetEntryPressed;
        /**
         * Callback when the copy entry was pressed.
         * @category Event callbacks
         */
        private __onCopyEntryPressed;
        /**
         * Callback when the paste entry was pressed.
         * @category Event callbacks
         */
        private __onPasteEntryPressed;
        /**
         * Callback when the start time of an entry has changed.
         * @category Event callbacks
         */
        private __onStartTimeChanged;
        /**
         * Callback when the end time of an entry has changed.
         * @category Event callbacks
        */
        private __onEndTimeChanged;
        /**
         * Callback when an entry was deleted.
         * @category Event callbacks
        */
        private __onEntryDeleted;
        /**
         * Callback when the value of an entry has changed.
         * @category Event callbacks
        */
        private __onValueChanged;
        /**
         * Callback when the state of an entry has changed.
         * @category Event callbacks
        */
        private __onStateChanged;
        setAttributes(attr: DailySchedule.IAttributes): this;
        getAttributes(): DailySchedule.IAttributes;
        /**
         * Setter for the title attribute.
         * @category Attribute setter and getter
         * @param p The new title or null.
         * @returns The DailySchedule.
         */
        setTitle(p: string | null | undefined): this;
        /**
         * Getter for the title attribute.
         * @category Attribute setter and getter
         * @returns The title attribute.
         */
        getTitle(): string | null | undefined;
        /**
         * Setter for the data attribute.
         * @category Attribute setter and getter
         * @param p The new data or null.
         * @returns The DailySchedule.
         */
        setData(p: BA.SchedEntry[] | null | undefined): this;
        /**
         * Processor for the data attribute.
         * @category Attribute setter and getter
         */
        protected __processData(): void;
        /**
         * Getter for the data attribute.
         * @category Attribute setter and getter
         * @returns The data attribute.
         */
        getData(): BA.SchedEntry[] | null;
        /**
         * Settern for the DataType attribute.
         * @category Attribute setter and getter
         * @param p The new DataType as E_DataClass or null.
         * @returns The DailySchedule.
         */
        setDataType(p: DataType | null | undefined): this;
        /**
         * Getter for the DataType attribute.
         * @category Attribute setter and getter
         * @returns The DataType attribute.
         */
        getDataType(): DataType | null | undefined;
        /**
         * Setter for the snapPeriode attribute.
         * @category Attribute setter and getter
         * @param p The new snapPeriode or null.
         * @returns The DailySchedule.
         */
        setSnapPeriode(p: number | null | undefined): this;
        /**
         * Getter for the snapPeriode attribute.
         * @category Attribute setter and getter
         * @returns The snapPeriode attribute.
         */
        getSnapPeriode(): number | null | undefined;
        /**
         * Setter for the activeText attribute.
         * @category Attribute setter and getter
         * @param p The new activeText or null.
         * @returns The DailySchedule.
         */
        setActiveText(p: string | null | undefined): this;
        /**
         * Getter for the activeText attribute.
         * @category Attribute setter and getter
         * @returns The activeText attribute.
         */
        getActiveText(): string | null | undefined;
        /**
         * Setter for the inactiveText attribute.
         * @category Attribute setter and getter
         * @param p The new inactiveText or null.
         * @returns The DailySchedule.
         */
        setInactiveText(p: string | null | undefined): this;
        /**
         * Getter for the inactiveText attribute.
         * @category Attribute setter and getter
         * @returns The inactiveText attribute.
         */
        getInactiveText(): string | null | undefined;
        /**
         * Setter for the unit attribute.
         * @category Attribute setter and getter
         * @param p The new unit or null.
         * @returns The DailySchedule.
         */
        setUnit(p: string | BA.Unit | null | undefined): this;
        /**
         * Getter for the unit attribute.
         * @category Attribute setter and getter
         * @returns The unit attribute.
         */
        getUnit(): string | null | undefined;
        /**
         * Setter for the stateTexts attribute.
         * @category Attribute setter and getter
         * @param p The new stateTexts or null.
         * @returns The DailySchedule.
         */
        setStateTexts(p: Combobox.IItem<number>[] | null | undefined): this;
        /**
         * Getter for the stateTexts attribute.
         * @category Attribute setter and getter
         * @returns The stateTexts attribute.
         */
        getStateTexts(): Combobox.IItem<number>[] | null | undefined;
        /**
        * Setter for the orientation attribute.
         * @category Attribute setter and getter
        * @param p The new orientation or null.
        * @returns The DailySchedule.
        */
        setOrientation(p: Orientation | null | undefined): this;
        /**
         * Processor for the Orientation attribute.
         * @category Attribute setter and getter
         */
        protected __processOrientation(): void;
        /**
         * Getter for the orientation attribute.
         * @category Attribute setter and getter
         * @returns The orientation attribute.
         */
        getOrientation(): Orientation | null | undefined;
        /**
         * Setter for the StateColors attribute.
         * @category Attribute setter and getter
         * @param p The new StateColors or null.
         * @returns The DailySchedule.
         */
        setStateColors(p: DailyScheduleEntry.IStateColors | null | undefined): this;
        /**
         * Getter for the StateColors attribute.
         * @category Attribute setter and getter
         * @returns The StateColors attribute.
         */
        getStateColors(): DailyScheduleEntry.IStateColors | null | undefined;
        /**
        * Setter for the MaximumEntryCount attribute.
         * @category Attribute setter and getter
        * @param p The new MaximumEntryCount or null.
        * @returns The DailySchedule.
        */
        setMaximumEntryCount(p: number | null | undefined): this;
        /**
         * Processor for the MaximumEntryCount attribute.
         * @category Attribute setter and getter
         */
        protected __processMaximumEntryCount(): void;
        /**
         * Getter for the MaximumEntryCount attribute.
         * @category Attribute setter and getter
         * @returns The MaximumEntryCount attribute.
         */
        getMaximumEntryCount(): number | null | undefined;
        /**
        * Setter for the CurrentDateTime attribute.
         * @category Attribute setter and getter
        * @param p The new CurrentDateTime or null.
        * @returns The DailySchedule.
        */
        setCurrentDateTime(p: Date | null | undefined): this;
        /**
         * Processor for the CurrentDateTime attribute.
         * @category Attribute setter and getter
         */
        protected __processCurrentDateTime(): void;
        /**
         * Getter for the CurrentDateTime attribute.
         * @category Attribute setter and getter
         * @returns The CurrentDateTime attribute.
         */
        getCurrentDateTime(): Date | null | undefined;
        protected __processReadOnly(): void;
    }
    namespace DailySchedule {
        interface IAttributes extends DailyScheduleEntry.IAttributes {
            /** Title of the schedule. */
            title?: string | null;
            /** Defines the maximum amount of entries. */
            maximumEntryCount?: number | null;
            /** The current date and time. E.g. from the parent and than from the PLC. */
            currentDateTime?: Date | null;
        }
        enum DailyScheduleEvents {
            onDataChanged = "onDataChanged"
        }
    }
}
//# sourceMappingURL=DailySchedule.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    class DailyScheduleEntry extends Base {
        constructor(id: string, parent?: IBaseNode | null);
        /**
         * Displays the start time of the entry.
         * @category Elements
         */
        private __startTimeDisplay;
        /**
         * Displays the end time of the entry.
         * @category Elements
         */
        /**
         * Area for resizing the start of the entry.
         * @category Elements
         */
        private __resizerStart;
        /**
         * Area for resizing the end of the entry.
         * @category Elements
         */
        /**
         * Container for the content of the entry (e.g. value field).
         * @category Elements
         */
        private __contentContainer;
        /**
         * Field to display the value of the entry.
         * @category Elements
         */
        valueField: ValueField<any>;
        /**
         * Button to open the menu of the entry.
         * @category Elements
         */
        private __menuButton;
        /**
         * Menu for the entry.
         * @category Elements
         */
        private __contextMenu;
        /**
         * Combobox to select the state of the entry.
         * @category Elements
         */
        private __cbState;
        protected __attrHandler: AttributeHandler<DailyScheduleEntry.IAttributes>;
        private __originalLeft;
        private __originalTop;
        private __originalRight;
        private __originalBottom;
        private __originalMouseX;
        private __originalMouseY;
        private __maxPos;
        private __currentTarget;
        /**
         * Handler when a resizer was pressed.
         * @category Event handler
         */
        private __resizerPressedHandler;
        /**
         * Handler the element was pressed.
         * @category Event handler
         */
        private __elementPressedHandler;
        /**
         * Handler when the mouse / touch was moved.
         * @category Event handler
         */
        private __moveHandler;
        /**
         * Handler when the delete button in the menu was pressed.
         * @category Event handler
         */
        private __deleteButtonPressedHandler;
        /**
         * Handler when the edit button in the menu was pressed.
         * @category Event handler
         */
        private __editButtonPressedHandler;
        /**
         * Handler when the edit button in the menu was pressed.
         * @category Event handler
         */
        private __cbStateChangedHandler;
        /**
         * Handler when the mouse was released.
         * @category Event handler
         */
        private __pressEndHandler;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Event callback when the element was pressed.
         * @category Event callback
         */
        private __onElementPressed;
        /**
         * Event callback when the element press was released.
         * @category Event callback
         */
        private __onPressEnd;
        /**
         * Event callback when the element was moved.
         * @category Event callback
         */
        private __onMoved;
        /**
         * Event callback when the resizer was pressed.
         * @category Event callback
         */
        private __onResizerPressed;
        /**
         * Event callback when value of the entry has changed.
         * @category Event callback
         */
        private __onValueChanged;
        /**
         * Event callback when the edit button of the context menu was pressed.
         * @category Event callback
         */
        private __onEditButtonPressed;
        /**
         * Event callback when the delete button of the context menu was pressed.
         * @category Event callback
         */
        private __onDeleteButtonPressed;
        /**
         * Event callback when the combobox state of the context menu has changed.
         * @category Event callback
         */
        private __onCbStateChanged;
        /**
         * Validates the new time from the time picker.
         * @category Internal
         * @param newStart The new start time.
         * @param newEnd The new end time.
         * @param checkOverlap Checks also if the new times overlap the next / previous entries.
         */
        private __validateNewTimes;
        /**
         * Updates the StateColors depending on the data class and the current value.
         * @category Internal
         */
        private __updateStateColors;
        /**
         * Updates the start position of the schedule entry.
         * @category Public
         * @param startTime The new start time.
         */
        updateStartPos(startTime: BA.BaTime | null | undefined): void;
        /**
         * Updates te end position of the schedule entry.
         * @category Public
         * @param endTime The new end time.
         */
        updateEndPos(endTime: BA.IBaTime | null | undefined): void;
        /**
         * Get the end time display.
         * @category Public
         * @returns The end time display
         */
        /**
         * Get the start time display.
         * @category Public
         * @returns The start time display
         */
        setAttributes(attr: DailyScheduleEntry.IAttributes): this;
        getAttributes(): DailyScheduleEntry.IAttributes;
        /**
         * Setter for the offset attribute.
         * @category Attribute setter and getter
         * @param p The size that represents one second or null.
         * @returns The DailyScheduleEntry.
         */
        setOffset(p: number | null | undefined): this;
        /**
         * Getter for the offset attribute.
         * @category Attribute setter and getter
         * @returns The offset attribute.
         */
        getOffset(): number | null | undefined;
        /**
         * Setter for the startTime attribute.
         * @category Attribute setter and getter
         * @param p The new startTime or null.
         * @returns The DailyScheduleEntry.
         */
        setStartTime(p: BA.BaTime | null | undefined): this;
        /**
         * Getter for the startTime attribute.
         * @category Attribute setter and getter
         * @returns The startTime attribute.
         */
        getStartTime(): BA.BaTime | null | undefined;
        /**
         * Setter for the endTime attribute.
         * @category Attribute setter and getter
         * @param p The new endTime or null.
         * @returns The DailyScheduleEntry.
         */
        setEndTime(p: BA.BaTime | null | undefined): this;
        /**
         * Getter for the endTime attribute.
         * @category Attribute setter and getter
         * @returns The endTime attribute.
         */
        getEndTime(): BA.BaTime | null | undefined;
        /**
         * Setter for the MinStartTime attribute.
         * @category Attribute setter and getter
         * @param p The new MinStartTime or null.
         * @returns The DailyScheduleEntry.
         */
        setMinStartTime(p: BA.BaTime | null | undefined): this;
        /**
         * Getter for the MinStartTime attribute.
         * @category Attribute setter and getter
         * @returns The MinStartTime attribute.
         */
        getMinStartTime(): BA.BaTime | null | undefined;
        /**
         * Setter for the MaxEndTime attribute.
         * @category Attribute setter and getter
         * @param p The new MaxEndTime or null.
         * @returns The DailyScheduleEntry.
         */
        setMaxEndTime(p: BA.BaTime | null | undefined): this;
        /**
         * Getter for the MinStartTime attribute.
         * @category Attribute setter and getter
         * @returns The MinStartTime attribute.
         */
        getMaxEndTime(): BA.BaTime | null | undefined;
        /**
         * Setter for the snapPeriode attribute.
         * @category Attribute setter and getter
         * @param p The new snapPeriode or null.
         * @returns The DailyScheduleEntry.
         */
        setSnapPeriode(p: number | null | undefined): this;
        /**
         * Getter for the snapPeriode attribute.
         * @category Attribute setter and getter
         * @return The snapPeriode attribute.
         */
        getSnapPeriode(): number | null | undefined;
        /**
         * Setter for the State attribute.
         * @category Attribute setter and getter
         * @param p The new State or null.
         * @returns The DailyScheduleEntry.
         */
        setState(p: BA.SchedEntryState | null | undefined): this;
        /**
         * Processor for the State attribute.
         * @category Attribute setter and getter
         */
        protected __processState(): void;
        /**
         * Getter for the State attribute.
         * @category Attribute setter and getter
         * @return The State attribute.
         */
        getState(): number | null | undefined;
        /**
         * Setter for the DataType attribute.
         * @category Attribute setter and getter
         * @param p The DataType of the schedule entry or null.
         * @returns The DailyScheduleEntry.
         */
        setDataType(p: DataType | null | undefined): this;
        /**
         * Processor for the DataType attribute.
         * @category Attribute setter and getter
         */
        protected __processDataType(): void;
        /**
         * Getter for the DataType attribute.
         * @category Attribute setter and getter
         * @returns The DataType attribute.
         */
        getDataType(): DataType | null | undefined;
        /**
         * Setter for the value attribute.
         * @category Attribute setter and getter
         * @param p The value of the schedule entry.
         * @returns The DailyScheduleEntry.
         */
        setValue(p: BA.ClassValue | null | undefined): this;
        /**
         * Processor for the value attribute.
         * @category Attribute setter and getter
         */
        protected __processValue(): void;
        /**
         * Getter for the value attribute.
         * @category Attribute setter and getter
         * @returns The value attribute.
         */
        getValue(): BA.ClassValue | null | undefined;
        /**
         * Setter for the orientation attribute.
         * @category Attribute setter and getter
         * @param p The new orientation or null.
         * @returns The DailyScheduleEntry.
         */
        setOrientation(p: Orientation | null | undefined): this;
        /**
         * Processor for the Orientation attribute.
         * @category Attribute setter and getter
         */
        protected __processOrientation(): void;
        /**
         * Getter for the orientation attribute.
         * @category Attribute setter and getter
         * @returns The orientation attribute.
         */
        getOrientation(): Orientation | null | undefined;
        /**
         * Setter for the allowMoving attribute.
         * @category Attribute setter and getter
         * @param p The new allowMoving value or null.
         * @returns The DailyScheduleEntry.
         */
        setAllowMoving(p: boolean | null | undefined): this;
        /**
         * Processor for the allowMoving attribute.
         * @category Attribute setter and getter
         */
        protected __processAllowMoving(): void;
        /**
         * Getter for the allowMoving attribute.
         * @category Attribute setter and getter
         * @returns The allowMoving attribute.
         */
        getAllowMoving(): boolean | null | undefined;
        /**
         * Setter for the StateColors attribute.
         * @category Attribute setter and getter
         * @param p The new StateColors value or null.
         * @returns The DailyScheduleEntry.
         */
        setStateColors(p: DailyScheduleEntry.IStateColors | null | undefined): this;
        /**
         * Processor for the StateColors attribute.
         * @category Attribute setter and getter
         */
        protected __processStateColors(): void;
        /**
         * Getter for the StateColors attribute.
         * @category Attribute setter and getter
         * @returns The StateColors attribute.
         */
        getStateColors(): DailyScheduleEntry.IStateColors | null | undefined;
        protected __processReadOnly(): void;
    }
    namespace DailyScheduleEntry {
        interface IAttributes extends ValueField.IAttributes<any> {
            /** Start time of the entry. */
            startTime?: BA.BaTime | null;
            /** Minimum start time of the entry. */
            minStartTime?: BA.BaTime | null;
            /** Maximum end time of the entry. */
            maxEndTime?: BA.BaTime | null;
            /** End time of the entry. */
            endTime?: BA.BaTime | null;
            /** Displayed orientation of the entry. */
            orientation?: Orientation | null;
            /** Flag that identifies if the entry is allowed to move or not. */
            allowMoving?: boolean | null;
            /** The size that represents one second. */
            offset?: number | null;
            /** Periode to which the time should snap while editing the entry. */
            snapPeriode?: number | null;
            /** State of the entry. */
            state?: BA.SchedEntryState | null;
            /** State color for different values. */
            stateColors?: IStateColors | null;
            unionValue?: BA.ClassValue | null;
            dataType?: DailyScheduleEntry.DataType | null;
        }
        enum DailyScheduleEntryEvents {
            onEntryDeleted = "onEntryDeleted",
            onValueChanged = "onValueChanged",
            onStateChanged = "onStateChanged",
            onStartTimeChanged = "onStartTimeChanged",
            onEndTimeChanged = "onEndTimeChanged"
        }
        type DataType = DataType.number | DataType.boolean | DataType.enum;
        /**
         * The minimum amount of seconds for the entry.
         * @category Internal
         */
        const minSeconds = 0;
        /**
         * The maximum amount of seconds for the entry. Maximum time is 23:59:59
         * @category Internal
         */
        const maxSeconds: number;
        interface IAnalogStateColorStep {
            color: Color.RGBAColor;
            start: number;
        }
        interface IStateColors {
            analog: IAnalogStateColorStep[];
            binary: {
                true: Color.RGBAColor;
                false: Color.RGBAColor;
            };
            multistate: Color.RGBAColor[];
        }
        let StateColors: IStateColors;
    }
}
//# sourceMappingURL=DailyScheduleEntry.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    class WeeklySchedule extends Base implements BaObjectHandler.IUsesBaObject {
        constructor(id: string, parent?: IBaseNode | null);
        baObjectHandler: BaObjectHandler;
        protected __attrHandler: AttributeHandler<WeeklySchedule.IAttributes>;
        private __daySchedules;
        private __loadEntriesFromBaObject;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        processBaObject(): void;
        /**
         * Made changes to the schedule entries will be reset to the last collection of setted entries by using setScheduleEntries().
         * @cateory Public
         */
        resetChanges(): void;
        /**
         * Save made changes by writing it to the BA.
         * @cateory Public
         */
        writeToPlc(): Promise<boolean>;
        /**
         * Identifies if the WeeklySchedule has changes since the last reset.
         * @cateory Public
         */
        hasChanges(): boolean;
        /**
         * If set to false the schedule will not load the aWeek variable from the BaObject.
         */
        set LoadEntriesFromBaObject(load: boolean);
        setAttributes(attr: WeeklySchedule.IAttributes): this;
        getAttributes(): WeeklySchedule.IAttributes;
        /**
         * Setter for the schedulrEntries attribute.
         * @category Attribute setter and getter
         * @param p The new scheduleEntries or null.
         * @returns The WeeklySchedule.
         */
        setScheduleEntries(p: BA.SchedWeek | null | undefined): this;
        /**
         * Getter for the scheduleEntries attribute.
         * @category Attribute setter and getter
         * @returns The scheduleEntries attribute.
         */
        getScheduleEntries(): BA.SchedWeek | null;
        /**
         * Setter for the StartDate attribute.
         * @category Attribute setter and getter
         * @param p The new StartDate or null.
         * @returns The WeeklySchedule.
         */
        setStartDate(p: Date | null | undefined): this;
        /**
         * Getter for StartDate attribute.
         * @category Attribute setter and getter
         * @returns The StartDate attribute.
         */
        getStartDate(): Date | null | undefined;
        /**
         * Setter for the DataType attribute.
         * @category Attribute setter and getter
         * @param p The new DataType or null.
         * @returns The WeeklySchedule.
         */
        setDataType(p: DataType | null | undefined): this;
        /**
         * Getter  for the DataType attribute.
         * @category Attribute setter and getter
         * @returns The DataType attribute.
         */
        getDataType(): DataType | null | undefined;
        /**
         * Setter for the snapPeriode attribute.
         * @category Attribute setter and getter
         * @param p The new snapPeriode or null.
         * @returns The WeeklySchedule.
         */
        setSnapPeriode(p: number | null | undefined): this;
        /**
         * Getter for snapPeriode attribute.
         * @category Attribute setter and getter
         * @returns The snapPeriode attribute.
         */
        getSnapPeriode(): number | null | undefined;
        /**
         * Setter for the activeText attribute.
         * @category Attribute setter and getter
         * @param p The new activeText or null
         * @returns The WeeklySchedule.
         */
        setActiveText(p: string | null | undefined): this;
        /**
         * Getter for the activeText attribute.
         * @category Attribute setter and getter
         * @returns The activeText attribute.
         */
        getActiveText(): string | null | undefined;
        /**
         * Setter for the inactiveText attribute.
         * @category Attribute setter and getter
         * @param p The new inactiveText or null.
         * @returns The WeeklySchedule.
         */
        setInactiveText(p: string | null | undefined): this;
        /**
         * Getter for the inactiveText attribute.
         * @category Attribute setter and getter
         * @returns The inactiveText attribute.
         */
        getInactiveText(): string | null | undefined;
        /**
         * Setter for the unit attribute.
         * @category Attribute setter and getter
         * @param p The new unit or null.
         * @returns The WeeklySchedule.
         */
        setUnit(p: string | BA.Unit | null | undefined): this;
        /**
         * Getter for the unit attribute.
         * @category Attribute setter and getter
         * @returns The unit attribute.
         */
        getUnit(): string | null | undefined;
        /**
         * Setter for the stateTexts attribute.
         * @category Attribute setter and getter
         * @param p The new stateTexts or null.
         * @returns The WeeklySchedule.
         */
        setStateTexts(p: Combobox.IItem<number>[] | null | undefined): this;
        /**
         * Getter for the stateText attribute.
         * @category Attribute setter and getter
         * @returns The stateTexts attribute.
         */
        getStateTexts(): Combobox.IItem<number>[] | null | undefined;
        /**
         * Setter for the orientation attribute.
         * @category Attribute setter and getter
         * @param p The new orientation or null.
         * @returns The WeeklySchedule.
         */
        setOrientation(p: Orientation | null | undefined): this;
        /**
         * Processor for the Orientation attribute.
         * @category Attribute setter and getter
         */
        protected __processOrientation(): void;
        /**
         * Getter for the orientation attribute.
         * @category Attribute setter and getter
         * @returns The orientation attribute.
         */
        getOrientation(): Orientation | null | undefined;
        /**
         * Setter for the StateColors attribute.
         * @category Attribute setter and getter
         * @param p The new StateColors or null.
         * @returns The DailySchedule.
         */
        setStateColors(p: DailyScheduleEntry.IStateColors | null | undefined): this;
        /**
         * Getter for the StateColors attribute.
         * @category Attribute setter and getter
         * @returns The StateColors attribute.
         */
        getStateColors(): DailyScheduleEntry.IStateColors | null | undefined;
        /**
        * Setter for the MaximumEntryCount attribute.
         * @category Attribute setter and getter
        * @param p The new MaximumEntryCount or null.
        * @returns The DailySchedule.
        */
        setMaximumEntryCount(p: number | null | undefined): this;
        /**
         * Getter for the MaximumEntryCount attribute.
         * @category Attribute setter and getter
         * @returns The MaximumEntryCount attribute.
         */
        getMaximumEntryCount(): number | null | undefined;
        /**
         * Setter for the DisplayTimeCursor attribute.
         * @category Attribute setter and getter
         * @param p The new DisplayTimeCursor or null.
         * @returns The WeeklySchedule.
         */
        setDisplayTimeCursor(p: boolean | null | undefined): this;
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
        * @returns The DailySchedule.
        */
        setCurrentDateTime(p: Date | null | undefined): this;
        /**
         * Processor for the CurrentDateTime attribute.
         * @category Attribute setter and getter
         */
        protected __processCurrentDateTime(): void;
        /**
         * Getter for the CurrentDateTime attribute.
         * @category Attribute setter and getter
         * @returns The CurrentDateTime attribute.
         */
        getCurrentDateTime(): Date | null | undefined;
        protected __processReadOnly(): void;
    }
    namespace WeeklySchedule {
        interface IAttributes extends Base.IAttributes {
            startDate?: Date | null;
            /** Displayed orientation of the entry. */
            orientation?: Orientation | null;
            /** Defines if the time cursor is displayed or not. */
            displayTimeCursor?: boolean | null;
            /** The current date and time which is displayed with the time cursor if displayTimeCursor is true. */
            currentDateTime?: Date | null;
            /** Text of the label which is displayed when the state of an entry is true. */
            activeText?: string | null;
            /** Text of the label which is displayed when the state of an entry is false. */
            inactiveText?: string | null;
            /** State texts to be used for the entries of the comboboxes. */
            stateTexts?: Combobox.IItem<number>[] | null;
            /** Unit which will be displayed in the entries. */
            unit?: string | null;
        }
        enum WeeklyScheduleEvents {
            onDataChanged = "onDataChanged"
        }
        /**
         * Minimum size of an schedule entry in seconds.
         * Default is 1800 (30 minutes)*/
        const MinEntryTime = 1800;
        /**
         * The default orientation of the schedule. This will be applied if no orientation was set.
         * Default is horizontal.
         */
        let DefaultOrientation: Orientation;
    }
}
//# sourceMappingURL=WeeklySchedule.d.ts.map
declare namespace TcHmi.BuildingAutomation {
    /**
     * Handles the attributes of a class.
     * It can validate different attributes and print certain logs.
     * Always use it with the type {@link AttributeHandler}, e.g.:
     * ```ts
     * protected __attrHandler: AttributeHandler<IMyAttributes> = new AttrHandler<IMyAttributes>(owner);
     * ```
     * @typeparam A The interface of the attributes.
     */
    class AttrHandler<A extends object> {
        /**
         * Creates a new instance of the AttrHandler.
         * @param owner The class that uses the AttrHandler.
         */
        constructor(owner: Logger.ILogger);
        /** The owner of the AttrHandler */
        private __owner;
        /**
         * Get a reference to all attributes.
         * @returns A reference to the attributes object.
         */
        getRef(): A;
        /**
         * Get a copy of all attributes. (No reference)
         * @returns A copy of the attributes object.
         */
        getCopy(): A;
        /**
         * Console out a warning for an invalid attribute value.
         * @param attrName Name of the attribute.
         */
        invalidAttribute(attrName: string, val: any): void;
        /**
         * Console out a log for an equal attribute value.
         * @param attrName Name of the attribute value.
         * @param val The value which is equal to the old value.
         */
        equalAttribute(attrName: string, val?: any): void;
        /**
         * Tests the attribute against the validators and checks equality.
         * @param p The attribute to test.
         * @param name Name of the property in the IAttributes object. Also used for the resulting log.
         * @param opt Settings for the attribute check.
         * @returns True if the validators succeed and (If equalityCheck is true: p and oldP are unequal), otherwise false.
         */
        checkAttribute<K extends keyof A>(p: any, name: K, opt?: Logger.IAttributeCheckOptions): p is A[K] | null;
        /**
         * Tests the attribute against the RGBAColor validator.
         * @param p The attribute to test.
         * @param opt Settings for the attribute check.
         * @returns True if the validators succeed (If equalityCheck is true: p and oldP are unequal), otherwise false.
         */
        checkColorAttribute<K extends keyof A>(p: any, name: K, opt?: Partial<Logger.IAttributeCheckOptions>): p is RGBAColor | Color.ILinearGradient | null;
        /**
         * Checks the equality of two values and prints out a log if they are equal.
         * @param a First value.
         * @param b Second value.
         * @param name The name of the property which will be used for the log.
         * @returns True if the values are equal, otherwise false.
         */
        checkEquality(a: any, b: any, name: string): boolean;
    }
    namespace AttrHandler {
        /**
         * Converts an object to an instance of {@link Color.RGBAColor}. If an instance of {@link Color.RGBAColor} was already passed, this instance is returned.
         * @param p The object to be converted.
         * @returns The instance of the {@link Color.RGBAColor} or null if null was passed.
         */
        function convertToRGBAColor(p: Color.RGBAColor | RGBAColor | null): Color.RGBAColor | null;
        /**
         * Converts an object to an instance of {@link Color.LinearGradient}. If an instance of {@link Color.LinearGradient} was already passed, this instance is returned.
         * @param p The object to be converted.
         * @returns The instance of the {@link Color.LinearGradient} or null if null was passed.
         */
        function convertToLinearGradient(p: Color.LinearGradient | Color.ILinearGradient | null): Color.LinearGradient | null;
        /**
         * Converts an object to an instance of {@link Color.RGBAColor} or {@link Color.LinearGradient}. If an instance of  {@link Color.RGBAColor} or {@link Color.LinearGradient} was already passed, this instance is returned.
         * @param p The object to be converted.
         * @returns The instance of the {@link Color.RGBAColor} or {@link Color.LinearGradient} or null if null was passed.
         */
        function convertToColor(p: Color.RGBAColor | Color.LinearGradient | RGBAColor | Color.ILinearGradient | null): Color.RGBAColor | Color.LinearGradient | null;
    }
    /**
     * Type which join the attributes of a class with the {@link AttrHandler} class.
     * Always use it with the class {@link AttributeHandler}, e.g.:
     * ```ts
     * protected __attrHandler: AttributeHandler<IMyAttributes> = new AttrHandler<IMyAttributes>(owner);
     * ```
     * @typeparam A The interface of the attributes.
     */
    type AttributeHandler<A extends object> = A & AttrHandler<A>;
}
//# sourceMappingURL=AttributeHandler.d.ts.map
declare namespace TcHmi.BuildingAutomation {
    /**
     * Class that manages the handling of a BaInterface.
     */
    class BaInterfaceHandler<T extends BaInterfaceHandler.IBaInterfaceStructure> {
        constructor(parent: BaInterfaceHandler.IUsesBaInterface<T>);
        /**
         * The parent class which holds the instance of the BaInterfaceHandler.
         * @category Internal
         */
        private __parent;
        /**
         * Stores BaInterface symbols and a watch destroy function for the symbol.
         * @category Internal
         */
        private __baInterfaceWatches;
        /**
         * The connected BaInterface symbol.
         * @category Internal
         */
        private __baInterfaceSym;
        /**
         * The BaInterface definition.
         * @category Internal
         */
        private __baInterfaceDefinition;
        /**
         * The BaInterface symbol names.
         * @category Internal
         */
        private __baInterfaceSymNames;
        /**
         * The complete BaInterface. Can have multiple symbol names per property.
         * @category Internal
         */
        private __baInterface;
        /**
         * The validated complete BaInterface. Can only have one symbol name per property.
         * @category Internal
         */
        private __baInterfaceValidated;
        /**
         * The schema of the connected BaInterface.
         * @category Internal
         */
        private __schema;
        /**
         * Processor function which will be raised when BaInterface validation was successfull.
         * @category Internal
         */
        private __processor;
        /**
         * Use to log different messages to the console, to check attributes or result objects.
         * @category Internal
         */
        logger: Logger;
        /**
         * Creates a symbol and a watch for a sub symbol.
         * @category Public
         * @param prop The property to be watched.
         * @param cb Method that will be called when the value has changed.
         * @param setBusy (Default true) If true the parent control will be set to busy when the variable is read the first time.
         */
        watchSubSymbol<K extends keyof T>(prop: K, cb: (val: T[K] | null | undefined) => void, setBusy?: boolean): void;
        /**
         * Writes a value to a sub symbol.
         * @category Public
         * @param prop The property to be written.
         * @param newVal The new value that will be written.
         */
        writeSubSymbol<K extends keyof T>(prop: K, newVal: T[K]): Promise<Symbol.IWriteResultObject<T[K]>>;
        /**
         * Get the schema of the sub symbol of the BaInterface.
         * @category Public
         * @param prop The name of the property that will be checked.
         * @returns The schema of the sub symbol or null if no sub symbol was found.
         */
        getSubSymbolSchema<K extends keyof T>(prop: K): JsonSchema | null;
        /**
         * Checks if the current BaInterface symbol has a certain sub symbol.
         * @category Public
         * @param prop The name of the property that will be checked.
         * @returns True if the sub symbol exists, otherwise false.
         */
        hasSubSymbol<K extends keyof T>(prop: K): boolean;
        /**
         * Checks if the current BaInterface symbol has a certain sub symbol with a certain type.
         * @category Public
         * @param prop The name of the property that will be checked.
         * @param type The type that the sub symbol should have.
         * @returns True if the sub symbol exists and has the given type, otherwise false.
         */
        subSymbolHasType<K extends keyof T>(prop: K, type: JsonDataTypeNames): boolean;
        /**
         * Get the sub symbol of the BaInterface.
         * @category Public
         * @param prop The name of the property for the sub symbol.
         * @returns The sub symbol of the BaInterface for the requested property.
         */
        getSubSymbol<K extends keyof T>(prop: K): Symbol<T[K]> | null;
        /**
         * Get the symbol expression of a sub symbol.
         * @param prop The property whose symbol expression is requested.
         * @returns The requested sub symbol expression.
         */
        getSubSymbolExpression<K extends keyof T>(prop: K): SymbolExpression | undefined;
        /**
         * Updates the symbol names of the BaInterface.
         * @category Public
         * @param p The new symbol names.
         */
        private __updateSymbolNames;
        /**
         * Destroys the BaInterfaceHandler
         * @category Public
         */
        destroy(): void;
        /**
         * Sets the BaInterfaceSym attribute.
         * @category Attribute setter
         * @param p New BaInterface or null.
         * @param processor The processor function which will be invoked once all validation of the BaInterface was successfull.
         * @returns Returns the BaInterfaceHandler.
         */
        setBaInterfaceSym(p: BaInterfaceHandler.BaInterfaceSymbol<T> | null | undefined, processor: BaInterfaceHandler.BaInterfaceProcessor<T>): BaInterfaceHandler<T>;
        /**
         * Processor for the BaInterfaceSym attribute.
         * @category Internal
         */
        protected __processBaInterfaceSym(): void;
        /**
         * Gets the BaInterfaceSym attribute.
         * @category Attribute getter
         * @returns Returns the BaInterface attribute.
         */
        getBaInterfaceSym(): BaInterfaceHandler.BaInterfaceSymbol<T> | null | undefined;
        /**
         * The default BaInterfaceDescription which is only allowed to set once.
         * @category Public
         */
        set baInterfaceDefinition(def: BaInterfaceHandler.BaInterfaceDefinition<T>);
        /**
         * The default BaInterfaceDescription which is only allowed to set once.
         * @category Public
         */
        get baInterfaceDefinition(): BaInterfaceHandler.BaInterfaceDefinition<T>;
        /**
         * The complete BaInterfaceDescription.
         * @category Public
         */
        get baInterfaceDescription(): BaInterfaceHandler.BaInterface<T> | undefined;
        /**
         * The symbol names of the BaInterface.
         * @category Public
         */
        set baInterfaceSymNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<T> | null);
        /**
         * The symbol names of the BaInterface.
         * @category Public
         */
        get baInterfaceSymNames(): BaInterfaceHandler.BaInterfaceSymbolNames<T> | null;
        /**
         * Compares a schema with an BaInterface and creates the validated BaInterface.
         * @category Public
         * @param schema The schema to be validated.
         * @param baInterface BaInterface to be used for validation.
         * @returns True if the schema matches the interface, otherwise false.
         */
        private static validateSchemaAndCreateBaInterface;
        /**
         * Compares a schema with an BaInterface.
         * @category Public
         * @param schema The schema to be validated.
         * @param baInterface BaInterface to be used for validation
         * @returns True if the schema matches the interface, otherwise false.
         */
        static validateSchema<S extends BaInterfaceHandler.BaInterface<S>>(schema: JsonSchema, baInterface: S, logger?: Logger): baInterface is S;
        /**
         * Joins a interface definition and interface symbol names to a BaInterface.
         * @category Public
         * @param def The definition to use.
         * @param symbolNames The symbol names for use.
         * @param logger Optional logger to log warnings.
         * @returns The created BaInterface.
         */
        static joinDefAndDesc<S extends BaInterfaceHandler.IBaInterfaceStructure>(def: BaInterfaceHandler.BaInterfaceDefinition<S>, symbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<S>, logger?: Logger): BaInterfaceHandler.BaInterface<S> | undefined;
        /**
         * Converts the BaInterfaceHandler.BaInterfaceSymbolNames from designer to the correct BaInterfaceHandler.BaInterfaceSymbolNames.
         * @category Public
         * @param p The value from the designer.
         * @returns The correct BaInterfaceHandler.BaInterfaceSymbolNames.
         */
        static convertToBaInterfaceSymbolNames<T extends BaInterfaceHandler.IBaInterfaceStructure>(p: BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | BaInterfaceHandler.BaInterfaceSymbolNames<T>): BaInterfaceHandler.BaInterfaceSymbolNames<T>;
        /**
         * Converts the BaInterfaceHandler.BaInterfaceSymbolNames to the BaInterfaceHandler.BaInterfaceSymbolNames from designer.
         * @category Public
         * @param p The BaInterfaceHandler.BaInterfaceSymbolNames.
         * @returns The BaInterfaceHandler.BaInterfaceSymbolNames for the designer.
         */
        static convertToBaInterfaceSymbolNamesDesigner<T extends BaInterfaceHandler.IBaInterfaceStructure>(p: BaInterfaceHandler.BaInterfaceSymbolNames<T> | null): BaInterfaceHandler.BaInterfaceSymbolNamesDesigner;
        /**
         * Gets the nested property of a JsonSchema.
         * @category Internal
         * @param schema The schema which may include the nested property.
         * @param path The path to the property.
         * @returns The nested property or null if no property was found.
         */
        private static getTargetProp;
        /**
         * Checks if a schema fits to a certain type.
         * @category Internal
         * @param schema The schema to be checked.
         * @param type The type that must fit.
         * @returns True if the schema has the type, otherwise false.
         */
        private static compareType;
    }
    namespace BaInterfaceHandler {
        export interface IUsesBaInterface<I extends BaInterfaceHandler.IBaInterfaceStructure> extends Components.IParent, BusyHandler.IBusyHandler, Components.ErrorIndicator.IErrorIndicator {
            /**
             * Handler for the BaInterface.
             * @category Public
             */
            baInterfaceHandler: BaInterfaceHandler<I>;
            /**
             * Sets the BaInterface attribute.
             * @category Attribute setter
             * @param p New BaInterface or null.
             * @returns Returns the control.
             */
            setBaInterface(p: Symbol | null | undefined): this;
            /**
             * Gets the BaInterface attribute.
             * @category Attribute getter
             * @returns Returns the BaInterface attribute.
             */
            getBaInterface(): Symbol | null | undefined;
            /**
             * Sets the BaInterfaceHandler.BaInterfaceSymbolNames attribute.
             * @category Attribute setter
             * @param p New BaInterfaceHandler.BaInterfaceSymbolNames or null.
             * @returns Returns the control.
             */
            setBaInterfaceSymbolNames(p: BaInterfaceSymbolNamesDesigner | null | undefined): this;
            /**
             * Gets for the BaInterfaceHandler.BaInterfaceSymbolNames attribute.
             * @category Attribute getter
             * @returns Returns the BaInterfaceHandler.BaInterfaceSymbolNames attribute.
             */
            getBaInterfaceSymbolNames(): BaInterfaceSymbolNamesDesigner | null | undefined;
        }
        interface IBaInterfacePropBase {
            type: JsonDataTypeNames | JsonDataTypeNames[];
            optional?: boolean;
        }
        export interface IBaInterfaceProp extends IBaInterfacePropBase {
            symbolName: string | string[];
        }
        export interface IBaInterfacePropValidated extends IBaInterfacePropBase {
            symbolName: string;
        }
        export interface IBaInterfaceStructure {
            [index: string]: any;
        }
        export type BaInterface<T> = {
            [K in keyof T]: IBaInterfaceProp;
        };
        export type BaInterfaceValidated<T> = {
            [K in keyof T]: IBaInterfacePropValidated;
        };
        export type BaInterfaceDefinition<T extends IBaInterfaceStructure> = Record<keyof T, Omit<IBaInterfaceProp, 'symbolName'>>;
        export type BaInterfaceSymbolNames<T extends IBaInterfaceStructure> = {
            [K in keyof T]: Pick<IBaInterfaceProp, 'symbolName'>;
        };
        export type BaInterfaceSymbol<T extends IBaInterfaceStructure> = Symbol<{
            [K in keyof T]: T[K];
        }>;
        export type BaInterfaceProcessor<T extends IBaInterfaceStructure> = (baInterface: BaInterfaceSymbol<T>, baInterfaceDescription: BaInterface<T>) => any;
        export type BaInterfaceSymbolNamesDesigner = {
            [index: string]: string | string[] | null;
        };
        export function isBaInterfaceDefinition<T extends IBaInterfaceStructure>(p: any): p is BaInterfaceDefinition<T>;
        export function isBaInterfaceSymbolNames<T extends IBaInterfaceStructure>(p: any): p is BaInterfaceSymbolNames<T>;
        export {};
    }
}
//# sourceMappingURL=BaInterfaceHandler.d.ts.map
declare namespace TcHmi.BuildingAutomation.Color {
    class RGBAColor implements TcHmi.RGBAColor {
        constructor(color?: TcHmi.RGBAColor | null);
        /** Red (0-255) */
        r: number;
        /** Green (0-255) */
        g: number;
        /** Blue (0-255) */
        b: number;
        /** Alpha (0-1) */
        a: number;
        /**
         * Parses a SolidColor to an RGBAColor.
         * @param p The SolidColor to parse.
         * @returns The created RGBAColor or null if the string was not valid.
         */
        static fromSolidColor(p: SolidColor | null | undefined): RGBAColor | null;
        /**
         * Parses a css string to an RGBAColor.
         * Only rgb(), rgba() or # are allowed. Colors like 'red' or 'green' cannot be parsed.
         * @param p The string to be parsed.
         * @returns The created RGBAColor or null if the string was not valid.
         */
        static fromCssString(p: string): RGBAColor;
        static fromHexString(hex: string): RGBAColor;
        /**
         * Convert RGBAColor into a string to use it for css styles (e.g. 'rgba(255, 100, 0, 1')).
         * @returns The css string.
         */
        toString(): string;
        /**
         * Convert the RGBAColor to a TcHmi solid color.
         * @returns The TcHmi solid color.
         */
        toSolidColor(): SolidColor;
    }
    namespace RGBAColor {
        const Black: RGBAColor;
        const Gray: RGBAColor;
        const MetallicSilver: RGBAColor;
        const White: RGBAColor;
        const Red: RGBAColor;
        const Blue: RGBAColor;
        const Goldenrod: RGBAColor;
        const Yellow: RGBAColor;
        const CornYellow: RGBAColor;
        const Cantaloupe: RGBAColor;
        const Gold: RGBAColor;
        const DarkOrange: RGBAColor;
        const FirebrickRed: RGBAColor;
        const PurpurRed: RGBAColor;
        const RedFox: RGBAColor;
        const ChilliPepper: RGBAColor;
        const LimeGreen: RGBAColor;
        const GreenApple: RGBAColor;
        const Green: RGBAColor;
        const DarkSeaGreen: RGBAColor;
        const LightSkyBlue: RGBAColor;
        const PowderBlue: RGBAColor;
        const PlumVelvet: RGBAColor;
        const BurntPink: RGBAColor;
        const MediumTurquoise: RGBAColor;
        /** The TcHmi blue which is used in many themes. */
        const TcHmiBlue: RGBAColor;
        const TcHmiGreen: RGBAColor;
    }
    class LinearGradient implements ILinearGradient {
        constructor(grad?: ILinearGradient);
        direction: number | string;
        type: GradientType;
        stops: IGradientStop[];
        /**
         * Convert RGBAColor into a string to use it for css styles (e.g. 'rgba(255, 100, 0, 1')).
         * @returns The css string.
         */
        toString(): string;
    }
    enum GradientType {
        invalid = -1,
        linear = 0,
        repeatingLinear = 1,
        radial = 2
    }
    interface IGradientStop {
        /** Color of the stop. */
        color: RGBAColor | TcHmi.RGBAColor;
        /** Position of the stop. */
        stop: number;
        /** Unit of the stop, default is 'px'. */
        stopUnit?: DimensionUnit;
    }
    /**
     * Validates the interface 'IGradientStop'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isIGradientStop(p: any): p is IGradientStop;
    interface IGradient {
        /** Type of the gradient. */
        type?: GradientType;
        /** The different color stops of the gradient. */
        stops: IGradientStop[];
    }
    interface ILinearGradient extends IGradient {
        /** Direction of the gradient. */
        direction: number | string;
    }
    /**
     * Validates the interface 'ILinearGradient'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isILinearGradient(p: any): p is ILinearGradient;
    interface IFourSidedColor {
        left: RGBAColor | null;
        top: RGBAColor | null;
        right: RGBAColor | null;
        bottom: RGBAColor | null;
    }
    /**
     * Validates the interface 'IFourSidedColor'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isIFourSidedColor(p: any): p is IFourSidedColor;
    /**
     * Validates the interface 'RGBAColor'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isRGBAColor(p: any): p is TcHmi.RGBAColor;
    /**
     * Validates the interface 'IFourSidedString'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isSolidColor(p: any): p is SolidColor;
    /** HSL color */
    interface HSLColor {
        /** Hue 0-1 */
        h: number;
        /** Saturation 0-1 */
        s: number;
        /** Lightness 0-1 */
        l: number;
    }
    /**
     * @param idx Index to select different colors.
     * @returns The hex code for the color to use in CSS.
     */
    function getPastelColor(idx: number): RGBAColor;
    /**
     * Converts a HSV color into an RGB color.
     * @param hue Range from 0-360.
     * @param saturation Range from 0-1.
     * @param value Range from 0-1.
     */
    function convertHSVToRGB(hue: number, saturation: number, value: number): number[];
    /**
     * Calculates a color value between a start and a end color to a certain value.
     * @param startColor Color when the value is equals startValue.
     * @param startValue The value for the start color.
     * @param endColor Color when the value is equals the endValue.
     * @param endValue The value for the end color.
     * @param value The value whose corresponding color to be calculated.
     */
    function getFadeColor(startColor: RGBAColor, startValue: number, endColor: RGBAColor, endValue: number, value: number): RGBAColor;
}
//# sourceMappingURL=Color.d.ts.map
declare namespace TcHmi.BuildingAutomation {
    namespace BA {
        class BaTime implements IBaTime {
            constructor(time?: IBaTime | null);
            nHour: number;
            nMinute: number;
            nSecond: number;
            static fromSeconds(seconds: number): BaTime;
            static fromDate(date: Date): BaTime;
            fromSeconds(seconds: number): BaTime;
            toSeconds(): number;
            toDate(): Date;
            toString(format?: BaTime.TimeStringFormat): string;
            toIBaTime(): IBaTime;
            compare(com: IBaTime): -1 | 0 | 1;
            equals(com: IBaTime | undefined | null): boolean;
            /**
             * Snaps the time to a certain periode (in seconds).
             * @param seconds Defines the size of the snap periode in seconds.
             */
            snapToPeriode(seconds: number): BaTime;
            /**
             * Adds seconds to the BaTime.
             * @param seconds The amount of seconds to be added to the BaTime.
             */
            addSeconds(seconds: number): BaTime;
            /**
             * Subtracts seconds to the BaTime.
             * @param seconds The amount of seconds to be subtracted to the BaTime.
             */
            subtractSeconds(seconds: number): BaTime;
        }
        namespace BaTime {
            enum TimeStringFormat {
                /** Time string in HH:MM format. */
                minutes = 0,
                /** Time string in HH:MM:SS format. */
                seconds = 1,
                /** Time string in HH:MM:SS.000Z format. */
                milliSeconds = 2
            }
        }
        class BaDate implements IBaDate {
            constructor(date?: IBaDate | null);
            nYear: number;
            eMonth: Month;
            nDay: Day;
            eDayOfWeek: Weekday;
            toDate(): Date;
            static fromDate(date: Date): BaDate;
            /** Converts the date into string with format "YYYY-MM-DD". */
            toString(format?: BaDate.Format): string;
        }
        namespace BaDate {
            /** Defines the offset year of a BaDate (nYear = 120 <=> 2020). */
            const YearOffset = 1900;
            /** Defines the value of an unspecified year in BACnet. */
            const YearUnspecified = 255;
            enum Format {
                /** DD.MM.YYYY */
                din1355_1 = 0,
                /** YYYY-MM-DD */
                din5008 = 1,
                /** D. Month YYYY */
                din5008_long = 2,
                /** D. Mon. YYYY */
                din5008_short = 3
            }
        }
        class BaDateTime implements IBaDateTime {
            constructor(dateTime?: IBaDateTime | null);
            stDate: BaDate;
            stTime: BaTime;
            toDate(): Date;
            static fromDate(dateTime: Date): BaDateTime;
            /** Converts BaDateTime to string in format "YYYY-MM-DDTHH:MM:SS.000Z". */
            toString(): string;
        }
    }
    namespace Helper {
        namespace DateTime {
            /**
             * Gets the start and end day of the current week.
             * @param weekday Defines if the week should start on monday or sunday.
             * @returns The start and end of the current week as Dates.
             */
            function getCurrentWeek(weekday?: 'Monday' | 'Sunday'): IDateRange;
            /**
             * Creates a string in format HH:MM.
             * @param baTime The BaTime.
             * @returns The created time as string in format HH:MM.
             */
            function createTimeString(baTime: BA.IBaTime | null | undefined): string;
            /**
             * Converts seconds to BaTime.
             * @param seconds The seconds.
             * @returns The BaTime.
            */
            function convertSecondsToSTTime(seconds: number): BA.IBaTime;
            /**
             * Converts BaTime to seconds.
             * @param baTime The BaTime.
             * @returns The seconds.
             */
            function convertSTTimeToSeconds(baTime: BA.IBaTime): number;
            /**
             * Converts BaTime to Date.
             * @param baTime The BaTime.
             * @returns The Date.
             */
            function convertBaTimeToDate(baTime: BA.IBaTime): Date;
            /**
             * Converts Date to BaTime.
             * @param date The Date.
             * @returns The BaTime.
             */
            function convertDateToBaTime(date: Date): BA.IBaTime;
            /**
             * Converts BaTime to string in format HH:MM:SS.000Z.
             * @param baTime The BaTime.
             * @returns The BaTime as in format HH:MM:SS.000Z.
             */
            function convertBaTimeToString(baTime: BA.IBaTime): string;
            /**
             * Converts Date to string in format YYYY-MM-DD.
             * @param date The Date.
             * @returns The Date as string in format YYYY-MM-DD.
             */
            function convertBaDateToString(date: BA.IBaDate): string;
            /**
             * Converts BaDate to Date.
             * @param baDate The BaDate.
             * @returns The Date.
             */
            function convertBaDateToDate(baDate: BA.IBaDate): Date;
            /**
             * Converts BaDateTime to a Date.
             * @param baDateTime The BaDateTime.
             * @returns The Date.
             */
            function convertBaDateTimeToDate(baDateTime: BA.IBaDateTime): Date;
            /**
             * Converts Date to BaDateTime.
             * @param date The Date.
             * @returns The BaDateTime.
             */
            function convertDateToBaDateTime(date: Date): BA.IBaDateTime;
            /**
             * Converts DateTime to string in format YYYY-MM-DDTHH:MM:SS.000Z.
             * @param dateTime The DateTime.
             * @returns The Time as string in format YYYY-MM-DDTHH:MM:SS.000Z.
             */
            function convertBaDateTimeToString(dateTime: BA.IBaDateTime): string;
            /**
             * Converts time stamp of format HH:MM:SS to seconds.
             * @param timeStamp
             * @returns The seconds.
             */
            function convertTimeStampToSeconds(timeStamp: string): number;
            /**
             * Converts days to milliseconds.
             * @param days The days.
             * @returns The milliseconds.
             */
            function convertDaysToMilliseconds(days: number): number;
            /**
             * Converts milliseconds to days (without decimal).
             * @param milliseconds The milliseconds.
             * @returns The days.
             */
            function convertMillisecondsToDays(milliseconds: number): number;
            /**
             * Compares two BaTime values.
             * @param a First time value.
             * @param b Second time value.
             * @returns -1 if 'a' is smaller, 1 if 'a' is bigger and 0 if equal.
             */
            function compareBaTime(a: BA.IBaTime, b: BA.IBaTime): -1 | 0 | 1;
        }
        namespace Date {
            /** Defines the maximum days of a week. */
            const WeekdaysMax = 7;
            /** Defines the maximum days of a month. */
            const DaysMax = 31;
            /** Defines the maximum months of a year. */
            const MonthsMax = 12;
            /**
             * Gets weekday from Date.
             * @param date The Date.
             * @returns The weekday.
             */
            function getWeekday(date: Date): number;
            /**
             * Gets maximum number of weeks of set month.
             * @param date The Date.
             * @param dowStart Start day of the week (default: 1 - monday).
             * @returns The number of weeks. 0 on failure.
             */
            function getWeeksOfMonth(date: Date, dowStart?: number): number;
            /**
             * Gets maximum number of days of set month.
             * @param date The Date.
             * @returns The number of days. 0 on failure.
             */
            function getMaxDaysOfMonth(date: Date | {
                month: number;
                year?: number;
            }): number;
            /**
             * Adjusts day of week from 0 (Sa) - 6 (Su) to 1 (Mo) - 7 (Sa).
             * @param dow The day of week from Date.getDay().
             * @returns The adjusted day of week.
             */
            function adjustDayOfWeek(dow: number): number;
            /**
             * Validates day of week.
             * @param dow The day of week.
             * @returns The validated day of week.
             */
            function validateDow(dow: number | null | undefined): BA.Weekday;
            /**
             * Validates a Date.
             * @param date The Date.
             * @returns True if the input is valid and false if not.
             */
            function isDate(date: Date | number | string | {
                day: number;
                month: number;
                year: number;
            } | null | undefined): boolean;
        }
    }
    interface IDateRange {
        start: Date;
        end: Date;
    }
}
//# sourceMappingURL=DateTime.d.ts.map
declare namespace TcHmi.BuildingAutomation.Helper {
    /**
     * Contains functions to make a JQuery element dragable.
     */
    namespace DragableElement {
        enum DragableElementEvents {
            onElementMoved = "onElementMoved"
        }
        /** Options for a dragable element. */
        interface Options {
            /** The element is only dragable within this container. When no limiting container is set, the element can be moved outside the borders of the visible browser window. */
            limitingContainer?: JQuery;
            /** The minimum top position if the limiting container is set. If negative, the element can be moved outside of the limiting container. */
            minTopDistance?: number | null;
            /** The maximum bottom position if the limiting container is set. If negative, the element can be moved outside of the limiting container. */
            minBottomDistance?: number | null;
            /** The minimum left position if the limiting container is set. If negative, the element can be moved outside of the limiting container. */
            minLeftDistance?: number | null;
            /** The maximum right position if the limiting container is set. If negative, the element can be moved outside of the limiting container. */
            minRightDistance?: number | null;
            /** Define if vertical movement should be allowed. */
            allowVerticalMovement?: boolean | null;
            /** Define if horizontal movement should be allowed. */
            allowHorizontalMovement?: boolean | null;
        }
        /**
         * Makes a JQuery element tragable.
         * @param element The element that should be dragable.
         * @param target The target which is used for the mouse / touch events.
         * @param options
         */
        function makeDragable(element: JQuery | Components.Base, target?: JQuery, options?: DragableElement.Options): void;
        /**
         * Resets dragable functionallity of an JQuery element.
         * @param element The element that should not longer be dragable.
         * @param target The target which is used for the mouse / touch events.
         */
        function resetDragable(element: JQuery | Components.Base, target?: JQuery): void;
    }
}
//# sourceMappingURL=DragableElement.d.ts.map
declare namespace TcHmi.BuildingAutomation {
    /**
     * A wrapper class that handles registering and raising of events using the EventProvider
     */
    class EventHandler<TOwner extends IEventHandler> {
        /**
         * Creates a new EventHandler instance.
         * @param owner The owner of the EventHandler. The id of the owner will be used for the raised and registered events.
         */
        constructor(owner: TOwner);
        /**
         * The owner of the EventHandler.
         * @category Internal
         */
        private __owner;
        /**
         * Register a callback to an event name.
         * If the name is a binding expression the callback will be initially called if there is a binding with this name.
         * @category Public
         * @param evt Name of the event.
         * @param cb Callback which will be called
         * @returns Destroy function which cleans up/unregisters
         */
        register(evt: string, cb: (e: EventProvider.Event, owner: TOwner, ...args: any[]) => void): DestroyFunction;
        /**
         * Calls all registered callbacks related to an event name.
         * @category Public
         * @param name Name of the event.
         * @param ...args optional parameter(s) which will be transfered to the callbacks
         */
        raise(evt: string, ...args: any[]): void;
    }
    interface IEventHandler extends IHasId {
        /** The event handler to raise and register events. */
        eventHandler: EventHandler<any>;
    }
    /**
     * Validates the IEventHandler interface.
     * @param p The object that should be checked.
     * @returns True if the object is valid, otherwise false.
     */
    function isIEventHandler(p: any): p is IEventHandler;
    namespace EventHandler {
        /**
         * Handler that can be used to stop the propagation of a JQuery event.
         * Usage:
         * ````ts
         * myJQuery.on('pointerdown', EventHandler.stopPropagationHandler);
         * myJQuery.off('pointerdown', EventHandler.stopPropagationHandler);
         * ````
         * @param ev The event whose propagation should be stopped.
         */
        function stopPropagationHandler(ev: JQuery.Event): void;
    }
}
//# sourceMappingURL=EventHandler.d.ts.map
declare namespace TcHmi {
    interface SymbolExpression {
        /**
         * Get the symbol expression for a sub symbol of this expression.
         * @param path The path to the sub symbol (e.g., '::stMySubStruct::bMyVal').
         * @returns The symbol expression for the sub symbol.
         */
        getSubSymbolExpression(path: string): SymbolExpression;
    }
    namespace BuildingAutomation.Helper {
        namespace String {
            /**
             * Replaces a string from a start to an end point.
             * @param start The start position.
             * @param end The end position.
             * @param rplStr The string that should be placed between the start and the end position.
             */
            function replaceEx(str: string, start: number, end: number, rplStr: string): string;
            function toSymbolExpression(str: string, tag: SymbolTag): string;
            function toLanguageKey(str: string): string;
            /**
             * Converts a string which represents a symbol expression (%s%ISP01::Top::...%/s%) to a server mapping (ISP01::Top::...).
             */
            function toServerMapping(str: string): string;
            /**
             * Converts a SymbolExpression to a server mapping (ISP01::Top::...).
             */
            function toServerMapping(symExp: SymbolExpression): string;
            /**
             * Returns a string where all white spaces have been removed.
             */
            function removeAllWhiteSpaces(str: string): string;
            /**
             * Capitalizes the first letter.
             */
            function capitalizeFirstLetter(str: string): string;
            /**
             * Lowercases the first letter.
             */
            function lowercaseFirstLetter(str: string): string;
            /**
             * Checks if the string contains a lower case letter.
            */
            function hasLowerCaseLetter(str: string): boolean;
            /**
             * Checks if the string contains a upper case letter.
            */
            function hasUpperCaseLetter(str: string): boolean;
            /**
             * Checks if the string contains a special character.
             */
            function hasSpecialChar(str: string): boolean;
            /**
             * Checks if string contains a number.
             */
            function hasNumber(str: string): boolean;
            /**
             * Checks if the string only contains numbers.
             */
            function hasOnlyNumbers(str: string): boolean;
            /**
             * Validates if a string is a file path.
             * @param p The path to be checked.
             * @param fileEnding The file ending or file endings to be checked.
             * @retruns True if the string is a file path, otherwise false.
             */
            function validateFilePath(str: any, fileEnding: string | string[]): boolean;
        }
        namespace Number {
            /**
             * Calculates the y value of a linear function to a certain x value.
             * @param yMin YMin value.
             * @param yMax YMax value.
             * @param xMin XMin value.
             * @param xMax XMax value.
             * @param x The x value for which the corresponding y value should be calculated.
             */
            function calcLinearFunctionValue(yMin: number, yMax: number, xMin: number, xMax: number, x: number): number;
            function toPercentage(num: number, min: number, max: number): number;
            /**
             * Snaps the number to a certain periode.
             * @param periode The periode.
             */
            function snapToPeriode(num: number, periode: number): number;
            /**
             * Adds a step to the number until it reaches max. When max is smaller than min it will remove the step until max (which is smaller) is reached.
             * @param min The minium value.
             * @param max The maximum value.
             * @param step The step to be added.
             */
            function addStep(num: number, min: number, max: number, step: number): number;
            /**
             * Removes a step to the number until it reaches min. When max is smaller than min it will add the step until min (which is bigger) is reached.
             * @param min The minium value.
             * @param max The maximum value.
             * @param step The step to be added.
             */
            function removeStep(num: number, min: number, max: number, step: number): number;
        }
        namespace Object {
            function toNumberDictionary(obj: object): Map<number, string>;
            /**
             * Clones an object.
             * @param obj The object to be cloned.
             * @returns The cloned object.
             */
            function clone<T extends object>(obj: T): T;
            /**
             * Merges obj1 into obj2.
             * @param obj1 The object that should be merge into obj2.
             * @param obj2 The resulting object with entries from obj1.
             * @param exclude An array of keys which will not be merged.
             */
            function merge<T extends object>(obj1: T | null | undefined, obj2: Partial<T> | null | undefined, exclude?: string[]): void;
            /**
             * Delete a set of properties from an object.
             * @param obj The object whose properties should be deleted.
             * @param properties The collection of property names to be deleted.
             */
            function deleteProperties(obj: object, properties: string[]): object;
        }
        namespace Array {
            function clone<T>(arr: T[]): T[];
            function verifyEntries(arr: Array<any>): boolean;
            function equals<T>(a: T[], b: any[]): boolean;
            function swapItems<T>(arr: T[], a: number, b: number): T[];
            /**
             * Sorts the array by using a selection sorting algorithm.
             * @param predicate Should return true if a is smaller than b, otherwise false.
             * @returns The sorted array.
             */
            function selectionSort<T>(arr: T[], downwards: boolean, predicate: (a: T, b: T) => boolean): T[];
            /**
             * Sorts the array by using a bubble sorting algorithm.
             * @param predicate Should return true if a is smaller than b, otherwise false.
             * @returns The sorted array.
             */
            function bubbleSort<T>(arr: T[], downwards: boolean, predicate: (a: any, b: any) => boolean): T[];
            /**
             * Sorts the array by using a merge sorting algorithm.
             * @param predicate Should return true if a is smaller than b, otherwise false.
             * @returns The sorted array.
             */
            function mergeSort<T>(arr: T[], downwards: boolean, predicate: (a: any, b: any) => boolean): T[];
        }
        namespace Map {
            function filter<K, V>(map: Map<K, V>, predicate: (key: any, value: any) => boolean): Map<K, V>;
            function findByValue<K, V>(map: Map<K, V>, predicate: (e: V) => boolean): {
                key: K;
                value: V;
            } | null;
            function findByKey<K, V>(map: Map<K, V>, predicate: (e: K) => boolean): {
                key: K;
                value: V;
            } | null;
            function indexOf<K, V>(map: Map<K, V>, key: K): number;
            function first<K, V>(map: Map<K, V>): {
                key: K;
                value: V;
            } | undefined;
            function last<K, V>(map: Map<K, V>): {
                key: K;
                value: V;
            } | undefined;
            function getPrevious<K, V>(map: Map<K, V>, currentKey: any): {
                key: K;
                value: V;
            } | undefined;
            function getNext<K, V>(map: Map<K, V>, currentKey: any): {
                key: K;
                value: V;
            } | undefined;
        }
        namespace Dom {
            /**
         * Registers an event handler to the root element of this control.
         * @param el The JQuery element which will listen to the event.
         * @param event The event that should be registered.
         * @param cb The callback which will be called when the event was raised.
         * @returns A function to unregister the event again.
            */
            function registerEvent<TType extends string, TElement extends HTMLElement>(el: JQuery<TElement>, event: string, cb: JQuery.TypeEventHandler<TElement, undefined, TElement, TElement, TType> | false): UnregisterEventFunction;
            type UnregisterEventFunction = () => void;
        }
        namespace PressAndHold {
            let AnimationColor: string;
            let AnimationRadius: number;
            let AnimationLineWidth: number;
            /** Interface to manage the press and hold. */
            interface IManage {
                /** Releases the current press. */
                release: () => any;
                /** Stops watching presses completely. */
                stop: () => any;
                /** Resumes watching of presses. */
                resume: () => any;
                /** Returns true if the element is currently pressed. */
                isPressed: () => boolean;
            }
            /**
             * Animates a hold animation (circle animation) if the element is pressed for a certain time.
             * @param el The element which should trigger the press and hold animation.
             * @param cb Callback which is raised when the press was fullfilled.
             * @returns A function to stop the press.
             */
            function init(el: JQuery<HTMLElement>, cb: (ev: JQuery.TriggeredEvent) => any): IManage;
        }
        namespace IconBadges {
            /**
             * Defines if the rectangle around components which use badge elements is displayed in designer mode.
            */
            let ShowBadgeElementsDimensionRectangle: boolean;
            interface IBadgeElement {
                /** The badge JQuery element */
                element: JQuery;
                /** The position where the badge will be positioned. */
                position: CornerPosition;
            }
            interface IBadgeElementsOptions {
                /** Distance from the center of the target. */
                distance?: number;
                /** Positioning of the elements. */
                positioning?: 'absolut' | 'relative';
                /** If true, the size of the badge is scaled down automatically according to threshold. */
                autoScale?: boolean;
            }
            /**
             * Appends four badge elements to the target.
             * @param target The target on whose corners the elements will be appended.
             * @param elements The badge elements to be appended.
             * @param opt Options for the appending.
             */
            function appendBadgeElements(target: JQuery, elements: IBadgeElement[] | IBadgeElement, opt?: IBadgeElementsOptions): void;
            /**
             * In the designer this method will append a rectangle around a component, which will show the area which can be used by sourrounding elements.
             * @param target The target which will be sourrounded by the rectangle.
             * @param distance The distance from the rectangle to the outer border of the target.
             */
            function appendBadgeElementsDimensionRectangle(target: JQuery, distance: number): void;
            /**
             * Class that can handle icon badges on a JQuery container.
             * You can dislay and hide certain icons.
             */
            class Handler implements IDestroy {
                constructor(config: Handler.IConfig);
                /**
                 * Configuration of the IconBadgeHandler.
                 * @category Internal
                 */
                private __config;
                /**
                 * Collection of all displayed icons.
                 * @category Internal
                 */
                private __icons;
                /**
                 * Update the configuration of the IconBadgeHandler.
                 * @category Public
                 * @param config The new configuration.
                 */
                updateConfig(config: Partial<Handler.IConfig>): void;
                /**
                 * Checks if the IconBadgeHandler contains icons or not.
                 * @category Public
                 * @returns True if the IconBadgeHandler contains icons, otherwise false.
                 */
                hasIcons(): boolean;
                /**
                 * Add one or more icons.
                 * @category Public
                 * @param iconsAttr Data of the icon/icons to be added.
                 */
                addIcon(iconsAttr: Icons.IIconAttributes | Icons.IIconAttributes[]): void;
                /**
                 * Remove one or more icons.
                 * @category Public
                 * @param icons Data of the icon/icons to be removed.
                 */
                removeIcon(icon: Icons.IIconAttributes): void;
                /**
                 * Removes all icons.
                 * @category Public
                 */
                removeAllIcons(): void;
                /**
                 * Removes one or more icons from the internal icons collection.
                 * @category Internal
                 * @param iconsAttr Data of the icon/icons to be removed.
                 */
                private __removeIcon;
                /**
                 * Processes the current icon collection. Here the icons will be attached/detached from the icons container.
                 * @category Internal
                 */
                protected __processIcons(): void;
                destroy(): void;
            }
            namespace Handler {
                interface IConfig {
                    /** The id of the IconBadgeHandler. */
                    id: string;
                    /** The container, where the icons will be attached to. */
                    container: JQuery;
                    /** The css class that will be given to each icon. */
                    iconCssClass?: string;
                    /** Defines the attaching mode for the icons. */
                    attachingMode?: AttachingMode;
                }
                enum AttachingMode {
                    /** Icons will be attached without any positioning. Positioning needs to be done with css. */
                    default = 0,
                    /** Icons will be attached to the corners of the container. */
                    corners = 1
                }
            }
        }
        namespace SymbolPrepare {
            interface SchedEntry {
                eState: BA.SchedEntryState;
                stTime: BA.IBaTime;
                uValue: ClassValuePartial;
            }
            interface SchedException {
                aEntry: SchedExceptionEntryList;
                eType: BA.DateValChoice;
                uDate: DateValPartial;
            }
            interface SchedCalendar {
                stRefCalendarID: {
                    eObjectType: BA.ObjectType;
                    nInstanceID: number;
                };
                aEntry: SchedEntry[];
            }
            type ClassValuePartial = Partial<BA.ClassValue>;
            type DateValPartial = Partial<BA.DateVal>;
            type SchedWeek = SchedEntry[][];
            type SchedExceptionEntryList = SchedEntry[];
            type SchedExceptionList = SchedException[];
            type SchedCalendarList = SchedCalendar[];
            /**
             * Prepare a SchedWeek to be written to the PLC. Empty entries will be filled up and union types are prepared for writing.
             * @param week The SchedWeek that should be written to the PLC.
             * @param maxEntryCount The maximum count of entries.
             * @param dataType The used data type for the SchedWeek
             * @returns The complete and prepared to be written to the PLC SchedWeek.
             */
            export function toSchedWeek(week: BA.SchedWeek, maxEntryCount: number, dataType: DataType): SchedWeek;
            /**
             * Prepare a SchedExceptionList to be written to the PLC. Empty entries will be filled up and union types are prepared for writing.
             * @param exceptions The SchedExceptionList that should be written to the PLC.
             * @param maxExceptionCount The maximum count of exceptions.
             * @param maxEntryCount The maximum count of entries.
             * @param dataType The used data type for the SchedExceptionList
             * @returns The complete and prepared to be written to the PLC SchedExceptionList.
             */
            export function toSchedExceptionList(exceptions: BA.SchedExceptionList, maxExceptionCount: number, maxEntryCount: number, dataType: DataType): SchedExceptionList;
            /**
             * Prepare a SchedExceptionList to be written to the PLC. Empty entries will be filled up and union types are prepared for writing.
             * @param exceptions The SchedExceptionList that should be written to the PLC.
             * @param maxCalCountCount The maximum count of exceptions.
             * @param maxEntryCount The maximum count of entries.
             * @param dataType The used data type for the SchedExceptionList
             * @returns The complete and prepared to be written to the PLC SchedExceptionList.
             */
            export function toSchedCalendarList(calendar: BA.SchedCalendarList, maxCalCountCount: number, maxEntryCount: number, dataType: DataType): SchedCalendarList;
            export {};
        }
        /**
         * Converts a unit into a string.
         * @category Converter
         * @param unit The enum value for the unit.
         * @returns The shortcut for the unit.
        */
        function convertUnitToString(unit: BA.Unit | null | undefined): string | null;
        /**
         * Detect the DataType of any value.
         * @param p The value whose DataType should be detected.
         * @returns The detected DataType.
         */
        function detectDataType(p: any): DataType;
        /**
         * Converts a value into a certain type.
         * @category Converter
         * @param p The value to be converted.
         * @param type The primitive type of the result.
         * @returns The converted value or null if conversion failed.
         */
        function convertToType<T>(p: any, type: PrimitiveType): T | null;
    }
}
//# sourceMappingURL=Helper.d.ts.map
declare namespace TcHmi.BuildingAutomation.Icons {
    function convertIIconDataToIIconAttributes(p: Icons.IIconData): IIconAttributes;
    interface IIconBaseAttributes {
        /** The path to the icon */
        iconPath: string;
        /** Color of the icon. */
        iconColor?: RGBAColor | null;
        /** Duration to take when the color of the icon has changed. */
        iconColorChangeDuration?: number | null;
        /** Rotation of the icon in degree. */
        iconRotation?: number | null;
        /** Rotation direction of the icon. */
        iconRotationDirection?: Components.BackgroundStyler.RotationDirection | null;
        /** Rotation speed of the icon. */
        iconRotationSpeed?: number | null;
        /** The stroke width of the icon. */
        iconStrokeWidth?: number | null;
        /** The stroke width unit of the icon. */
        iconStrokeWidthUnit?: DimensionUnit | null;
        /** Set true when the icon should be an svg and the svg content is passed into the element directly and not via <img>-tag. */
        useSVG?: boolean | null;
    }
    /**
     * Validates the interface 'IIconBaseAttributes'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isIIconBaseAttributes(p: any): p is IIconBaseAttributes;
    interface IIconDimensionAttributes {
        /** Width of the icon. */
        iconWidth?: number | null;
        /** Width unit of the icon. */
        iconWidthUnit?: DimensionUnit | null;
        /** Height of the icon. */
        iconHeight?: number | null;
        /** Height unit of the icon. */
        iconHeightUnit?: DimensionUnit | null;
    }
    /**
     * Validates the interface 'IIconDimensionAttributes'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isIIconDimensionAttributes(p: any): p is IIconDimensionAttributes;
    interface IIconPositioningAttributes {
        /** Horizontal alignment of the icon. */
        iconHorizontalAlignment?: HorizontalAlignment | null;
        /** Vertical alignment of the icon. */
        iconVerticalAlignment?: VerticalAlignment | null;
    }
    /**
     * Validates the interface 'IIconPositioningAttributes'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isIIconPositioningAttributes(p: any): p is IIconPositioningAttributes;
    interface IIconAttributes extends IIconBaseAttributes, IIconDimensionAttributes, IIconPositioningAttributes {
        /** The category of the icon. E.g., this will be used for the legend. */
        iconCategory: string;
        /** The description of the icon. E.g., this will be used for the legend. */
        iconDescription?: string;
        /** The overlay of the icon. */
        iconOverlays?: IIconOverlay[] | null;
    }
    /**
     * Validates the interface 'IIconAttributes'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isIIconAttributes(p: any): p is IIconAttributes;
    interface IIconOverlay extends IIconBaseAttributes {
        /** Background color. */
        backgroundColor?: RGBAColor | null;
        /** Duration to take when background color has changed. */
        backgroundColorChangeDuration?: number | null;
        /** The width of the overlay icon component. */
        width?: number | null;
        /** The width unit of the overlay icon component. */
        widthUnit?: DimensionUnit | null;
        /** The height of the overlay icon component. */
        height?: number | null;
        /** The height unit of the overlay icon component. */
        heightUnit?: DimensionUnit | null;
        /** The position of the overlay icon component. */
        position?: Partial<FourSidedCss> | null;
        /** The horizontal alignment of the overlay icon component. */
        horizontalAlignment?: HorizontalAlignment | null;
        /** The vertical alignment of the overlay icon component. */
        verticalAlignment?: VerticalAlignment | null;
        /** The margin around the overlay icon component. */
        margin?: FourSidedCss | number | null;
    }
    /**
     * Validates the IIconOverlay interface.
     * @param p The object to be validated.
     * @returns True if the object is IIconOverlay, otherwise false.
     */
    function isIIconOverlay(p: any): p is IIconOverlay;
    /**
     * Validates an array of the IIconOverlay interface.
     * @param p The array to be validated.
     * @returns True if the array only contains IIconOverlay, otherwise false.
     */
    function isIIconOverlays(p: any): p is IIconOverlay[];
    interface IIconHandler extends Components.Base {
        /** Handles the icon data. */
        iconHandler: IconHandler;
    }
    class IconHandler implements Logger.ILogger, IDestroy {
        constructor(owner: IIconHandler);
        private __owner;
        private __overlayIcons;
        protected __attrHandler: AttributeHandler<IconHandler.IAttributes>;
        get logger(): Logger;
        destroy(): void;
        /**
         * Getter for the background svg element.
         * @category Public
         * @returns The icon svg element if the icon was set as an svg and undefined if the icon was set as an normal image. */
        getSvg(): JQuery<SVGElement> | null;
        setAttributes(attr: IconHandler.IAttributes): this;
        getAttributes(): IconHandler.IAttributes;
        /**
         * Setter for icon attribute.
         * @category Attribute setter and getter
         * @param p The new Icon.
         * @returns The IconHandler.
         */
        setIcon(p: string | null | undefined, useSVG?: boolean | null): this;
        /**
         * Processor for the Image attribute.
         * @category Attribute setter and getter
         */
        protected __processIcon(): void;
        /**
         * Getter for the Image attribute.
         * @category Attribute setter and getter
         * @returns The Image attribute.
         */
        getIcon(): string | null | undefined;
        /**
         * Setter for the IconHeight attribute.
         * @category Attribute setter and getter
         * @param p The new IconHeight.
         * @param q The new IconHeightUnit.
         * @returns The IconHandler.
         */
        setIconHeight(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Processor for the IconHeight attribute.
         * @category Attribute setter and getter
         */
        protected __processIconHeight(): void;
        /**
         * Getter for the IconHeight attribute.
         * @category Attribute setter and getter
         * @returns The IconHeight attribute.
         */
        getIconHeight(): number | null | undefined;
        /**
         * Getter for the IconHeightUnit attribute.
         * @category Attribute setter and getter
         * @returns The IconHeightUnit attribute.
         */
        getIconHeightUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the IconWidth attribute.
         * @category Attribute setter and getter
         * @param p The new IconWidth.
         * @param q The new IconWidthUnit.
         * @returns The IconHandler.
         */
        setIconWidth(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Processor for the IconWidth attribute.
         * @category Attribute setter and getter
         */
        protected __processIconWidth(): void;
        /**
         * Getter for the IconWidth attribute.
         * @category Attribute setter and getter
         * @returns The IconWidth attribute.
         */
        getIconWidth(): number | null | undefined;
        /**
         * Getter for the IconWidthUnit attribute.
         * @category Attribute setter and getter
         * @returns The IconWidthUnit attribute.
         */
        getIconWidthUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the IconHorizontalAlignment attribute.
         * @category Attribute setter and getter
         * @param p The new IconHorizontalAlignment.
         * @returns The Control.
         */
        setIconHorizontalAlignment(p: HorizontalAlignment | null | undefined): this;
        /**
         * Processor for the IconHorizontalAlignment attribute.
         * @category Attribute setter and getter
         */
        protected __processIconHorizontalAlignment(): void;
        /**
         * Getter for the IconHorizontalAlignment attribute.
         * @category Attribute setter and getter
         * @returns The IconHorizontalAlignment attribute.
         */
        getIconHorizontalAlignment(): HorizontalAlignment | null | undefined;
        /**
         * Setter for the IconVerticalAlignment attribute.
         * @category Attribute setter and getter
         * @param p The new IconVerticalAlignment.
         * @returns The Control.
         */
        setIconVerticalAlignment(p: VerticalAlignment | null | undefined): this;
        /**
         * Processor for the IconVerticalAlignment attribute.
         * @category Attribute setter and getter
         */
        protected __processIconVerticalAlignment(): void;
        /**
         * Getter for the IconVerticalAlignment attribute.
         * @category Attribute setter and getter
         * @returns The IconVerticalAlignment attribute.
         */
        getIconVerticalAlignment(): VerticalAlignment | null | undefined;
        /**
         * Setter for the IconColor attribute.
         * @category Attribute setter and getter
         * @param p The new IconColor.
         * @param duration The duration to take when the color was changed (in milliseconds).
         * @returns The Control.
         */
        setIconColor(p: Color.RGBAColor | TcHmi.RGBAColor | null | undefined, duration?: number | null): this;
        /**
         * Processor for the IconColor attribute.
         * @category Attribute setter and getter
         */
        protected __processIconColor(): void;
        /**
         * Getter for the IconColor attribute.
         * @category Attribute setter and getter
         * @returns The IconColor attribute.
         */
        getIconColor(): Color.RGBAColor | null | undefined;
        /**
         * Setter for the IconRotation attribute.
         * @category Attribute setter and getter
         * @param p The new IconRotation in deg.
         * @returns The Control.
         */
        setIconRotation(p: number | null | undefined): this;
        /**
         * Processor for the IconRotation attribute.
         * @category Attribute setter and getter
         */
        protected __processIconRotation(): void;
        /**
         * Getter for the IconRotation attribute.
         * @category Attribute setter and getter
         * @returns The IconRotation attribute.
         */
        getIconRotation(): number | null | undefined;
        /**
         * Setter for the IconRotationSpeed attribute.
         * @category Attribute setter and getter
         * @param p The new IconRotationSpeed in s.
         * @returns The Control.
         */
        setIconRotationSpeed(p: number | null | undefined): this;
        /**
         * Processor for the IconRotationSpeed attribute.
         * @category Attribute setter and getter
         */
        protected __processIconRotationSpeed(): void;
        /**
         * Getter for the IconRotationSpeed attribute.
         * @category Attribute setter and getter
         * @returns The IconRotationSpeed attribute.
         */
        getIconRotationSpeed(): number | null | undefined;
        /**
         * Setter for the IconRotationSpeed attribute.
         * @category Attribute setter and getter
         * @param p The new IconRotationSpeed in deg.
         * @returns The Control.
         */
        setIconRotationDirection(p: Components.BackgroundStyler.RotationDirection | null | undefined): this;
        /**
         * Processor for the IconRotationSpeed attribute.
         * @category Attribute setter and getter
         */
        protected __processIconRotationDirection(): void;
        /**
         * Getter for the IconRotationSpeed attribute.
         * @category Attribute setter and getter
         * @returns The IconRotationSpeed attribute.
         */
        getIconRotationDirection(): Components.BackgroundStyler.RotationDirection | null | undefined;
        /**
         * Sets the IconStrokeWidth attribute.
         * @category Attribute setter
         * @param p New IconStrokeWidth attribute or NULL.
         * @returns Returns the control.
         */
        setIconStrokeWidth(p: number | null | undefined, q: DimensionUnit | null | undefined): this;
        /**
         * Processor for the IconStrokeWidth attribute.
         * @category Internal
         */
        protected __processIconStrokeWidth(): void;
        /**
         * Gets the IconStrokeWidth attribute.
         * @category Attribute getter
         * @returns Returns the IconStrokeWidth attribute.
         */
        getIconStrokeWidth(): number | null | undefined;
        /**
         * Gets the IconStrokeWidthUnit attribute.
         * @category Attribute getter
         * @returns Returns the IconStrokeWidthUnit attribute.
         */
        getIconStrokeWidthUnit(): DimensionUnit | null | undefined;
        /**
         * Sets the IconOverlays attribute.
         * @category Attribute setter
         * @param p New IconOverlays attribute or NULL.
         * @returns Returns the icon data handler.
         */
        setIconOverlays(p: IIconOverlay[] | null | undefined): this;
        /**
         * Processor for the IconOverlays attribute.
         * @category Internal
         */
        protected __processIconOverlays(): void;
        /**
         * Gets the IconOverlays attribute.
         * @category Attribute getter
         * @returns Returns the IconOverlays attribute.
         */
        getIconOverlays(): IIconOverlay[] | null | undefined;
    }
    namespace IconHandler {
        interface IAttributes extends Components.Base.IAttributes, Omit<IIconAttributes, 'iconPath' | 'iconCategory' | 'iconDescription'> {
            iconPath?: string | null;
        }
        enum IconHandlerEvents {
            onIconChanged = "onIconHandlerIconChanged"
        }
    }
}
//# sourceMappingURL=IconHandler.d.ts.map
declare namespace TcHmi.BuildingAutomation {
    class Logger {
        constructor(attr?: Logger.IAttributes);
        private __name;
        private static readonly __prefix;
        private __prefix;
        static readonly checkMark = "\u2705 ";
        static readonly crossMark = "\u274C ";
        static readonly warning = "\u26A0 ";
        static readonly arrowRight = "\u2192 ";
        static readonly arrowLeft = "\u2190 ";
        static readonly arrowTop = "\u2191 ";
        static readonly arrowBottom = "\u2193 ";
        static readonly hourGlass = "\u231B ";
        /**
         * Adds the prefix to the message.
         * @param msg The message where the prefix should be added.
         * @returns The mesaage with the added prefix.
         */
        private static __processMessage;
        /**
         * Removes the prefix from the message.
         * @param msg The message with the prefix added by {@link __processMessage}.
         */
        private static __resetMessage;
        /**
         * Logs a message.
         * @param severity The severity of the message.
         * @param msg The message to log.
         * @param args Optional parameters that will be added to the output.
         * @returns The message.
         */
        static log(severity: Logger.Severity, msg: string | object, ...args: any[]): string;
        /**
         * Creates a debug log.
         * @param msg The message to log.
         * @param args Optional parameters that will be added to the output.
         * @returns The message.
         */
        static debug(msg: string | object, ...args: any[]): string;
        /**
         * Creates a info log.
         * @param msg The message to log.
         * @param args Optional parameters that will be added to the output.
         * @returns The message.
         */
        static info(msg: string | object, ...args: any[]): string;
        /**
         * Creates a warn log.
         * @param msg The message to log.
         * @param args Optional parameters that will be added to the output.
         * @returns The message.
         */
        static warn(msg: string | object, ...args: any[]): string;
        /**
         * Creates a error log.
         * @param msg The message to log.
         * @param args Optional parameters that will be added to the output.
         * @returns The message.
         */
        static error(msg: string | object, ...args: any[]): string;
        /**
         * Log a message to the console.
         * @param severity The severity of the message.
         * @param msg The message to log.
         * @param args Optional parameters that will be added to the output.
         * @returns The message.
         */
        log(severity: Logger.Severity, msg: string | object, ...args: any[]): string;
        /**
         * Creates a debug log.
         * @param msg The message to log.
         * @param args Optional parameters that will be added to the output.
         * @returns The message.
         */
        debug(msg: string | object, ...args: any[]): string;
        /**
         * Creates a info log.
         * @param msg The message to log.
         * @param args Optional parameters that will be added to the output.
         * @returns The message.
         */
        info(msg: string | object, ...args: any[]): string;
        /**
         * Creates a warn log.
         * @param msg The message to log.
         * @param args Optional parameters that will be added to the output.
         * @returns The message.
         */
        warn(msg: string | object, ...args: any[]): string;
        /**
         * Creates a error log.
         * @param msg The message to log.
         * @param args Optional parameters that will be added to the output.
         * @returns The message.
         */
        error(msg: string | object, ...args: any[]): string;
        /**
         * Log a performance message. Will only be printed when {@link Logger.TcHmiBaLogPerformance} is true.
         * @param severity The severity of the message.
         * @param msg The message to log.
         */
        static logPerformance(severity: Logger.Severity, msg: string): Logger.IDoneFunction;
        /**
         * Log a performance message. Will only be printed when {@link Logger.TcHmiBaLogPerformance} is true.
         * @param severity The severity of the message.
         * @param msg The message to log.
         */
        logPerformance(severity: Logger.Severity, msg: string): Logger.IDoneFunction;
        /**
         * Logs an error if {@link IResultObject} has an error.
         * @param severity Set the log level if an error occured.
         * @param data The data to be checked.
         * @param logger Logger which will be used to log the error if one occured.
         * @param skipSubResults If true, the sub results will not be evaluated.
         * @returns True if no error has occured
         */
        static checkServerResult(severity: Logger.Severity, data: IResultObject, logger?: Logger, skipSubResults?: boolean): boolean;
        /**
         * Checks if a cmd has any errors.
         * @param severity Set the log level if an error occured.
         * @param cmd The command to be checked.
         * @param logger Logger which will be used to log the error if one occured.
         */
        static checkServerCommand(severity: Logger.Severity, cmd: TcHmi.Server.ICommand, logger?: Logger): boolean;
        /**
         * Logs an error if data has an error.
         * @param severity Set the log level if an error occured.
         * @param data The data to be checked.
         * @returns True if no error has occured.
         */
        checkServerResult(severity: Logger.Severity, data: IResultObject, skipSubResults?: boolean): boolean;
        /**
         * Checks if a cmd has any errors.
         * @param severity Set the log level if an error occured.
         * @param cmd The command to be checked.
         */
        checkServerCommand(severity: Logger.Severity, cmd: TcHmi.Server.ICommand): boolean;
        /**
         * Console out a warning for an invalid attribute value.
         * @param attrName Name of the attribute.
         * @param val The invalid value.
         */
        invalidAttribute(attrName: string, val: any): void;
        /**
         * Console out a log for an equal attribute value.
         * @param attrName Name of the attribute value.
         * @param val The value which is equal to the old value.
         */
        equalAttribute(attrName: string, val?: any): void;
    }
    namespace Logger {
        interface IAttributes {
            /**
             * Name of the instance which uses the logger.
             * This name will be used on different positions in the resulting logs.
             */
            name: string;
            /**
             * Name of the class.
             */
            className?: string;
        }
        enum Severity {
            debug = 0,
            info = 1,
            warn = 2,
            error = 3
        }
        interface ILogger {
            /**
             * The logger of the instance.
             * @category Public
             */
            readonly logger: Logger;
        }
        /**
         * Validates the ILogger interface.
         * @category TypeGuards
         * @param p The object to by validated.
         * @returns True if the object implements the ILogger interface, otherwise false.
         */
        function isILogger(p: any): p is ILogger;
        interface IDoneFunction {
            (...args: any[]): void;
        }
        interface IAttributeCheckOptions {
            /** Validators to check the attribute. */
            validator: TypeGuards.ValidatorProperties;
            /**
             * Old value to do equality check.
             * If name is the attribute name in the attributes object, equality will be checked automatically.
             */
            oldVal?: any;
            /** If true the quality check will be skipped. */
            skipEqualityCheck?: boolean;
            /** If true, no log will be send to console, when attribute is invalid or equal. */
            doNotlogError?: boolean;
        }
        /** Defines is performance loggings are logged into the console or not. */
        let TcHmiBaLogPerformance: boolean;
    }
}
//# sourceMappingURL=Logger.d.ts.map
declare namespace TcHmi.BuildingAutomation.Helper.Mapping {
    /**
    * Resolve the partial param of a control.
    * @param ctrl The control where the partial param was bound to.
    * @param symExp The partial param SymbolExpression.
    * @returns An object which contains the original SymbolExpression of the partial param or the acutal value, if no symbol was bound to the attribute of the TcHmiUserControl.
    */
    function resolvePartialParam(ctrl: TcHmi.Controls.System.baseTcHmiControl | Components.Base.IBase, symExp: SymbolExpression): SymbolExpression;
}
//# sourceMappingURL=Mapping.d.ts.map
declare namespace TcHmi.BuildingAutomation.Components {
    class ResizeHandler implements IDestroy {
        /**
         * Constructor of a ResizeHandler.
         * @param ctrl The parent control of the ResizeHandler.
         * @param el Optional element if not the root element of the control should be observed.
         */
        constructor(ctrl: ResizeHandler.IOnResized, el?: JQuery);
        private __ctrl;
        private __element;
        private __attachId;
        private __resizeObserver;
        private __destroyOnThemeDataChanged;
        private __attach;
        private __detach;
        destroy(): void;
    }
    namespace ResizeHandler {
        interface IOnResized extends Components.IJQueryNode {
            /**
             * Callback when the size of the component has changed.
             * @category Event callbacks
             */
            onResized: () => any;
            /**
             * Handler to handle resize events.
             * @category Public
             */
            resizeHandler: ResizeHandler;
        }
    }
}
//# sourceMappingURL=ResizeHandler.d.ts.map
declare namespace TcHmi.BuildingAutomation.Helper.StyleProvider {
    /**
     * Style processor for margin.
     * @param element The jQuery element.
     * @param valueNew The new margin.
     */
    function processMargin(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<FourSidedCss> | number | null | undefined): void;
}
//# sourceMappingURL=StyleProvider.d.ts.map
declare namespace TcHmi {
    namespace BuildingAutomation.TypeGuards {
        type ValidatorProperty = PrimitiveType | 'function' | 'object' | 'array' | null | ((p: any) => p is any) | ((p?: any) => boolean);
        export type ValidatorProperties = ValidatorProperty | ValidatorProperty[];
        export function validateProperties(obj: object, props: Map<string, ValidatorProperties>): boolean;
        export function validateAttribute(attr: any, val: ValidatorProperties): boolean;
        export {};
    }
    /**
     * Validates the type 'DimensionUnit'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isDimensionUnit(p: any): p is DimensionUnit;
    /**
     * Validates the type 'HorizontalAlignment'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isHorizontalAlignment(p: any): p is HorizontalAlignment;
    /**
     * Validates the type 'VerticalAlignment'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isVerticalAlignment(p: any): p is VerticalAlignment;
    /**
     * Validates the interface 'FourSidedCss'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isFourSidedCss(p: any): p is FourSidedCss;
    /**
     * Validates the interface 'Partial<FourSidedCss>'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isPartialFourSidedCss(p: any): p is Partial<FourSidedCss>;
    /**
     * Validates the type 'BorderStyleValue'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isBorderStyleValue(p: any): p is BorderStyleValue;
    /**
     * Validates the interface 'BorderStyle'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isBorderStyle(p: any): p is BorderStyle;
    /**
     * Validates the interface 'BorderWidth'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isBorderWidth(p: any): p is BorderWidth;
    /**
     * Validates the interface 'BorderRadius'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isBorderRadius(p: any): p is BorderRadius;
    /**
     * Validates the data type JsonDataTypeNames.
     * @param p The input that should be checked.
     * @returns Returns TRUE if the input is valid. FALSE if not.
    */
    function isJsonDataTypeNames(p: any | null | undefined): p is JsonDataTypeNames;
    /**
     * Validates the type 'FontWeight'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isFontWeight(p: any): p is FontWeight;
    /**
     * Validates the type 'FontStyle'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isFontStyle(p: any): p is FontStyle;
}
//# sourceMappingURL=TypeGuards.d.ts.map
declare namespace TcHmi.BuildingAutomation {
    namespace Locale {
        const Localization: GenericLocalization<LangKey>;
        interface ILocaleWatchId {
            key: LangKey;
            id: number;
        }
        enum LangKey {
            invalid = "KeyL_Invalid",
            Language = "KeyL_Language",
            Close = "KeyL_Close",
            Logout = "KeyL_Logout",
            Login = "KeyL_Login",
            Reload = "KeyL_Reload",
            User = "KeyL_User",
            Others = "KeyL_Others",
            Save = "KeyL_Save",
            Reset = "KeyL_Reset",
            Delete = "KeyL_Delete",
            Edit = "KeyL_Edit",
            Copy = "KeyL_Copy",
            Paste = "KeyL_Paste",
            Update = "KeyL_Update",
            Restore = "KeyL_Restore",
            Pause = "KeyL_Pause",
            State = "KeyL_State",
            Description = "KeyL_Description",
            Settings = "KeyL_Settings",
            TimeStamp = "KeyL_TimeStamp",
            Active = "KeyL_Active",
            Inactive = "KeyL_Inactive",
            On = "KeyL_On",
            Off = "KeyL_Off",
            Open = "KeyL_Open",
            Closed = "KeyL_Closed",
            Info = "KeyL_Info",
            Warning = "KeyL_Warning",
            Error = "KeyL_Error",
            Disturbance = "KeyL_Disturbance",
            Position = "KeyL_Position",
            Angle = "KeyL_Angle",
            Yes = "KeyL_Yes",
            No = "KeyL_No",
            Legend = "KeyL_Legend",
            ObjectName = "KeyL_ObjectName",
            EventClass = "KeyL_EventClass",
            EventClassID = "KeyL_EventClassID",
            InstancePath = "KeyL_InstancePath",
            ProjectStructure = "KeyL_ProjectStructure",
            ParameterCategoryAddressing = "KeyL_ParameterCategoryAddressing",
            ParameterCategoryDataExchange = "KeyL_ParameterCategoryDataExchange",
            ParameterCategoryConfiguration = "KeyL_ParameterCategoryConfiguration",
            ParameterCategoryOperationalData = "KeyL_ParameterCategoryOperationalData",
            ParameterCategoryEventManagement = "KeyL_ParameterCategoryEventManagement",
            ParameterCategoryTrending = "KeyL_ParameterCategoryTrending",
            ParameterCategoryScheduling = "KeyL_ParameterCategoryScheduling",
            ParameterCategoryControlling = "KeyL_ParameterCategoryControlling",
            ParameterCategoryDeviceManagement = "KeyL_ParameterCategoryDeviceManagement",
            ParameterCategoryNetworkManagement = "KeyL_ParameterCategoryNetworkManagement",
            ParameterCategoryHardware = "KeyL_ParameterCategoryHardware",
            ParameterCategoryAdditional = "KeyL_ParameterCategoryAdditional",
            ParameterCategoryMiscellaneous = "KeyL_ParameterCategoryMiscellaneous",
            Cursor = "KeyL_Cursor",
            DataZoom = "KeyL_DataZoom",
            Trends = "KeyL_Trends",
            NewTrendCollection = "KeyL_NewTrendCollection",
            TrendCollectionName = "KeyL_TrendCollectionName",
            AddCollection = "KeyL_AddCollection",
            EditCollection = "KeyL_EditCollection",
            DeleteCollection = "KeyL_DeleteCollection",
            RemoveCollectionFromView = "KeyL_RemoveCollectionFromView",
            /** {0}: CollectionName */
            ConfirmRemoveCollectionFromView = "KeyL_ConfirmRemoveCollectionFromView",
            /** {0}: CollectionName */
            AlertDuplicateCollectionName = "KeyL_AlertDuplicateCollectionName",
            /** {0}: CollectionName */
            ConfirmSaveTrendCollection = "KeyL_ConfirmSaveTrendCollection",
            /** {0}: CollectionName */
            ConfirmDeleteTrendCollection = "KeyL_ConfirmDeleteTrendCollection",
            /** {0}: CollectionName */
            ConfirmDeleteOfTrendCollectionWithNoObjects = "KeyL_ConfirmDeleteOfTrendCollectionWithNoObjects",
            AlertNoCollectionName = "KeyL_AlertNoCollectionName",
            AlertNoCollectionsCreated = "KeyL_AlertNoCollectionsCreated",
            /** {0}: CollectionName */
            AlertCollectionNameNotFound = "KeyL_AlertCollectionNameNotFound",
            TrendCollections = "KeyL_TrendCollections",
            NewLiveTrend = "KeyL_NewLiveTrend",
            AssignedToTrend = "KeyL_AssignedToTrend",
            ReferredObject = "KeyL_ReferredObject",
            ReferringTrend = "KeyL_ReferringTrend",
            AxisConfiguration = "KeyL_AxisConfiguration",
            ConfirmAssignToTrend = "KeyL_ConfirmAssignToTrend",
            ConfirmRemoveFromTrend = "KeyL_ConfirmRemoveFromTrend",
            ConfirmResetLiveTrend = "KeyL_ConfirmResetLiveTrend",
            /** {0}: BaObject.InstancePath, {1}: DeviceName, {2}: CollectionName */
            ConfirmBaObjectNotTrendedRemoveFromCollection = "KeyL_ConfirmBaObjectNotTrendedRemoveFromCollection",
            /** {0} Trend id */
            TrendWithNoReferencedObject = "KeyL_TrendWithNoReferencedObject",
            /** {0}: Control id */
            InvalidBaObjectBound = "KeyL_InvalidBaObjectBound",
            /** {0}: Control id */
            InvalidTemplateBound = "KeyL_InvalidTemplateBound",
            /** {0}: Child name */
            TemplateChildNotFound = "KeyL_TemplateChildNotFound",
            /** {0}: Child name */
            TemplateChildNotABaView = "KeyL_TemplateChildNotABaView",
            /** {0}: Child name */
            TemplateChildNotABaObject = "KeyL_TemplateChildNotABaObject",
            ConfirmAcknowledgeAllEvents = "KeyL_ConfirmAcknowledgeAllEvents",
            EventIconStatePresent = "KeyL_EventIconStatePresent",
            EventIconStatePresentAcked = "KeyL_EventIconStatePresentAcked",
            EventIconStateGone = "KeyL_EventIconStateGone",
            EventIconStateGoneAcked = "KeyL_EventIconStateGoneAcked",
            EventIconStateIndicated = "KeyL_EventIconStateIndicated",
            /** {0}: DeviceName, {1}: ConnectionState */
            ConfirmDeviceAvailableReloadPage = "KeyL_ConfirmDeviceAvailableReloadPage",
            /** {0}: DeviceName, {1}: ConnectionState, {2}: Seconds */
            ReloadPageAfterDeviceReconnect = "KeyL_ReloadPageAfterDeviceReconnect",
            ServerLog = "KeyL_ServerLog",
            UpdateObjectInfo = "KeyL_UpdateObjectInfo",
            /** {0} extension name */
            Diagnostics = "KeyL_Diagnostics",
            ExtensionDiagnostics = "KeyL_ExtensionDiagnostics",
            BaSiteApiVersion = "KeyL_BaSiteApiVersion",
            CompatibleBaSiteServerVersion = "KeyL_CompatibleBaSiteServerVersion",
            AdsDllVersion = "KeyL_AdsDllVersion",
            TcHmiSrvExtVersion = "KeyL_TcHmiSrvExtVersion",
            Device = "KeyL_Device",
            Devices = "KeyL_Devices",
            DeviceName = "KeyL_DeviceName",
            Address = "KeyL_Address",
            ConnectionState = "KeyL_ConnectionState",
            Namespace = "KeyL_Namespace",
            Components = "KeyL_Components",
            BACnetRevision = "KeyL_BACnetRevision",
            BACnetStackVersion = "KeyL_BACnetStackVersion",
            Tc3XBaVersion = "KeyL_Tc3XBaVersion",
            Tc3Ba2CommonVersion = "KeyL_Tc3Ba2CommonVersion",
            Tc3BACnetRev14Version = "KeyL_Tc3BACnetRev14Version",
            BaSiteServerVersion = "KeyL_BaSiteServerVersion",
            Statistics = "KeyL_Statistics",
            AmountBaObjects = "KeyL_AmountBaObjects",
            AmountPlants = "KeyL_AmountPlants",
            AmountUnusedTrendObjects = "KeyL_AmountUnusedTrendObjects",
            AmountWatchedVariables = "KeyL_AmountWatchedVariables",
            GeneralBuildingInformation = "KeyL_GeneralBuildingInformation",
            Facade = "KeyL_Facade",
            FireAlarm = "KeyL_FireAlarm",
            BurglarAlarm = "KeyL_BurglarAlarm",
            IceAlarm = "KeyL_IceAlarm",
            Maintenance = "KeyL_Maintenance",
            StormAlarm = "KeyL_StormAlarm",
            SunProtection = "KeyL_SunProtection",
            ThermalAutomatic = "KeyL_ThermalAutomatic",
            Lights = "KeyL_Lights",
            Shading = "KeyL_Sunblinds",
            HeatingCoolings = "KeyL_HeatingCoolings",
            EnterNewTempAdjust = "KeyL_EnterNewTempAdjust",
            Windows = "KeyL_Windows",
            CurrentSched = "KeyL_CurrentSched",
            WeeklySched = "KeyL_WeeklySched",
            AddEntry = "KeyL_AddEntry",
            RemoveEntry = "KeyL_RemoveEntry",
            ConfirmRemoveEntry = "KeyL_ConfirmRemoveEntry",
            ConfirmResetChanges = "KeyL_ConfirmResetChanges",
            ConfirmSaveChangesToPlc = "KeyL_ConfirmSaveChangesToPlc",
            Calendar = "KeyL_Calendar",
            CalendarList = "KeyL_CalendarList",
            /** {0}: CalendarName */
            ConfirmSaveChangesOfCalendar = "KeyL_ConfirmSaveChangesOfCalendar",
            Date = "KeyL_Date",
            DateRange = "KeyL_DateRange",
            DateFrom = "KeyL_DateFrom",
            DateTo = "KeyL_DateTo",
            WeekNDay = "KeyL_WeekNDay",
            DayOfWeek = "KeyL_DayOfWeek",
            WeekOfMonth = "KeyL_WeekOfMonth",
            Month = "KeyL_Month",
            Exception = "KeyL_Exception",
            Today = "KeyL_Today",
            Show = "KeyL_Show",
            Hide = "KeyL_Hide",
            Add = "KeyL_Add",
            AddException = "KeyL_AddException",
            EditException = "KeyL_EditException",
            Regular = "KeyL_Regular",
            Daily = "KeyL_Daily",
            Weekly = "KeyL_Weekly",
            Monthly = "KeyL_Monthly",
            Annual = "KeyL_Annual",
            EveryWeekday = "KeyL_EveryWeekday",
            EveryMonth = "KeyL_EveryMonth",
            Week = "KeyL_Week",
            WeekOf = "KeyL_WeekOf",
            Every = "KeyL_Every",
            OnlyInYear = "KeyL_OnlyInYear",
            OrdinalFirst = "KeyL_OrdinalFirst",
            OrdinalSecond = "KeyL_OrdinalSecond",
            OrdinalThird = "KeyL_OrdinalThird",
            OrdinalFourth = "KeyL_OrdinalFourth",
            OrdinalFifth = "KeyL_OrdinalFifth",
            SelectNewDate = "KeyL_SelectNewDate",
            SelectNewTime = "KeyL_SelectNewTime",
            SelectNewStartTime = "KeyL_SelectNewStartTime",
            SelectNewEndTime = "KeyL_SelectNewEndTime",
            Monday = "KeyL_Monday",
            Mon = "KeyL_Mon",
            Tuesday = "KeyL_Tuesday",
            Tue = "KeyL_Tue",
            Wednesday = "KeyL_Wednesday",
            Wed = "KeyL_Wed",
            Thursday = "KeyL_Thursday",
            Thu = "KeyL_Thu",
            Friday = "KeyL_Friday",
            Fri = "KeyL_Fri",
            Saturday = "KeyL_Saturday",
            Sat = "KeyL_Sat",
            Sunday = "KeyL_Sunday",
            Sun = "KeyL_Sun",
            January = "KeyL_January",
            Jan = "KeyL_Jan",
            February = "KeyL_Februray",
            Feb = "KeyL_Feb",
            March = "KeyL_March",
            Mar = "KeyL_Mar",
            April = "KeyL_April",
            Apr = "KeyL_Apr",
            May = "KeyL_May",
            June = "KeyL_June",
            Jun = "KeyL_Jun",
            July = "KeyL_July",
            Jul = "KeyL_Jul",
            August = "KeyL_August",
            Aug = "KeyL_Aug",
            September = "KeyL_September",
            Sep = "KeyL_Sep",
            October = "KeyL_October",
            Oct = "KeyL_Oct",
            November = "KeyL_November",
            Nov = "KeyL_Nov",
            December = "KeyL_December",
            Dec = "KeyL_Dec",
            Temperature = "KeyL_Temperature",
            AirPressure = "KeyL_AirPressure",
            Humidity = "KeyL_Humidity",
            SunStar = "KeyL_SunStar",
            Brightness = "KeyL_Brightness",
            Wind = "KeyL_Wind",
            Latitude = "KeyL_Latitude",
            Longitude = "KeyL_Longitude",
            TemperatureOutside = "KeyL_TemperatureOutside",
            TemperatureDewPoint = "KeyL_TemperatureDewPoint",
            AirPressureAbsolute = "KeyL_AirPressureAbsolute",
            AirPressureRelative = "KeyL_AirPressureRelative",
            HumidityAbsolute = "KeyL_HumidityAbsolute",
            HumidityRelative = "KeyL_HumidityRelative",
            Rain = "KeyL_Rain",
            SunAzimuth = "KeyL_SunAzimuth",
            SunElevation = "KeyL_SunElevation",
            Dawn = "KeyL_Dawn",
            GlobalRadiation = "KeyL_GlobalRadiation",
            North = "KeyL_North",
            East = "KeyL_East",
            South = "KeyL_South",
            West = "KeyL_West",
            WindDirection = "KeyL_WindDirection",
            WindSpeed = "KeyL_WindSpeed",
            WindCompass = "KeyL_WindCompass",
            EnterValue = "KeyL_EnterValue",
            NoControl = "KeyL_NoControl",
            /** {0}: Min value, {1}: Max value */
            EnterValueWithLimits = "KeyL_EnterValueWithLimits",
            NaN = "KeyL_NaN",
            /** {0}: Min value, {1}: Max value */
            ValueNotWithinLimits = "KeyL_ValueNotWithinLimits",
            WarnBaObjectInUserControl = "KeyL_WarnBaObjectInUserControl",
            ActivationMode = "KeyL_ActivationMode",
            NoStateTextsSet = "KeyL_NoStateTextsSet",
            CloseAllDialogs = "KeyL_CloseAllDialogs"
        }
        const WeekDaysLongLangKey: LangKey[];
        const WeekDaysShortLangKey: LangKey[];
        const MonthsLongLangKey: LangKey[];
        const MonthsShortLangKey: LangKey[];
        const OrdinalTextLangKey: LangKey[];
    }
}
//# sourceMappingURL=MgmtCtrl.d.ts.map
declare namespace TcHmi.BuildingAutomation.Navigation {
    /** BaseList is a base class for all controls that have a list and sublists as visual appearance. */
    class BaseList extends Components.Base implements INavigation {
        constructor(id: string, parent?: Components.IBaseNode | null);
        /**
         * Entries of the list.
         * @category Elements
         */
        protected __entries: Map<string, BaseList.BaseListEntry>;
        protected __attrHandler: AttributeHandler<BaseList.IAttributes>;
        /**
         * The provider that manages this navigation list;
         * @category Internal
         */
        protected __navigationProvider: NavigationProvider | undefined;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        /**
         * Set attributes for a entry of the list.
         * @category Internal
         * @param entry The entry.
         * @param data The data for this entry.
         */
        protected __setEntryData(entry: BaseList.BaseListEntry, data: BaseList.IEntryData): void;
        /**
         * Create a new entry for the list.
         * @category Internal
         * @param key The key for this entry.
         * @param e The entry, will be set from inherited classes.
         * @returns The created entry.
         */
        protected __createEntry(key: string, e?: BaseList.BaseListEntry | null): BaseList.BaseListEntry;
        /**
         * Gets an entry from a collection by its path.
         * @param entries The collection of entries that should be searched.
         * @param path The last element of the path of the searched entry.
         */
        private static getEntryFromEntriesByPath;
        hide(): this;
        show(): this;
        select(p: Path): void;
        /**
         * Get all entries.
         * @category Public
         * @returns All entries.
         */
        getEntries(): Map<string, BaseList.BaseListEntry>;
        /**
         * Get a specific entry by its name.
         * @category Publlic
         * @param name The name of the entry.
         * @returns The entry with the specific name, otherwise null.
         */
        getEntry(name: string): BaseList.BaseListEntry | null;
        /**
         * Closes all entries with sub lists.
         * @category Public
         */
        closeAllEntries(): void;
        /**
         * Add a new entry to the list. This can be used when you want to add a entry during runtime.
         * If you have the complete data for the list before initializing of the list use ``setData``.
         * @category Public
         * @param data The data for this entry.
         * @returns The added entry.
         */
        addEntry(key: string, data: BaseList.IEntryData): BaseList.BaseListEntry;
        /**
         * Get a specific entry by its key.
         * @category Public
         * @param key The key of the entry.
         * @returns The specific entry or undefined;
         */
        hasEntry(key: string): BaseList.BaseListEntry | undefined;
        /**
         * Removes an entry from the list.
         * @category Public
         * @param key Key of the entry.
         * @returns True if the entry was successfully removed and false if not.
         */
        removeEntry(key: string): boolean;
        setNavigationProvider(provider: NavigationProvider | null): BaseList;
        getNavigationProvider(): NavigationProvider | undefined;
        setAttributes(attr: BaseList.IAttributes): this;
        getAttributes(): BaseList.IAttributes;
        /**
         * Setter for the Data attribute.
         * @category Attribute setter and getter
         * @param p The new data or null.
         * @returns The BaseList.
         */
        setData(p: BaseList.IEntryData | null | undefined): this;
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
        getData(): BaseList.IEntryData | null | undefined;
        /**
         * Setter for the SlideDuration attribute. Time for the slide animation when opening the sublist of an menu entry.
         * @category Attribute setter and getter
         * @param p The new SlideDuration or null.
         * @returns The BaseList.
         */
        setSlideDuration(p: number | null | undefined): this;
        /**
         * Processor for the SlideDuration attribute.
         * @category Attribute setter and getter
         */
        protected __processSlideDuration(): void;
        /**
         * Getter for the SlideDuration attribute.
         * @category Attribute setter and getter
         * @returns The SlideDuration attribute.
         */
        getSlideDuration(): number | null | undefined;
        /**
         * Setter for the SublistPadding attribute. The left padding of sublists.
         * @category Attribute setter and getter
         * @param p The new SublistPadding or null.
         * @param q The new SublistPaddingUnit or null.
         * @returns The BaseList.
         */
        setSublistPadding(p: number | null | undefined, q?: DimensionUnit | null): this;
        /**
         * Processor for the SublistPadding attribute.
         * @category Attribute setter and getter
         */
        protected __processSublistPadding(): void;
        /**
         * Getter for the SublistPadding attribute.
         * @category Attribute setter and getter
         * @returns The SublistPadding attribute.
         */
        getSublistPadding(): number | null | undefined;
        /**
         * Getter for the SublistPaddingUnit attribute.
         * @category Attribute setter and getter
         * @returns The SublistPaddingUnit attribute.
         */
        getSublistPaddingUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the AutoCollapse attribute. Defines if entries are automatically collapsed when another entry was selected.
         * @category Attribute setter and getter
         * @param p The new AutoCollapse or null.
         * @returns The BaseList.
         */
        setAutoCollapse(p: boolean | null | undefined): this;
        /**
         * Processor for the AutoCollapse attribute.
         * @category Attribute setter and getter
         */
        protected __processAutoCollapse(): void;
        /**
         * Getter for the AutoCollapse attribute.
         * @category Attribute setter and getter
         * @returns The AutoCollapse attribute.
         */
        getAutoCollapse(): boolean | null | undefined;
    }
    namespace BaseList {
        interface IAttributes extends Components.Base.IAttributes {
            /** Data of the list. */
            data?: IEntryData | null;
            /** Duration for slide down and slide up animation when sublist of a entry was opened. */
            slideDuration?: number | null;
            /** Left padding for sublists. */
            sublistPadding?: number | null;
            /** Left padding unit for sublists. */
            sublistPaddingUnit?: DimensionUnit | null;
            /** Defines if entries are automatically collapsed when another entry was selected. */
            autoCollapse?: boolean | null;
        }
        interface IEntryData extends Navigation.INodeData {
            Children?: Map<string, IEntryData> | null;
            /**
             * Function that will be called when the control has been created.
             * @param entry The created entry.
             */
            cbOnCreated?: ((entry: BaseListEntry) => any)[];
        }
        enum BaseListEvents {
            onEntrySelected = "onEntrySelected",
            onEntryOpened = "onEntryOpened",
            onEntryClosed = "onEntryClosed"
        }
        /**
         * The default slide duration when an entry was opened or closed.
         * Default is 200ms.
         */
        let DefaultSlideDuration: number;
        /** A base class for all entries of derived BaseLists. */
        class BaseListEntry extends Components.TextControl implements INavigationNode {
            constructor(id: string, parent?: BaseList | null);
            protected __baParent: BaseList | null;
            /**
             * Sublist of a list entry.
             * @category Elements
             */
            protected __sublist: BaseList | undefined;
            protected __attrHandler: AttributeHandler<BaseListEntry.IAttributes>;
            /**
             * Flag if the sublist is open.
             * @category Internal
             */
            protected __isOpen: boolean;
            /**
             * Prevents selecting of the entry during opening or closing the sublist.
             * @category Internal
             */
            private __selecting;
            /**
             * Handler for the pressed event.
             * @category Event handler
             */
            private __pressedHandler;
            protected __attach(): void;
            protected __detach(): void;
            destroy(): void;
            /**
             * Callback function for the onSelected event.
             * @category Event callbacks
             */
            private __onSelected;
            /**
             * Creates the sublist of a entry. Call ``super.__createSubList()`` in derived entries after create the sublist.
             * ```` ts
             * if (this.__sublist === undefined)
             *	  this.__sublist = new BaseList(this.__id + '-sublist', this);
             * super.__createSubList();
             * this.__sublist.setMyAttribute(myAttribute);
             * ````
             * @category Internal
             */
            protected __createSubList(): void;
            getPath(): string[];
            /**
             * Toggles the sublist between open and close.
             * @category Public
             */
            toggleOpen(): void;
            /**
             * Opens the sublist.
             * @category Public
             * @param overwriteSlideDuration Overrides the slide duration for this opening action.
             * @returns True if the entry was opened and false if it was already opened.
             */
            open(overwriteSlideDuration?: number): boolean;
            /**
             * Opens the sublist.
             * @category Public
             * @param overwriteSlideDuration Overrides the slide duration for this opening action.
             * @returns A promise which fullfills to true if the entry was opened and false if it was already opened.
             */
            openAsync(overwriteSlideDuration?: number): Promise<boolean>;
            /**
             * Close the sublist.
             * @category Public
             * @param overwriteSlideDuration Overrides the slide duration for this closing action.
             * @returns True if the entry was closed and false if it was already closed.
             */
            close(overwriteSlideDuration?: number): boolean;
            /**
             * Get the sublist of the entry.
             * @category Public
             * @returns The sublist.
             */
            getSublist(): BaseList | undefined;
            /**
             * Get the identifier if the sublist is opened or not.
             * @category Public
             * @returns True if the sublist of the entry is opened and false if not.
             */
            getIsOpen(): boolean;
            /**
             * Add a new entry to the list entry.
             * @category Public
             * @param key The key for the new entry.
             * @param data The data for the new entry.
             */
            addEntry(key: string, data: BaseList.IEntryData): void;
            /**
             * Checks if an entry with the key already exists.
             * @category Public
             * @param key The key of the entry to check.
             * @returns True if an entry with the key exists, otherwise false.
             */
            hasEntry(key: string): boolean;
            /**
             * Removes an entry with the specific key.
             * @category Public
             * @param key The key of the entry to be removed.
             * @returns True if the entry was removed, otherwise false.
             */
            removeEntry(key: string): boolean;
            /**
             * Get all siblings of the entry.
             * @category Public
             * @returns All siblings of the entry.
             */
            getSiblings(): BaseListEntry[];
            setAttributes(attr: BaseListEntry.IAttributes): this;
            getAttributes(): BaseListEntry.IAttributes;
            /**
             * Setter for the Data attribute.
             * @category Attribute setter and getter
             * @param p The new Data or null
             * @returns The BaseListEntry
             */
            setData(p: BaseList.IEntryData | null | undefined): this;
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
            getData(): BaseList.IEntryData | null | undefined;
            /**
             * Setter for the SlideDuration attribute. Time for the slide animation when opening the sublist.
             * @category Attribute setter and getter
             * @param p The new SlideDuration or null.
             * @returns The BaseListEntry.
             */
            setSlideDuration(p: number | null | undefined): this;
            /**
             * Processor for the SlideDuration attribute.
             * @category Attribute setter and getter
             */
            protected __processSlideDuration(): void;
            /**
             * Getter for the SlideDuration attribute.
             * @category Attribute setter and getter
             * @returns The SlideDuration attribute.
             */
            getSlideDuration(): number | null | undefined;
            /**
             * Setter for the SublistPadding attribute. Left padding of the sublist.
             * @category Attribute setter and getter
             * @param p The new SublistPadding or null.
             * @param q The new SublistPaddingUnit or null.
             * @returns The BaseListEntry.
             */
            setSublistPadding(p: number | null | undefined, q?: DimensionUnit | null): this;
            /**
             * Processor for the SublistPadding attribute.
             * @category Attribute setter and getter
             */
            protected __processSublistPadding(): void;
            /**
             * Getter for the SublistPadding attribute.
             * @category Attribute setter and getter
             * @returns The SublistPadding attribute.
             */
            getSublistPadding(): number | null | undefined;
            /**
             * Getter for the SublistPaddingUnit attribute.
             * @category Attribute setter and getter
             * @returns The SublistPaddingUnit attribute.
             */
            getSublistPaddingUnit(): DimensionUnit | null | undefined;
            /**
             * Setter for the AutoCollapse attribute. Defines if entries are automatically collapsed when another entry was selected.
             * @category Attribute setter and getter
             * @param p The new AutoCollapse or null.
             * @returns The BaseList.
             */
            setAutoCollapse(p: boolean | null | undefined): this;
            /**
             * Processor for the AutoCollapse attribute.
             * @category Attribute setter and getter
             */
            protected __processAutoCollapse(): void;
            /**
             * Getter for the AutoCollapse attribute.
             * @category Attribute setter and getter
             * @returns The AutoCollapse attribute.
             */
            getAutoCollapse(): boolean | null | undefined;
        }
        namespace BaseListEntry {
            interface IAttributes extends BaseList.IAttributes {
            }
            enum BaseListEntryEvents {
                onSelected = "onEntrySelected",
                onOpened = "onOpened",
                onClosed = "onClosed"
            }
        }
    }
}
//# sourceMappingURL=BaseList.d.ts.map
declare namespace TcHmi.BuildingAutomation {
    namespace Navigation {
        /** BaseList is a base class for all controls that have a list and sublists as visual appearance. */
        class ControlList extends BaseList implements Navigation.INavigation {
            constructor(id: string, parent?: Components.IBaseNode | null);
            protected __attrHandler: AttributeHandler<ControlList.IAttributes>;
            /**
             * Entries of the list.
             * @category Elements
             */
            protected __entries: Map<string, ControlList.ControlListEntry>;
            protected __attach(): void;
            protected __detach(): void;
            destroy(): void;
            /**
             * Set attributes for a entry of the list.
             * @category Internal
             * @param entry The entry.
             * @param data The data for this entry.
             * @param baObj The BaObject for this entry (if available).
             */
            protected __setEntryData(entry: ControlList.ControlListEntry, data: ControlList.IEntryData): void;
            /**
             * Create a new entry for the list.
             * @category Internal
             * @param data The data for this entry.
             * @returns The created entry.
             */
            protected __createEntry(key: string, e?: ControlList.ControlListEntry | null): ControlList.ControlListEntry;
            addEntry(key: string, data: ControlList.IEntryData): ControlList.ControlListEntry;
            getEntry(name: string): ControlList.ControlListEntry | null;
            setData(p: ControlList.IEntryData | null | undefined): this;
            getData(): ControlList.IEntryData | null | undefined;
        }
        namespace ControlList {
            interface IAttributes extends BaseList.IAttributes {
                data?: ControlList.IEntryData | null;
            }
            interface IEntryData extends BaseList.IEntryData {
                Children?: Map<string, IEntryData> | null;
                /** Additional controls that will be placed in the header. */
                controls?: Components.ControlContainer.IControlOptions | Components.Base | (Components.ControlContainer.IControlOptions | Components.Base)[];
            }
            /** A base class for all entries of derived BaseLists. */
            class ControlListEntry extends BaseList.BaseListEntry implements Navigation.INavigationNode {
                constructor(id: string, parent?: ControlList | null);
                protected __attrHandler: AttributeHandler<ControlListEntry.IAttributes>;
                protected __baParent: ControlList | null;
                /**
                 * Sublist of a list entry.
                 * @category Elements
                 */
                protected __sublist: ControlList | undefined;
                /**
                 * Container which can create different controls.
                 * @category Elements
                 */
                controlContainer: Components.ControlContainer;
                protected __attach(): void;
                protected __detach(): void;
                destroy(): void;
                onTextChanged(newText: string | null | undefined): void;
                protected __createSubList(): void;
                addEntry(key: string, data: ControlList.IEntryData): void;
                getSublist(): ControlList | undefined;
                setData(p: ControlList.IEntryData | null | undefined): this;
                getData(): IEntryData | null | undefined;
                protected __processData(): void;
            }
            namespace ControlListEntry {
                interface IAttributes extends ControlList.IAttributes {
                }
            }
        }
    }
    namespace BA {
        interface BaView {
            /**
             * Creates data for a control list from a BaBasicObject.
             * Only
             * @param opt
             */
            toControlListData: (opt?: {
                /** Controls to be displayed in each entry. */
                editEntry?: (baObj: BaBasicObject, entryData: Navigation.ControlList.IEntryData) => void;
                /**
                 * Define a filter method if you do not want to have all children in the control list.
                 * If filter method returns false, the entry will be omitted.
                 */
                filter?: (baObj: BaBasicObject) => boolean;
            }) => Navigation.ControlList.IEntryData;
        }
    }
}
//# sourceMappingURL=ControlList.d.ts.map
declare namespace TcHmi.BuildingAutomation.Navigation {
    interface INavigation {
        select(p: Path): void;
        setData(d: INodeData | null): void;
        getData(): INodeData | null | undefined;
        getId(): string;
        setNavigationProvider(provider: NavigationProvider | null): INavigation;
        getNavigationProvider(): NavigationProvider | undefined;
    }
    interface INavigationNode {
        setData(data: INodeData | null | undefined): INavigationNode;
        getData(): INodeData | null | undefined;
        getPath(): string[];
        getId(): string;
    }
    interface INodeData {
        Children?: Map<string, INodeData> | null;
        IsTop?: boolean;
        Title?: string | null;
        Path?: string[];
        /** Optional name for a node to find it by this name. */
        name?: string;
    }
    /**
     * Collection of all created navigations providers
     */
    let Provider: NavigationProvider[];
    /**
     * A class to create and manage different navigations.
     * Different navigation concepts can be implemented (e.g. 3D cuboid navigation or 2D tile navigation).
     * To initialize different navigation concepts use the create methods.
     * @category Navigation
     */
    class NavigationProvider {
        /**
         * !!!! Use Navigation.createOrGetNavigationProvider() to initialize a new NavigationProvider !!!!
         * Constructor of a NavigationProvider.
         * @param id The unique id of the NavigationProvider.
         */
        constructor(id: string);
        /**
         * The unique id of the NavigationProvider.
         * @category Attributes
         */
        private __id;
        /**
         * The path of the NavigationProvider which holds the current path and the historic path.
         * category Attributes
         */
        private __path;
        /**
         * The data for all created navigations.
         * @category Attributes
         */
        private __data;
        /**
         * Collection of all created navigations.
         * @category Internal
         */
        private __navigations;
        /**
         * Id of the navigation that changed the path.
         * @category Internal
         */
        private __changedNavigationId;
        /**
         * Use to log message or validate result objects.
         * @category Internal
         */
        protected __logger: Logger;
        /**
        * Set the path for each element of the node data.
        * @category Internal
        */
        protected __preparePath(data: INodeData | undefined, key?: string, prevPath?: string[]): void;
        /**
         * Setups the newly created navigation.
         * @category Internal
         * @param id The id of the navigation
         * @param newNav The instance of the navigation (list).
         * @param root The HTML root element.
         */
        private __setupNewNav;
        /**
         * Getter for the ID of the navigation provider.
         * @category Public
         * @returns The ID of the navigation provider.
         */
        getId(): string;
        /**
         * Creates a new BaseList navigation.
         * @category Public
         * @param id The unique id of the new navigation.
         * @param baParent The BaParent of the control.
         * @param root The id of the html root element where the navigation should be appended.
         * @return The created navigation.
         */
        createBaseListNavigation(id: string, baParent: Components.IBaseNode | null, attr?: BaseList.IAttributes, root?: JQuery): BaseList;
        /**
         * Creates a new ControlList navigation.
         * @category Public
         * @param id The unique id of the new navigation.
         * @param baParent The BaParent of the control.
         * @param root The id of the html root element where the navigation should be appended.
         * @return The created navigation.
         */
        createControlListNavigation(id: string, baParent: Components.IBaseNode | null, attr?: ControlList.IAttributes, root?: JQuery): ControlList;
        /**
         * Creates a new ParameterList navigation.
         * @category Public
         * @param id The unique id of the new navigation.
         * @param baParent The BaParent of the control.
         * @param root The id of the html root element where the navigation should be appended.
         * @return The created navigation.
         */
        createParameterListNavigation(id: string, baParent: Components.IBaseNode | null, attr?: ParameterList.IAttributes, root?: JQuery): ParameterList;
        /**
         * Creates a new ProjectNavigationList navigation.
         * @category Public
         * @param id The unique id of the new navigation.
         * @param baParent The BaParent of the control.
         * @param root The id of the html root element where the navigation should be appended.
         * @return The created navigation.
         */
        createProjectNavigationListNavigation(id: string, baParent: Components.IBaseNode | null, attr?: ProjectNavigationList.IAttributes, root?: JQuery): ProjectNavigationList;
        /**
         * Removes a navigation from the navigation provider.
         * @category Public
         * @param id The id of the navigation.
         * @returns True if the navigation was removed successfully, otherwise false.
         */
        removeNavigation(id: string): boolean;
        /**
         * Getter for all created navigations.
         * @category Public
         * @returns All created navigations.
         */
        getNavigations(): Map<string, INavigation>;
        /**
         * Navigate to a new path.
         * @category Public
         * @param selectedData The selected NodeData.
         */
        select(selectedData: INodeData | null | undefined): void;
        /**
         * Get the data of the current node.
         * @category Public
         * @returns The data of the current node.
         */
        getCurrentNode(): INodeData | undefined;
        /**
         * Setter for the Data attribute.
         * @category Attribute setter and getter
         * @param p The new data or null.
         * @returns The NavigationProvider.
         */
        setData(p: INodeData | null): NavigationProvider;
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
        getData(): INodeData | null;
    }
    /**
     * Creates or finds a navigation provider for the set data.
     * @param data The data which is used for the provider.
     * @returns The created provider or a already created nprovider with the same data.
     */
    function createOrGetNavigationProvider(data?: INodeData): NavigationProvider;
}
//# sourceMappingURL=NavigationProvider.d.ts.map
declare namespace TcHmi.BuildingAutomation.Navigation {
    /** ParameterList is a list that displays a title and a value in a entry. */
    class ParameterList extends BaseList implements BaObjectHandler.IUsesBaObject {
        constructor(id: string, parent?: Components.IBaseNode | null);
        protected __attrHandler: AttributeHandler<ParameterList.IAttributes>;
        baObjectHandler: BaObjectHandler;
        protected __entries: Map<string, ParameterList.ParameterListEntry>;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        protected __createEntry(key: string, e?: ParameterList.ParameterListEntry | null): ParameterList.ParameterListEntry;
        protected __setEntryData(entry: ParameterList.ParameterListEntry, data: ParameterList.IEntryData): void;
        processBaObject(): void;
        addEntry(key: string, data: ParameterList.IEntryData): ParameterList.ParameterListEntry;
        setAttributes(attr: ParameterList.IAttributes): this;
        getAttributes(): ParameterList.IAttributes;
        setData(p: ParameterList.IEntryData | null | undefined): this;
        /**
         * Setter for the BaUsedTitle attribute. Define which BA text attribute is displayed as the title.
         * @category Attribute setter and getter
         * @param p The new BaUsedTitle or null.
         * @returns The ParameterList.ParameterListEntry.
         */
        setBaUsedTitle(p: BA.BaVariable.DescriptionVariables | null | undefined): this;
        /**
         * Processor for the BaUsedTitle attribute.
         * @category Attribute setter and getter
         */
        protected __processBaUsedTitle(): void;
        /**
         * Getter for the BaUsedTitle attribute.
         * @category Attribute setter and getter
         * @returns The BaUsedTitle attribute.c
         */
        getBaUsedTitle(): BA.BaVariable.DescriptionVariables | null | undefined;
    }
    namespace ParameterList {
        interface IAttributes extends BaseList.IAttributes, Components.ValueField.IAttributes<any> {
            data?: IEntryData | null;
            /** Defines which text attribute of a BaObject is set as the title. */
            baUsedTitle?: BA.BaVariable.DescriptionVariables | null;
        }
        enum ParameterListEvents {
            onEntryValueChanged = "onEntryValueChanged"
        }
        interface IEntryData extends BaseList.IEntryData {
            Title?: string | null;
            DataType?: DataType | null;
            Value?: Components.ValueField.ValueType | Components.ValueField.ValueType[];
            Unit?: string | BA.Unit | null;
            MinValue?: number | null;
            MaxValue?: number | null;
            Access?: BA.IBaScope | null;
            ReadOnly?: boolean | null;
            ArrayType?: DataType | null;
            EnumInfo?: Map<number, string> | null;
            ActiveText?: string | null;
            InactiveText?: string | null;
            Mapping?: string | null;
            Children?: Map<string, IEntryData> | null;
        }
        /** A list entry to display a title and a value. */
        class ParameterListEntry extends BaseList.BaseListEntry implements BaObjectHandler.IUsesBaObject {
            constructor(id: string, parent?: ParameterList | null);
            baObjectHandler: BaObjectHandler;
            protected __baParent: ParameterList | null;
            protected __attrHandler: AttributeHandler<ParameterListEntry.IAttributes>;
            /**
             * The watch ID of the current displayed BA description type.
             * @category Internal
             */
            private __baUsedTitleWatchId;
            /**
             * Stores the watch identifier of the BaVariable if the passes data is a BaVariable.
             * @category Internal
             */
            private __baVarWatchValueId;
            /**
             * Destroy function for the OnBaVariablesParameterInformationLoaded event.
             * @category Internal
             */
            private __destroyOnBaParameterInformationLoaded;
            /**
             * Destroy function for the onValueChanged event of the value field.
             * @category Internal
             */
            private __destroyOnValueFieldChanged;
            /**
             * The linked BaParameter.
             * @category Internal
             */
            private __baParameter;
            /**
             * True if the value field is appended.
             * @category Internal
             */
            protected __valueFieldAppended: boolean;
            protected __sublist: ParameterList | undefined;
            /**
             * The content container for the title and value.
             * @category Elements
             */
            protected __contentContainer: JQuery<HTMLDivElement>;
            /**
             * The value field in the entry.
             * @category Elements
             */
            protected __valueField: Components.ValueField<any> | undefined;
            /**
             * The symbol for the mapping of the data. Used to watch for changes.
             * @category Symbols
             */
            private __mappingSymbol;
            protected __attach(): void;
            protected __detach(): void;
            destroy(): void;
            onTextChanged(newText: string | null | undefined): void;
            protected __createSubList(): void;
            /**
             * Appends or detaches the value field of the entry.
             * @category Internal
             * @param append If true the value field will be appended, otherwise it will be detached.
             */
            protected __appendValueField(append: boolean): void;
            /**
             * Creates the value field for the entry.
             * @category Internal
             */
            protected __createValueField(): Components.ValueField<Components.ValueField.ValueType>;
            setAttributes(attr: ParameterListEntry.IAttributes): this;
            getAttributes(): ParameterListEntry.IAttributes;
            setData(p: IEntryData | null | undefined): this;
            getData(): IEntryData | null | undefined;
            /**
             * Setter for the Value attribute.
             * @category Attribute setter and getter
             * @param p The new Value or null;
             * @returns The Entry
             */
            setValue(p: Components.ValueField.ValueType | Components.ValueField.ValueType[]): this;
            /**
             * Processor for the Value attribute.
             * @category Attribute setter and getter
             */
            protected __processValue(): void;
            /**
             * Getter for the Value attribute.
             * @category Attribute setter and getter
             * @returns The Value attribute.
             */
            getValue(): Components.ValueField.ValueType | Components.ValueField.ValueType[];
            /**
             * Setter for the MinValue attribute.
             * @category Attribute setter and getter
             * @param p The new MinValue or null.
             * @returns The Entry
             */
            setMinValue(p: number | null | undefined): this;
            /**
             * Getter for the MinValue attribute.
             * @category Attribute setter and getter
             * @returns the MinValue attribute.
             */
            getMinValue(): number | null | undefined;
            /**
             * Setter for the MaxValue attribute.
             * @category Attribute setter and getter
             * @param p The new MaxValue or null.
             * @returns The Entry.
             */
            setMaxValue(p: number | null | undefined): this;
            /**
             * Getter for the MaxValue attribute.
             * @category Attribute setter and getter
             * @returns The MaxValue attribute.
             */
            getMaxValue(): number | null | undefined;
            /**
             * Setter for the BaUsedTitle attribute. Define which BA text attribute is displayed as the title.
             * @category Attribute setter and getter
             * @param p The new BaUsedTitle or null.
             * @returns The Entry.
             */
            setBaUsedTitle(p: BA.BaVariable.DescriptionVariables | null | undefined): this;
            /**
             * Processor for the BaUsedTitle attribute.
             * @category Attribute setter and getter
             */
            protected __processBaUsedTitle(): void;
            /**
             * Getter for the BaUsedTitle attribute.
             * @category Attribute setter and getter
             * @returns The BaUsedTitle attribute.
             */
            getBaUsedTitle(): BA.BaVariable.DescriptionVariables | null | undefined;
            /**
             * Setter for the Title attribute.
             * @category Attribute setter and getter
             * @param p The new Title.
             */
            setTitle(p: string | null | undefined): this;
            /**
             * Getter for the Title attribute.
             * @category Attribute setter and getter
             * @returns The Title attribute.
             */
            getTitle(): string | null | undefined;
            processBaObject(): void;
            /**
             * Setter for the BaParameter attribute.
             * @category Attribute setter and getter
             * @param p The new BaParameter or null
             * @returns The ParameterListEntry
             */
            setBaParameter(p: BA.BaVariable): this;
            /**
             * Processor for the BaParameter attribute.
             * @category Attribute setter and getter
             */
            private __processBaParameter;
            /**
             * Getter for the BaParameter attribute.
             * @category Attribute setter and getter
             * @returns The BaParameter attribute.
             */
            getBaParameter(): BA.BaVariable<any> | undefined;
            protected __processData(): void;
            protected __processReadOnly(): void;
        }
        namespace ParameterListEntry {
            interface IAttributes extends ParameterList.IAttributes {
                /** The title of the entry. */
                title?: string | null;
            }
            enum ParameterListEntryEvents {
                /** Is fired when the value of the value field in the entry has changed. */
                onValueChanged = "onValueChanged"
            }
        }
    }
}
//# sourceMappingURL=ParameterList.d.ts.map
declare namespace TcHmi.BuildingAutomation.Navigation {
    class Path {
        /** The current path */
        protected __cur: string[];
        /** The clicked path */
        protected __selected: string[];
        /** The prvious path. */
        protected __old: string[];
        /** The direction of the current navigation step. */
        protected __direction: Path.NavDirection;
        /**
         * Set the current path.
         * @param p The selected path.
         */
        set(p: string[]): boolean;
        /**
         * @returns The current path.
         */
        getCurrent(): string[];
        /**
         * @returns The old path.
         */
        getOld(): string[];
        /**
         * @returns The clicked path.
         */
        getSelected(): string[];
        /**
         * @returns The direction of the current navigation step.
         */
        getDirection(): Path.NavDirection;
        /**
         * Gets the path of the element that must be closed.
         * @category Public
         * @returns The path of the element that must be closed.
         */
        getClosePath(): string[];
        /** Reset the path. */
        reset(): void;
    }
    namespace Path {
        enum NavDirection {
            Invalid = -1,
            Backward = 0,
            Stay = 1,
            Forward = 2
        }
    }
}
//# sourceMappingURL=Path.d.ts.map
declare namespace TcHmi.BuildingAutomation.Navigation {
    /** ProjectNavigationList displays a single BaObject or BA.BaView. */
    class ProjectNavigationList extends ParameterList {
        constructor(id: string, parent?: Components.IBaseNode | null);
        protected __attrHandler: AttributeHandler<ProjectNavigationList.IAttributes>;
        private __currentFilter;
        protected __entries: Map<string, ProjectNavigationList.ProjectNavigationListEntry>;
        /**
         * Handler when an entry was selected.
         * @category Event handler
         */
        private __entrySelectedHandler;
        /**
         * Handler when an entry was selected.
         * @category Event handler
         */
        private __displayedEventsChangedHandler;
        protected __attach(): void;
        protected __detach(): void;
        destroy(): void;
        protected __setEntryData(entry: ProjectNavigationList.ProjectNavigationListEntry, data: ParameterList.IEntryData): void;
        protected __createEntry(key: string, e?: ProjectNavigationList.ProjectNavigationListEntry | null): ProjectNavigationList.ProjectNavigationListEntry;
        /**
         * Callback function for the onObjectSelected event. Fired when an entry with child elements was selected in the list.
         * @category Event callbacks
         * @param obj The selected project navigation list entry.
         */
        /**
         * Callback function for the onActiveEventsChanged event. Fired when the number of active events of an entry has changed.
         * @category Event callbacks
         * @param view The event data.
         */
        private __onDisplayedEventsChanged;
        /**
         * Passes all childs to find the element with the most displayed events.
         * @category Public
         */
        getMostDisplayedEvents(): number;
        /**
         * Checks if the description of the entry or one of its childs fits to the filter or not.
         * @category Public
         * @param filter The string which should be searched.
         * @returns True if any children fit to the search string and false if not.
         */
        filterChildrenAsync(filter: string, options?: BA.BaTextAddressingParameter[]): Promise<boolean>;
        /**
         * Hide the entry and its childs if they have no displayed events or show them if it is not a event list but a menu list.
         * @category Public
         */
        hideObjects(): void;
        /**
         * Hides or shows events of the entries if the selected events in the event list have changed.
         * @category Public
         * @param name Name of the event.
         * @param show Indicates if the events has to be shown or hided.
         */
        changeEvent(name: BA.EventCondition, show: boolean): void;
        /**
         * Determines if an entry of the list has a content view button
         * @category Public
         * @returns True if an entry has a content view button and false if none of the entries has one.
         */
        hasEntryWithContentView(): boolean;
        /**
         * Set if the entries of the list should use a offset for the view button or not.
         * @category Public
         * @param p True to use the offset and false to remove the offset.
         */
        setContentViewButtonOffset(p: boolean): void;
        /**
         * Get the current filter of the list.
         * @category Public
         * @returns The current filter of the list.
         */
        getCurrentFilter(): {
            filter: string;
            options: BA.BaTextAddressingParameter[];
        } | null | undefined;
        setAttributes(attr: ProjectNavigationList.IAttributes): this;
        getAttributes(): ProjectNavigationList.IAttributes;
        /**
         * Setter for the MostEvents attribute.
         * Is required to align all values fields of the entries depending on the number of events of the entry with the most events.
         * @category Attribute setter and getter
         * @param p The number of events of the entry with the most events.
         * @returns The ProjectNavigationList.
         */
        setMostEvents(p: number | null | undefined): this;
        /**
         * Getter for the MostEvents attribute.
         * @category Attribute setter and getter
         * @returns The MostEvents attribute.
         */
        getMostEvents(): number | null | undefined;
        /**
         * Setter for the ShowEvents attribute.
         * If true the events in each entry will be displayed.
         * @category Attribute setter and getter
         * @param b The new ShowEvents or null.
         * @returns The ProjectNavigationList.
         */
        setShowEvents(p: boolean | null | undefined): this;
        /**
         * Getter for the ShowEvents attribute.
         * @category Attribute setter and getter
         * @returns The ShowEvents attribute.
         */
        getShowEvents(): boolean | null | undefined;
        /**
         * Setter for the showObjectType attribute.
         * If true the object type button in each entry will be displayed.
         * @category Attribute setter and getter
         * @param p The new ShowObjectType or null.
         * @return The ProjectNavigationList.
         */
        setShowObjectType(p: boolean | null | undefined): this;
        /**
         * Getter for the ShowObjectType attribute.
         * @category Attribute setter and getter
         * @returns The ShowObjectType attribute.
         */
        getShowObjectType(): boolean | null | undefined;
        /**
         * Setter for the ShowValue attribute.
         * If true the value of each entry will be displayed.
         * @category Attribute setter and getter
         * @param p The new ShowValue or null.
         * @returns The ProjectNavigationList.
         */
        setShowValue(p: boolean | null | undefined): this;
        /**
         * Getter for the ShowValue attribute.
         * @category Attribute setter and getter
         * @returns The ShowValue attribute.
         */
        getShowValue(): boolean | null | undefined;
        processBaObject(): void;
        protected __processData(): void;
    }
    namespace ProjectNavigationList {
        interface IAttributes extends ParameterList.IAttributes {
            /** The event count of the entry with the most events. */
            mostEvents?: number | null;
            /** If true the events in each entry will be displayed. */
            showEvents?: boolean | null;
            /** If true the object type button in each entry will be displayed. */
            showObjectType?: boolean | null;
            /** If true the value of each entry will be displayed. */
            showValue?: boolean | null;
        }
        enum ProjectNavigationListEvents {
            onEntryActiveEventsChanged = "onEntryActiveEventsChanged",
            onEntryDisplayedEventsChanged = "onEntryDisplayedEventsChanged",
            onEntryContentViewButtonPressed = "onEntryContentViewButtonPressed"
        }
        /** Defines for each user level if a pulse is displayed, when an event with this or a higher priority is active. */
        let MaximumEventTypePulse: Map<BA.Role, BA.EventType>;
        /** Defines for each user level the maximum event condition that will be displayed. */
        let MaximumEventConditionDisplayed: Map<BA.Role, BA.EventCondition>;
        /**
         * Defines if the {@link Components.ManualOverride} component is used for each entry or not. If not the {@link Components.ValueField} is used.
         * Default is true.
         */
        let UseManualOverrideComponent: boolean;
        /** ProjectNavigationListEntry displays a single BAObject or BA.BaView with a sublist. */
        class ProjectNavigationListEntry extends ParameterList.ParameterListEntry {
            constructor(id: string, parent?: ProjectNavigationList | null);
            protected __baParent: ProjectNavigationList | null;
            protected __attrHandler: AttributeHandler<ProjectNavigationListEntry.IAttributes>;
            /**
             * True if the html container for the event icons is appended.
             * @category Internal
             */
            private __eventTypeContainerAppended;
            /**
             * True if the object type button is appended.
             * @category Internal
             */
            private __objectTypeButtonAppended;
            /**
             * The count of displayed events.
             * @category Internal
             */
            private __displayedEventsCnt;
            /**
             * True if the entry flashs because of an active event.
             * @category Internal
             */
            private __showPulse;
            /**
             * Stores the changed parameters from the parameter dialog to write them when the dialog was confirmed.
             * @category Internal
             */
            private __changedParameters;
            /**
             * The identifier for the watch of the Events property of the BaObject.
             * @category Internal
             */
            private __eventsWatchIdentifier;
            /**
             * Destroy function for the onCustomBaPulse event.
             * @category Internal
             */
            private __destroyOnCustomBaPulse;
            /**
             * Destroy function for the onObjectTypeButtonPressed event.
             * @category Internal
             */
            private __destroyOnObjectTypeButtonPressed;
            /**
             * Destroy function for the onContentViewButtonPressed event.
             * @category Internal
             */
            private __destroyOnContentViewButtonPressed;
            protected __sublist: ProjectNavigationList | undefined;
            /**
             * Object type button. Displays a icon related to the BaObjects type and opens the property dialog of the object.
             * @category Elements
             */
            private __objectTypeButton;
            /**
             * Object type button. Displays a icon related to the BaObjects type and opens the property dialog of the object.
             * @category Elements
             */
            private __contentViewButton;
            /**
             * Container for the event icons.
             * @category Elements
             */
            private __eventIconContainer;
            /**
             * Content for the property dialog.
             * @category Elements
             */
            private __baVarList;
            /**
             * Event icons for the active events.
             * @category Elements
             */
            private __activeEvents;
            protected __valueField: Components.ManualOverride | undefined;
            private __legendIconHandler;
            /**
             * Handler when the object type button was pressed.
             * @category Event handler
             */
            private __objectTypeButtonPressedHandler;
            /**
             * Handler when the content view button was pressed.
             * @category Event handler
             */
            private __contentViewButtonPressedHandler;
            protected __attach(): void;
            protected __detach(): void;
            destroy(): void;
            /**
             * Callback function when the activeEventData has changed.
             * @category Event callbacks
             * @param data The activeEventData.
             */
            protected __onEventDataChanged(data: Map<BA.EventCondition, BA.EventsPerIconImage>): void;
            protected __createSubList(): void;
            protected __createValueField(): Components.ManualOverride | Components.ValueField<Components.ValueField.ValueType>;
            /**
             * Updates the appearance of the menu entry.
             * @category Internal
             */
            protected __updateAppearance(): void;
            /**
             * Manages the pulse around the control if an event is present.
             * @category Internal
             */
            protected __managePulse(): void;
            /**
             * Enables or disables the pulse around the object.
             * @category Internal
             * @param enable Bool to identify enable or disable.
             */
            protected __enablePulse(enable: boolean): void;
            /**
             * Set the position offset of the value field. Needed to align all value fields depening on the most displayed events.
             * @category Internal
             * @param offset The amount of the most displayed events.
             */
            private __setValueFieldPositionOffset;
            open(overwriteSlideDuration?: number): boolean;
            openAsync(overwriteSlideDuration?: number): Promise<boolean>;
            close(overwriteSlideDuration?: number): boolean;
            /**
             * Get the title text element.
             * @category Public
             * @returns The title text element.
             */
            getTitleTextblock(): JQuery | undefined;
            /**
             * Get the number of current active events
             * @category Public
             * @returns The number of current active events.
             */
            getActiveEvents(): Components.EventIcon[] | undefined;
            /**
             * Hides a certain event type if it is active for the menu entry. If so it decreases the displayedEventsCnt.
             * @category Public
             * @param e The event condition which should be hided.
             */
            hideEvent(e: BA.EventCondition): void;
            /**
             * Shows a certain event type if it is active for the menu entry. If so it increases the displayedEventsCnt.
             * @category Public
             * @param r The event condition which should be showed.
             */
            showEvent(e: BA.EventCondition): void;
            /**
             * Get the amount of displayed events.
             * @category Public
             * @returns The displayedEventsCnt.
             */
            getDisplayedEventsCnt(): number;
            /**
             * Determine if the entry has a content view button or not.
             * @category Public
             * @returns True if the entry has a content view button and false if not.
             */
            hasContentViewButton(): boolean;
            /**
             * Adds a button at the end of the entry to jump to a certain content or open a certain dialog
             * @category Public
             */
            addContentViewButton(): void;
            /**
             * Removes the content view button.
             * @category Public
             */
            removeContentViewButton(): void;
            setAttributes(attr: ProjectNavigationListEntry.IAttributes): this;
            getAttributes(): ProjectNavigationListEntry.IAttributes;
            /**
             * Setter for the MostEvents attribute.
             * Is required to align all values fields of the entries depending on the number of events of the entry with the most events.
             * @category Attribute setter and getter
             * @param p The number of events of the entry with the most events.
             * @returns The ProjectNavigationListEntry.
             */
            setMostEvents(p: number | null | undefined): this;
            /**
             * Getter for the MostEvents attribute.
             * @category Attribute setter and getter
             * @returns The MostEvents attribute.
             */
            getMostEvents(): number | null | undefined;
            /**
             * Setter for the ShowEvents attribute.
             * If true the events in each entry will be displayed.
             * @category Attribute setter and getter
             * @param b The new ShowEvents or null.
             * @returns The ProjectNavigationListEntry.
             */
            setShowEvents(p: boolean | null | undefined): this;
            /**
             * Getter for the ShowEvents attribute.
             * @category Attribute setter and getter
             * @returns The ShowEvents attribute.
             */
            getShowEvents(): boolean | null | undefined;
            /**
             * Setter for the ShowValue attribute.
             * If true the value of each entry will be displayed.
             * @category Attribute setter and getter
             * @param p The new ShowValue or null.
             * @returns The ProjectNavigationListEntry.
             */
            setShowValue(p: boolean | null | undefined): this;
            /**
             * Getter for the ShowValue attribute.
             * @category Attribute setter and getter
             * @returns The ShowValue attribute.
             */
            getShowValue(): boolean | null | undefined;
            /**
             * Setter for the showObjectType attribute.
             * If true the object type button in each entry will be displayed.
             * @category Attribute setter and getter
             * @param p The new ShowObjectType or null.
             * @return The ProjectNavigationListEntry.
             */
            setShowObjectType(p: boolean | null | undefined): this;
            /**
             * Getter for the ShowObjectType attribute.
             * @category Attribute setter and getter
             * @returns The ShowObjectType attribute.
             */
            getShowObjectType(): boolean | null | undefined;
            /**
             * Setter for the ContentHeight attribute.
             * @category Attribute setter and getter
             * @param p The new ContentHeight or null.
             * @returns The ProjectNavigationListEntry.
             */
            setContentHeight(p: number | null | undefined, q?: DimensionUnit | null): this;
            /**
             * Processor for the ContentHeight attribute.
             * @category Attribute setter and getter
             */
            protected __processContentHeight(): void;
            /**
             * Getter for the ContentHeight attribute.
             * @category Attribute setter and getter
             * @returns The ContentHeight attribute.
             */
            getContentHeight(): number | null | undefined;
            /**
             * Getter for the ContentHeightUnit attribute.
             * @category Attribute setter and getter
             * @returns The ContentHeight attribute.
             */
            getContentHeightUnit(): DimensionUnit | null | undefined;
            processBaObject(): void;
        }
        namespace ProjectNavigationListEntry {
            interface IAttributes extends ProjectNavigationList.IAttributes {
                /** Height of the content. */
                contentHeight?: number | null;
                /** Height unit of the content. */
                contentHeightUnit?: DimensionUnit | null;
            }
            enum ProjectNavigationListEntryEvents {
                onActiveEventsChanged = "onActiveEventsChanged",
                onDisplayedEventsChanged = "onDisplayedEventsChanged",
                onContentViewButtonPressed = "onContentViewButtonPressed"
            }
        }
    }
}
//# sourceMappingURL=ProjectNavigationList.d.ts.map
/** Contains the API for the BaSiteExtension. */
declare namespace TcHmi.BuildingAutomation.Server.BaSite {
    /** (ReadOnly) Identifies if the extension is available. */
    export let extensionAvailable: boolean;
    /** (ReadOnly) Identifies if the {@link BA.BaDevice}s were loaded. */
    export let devicesLoaded: boolean;
    /** The domain name of the extension. */
    export const DomainName = "BaSite";
    /** The name of the top view. */
    export const ProjectStructureName = "Top";
    /** (ReadOnly) The units of the extension. */
    export const Units: Map<number, string>;
    /** (ReadOnly) The information of all standard parameters. */
    export const BaStandardParameterInformation: BA.BaVariable.BaParameterInformation;
    /** (ReadOnly) The information of all additional parameters. */
    export const BaAdditionalParameterInformation: BA.BaDevice.BaDevicesAdditionalParameterInformation;
    /** (ReadOnly) The IDs from the variables that are periodically updated. */
    export const PeriodicallyUpdatedVariableIds: number[];
    /** Defines if a log is printed, when the extension is not available. */
    export let SuppressNotAvailableLog: boolean;
    /** List of available symbol names. */
    export let AvailableSymbolNames: string[];
    /** Diagnostics of the extension. */
    export const Diagnostics: IDiagnostics;
    /** Names of the gloabl event symbols. */
    export const EventsSymbols: {
        List: string;
        Count: string;
        AcknowledgeableCount: string;
    };
    /** Name of global event history symbols. */
    export const EventHistorySymbols: {
        List: string;
        Count: string;
    };
    /** The primitive object types. */
    export const PrimitveBaObjects: BA.ObjectType[];
    /** The implemented complex object types. */
    export const ImplementedNonPrimitiveValues: BA.BaParameterId[];
    /**
     * Get the user groups for the different user levels.
     * @category Symbols
     * @returns The {@link UserManagement.UserLevelGroups}.
     */
    export function getUserLevelGroupsAsync(): Promise<UserManagement.UserLevelGroups>;
    /**
     * Get the user groups for the different user levels.
     * @category Symbols
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the requested {@link UserManagement.UserLevelGroups}.
     */
    export function getUserLevelGroups(callback: Callback<UserManagement.UserLevelGroups>): void;
    /**
     * Change the locale in the extension.
     * @category Symbols
     * @param locale The new locale.
     */
    export function changeLocaleAsync(locale: BA.LanguageManager.EChoice): Promise<void>;
    /**
     * Change the locale in the extension.
     * @category Symbols
     * @param locale The new locale.
     * @param callback Asynchronous response callback which will be raised if the operation has finished.
     */
    export function changeLocale(locale: BA.LanguageManager.EChoice, callback: Callback<null>): void;
    /**
     * Get the units from the extension.
     * @category Symbols
     * @returns The requested {@link Units}.
     */
    export function getUnitsAsync(): Promise<Units>;
    /**
     * Get the units from the extension.
     * @category Symbols
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the requested {@link Units}.
     */
    export function getUnits(callback: Callback<Units>): void;
    /**
     * Get all BaStandardParameterInformation.
     * @category Symbols
     * @returns The requested {@link BA.BaVariable.BaParameterInformation}.
     */
    export function getBaStandardParameterInformationAsync(): Promise<BA.BaVariable.BaParameterInformation>;
    /**
     * Get all BaStandardParameterInformation.
     * @category Symbols
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the requested {@link BA.BaVariable.BaParameterInformation}.
     */
    export function getBaStandardParameterInformation(callback: Callback<BA.BaVariable.BaParameterInformation>): void;
    /**
     * Get the BaAdditionalParameterInformation for each device.
     * @category Symbols
     * @returns Thr requested {@link BA.BaDevice.BaDevicesAdditionalParameterInformation}.
     */
    export function getBaAdditionalParameterInformationAsync(): Promise<BA.BaDevice.BaDevicesAdditionalParameterInformation>;
    /**
     * Get all BaAdditionalParameterInformation.
     * @category Symbols
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the requested {@link BA.BaDevice.BaDevicesAdditionalParameterInformation}.
     */
    export function getBaAdditionalParameterInformation(callback: Callback<BA.BaDevice.BaDevicesAdditionalParameterInformation>): void;
    /**
     * Get periodically updated variable IDs.
     * @category Symbols
     * @returns The IDs of the periodically updated variables.
     */
    export function getPeriodicallyUpdatedVariableIDsAsync(): Promise<BA.BaParameterId[]>;
    /**
     * Get periodically updated variable IDs.
     * @category Symbols
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the requested IDs of the periodically updated variables.
     */
    export function getPeriodicallyUpdatedVariableIDs(callback: Callback<BA.BaParameterId[]>): void;
    /**
     * Get the {@link BA.BaVariable.ValueRange} of a {@link BA.BaVariable}.
     * @category Symbols
     * @param baVar The {@link BA.BaVariable} whose {@link BA.BaVariable.ValueRange} should be requested.
     * @returns The {@link BA.BaVariable.ValueRange} of the {@link BA.BaVariable}.
     */
    export function getValueRangeAsync(baVar: BA.BaVariable): Promise<BA.BaVariable.ValueRange>;
    /**
     * Get the {@link BA.BaVariable.ValueRange} of a {@link BA.BaVariable}.
     * @category Symbols
     * @param baVar The {@link BA.BaVariable} whose {@link BA.BaVariable.ValueRange} should be requested.
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the requested {@link BA.BaVariable.ValueRange}.
     */
    export function getValueRange(baVar: BA.BaVariable, callback: Callback<BA.BaVariable.ValueRange>): void;
    /**
     * Get the {BA.BaVariable.ValueRange}s of a collection of {@link BA.BaVariable}s.
     * @category Symbols
     * @param baVars The {@link BA.BaVariable}s whose {BA.BaVariable.ValueRange}s should be requested.
     * @returns The {BA.BaVariable.ValueRange}s of the {@link BA.BaVariable}s.
     */
    export function getValueRangesAsync(baVars: BA.BaVariable[]): Promise<Map<BA.BaVariable<any>, BA.BaVariable.ValueRange>>;
    /**
     * Get the {BA.BaVariable.ValueRange}s of a {@link BA.BaVariable}s.
     * @category Symbols
     * @param baVars The {@link BA.BaVariable}s whose {BA.BaVariable.ValueRange} should be requested.
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the requested {BA.BaVariable.ValueRange}s of the {@link BA.BaVariable}s.
     */
    export function getValueRanges(baVars: BA.BaVariable[], callback: Callback<Map<BA.BaVariable, BA.BaVariable.ValueRange>>): void;
    /**
     * Get the decorating info of a {@link BA.BaVariable}.
     * @category Symbols
     * @param baVar The {@link BA.BaVariable} whose decorating info should be loded.
     * @returns The decorating info of the {@link BA.BaVariable}.
     */
    export function getDecoratingInfoAsync(baVar: BA.BaVariable): Promise<object>;
    /**
     * Get the decorating info of a {@link BA.BaVariable}.
     * @category Symbols
     * @param baVar The {@link BA.BaVariable} whose decorating info should be loded.
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the requested decorating information of the {@link BA.BaVariable}.
     */
    export function getDecoratingInfo(baVar: BA.BaVariable, callback: Callback<object>): void;
    /**
     * Get the project structure of a {@link BA.BaDevice}.
     * @category Symbols
     * @param deviceName The name of the {@link BA.BaDevice}.
     * @returns The project structure of the {@link BA.BaDevice}.
     */
    export function getBaDeviceProjectStructureAsync(deviceName: string): Promise<BA.BaView.IBaViewAttributes | undefined>;
    /**
     * Get the project structure of a device.
     * @category Symbols
     * @param deviceName The name of the device.
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the requested project structure of the {@link BA.BaDevice}.
     */
    export function getBaDeviceProjectStructure(deviceName: string, callback: Callback<BA.BaView.IBaViewAttributes>): void;
    /**
     * Get a certain {@link BA.BaDevice}.
     * @category Symbols
     * @param opt The device request options.
     * @returns The requested {@link BA.BaDevice}.
     */
    export function getBaDeviceAsync(opt: IDeviceRequestOptions): Promise<BA.BaDevice.IBaDeviceAttributes>;
    /**
     * Get a certain {@link BA.BaDevice}.
     * @category Symbols
     * @param opt The device request options.
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the requested {@link BA.BaDevice}.
     */
    export function getBaDevice(opt: IDeviceRequestOptions, callback: Callback<BA.BaDevice.IBaDeviceAttributes>): void;
    /**
     * Get all {@link BA.BaDevice}s.
     * @category Symbols
     * @param opt Options how the {@link BA.BaDevice}s should be loaded.
     */
    export function getBaDevicesAsync(opt: {
        IncludeChildren?: boolean;
    }): Promise<{
        [index: string]: BA.BaDevice.IBaDeviceAttributes;
    }>;
    /**
     * Get all {@link BA.BaDevice}s.
     * @category Symbols
     * @param opt Options how the {@link BA.BaDevice}s should be loaded.
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the requested {@link BA.BaDevice}s.
     */
    export function getBaDevices(opt: {
        IncludeChildren?: boolean;
    }, callback: Callback<{
        [index: string]: BA.BaDevice.IBaDeviceAttributes;
    }>): void;
    /**
     * Checks the mapping of a {@link BA.BaDevice}.
     * @category Symbols
     * @param deviceName The name of the {@link BA.BaDevice}.
     * @returns True if the mapping for the {@link BA.BaDevice} exists, otherwise false.
     */
    export function checkBaDeviceMappingAsync(deviceName: string): Promise<boolean | undefined>;
    /**
     * Checks the mapping of a {@link BA.BaDevice}.
     * @category Symbols
     * @param deviceName The name of the {@link BA.BaDevice}.
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets true if the mapping for the {@link BA.BaDevice} exists, otherwise false.
     */
    export function checkBaDeviceMapping(deviceName: string, callback: Callback<boolean>): void;
    /**
     * Get a {@link BA.BaBasicObject}.
     * @category Symbols
     * @param req The {@link BA.BaBasicObject} or a request object that describes the requested BaObject.
     * @param includeChildren Defines if children should also be loaded. Default is false.
     * @param includeTexts Defines if the texts should be loaded. Default is false.
     * @returns The requested {@link BA.BaBasicObject}.
     */
    export function getBaObjectAsync(req: BA.BaBasicObject | IBaObjectRequestOptions, includeChildren?: boolean, includeTexts?: boolean): Promise<BA.BaBasicObject<any>>;
    /**
     * Get a {@link BA.BaBasicObject}.
     * @category Symbols
     * @param req The {@link BA.BaBasicObject} or a {@link IBaObjectRequestOptions} object that describes the requested BaObject.
     * @param includeChildren Defines if children should also be loaded. Default is false.
     * @param includeTexts Defines if the texts should be loaded. Default is false.
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the requested {@link BA.BaBasicObject}.
     */
    export function getBaObject(req: BA.BaBasicObject | IBaObjectRequestOptions, includeChildren: boolean, includeTexts: boolean, callback: Callback<BA.BaBasicObject>): Promise<void>;
    /**
     * Get the {@link BA.BaBasicObject.IBaBasicObjectTexts} of a BaObject.
     * @category Symbols
     * @param req The {@link BA.BaBasicObject} or a {@link IBaObjectRequestOptions} object that describes the requested {@link BA.BaBasicObject}.
     * @param includeChildren Defines if children should also be loaded. Default is false.
     * @returns The {@link BA.BaBasicObject.IBaBasicObjectTexts} of a {@link BA.BaBasicObject}.
     */
    export function getBaObjectTextsAsync(req: BA.BaBasicObject | IBaObjectRequestOptions, includeChildren?: boolean): Promise<BA.BaBasicObject.IBaBasicObjectTexts>;
    /**
     * Get the {@link BA.BaBasicObject.IBaBasicObjectTexts} of a BaObject.
     * @category Symbols
     * @param req The {@link BA.BaBasicObject} or a {@link IBaObjectRequestOptions} object that describes the requested {@link BA.BaBasicObject}.
     * @param includeChildren Defines if children should also be loaded. Default is false.
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the requested {@link BA.BaBasicObject.IBaBasicObjectTexts}.
     */
    export function getBaObjectTexts(req: BA.BaBasicObject | IBaObjectRequestOptions, includeChildren: boolean, callback: (res: BA.BaBasicObject.IBaBasicObjectTexts) => void): Promise<void>;
    /**
     * Acknowledge the event of a {@link BA.BaBasicObject}.
     * @category Symbols
     * @param baObj The {@link BA.BaBasicObject} which should be acknowledged.
     */
    export function acknowledgeBaObjectAsync(baObj: BA.BaBasicObject): Promise<void>;
    /**
     * Acknowledge the event of a {@link BA.BaBasicObject}.
     * @category Symbols
     * @param baObj The {@link BA.BaBasicObject} which should be acknowledged.
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function is called when acknowledging was done.
     */
    export function acknowledgeBaObject(baObj: BA.BaBasicObject, callback: Callback<void>): void;
    /**
     * Get referring {@link BA.BaObject} of a {@link BA.BaObject}.
     * @category Symbols
     * @param req The {@link BA.BaObject} or a {@link IBaObjectRequestOptions} object that describes the {@link BA.BaObject} whose referring {@link BA.BaObject}s should be requested.
     * @returns The {@link BA.BaObjectParameter}s of the referring {@link BA.BaObject}s.
     */
    export function getReferringObjectsAsync(req: BA.BaObject | IBaObjectRequestOptions): Promise<BA.BaObjectParameter[]>;
    /**
     * Get referring {@link BA.BaObject} of a {@link BA.BaObject}.
     * @category Symbols
     * @param req The {@link BA.BaObject} or a {@link IBaObjectRequestOptions} object that describes the {@link BA.BaObject} whose referring {@link BA.BaObject}s should be requested.
     * @returns The {@link BA.BaObjectParameter}s of the referring {@link BA.BaObject}s.
     */
    export function getReferringObjects(req: BA.BaObject | IBaObjectRequestOptions, callback: Callback<BA.BaObjectParameter[]>): Promise<void>;
    /**
     * Assign a {@link BA.BaObject} to an unused trend.
     * @category Symbols
     * @param baObj The {@link BA.BaObject} or a request object that describes the requested {@link BA.BaObject}.
     * @returns True if the assigning was successful, otherwise false.
     */
    export function assignBaObjectToUnusedTrendAsync(baObj: BA.BaObject.IBaObject | IBaObjectRequestOptions): Promise<void>;
    /**
     * Assign a {@link BA.BaObject} to an unused trend.
     * @category Symbols
     * @param baObj The {@link BA.BaObject} or a request object that describes the requested {@link BA.BaObject}.
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets true if assigning was sucessful, otherwise false.
     */
    export function assignBaObjectToUnusedTrend(baObj: BA.BaObject.IBaObject | IBaObjectRequestOptions, callback: Callback<boolean>): void;
    /**
     * Remove a {@link BA.BaObject} from a assigning trends.
     * @category Symbols
     * @param baObj The {@link BA.BaObject} or a request object that describes the requested {@link BA.BaObject}.
     * @returns True if removing was successful, otherwise false.
     */
    export function removeBaObjectFromAssignedTrendsAsync(baObj: BA.BaObject.IBaObject | IBaObjectRequestOptions): Promise<void>;
    /**
     * Remove a {@link BA.BaObject} from a assigning trends.
     * @category Symbols
     * @param baObj The {@link BA.BaObject} or a request object that describes the requested {@link BA.BaObject}.
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets true if removing was sucessful, otherwise false.
     */
    export function removeBaObjectFromAssignedTrends(baObj: BA.BaObject.IBaObject | IBaObjectRequestOptions, callback: Callback<void>): void;
    /**
     * Get the global event list.
     * @category Symbols
     * @returns The global event list.
     */
    export function getEventListAsync(): Promise<BA.BaEvent.IBaEvent[]>;
    /**
     * Get the global event list.
     * @category Symbols
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the global event list.
     */
    export function getEventList(callback: Callback<BA.BaEvent.IBaEvent[]>): void;
    /**
     * Get the global event history.
     * @category Symbols
     * @returns The global event histroy.
     */
    export function getEventHistoryAsync(): Promise<BA.BaEvent.IBaEvent[]>;
    /**
     * Get the global event history.
     * @category Symbols
     * @param callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets the global event histroy.
     */
    export function getEventHistory(callback: Callback<BA.BaEvent.IBaEvent[]>): void;
    /**
     * Watches the event count per event type of the global event list or the event list of a BaView/BaObject.
     * @category Symbols
     * @param history Defines if the event history or the current events shall be used.
     * @param baObj The BaObject or a request object that describes the requested BaObject.
     * @param callback Asynchronous response callback which will be raised if the event count per type has changed.
     * @returns The {@link DestroyFunction} to destroy the watch.
     */
    export function watchEventCountPerType(history: boolean, baObj: BA.BaBasicObject | IBaObjectRequestOptions | undefined, callback: Callback<Map<BA.EventCondition, number>>): DestroyFunction;
    /**
     * Watches the acknowledgeable event count per event type of the global event list or the event list of a BaView/BaObject.
     * @category Symbols
     * @param baObj The BaObject or a request object that describes the requested BaObject.
     * @param callback Asynchronous response callback which will be raised if the acknowledgeable event count per type has changed.
     * @returns The {@link DestroyFunction} to destroy the watch.
     */
    export function watchAcknowledgeableEventCountPerType(baObj: BA.BaBasicObject | IBaObjectRequestOptions | undefined, callback: Callback<Map<BA.EventCondition, number>>): DestroyFunction;
    /** Enumeration of all events that are raised by the API. */
    export enum Events {
        /** Is raised when the extension is available. */
        onExtensionAvailable = "BaSite.onExtensionAvailable",
        /** Is raised when the extension was loaded. */
        onExtensionLoaded = "BaSite.onExtensionLoaded",
        /** Is raised when the extension was unloaded. */
        onExtensionUnloaded = "BaSite.onExtensionUnloaded",
        /** Is raised when all devices were loaded. */
        onBaDevicesLoaded = "BaSite.onBaDevicesLoaded",
        /** Is raised when the diagnostics of the extension have changed. */
        onDiagnosticsChanged = "BaSite.onDiagnosticsChanged",
        /** Is raised when the runtime diagnostics have changed. E.g., if a device was added, renamed or Net-Id has changed. */
        onRuntimeDiagnosticsChanged = "BaSite.onRuntimeDiagnosticsChanged",
        /** Is raised when the units were loaded from the extension. */
        onUnitsLoadedEvent = "BaSite.onUnitsLoaded",
        /** Is raised when the information of all standard parameters were loaded. */
        onBaStandardParameterInformationLoaded = "BaSite.onBaStandardParameterInformationLoaded",
        /** Is raised when the information of all additional parameters were loaded. */
        onBaAdditionalParameterInformationLoaded = "BaSite.onBaAdditionalParameterInformationLoaded"
    }
    /** A collection of units. */
    export type Units = Map<number, string>;
    /** Options to request a device from the extension. */
    export interface IDeviceRequestOptions {
        /** The name of the device (e.g. 'PLC1'). */
        DeviceName: string;
        /** Defines if the children of the ProjectStructure will be loaded completely or not. */
        LoadChildren?: boolean;
    }
    /** Options to request a BaObject from the extension. */
    export interface IBaObjectRequestOptions {
        DeviceName: string;
        BaObjectInstancePath: string;
        IncludeChildren?: boolean;
        IncludeTexts?: boolean;
    }
    /** Options to request a BaVariable from the extension. */
    export interface IBaVariableRequestOptions extends IBaObjectRequestOptions {
        BaVarId: BA.BaParameterId;
        BaVarInstName?: string;
    }
    /** Result for requesting the referring objects of a BaObject. */
    export interface IGetReferringObjectsServerResult {
        ReferenceObject: Required<IBaBasicObjectAttributesServerResult>;
        ReferenceObjectIdentifier: BA.BaIdentifier;
        ReferencedParameter: BA.BaParameterId;
        OwnerObject: IBaBasicObjectAttributesServerResult;
    }
    /** Result for requesting the BaEvent information. */
    export interface IBaEventInformationServerResult {
        /** Event type */
        t: BA.EventType;
        /** Event state */
        s: BA.EventIconState;
    }
    /**
     * Validates the {@link IBaEventInformationServerResult} interface.
     * @category TypeGuards
     * @param p The variable to be validated.
     * @returns True if the validation was successful, otherwise false.
     */
    export function isIBaEventInformationServerResult(p: any): p is IBaEventInformationServerResult;
    /** Result for requesting a BaEvent. */
    export interface IBaEventServerResult {
        /** TimeStamp */
        ts: string | null;
        /** Event */
        e: IBaEventInformationServerResult;
        /** IsActive */
        a?: boolean;
        /** IsHistorical */
        h: boolean;
        /** LockPriority */
        l: BA.LockPriority;
        /** DeviceName */
        d: string;
        /** Identifier */
        id: BA.BaIdentifier;
        /** Instance path */
        ip: string;
        /** Description */
        desc: string;
        /** ObjectName */
        o: string;
        /** EventClassId */
        ecID: number;
        /** EventClass description */
        ecDesc: string;
        /** EventClass instance description */
        ecInstDesc: string;
    }
    /**
     * Validates the {@link IBaEventServerResult} interface.
     * @category TypeGuards
     * @param p The variable to be validated.
     * @returns True if the validation was successful, otherwise false.
     */
    export function isIBaEventServerResult(p: any): p is IBaEventServerResult;
    /** Diagnostics of the extension. */
    export interface IDiagnostics {
        siteApiVersion: string;
        compatibleSiteServerVersion: string;
        adsDllVersion: string;
        tcHmiSrvExtVersion: string;
        devices?: {
            [index: string]: IDeviceDiagnostics;
        };
    }
    /** Diagnostics of a device. */
    export interface IDeviceDiagnostics {
        deviceName: string;
        address: string;
        connectionStateDescription: string;
        connectionState: BA.BaDevice.ConnectionState;
        nameSpace?: string;
        components?: {
            bacnetRevision: string;
            bacnetStackVersion: string;
            tc3XBaVersion: string;
            tc3Ba2CommonVersion: string;
            tc3BACnetRev14Version: string;
            siteServerVersion: string;
        };
        statistics?: {
            objectCount: number;
            plantCount: number;
            unusedTrendObjects: number;
            watchedVariables: number;
        };
    }
    /**
     * Validates the {@link IDeviceDiagnostics} interface.
     * @category TypeGuards
     * @param p The variable to be validated.
     * @returns True if the validation was successful, otherwise false.
     */
    export function isIDeviceDiagnostics(p: any): p is IDeviceDiagnostics;
    export class BaSiteError extends BaseError {
    }
    /**
     * Identifies if there are any devices where the {@link BA.BaDevice.ConnectionState} is connected.
     * @category Utilities
     * @returns True of is any connected device, otherwise false.
     */
    export function hasConnectedDevice(): boolean;
    /**
     * Defines the default size of the diagnostics dialog.
     * Default is { height: 500, width: 500 }.
     */
    export let DefaultDiagnosticsDialogSize: {
        height: number;
        width: number;
    };
    /**
     * Opens a dialog window which displays the diagnostics of the extension.
     * @category Utilities
     */
    export function openDiagnosticsWindow(): void;
    /**
     * Updates Globals.BaStandardParameterInformation.
     * @category Utilities
     */
    export function updateBaStandardParameterInformation(): void;
    /**
     * Updates Globals.BaAdditionalParameterInformation.
     * @category Utilities
     */
    export function updateBaAdditionalParameterInformation(): void;
    /**
     * Updates Globals.Units.
     * @category Utilities
     */
    export function updateUnits(): void;
    /**
     * Converts the {@link IBaEventServerResult} into a {@link BA.BaObject.IBaEvent}.
     * @category Utilities
     * @param result The result from the extension.
     * @returns The converted {@link BA.BaObject.IBaEvent}.
     */
    export function convertIBaEventServerResult(result: IBaEventServerResult): BA.BaEvent.IBaEvent;
    /**
     * Converts an array of the {@link IBaEventServerResult} into an array of {@link BA.BaObject.IBaEvent}.
     * @category Utilities
     * @param result The result from the extension.
     * @returns The array of converted {@link BA.BaObject.IBaEvent}.
     */
    export function convertIBaEventServerResults(events: IBaEventServerResult[]): BA.BaEvent.IBaEvent[];
    /** Result when requesting the attributes of a BaVariable. */
    interface IBaVariableAttributesServerResult {
        /** Value of the BaVariable. BETA Value is currently only availiable for primitive values because BA do not support non primitive values yet. */
        V?: any;
        /** Access of the BaVariable. */
        A: number[];
        /** Data type of the BaVariable (e.g. string, number, object, enum). */
        DT: DataType | null;
        /** If DataType is "array" the ArrayType of the BaVariable describes which data type the entries of the array have. */
        AT: DataType | null;
        /** BETA Used to display structured parameters or arrays. */
        C?: Map<string, BA.BaVariable.IBaVariableAttributes<any>> | null;
        HasPrimitiveValue?: boolean;
        Title?: string;
        ID?: BA.BaParameterId;
    }
    /** Result when requesting the attributes of a BaBasicObject. */
    interface IBaBasicObjectAttributesServerResult {
        /** Subject info of the BaObject. */
        SI: BA.BaSubjectInfo;
        /** The identifier contains information about the BaObject. It contains the ObjectType of the BaObject. */
        Id: BA.BaIdentifier;
        /** Purpose of the BaObject (e.g. structurize, general). */
        Pu: BA.ObjectPurpose;
        /** Operation type of the object (e.g. none, setpoint or display). */
        OT: BA.OperationType;
        /** Node type of the object. */
        NT: BA.NodeType;
        /** Instance path of the BaObject to find it in the device of the  */
        IP: string;
        /** Data type of the BaObject (e.g. string, number, object, enum). */
        DT: DataType;
        /** Parameters of the BaObject. */
        P: {
            [index: string]: IBaVariableAttributesServerResult;
        };
        /** Additional parameters of the BaObject. */
        AP: {
            [index: string]: IBaVariableAttributesServerResult;
        };
        /** Type name of the BaObject (e.g. FB_BA_Light). Only transmitted if the BaObject contains additional parameters */
        T?: string;
        /** Device name */
        D?: string;
        /** Texts of the BaObject */
        texts?: BA.BaBasicObject.IBaBasicObjectTexts;
    }
    export {};
}
//# sourceMappingURL=BaSite.d.ts.map
declare namespace TcHmi.BuildingAutomation.Server.BaSite.UserData {
    /**
     * Saves the last content.
     * @category Saving data
     * @param contentPath The path of the content.
     */
    function saveLastContentAsync(contentPath: string): Promise<void>;
    /**
     * Load the last content.
     * @category Loading data
     * @returns The path of the last content.
     */
    function loadLastContentAsync(): Promise<string | null | undefined>;
    /**
     * Saves the last theme name.
     * @category Saving data
     * @param theme The name of the theme.
     */
    function saveLastThemeAsync(theme: string): Promise<void>;
    /**
     * Load the last theme.
     * @category Loading data
     * @returns The name of the last theme.
     */
    function loadLastThemeAsync(): Promise<string | null | undefined>;
    /**
     * Saves the settings of a {@link Charting.Trend}.
     * @category Saving data
     * @param trendName The name of the {@link Charting.Trend}.
     * @param settings The settings of the {@link Charting.Trend}.
     */
    function saveTrendSettingsAsync(trendName: string, settings: Charting.Trend.ISettings): Promise<void>;
    /**
     * Loads the settings of a {@link Charting.Trend}.
     * @category Loading data
     * @param trendName The name of the {@link Charting.Trend}.
     * @returns The settings of the {@link Charting.Trend}.
     */
    function loadTrendSettingsAsync(trendName: string): Promise<Charting.Trend.ISettings | null | undefined>;
    /**
     * Saves the options of an {@link Charting.Axis}.
     * @category Saving data
     * @param axisName The name of the {@link Charting.Axis}.
     * @param options The options of the {@link Charting.Axis}.
     */
    function saveAxisOptionsAsync(axisName: string, options: Charting.Axis.IOptions): Promise<void>;
    /**
     * Load the options of an {@link Charting.Axis}.
     * @category Loading data
     * @param axisName The name of the {@link Charting.Axis}.
     * @returns The options of the {@link Charting.Axis}.
     */
    function loadAxisOptionsAsync(axisName: string): Promise<Charting.Axis.IOptions | null | undefined>;
    /**
     * Saves a {@link Charting.Trend.CollectionConfigurator.ICollection}.
     * @category Saving data
     * @param name The name of the collection.
     * @param col The {@link Charting.Trend.CollectionConfigurator.ICollection}.
     */
    function saveTrendCollectionAsync(name: string, col: Charting.Trend.CollectionConfigurator.ICollection): Promise<void>;
    /**
     * Loads all {@link Charting.Trend.CollectionConfigurator.ICollection}.
     * @category Loading data
     * @returns All {@link Charting.Trend.CollectionConfigurator.ICollection}.
     */
    function loadTrendCollectionsAsync(): Promise<Charting.Trend.ICollectionStorageData>;
    /**
     * Deletes a {@link Charting.Trend.CollectionConfigurator.ICollection}
     * @category Deleting data
     * @param name The name of the {@link Charting.Trend.CollectionConfigurator.ICollection}.
     */
    function deleteTrendCollectionAsync(name: string): Promise<void>;
    /**
     * Saves the selection of a trend collection.
     * @category Saving data
     * @param trendCollection The name of the collection.
     */
    function saveTrendCollectionSelectionAsync(trendCollection: string): Promise<void>;
    /**
     * Loads the names of all selected trend collectons.
     * @category Loading data
     * @returns The names of all selected trend collections.
     */
    function loadTrendCollectionSelectionAsync(): Promise<string[] | null | undefined>;
    /**
     * Deletes a selection of a trend collection.
     * @category Deleting data
     * @param trendCollection The name of the trend collection.
     */
    function deleteTrendCollectionSelectionAsync(trendCollection: string): Promise<void>;
    /**
     * Clears the entire user data of the active user.
     * @category Deleting data
     */
    function clearUserData(): Promise<void>;
}
//# sourceMappingURL=BaSite.UserData.d.ts.map
declare namespace TcHmi.BuildingAutomation.Server.BaSite.UserManagement {
    type UserLevelGroups = Map<BA.Role, string[]>;
    /**
     * Load user level groups to the client. This is done during initializing.
     */
    function LoadUserLevelGroupsAsync(): Promise<void>;
    /**
     * Check if the current user sufficient rights.
     * @param check The role that should be checked for the current user.
     * @returns True if the current user has sufficient rights and false if not.
     */
    function checkAccess(check: BA.Role): boolean;
    /**
     * Get the Role of the current user.
     * @returns The Role of the current user.
     */
    function getBaRole(): BA.Role;
}
//# sourceMappingURL=BaSite.UserManagement.d.ts.map
declare namespace TcHmi.BuildingAutomation.Server {
    /**
     * Call a function from the TcHmi server.
     * @param functionName The name of the function including the domain of the server extension (e.g. 'MyDomain.MyFunction').
     * @param params (Optional) Parameters that should be passed to the function.
     * @returns A promise that fulfills with the result of the server function
     */
    function callServerFunctionAsync<T>(functionName: string, params?: any | null): Promise<T | undefined>;
    /**
     * Call a function from the TcHmi server.
     * @param functionName The name of the function including the name of the server extension (e.g. 'BaExtension.GetBaObject').
     * @param params Parameters that should be passed to the function.
     * @param callback Asynchronous response callback.
     */
    function callServerFunction<T>(functionName: string, params?: any | null, callback?: Callback<T>): void;
    /**
     * List all available symbol names of a domain
     * @param domain The name of the domain (server extension).
     * @returns A promise which fulfills in an array of symbol names.
     */
    function getAvailableSymbolNamesAsync(domain: string): Promise<string[]>;
    /**
     * Checks if a symbol is mapped from the BaSite extension.
     * @param symbolName The name of the symbol.
     * @param options Options for the symbol checking.
     * @returns A promise which fullfills to true, if the symbol is mapped, otherwise false.
     */
    function symbolExistsAsync(symbolName: string, options: {
        domain: string;
    }): Promise<boolean>;
    class SubscriptionCollector {
        /**
         * Collects and creates subscriptions to the TcHmiServer.
         * @param wait Wait time until the subscription will be created (Starts when the first mapping was added).
         */
        constructor(wait?: number);
        private __wait;
        private __timeoutId;
        private __requests;
        private __logger;
        private __subscriptionId;
        /**
         * Add a request to the collector.
         * @param symbol The name of the mapping. (Not the symbol expression!).
         * @param cb Callback will be invoked if value has changed.
         * @returns The id of the callback for the mapping (Need to remove callback with remove(id)).
         */
        add<T>(mapping: string, cb: Resolver<T>): ISubscriptionIdentifier;
        /**
         * Removes a request from the collector
         * @param mapping The name of the mapping. (Not the symbol expression!).
         * @param id The id which was returned from add().
         */
        remove(identifier: ISubscriptionIdentifier): void;
        /**
         * Update the subscription with the current requests.
         */
        private __updateSubscription;
    }
    namespace SubscriptionCollector {
        /** The time which the {@link SubscriptionCollector} waits until the subscriptions are created. */
        let DefaultWaitTime: number;
        /** The interval for the combined subscription. */
        let Interval: number;
    }
    /** Collects different subscription request and creates them with a single subscription after the {@link SubscriptionCollector.DefaultWaitTime}. */
    const subscriptionCollector: SubscriptionCollector;
    /** The access rights defined by TcHmiServer. */
    enum AccessRight {
        observe = "observe",
        operate = "operate"
    }
    /** A resolver called when a request was done. */
    type Resolver<T = any> = ((p: T) => void);
    /** A rejecter called when a request has failed. */
    type Rejecter = ((reason: any) => void);
    /** Identifier for an added subscription to the {@link SubscriptionCollector}. */
    interface ISubscriptionIdentifier {
        mapping: string;
        id: number;
    }
    /** Asynchronous response callback which will get an error and the result. If execution was successful, error will be 'null'.If execution has failed the result will be undefined. */
    type Callback<T> = (error: Error | null, result?: T) => void;
    class Error extends BaseError {
        /**
         * An error from the server API.
         * @param message The message of the error.
         * @param options Options for the error.
         */
        constructor(message: string, options?: IBaseErrorOptions);
    }
}
//# sourceMappingURL=Server.d.ts.map
declare namespace TcHmi.BuildingAutomation.Storage {
    enum Location {
        /** Stores the user data in a data base in the BaSiteExtension. */
        baSite = 0,
        /** Stores the user data in the locale storage of the browser. */
        localeStorage = 1
    }
    namespace UserData {
        let LastContentStorageLocation: Location;
        let LastThemeStorageLocation: Location;
        let TrendSettingsStorageLocation: Location;
        let TrendCollectionStorageLocation: Location;
        let TrendCollectionSelectionStorageLocation: Location;
        /**
         * Saves the last content.
         * @category Saving data
         * @param contentPath The path of the content.
         */
        function saveLastContentAsync(contentPath: string): Promise<void>;
        /**
         * Load the last content.
         * @category Loading data
         * @returns The path of the last content.
         */
        function loadLastContentAsync(): Promise<string | null | undefined>;
        /**
         * Saves the last theme name.
         * @category Saving data
         * @param theme The name of the theme.
         */
        function saveLastThemeAsync(theme: string): Promise<void>;
        /**
         * Load the last theme.
         * @category Loading data
         * @returns The name of the last theme.
         */
        function loadLastThemeAsync(): Promise<string | null | undefined>;
        /**
         * Saves the settings of a {@link Charting.Trend}.
         * @category Saving data
         * @param trendName The name of the {@link Charting.Trend}.
         * @param settings The settings of the {@link Charting.Trend}.
         */
        function saveTrendSettingsAsync(trendName: string, settings: Charting.Trend.ISettings): Promise<void>;
        /**
         * Loads the settings of a {@link Charting.Trend}.
         * @category Loading data
         * @param trendName The name of the {@link Charting.Trend}.
         * @returns The settings of the {@link Charting.Trend}.
         */
        function loadTrendSettingsAsync(trendName: string): Promise<Charting.Trend.ISettings | null | undefined>;
        /**
         * Saves the options of an {@link Charting.Axis}.
         * @category Saving data
         * @param axisName The name of the {@link Charting.Axis}.
         * @param options The options of the {@link Charting.Axis}.
         */
        function saveAxisOptionsAsync(axisName: string, options: Charting.Axis.IOptions): Promise<void>;
        /**
         * Load the options of an {@link Charting.Axis}.
         * @category Loading data
         * @param axisName The name of the {@link Charting.Axis}.
         * @returns The options of the {@link Charting.Axis}.
         */
        function loadAxisOptionsAsync(axisName: string): Promise<Charting.Axis.IOptions | null | undefined>;
        /**
         * Saves a {@link Charting.Trend.CollectionConfigurator.ICollection}.
         * @category Saving data
         * @param name The name of the collection.
         * @param col The {@link Charting.Trend.CollectionConfigurator.ICollection}.
         */
        function saveTrendCollectionAsync(name: string, col: Charting.Trend.CollectionConfigurator.ICollection): Promise<void>;
        /**
         * Loads all {@link Charting.Trend.CollectionConfigurator.ICollection}.
         * @category Loading data
         * @returns All {@link Charting.Trend.CollectionConfigurator.ICollection}.
         */
        function loadTrendCollectionsAsync(): Promise<Charting.Trend.ICollectionStorageData | null | undefined>;
        /**
         * Deletes a {@link Charting.Trend.CollectionConfigurator.ICollection}
         * @category Deleting data
         * @param name The name of the {@link Charting.Trend.CollectionConfigurator.ICollection}.
         */
        function deleteTrendCollectionAsync(name: string): Promise<void>;
        /**
         * Saves the selection of a trend collection.
         * @category Saving data
         * @param trendCollection The name of the collection.
         */
        function saveTrendCollectionSelectionAsync(trendCollection: string): Promise<void>;
        /**
         * Loads the names of all selected trend collectons.
         * @category Loading data
         * @returns The names of all selected trend collections.
         */
        function loadTrendCollectionSelectionAsync(): Promise<string[] | null | undefined>;
        /**
         * Deletes a selection of a trend collection.
         * @category Deleting data
         * @param trendCollection The name of the trend collection.
         */
        function deleteTrendCollectionSelectionAsync(trendCollection: string): Promise<void>;
        /**
         * Clears the entire user data.
         * @category Deleting data
         */
        function clearUserDataAsync(): Promise<void>;
        /**
         * Contains functions to store user data in the local storage of the browser.
         */
        namespace Local {
            const storage: LocalStorage<{
                lastContent: string;
                lastTheme: string;
                trendSettings: {
                    [index: string]: Charting.Trend.ISettings;
                };
                axisOptions: {
                    [index: string]: Charting.Axis.IOptions;
                };
                trendCollections: {
                    [index: string]: Charting.Trend.CollectionConfigurator.ICollection;
                };
                trendCollectionSelection: string[];
            }, {
                lastContent?: undefined;
                lastTheme?: undefined;
                trendSettings?: undefined;
                axisOptions?: undefined;
                trendCollections?: undefined;
                trendCollectionSelection?: undefined;
            }>;
            /**
             * Saves the last content.
             * @category Saving data
             * @param contentPath The path of the content.
             */
            function saveLastContent(contentPath: string): void;
            /**
             * Load the last content.
             * @category Loading data
             * @returns The path of the last content.
             */
            function loadLastContent(): string | null | undefined;
            /**
             * Saves the last theme name.
             * @category Saving data
             * @param theme The name of the theme.
             */
            function saveLastTheme(theme: string): void;
            /**
             * Load the last theme.
             * @category Loading data
             * @returns The name of the last theme.
             */
            function loadLastTheme(): string | null | undefined;
            /**
             * Saves the settings of a {@link Charting.Trend}.
             * @category Saving data
             * @param trendName The name of the {@link Charting.Trend}.
             * @param settings The settings of the {@link Charting.Trend}.
             */
            function saveTrendSettings(trendName: string, settings: Charting.Trend.ISettings): void;
            /**
             * Loads the settings of a {@link Charting.Trend}.
             * @category Loading data
             * @param trendName The name of the {@link Charting.Trend}.
             * @returns The settings of the {@link Charting.Trend}.
             */
            function loadTrendSettings(trendName: string): Charting.Trend.ISettings | null | undefined;
            /**
             * Saves the options of an {@link Charting.Axis}.
             * @category Saving data
             * @param axisName The name of the {@link Charting.Axis}.
             * @param options The options of the {@link Charting.Axis}.
             */
            function saveAxisOptions(axisName: string, options: Charting.Axis.IOptions): void;
            /**
             * Load the options of an {@link Charting.Axis}.
             * @category Loading data
             * @param axisName The name of the {@link Charting.Axis}.
             * @returns The options of the {@link Charting.Axis}.
             */
            function loadAxisOptions(axisName: string): Charting.Axis.IOptions | null | undefined;
            /**
             * Saves a {@link Charting.Trend.CollectionConfigurator.ICollection}.
             * @category Saving data
             * @param collectionName The name of the collection.
             * @param col The {@link Charting.Trend.CollectionConfigurator.ICollection}.
             */
            function saveTrendCollection(collectionName: string, col: Charting.Trend.CollectionConfigurator.ICollection): void;
            /**
             * Loads all {@link Charting.Trend.CollectionConfigurator.ICollection}.
             * @category Loading data
             * @returns All {@link Charting.Trend.CollectionConfigurator.ICollection}.
             */
            function loadTrendCollections(): Charting.Trend.ICollectionStorageData | null | undefined;
            /**
             * Deletes a {@link Charting.Trend.CollectionConfigurator.ICollection}
             * @category Deleting data
             * @param collectionName The name of the {@link Charting.Trend.CollectionConfigurator.ICollection}.
             */
            function deleteTrendCollection(collectionName: string): void;
            /**
             * Saves the selection of a trend collection.
             * @category Saving data
             * @param trendCollection The name of the collection.
             */
            function saveTrendCollectionSelection(trendCollection: string): void;
            /**
             * Loads the names of all selected trend collectons.
             * @category Loading data
             * @returns The names of all selected trend collections.
             */
            function loadTrendCollectionSelection(): string[] | null | undefined;
            /**
             * Deletes a selection of a trend collection.
             * @category Deleting data
             * @param trendCollection The name of the trend collection.
             */
            function deleteTrendCollectionSelection(trendCollection: string): void;
            /**
             * Clears the entire user data.
             * @category Deleting data
             */
            function clear(): void;
        }
    }
}
//# sourceMappingURL=UserData.d.ts.map
declare namespace TcHmi.BuildingAutomation.System {
    class AttachObserver {
        private static __mutationOberserverHandler;
        private static __mutationObserver;
        private static __nodes;
        /**
         * Initializes the AttachObserver
         * @category Public
         */
        static init(): void;
        /**
         * Add a node to the AttachObserver.
         * @param node The node to be added.
         * @param opt Options for the node including callbacks after attach and detach.
         */
        static add(node: Components.IJQueryNode, opt: {
            /** Will be called when node was attached to the DOM. */
            attachedCb?: () => void;
            /** Will be called when node was detached to the DOM. */
            detachedCb?: () => void;
            /** Set to true if the attach callback should not be called, when the node is already part of the DOM when calling this method. */
            omitCbWhenAlreadyAttached?: boolean;
        }): number;
        /**
         * Remove a node from the AttachObserver.
         * @category Public
         * @param node The node to be removed.
         */
        static remove(node: Components.IJQueryNode, id: number): boolean;
        /**
         * Get flag if the node is attached or not.
         * @category Public
         * @param node The node to be checked.
         * @returns True if the node is attached and false if not.
         */
        static getIsAttached(node: Components.IJQueryNode): boolean;
        private static __filterMutations;
        private static __filterNode;
        private static __invokeCallbacks;
    }
}
//# sourceMappingURL=AttachObserver.d.ts.map
declare namespace TcHmi.BuildingAutomation.System {
    class OverlayContainer {
        private static __container;
        private static __backdrop;
        private static __backdropPressedHandler;
        private static __preventHandler;
        static set(el: JQuery, opt?: OverlayContainer.IOptions): JQuery;
        static remove(el?: JQuery): void;
    }
    namespace OverlayContainer {
        interface IOptions {
            /** Should the overlay be darken over the background. Default is true. */
            dimBackground?: boolean | null;
            onBackdropPressed?: (ev: JQuery.TriggeredEvent) => void;
        }
    }
}
//# sourceMappingURL=OverlayContainer.d.ts.map
declare namespace TcHmi.BuildingAutomation.System {
    class SVGLoader {
        private static __loadedSVGs;
        static get(path: string): Promise<string>;
        /**
         * Read the content of an SVG file.
         * @param path The path of the SVG file.
         * @returns The content of the SVG file.
         */
        private static __readSVGFile;
    }
}
//# sourceMappingURL=SVGLoader.d.ts.map
declare namespace TcHmi.BuildingAutomation.System {
    class ValueHandler<T> implements IDestroy, Logger.ILogger {
        constructor(parent: ValueHandler.IValueHandler<T>, attr?: ValueHandler.IAttributes);
        /**
         * Attributes for the value handler.
         * @category Internal
         */
        protected __attrHandler: AttributeHandler<ValueHandler.IAttributes>;
        private __parent;
        logger: Logger;
        private __valueMapping;
        private __valueSubscriptionId;
        /**
         * Stores the watch identifier of the BaVariable if the passes data is a BaVariable.
         * @category Internal
         */
        private __baVarWatchId;
        /**
         * Calls the destroy function for the watch and destroys the internal symbol.
         * @category Internal
         */
        private __removeValueSubscription;
        /**
         * If the parent changes the value it can recognize the ValueHandler to handle the changed value.
         * If autoWrite is true the value can be written to the PLC for example.
         * @category Public.
         * @param val The new value to be written.
         */
        processChangedValue(val: T): void;
        /**
         * Set all attributes of the BackgroundStyler.
         * @category Attributes
         * @param attr The new attributes for the BackgroundStyler.
         * @returns The BackgroundStyler.
         */
        setAttributes(attr: ValueHandler.IAttributes): this;
        /**
         * Getter for the current attributes.
         * @category Attributes
         * @returns The current attributes.
         */
        getAttributes(): ValueHandler.IAttributes;
        /**
         * Set a SymbolExpression to watch and write it.
         * When the value has changed the onValueChanged() method of the parent will be called.
         * @category Attribute setter and getter
         * @param p The SymbolExpression.
         * @returns The ValueHandler.
         */
        setSymbolExpression(p: SymbolExpression | null | undefined): this;
        /**
         * Getter for the SymbolExpression attribute.
         * @category Attribute setter and getter
         * @returns The SymbolExpression attribute.
         */
        getSymbolExpression(): SymbolExpression | null | undefined;
        /**
         * Set a BaVariable to watch its value.
         * @category Attribute setter and getter
         * @param p The BaVariable to observe.
         * @returns The ValueHandler
         */
        setBaVariable(p: BA.BaVariable<T> | null | undefined): this;
        /**
         * Getter for the BaVariable attribute.
         * @category Attribute setter and getter
         * @returns The BaVariable attribute.
         */
        getBaVariable(): BA.BaVariable<any> | null | undefined;
        destroy(): void;
    }
    namespace ValueHandler {
        interface IAttributes {
            /** If true, values send to processChangedValue() will be written to the PLC for example. */
            autoWrite?: boolean | null;
            /** The symbol expression for the symbol to watch and write values. */
            symbolExpression?: SymbolExpression | null;
            /** The BaVariable to watch and write values. */
            baVariable?: BA.BaVariable | null;
        }
        interface IValueHandler<T> extends Components.Base {
            /** Handler to write values to plc. */
            valueHandler: ValueHandler<T>;
            /**
             * Called from the ValueHandler when the value has changed.
             * @param newVal The new value.
             */
            onValueChanged(newVal: T | null | undefined): void;
        }
        interface IValueHandlerAttributes {
            /** Attributes for the value handler. */
            valueHandler?: ValueHandler.IAttributes | null;
        }
    }
}
//# sourceMappingURL=ValueHandler.d.ts.map
// temporary workaround until Observer are availabe in TypeScript
declare class ResizeObserver {
	/**
	 * Creates and returns a new ResizeObserver object.
	 * @param callback The function called whenever an observed resize occurs. The function is called with two parameters.
	 */
	constructor(callback: (entries: ResizeObserver.ResizeObserverEntry[], observer: ResizeObserver) => void)

	/**
	 * Initiates the observing of a specified Element.
	 * @param target A reference to an Element or SVGElement to be observed.
	 * @param options An options object allowing you to set options for the observation. Currently this only has one possible option that can be set.
	 */
	observe(target: HTMLOrSVGElement, options?: ResizeObserver.Options): void;
	/**
	 * Ends the observing of a specified Element.
	 * @param target A reference to an Element or SVGElement to be unobserved.
	 */
	unobserve(target: HTMLOrSVGElement): void;
	/**
	 * Unobserves all observed Element targets of a particular observer.
	 */
	disconnect(): void;
}
declare namespace ResizeObserver {
	/**
	 * An options object allowing you to set options for the observation. Currently this only has one possible option that can be set.
	 */
	interface Options {
		/**
		 * Sets which box model the observer will observe changes to. Possible values are content-box (the default), and border-box.
		 */
		box: 'border-box' | 'content-box';
	}

	interface ResizeObserverEntry {
		/**
		 * An object containing the new border box size of the observed element when the callback is run.
		 */
		borderBoxSize: ResizeObserverEntry.BorderBoxSize;
		/**
		 * An object containing the new content box size of the observed element when the callback is run.
		 */
		contentBoxSize: ResizeObserverEntry.ContentBoxSize;
		/**
		 * A DOMRectReadOnly object containing the new size of the observed element when the callback is run. 
		 * Note that this is better supported than the above two properties, but it is left over from an earlier implementation of the Resize Observer API, 
		 * is still included in the spec for web compat reasons, and may be deprecated in future versions.
		 */
		contentRect: DOMRectReadOnly;
		/**
		 * A reference to the Element or SVGElement being observed.
		 */
		target: HTMLOrSVGElement;
	}

	namespace ResizeObserverEntry {
		/**
		 * An object containing the new border box size of the observed element. This object contains two properties.
		 */
		interface BorderBoxSize {
			/**
			 * The length of the observed element's border box in the block dimension. For boxes with a horizontal writing-mode, 
			 * this is the vertical dimension, or height; if the writing-mode is vertical, this is the horizontal dimension, or width.
			 */
			blockSize: number;
			/**
			 * The length of the observed element's border box in the inline dimension. For boxes with a horizontal writing-mode, 
			 * this is the horizontal dimension, or width; if the writing-mode is vertical, this is the vertical dimension, or height.
			 */
			inlineSize: number;
		}
		/**
		 * An object containing the new content box size of the observed element. This object contains two properties.
		 */
		interface ContentBoxSize {
			/**
			 * The length of the observed element's content box in the block dimension. For boxes with a horizontal writing-mode, 
			 * this is the vertical dimension, or height; if the writing-mode is vertical, this is the horizontal dimension, or width.
			 */
			blockSize: number;
			/**
			 * The length of the observed element's content box in the inline dimension. For boxes with a horizontal writing-mode, 
			 * this is the horizontal dimension, or width; if the writing-mode is vertical, this is the vertical dimension, or height.
			 */
			inlineSize: number;
		}
	}
}
declare namespace TcHmi.BuildingAutomation {
    type PrimitiveType = 'bigint' | 'boolean' | 'number' | 'date' | 'string' | 'symbol' | 'undefined' | 'any';
    enum MouseButtons {
        left = 0,
        middle = 1,
        right = 2
    }
    enum Position {
        left = 0,
        top = 1,
        right = 2,
        bottom = 3
    }
    /**
     * Validates the type 'Position'.
     * @param p The input that should be checked.
     * @returns True if the input is of type number and within range of the enum.
    */
    function isPosition(p: any): p is Position;
    enum CornerPosition {
        topRight = 0,
        bottomRight = 1,
        bottomLeft = 2,
        topLeft = 3
    }
    /**
     * Validates the type 'CornerPosition'.
     * @param p The input that should be checked.
     * @returns True if the input is of type number and within range of the enum.
    */
    function isCornerPosition(p: any): p is Position;
    enum Orientation {
        vertical = 0,
        horizontal = 1
    }
    enum DataType {
        invalid = -1,
        unknown = 0,
        string = 1,
        number = 2,
        integer = 3,
        boolean = 4,
        object = 5,
        array = 6,
        enum = 7,
        dateTime = 8
    }
    enum Visibility {
        Collapsed = 0,
        Hidden = 1,
        Visible = 2
    }
    enum EventType {
        invalid = 0,
        alarm = 1,
        disturb = 2,
        maintenance = 3,
        notification = 4,
        other = 5
    }
    interface IFourSidedString {
        top: string;
        right: string;
        bottom: string;
        left: string;
    }
    /**
     * Validates the interface 'IFourSidedString'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isFourSidedString(p: any): p is IFourSidedString;
    interface ICoordinateXY {
        x: number;
        y: number;
    }
    interface ISizeWH {
        Width: number;
        Height: number;
    }
    /**
     * Validates the {@link IErrorDetails} interface.
     * @param p The variable to be validated.
     * @returns True if the validation was successful, otherwise false.
     */
    function isIErrorDetails(p: any): p is IErrorDetails;
    interface IBaseErrorOptions extends ErrorOptions {
    }
    /**
     * A basic error, that will be properly handled by the TcHmiBa framework.
     */
    class BaseError extends Error {
        /**
         * A basic error, that will be properly handled by the TcHmiBa framework.
         * @param message The message of the error.
         * @param options Options for the error.
         */
        constructor(message: string, options?: IBaseErrorOptions);
        /** The previous error, if the error was created based on another error. */
        cause: unknown;
        /**
         * Logs the error.
         * @param severity The severity of the log.
         * @param logger (Optional) Logger to be used for logging.
         */
        private __log;
        /**
         * Logs a debug info about the error.
         * @param logger (Optional) Logger to be used for logging.
         */
        logDebug(logger?: Logger): void;
        /**
         * Logs an info about the error.
         * @param logger (Optional) Logger to be used for logging.
         */
        logInfo(logger?: Logger): void;
        /**
         * Logs a warning of the error.
         * @param logger (Optional) Logger to be used for logging.
         */
        logWarn(logger?: Logger): void;
        /**
         * Logs an error of the error.
         * @param logger (Optional) Logger to be used for logging.
         */
        logError(logger?: Logger): void;
        /**
         * Logs an error.
         * @param error The error to be logged.
         * @param severity The severity of the log.
         * @param logger (Optional) Logger to be used for logging.
         */
        private static __log;
        /**
         * Logs a debug output about an error.
         * @param error The error to be logged.
         * @param logger (Optional) Logger to be used for logging.
         */
        static debug(error: any, logger?: Logger): void;
        /**
         * Logs an info about an error.
         * @param error The error to be logged.
         * @param logger (Optional) Logger to be used for logging.
         */
        static info(error: any, logger?: Logger): void;
        /**
         * Logs a warning of the error.
         * @param error The error to be logged.
         * @param logger (Optional) Logger to be used for logging.
         */
        static warn(error: any, logger?: Logger): void;
        /**
         * Logs an error of the error.
         * @param error The error to be logged.
         * @param logger (Optional) Logger to be used for logging.
         */
        static error(error: any, logger?: Logger): void;
    }
    /**
     * An error to indicate that a property of an object is not available.
     * Message format: "Property 'propName' not available!"
     */
    class PropertyNotAvailableError extends BaseError {
        /**
         * An error to indicate that a property of an object is not available.
         * Message format: "Property 'propName' not available!"
         * @param propName The name of the missing property.
         * @param options Options for the error.
         */
        constructor(propName: string, options?: IBaseErrorOptions);
    }
    interface IInvalidTypeErrorOptions extends IBaseErrorOptions {
        /** The type that is required for the variable. */
        requiredType: string;
        /** The type that the variable actually has. */
        actualType: string;
    }
    /**
     * An error to indicate that a variable has an invalid type.
     * Message format: "Variable 'varName' should be of type 'options.{@link IInvalidTypeErrorOptions.requiredType}' but is type of 'options.{@link IInvalidTypeErrorOptions.actualType}'!"
     */
    class InvalidTypeError extends BaseError {
        /**
         * An error to indicate that a variable has an invalid type.
         * Message format: "Variable 'varName' should be of type 'options.{@link IInvalidTypeErrorOptions.requiredType}' but is type of 'options.{@link IInvalidTypeErrorOptions.actualType}'!"
         * @param varName The name of the variable with the invalid type.
         */
        constructor(varName: string, options: IInvalidTypeErrorOptions);
    }
    /**
     * An error that can be used to create an error based on {@link IErrorDetails}.
     * If {@link error} or {@link warn} are called, the output will contain all the information off {@link IErrorDetails}.
     */
    class TcHmiError extends BaseError {
        /**
         * An error that can be used to create an error based on {@link IErrorDetails}.
         * If {@link error} or {@link warn} are called, the output will contain all the information off {@link IErrorDetails}.
         * @param message The message of the error.
         * @param details The error details.
         * @param options Options for the error.
         */
        constructor(message: string, details: IErrorDetails, options?: IBaseErrorOptions);
        /** The original error details. */
        details: IErrorDetails;
        /**
         * Checks if the {@link TcHmi.IResultObject} has an error.
         * @param details The result to be checked.
         * @returns True if the result has an error, otherwise false.
         */
        static hasError(details: any): details is IErrorDetails;
    }
    /**
     * An error to indicate an invalid instance (Designer, Engineering, etc.).
     */
    class InvalidTcHmiInstanceError extends BaseError {
        /**
         * An error to indicate an invalid instance (Designer, Engineering, etc.).
         * @param message The message of the error.
         * @param options Options for the error.
         */
        constructor(message: string, options?: IBaseErrorOptions);
    }
    /**
     * An error to indicate a not implemented method.
     */
    class NotImplementedError extends BaseError {
        /**
         * An error to indicate a not implemented method.
         * @param methodName The name of the not implemented method.
         * @param options Options for the error.
         */
        constructor(methodName?: string, options?: IBaseErrorOptions);
    }
    /**
     * An error to indicate if a variable is null or undefined.
     */
    class NullOrUndefinedVariableError extends BaseError {
        /**
         * An error to indicate if a variable is null or undefined.
         * @param varName The name of the variable which is null or undefined.
         * @param options Options for the error.
         */
        constructor(varName: string, options?: IBaseErrorOptions);
    }
}
//# sourceMappingURL=Definitions.d.ts.map
declare namespace TcHmi.BuildingAutomation {
    namespace Globals {
        /** A collection of all created BaseNodes. */
        const CreatedBaseNodes: Map<string, Components.IBaseNode>;
        /** The name of the TcHmiRegion on the StartView. All contents will be displayed in this region. */
        let HostRegionName: string;
        /** Different HTML symbols to be used in HTML. */
        const HTMLSymbols: {
            Link: string;
        };
        /**
         * The z-index of the overlay container for modal dialogs.
         * If this is edited we need also to edit global css variable.		 *
         * ````css
         * :root {
         *     --tchmi-ba-global-overlay-container-z-index: 6000;
         * }
         * ````
         **/
        let OverlayContainerZIndex: number;
        namespace Locale {
            enum KBLayouts {
                English = "en-EN",
                German = "de-DE"
            }
        }
        namespace Keyboard {
            let Layout: Globals.Locale.KBLayouts;
            let InputType: BuildingAutomation.DataType;
            function isCodeNumber(code: string): boolean;
            function isCodeNumberDigit(code: string): boolean;
            function isCodeNumberPad(code: string): boolean;
            function isCodeLetterLatin(code: string): boolean;
            function isCodeShift(code: string): boolean;
            function isCodeAlt(code: string): boolean;
            function isCodeArrow(code: string): boolean;
            function isCodeEnter(code: string): boolean;
            function isCodeComma(code: string): boolean;
            function isCodeMeta(code: string): boolean;
            function isCodeMinus(code: string): boolean;
            enum Code {
                KeyA = "KeyA",
                KeyB = "KeyB",
                KeyC = "KeyC",
                KeyD = "KeyD",
                KeyE = "KeyE",
                KeyF = "KeyF",
                KeyG = "KeyG",
                KeyH = "KeyH",
                KeyI = "KeyI",
                KeyJ = "KeyJ",
                KeyK = "KeyK",
                KeyL = "KeyL",
                KeyM = "KeyM",
                KeyN = "KeyN",
                KeyO = "KeyO",
                KeyP = "KeyP",
                KeyQ = "KeyQ",
                KeyR = "KeyR",
                KeyS = "KeyS",
                KeyT = "KeyT",
                KeyU = "KeyU",
                KeyV = "KeyV",
                KeyW = "KeyW",
                KeyX = "KeyX",
                KeyY = "KeyY",
                KeyZ = "KeyZ",
                Digit1 = "Digit1",
                Digit2 = "Digit2",
                Digit3 = "Digit3",
                Digit4 = "Digit4",
                Digit5 = "Digit5",
                Digit6 = "Digit6",
                Digit7 = "Digit7",
                Digit8 = "Digit8",
                Digit9 = "Digit9",
                Digit0 = "Digit0",
                Numpad0 = "Numpad0",
                Numpad1 = "Numpad1",
                Numpad2 = "Numpad2",
                Numpad3 = "Numpad3",
                Numpad4 = "Numpad4",
                Numpad5 = "Numpad5",
                Numpad6 = "Numpad6",
                Numpad7 = "Numpad7",
                Numpad8 = "Numpad8",
                Numpad9 = "Numpad9",
                F1 = "F1",
                F2 = "F2",
                F3 = "F3",
                F4 = "F4",
                F5 = "F5",
                F6 = "F6",
                F7 = "F7",
                F8 = "F8",
                F9 = "F9",
                F10 = "F10",
                F11 = "F11",
                F12 = "F12",
                F13 = "F13",
                F14 = "F14",
                F15 = "F15",
                F16 = "F16",
                F17 = "F17",
                F18 = "F18",
                F19 = "F19",
                F20 = "F20",
                F21 = "F21",
                F22 = "F22",
                F23 = "F23",
                F24 = "F24",
                Escape = "Escape",
                Minus = "Minus",
                Equal = "Equal",
                Backspace = "Backspace",
                Tab = "Tab",
                BracketLeft = "BracketLeft",
                BracketRight = "BracketRight",
                Enter = "Enter",
                ControlLeft = "ControlLeft",
                Semicolon = "Semicolon",
                Quote = "Quote",
                Backquote = "Backquote",
                ShiftLeft = "ShiftLeft",
                Backslash = "Backslash",
                Comma = "Comma",
                Period = "Period",
                Slash = "Slash",
                ShiftRight = "ShiftRight",
                NumpadMultiply = "NumpadMultiply",
                AltLeft = "AltLeft",
                Space = "Space",
                CapsLock = "CapsLock",
                Pause = "Pause",
                ScrollLock = "ScrollLock",
                NumpadSubtract = "NumpadSubtract",
                NumpadAdd = "NumpadAdd",
                NumpadDecimal = "NumpadDecimal",
                IntlBackslash = "IntlBackslash",
                NumpadEqual = "NumpadEqual",
                KanaMode = "KanaMode",
                Lang2 = "Lang2",
                Lang1 = "Lang1",
                IntlRo = "IntlRo",
                Convert = "Convert",
                NonConvert = "NonConvert",
                IntlYen = "IntlYen",
                NumpadComma = "NumpadComma",
                MediaTrackPrevious = "MediaTrackPrevious",
                MediaTrackNext = "MediaTrackNext",
                NumpadEnter = "NumpadEnter",
                ControlRight = "ControlRight",
                AudioVolumeMute = "AudioVolumeMute",
                LaunchApp2 = "LaunchApp2",
                MediaPlayPause = "MediaPlayPause",
                MediaStop = "MediaStop",
                AudioVolumeDown = "AudioVolumeDown",
                AudioVolumeUp = "AudioVolumeUp",
                BrowserHome = "BrowserHome",
                NumpadDivide = "NumpadDivide",
                PrintScreen = "PrintScreen",
                AltRight = "AltRight",
                NumLock = "NumLock",
                Home = "Home",
                ArrowUp = "ArrowUp",
                PageUp = "PageUp",
                ArrowLeft = "ArrowLeft",
                ArrowRight = "ArrowRight",
                End = "End",
                ArrowDown = "ArrowDown",
                PageDown = "PageDown",
                Insert = "Insert",
                Delete = "Delete",
                MetaLeft = "MetaLeft",
                MetaRight = "MetaRight",
                ContextMenu = "ContextMenu",
                Power = "Power",
                Sleep = "Sleep",
                WakeUp = "WakeUp",
                BrowserSearch = "BrowserSearch",
                BrowserFavorites = "BrowserFavorites",
                BrowserRefresh = "BrowserRefresh",
                BrowserStop = "BrowserStop",
                BrowserForward = "BrowserForward",
                BrowserBack = "BrowserBack",
                LaunchApp1 = "LaunchApp1",
                LaunchMail = "LaunchMail",
                MediaSelect = "MediaSelect",
                TcHmiPlusMinus = "PlusMinus"
            }
        }
    }
    enum TcHmiEvents {
        /** Is invoked when the web socket was opened. */
        onWebSocketOpened = "onWebSocketOpened",
        /** Is invoked when the TcHmi framework was initialized. */
        onInitialized = "onInitialized",
        /** Is invoked when the web socket was closed. */
        onWebSocketClosed = "onWebSocketClosed",
        /** Is invoked when the locale has changed. */
        onLocaleChanged = "onLocaleChanged",
        /** Is invoked when the theme has changed. */
        onThemeDataChanged = "onThemeDataChanged"
    }
    enum TcHmiBaEvents {
        /**
         * Is invoked when the TcHmiBa framework starts to initialize.
         * Register to this event if you want to initialize something for the TcHmiBa framework.
         */
        onStartInitializing = "onTcHmiBaStartInitializing",
        /**
         * Is invoked when default settings can be overriden.
         * Register to this event and override settings in the handler.
         */
        onOverrideSettings = "onTcHmiBaOverrideSettings",
        /**
         * Is triggered when TcHmiBa is initialized.
         * Is triggered after overriding of settings.
         */
        onInitialized = "onTcHmiBaInitialized",
        /** Is invoked when a new pulse was generated. This is used for the red pulse of disturbed controls (EventList entries/UiIcon). */
        onNewPulse = "onTcHmiBaNewPulse"
    }
}
//# sourceMappingURL=Globals.d.ts.map