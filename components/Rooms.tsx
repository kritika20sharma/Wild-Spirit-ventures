export default function Rooms() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Cottages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Luxury Cottage", "Forest View", "Family Suite"].map((room) => (
            <div
              key={room}
              className="rounded-xl bg-white dark:bg-black p-6 shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{room}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Spacious, comfortable, and surrounded by nature.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
