import {HamburgerMenuIcon, ResetIcon} from '@radix-ui/react-icons'
import React, {PropsWithChildren} from 'react'
import {section} from '~/questions/questions'
import {Dialog, DialogTrigger, DialogContent} from '~/components/Dialog'
import {Checkbox} from '~/components/Checkbox'
import {PrimaryButton} from '~/components/Button'

type FilterState = {
  selectedSections: 'all' | section[]
}

const defaultState: FilterState = {
  selectedSections: 'all',
}

const FilterStateContext = React.createContext<undefined | FilterState>(
  undefined,
)

type SetFilterState = (filterState: FilterState | undefined) => FilterState

const SetFilterStateContext = React.createContext<
  undefined | ((f: SetFilterState) => void)
>(undefined)

function useFilterState() {
  let context = React.useContext(FilterStateContext)

  if (!context) {
    throw Error('useFilterState can only be used within a FilterProvider')
  }

  return context
}

function useSetFilterState() {
  let context = React.useContext(SetFilterStateContext)

  if (!context) {
    throw Error('useSetFilterState can only be used within a FilterProvider')
  }

  return context
}

// TODO
const FilterMenu = () => {
  return (
    <Dialog>
      <div className="fixed px-4 py-2 border-b top-0 left-0 w-full bg-white/70 backdrop-blur-sm flex justify-end">
        <DialogTrigger className="focus:outline-none focus:ring focus:ring-blue-200 rounded">
          <HamburgerMenuIcon className="w-6 h-6 text-stone-500" />
        </DialogTrigger>
      </div>
      <DialogContent>
        <p className="font-md text-md text-gray-700">Filter</p>

        <div className="space-y-2">
          <Checkbox label="CS" />
          <Checkbox label="History" />
          <Checkbox label="Politics" />
          <Checkbox label="Sports" />
          <Checkbox label="Words" />
          <Checkbox label="Xhosa" />
          <PrimaryButton
            onClick={() => {
              console.log('clicked RESET')
            }}
          >
            <div className="flex items-center space-x-2">
              <ResetIcon />
              <p>Clear</p>
            </div>
          </PrimaryButton>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function FilterProvider({children}: PropsWithChildren<{}>) {
  let [state, setState] = React.useState<FilterState>(() => defaultState)

  return (
    <SetFilterStateContext.Provider value={setState}>
      <FilterStateContext.Provider value={state}>
        {children}
      </FilterStateContext.Provider>
    </SetFilterStateContext.Provider>
  )
}

export {FilterProvider, FilterMenu, useFilterState}
