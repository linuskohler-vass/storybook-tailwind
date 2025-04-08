import template from './teaser-news-item.hbs';

const render = (args) => template(args);

export default {
  title: 'components/base/TeaserNewsItem',
  tags: ['autodocs'],
};

export const tag = {
  args: {
    items: [
      {
        image: 'https://www.swissgrid.ch/etc.clientlibs/swissgrid/core/clientlibs/publish/main/resources/media/images/Swissgrid-News-Placeholder.jpg',
        url: '#',
        title: 'This is the item title that is just a bit longer then the rest of the titles',
        titleColor: '',
        date: '3. März 2025',
        category: 'news',
        text: 'Drei nationale und internationale Ratingagenturen haben ihre Bewertung der Nachhaltigkeitsleistung von Swissgrid in den letzten Monaten aktualisiert.'
      },
      {
        image: 'https://swissgrid.imgix.net/content/dam/swissgrid/about-us/newsroom/blog/2023/stromnetze-kantone-header.jpg.hash/be3eafb1d19828664d4538e8d0960509f69fc33c?fit=crop&auto=format%2Ccompress%2Ccs%3Dtinysrgb&w=375&h=234,%20https://swissgrid.imgix.net/content/dam/swissgrid/about-us/newsroom/blog/2023/stromnetze-kantone-header.jpg.hash/be3eafb1d19828664d4538e8d0960509f69fc33c?fit=crop&auto=format%2Ccompress%2Ccs%3Dtinysrgb&w=750&h=468%202x',
        url: '#',
        title: 'This is the item title',
        date: '3. März 2025',
        category: 'news',
        text: 'Drei nationale und internationale Ratingagenturen haben ihre Bewertung der Nachhaltigkeitsleistung von Swissgrid in den letzten Monaten aktualisiert.'
      },
      {
        image: 'https://swissgrid.imgix.net/content/dam/swissgrid/about-us/newsroom/blog/2025/20250227-blog-drohne-header.jpg.hash/654bb4889fb4d97a42fda556476a2a6b19ede4ce?fit=crop&auto=format%2Ccompress%2Ccs%3Dtinysrgb&w=375&h=234,%20https://swissgrid.imgix.net/content/dam/swissgrid/about-us/newsroom/blog/2025/20250227-blog-drohne-header.jpg.hash/654bb4889fb4d97a42fda556476a2a6b19ede4ce?fit=crop&auto=format%2Ccompress%2Ccs%3Dtinysrgb&w=750&h=468%202x',
        url: '#',
        title: 'This is the item title',
        date: '3. März 2025',
        category: 'news',
        text: 'Drei nationale und internationale Ratingagenturen haben ihre Bewertung der Nachhaltigkeitsleistung von Swissgrid in den letzten Monaten aktualisiert.'
      },
      {
        image: 'https://swissgrid.imgix.net/content/dam/resources/headers/campaigns/20200411_Mettlen_4-9074-web.jpg.hash/059470b54c68594566e9b79d0334083844374019?fit=crop&auto=format%2Ccompress%2Ccs%3Dtinysrgb&fp-x=0.4886598&fp-y=0.53357697&w=375&fp-z=1&h=234&crop=focalpoint,%20https://swissgrid.imgix.net/content/dam/resources/headers/campaigns/20200411_Mettlen_4-9074-web.jpg.hash/059470b54c68594566e9b79d0334083844374019?fit=crop&auto=format%2Ccompress%2Ccs%3Dtinysrgb&fp-x=0.4886598&fp-y=0.53357697&w=750&fp-z=1&h=468&crop=focalpoint%202x',
        url: '#',
        title: 'This is the item title',
        date: '3. März 2025',
        category: 'news',
        text: ' Drei nationale und internationale Ratingagenturen haben ihre Bewertung der Nachhaltigkeitsleistung von Swissgrid in den letzten Monaten aktualisiert.'
      }
    ],
  },
  render,
};