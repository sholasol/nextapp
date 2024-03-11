"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {useDebouncedCallback} from 'use-debounce';


const search = ({placeholder}) => {

  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    //handle pagination
params.set("page", 1);

    if(e.target.value) { //check if the query params exists
      //search if the serarch letter is more than 2 chars
      e.target.value.length > 2 &&
         params.set("q", e.target.value);
    }else{
      params.delete("q");
    }
     
      replace(`${pathname}?${params}`);
  }, 300);

  return (
     <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  )
}

export default search