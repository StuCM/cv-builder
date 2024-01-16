import { Data } from "../types/types"
import GeneralPreview from "./GeneralPreview"

function Preview({ general, education, work }:Data) {
    return (
        <div className="preview">
            <GeneralPreview {...general} />
        </div>
    )
}

export default Preview