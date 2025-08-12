import { logos } from "../logos/logos"


const columnClasses: Record<(typeof logos)[number]['column'], string> = {
    1: 'xl:col-start-1',
	2: 'xl:col-start-2',
	3: 'xl:col-start-3',
	4: 'xl:col-start-4',
	5: 'xl:col-start-5',
}

const rowClasses: Record<(typeof logos)[number]['row'], string> = {
    1: 'xl:row-start-1',
	2: 'xl:row-start-2',
	3: 'xl:row-start-3',
	4: 'xl:row-start-4',
	5: 'xl:row-start-5',
	6: 'xl:row-start-6',
}

const clsx = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
}

export {
    clsx,
    columnClasses,
    rowClasses
}