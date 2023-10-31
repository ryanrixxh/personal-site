import data from './data.json'

export interface ProjData {
    info: {
        title: string,
        techStack: string[],
    }
    details: string[],
}

export interface ExpData {
    info: {
        title: string,
        location: string,
        start: string,
        end: string,
    }
    details: string[],
}

export function getProjData(): ProjData[] {
    return data.projects satisfies ProjData[]
}

export function getExpData(): ExpData[] {
    return data.experience satisfies ExpData[]
}