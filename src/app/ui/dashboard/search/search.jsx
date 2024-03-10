"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";


const search = ({placeholder}) => {

  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();

  



  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);

    if(e.target.value) { //check if the query params exists
         params.set("q", e.target.value);
    }else{
      params.delete("q");
    }
     
      replace(`${pathname}?${params}`);
  }

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