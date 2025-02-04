declare namespace TcHmi.BuildingAutomation.Functions {
    /** @ignore
     * Structure to describe legend dialog options.
     */
    interface ILegendDialogOptionsDesigner {
        modal: boolean | null;
        buttons: Components.DialogWindow.Buttons | null;
        width: number | null;
        widthUnit: DimensionUnit | null;
        height: number | null;
        heightUnit: DimensionUnit | null;
        entryWidth: number | null;
        entryWidthUnit: DimensionUnit | null;
        tabPosition: Position | null;
        iconSource: number | null;
        iconsCustom: Icons.IIconAttributes[] | null;
    }
    /**
     * Opens a dialog window with the legend.
     * @param options Set options for the dialog.
     * @category Dialog
    */
    export function OpenLegendDialog(options: ILegendDialogOptionsDesigner | null): void;
    export {};
}
//# sourceMappingURL=OpenLegendDialog.d.ts.map