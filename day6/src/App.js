import logo from './logo.svg';
import './App.css';
import PropsValidation from './components/PropsValidation';
import UseState from './components/UseState';
import withProductList from './components/cw2';

function App() {
  const productListData = [
    { name: 'Product 1', price: 20, imageUrl: 'url1' },
    { name: 'Product 2', price: 30, imageUrl: 'url2' },
    // Add more products as needed
  ];
  
  // Enhance ProductList with the withProductList HOC
  const EnhancedProductList = withProductList(ProductList);
  return (
    <div className="App">
      <PropsValidation student={12}/>
      <UseState age="18" name="rock"/>
      <EnhancedProductList productList={productListData} />
    </div>
  );
}

export default App;
