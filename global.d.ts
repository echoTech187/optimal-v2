import {IStaticMethods} from "flyonui/flyonui";

declare global {
    interface Window {
        FlyonUI: IStaticMethods
    }
}

export {}