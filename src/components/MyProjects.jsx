import project from "../data/Project_data";
import { nanoid } from "nanoid";
import Project_Card from "./ui/Project_Card";

export default function MyProjects() {
  function splitProjectIntoChunk() {
    const chunkSize = project.length / 3;
    const numChunks = Math.ceil(project.length / chunkSize);
    const projectData = [];

    for (let i = 0; i < numChunks; i++) {
      const start = i * chunkSize;
      const end = start + chunkSize;
      const chunk = project.slice(start, end);
      projectData.push(chunk);
    }
    return projectData;
  }

  const [col1, col2, col3] = splitProjectIntoChunk();

  const projectCard1 = col1.map((item) => {
    const language = item.languages.map((item) => {
      return <li key={nanoid()}>{item}</li>;
    });

    const tool = item.tools.map((item) => {
      return <li key={nanoid()}>{item}</li>;
    });

    return (
      <Project_Card key={nanoid()} {...item} language={language} tool={tool} />
    );
  });

  const projectCard2 = col2.map((item) => {
    const language = item.languages.map((item) => {
      return <li key={nanoid()}>{item}</li>;
    });

    const tool = item.tools.map((item) => {
      return <li key={nanoid()}>{item}</li>;
    });

    return (
      <Project_Card key={nanoid()} {...item} language={language} tool={tool} />
    );
  });

  const projectCard3 = col3.map((item) => {
    const language = item.languages.map((item) => {
      return <li key={nanoid()}>{item}</li>;
    });

    const tool = item.tools.map((item) => {
      return <li key={nanoid()}>{item}</li>;
    });

    return (
      <Project_Card key={nanoid()} {...item} language={language} tool={tool} />
    );
  });

  return (
    <section className="bg-dark py-20">
      <div className="text-center" id="my-work">
        <h3 className="text-light mb-8 tracking-widest underline underline-offset-8 lg:mb-16">
          A selection range of my work
        </h3>
      </div>
      <div className="grid gap-6 w-fit mx-auto md:grid-cols-2 md:max-w-4xl lg:grid-cols-3 lg:max-w-7xl">
        <ul className="flex flex-col gap-8">{projectCard1}</ul>
        <ul className="flex flex-col gap-8">{projectCard2}</ul>
        <ul className="flex flex-col gap-8">{projectCard3}</ul>
      </div>
      <div className="flex justify-center">
        <button className="load-btn">
          <a href="https://dribbble.com/raisama21" target="_blank">
            view more
          </a>
        </button>
      </div>
    </section>
  );
}
