import SignupPage from "@/app/components/auth/Signup";

export default function TeacherSignup() {
  return (
    <SignupPage
      title='Create Teacher Account'
      subtitle='Join our medical education platform as a Teacher'
      role='teacher'
    />
  );
}
