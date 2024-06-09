import { AppContext } from '@/App';
import { useContext, useState, useEffect } from 'react';

function Status({ value = "모집중", title, className, labelClassName, ...restProps }) {
  const { updateCreateRoomForm } = useContext(AppContext);
  const [data, setData] = useState(value);

  useEffect(() => {
    updateCreateRoomForm('status', data)
  }, [data])

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  function Status({ title, className, labelClassName, ...restProps }) {
    return (
      <>
        <label htmlFor="status" className={labelClassName}>
          상태
        </label>
        <select
          value={data || ""}
          onChange={handleInputChange}
          id="status"
          className={className}
          name="status"
          {...restProps}
        >
          <option value="모집중">모집중</option>
          <option value="쉐어중">쉐어중</option>
          <option value="쉐어종료">쉐어종료</option>
        </select>
      </>
    );
  }
}
export default Status;
