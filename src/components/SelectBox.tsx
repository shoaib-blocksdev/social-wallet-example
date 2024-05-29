import {useEffect, useState} from "react";
import './SelectBox.css'
import { DENOM } from "../Contants";

const SelectBox = ({onSelect}: { onSelect: (token: string) => void }) => {
    const [selected, setSelected] = useState(DENOM)

    useEffect(() => {
        onSelect(selected)
    }, [selected])

    return (
        <label className="select" htmlFor="slct">
            <select id="slct" required={true} value={selected} onChange={(e) => setSelected(e.target.value)}>
                {/*<option value="" disabled={true}>Select token</option>*/}
                <option value={DENOM}>NTRN</option>
            </select>
        </label>
    )
}

export default SelectBox