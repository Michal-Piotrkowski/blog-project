import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
              posts {
                content {
                  raw
                }
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query);
    return result.categories;

}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getRecentPosts = async () => {
    const query = gql`
    query GetPostDetails(){
        posts(
            orderBy: createdAt_ASC
            last: 3
        ) {
            title
            featuredImage {
                url
            }
            createdAt
            slug
        }
    }
    `

    const result = await request(graphqlAPI, query);
    return result.posts;
}

export const getPopularPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(last: 4, orderBy: publishedAt_ASC) {
        title
        createdAt
        featuredPost
        featuredImage {
          url
        }
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query);
  return result.posts;
}

export const getPostDetails = async (slug) => {
    const query = gql`
    query MyQuery($slug: String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
        author {
          bio
          name
          photo {
            url
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug });

  return result.post;
}

export const getPostsByCategories = async (slug) => {
  const query = gql`
    query GetPostsbyCategories($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
              posts {
                content {
                  raw
                }
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getInputResults = async (string) => {
  const query = gql`
  query MyQuery($string: String!) {
    postsConnection(where: {_search: $string}) {
      edges {
        node {
          slug
          title
          featuredImage {
            url
          }
        }
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query, { string });
  return result.postsConnection.edges;
};