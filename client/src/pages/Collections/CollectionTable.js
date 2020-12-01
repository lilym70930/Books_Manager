import React from 'react';
import "./CollectionTable.scss";

const CollectionTable = (props) => (
    
    <table className="tableHederRow">
        <thead >
            <tr>
                <th>Collection Name</th>
                <th> Books # </th>
            </tr>
        </thead>
        <tbody>
            {props.collections.length > 0 ? (
                props.collections.map((collection) => (
                    <tr key={`collectionItem ${collection._id}`}>
                        <td onClick={() => props.showBooks(collection)} className="collectionName">{collection.collectionName}</td>
                        <td>{collection.books.length}</td>
                        <td className="actionBtn">
                            {!collection.readonly && <button onClick={() => { props.editRow(collection) }}>Edit</button>}
                            {!collection.readonly && <button onClick={() => props.deleteCollection(collection._id)}>Delete</button>}
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={3}>No collections...</td>
                    </tr>
                )}
        </tbody>
    </table>
)

export default CollectionTable;