import { Form } from "@remix-run/react";

export default function NewNote() {
  return (
    <Form
      method="post"
      id="note-form"
      className="max-w-[30rem] my-[3rem] mx-auto p-[2rem] rounded-[6px] bg-primary-100"
      style={{ boxShadow: "0 1px 8px rgba(0, 0, 0, 0.2)" }}
    >
      <p>
        <label
          htmlFor="title"
          className="block text-center mb-[0.5rem] text-primary-500 font-bold"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="block text-center w-full py-[0.5rem] px-[0.25rem] bg-primary-200 border-none rounded-sm text-primary-800"
          required
        />
      </p>
      <p>
        <label
          htmlFor="content"
          className="block text-center mb-[0.5rem] text-primary-500 font-bold"
        >
          Content
        </label>
        <textarea
          name="content"
          id="content"
          className="block text-center w-full py-[0.5rem] px-[0.25rem] bg-primary-200 border-none rounded-sm text-primary-800"
          required
        />
      </p>
      <div className="text-center mt-[1.5rem]">
        <button
          type="submit"
          className="cursor-pointer py-[0.75rem] px-[2rem] border-none rounded-[24px] bg-primary-200 text-primary-700 font-bold text-[1.05rem] hover:bg-primary-200 disabled:bg-primary-200 disabled:text-primary-300 disabled:cursor-not-allowed"
        >
          Add Note
        </button>
      </div>
    </Form>
  );
}
