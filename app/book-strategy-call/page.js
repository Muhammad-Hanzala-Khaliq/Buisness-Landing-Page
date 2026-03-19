import LeadForm from "../../components/LeadForm";

export const metadata = {
  title: "Book Your Strategy Call",
  description: "Fill in your details to schedule a premium consultation.",
};

export default function BookStrategyCallPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">Book Your Strategy Call</h1>
          <p className="text-muted-foreground">
            We’ll review your clinic before the call. Limited availability for qualified clinics.
          </p>
        </div>
        <LeadForm />
      </div>
    </main>
  );
}
