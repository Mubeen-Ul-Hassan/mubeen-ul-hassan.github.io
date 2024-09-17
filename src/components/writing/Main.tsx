const articles = [
  {
    title: "React Theme Hook for Toggling Images",
    description: "Switch your images between light and dark mode.",
    date: "07/02/24",
  },
  {
    title: "2024 Web Refresh",
    description: "Thoughts about my new websites.",
    date: "06/28/24",
  },
  {
    title: "Simple Page Blur",
    description: "Add smooth blur-fading on your websites.",
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
