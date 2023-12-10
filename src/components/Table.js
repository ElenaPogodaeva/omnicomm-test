import React from 'react';

const Table = ({ universities }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>University name</th>
          <th>Country code</th>
          <th>Domains</th>
        </tr>
      </thead>
      <tbody>
        {universities.map((u) => (
          <tr key={u.name}>
            <td>{u.name}</td>
            <td>{u.alpha_two_code}</td>
            <td>
              {u.domains.map((d) => (
                <a key={d} href={`https://${d}`} target="_blank" rel="noreferrer">
                  {' '}
                  {d}{' '}
                </a>
              ))}
            </td>
            <td>{}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
