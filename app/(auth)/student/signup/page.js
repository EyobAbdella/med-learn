import SignupPage from "@/app/components/auth/Signup";
import React from "react";

export default function page() {
  return (
    <SignupPage
      title='Create Student Account'
      subtitle='Join our medical education platform as a Student'
      role='student'
    />
  );
}
