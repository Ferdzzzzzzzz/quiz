import {HamburgerMenuIcon} from '@radix-ui/react-icons'
import React, {PropsWithChildren} from 'react'
import {section} from '~/questions/questions'
import {Dialog, DialogTrigger, DialogContent} from '~/components/Dialog'
import {Checkbox} from '~/components/Checkbox'
import {Divider} from '../components/Divider'

type FilterState = {
  selectedSections: 'all' | section[]
}

const defaultState: FilterState = {
  selectedSections: 'all',
}

const FilterContext = React.createContext<undefined | FilterState>(undefined)

function useFilterState() {
  let context = React.useContext(FilterContext)

  if (!context) {
    throw Error('useFilterState can only be used within a FilterProvider')
  }

  return context
}

const FilterMenu = () => {
  let state = useFilterState()

  return (
    <Dialog>
      <div className="fixed px-4 py-2 border-b top-0 left-0 w-full bg-white/70 backdrop-blur-sm flex justify-end">
        <DialogTrigger className="focus:outline-none focus:ring focus:ring-blue-200 rounded">
          <HamburgerMenuIcon className="w-6 h-6 text-stone-500" />
        </DialogTrigger>
      </div>
      <DialogContent>
        <p className="font-md text-md text-gray-700">Filter</p>

        <button
          onClick={() => {
            debugger
            console.log('clicked RESET')
          }}
          className="border border-blue-800 text-blue-800 bg-blue-100 font-semibold text-md px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        >
          Reset Filter
        </button>
        <Divider />

        <div className="space-y-2">
          <Checkbox label="CS" />
          <Checkbox label="History" />
          <Checkbox label="Politics" />
          <Checkbox label="Sports" />
          <Checkbox label="Words" />
          <Checkbox label="Xhosa" />
        </div>
      </DialogContent>
    </Dialog>
  )
}

function FilterProvider({children}: PropsWithChildren<{}>) {
  return (
    <FilterContext.Provider value={defaultState}>
      {children}
    </FilterContext.Provider>
  )
}

export {FilterProvider, FilterMenu, useFilterState}
