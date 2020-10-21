import React from "react";
import Card from "./Card";

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our reviews</h2>
          <div className='underline'></div>
        </div>

        <Card />
      </section>
    </main>
  );
}

export default App;
