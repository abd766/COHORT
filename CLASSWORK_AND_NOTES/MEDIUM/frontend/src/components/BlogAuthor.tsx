export function BlogAuthor() {
  return (
    <div className="px-16">
      <div className="text-black font-medium text-base pt-10">Author</div>
      <div className="grid grid-col-10">
        <div className="flex flex-row">
        <div className="col-span-1 pt-12 ">
          <div className="bg-slate-300 px-4 py-4 rounded-full"></div>
        </div>
        <div className="col-span-9 flex flex-col p-6 pl-6">
          <div className="text-black font-bold text-3xl pb-2">Jokester</div>
          <div className="text-slate-500 font-medium text-sm pt-1 pr-2">
            Master of mirth, purveyors of puns, and the funniest person in the
            kingdom
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
