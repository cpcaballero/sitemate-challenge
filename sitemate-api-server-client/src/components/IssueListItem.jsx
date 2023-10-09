import * as React from 'react';


export const IssueListItem = ({
  issue, 
  onDelete, 
  onUpdate,
}) => {
  const {
    id,
    title,
    description,
  } = issue;

  return (<tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{description}</td>
    <td>
      <p onClick={() => onUpdate(issue)}>Update</p>
      <p onClick={() => onDelete(id)}>Delete</p>
    </td>
  </tr>)
};