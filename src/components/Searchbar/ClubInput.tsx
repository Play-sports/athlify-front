import { useState, useEffect } from "react";
import { AutoComplete } from "antd";

function ClubInput({ autoCompleteOptions }: { autoCompleteOptions: any[] }) {
  const [options, setOptions] = useState<{ value: string }[]>([]);

  useEffect(() => {
    setOptions(autoCompleteOptions.map((opt) => ({ value: opt })));
  }, [autoCompleteOptions]);

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const handleSearch = (searchText: string) => {
    if (!searchText) {
      // Reset options when input is cleared
      setOptions(autoCompleteOptions.map((opt) => ({ value: opt })));
    } else {
      // Filter from autoCompleteOptions instead of options
      const filteredOptions = autoCompleteOptions
        .filter((opt) => opt.toLowerCase().includes(searchText.toLowerCase()))
        .map((opt) => ({ value: opt }));

      setOptions(filteredOptions);
    }
  };

  return (
    <div className="search-block">
      <div className="search-category-label">Where</div>
      <AutoComplete
        options={options}
        className="club-search"
        onSelect={onSelect}
        onSearch={handleSearch}
        placeholder="Search club name or location"
      />
    </div>
  );
}

export default ClubInput;
