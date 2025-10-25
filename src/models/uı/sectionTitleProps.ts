import { GestureResponderEvent } from "react-native"


interface SectionTitleProps {
    title:string
    onPress:((event: GestureResponderEvent) => void) | undefined

}

export type {SectionTitleProps}