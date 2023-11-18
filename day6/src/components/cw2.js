
import React from 'react';

const withProductList = (WrappedComponent) => {
  class WithProductList extends React.Component {
    // You can add common functionality or state management here if needed

    render() {
      // Assuming you have a productList prop passed to this HOC
      const { productList, ...restProps } = this.props;

      return (
        <div>
          <WrappedComponent products={productList} {...restProps} />
        </div>
      );
    }
  }

  return WithProductList;
};

export default withProductList;
