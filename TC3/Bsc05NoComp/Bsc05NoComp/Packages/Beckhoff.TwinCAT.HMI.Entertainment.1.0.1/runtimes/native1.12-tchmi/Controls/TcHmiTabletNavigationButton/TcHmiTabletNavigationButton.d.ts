declare module TcHmi.Controls.Entertainment.TabletNavigation {
    class Button extends TcHmi.Controls.System.TcHmiControl {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** html attribute: data-tchmi-icon*/
        protected __Icon: string | null | undefined;
        /** html attribute: data-tchmi-icon-active*/
        protected __Icon_Active: string | null | undefined;
        /** html attribute: data-tchmi-content-page*/
        protected __ContentPage: string | null | undefined;
        /** html attribute: data-tchmi-button-text*/
        protected __ButtonText: string | null | undefined;
        /** html attribute: data-tchmi-diag-state*/
        protected __DiagState: Severity | null | undefined;
        protected __elementTemplateRoot: JQuery;
        protected __elementIcon: JQuery;
        protected __elementText: JQuery;
        protected __elementDiagCircle: JQuery;
        protected __destroyEventTouchMove: DestroyFunction | null;
        protected __destroyEventMouseMove: DestroyFunction | null;
        /** Event handlers */
        protected __mousedownHandler: (event: MouseEvent) => void;
        protected __mouseupHandler: (event: MouseEvent) => void;
        protected __mouseleaveHandler: (event: MouseEvent) => void;
        protected __touchstartHandler: (event: TouchEvent) => void;
        protected __touchEndOrCancelHandler: (event: TouchEvent) => void;
        protected __Mouse: boolean;
        protected __Touch: boolean;
        protected __ClickTimeoutId: number;
        protected __touchLockTimeoutId: number;
        /**
            * If raised, the control object exists in control cache and constructor of each inheritation level was called.
            * Call attribute processor functions here to initialize default values!
            */
        __previnit(): void;
        /**
            * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
            * @returns {void}
            */
        __init(): void;
        /**
        * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
        * Is only allowed to be called from the framework itself!
        */
        __attach(): void;
        /**
        * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
        * Is only allowed to be called from the framework itself!
        */
        __detach(): void;
        /**
        * @description Destroy the current control instance.
        * Will be called automatically if system destroys control!
        */
        destroy(): void;
        setButtonText(valueNew: string | null | undefined): void;
        getButtonText(): string | null | undefined;
        protected __processButtonText(): void;
        setIcon(valueNew: string | null | undefined): void;
        getIcon(): string | null | undefined;
        protected __processIcon(): void;
        setIcon_Active(valueNew: string | null | undefined): void;
        getIcon_Active(): string | null | undefined;
        setContentPage(valueNew: string | null | undefined): void;
        getContentPage(): string | null | undefined;
        setDiagState(valueNew: Severity | null | undefined): void;
        getDiagState(): Severity | null | undefined;
        protected __processDiagState(): void;
        Activate(): void;
        Deactivate(): void;
        Update(item: Item.IButtonElement): void;
        protected __onMouseDown(): (event: MouseEvent) => void;
        /**
            * Returns an event handler for the mouseup event.
            */
        protected __onMouseUp(): (event: MouseEvent) => void;
        /**
            * Returns an event handler for the mouseleave event.
        */
        protected __onMouseLeave(): (event: MouseEvent) => void;
        /**
            * Returns an event handler for the touchstart event.
        */
        protected __onTouchStart(): (event: TouchEvent) => void;
        /**
            * Returns an event handler for the touchend and touchcancel events.
        */
        protected __onTouchEndOrCancel(): (event: TouchEvent) => void;
    }
}
