declare namespace TcHmi.BuildingAutomation {
    /** Defines a user content relation */
    interface IUserContent {
        /** User name of the user. */
        userName: string | null;
        /** Content path of the content. */
        content: string | null;
    }
    export namespace Functions {
        /**
         * Loads a certain content when a user was logged in.
         * @category User management
         * @param hostRegion The host region where the content should ne loaded.
         * @param userContents Array of users with corresponding content.
         */
        function LoadUserDependentContent(hostRegion: TcHmi.Controls.System.TcHmiRegion, userContents: IUserContent[], storeLastContent?: boolean): void;
    }
    export {};
}
//# sourceMappingURL=LoadUserDependentContent.d.ts.map