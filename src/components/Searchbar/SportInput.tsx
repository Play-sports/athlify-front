import { Select, Space } from "antd";
import sportsOptions from "../../sportsOptions";

function SportInput() {
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="search-block">
      <div className="search-category-label">Sport</div>
      <Select
        className="sport-search"
        placeholder="Select a sport"
        onChange={handleChange}
        options={sportsOptions}
        optionRender={(option: any) => (
          <Space>
            {option.data.src && (
              <img src={option.data.src} alt={option.data.label} width="14px" />
            )}
            {option.data.label}
          </Space>
        )}
        labelRender={(selectedValue: any) => {
          // Find the selected option by value
          const foundOption = sportsOptions
            .flatMap((group) => group.options)
            .find((opt) => opt.value === selectedValue.value);

          return foundOption ? (
            <Space>
              <img src={foundOption.src} alt={foundOption.label} width="14px" />
              {foundOption.label}
            </Space>
          ) : (
            selectedValue
          );
        }}
      />
    </div>
  );
}

export default SportInput;
