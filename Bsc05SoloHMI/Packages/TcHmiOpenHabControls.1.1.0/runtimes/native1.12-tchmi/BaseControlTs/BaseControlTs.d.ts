declare module TcHmi {
    module Controls {
        module TcHmiOpenHabControls {
            class BaseControlTs extends TcHmi.Controls.System.TcHmiControl {
                #private;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                /**
                 * List of control for which jQuery click events registration has to be removed.
                 */
                protected __clickEventInstances: Array<any>;
                /**
                 * This ist the element which get the font settings applied.
                 * E.g. `this.__elementContainer = this.__elementTemplateRoot.find('.label');`
                 * Should be called by all specializations of this control.
                 */
                protected __elementContainer: JQuery | null;
                protected __elementContainerSub: JQuery | null;
                protected __elementContainerSub2: JQuery | null;
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
                * Is called by the system after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * Is called by the system after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                /** ###############################################################################
                 * S T A R T   Text properties/attributes
                 */
                protected __textColor: TcHmi.SolidColor | null | undefined;
                protected __textFontFamily: FontFamily | null | undefined;
                protected __textFontSize: number | undefined;
                protected __textFontSizeUnit: FontSizeUnit | undefined;
                protected __textFontStyle: FontStyle | undefined;
                protected __textFontWeight: FontWeight | undefined;
                /**
                 * E N D   Text properties/attributes
                 */
                /** ###############################################################################
                 *
                 * S T A R T   TextColor
                 *
                 */
                setTextColor(valueNew: SolidColor | null): void;
                getTextColor(): SolidColor | null | undefined;
                protected __onResolverForTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                protected __processTextColor(): void;
                /**
                 *
                 * E N D   TextColor
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T   TextFontFamily
                 *
                 */
                setTextFontFamily(valueNew: FontFamily | null): void;
                getTextFontFamily(): string | null | undefined;
                protected __processTextFontFamily(): void;
                /**
                 *
                 * E N D   TextFontFamily
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T   setTextFontSize
                 *
                 */
                setTextFontSize(valueNew: number | null): void;
                getTextFontSize(): number | undefined;
                protected __processTextFontSize(): void;
                /**
                 *
                 * E N D   setTextFontSize
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T   setTextFontSizeUnit
                 *
                 */
                setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
                getTextFontSizeUnit(): "em" | "px" | "%" | "rem" | undefined;
                protected __processTextFontSizeUnit(): void;
                /**
                 *
                 * E N D   setTextFontSizeUnit
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T   setTextFontStyle
                 *
                 */
                setTextFontStyle(valueNew: FontStyle | null): void;
                getTextFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                protected __processTextFontStyle(): void;
                /**
                 *
                 * E N D   setTextFontStyle
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T   setTextFontWeight
                 *
                 */
                setTextFontWeight(valueNew: FontWeight | null): void;
                getTextFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                protected __processTextFontWeight(): void;
            }
        }
    }
}
