interface OtpVerifyProps {
    length: number;
    onVerify: (otp: string, clearPin?: () => void) => void;
    otpClear?: boolean;
}
export declare const VerifyOtp: ({ length, onVerify, otpClear, }: OtpVerifyProps) => any;
export {};
