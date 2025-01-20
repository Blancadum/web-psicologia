export default function ServiceCard({ title, description, iconSrc, link }) {
  return (
    <div className="p-6 border rounded-md hover:shadow-lg transition-shadow duration-300">
      {iconSrc && <img src={iconSrc} alt={title} className="w-16 h-16 mb-4 mx-auto" />}
      <h3 className="text-xl font-bold text-brandPurple mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {link && (
        <div className="text-center">
          <a
            href={link}
            className="text-brandPurple font-semibold transition hover:underline"
          >
            Leer más
          </a>
        </div>
      )}
    </div>
  );
}
