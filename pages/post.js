// This is the Link API
import {withRouter} from 'next/router'
import Markdown from "react-markdown"

const Content = withRouter((props) => (
  <div>
          <h3>{article.title}</h3>
          <h3>{article.description}</h3>
          <h3>{article.content}</h3>
  </div>
))

const Post = withRouter((props) => (
  <div>
          <h3>{article.title}</h3>
          <h3>{article.description}</h3>
          <h3>{article.content}</h3>
    <div className="markdown">
      <Markdown
        source={`
                This is our blog post.
                Yes. We can have a [link](/link).
                And we can have a title as well.
                ### This is a title
                And here's the content.
                `}
        />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: "Arial";
      }
      .markdown a {
        text-decoration: none;
        color: blue;
      }
      .markdown a:hover {
        opacity: 0.6;
      }
      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </div>
));
export default Post
