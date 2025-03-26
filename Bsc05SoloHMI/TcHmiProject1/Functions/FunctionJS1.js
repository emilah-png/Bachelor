// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.2.110/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {

            /**
             * Reads ADS.PLC1.G_OPC.fTime, converts to one decimal place, then calls 'onDone' with the result.
             * @param {function(number|null):void} onDone Callback that receives the number with one decimal or null on error
             */
            function FunctionNewTime(onDone) {
                TcHmi.Symbol.readEx('ADS.PLC1.G_OPC.fTime', function (data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        var timeValue = data.value;
                        if (typeof timeValue === 'number') {
                            var oneDecimalString = timeValue.toFixed(1);     // returns string
                            var oneDecimalNumber = parseFloat(oneDecimalString); // convert back to number
                            // Call the callback with the final value
                            onDone(oneDecimalNumber);
                        } else {
                            // Not a number, return null or handle error
                            onDone(null);
                        }
                    } else {
                        // Error reading the symbol, handle accordingly
                        onDone(null);
                    }
                });
            }

            // Expose the function under your namespace
            TcHmiProject1.FunctionNewTime = FunctionNewTime;

        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);

// Register the function with the framework
TcHmi.Functions.registerFunctionEx(
    'FunctionNewTime',
    'TcHmi.Functions.TcHmiProject1',
    TcHmi.Functions.TcHmiProject1.FunctionNewTime
);
