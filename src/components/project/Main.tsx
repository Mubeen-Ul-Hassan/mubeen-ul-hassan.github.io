const articles = [
  {
    title: "Thesus Store",
    description: "Accessible command new component.",
    date: "07/02/24",
  },
  {
    title: "Craft",
    description: "Interaction design laboratory.",
    date: "06/28/24",
  },
  {
    title: "React Pointer",
    description: "Lighweight custom cursor for React.",
    date: "02/22/24",
  },
];

export default function Main() {
  return (
    <div>
      {articles.map(({ title, description, date }, index) => (
        <div key={index} className="pb-4 cursor-pointer">
          <h1 className="underline decoration-1 hover:decoration-neutral-500 transition-all ease-in-out delay-75 duration-150">
            {title}
          </h1>
          <div className="flex justify-between text-sm text-neutral-500">
            <h1>{description}</h1>
            <h1>{date}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
