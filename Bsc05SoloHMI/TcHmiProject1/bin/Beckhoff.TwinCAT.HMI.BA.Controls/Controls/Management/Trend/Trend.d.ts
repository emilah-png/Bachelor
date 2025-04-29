declare namespace TcHmi.BuildingAutomation.Controls.Management {
    /**
     * A control to display trend line charts.
     * @category Control
     */
    class Trend extends System.BaseControl implements BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: BuildingAutomation.Charting.Trend;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        get baObjectHandler(): BaObjectHandler;
        processBaObject(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
    }
}
//# sourceMappingURL=Trend.d.ts.map