# react-native-verify-otp

Easy use verify otp

## Installation

```
npm i react-native-verify-otp
or
yarn add react-native-verify-otp
```

## Usage

```jsx
import { VerifyOtp } from 'react-native-verify-otp';

<VerifyOtp
  length={4}
  onVerify={(otp, clearPin) => {
    Api.youendpoints(parameters).then((res: any) => {
      if (res.success) {
        // you actions
      } else {
        if (clearPin) clearPin();
        Alert.alert(res.message);
      }
    });
  }}
/>;
```

### Outputs   

<img src="https://github.com/appasaheb4/react-native-verify-otp/blob/main/assets/otp.png">

### More inforamtion watch youtube channel: https://www.youtube.com/tech-abl
