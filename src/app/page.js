import Image from "next/image";
import { getBlogPosts, getNav, getFeature } from "../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Home() {
  const blogEntries = await getBlogPosts();
  const navbar = await getNav();
  const feature = await getFeature();
  return (
    <main className="grid grid-cols-2 gap-4">
      <div className="col-span-2 justify-items-center pt-10">
        <Image
          src={navbar.fields.logo.fields.file.url}
          alt="ibotta logo"
          width={450}
          height={200}
        />
      </div>
      {feature.map((singlePost) => {
        const { slug, title, date, image, content, author } = singlePost.fields;
        return (
          <div key={slug} className="col-span-2 row-start-2 p-10">
            <Image
              src={`http:${image.fields.file.url}`}
              alt={image.fields.title}
              width={1080}
              height={200}
            />{" "}
            <h2 className="font-extrabold text-xl py-5">
              {title}
            </h2>
            <div className="pb-5">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="[&>p]:mb-8 [&>h2]:font-extrabold">
              {documentToReactComponents(content)}
            </div>{" "}
            {author ? (
              <div className="grid grid-flow-col auto-cols-max gap-4 items-center">
                <Image
                  src={`http:${author.fields.file.url}`}
                  alt={author.fields.title}
                  width={35}
                  height={35}
                />
                <p>{author.fields.title}</p>
              </div>
            ) : null}
          </div>
        );
      })}
      {blogEntries.map((singlePost) => {
        const { slug, title, date, image, content, author } = singlePost.fields;
        return (
          <div key={slug} className="row-start-3 p-6">
            <Image
              src={`http:${image.fields.file.url}`}
              alt={image.fields.title}
              width={400}
              height={400}
            />{" "}
            <h2 className="font-extrabold text-xl py-5">{title}</h2>
            <div className="pb-5">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="[&>p]:mb-8 [&>h2]:font-extrabold">
              {documentToReactComponents(content)}
            </div>{" "}
            {author ? (
              <div className="grid grid-flow-col auto-cols-max gap-4 items-center">
                <Image
                  src={`http:${author.fields.file.url}`}
                  alt={author.fields.title}
                  width={35}
                  height={35}
                />
                <p>{author.fields.title}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </main>
  );
}
