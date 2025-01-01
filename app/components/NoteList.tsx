import { Notes } from "types/notes";

export const NoteList = ({ notes }: { notes: Notes[] }) => {
  return (
    <ul
      id="note-list"
      className="max-w-[68rem] flex flex-wrap justify-center gap-[1rem] list-none my-[2rem] mx-auto"
    >
      {notes.map((note, index: number) => (
        <li
          key={note.id}
          className="w-[30%] bg-primary-700 p-[1.5rem] rounded-[4px] hover:bg-primary-600 transition-all duration-300 hover:translate-y-[0.25rem] animate-fade-in-blur"
        >
          <article>
            <header>
              <ul className="list-none mb-[0.5rem] pb-[0.5rem] border-b-[2px] border-b-primary-300 flex justify-between items-center text-primary-300 font-bold ">
                <li>#{index + 1}</li>
                <li>
                  <time dateTime={note.id}>
                    {new Date(note.id).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </li>
              </ul>
              <h2 className="mb-[0.5rem] text-primary-200">{note.title}</h2>
            </header>
            <p className="m-0 text-primary-100 whitespace-nowrap overflow-hidden text-ellipsis w-full">
              {note.content}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
};
