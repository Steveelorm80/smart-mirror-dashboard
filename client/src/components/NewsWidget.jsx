const NewsWidget = ({ news }) => {
  return (
    <div className="widget news-widget" style={{ gridArea: "news" }}>
      <h3>Top Headlines</h3>
      <div className="news-container">
        {news.slice(0, 5).map((item, index) => (
          <p key={index}>• {item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default NewsWidget;