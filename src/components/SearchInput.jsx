import React from 'react'
import searchIcon from '../assets/icons/searchIcon.png'
const styles = {
    input: {
        display: "flex",
        alignItems: "center",
        columGap: "8px"
    },
    icon: {
        width: "15px",
        height: "15px"

    }
}
export default function SearchInput({searchTerm, setSearchTerm}) {
    return (
        <div style={styles.input}>
            <img style={styles.icon} src={searchIcon} alt="icon" />
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" />
        </div>
    )
}
