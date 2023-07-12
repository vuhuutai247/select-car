import { useState } from 'react';
import './App.css';






function CarSelectionForm() {
  const [selectedCar, setSelectedCar] = useState({
    car: "Honda Civic",
    color: "Red"
  });

  const handleChangeCar = (e) => {
    setSelectedCar({
      car: e.target.value,
    });
  };

  const handleChangeColor = (e) => {
    setSelectedCar({
      color: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <p>Select a car</p>
        <select onChange={handleChangeCar}>
          <option value="Honda Civic">Honda Civic</option>
          <option value="Toyota Corolla">Toyota Corolla</option>
          <option value="Ford Focus">Ford Focus</option>
        </select>
      </div>

      <div>
        <p>Select a color</p>
        <select onChange={handleChangeColor}>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Black">Black</option>
        </select>
      </div>

      <p>You selected a {selectedCar.car} - {selectedCar.color}</p>
    </div>
  );
}

export default CarSelectionForm;
