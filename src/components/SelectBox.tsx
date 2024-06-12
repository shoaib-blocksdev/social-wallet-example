import {useEffect, useState} from "react";
import './SelectBox.css'
import { NETWORK } from "../Network";

const SelectBox = ({onSelect}: { onSelect: (token: string) => void }) => {
    const [selected, setSelected] = useState(NETWORK.denom)

    useEffect(() => {
        onSelect(selected)
    }, [selected])

    return (
        <label className="select" htmlFor="slct">
            <select id="slct" required={true} value={selected} onChange={(e) => setSelected(e.target.value)}>
                {/*<option value="" disabled={true}>Select token</option>*/}
                <option value={NETWORK.denom}>{NETWORK.token}</option>
                <option value={NETWORK.denom}>{NETWORK.token}</option>
            </select>
        </label>
    )
}

export default SelectBox