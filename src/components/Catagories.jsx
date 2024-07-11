import React from "react";

const Catagories = () => {
  const catagories = [
    { id: 1, name: "All Industries", count: 12 },
    { id: 2, name: "Construction", count: 6 },
    { id: 3, name: "Food and Hospital", count: 17 },
    { id: 4, name: "Manufacturing", count: 26 },
    { id: 5, name: "Health and well being", count: 73 },
    { id: 6, name: "Education", count: 39 },
    { id: 7, name: "Entertainment", count: 27 },
    { id: 8, name: "Automitive", count: 46 },
    { id: 9, name: "Government", count: 32 },
    { id: 10, name: "Aviation", count: 94 },
    { id: 11, name: "Agriculture", count: 88 },
    { id: 12, name: "Retail", count: 62 },
    { id: 13, name: "Environmental", count: 99 },
    { id: 14, name: "Mining", count: 23 },
    { id: 15, name: "Human Rights", count: 11 },
    { id: 16, name: "HealthCare", count: 54 },
  ];
  return (
    <div className="custom-catagories-container mb-5">
      <div className="container">
        <div className="row mt-3 ms-2">
          {catagories.map((catagory) => (
            <div
              className="col-12 d-flex flex-row justify-content-between"
              key={catagory.id}
            >
              <p className="custom-fw">{catagory.name}</p>
              <p className="me-4 custom-fw">{catagory.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catagories;
