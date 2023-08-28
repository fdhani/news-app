import { useEffect, useMemo, useState } from "react";
import {
  ItemClickParams,
  SearchProps,
} from "@/pages/Home/models/components/search";
import useGetSourceList from "@/pages/Home/repository/get-source-list/useGetSourceList";
import {
  stySearchContainer,
  styFilterContainer,
  styFilterButton,
} from "./styles";
import Filter from "./components/Filter";

const Search = (props: SearchProps) => {
  const { onSearchChange, searchValue, onHistoryClick } = props;
  const [focus, setFocus] = useState(false);
  const [sourceList, setSourceList] = useState([]);
  const { data, loading } = useGetSourceList();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleItemClick = (params: ItemClickParams) => {
    const { index } = params;
    setSourceList((currSourceList) => {
      const newSourceList = [...currSourceList];
      newSourceList[index] = {
        ...newSourceList[index],
        checked: !newSourceList[index].checked,
      };

      return newSourceList;
    });
  };

  useEffect(() => {
    if (!loading && data && sourceList?.length <= 0) {
      const newSourceList = data.map((dataItem) => {
        const { name, id } = dataItem;

        return {
          value: id,
          text: name,
          checked: false,
        };
      });
      setSourceList(newSourceList);
    }
  }, [data, loading]);

  return (
    <div css={styFilterContainer}>
      <button css={styFilterButton} type="button" onClick={onHistoryClick}>
        <span className="material-symbols-outlined">history</span>
      </button>
      <Filter data={sourceList} onItemClick={handleItemClick} />

      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        css={stySearchContainer}
        type="text"
        value={
          !focus && searchValue ? `Searching for: ${searchValue}` : searchValue
        }
        placeholder="Search something..."
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
