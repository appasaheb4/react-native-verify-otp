"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyOtp = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var VerifyOtp = function (_a) {
    var length = _a.length, onVerify = _a.onVerify, _b = _a.otpClear, otpClear = _b === void 0 ? false : _b;
    var _c = react_1.useState(''), pin = _c[0], setPin = _c[1];
    var elRef = __spreadArray([], Array(length)).map(function () { return react_1.useRef(null); });
    var mainRef = react_1.useRef(null);
    var clearPin = function () {
        var _a, _b, _c, _d;
        (_a = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _a === void 0 ? void 0 : _a.clear();
        (_b = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        (_d = (_c = elRef[0]) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.focus();
        setPin('');
    };
    react_1.useEffect(function () {
        var _a, _b, _c, _d;
        if (otpClear) {
            (_a = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _a === void 0 ? void 0 : _a.clear();
            (_b = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _b === void 0 ? void 0 : _b.focus();
            (_d = (_c = elRef[0]) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.focus();
            setPin('');
        }
    }, [otpClear]);
    react_1.useEffect(function () {
        var _a, _b, _c, _d;
        if (pin.length === length) {
            onVerify(pin, clearPin);
            var len = pin.trim().length;
            (_b = (_a = elRef[len - 1]) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.blur();
            (_c = elRef[len - 1].current) === null || _c === void 0 ? void 0 : _c.focus();
            return;
        }
        react_native_1.Platform.OS === 'ios'
            ? (_d = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _d === void 0 ? void 0 : _d.focus()
            : setTimeout(function () { var _a; return (_a = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, 50);
    }, [pin]);
    var setPinCharacter = function (idx, c) {
        var newPin = pin.split('');
        newPin[idx] = c;
        setPin(newPin.join('').trim());
    };
    var handleKeyPress = function (e) {
        if (e.nativeEvent.key !== 'Backspace')
            return;
        var newPin = pin.split('');
        newPin[newPin.length - 1] = '';
        setPin(newPin.join('').trim());
    };
    return (<react_native_1.View style={{ position: 'relative' }}>
      <react_native_1.View style={{
            flex: 1,
            flexDirection: 'row',
            height: 48,
            marginHorizontal: '-2%',
        }} marginVertical="m">
        {new Array(length).fill(0).map(function (i, idx) { return (<react_native_1.View key={idx.toString()} style={{
                borderRadius: 10,
                borderColor: '#3F4957',
                backgroundColor: pin[idx] ? '#3F4957' : '#fff',
                height: 48,
                width: 48,
                flexGrow: 1,
                marginHorizontal: '4%',
                flexShrink: 0,
            }}>
            <react_native_1.TextInput ref={elRef[idx]} style={{
                width: '100%',
                fontSize: 16,
                paddingVertical: 14,
                textAlign: 'center',
                color: '#fff',
            }} keyboardType="phone-pad" maxLength={1} value={pin ? pin[idx] || '  ' : ''} blurOnSubmit={false} onChangeText={function (t) { return setPinCharacter(idx, t); }} onKeyPress={function (e) { return handleKeyPress(e); }}/>
          </react_native_1.View>); })}
      </react_native_1.View>
      <react_native_1.TextInput ref={mainRef} autoFocus style={{
            position: 'absolute',
            textAlign: 'left',
            paddingHorizontal: 0,
            paddingVertical: 24,
            fontSize: 24,
            fontWeight: 'bold',
            letterSpacing: 70,
            width: '100%',
            left: 24,
            right: 0,
            top: 0,
            zIndex: 2,
            color: 'rgba(255,255,255,0)',
        }} maxLength={length} caretHidden={!!pin.length} textContentType="oneTimeCode" keyboardType="phone-pad" onChangeText={function (text) { return setPin(text); }}/>
    </react_native_1.View>);
};
exports.VerifyOtp = VerifyOtp;
//# sourceMappingURL=VerifyOtp.js.map