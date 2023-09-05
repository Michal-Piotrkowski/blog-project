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

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
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
    <div className='relative mx-auto px-10 mb-8'>
      <div className='relative flex flex-col items-center gap-12 my-16'>
        <div className='realtive w-full h-96 flex justify-center bg-black'>
          <div className="w-full opacity-80 bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${post.featuredImage.url})`}}></div>
          <div className='h-20 absolute p-5 bg-blue-700'>
            <h1 className='text-4xl tracking-tight font-extrabold text-center text-gray-200'>{post.title}</h1>
          </div>
          <div className='w-20 absolute top-3 right-5 rounded-full '><img className="border-white border-2 rounded-full" src={post.author.photo.url} alt="zdjecie autora"/></div>
        </div>
        <div className=''>
          <span className="text-gray-500 font-medium text-md">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          <h2 className='text-2xl tracking-tight font-extrabold text-center text-gray-800'>{post.excerpt}</h2>
          <div className='my-10 text-md tracking-tight font-medium text-justify text-gray-800'>
            {
              post.content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
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