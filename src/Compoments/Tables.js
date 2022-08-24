import React, { useState, useEffect } from "react";

const Table = ({ products }) => {
  const [sortProduct, setSortProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const onSortClick = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.total_death - b.total_death;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick2 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.total_death - a.total_death;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick3 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.total_recovered - b.total_recovered;
    });

    setSortProduct(res);
  };
  const onSortClick4 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.total_recovered - a.total_recovered;
    });

    setSortProduct(res);
  };
  const onSortClick5 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.total_case - b.total_case;
    });

    setSortProduct(res);
  };
  const onSortClick6 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.total_case - a.total_case;
    });

    setSortProduct(res);
  };


  const onHandleSearch = (event) => {
    setSearchTerm(event.target.value);
    const tempProducts = [...products];

    const filterProducts = tempProducts.filter((item) => {
      return item.ymd
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    console.log({ filterProducts });

    setSortProduct(filterProducts);
  };

  useEffect(() => {
    setSortProduct(products);
  }, [products]);


  return (
    <div>
        <p class="fs-1"> Covid19 🦠 </p>
        <div class="p-3 mb-2 bg-warning text-dark"></div>
        
      
    
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          search
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="search..."
          value={searchTerm}
          onChange={onHandleSearch}
        />
      </div>

      <table className="table table-success table-striped-columns">

        
        <thead>
          <tr>
            <th>#</th>
            <th>Y/M/D</th>
            <th>Case</th>
            <th className="text-center">Case excludeabroad</th>
            <th className="text-center">New death</th>
            <th className="text-center">New recovered</th>

            <th scope="col">
              Total case
              <span role="button" className="" onClick={onSortClick5}>
                ⬆️
              </span>
              <span role="button" className="" onClick={onSortClick6}>
                ⏬
              </span>
            </th>

            <th className="text-center">total case excludeabroad</th>

            <th scope="col">
              Total death{" "}
              <span role="button" className="" onClick={onSortClick}>
                ⬆️
              </span>
              <span role="button" className="" onClick={onSortClick2}>
                ⬇️
              </span>
            </th>
            <th scope="col">
              Total recovered
              <span role="button" className="" onClick={onSortClick3}>
                ⬆️
              </span>
              <span role="button" className="" onClick={onSortClick4}>
                ⬇️
              </span>
            </th>

            <th className="text-center">Lastest update</th>

          </tr>
        </thead>
        <tbody>
          {sortProduct.map((items, index) => {
            return (
              <tr className="table-info">
                <td>{index + 1}</td>
                <td>
                  <img
                    src={items.thumbnail}
                    alt={items.item}
                    width="100px"
                  ></img>
                  <td>{items.txn_date}</td>
                </td>

                <td>{items.new_case}</td>
                <td>{items.new_case_excludeabroad}</td>
                <td>{items.new_death}</td>
                <td>{items.new_recovered}</td>
                <td>{items.total_case}</td>
                <td>{items.total_case_excludeabroad}</td>
                <td>{items.total_death}</td>
                <td>{items.total_recovered}</td>
                <td>{items.update_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;