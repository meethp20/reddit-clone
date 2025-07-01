"use client"
import { Button } from '@/components/ui/button'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Menubar = ({editor}:{editor:Editor|null}) => {
  if(editor===null) {
    return null
}
   return(
    <div className='flex flex-wrap gap-5'>
        <Button type='button'>H1</Button>
    </div>
   )
}   


const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: 'Add here',

  })

  return (
      <div>
        <Menubar editor={editor}/>
        <EditorContent className='w-full max-h-[400px] my-3 mx-2 rounded-lg border' placeholder='body' editor={editor} />
      </div>  
)
}

export default Tiptap
