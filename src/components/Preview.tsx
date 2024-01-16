import { Data } from "../types/types"
import GeneralPreview from "./GeneralPreview"
import EducationPreview from "./EducationPreview"

function Preview({ general, education, work }:Data) {
    return (
        <div className="preview">
            <section className="a4Page">
                <GeneralPreview {...general} />
                <EducationPreview education={education} />
            </section>
        </div>
    )
}

export default Preview