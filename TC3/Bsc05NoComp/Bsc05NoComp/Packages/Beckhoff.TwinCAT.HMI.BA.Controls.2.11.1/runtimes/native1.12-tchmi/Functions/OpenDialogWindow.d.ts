declare namespace TcHmi.BuildingAutomation.Functions {
    interface IDialogWindowOptionsDesigner {
        buttons: string;
        content: string | TcHmi.Controls.System.TcHmiControl;
        headline: string;
        height: number;
        heightUnit: DimensionUnit;
        width: number;
        widthUnit: DimensionUnit;
        modal: boolean;
        scrolling: 'No' | 'Yes' | 'Auto' | null;
    }
    /**
     * Opens a dialog window.
     * @category Dialog
     * @param options Set options for the dialog.
    */
    export function OpenDialogWindow(options?: IDialogWindowOptionsDesigner | null): Promise<void>;
    export {};
}
//# sourceMappingURL=OpenDialogWindow.d.ts.map