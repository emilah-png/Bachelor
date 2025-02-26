// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.2.110/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        /**
         * @param {TcHmi.Controls.System.TcHmiControl} NavBar
         * @param {string} Locale
         */
        var UpdateLanguageIcon = function (NavBar, Locale) {
            if (!NavBar)
                return;

            if (!Locale)
                return;

            if (NavBar.getType() !== "TcHmi.Controls.ResponsiveNavigation.TcHmiNavigationBar")
                return;

            var data = NavBar.getMenuSourceDataRaw();

            if (!data || !data[0])
                return;

            /** @type {string | undefined} */
            var icon;
            var fallback;

            for (var firstChildlayer of data[0].children) {
                if (firstChildlayer.children) {
                    for (var secondChildlayer of firstChildlayer.children) {
                        if (secondChildlayer.parameter === Locale) {
                            icon = secondChildlayer.image;
                            break;
                        }
                        // The browser locale can be "en" while the parameter is "en-US" 
                        // or the other way round
                        if (secondChildlayer.parameter &&
                            secondChildlayer.parameter.split('-')[0] === Locale.split('-')[0] &&
                            !fallback
                        ) {
                            fallback = secondChildlayer.image;
                        }
                    }
                }
            }

            if (icon) {
                data[0].image = icon;
                NavBar.setMenuSourceData(data);
            }
            else if (fallback) {
                data[0].image = fallback;
                NavBar.setMenuSourceData(data);
            }
        };

        Functions.UpdateLanguageIcon = UpdateLanguageIcon;

    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));

})(TcHmi);
TcHmi.Functions.registerFunctionEx('UpdateLanguageIcon', 'TcHmi.Functions', TcHmi.Functions.UpdateLanguageIcon);
