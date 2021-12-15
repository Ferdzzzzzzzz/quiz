import * as DialogPrimitive from '@radix-ui/react-dialog'
import {Cross1Icon} from '@radix-ui/react-icons'
import {PropsWithChildren} from 'react'

function Dialog({children}: PropsWithChildren<{}>) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-stone-500 bg-opacity-50 transition-opacity backdrop-blur-sm ease-in-out" />
      {children}
    </DialogPrimitive.Root>
  )
}

type DialogContentProps = PropsWithChildren<{}>

function DialogContent({children}: DialogContentProps) {
  return (
    <DialogPrimitive.Content className="fixed bg-white border rounded-lg w-3/4 mx-auto   shadow left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 p-4">
      <DialogPrimitive.Close className="absolute top-4 right-4 focus:outline-none focus:ring focus:ring-blue-200 rounded">
        <Cross1Icon className="w-6 h-6" />
      </DialogPrimitive.Close>

      {children}
    </DialogPrimitive.Content>
  )
}

const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close

export {Dialog, DialogContent, DialogTrigger, DialogClose}
