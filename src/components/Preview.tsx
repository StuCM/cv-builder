import { Data } from "../types/types"
import GeneralPreview from "./GeneralPreview"
import EducationPreview from "./EducationPreview"
import WorkPreview from "./WorkPreview"

function Preview({ general, education, work }:Data) {
    return (
        <div className="preview">
            <section className="a4Page">
                <GeneralPreview {...general} />
                <WorkPreview work={work} />
                <EducationPreview education={education} />
            </section>
        </div>
    )
}

export default Preview