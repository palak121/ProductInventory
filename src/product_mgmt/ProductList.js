import { emptyproduct } from "./productList.json";

function ProductList({ porducts, loading, modifyClick, delProdClick }) {
  // localStorage.setItem("Products", JSON.stringify(prodList.products));
  // var a1 = JSON.parse(localStorage.getItem("Products"));
  // console.log(a1);
  // a1.push({
  //   Name: "iPhone 11 Pro4",
  //   hsn: 22222,
  //   unit: "piece",
  //   tax: 12,
  //   price: 25,
  //   type: "package",
  //   description: "this is cadbury product",
  // });
  // a1[1].unit = "pcs";
  // const porducts = a1;
  // localStorage.setItem("Products", JSON.stringify(a1));
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const titles = Object.keys(emptyproduct[0]);
  return (
    <div className="Add-form">
      <table class="prod_list_table">
        <thead>
          <tr>
            {titles.map((titles, key) => (
              <th key={key}>{titles}</th>
            ))}
            <th colSpan="2" key="action">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {porducts.map((items, i) => (
            <tr key={i}>
              {Object.values(porducts[i]).map((value, key) => (
                <td key={key}>{value}</td>
              ))}
              <td key="modify{i}">
                <input
                  type="button"
                  onClick={() => modifyClick(items.Id)}
                  key={items.id}
                  value="modify"
                ></input>
              </td>
              <td key={i}>
                <input
                  type="button"
                  onClick={() => delProdClick(items.Id)}
                  key={items.id}
                  value="Delete"
                ></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
