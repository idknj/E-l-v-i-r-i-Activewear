export const metadata = {
  title: "FAQs | Elviri Activewear Support & Info",
  description:
    "Find answers to frequently asked questions about sizing, orders, shipping, and returns. Your guide to shopping Elviri Activetsware.",
};

export default function FAQPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
      <ul className="space-y-2 text-white/70">
        <li>
          <strong>Q:</strong> Do you ship internationally?
          <br />
          A: Yes, we ship worldwide.
        </li>
        <li>
          <strong>Q:</strong> What materials do you use?
          <br />
          A: Premium cotton and performance blends for comfort and durability.
        </li>
        <li>
          <strong>Q:</strong> Can I return an item?
          <br />
          A: Returns are accepted within 14 days if unworn and undamaged.
        </li>
      </ul>
    </div>
  );
}
