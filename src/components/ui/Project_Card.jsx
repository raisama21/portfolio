export default function Project_Card(props) {
  return (
    <li className="max-w-sm bg-light rounded-xl shadow-md">
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={`../img/${props.coverImg}`}
          alt="#"
          className="rounded-t-xl cursor-pointer transition-transform duration-200 ease-in hover:scale-105"
        />
      </div>
      <div className="px-5 py-5">
        <h2 className="mb-3 font-bold text-xl hover:underline hover:underline-offset-4">
          <a href={`${props.site}`} target="_blank">
            {props.title}
          </a>
        </h2>
        <div className="flex justify-between mb-3">
          <ul className="flex gap-2 font-medium">{props.language}</ul>
          <ul className="flex gap-2 font-medium">{props.tool}</ul>
        </div>
        <p className="my-4 py-2 border-y-2 border-exDark/30">
          {props.description}
        </p>
        <div className="flex justify-between">
          <button className="font-normal">
            <a href={`${props.repository}`} target="_blank">
              VIEW CODE
            </a>
          </button>
          <button className="font-normal">
            <a href={`${props.site}`} target="_blank">
              PREVIEW SITE
            </a>
          </button>
        </div>
      </div>
    </li>
  );
}
