import React, { useState } from 'react';
import "./AddCollectionForm.scss";

const AddCollectionForm = (props) => {

    const [collectionName, setCollectionName] = useState('')

    const handleInputChange = (event) => {
        const {  value } = event.target
        setCollectionName(value )
    }

    return (
        <div className="form">
            <label> Collection Name</label>
            <input type="text" name="collectionName" placeholder="collection name..." value={collectionName} onChange={handleInputChange} />
            <button onClick={() => {
                if (!collectionName || collectionName.length===0) {
                    return;
                }
                props.AddToCollection(collectionName);
                setCollectionName('');
            }
            }
            >Add new collection</button>
        </div >
    )
}

export default AddCollectionForm