import * as React from 'react';
import { IssueListItem } from './IssueListItem';

export const IssueList = (props) => {
  const { issues } = props;
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          issues.map((issue) => (
            <IssueListItem 
              key={issue.id} 
              issue={issue} 
            />
          ))
        }
      </tbody>
    </table>
  )
};