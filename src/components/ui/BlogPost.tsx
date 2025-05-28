import React from 'react';

interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  authorImage: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  date,
  excerpt,
  image,
  category,
  authorImage
}) => {
  return (
    <article className="bg-gray-800 rounded-xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-blue-900/20 transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={authorImage} 
            alt="Author" 
            className="w-8 h-8 rounded-full mr-3 object-cover"
          />
          <div className="text-sm text-gray-400">{date}</div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-4">{excerpt}</p>
        
        <a 
          href="#" 
          className="inline-flex items-center text-blue-500 hover:text-blue-400 font-medium"
        >
          Read more
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default BlogPost;