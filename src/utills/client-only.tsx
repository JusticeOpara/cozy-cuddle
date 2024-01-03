import * as React from "react"

const emptySubscribe = () => () => {}

export function ClientOnly(props:{children: React.ReactNode}) {
    const value = React.useSyncExternalStore(emptySubscribe,
        ()=> 'c',
        ()=> 's')

        return value === 's'? null : <>{props.children}</>
}