import { HiOutlineCheck } from "react-icons/hi";

const ItemList = ({ title, ListItem }) => {
  return (
    <div className="pb-4">
      <h2 className="font-h2 text-[18px] pt-4 pb-2 text-primary">{title} </h2>
      {/* List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {ListItem.map((item) => (
          <div className="flex items-center" key={item}>
            <HiOutlineCheck className=" inline-block mr-3 text-light " />
            <div className="font-subHeading text-primary font-extralight leading-6">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
