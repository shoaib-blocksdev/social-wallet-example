import {useEffect, useState} from "react";
import './SelectBox.css'
import { NETWORK, tokens } from "../Network";

const SelectBox = ({onSelect}: { onSelect: (token: string) => void }) => {
    const [selected, setSelected] = useState('')

    useEffect(() => {
        console.log("selectedselected",selected)
        onSelect(selected)
    }, [selected])

    return (
        <label className="select" htmlFor="slct">
            <select id="slct" required={true} value={selected} onChange={(e) => setSelected(e.target.value)}>
                {/*<option value="" disabled={true}>Select token</option>*/}
                {
                    Object.keys(tokens).map((key)=> <option value={tokens[key].address} selected={tokens[key].address === selected}>{tokens[key].token}</option>)
                }
                <option value={NETWORK.denom} selected={NETWORK.denom === selected}>{NETWORK.token}</option>

            </select>
        </label>
    )
}

export default SelectBox