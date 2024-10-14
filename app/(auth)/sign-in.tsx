import { useSnackbar } from "@/context/SnackbarContext";
import { useLazyQuery } from "@apollo/client";
import { router } from "expo-router";
import { Formik, FormikValues } from "formik";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Button, HelperText, IconButton, TextInput } from "react-native-paper";
import * as Yup from "yup";
import apolloClient from "../_lib/apolloClient";
import { SIGN_IN_USER } from "../api/graphql/auth/queries";

const SignIn = () => {
  const [showPendingVerification, setShowPendingVerification] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { updateSnackbar } = useSnackbar();

  const [signInUser, signInUserMeta] = useLazyQuery(SIGN_IN_USER, {
    client: apolloClient,
    fetchPolicy: "network-only",
  });

  const onSignIn = async (value: FormikValues) => {
    const { data } = await signInUser({
      variables: {
        name: value.userName,
        password: value.password,
      },
    });
    console.log("data-37::> ", data);
    if (data?.users?.length > 0) {
      // setUserLoginStatus(data?.users[0]);
      if (data?.users[0].verified) {
        updateSnackbar({
          type: "success",
          open: true,
          message: "Signed in successfully",
        });

        router.push("/dashboard");
      } else {
        setShowPendingVerification(true);
      }
    } else {
      updateSnackbar({
        type: "error",
        open: true,
        message: "Invalid Credentials",
      });
    }
  };

  return (
    <View className="w-full flex flex-col">
      <Text className="mb-6 font-medium text-center">
        <Text className="text-2xl">
          {!showPendingVerification
            ? "Sign In to Harbor Industrial"
            : "Verification is Pending..."}
        </Text>
      </Text>
      {!showPendingVerification ? (
        <Formik
          initialValues={{ userName: "", password: "" }}
          onSubmit={(value) => {
            onSignIn(value);
          }}
          validationSchema={Yup.object({
            userName: Yup.string().required("Username is Required"),
            password: Yup.string().required("Password Required"),
          })}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View className="flex flex-col gap-2">
              <View>
                <TextInput
                  label="Username"
                  onChangeText={handleChange("userName")}
                  onBlur={handleBlur("userName")}
                  mode="outlined"
                  placeholder="Enter Username"
                  outlineColor={errors.userName ? "#FF0000" : "#CCCCCC"}
                  value={values.userName}
                />
                {errors.userName && (
                  <HelperText type="error">{errors.userName}</HelperText>
                )}
              </View>

              <View>
                <TextInput
                  label="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  mode="outlined"
                  secureTextEntry={!passwordVisible}
                  placeholder="Enter Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  outlineColor={errors.password ? "#FF0000" : "#CCCCCC"}
                  right={
                    <TextInput.Icon
                      icon={passwordVisible ? "eye-off" : "eye"}
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                  }
                />
                {errors.password && (
                  <HelperText type="error">{errors.password}</HelperText>
                )}
              </View>
              <TouchableOpacity onPress={() => router.push("/reset-password")}>
                <Text className="text-primary w-fit text-right text-base">
                  Forgot Password
                </Text>
              </TouchableOpacity>

              <View>
                <Button
                  mode="contained"
                  onPress={() => {
                    handleSubmit();
                  }}
                  style={{
                    width: "100%",
                    marginTop: 16,
                    borderRadius: 4,
                    backgroundColor: "#6C60FE",
                  }}
                >
                  {signInUserMeta.loading ? "SIGNING IN..." : "SIGN IN"}
                </Button>
              </View>
              <View className="flex-row justify-center pt-8">
                <Text className="mr-2 text-base">{`Don't have an account?`}</Text>
                <TouchableOpacity onPress={() => router.push("/sign-up")}>
                  <Text className="text-primary text-base">Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      ) : (
        <View className="flex gap-10 justify-start">
          <View className="flex justify-center items-center">
            <Text className="text-center">
              Your account is currently pending approval by an administrator.
            </Text>
            <Text className="text-center">
              You will be able to sign in once your account has been verified
              and activated.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setShowPendingVerification(false)}
            className="flex flex-row items-center"
          >
            <IconButton icon="arrow-left" size={20} />
            <Text className="text-primary text-base">Go back</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SignIn;
