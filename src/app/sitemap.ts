import { MetadataRoute } from 'next';

const URL = 'https://www.maplelandpp.com';

export default function sitemap(): MetadataRoute.Sitemap {
  //   const profileList = getPostNameList().map((postName) => ({
  //     name: postName,
  //     content: getPostByName(postName)
  //   }));
  //   const profileRoute = postList.map(({ id, content }) => {
  //     const { date } = parseMarkdownMetadata(content);
  //     return {
  //       url: `${URL}/user-profile/${id}`,
  //       lastModified: date
  //     };
  //   });

  const routes = [
    '',
    '/helper-board',
    '/hunter-board',
    '/party-board',
    '/wood-cutter-board',
    '/notice'
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString()
  }));

  return [...routes];
}
