import { getPosts } from "../../services/api";
import React, { useEffect, useState } from "react";

const PostHeader = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data.results || data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Cargando posts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h1>Últimas Publicaciones</h1>
      {posts.length === 0 ? (
        <div>No hay posts disponibles.</div>
      ) : (
        posts.map(post => (
          <div key={post.id} className="post-container">
            <div className="post-image">
              {post.featured_image && (
                <img 
                  src={post.featured_image} 
                  alt={post.title} 
                  className="post-thumbnail"
                />
              )}
            </div>
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>
                {post.excerpt || (post.content ? post.content.substring(0, 100) : '')}...
              </p>
              <div className="post-meta">
                <div className="post-category">
                  En {post.category?.name || 'Sin categoría'}
                </div>
                <div className="post-date">
                  {new Date(post.published_date).toLocaleDateString()}
                </div>
              </div>
              <div className="post-read-more">
                <a href={`/posts/${post.slug}`} className="read-more-link">
                  Leer más
                </a>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default PostHeader;
