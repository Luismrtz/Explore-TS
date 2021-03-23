import React, { useEffect, useState } from "react";

import {
  FilterContainer,
  FilterTabs,
  FilterWrapper,
  SelectFilter,
  Tab1,
  Tab2,
  Tab3,
  TabCard,
  TabContent,
  TabImg,
  TabLine,
} from "./FilterItemsStyles";

const itemsToFilter = [
  {
    id: 1,
    name: "Twinkie",
    url: "/images/twinkie_640.jpg",
    description: "A single twinkie",
    price: 1,
    type: "a",
  },
  {
    id: 2,
    name: "Stick",
    url: "/images/matchstick_640.jpg",
    description: "A stick with many uses",
    price: 2,
    type: "b",
  },
  {
    id: 3,
    name: "Bouldy",
    url: "/images/bigrock_640.jpg",
    description: "Not just any rock",
    price: 3,
    type: "c",
  },
  {
    id: 4,
    name: "Volley",
    url: "/images/ball_640.jpg",
    description: "Will be your bff",
    price: 4,
    type: "c",
  },
  {
    id: 5,
    name: "steve",
    url: "/images/ducky_640.jpg",
    description: "Omnipotent and dangerous",
    price: 5,
    type: "c",
  },
  {
    id: 6,
    name: "String",
    url: "/images/ropestring_640.jpg",
    description: "Wonder what it's for",
    price: 6.3,
    type: "b",
  },
];

export type arrayOfStuff = {
  id: number;
  name: string;
  url: string;
  description: string;
  price: number;
  type: string;
};

const FilterItems: React.FC = () => {
  const [sort, setSort] = useState("a");
  const [filter, setFilter] = useState<arrayOfStuff[]>([]);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 650;

  useEffect(() => {
    let newItems = itemsToFilter.filter((filt) => {
      switch (sort) {
        case "a":
          return filt.type === "a";
        case "b":
          return filt.type === "b";
        case "c":
          return filt.type === "c";
        default:
          return null;
      }
    });
    setFilter(newItems);

    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [sort]);

  return (
    <FilterContainer>
      <FilterWrapper>
        {width > breakpoint ? (
          <FilterTabs>
            <Tab1
              changeMe={sort}
              onClick={() => {
                setSort("a");
              }}
            >
              Snacks
            </Tab1>
            <Tab2
              changeMe={sort}
              onClick={() => {
                setSort("b");
              }}
            >
              Gear
            </Tab2>
            <Tab3
              changeMe={sort}
              onClick={() => {
                setSort("c");
              }}
            >
              Companions
            </Tab3>
          </FilterTabs>
        ) : (
          <div>
            <SelectFilter
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="a">Snacks</option>
              <option value="b">Gear</option>
              <option value="c">Companions</option>
            </SelectFilter>
          </div>
        )}

        {filter &&
          filter.map((food) => {
            return (
              <div key={food.id}>
                <TabCard>
                  <TabImg src={food.url} alt="name" />
                  <TabContent>
                    <h1>{food.name}</h1>
                    <p>{food.description}</p>
                    <TabLine></TabLine>
                    <p>${food.price}</p>
                  </TabContent>
                </TabCard>
              </div>
            );
          })}
      </FilterWrapper>
    </FilterContainer>
  );
};

export default FilterItems;
