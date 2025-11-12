export const metadata = {
  title: "Contact Elviri Activewear | Get in Touch",
  description:
    "Have a question or collaboration idea? Contact Elviri Activetsware’s support team for inquiries, orders, or wholesale partnerships.",
};

export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p className="text-white/70">
        Questions, collaborations, or partnerships? Reach out to us at{" "}
        <a href="mailto:support@elviri.com" className="underline">
          support@elviri.com
        </a>
        .
      </p>
    </div>
  );
}
