// components/PostCard.js
export default function PostCard({ title, date, excerpt, imageSrc, category }) {
    return (
      <article className="p-6 border rounded-md shadow-sm hover:shadow-lg transition duration-300 relative">
        {/* Imagen de previsualización */}
        {imageSrc && (
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
            <img
              src={imageSrc}
              alt={title}
              className="object-cover w-full h-full"
            />
            {/* Etiqueta de categoría */}
            {category && (
              <span className="absolute top-2 left-2 bg-brandPurple text-white text-sm font-semibold px-3 py-1 rounded-md">
                {category}
              </span>
            )}
          </div>
        )}
  
        {/* Contenido textual */}
        <h2 className="text-xl font-bold text-brandPurple mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-4">{date}</p>
        <p className="text-gray-700 leading-relaxed">{excerpt}</p>
        <div className="mt-4">
          <a
            href="#"
            className="text-brandPurple font-semibold hover:underline"
          >
            Leer más →
          </a>
        </div>
      </article>
    );
  }
  