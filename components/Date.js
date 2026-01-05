import { parseISO , format } from "date-fns";

export default function Date({datestring}) {
    const date = parseISO(datestring);
    return (
        <time>{format(date,'MM/dd/yyyy')}</time>
    )
}