export default function ServiceCard({ title, description, link }) {
  return (
    <div className="p-cardPadding border rounded-lg shadow-sm hover:shadow-md transition duration-300">
      {/* Título */}
      <h3 className="text-h3 font-semibold text-brandPurple mb-2">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-paragraph text-gray-600 mb-4">
        {description}
      </p>

      {/* Enlace */}
      {link && (
        <a
          href={link}
          className="text-brandPurple font-medium hover:underline"
        >
          Leer más
        </a>
      )}
    </div>
  );
}
