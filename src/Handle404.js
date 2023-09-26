import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

// In case someone loads an unexpected page they will be given this 404 page.

function Handle404() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
                Hmmm. I can't seem to find what you want.
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Handle404;