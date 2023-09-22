import React from 'react';
import moment from 'moment';
import { getPostDetails, getPosts} from '../../../services';

const PostDetails = ({ post }) => {
   const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
    
    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    if(obj.href)
      return <React.Fragment><a key={index} href={obj.href} className="text-xl font-semibold mb-4 text-blue-500">{obj.title}</a></React.Fragment>;

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8 text-md">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'bulleted-list':
        return <li key={index} className="text-md font-bold">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</li>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className='relative mx-auto 2xl:px-10 xl:px-8 2xl:mb-8 xl:mb-6'>
      <div className='relative flex flex-col items-center 2xl:gap-12 xl:gap-10 2xl:my-16 xl:my-14'>
        <div className='realtive w-full 2xl:h-96 xl:h-72 flex justify-center bg-black'>
          <div className="w-full opacity-80 bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${post.featuredImage.url})`}}></div>
          <div className='2xl:h-20 xl:h-16 absolute 2xl:p-5 xl:p-4 bg-blue-700 top-0'>
            <h1 className='2xl:text-4xl xl:text-3xl tracking-tight font-extrabold text-center text-gray-200'>{post.title}</h1>
          </div>
          <div className='2xl:w-20 xl:w-20 absolute 2xl:top-3 xl:top-2 2xl:right-5 xl:right-4 rounded-full '><img className="border-white border-2 rounded-full" src={post.author.photo.url} alt="zdjecie autora"/></div>
        </div>
        <div className='w-1/2'>
          <div className='flex flex-row 2xl:space-x-2 xl:space-x-2 items-center'>
            <img className='2xl:w-6 xl:w-6 justify-self-end bg-black' src="/calendar.svg" alt="calendar-icon"/>
            <span className="text-gray-500 font-medium 2xl:text-base xl:text-sm">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
          <h2 className='2xl:text-2xl xl:text-xl tracking-tight font-extrabold text-justify text-gray-800 2xl:mt-4 xl:mt-3'>{post.excerpt}</h2>
          <div className='2xl:my-10 xl:my-8 2xl:text-base xl:text-base tracking-tight font-medium text-justify text-gray-800'>
            {
              post.content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text ? item.text : item.title, item));
                return getContentFragment(index, children, typeObj, typeObj.type);
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}