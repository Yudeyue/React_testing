import React from 'react'

export const Application = () => {
    return (
        <>
            <h1>Job application form</h1>
            <h2>Section 1</h2>
            <p>All fields are mandatory</p>
            <span title='close'>X</span>
            <img src='' alt='a person with a laptop'></img>
            <div data-testid='custom-element'>Custom HTML element</div>
            <form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' placeholder='Fullname' value='Yudeyue' onChange={()=>{}}></input>
                <div>
                    <label htmlFor='bio'>Bio</label>
                    <textarea id='bio' name='bio'></textarea>
                </div>
                </div>
                <div>
                    <label htmlFor='job-location'>Name</label>
                    <select id='job-location'>
                        <option value=''>Select a country</option>
                        <option value='CHN'>China</option>
                        <option value='US'>united States</option>
                        <option value='GB'>United Kingdom</option>
                        <option value='FI'>Finland</option>
                        <option value='SE'>Sweden</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type='checkbox' id='terms' /> I agree to the terms and conditions
                    </label>
                </div>
                <button disabled={true}>Submit</button>
            </form>
        </>
    )
}
