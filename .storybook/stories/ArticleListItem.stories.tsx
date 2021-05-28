import {Story} from "@storybook/react";
import ArticleListItem, {ArticleListItemProps} from "../../components/ArticleListItem";

// Mock Data
const mockArticleListItem = {
  title: 'Title',
  subtitle: 'Subtitle',
  text: 'Some random text',
  datePublished: new Date(),
  comments: 14,
  author: 'BroJack Horseman'
}

// Template definition
const Template: Story<ArticleListItemProps> = (args) => {
  if (typeof args.datePublished.toLocaleDateString === 'undefined') {
    args.datePublished = new Date(args.datePublished)
  }
  return <ArticleListItem {...args} />;
}

// defining "Default" Story
export const Default = Template.bind({});
Default.args = {...mockArticleListItem};

// exporting story
export default {
  title: 'Blog/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    datePublished: {
      control: { type: 'date'}
    },
    comments: {
      control: {
        type: 'range',
        min:0, max: 1000, step: 1
      }
    }
  },
}

