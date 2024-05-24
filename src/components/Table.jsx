export default function Table() {
  return (
    <>
      <table className="border-separate border border-slate-500">
        <thead className="p-4">
          <tr>
            <th className="border border-slate-600">Song</th>
            <th className="border border-slate-600">Artist</th>
            <th className="border border-slate-600">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
