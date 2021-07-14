import React, { useState, useRef, useEffect } from 'react';
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Platform,
  View,
} from 'react-native';

interface OtpVerifyProps {
  length: number;
  onVerify: (otp: string, clearPin?: () => void) => void;
  otpClear?: boolean;
}

export const VerifyOtp = ({
  length,
  onVerify,
  otpClear = false,
}: OtpVerifyProps) => {
  const [pin, setPin] = useState('');
  const elRef = [...Array(length)].map(() => useRef<TextInput>(null));
  const mainRef = useRef<TextInput>(null);

  const clearPin = () => {
    mainRef?.current?.clear();
    mainRef?.current?.focus();
    elRef[0]?.current?.focus();
    setPin('');
  };

  useEffect(() => {
    if (otpClear) {
      mainRef?.current?.clear();
      mainRef?.current?.focus();
      elRef[0]?.current?.focus();
      setPin('');
    }
  }, [otpClear]);

  useEffect(() => {
    if (pin.length === length) {
      onVerify(pin, clearPin);
      const len = pin.trim().length;
      elRef[len - 1]?.current?.blur();
      elRef[len - 1].current?.focus();
      return;
    }
    Platform.OS === 'ios'
      ? mainRef?.current?.focus()
      : setTimeout(() => mainRef?.current?.focus(), 50);
  }, [pin]);

  const setPinCharacter = (idx: number, c: string) => {
    const newPin = pin.split('');
    newPin[idx] = c;
    setPin(newPin.join('').trim());
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    if (e.nativeEvent.key !== 'Backspace') return;
    const newPin = pin.split('');
    newPin[newPin.length - 1] = '';
    setPin(newPin.join('').trim());
  };

  return (
    <View style={{ position: 'relative' }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          height: 48,
          marginHorizontal: '-2%',
        }}
        marginVertical="m"
      >
        {new Array(length).fill(0).map((i, idx) => (
          <View
            key={idx.toString()}
            style={{
              borderRadius: 10,
              borderColor: '#3F4957',
              backgroundColor: pin[idx] ? '#3F4957' : '#fff',
              height: 48,
              width: 48,
              flexGrow: 1,
              marginHorizontal: '4%',
              flexShrink: 0,
            }}
          >
            <TextInput
              ref={elRef[idx]}
              style={{
                width: '100%',
                fontSize: 16,
                paddingVertical: 14,
                textAlign: 'center',
                color: '#fff',
              }}
              keyboardType="phone-pad"
              maxLength={1}
              value={pin ? pin[idx] || '  ' : ''}
              blurOnSubmit={false}
              onChangeText={(t) => setPinCharacter(idx, t)}
              onKeyPress={(e) => handleKeyPress(e)}
            />
          </View>
        ))}
      </View>
      <TextInput
        ref={mainRef}
        autoFocus
        style={{
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
        }}
        maxLength={length}
        caretHidden={!!pin.length}
        textContentType="oneTimeCode"
        keyboardType="phone-pad"
        onChangeText={(text) => setPin(text)}
      />
    </View>
  );
};
