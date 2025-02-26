declare namespace TcHmi.BuildingAutomation.BA {
    /** Helper methods for BaObjects. */
    namespace Helper {
        /**
         * Determine if the BaObject has a special visualization (e.g. a scale or schedule).
         * @category BA
         * @param baObj The BaObject which should be checked.
         * @returns True if the BaObject has a special visualization and false if not.
        */
        function hasSpecialVisu(baObj: BaBasicObject): boolean;
        /**
         * If a BaObject has a special visualization (e.g. a scale or schedule), this method will get the associated content and if a dialog is passed it will append it to it.
         * Handling of confirming and closing a dialog is included here.
         * @category BA
         * @param baObj The BaObject for which a visualization should be created.
         * @param parent The parent for the created control.
         * @param dialog When the content should be displayed in a dialog pass it into the funktion to automatically set the content of the dialog.
         */
        function getSpecialVisu(baObj: BaBasicObject, parent: Controls.System.BaseControl | null, dialog?: Components.DialogWindow, editDialog?: boolean): JQuery | undefined;
    }
    type BaTemplateDescriptionDesigner = {
        [index: string]: string | {
            identifier: string;
            subTemplate?: BaTemplateDescriptionDesigner;
        } | null;
    };
    class BaTemplateHandler<T extends BA.BaView.BaTemplateStructure> {
        constructor(defaultBaTemplateDescription?: BA.BaView.BaTemplateDescription<T>);
        private __baBaTemplateDescription;
        private __defaultBaTemplateDescription;
        /**@ignore
         * Gets the current BaTemplateDescription considering the given BaTemplateDescription of the designer.
         * @catgeory Internal
         * @param designerDesc BaTemplateDescription of the designer.
         * @returns BaTemplateDescription<T>
         */
        static getResultingBaTemplateDescription<T extends BA.BaView.BaTemplateStructure>(designerDesc: BaTemplateDescriptionDesigner, defaultDesc: BA.BaView.BaTemplateDescription<T>): BaView.BaTemplateDescription<T>;
        /** @ignore
         * Merges BaTemplateDescription of the designer into the given BaTemplateDescription.
         * @catgeory Internal
         * @param desc1 BaTemplateDescription of the designer.
         * @param desc2 BaTemplateDescription to merge into.
         * @returns BaTemplateDescription<T>
         */
        private static __mergeDesignerDescIntoDefaultDesc;
        /**
         * The default template description.
         */
        set defaultBaTemplateDescription(p: BA.BaView.BaTemplateDescription<T> | undefined);
        /**
         * The template description.
         */
        get baBaTemplateDescription(): BaView.BaTemplateDescription<T>;
        /**
         *  Sets the BaTemplateDescription internally.
         * @category Internal
         * @param p The new BaTemplateDescription or null.
         * @returns The control.
         */
        setBaTemplateDescriptionInternal(p: BA.BaView.BaTemplateDescription<T> | null | undefined): this;
        /**
         * Setter for the BaTemplateDescription attribute.
         * @category Attribute setter and getter
         * @param p The new BaTemplateDescription attribute or null.
         * @returns The control.
         */
        setBaTemplateDescription(p: BaTemplateDescriptionDesigner | BaView.BaTemplateDescription<T> | null | undefined): this;
        /**
         * Getter for the BaTemplateDescription attribute.
         * @category Attribute setter and getter
         * @returns The BaTemplateDescription attribute.
         */
        getBaTemplateDescription(): BA.BaView.BaTemplateDescription<T> | null | undefined;
    }
    interface IBaTemplateHandler<T extends BA.BaView.BaTemplateStructure> {
        /**
         * Handles all work for BaTemplates.
         * @category Public
         */
        baTemplateHandler: BA.BaTemplateHandler<T>;
        /**
         * Setter for the BaTemplateDescription attribute.
         * @category Attribute setter and getter
         * @param p The new BaTemplateDescription attribute or null.
         * @returns The control.
         */
        setBaTemplateDescription(p: BaTemplateDescriptionDesigner | BaView.BaTemplateDescription<T> | null | undefined): this;
        /**
         * Getter for the BaTemplateDescription attribute.
         * @category Attribute setter and getter
         * @returns The BaTemplateDescription attribute.
         */
        getBaTemplateDescription(): BA.BaView.BaTemplateDescription<T> | null | undefined;
    }
    interface BaBasicObject {
        /**
         * Opens a dialog which displays the ProjectNavigationList of the BaObject.
         * @param modal Defines if the dialog is opened modal. Default is false.
         */
        openNavigationDialog: (modal?: boolean) => void;
    }
    namespace BaBasicObject {
        /**
         * Defines the default width of the navigation dialog.
         * Default is 1000px.
         */
        let DefaultNavigationDialogWidth: number;
        /**
         * Defines if the entries in the navigation dialog are automatically collapsed if another entry is opened.
         * Default is true.
         */
        let AutoCollapseNavigationDialogEntries: boolean;
    }
}
//# sourceMappingURL=BA.d.ts.map