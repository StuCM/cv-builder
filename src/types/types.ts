export interface Data {
    general: General,
    education: Education[],
    work: Work[],
}

export interface General {
    name: string,
    position: string,
    email: string,
    phone: string,
    description: string,
}

export interface Education {
    id: number,
    school: string,
    degree: string,
    start: string,
    end: string,
}

export interface Work {
    id: number,
    company: string,
    position: string,
    start: string,
    end: string,
    summary: string,
}