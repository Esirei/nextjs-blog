import Layout from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';

const Post = () => (
  <Layout></Layout>
);

export default Post;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}
