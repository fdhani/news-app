import { useRef, useState } from "react";
import { useOnClickOutside } from "@/utils/useClickOutside";
import {
  FilterProps,
  ItemClickParams,
} from "@/pages/Home/models/components/search";
import { styFilterButton } from "../../styles";
import { styFilterContainer } from "./styles";

const Filter = (props: FilterProps) => {
  const { data, onItemClick: onItemClickProp } = props;
  const filterRef = useRef();
  const [display, setDisplay] = useState(false);

  useOnClickOutside(filterRef, () => {
    setDisplay(false);
  });

  const onItemClick = (item: ItemClickParams) => {
    onItemClickProp(item);
  };

  return (
    <button
      css={styFilterButton}
      type="button"
      onClick={() => setDisplay(true)}
    >
      <span className="material-symbols-outlined">tune</span>
      {display && (
        <ul css={styFilterContainer} ref={filterRef}>
          {data.map((item, index) => {
            const { value, text, checked } = item;
            return (
              <li
                role="presentation"
                key={value}
                onClick={() => onItemClick({ ...item, index })}
                onKeyDown={() => onItemClick({ ...item, index })}
              >
                {checked ? (
                  <span className="material-symbols-outlined">check_box</span>
                ) : (
                  <span className="material-symbols-outlined">
                    check_box_outline_blank
                  </span>
                )}
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
      )}
    </button>
  );
};

export default Filter;
