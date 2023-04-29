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
import {VerifyOtp} from 'react-native-verify-otp';

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

☆━━━━━━━━━━━━━━━━━━━☆☆━━━━━━━━━━━━━━━━━━━☆
Mobile No: +91 9260303151 <br />
Email Id: onlyappasaheb4@gmail.com <br />
Github: www.github.com/appasaheb4 <br />
Website: www.tech-abl.com
☆━━━━━━━━━━━━━━━━━━━☆☆━━━━━━━━━━━━━━━━━━━☆

## Contributes / Support

1.  More content here : https://www.youtube.com/tech-abl

2.  Submit your pr for idea / issue / feature
    ### How To Contribute
        - Fork and clone this repository
        - Make some changes as required
        - Write unit test to showcase its functionality
        - Run the test suites to make sure it's not breaking anything `$ npm test`
        - Submit a pull request under `dev` branch

😊 ALWAYS WELCOME 😊
