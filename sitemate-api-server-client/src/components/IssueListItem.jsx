import * as React from 'react';

export const IssueListItem = ({issue}) => {
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
      <p>Edit</p>
      <p>Delete</p>
    </td>
  </tr>)
};