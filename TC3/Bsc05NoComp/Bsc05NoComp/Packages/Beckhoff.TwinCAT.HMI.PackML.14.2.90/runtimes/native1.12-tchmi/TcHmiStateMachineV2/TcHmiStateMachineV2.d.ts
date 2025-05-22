declare namespace TcHmi.Controls.Beckhoff.TcHmiPackML {
    class TcHmiStateMachineV2 extends TcHmi.Controls.System.TcHmiControl {
        #private;
        /**
         * Constructor Creates a new control instance.
         * @param element The element that hosts the control.
         * @param pcElement Precompiled element.
         * @param attrs The control attributes.
         */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __pointerMoveHandlerCanvas: (event: MouseEvent) => void;
        protected __elementTemplateRoot: HTMLElement;
        protected __canvasBasis: HTMLCanvasElement;
        protected __canvasStates: HTMLCanvasElement;
        protected __contextBasis: CanvasRenderingContext2D;
        protected __contextStates: CanvasRenderingContext2D;
        /** The current state */
        protected __stateCurrent: TcHmiStateMachineV2.State | null | undefined;
        /** The symbol to write the command value */
        protected __commandSymbol: TcHmi.Symbol<TcHmiStateMachineV2.Command | null | undefined> | undefined;
        /** DestroyFunction for the command symbol watch */
        protected __commandSymbolDestroyWatch: DestroyFunction | null | undefined;
        /** The command value that is passed to the PLC to change a state */
        protected __commandValue: TcHmiStateMachineV2.Command | null | undefined;
        /** The current unit mode of the state machine */
        protected __unitModeCurrent: TcHmiStateMachineV2.UnitMode | null | undefined;
        /** The aspect ratio of canvas width to the canvas height */
        protected __ratioCanvas: number;
        /** The interval id of the interval that displays a blinking state */
        protected __blinkInterval: number;
        /** The blink state variable */
        protected __blinkState: boolean;
        /** Stores the currently hovered state if a state is hovered*/
        protected __stateToHover: TcHmiStateMachineV2.State;
        /** array with all state positions */
        protected __canvasEventTargets: TcHmiStateMachineV2.CanvasEventTarget[];
        /** array with all currently selectable states */
        protected __selectableStates: TcHmiStateMachineV2.State[];
        /** The resize event destroy function */
        protected __eventDestroyerFunctions: DestroyFunction[];
        /** A map that stores information for each possible state */
        protected __stateInformation: Map<TcHmiStateMachineV2.State, TcHmiStateMachineV2.StateInformation>;
        /** Colors used througout in the canvas */
        protected __canvasResources: {
            stateTextcolor: string;
            stateTextcolorHovered: string;
            stateColorHovered: string;
            stateBorderColor: string;
            transitionColor: string;
            transitionTextColor: string;
            borderColor: string;
            baseColor: string;
            innerBaseColor: string;
        };
        /** Radius of the state */
        protected __stateRadius: number;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         * This function is only to be used by the System. Other function calls are not intended.
         * Call attribute processor functions here to initialize default values!
         */
        __previnit(): void;
        /**
         * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __init(): void;
        /**
         * Is called by tachcontrol() after the control instance gets part of the current DOM.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __attach(): void;
        /**
         * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __detach(): void;
        /**
         * Destroy the current control instance.
         * Will be called automatically if system destroys control!
         */
        destroy(): void;
        /**
         * Callback function for the click event
         * @param event
         */
        protected __click: (event: MouseEvent) => void;
        /**
         * Returns a callback function for the mouse move event
         **/
        protected __onMousemoveCanvas(): (event: MouseEvent) => void;
        /**
         * Callback function for the resized event
         **/
        protected __onResized: () => void;
        /**
         * Update the stateInformation colors on theme change.
         */
        protected __updateThemeColors: () => void;
        /**
         * Shows/hides the control and its children depending of the current 'observe' right and mark if operate is not allowed
         */
        __processAccessConfig(): void;
        /**
         * A function to calculate the ratio of the x-coordinate.
         * The original paths were drawn to a fixed canvas with the size of 860 to 380 px.
         * To keep more readable values we use this function to get the needed ratio of an X-coordinate.
         */
        protected __getRatioX(pos: number): number;
        /**
         * A function to calculate the x-coordinate.
         * The original paths were drawn to a fixed canvas with the size of 860 to 380 px.
         * To keep more readable values we use this function to get the needed ratio of an X-coordinate.
         */
        protected __getPositionX(pos: number): number;
        /**
         * A function to calculate the ratio of the y-coordinate.
         * The original paths were drawn to a fixed canvas with the size of 860 to 380 px.
         * To keep more readable values we use this function to get the needed ratio of an Y-coordinate.
         */
        protected __getRatioY(pos: number): number;
        /**
         * A function to calculate the y-coordinate.
         * The original paths were drawn to a fixed canvas with the size of 860 to 380 px.
         * To keep more readable values we use this function to get the needed ratio of an Y-coordinate.
         */
        protected __getPositionY(pos: number): number;
        /**
         * Draws the basis of the control
         */
        protected __drawBasis(): void;
        /**
         * A function to update the displayed state representations e.g. hovered or selectable
         */
        protected __updateStateRepresentations(): void;
        /**
         * A function to draw a line.
         */
        protected __drawLine(context: CanvasRenderingContext2D, xStart: number, yStart: number, xEnd: number, yEnd: number): void;
        /**
         * A function to draw a single state
         */
        protected __drawState(context: CanvasRenderingContext2D, state: TcHmiStateMachineV2.State, active?: boolean): void;
        /**
         * Draws a hovered state.
         */
        protected __drawHoveredState(context: CanvasRenderingContext2D, state: TcHmiStateMachineV2.State): void;
        /**
         * Draws a selectable state
         */
        protected __drawSelectableState(context: CanvasRenderingContext2D, state: TcHmiStateMachineV2.State): void;
        /**
         * Draws the currently selected state highlighted.
         */
        protected __highlightStateCurrent(context: CanvasRenderingContext2D): void;
        /**
         * A function to highlight currently selectable states
         */
        protected __drawSelectableStates(context: CanvasRenderingContext2D): void;
        /**
         * A function to draw the arrows between the states
         */
        protected __drawArrow(context: CanvasRenderingContext2D, xStart: number, yStart: number, xEnd: number, yEnd: number, arrowDirection: 'Up' | 'Right' | 'Down' | 'Left'): void;
        /**
         * A function to add a text to the states
         */
        protected __addTextToState(context: CanvasRenderingContext2D, xStart: number, yStart: number, text: string, offsetX: number, textColor: string): void;
        /**
         * A function to add a text to the transitions
         */
        protected __addTextToTransition(context: CanvasRenderingContext2D, xStart: number, yStart: number, text: string, textAlign?: CanvasTextAlign): void;
        /**
         * A function to set the center position of the canvas
         */
        protected __centerCanvas(canvas: HTMLCanvasElement): void;
        /**
         * A function write the commands to the PLC
         */
        protected __writeCommand(command: TcHmiStateMachineV2.Command): void;
        /**
         * Sets the content value and calls the associated process function (StateCurrent).
         * @param valueNew The new value for the content attribute as string. Relative path value.
         */
        setStateCurrent(valueNew: TcHmiStateMachineV2.State | keyof typeof TcHmiStateMachineV2.State | null): void;
        /**
         * Returns the current value of StateCurrent.
         * @returns The current value of states.
         */
        getStateCurrent(): "Clearing" | "Stopped" | "Starting" | "Idle" | "Suspended" | "Execute" | "Stopping" | "Aborting" | "Aborted" | "Holding" | "Held" | "Unholding" | "Suspending" | "Unsuspending" | "Resetting" | "Completing" | "Complete" | "Undefined" | null | undefined;
        /**
         * Processes the current value of attribute StateCurrent.
         */
        protected __processStateCurrent(): void;
        /**
         * Sets the content value and calls the associated process function (Command).
         * @param valueNew The new value for the content attribute as string. Relative path value.
         */
        setCommand(valueNew: TcHmi.Symbol<TcHmiStateMachineV2.Command | null>): void;
        /**
         * Watch Callback for the command symbol
         */
        protected __onCommandSymbolWatch: (data: TcHmi.Symbol.IReadResultObject<TcHmiStateMachineV2.Command>) => void;
        /**
         * Returns the current value of command.
         * @returns The current value of command.
         */
        getCommand(): Symbol<TcHmiStateMachineV2.Command | null | undefined> | undefined;
        /**
         * Sets the content value and calls the associated process function (StateCurrent).
         * @param valueNew The new value for the content attribute as string. Relative path value.
         */
        setUnitModeCurrent(valueNew: TcHmiStateMachineV2.UnitMode | keyof typeof TcHmiStateMachineV2.UnitMode | null): void;
        /**
         * Returns the current value of UnitModeCurrent.
         * @returns The current value of states.
         */
        getUnitModeCurrent(): "Invalid" | "Production" | "Maintenance" | "Manual" | null | undefined;
        /**
         * Processes the current value of attribute UnitModeCurrent.
         */
        protected __processUnitModeCurrent(): void;
    }
    namespace TcHmiStateMachineV2 {
        enum State {
            Undefined = 0,
            Clearing = 1,
            Stopped = 2,
            Starting = 3,
            Idle = 4,
            Suspended = 5,
            Execute = 6,
            Stopping = 7,
            Aborting = 8,
            Aborted = 9,
            Holding = 10,
            Held = 11,
            Unholding = 12,
            Suspending = 13,
            Unsuspending = 14,
            Resetting = 15,
            Completing = 16,
            Complete = 17
        }
        enum Command {
            Undefined = 0,
            Reset = 1,
            Start = 2,
            Stop = 3,
            Hold = 4,
            UnHold = 5,
            Suspend = 6,
            Unsuspend = 7,
            Abort = 8,
            Clear = 9
        }
        enum UnitMode {
            Invalid = 0,
            Production = 1,
            Maintenance = 2,
            Manual = 3
        }
        interface StateInformation {
            xStart: number;
            yStart: number;
            name: string;
            color: string;
            highlightColor: string;
            unitModes: TcHmiStateMachineV2.UnitMode[];
        }
        interface CanvasEventTarget {
            pos: {
                start: Position;
                end: Position;
            };
            primaryFn: () => any;
            state: TcHmiStateMachineV2.State;
        }
        interface Position {
            x: number;
            y: number;
        }
    }
}
//# sourceMappingURL=TcHmiStateMachineV2.d.ts.map