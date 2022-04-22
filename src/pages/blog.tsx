import Layout from "../layout";
import PageSectionCarousel from "../containers/PageSectionCarousel";

const BlogPage = () => {
  return (
    <Layout>
      <PageSectionCarousel>
        <section className=" panel red">
          <h1 className="1">page one</h1>
        </section>
        <section className=" panel green">
          <h1 className="2">page two</h1>
        </section>
        <section className=" panel yelow">
          <h1 className="3">page tree</h1>
        </section>
        <section className=" panel blue">
          <h1>page four</h1>
        </section>
        <section className=" panel pink">
          <h1>page five</h1>
        </section>
        <section className=" panel turkey">
          <h1>page six</h1>
        </section>
      </PageSectionCarousel>
      {/*<section className={"h-screen text-white text-8xl bg-black grid place-items-center"}>*/}
      {/*    Blog*/}
      {/*</section>*/}
    </Layout>
  );
};
export default BlogPage;
