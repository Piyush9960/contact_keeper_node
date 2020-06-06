import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
    //eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    if (text.current.value !== null) {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contact..."
        name="filter"
        onChange={onChange}
      />

      {/* <button type="button" className="btn btn-light btn-block" onClick={clearFilter}>
        Clear
      </button> */}
    </form>
  );
};

export default ContactFilter;
