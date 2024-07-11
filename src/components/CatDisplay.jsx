import React from "react";

const CatDisplay = () => {
  const rowData = [
    { id: 1, name: "Newly Addes", count: 22 },
    { id: 2, name: "Construction", count: 18 },
    { id: 3, name: "Food and Hospitality", count: 17 },
    { id: 4, name: "HealthCare", count: 19 },
    { id: 5, name: "Manufacturing", count: 26 },
    { id: 6, name: "Education", count: 54 },
    { id: 7, name: "Entertainment", count: 9 },
    { id: 8, name: "Automotive", count: 25 },
    { id: 9, name: "Aviation", count: 32 },
    { id: 10, name: "Mining", count: 20 },
    { id: 11, name: "Human Rights", count: 11 },
    { id: 12, name: "Retail", count: 62 },
  ];
  const cards = Array.from({ length: 6 });
  return (
    <div className="custom-catDisplay-container">
      {rowData.map((rd) => (
        <div className="container" key={rd.id}>
          <div className="d-flex flex-column">
            <p className="fw-bold fs-4">
              {rd.name}
              <span className="text-body-secondary fw-light ms-3">
                ({rd.count})
              </span>
            </p>
            <div className="row">
              {cards.map((_, index) => (
                <div
                  className=" col-xl-3 col-lg-4 col-md-6  col-sm-12 col-12"
                  key={index}
                >
                  <div className="card custom-card mb-3">
                    <img
                      src="/images/cardImg.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="card-body">
                      <div className="d-flex flex-row mb-1 align-items-center">
                        <img
                          src="/images/hat.png"
                          className="me-1 custom-icon"
                          width={15}
                          height={15}
                          alt=""
                        />
                        <p className="mb-0 text-primary">Course</p>
                      </div>
                      <h5 className="card-title">Untitled Course</h5>

                      <div className="d-flex flex-row align-items-center mt-5">
                        <button className="me-1 ug-btn">UG</button>
                        <div className="d-flex flex-row align-items-center me-4 lesson-box">
                          <img
                            src="/images/format.png"
                            width={13}
                            height={13}
                            alt=""
                          />
                          <p className="mb-0 ms-1 "> Lesson</p>
                        </div>
                        <button className="draft-btn">Draft</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatDisplay;
