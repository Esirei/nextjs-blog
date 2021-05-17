import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

const Post = ({ postData }) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    {postData.title}
    <br />
    {postData.id}
    <br />
    <Date dateString={postData.date} />
    <br />
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>
);

export default Post;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}
