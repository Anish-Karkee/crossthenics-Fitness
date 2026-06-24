import SignupForm from "@/components/auth/SignUpForm";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center  bg-linear-to-br from-red-100 via-white to-red-200">
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
      <SignupForm />
    </main>
  );
}