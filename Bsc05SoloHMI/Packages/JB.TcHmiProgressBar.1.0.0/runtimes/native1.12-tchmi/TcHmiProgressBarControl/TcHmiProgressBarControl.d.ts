declare module TcHmi {
    module Controls {
        module TcHmiProgressBar {
            class TcHmiProgressBarControl extends TcHmi.Controls.System.TcHmiControl {
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                protected __elementProgressDiv: JQuery;
                protected __elementProgressBarDiv: JQuery;
                protected __elementLabelDiv: JQuery;
                protected __elementAnimation: JQuery;
                protected __min: number | null;
                protected __max: number | null;
                protected __value: number | null;
                protected __label: string | null;
                protected __labelFontSize: number | null;
                protected __labelColor: TcHmi.SolidColor;
                protected __progressBackgroundColor: TcHmi.SolidColor;
                protected __progressBarColor: TcHmi.SolidColor;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                getValue(): number | null;
                setValue(valueNew: number): void;
                getMin(): number | null;
                setMin(valueNew: number): void;
                getMax(): number | null;
                setMax(valueNew: number): void;
                getLabel(): string | null;
                setLabel(valueNew: string): void;
                getLabelFontSize(): number | null;
                setLabelFontSize(valueNew: number): void;
                getLabelColor(): TcHmi.SolidColor;
                setLabelColor(valueNew: TcHmi.SolidColor): void;
                getProgressBackgroundColor(): TcHmi.SolidColor;
                setProgressBackgroundColor(valueNew: TcHmi.SolidColor): void;
                getProgressBarColor(): TcHmi.SolidColor;
                setProgressBarColor(valueNew: TcHmi.SolidColor): void;
                protected __processValue(): void;
                protected __processLabel(): void;
                protected __processFontSize(): void;
                protected __processLabelColor(): void;
                protected __processProgressBackgroundColor(): void;
                protected __processProgressBarColor(): void;
            }
        }
    }
}
