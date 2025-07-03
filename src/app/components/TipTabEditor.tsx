"use client";
import { Button } from "@/components/ui/button";
import { useEditor, EditorContent, Editor, JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Menubar = ({ editor }: { editor: Editor | null }) => {
  if (editor === null) {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-5">
      <Button
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 1 }).run();
          console.log("!");
          console.log(editor.getHTML());
        }}
        variant={
          editor.isActive("heading", { level: 1 }) ? "outline" : "secondary"
        }
        type="button"
      >
        H1
      </Button>
    </div>
  );
};

export function TipTap({
  setJson,
  Json,
}: {
  setJson: any;
  Json: JSONContent |null ;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: Json ?? null ,
    editorProps: {
      attributes: {
        className: "prose",
      },
    },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      setJson(Json)
    },
  });
  
  return (
    <div>
      <Menubar editor={editor} />
      <EditorContent
        className=" prose dark:prose-invert max-w-[200px] lg:max-w-full lg:w-full h-[150px] max-h-[400px] my-3 mx-2 rounded-lg border"
        placeholder="body"
        editor={editor}
      />
    </div>
  );
}


