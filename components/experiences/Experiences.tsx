import { education, experience } from "@/types/main"
import { useState } from "react"
import { ViewAll } from "../ui/ViewAll"
import SectionWrapper from "../SectionWrapper"
import SectionHeading from "../ui/SectionHeading"
import ExperienceCard from "./ExperienceCard"

interface Props {
    experienceData: experience[]
    educationData: education[]
}

const Experiences = ({ experienceData, educationData }: Props) => {
    const [show, setShow] = useState("Experience")
    const [viewAll, setViewAll] = useState(false)

    const experiences = [...experienceData].reverse()
    const educations = [...educationData].reverse()
    const items = show === "Experience" ? experiences : educations
    const visible = viewAll ? items : items.slice(0, 4)

    return (
        <SectionWrapper id="experience" className="py-20 md:py-28">
            <div className="container-page">
                <SectionHeading
                    index="04 — Path"
                    title="Experience that scales from APIs to product UI."
                    subtitle="Enterprise software, ecommerce, sports platforms, and high-traffic backends."
                />

                <div className="mb-10 inline-flex rounded-xl border border-slate-200 bg-white p-1.5 dark:border-white/10 dark:bg-surface-dark" role="tablist">
                    {['Experience', 'Education'].map((e) => (
                        <button
                            key={e}
                            type="button"
                            role="tab"
                            aria-selected={show === e}
                            onClick={() => {
                                setShow(e)
                                setViewAll(false)
                            }}
                            className={`cursor-pointer rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-ring ${show === e ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}
                        >
                            {e}
                        </button>
                    ))}
                </div>

                <div className="relative">
                    <div className="absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px bg-slate-200 md:left-1/2 md:block dark:bg-white/10" />
                    {visible.map((e, i) => (
                        // @ts-ignore
                        <ExperienceCard key={`${show}-${i}`} {...e} index={i} />
                    ))}
                </div>

                {items.length > 4 && (
                    <ViewAll
                        scrollTo="experience"
                        title={viewAll ? 'Show less' : 'Show more'}
                        handleClick={() => setViewAll(!viewAll)}
                    />
                )}
            </div>
        </SectionWrapper>
    )
}

export default Experiences
