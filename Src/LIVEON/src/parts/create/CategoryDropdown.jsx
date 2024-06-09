import { AppContext } from '@/App';
import { useContext, useEffect, useState } from 'react';

function CategoryDropdown({ value, className }) {
  const { updateCreateRoomForm } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState(value);
  // 필터링할 카테고리 목록
  const filteredCategories = [
    { title: "배달쉐어" },
    { title: "공동구매" },
    { title: "취미" },
  ];

  useEffect(() => {
    if (value !== selectedCategory) {
      setSelectedCategory(value);
    }
  }, [value]);

  useEffect(() => {
    updateCreateRoomForm('category', selectedCategory);
  }, [selectedCategory, updateCreateRoomForm]);

  return (
    <div>
      <label htmlFor="category">
        카테고리
      </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        id="category"
        className={className}
        name="category"
      >
        {filteredCategories.map((list) => (
          <option key={list.title} value={list.title}>
            {list.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryDropdown;
