import CTAButton from "../../components/CTAButton";
import Link from "next/link";

export const metadata = {
  title: "Thank You",
  description: "Your submission was received",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">Thank You</h1>
        <p className="text-muted-foreground text-lg mb-10">
          We’ve received your details. We’ll be in touch shortly.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/">
            <CTAButton>Back to Home</CTAButton>
          </Link>
          <Link href="/" className="text-primary underline hover:text-primary/90">
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
