import AdminLoginForm from "../../../components/AdminLoginForm";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Login",
  description: "Secure access to the clinic leads dashboard",
};

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">Admin Login</h1>
          <p className="text-muted-foreground">
            Enter your credentials to access the dashboard.
          </p>
        </div>
        <AdminLoginForm />
      </div>
    </main>
  );
}
