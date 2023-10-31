import data from './data.json'

export interface ProjData {
    title: string,
    techStack: string[],
}

export interface ExpData {
    title: string,
    location: string,
    start: string,
    end: string,
}

export function getProjData(): ProjData[] {
    return data.projects satisfies ProjData[]
}

export function getExpData(): ExpData[] {
    return data.experience satisfies ExpData[]
}