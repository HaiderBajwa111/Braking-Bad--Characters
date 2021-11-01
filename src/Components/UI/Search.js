import { useState } from 'react'

function Search( { getQuery }) {
    const [text, setText] = useState('')
    const onChange = (q)=>{
        setText(q)
        getQuery(q)
    }
    return (
        <section>
            <form className="search">
                <input type="text" className="form-control" placeholder="Search characters" autoFocus value={text} onChange={(e)=>{onChange(e.target.value)}}/>
            </form>
        </section>
    )
}

export default Search
