import { BlogContent } from "../components/BlogContent";
import { BlogAuthor } from "../components/BlogAuthor";
export function Blog() {
  return (
    <div className="grid grid-rows-2 md:grid-cols-11 m-3 shadow-2xl rounded-l shadow-slate-950 bg-slate-100 pt-10 ">
      <div className="col-span-11 md:col-span-7">
        <BlogContent />
      </div>
      <div className="col-span-11 md:col-span-4">
        <BlogAuthor />
      </div>
    </div>
  );
}
