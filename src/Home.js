import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

// The home page of the app. Shows total number of snack and drink entires available to view

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>Snacks Total: {snacks.length} </p>
          <p>Drinks Total: {drinks.length}</p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
