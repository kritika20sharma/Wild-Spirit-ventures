type GalleryProps = {
  title?: string;
};

export default function Gallery({ title = "Gallery" }: GalleryProps) {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>

      <div className="grid gap-6 px-6 md:grid-cols-3 max-w-6xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="h-64 w-full rounded-xl bg-gray-300 border-4 border-gray-400 flex items-center justify-center text-gray-700 text-lg font-semibold"
          >
            Image {item}
          </div>
        ))}
      </div>
    </section>
  );
}
