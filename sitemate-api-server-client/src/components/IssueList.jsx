import * as React from 'react';
import { IssueListItem } from './IssueListItem';
import { useDeleteData } from '../hooks/useServerData';

export const IssueList = (props) => {
  const { issues, toggleUpdateList } = props;

  const useHandleDeleteIssue = (id) => {
    useDeleteData(id);
    toggleUpdateList(true);
  };

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
              onDelete={useHandleDeleteIssue}
            />
          ))
        }
      </tbody>
    </table>
  )
};