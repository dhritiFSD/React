// // import Counter from "./Counter"







// // function App() {

// //   return (
// //     <>
// //     <Counter/> 
      
      
      
// //     </>
// //   )
// // }

// // export default App
// import React from "react";
// import products from "./arr-obj";   // ✅ Import the array

// function ProductCard({ product }) {
//   return (
//     <div style={styles.card}>
//       <img src={product.image} alt={product.name} style={styles.image} />
//       <h3>{product.name}</h3>
//       <p>{product.description}</p>
//       <h4>{product.price}</h4>
//       <button style={styles.button}>Add to Cart</button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div style={styles.container}>
//       {products.map((item) => (
//         <ProductCard key={item.id} product={item} />
//       ))}
//     </div>
//   );
// }

// // const styles = {
// //   container: {
// //     display: "flex",
// //     justifyContent: "space-around",
// //     flexWrap: "wrap",
// //     marginTop: "20px"
// //   },
// //   card: {
// //     border: "1px solid #ddd",
// //     borderRadius: "8px",
// //     padding: "16px",
// //     width: "220px",
// //     textAlign: "center",
// //     boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
// //     margin: "10px"
// //   },
// //   image: {
// //     width: "100%",
// //     height: "150px",
// //     objectFit: "cover",
// //     marginBottom: "10px"
// //   },
// //   button: {
// //     backgroundColor: "#2874f0",
// //     color: "white",
// //     border: "none",
// //     padding: "10px",
// //     borderRadius: "4px",
// //     cursor: "pointer"
// //   }
// // };
import React from "react";
import products from "./arr-obj";

function App() {
  return (
    <>
      {products.map((item, index) => (
        <div key={index}>
          <img src={ item.image} width="150" />
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;