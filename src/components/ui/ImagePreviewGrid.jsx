export default function ImagePreviewGrid({ images, title }) {
  if (!images?.length) {
    return null;
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {images.map((image, index) => (
        <figure
          key={image}
          className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 shadow-[0_22px_70px_-35px_rgba(6,78,59,0.35)]"
        >
          <img
            src={image}
            alt={`${title} highlight ${index + 1}`}
            loading="lazy"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </figure>
      ))}
    </div>
  );
}
