import React from "react";
import { emptyproduct } from "./productList.json";

class AddProduct extends React.Component {
  constructor(productEdit) {
    super(productEdit);
    this.state = emptyproduct[0];
    this.setState({
      errorMsg: "",
      errorFlag: 0,
    });
    this.emptyProduct = emptyproduct[0];
    this.msgError = ["Please enter valid "];
    this.saveFunction = productEdit.saveFunction;
    this.filterBtnFunction = productEdit.filterBtnFunction;
    this.handleChange = this.handleChange.bind(this);
    this.setState(productEdit.productEdit);
    this.prodDetails = productEdit.productEdit;
    this.updatecomponent = this.updatecomponent.bind(this);
    this.updatecomponent();
  }
  updatecomponent() {
    const titles = Object.keys(this.prodDetails);
    for (let i = 0; i < titles.length; i++) {
      this.setState({ [titles[i]]: this.prodDetails[titles[i]] });
    }

    this.msgError = ["Please enter valid "];
    console.log(this.state);
  }
  componentDidMount() {
    this.updatecomponent();
  }
  componentWillReceiveProps(nextProps) {
    console.log("asdqwe" + nextProps);
    this.prodDetails = nextProps.productEdit;
    this.updatecomponent();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  formReset = (e) => {
    console.log(this.emptyProduct);
    e.target.reset();
    this.prodDetails = this.emptyProduct;
    this.updatecomponent();
    // this.myFormRef.reset();
    e.preventDefault();
  };
  validate_form = (event) => {
    event.preventDefault();
    const titles = Object.keys(this.state);
    let msg = this.msgError[0];
    for (let i = 1; i < titles.length - 1; i++) {
      this.field_validator(this.state[titles[i]], titles[i]);
    }
    for (let i = 1; i < this.msgError.length - 1; i++) {
      msg += `${this.msgError[i]}, `;
    }
    msg += `${this.msgError[this.msgError.length - 1]}. `;

    if (this.msgError.length > 1) {
      this.setState({ errorMsg: msg });
      this.msgError = ["Please enter valid "];
    } else {
      const prodDetail = this.state;
      delete prodDetail["errorMsg"];
      delete prodDetail["errorFlag"];
      this.saveFunction(prodDetail.Id, prodDetail);
    }
    console.log(this.state);
  };
  field_validator(elemValue, elemName) {
    switch (elemName) {
      case "Name":
        if (elemValue === "") {
          this.msgError.push("Name");
          this.setState({ errorFlag: 1 });
        }
        break;
      case "hsn":
        if (elemValue === 0 && typeof elemValue != Number) {
          this.msgError.push("HSN Code");
          this.setState({ errorFlag: 1 });
        }
        break;
      case "unit":
        if (elemValue === "") {
          this.msgError.push("Display Unit");
          this.setState({ errorFlag: 1 });
        }
        break;
      case "tax":
        if (elemValue === 0 && typeof elemValue != Number) {
          this.msgError.push("Tax");
          this.setState({ errorFlag: 1 });
        }
        break;
      case "price":
        if (elemValue === 0 && typeof elemValue != Number) {
          this.msgError.push("Price");
          this.setState({ errorFlag: 1 });
        }
        break;
      case "type":
      case "description":
      default:
        break;
    }
  }
  render() {
    this.setState(this.props.prodDetails);
    return (
      <form
        id="addProdForm"
        ref={(el) => (this.myFormRef = el)}
        onSubmit={this.validate_form.bind(this)}
        onReset={this.formReset.bind(this)}
      >
        <table>
          <thead>
            <tr>
              <th>Add Product</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.state.errorFlag ? <span>{this.state.errorMsg}</span> : ""}
              </td>
            </tr>
            <tr>
              <td>
                <div className="field_elem">
                  <label>
                    Name:
                    <input
                      type="text"
                      name="Name"
                      value={this.state.Name}
                      onChange={this.handleChange}
                      className="input_elem"
                    />
                  </label>
                </div>
                <div className="field_elem">
                  <label>
                    HSN Code:
                    <input
                      type="text"
                      name="hsn"
                      value={this.state.hsn}
                      onChange={this.handleChange}
                      className="input_elem"
                    />
                  </label>
                </div>
                <div className="field_elem">
                  <label>
                    Display Unit:
                    <input
                      type="text"
                      name="unit"
                      value={this.state.unit}
                      onChange={this.handleChange}
                      className="input_elem"
                    />
                  </label>
                </div>
                <div className="field_elem">
                  <label>
                    Tax:
                    <input
                      type="number"
                      name="tax"
                      value={this.state.tax}
                      onChange={this.handleChange}
                      className="input_elem"
                    />
                  </label>
                </div>
                <div className="field_elem">
                  <label>
                    Price :
                    <input
                      type="number"
                      name="price"
                      value={this.state.price}
                      onChange={this.handleChange}
                      className="input_elem"
                    />
                  </label>
                </div>
                <div className="field_elem">
                  <label>
                    Product Type:
                    <input
                      type="text"
                      name="type"
                      value={this.state.type}
                      onChange={this.handleChange}
                      className="input_elem"
                    />
                  </label>
                </div>

                <div className="field_elem">
                  <label>
                    Description:
                    <textarea
                      name="description"
                      value={this.state.description}
                      onChange={this.handleChange}
                      className="input_elem"
                    />
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input className="field_btn" type="submit" value="Save" />
                <input className="field_btn" type="reset" value="Cancle" />
                <input
                  className="field_btn"
                  type="button"
                  onClick={() => this.filterBtnFunction()}
                  value="View Products"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default AddProduct;