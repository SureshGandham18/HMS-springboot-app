import {
  Button,
  PasswordInput,
  SegmentedControl,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconHeartbeat } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router";
import LoginPage from "./LoginPage";
// import { Link } from "react-router";

const RegisterPage = () => {
  const form = useForm({
    initialValues: {
      type: "patient",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (!value ? "Password is required" : null),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });
  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };
  return (
    <div
      style={{ backgroundImage: 'url("/bg.png")' }}
      className="w-full h-screen !bg-cover !bg-center !bg-no-repeat flex flex-col items-center justify-center font-sans"
    >
      {/* Brand Header */}
      <div className="mb-4 flex items-center gap-2 text-dark">
        <IconHeartbeat size={42} stroke={2.5} />
        <span className="font-heading font-bold text-4xl">Pulse</span>
      </div>

      {/* Glassmorphism Card */}
      <div className="w-[420px]  backdrop-blur-xl p-10 py-8 rounded-2xl shadow-xl">
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-4 [&_input]:placeholder:text-light [&_.mantine-Input-input]:!border [&_.mantine-Input-input]:!border-light focus-within:[&_.mantine-Input-input]:!border-primary-600 [&_input]:!text-white [&_input]:!pl-2 [&_svg]:!text-white"
        >
          <div className="self-center font-heading font-medium text-white text-2xl">
            Register
          </div>
          <SegmentedControl size="md" radius="md" color="primary" bg="none" fullWidth className='[&_*]:!text-white border border-white' {...form.getInputProps("type")} data={[{'label': 'Patient', 'value': 'PATIENT'}, {'label': 'Doctor', 'value': 'DOCTOR'}, {'label': 'Admin', 'value': 'ADMIN'}]} />
          <TextInput
            {...form.getInputProps("email")}
            className="transition duration-300"
            placeholder="Email"
            size="md"
            radius="md"
            variant="unstyled"
          />

          <PasswordInput
            {...form.getInputProps("password")}
            className="transition duration-300"
            placeholder="Password"
            size="md"
            radius="md"
            variant="unstyled"
          />

          <PasswordInput
            {...form.getInputProps("confirmPassword")}
            className="transition duration-300"
            placeholder="Confirm Password"
            size="md"
            radius="md"
            variant="unstyled"
          />

          <Button
            type="submit"
            radius="md"
            size="md"
            fullWidth
            className="mt-3 bg-primary-400 hover:bg-primary-500 text-white font-medium rounded-lg transition-colors"
          >
            Sign Up
          </Button>
          <div className="text-white text-sm self-center ">
            Have an account?
            <Link className="hover:underline" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
