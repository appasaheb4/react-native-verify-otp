import React, { useState, useRef, useEffect } from 'react';
import { TextInput, Platform, View, } from 'react-native';
export const VerifyOtp = ({ length, onVerify, otpClear = false, }) => {
    const [pin, setPin] = useState('');
    const elRef = [...Array(length)].map(() => useRef(null));
    const mainRef = useRef(null);
    const clearPin = () => {
        var _a, _b, _c, _d;
        (_a = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _a === void 0 ? void 0 : _a.clear();
        (_b = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        (_d = (_c = elRef[0]) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.focus();
        setPin('');
    };
    useEffect(() => {
        var _a, _b, _c, _d;
        if (otpClear) {
            (_a = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _a === void 0 ? void 0 : _a.clear();
            (_b = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _b === void 0 ? void 0 : _b.focus();
            (_d = (_c = elRef[0]) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.focus();
            setPin('');
        }
    }, [otpClear]);
    useEffect(() => {
        var _a, _b, _c, _d;
        if (pin.length === length) {
            onVerify(pin, clearPin);
            const len = pin.trim().length;
            (_b = (_a = elRef[len - 1]) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.blur();
            (_c = elRef[len - 1].current) === null || _c === void 0 ? void 0 : _c.focus();
            return;
        }
        Platform.OS === 'ios'
            ? (_d = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _d === void 0 ? void 0 : _d.focus()
            : setTimeout(() => { var _a; return (_a = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, 50);
    }, [pin]);
    const setPinCharacter = (idx, c) => {
        const newPin = pin.split('');
        newPin[idx] = c;
        setPin(newPin.join('').trim());
    };
    const handleKeyPress = (e) => {
        if (e.nativeEvent.key !== 'Backspace')
            return;
        const newPin = pin.split('');
        newPin[newPin.length - 1] = '';
        setPin(newPin.join('').trim());
    };
    return (<View style={{ position: 'relative' }}>
      <View style={{
            flex: 1,
            flexDirection: 'row',
            height: 48,
            marginHorizontal: '-2%',
        }} marginVertical="m">
        {new Array(length).fill(0).map((i, idx) => (<View key={idx.toString()} style={{
                borderRadius: 10,
                borderColor: '#3F4957',
                backgroundColor: pin[idx] ? '#3F4957' : '#fff',
                height: 48,
                width: 48,
                flexGrow: 1,
                marginHorizontal: '4%',
                flexShrink: 0,
            }}>
            <TextInput ref={elRef[idx]} style={{
                width: '100%',
                fontSize: 16,
                paddingVertical: 14,
                textAlign: 'center',
                color: '#fff',
            }} keyboardType="phone-pad" maxLength={1} value={pin ? pin[idx] || '  ' : ''} blurOnSubmit={false} onChangeText={(t) => setPinCharacter(idx, t)} onKeyPress={(e) => handleKeyPress(e)}/>
          </View>))}
      </View>
      <TextInput ref={mainRef} autoFocus style={{
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
        }} maxLength={length} caretHidden={!!pin.length} textContentType="oneTimeCode" keyboardType="phone-pad" onChangeText={(text) => setPin(text)}/>
    </View>);
};
//# sourceMappingURL=VerifyOtp.js.map