import React from 'react'

function useLocalStorageState<T>(key: string, initialStateFallback: () => T) {
  let [state, setState] = React.useState<T | undefined>(undefined)

  React.useEffect(() => {
    // Perform localStorage action

    try {
      const item = localStorage.getItem(key)
      setState(() => (item ? JSON.parse(item) : initialStateFallback()))
    } catch (error) {
      console.log(error)
      setState(() => initialStateFallback())
    }
  }, [])

  const setLocalStorageState = React.useCallback(
    (f: (t: T | undefined) => T) => {
      try {
        setState(f)
        localStorage.setItem(key, JSON.stringify(state))
      } catch (error) {
        console.log(error)
      }
    },
    [state],
  )

  return {
    state: state,
    setState: setLocalStorageState,
  }
}

export {useLocalStorageState}
