import {FunctionComponent} from "react";

export type ArticleListItemProps = {
  title: string
  subtitle: string
  text: string
  datePublished: Date
  comments: number
  author: string
}

const ArticleListItem: FunctionComponent<ArticleListItemProps> = ({title, subtitle, text, datePublished, comments, author}) => {
  return <>
    <article className="border rounded-lg p-4 bg-gray-700 text-white">
      <h2 className="text-2xl lg:text-4xl font-bold">{title}</h2>
      <h3 className="text-sm text-gray-400">{subtitle}</h3>
      <p className="py-2 my-2 border-b border-t text-gray-200 text-sm">{text}</p>
      <div className="flex justify-between text-gray-400 text-sm">
        <div>by <span className="text-gray-100">{author}</span> on {
          datePublished.toLocaleDateString('en-US', {
            dateStyle: 'long',
          })
        }</div>
        <div><span className="mr-2">💬</span>  {comments} comments</div>
      </div>
    </article>
  </>
}

export default ArticleListItem
