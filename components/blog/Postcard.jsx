// components/blog/Postcard.jsx
import Link from "next/link";

export default function Postcard({ title, excerpt, slug, date, tags }) {
  return (
    <article className="postcard">
      <div className="p-4">
        <h2 className="postcard-title">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h2>
        <p className="postcard-excerpt">{excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{date}</span>
          <div className="flex gap-2">
            {tags?.map((tag, index) => (
              <span key={index} className="postcard-tags">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
