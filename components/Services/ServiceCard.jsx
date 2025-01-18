import Layout from "../layout";

export default function ServiceCard({ title, description, iconSrc, link }) {
  return (
    
    <div className="p-6 border rounded-md hover:shadow-lg transition duration-300">
      {iconSrc && <img src={iconSrc} alt={title} className="w-12 h-12 mb-4" />}
      <h3 className="text-xl font-bold text-brandPurple mb-2">{title}</h3>
      <p className="mt-2 text-gray-600 mb-4">{description}</p>
      <div className="flex justify-start md:justify-center lg:justify-end">
        <a
          href={link}
          className="text-brandPurple font-semibold transition relative inline-block text-center md:text-left"
        >
          Leer más
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-brandPurple to-pink-500 scale-x-100 md:scale-x-0 md:hover:scale-x-100 md:transition-transform origin-left"></span>
        </a>
      </div>
    </div>
  );
}
