import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const SearchComponent = () => {
  return (
    <>
      <InputGroup
        w={["100%", "25%"]}
        border={"1px solid #E5EAEF"}
        outline="none"
        rounded="2rem"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="#757575" />}
        />
        <form
          //    onSubmit={handleSubmit}
          style={{
            width: "100%",
          }}
        >
          <Input
            pl={["48px"]}
            variant="unstyle"
            placeholder="Search"
            rounded="2rem"
            // border={"1px solid #E5EAEF"}
            type="search"
            //   value={searchField}
            //   onChange={(e) => setSearchField(e.target.value)}
            _placeholder={{
              fontSize: "16px",
              fontWeight: "400",
            }}
          />
        </form>
      </InputGroup>
    </>
  );
};

export default SearchComponent;
