import Post from '../Post';

const Article = () => {
  return (
    <section className="container">
      <h3>Articles</h3>
      <div className="mt-5 container-posts">
        <Post subtitle = "Technology" title = "Definitive Blog Guide">
          This is a comprehensive guide to creating and managing a blog. It covers everything from choosing a platform to writing engaging content and promoting your blog effectively.
        </Post>

        <Post subtitle = "Photography" title = "Whats The Best Camera of 2021?">
          The best camera of 2021 depends on your needs, whether you're a professional photographer or a casual user. This article explores the top options available this year.
        </Post>

        <Post subtitle = "Cinema" title = "The 10 Movies With The Highest Box Office">
          The 10 movies with the highest box office earnings are a mix of franchises, adaptations, and original stories. This article takes a closer look at each film and what made it a success.
        </Post>
      </div>
    </section>
  );
}

export default Article;
