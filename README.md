# react-native-verify-otp

Easy use verify otp

# Installation

```
npm i react-native-verify-otp
or
yarn add react-native-verify-otp
```

# Usage

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

# Outputs   

<img src="https://github.com/appasaheb4/react-native-verify-otp/blob/master/assets/otp.png">


# Development

## Sponsors
  - tech abl (https://www.youtube.com/tech-abl)

<a href="https://www.paypal.com/paypalme/appasaheb4/"><img src="https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg" height="40"></a>

## How To Contribute

* Fork and clone this repository
* Make some changes as required
* Write unit test to showcase its functionality
* Run the test suites to make sure it's not breaking anything `$ npm test`
* Submit a pull request under `develop` branch


