declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * A control which inherits from the TcHmiDataGrid and enables usage of TcHmiBa controls.
     * @category Control
    */
    class DataGrid extends TcHmi.Controls.Beckhoff.TcHmiDatagrid {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /**
         * Event destroy functions which will be called when the control is deleted.
         * @category Internal
         */
        protected __eventDestroyFunctions: DestroyFunction[];
        /**
         * Function that will be called for every created row.
         * @category Internal
         */
        protected __rowClassesProviderFunc: DataGrid.RowClassesProviderFunction | undefined;
        /**
         * Counts the created controls to ensure unique IDs.
         * @category Internal
         */
        private __controlCnt;
        /**
         * Destroy function for the onPropertyChanged event.
         * @category Internal
         */
        private __propertyChangedDf;
        /**
         * Use to log different messages to the console, to check attributes or result objects.
         * @cateogry Internal
         */
        logger: Logger;
        childrenHandler: Components.BaseNode.ChildrenHandler;
        protected __baParent: Components.IBaseNode | null | undefined;
        /**
         * Handler when a value field has changed.
         * @category Event handler
         */
        private __controlInteractionHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        protected __fillCell(elementCell: HTMLTableCellElement, internalColumn: DataGrid.Column | TcHmi.Controls.Beckhoff.TcHmiDatagrid.SimpleColumn, value: any): void;
        protected __setRowClasses(row: HTMLElement, dataIndex: number): void;
        /**
         * Sets the BA parent for this control.
         * @category Public
         * @param parent The parent of the control.
         */
        setBaParent(parent?: Components.IBaseNode | null): void;
        getBaParent(): Components.IBaseNode | null | undefined;
        /**
         * Get the rows that are currently appended.
         * @returns The rows that are currently appended.
         */
        getCurrentRows(): JQuery<HTMLTableRowElement>;
        /**
         * Removes all local stored data (e.g. sorting or column widths)
         * @category Public
         */
        removeAllLocalStorage(): void;
        setSrcColumn(valueNew: DataGrid.Column[] | TcHmi.Controls.Beckhoff.TcHmiDatagrid.Column[] | TcHmi.Controls.Beckhoff.TcHmiDatagrid.SimpleColumn | null): void;
        protected __processSrcColumn(): void;
        getSrcColumn(): TcHmi.Controls.Beckhoff.TcHmiDatagrid.SimpleColumn | TcHmi.Controls.Beckhoff.TcHmiDatagrid.Column[] | undefined;
        setRowClassesProvider(valueNew: IFunction | DataGrid.RowClassesProviderFunction | null): void;
    }
    namespace DataGrid {
        enum ControlType {
            Invalid = -1,
            Button = 0,
            ToggleButton = 1,
            Combobox = 2,
            Checkbox = 3,
            InputBox = 4,
            DateTimeField = 5,
            Slider = 6,
            Textblock = 7,
            Icon = 8,
            EventIcon = 9
        }
        interface Column<T = any> extends Omit<TcHmi.Controls.Beckhoff.TcHmiDatagrid.SimpleColumn, 'control'>, Omit<Components.ControlContainer.IControlOptions<T>, 'type' | 'callback'> {
            type: ControlType;
            /**
             * Function that will be called when the user has interacted with the control.
             * @param newValue The new value of the control (if there is a value for the control).
             * @param data The cell and row data.
             * @param ctrl The control whose value has changed.
             */
            callback?: (newValue?: any, data?: {
                columnData: any;
                rowData: object;
            }, ctrl?: Components.Base) => any;
            formatEx?: ((cellData: any, ctrl: Components.Base) => void);
            /** Name of the property of the srcData object */
            name: string;
        }
        /**
         * Validates the interface 'ControlContainer.IControlOptions'.
         * @param p The input that should be checked.
         * @returns True if the input is valid and false if not.
         */
        function isColumn(p: any): p is Controls.Common.DataGrid.Column;
        type RowClassesProviderFunction = (row: HTMLElement, rowData: any) => void;
        type CellDataType = number | boolean | string | Date | {
            t: BA.EventType;
            s: BA.EventIconState;
        } | null;
        interface Data {
            [index: string]: CellDataType;
        }
    }
}
//# sourceMappingURL=DataGrid.d.ts.map