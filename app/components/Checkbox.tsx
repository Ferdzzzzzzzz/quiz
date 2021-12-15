import * as CheckboxPrim from '@radix-ui/react-checkbox'
import {CheckIcon} from '@radix-ui/react-icons'
import * as LabelPrim from '@radix-ui/react-label'

type CheckboxProps = {
  label: string
}

function Checkbox({label}: CheckboxProps) {
  return (
    <CheckboxPrim.Root className="flex items-center focus:outline-none focus:ring focus:ring-blue-200 rounded p-1">
      <div className="h-4 w-4 text-blue-800 border-gray-300 rounded border place-content-center	">
        <CheckboxPrim.Indicator>
          <CheckIcon className="h-4 w-4" />
        </CheckboxPrim.Indicator>
      </div>
      <LabelPrim.Root className="ml-3 text-sm font-medium text-gray-700">
        {label}
      </LabelPrim.Root>
    </CheckboxPrim.Root>
  )
}

export {Checkbox}
