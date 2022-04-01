import { ref, reactive } from "vue";
import {
  useRegisterMutation,
  RegisterInput,
  useProfileQuery,
  useUpdateProfileMutation,
  UpdateProfileInput,
  useUpdatePasswordMutation,
  UpdatePasswordInput,
  useLoginMutation,
  LoginInput,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  ResetPasswordInput,
  ForgotPasswordInput,
} from "@/services/types.generated";
import { isValidEmail } from "@/helpers/isValidEmail";

const initialState: RegisterInput = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  captchaToken: "",
};

export function useRegister() {
  const registerMutation = useRegisterMutation();
  const input = reactive({
    ...initialState,
  });
  const rules = {
    firstName: [(val: string) => !!val || "Please enter your First Name"],
    lastName: [(val: string) => !!val || "Please enter your Last Name"],
    repeatPassword: [
      (val: string) =>
        val === input.password || "The provided passwords do not match.",
    ],
    email: [
      (val: string) =>
        (!!val && isValidEmail(val)) || "Please enter a valid email address.",
    ],
    password: [
      (val: string) =>
        (!!val && val.length > 5) ||
        "Please enter a Password of minimum 6 characters.",
    ],
  };

  function registerUser(input: RegisterInput) {
    const result = registerMutation.executeMutation({
      input,
    });
    return result;
  }
  return { registerUser, input, rules };
}

export function useLogin() {
  const loginMutation = useLoginMutation();
  const input = reactive({ email: "", password: "" });
  const rules = {
    email: [
      (val: string) =>
        (!!val && isValidEmail(val)) || "Please enter a valid email address.",
    ],
    password: [
      (val: string) =>
        (!!val && val.length > 5) ||
        "Please enter a Password of minimum 6 characters.",
    ],
  };
  function login(input: LoginInput) {
    const result = loginMutation.executeMutation({
      input,
    });
    return result;
  }
  return { login, input, rules };
}

export function useForgotPassword() {
  const forgotPasswordMutation = useForgotPasswordMutation();
  const input = reactive({ email: "", captchaToken: "" });
  const rules = {
    email: [
      (val: string) =>
        (!!val && isValidEmail(val)) || "Please enter a valid email address.",
    ],
  };
  function forgotPassword(input: ForgotPasswordInput) {
    const result = forgotPasswordMutation.executeMutation({
      input,
    });
    return result;
  }
  return { forgotPassword, input, rules };
}

export function useResetPassword(id: number, emailToken: string) {
  const resetPasswordMutation = useResetPasswordMutation();
  const input = reactive({ id, newPassword: "", emailToken });
  const rules = {
    newPassword: [
      (val: string) =>
        (!!val && val.length > 5) ||
        "Please enter a Password of minimum 6 characters.",
    ],
    repeatPassword: [
      (val: string) =>
        val === input.newPassword || "The provided passwords do not match.",
    ],
  };
  function resetPassword(input: ResetPasswordInput) {
    const result = resetPasswordMutation.executeMutation({
      input,
    });
    return result;
  }
  return { resetPassword, input, rules };
}

export function useUpdateProfile() {
  const updateProfileMutation = useUpdateProfileMutation();
  const input = reactive({
    ...initialState,
  });
  const error = ref();
  const fetching = ref(true);

  useProfileQuery().then(
    (result) => {
      error.value = result.error.value;
      fetching.value = false;
      // check for errors etc
      Object.keys(input).forEach((key) => {
        input[key] = result.data.value.profile[key];
      });
    },
    (error) => {
      console.log(error);
    }
  );

  function updateProfile(input: UpdateProfileInput) {
    const result = updateProfileMutation.executeMutation({
      input,
    });
    return result;
  }
  return {
    input,
    error,
    fetching,
    updateProfile,
  };
}

export function useUpdatePassword() {
  const updatePasswordMutation = useUpdatePasswordMutation();

  function updatePassword(input: UpdatePasswordInput) {
    const result = updatePasswordMutation.executeMutation({
      input,
    });
    return result;
  }
  return { updatePassword };
}
