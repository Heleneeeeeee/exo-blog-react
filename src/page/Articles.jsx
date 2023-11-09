import Header from "../component/Header";
import Footer from "../component/Footer";

function Articles () {
        const articles = [
            {
              title: "Article 1",
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error nam facilis repellat, similique fugit veniam ab delectus, alias dolor officia sit reiciendis, placeat ad doloribus distinctio maxime ullam possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error nemo distinctio alias nam beatae. Repellat minus impedit quasi temporibus dignissimos quas, architecto, laudantium ab reprehenderit, cupiditate repudiandae nihil. Dolores.",
              isPublished: true,
            },
        
            {
              title: "Article 2",
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error nam facilis repellat, similique fugit veniam ab delectus, alias dolor officia sit reiciendis, placeat ad doloribus distinctio maxime ullam possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error nemo distinctio alias nam beatae. Repellat minus impedit quasi temporibus dignissimos quas, architecto, laudantium ab reprehenderit, cupiditate repudiandae nihil. Dolores.",
              isPublished: false,
            },
        
            {
              title: "Article 3",
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error nam facilis repellat, similique fugit veniam ab delectus, alias dolor officia sit reiciendis, placeat ad doloribus distinctio maxime ullam possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error nemo distinctio alias nam beatae. Repellat minus impedit quasi temporibus dignissimos quas, architecto, laudantium ab reprehenderit, cupiditate repudiandae nihil. Dolores.",
              isPublished: true,
            },
        
            {
              title: "Article 4",
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error nam facilis repellat, similique fugit veniam ab delectus, alias dolor officia sit reiciendis, placeat ad doloribus distinctio maxime ullam possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error nemo distinctio alias nam beatae. Repellat minus impedit quasi temporibus dignissimos quas, architecto, laudantium ab reprehenderit, cupiditate repudiandae nihil. Dolores.",
              isPublished: false,
            },
        
            {
              title: "Article 5",
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error nam facilis repellat, similique fugit veniam ab delectus, alias dolor officia sit reiciendis, placeat ad doloribus distinctio maxime ullam possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error nemo distinctio alias nam beatae. Repellat minus impedit quasi temporibus dignissimos quas, architecto, laudantium ab reprehenderit, cupiditate repudiandae nihil. Dolores.",
              isPublished: true,
            },
        
            {
              title: "Article 6",
              pcontent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error nam facilis repellat, similique fugit veniam ab delectus, alias dolor officia sit reiciendis, placeat ad doloribus distinctio maxime ullam possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error nemo distinctio alias nam beatae. Repellat minus impedit quasi temporibus dignissimos quas, architecto, laudantium ab reprehenderit, cupiditate repudiandae nihil. Dolores.",
              isPublished: false,
            },
        
            {
              title: "Article 7",
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error nam facilis repellat, similique fugit veniam ab delectus, alias dolor officia sit reiciendis, placeat ad doloribus distinctio maxime ullam possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error nemo distinctio alias nam beatae. Repellat minus impedit quasi temporibus dignissimos quas, architecto, laudantium ab reprehenderit, cupiditate repudiandae nihil. Dolores.",
              isPublished: true,
            },
        
            {
              title: "Article 8",
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error nam facilis repellat, similique fugit veniam ab delectus, alias dolor officia sit reiciendis, placeat ad doloribus distinctio maxime ullam possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error nemo distinctio alias nam beatae. Repellat minus impedit quasi temporibus dignissimos quas, architecto, laudantium ab reprehenderit, cupiditate repudiandae nihil. Dolores.",
              isPublished: false,
            },
        
            {
              title: "Article 9",
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error nam facilis repellat, similique fugit veniam ab delectus, alias dolor officia sit reiciendis, placeat ad doloribus distinctio maxime ullam possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error nemo distinctio alias nam beatae. Repellat minus impedit quasi temporibus dignissimos quas, architecto, laudantium ab reprehenderit, cupiditate repudiandae nihil. Dolores.",
              isPublished: true,
            },
        
            {
              title: "Article 10",
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error nam facilis repellat, similique fugit veniam ab delectus, alias dolor officia sit reiciendis, placeat ad doloribus distinctio maxime ullam possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error nemo distinctio alias nam beatae. Repellat minus impedit quasi temporibus dignissimos quas, architecto, laudantium ab reprehenderit, cupiditate repudiandae nihil. Dolores.",
              isPublished: false,
            },
          ];
        
    const publishedArticles = articles.filter((article) => {
    return (article.isPublished === true);
    });
          
    return (
        <>
        <Header />
        <main>
        {publishedArticles.map((article) => {
        return (
          <article>
            <h3 className="art">{article.title}</h3>
            <p>{article.content}</p>
          </article>
        );
      })}
        </main>
        <Footer />
        </>
    )
}

export default Articles;