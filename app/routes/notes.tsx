import NewNote from "~/components/NewNote";
import { ActionFunction, redirect } from "@remix-run/node";
import { getStoredNotes, storeNotes } from "~/data/notes";
import { NoteList } from "~/components/NoteList";
import { useLoaderData } from "@remix-run/react";
import { Notes } from "types/notes";

export default function NotesPage() {
  const notes = useLoaderData<Notes[]>();

  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

export async function loader() {
  const notes = await getStoredNotes();
  return notes;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  // Add validation ........

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);

  return redirect("/notes");
};
