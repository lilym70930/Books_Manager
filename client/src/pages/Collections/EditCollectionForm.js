import React, { useState, useEffect } from 'react'

const EditCollectionForm = (props) => {

    const [collection, setCollection] = useState(props.currentCollection);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setCollection({ ...collection, [name]: value })
    }

    useEffect(() => {
        setCollection(props.currentCollection)
    }, [props])

    return (
        <form className="form" onSubmit={event => {
            event.preventDefault()
            props.updateCollection(collection._id, collection)
        }}>
            <label> Collection Name</label>
            <input type="text" name="collectionName" value={collection.collectionName} onChange={handleInputChange} />
            <button onClick={() => props.onUpdate(collection)}>Update collection</button>
            <button onClick={props.onCancel}>Cancel</button>
        </form>
    )
}


export default EditCollectionForm;