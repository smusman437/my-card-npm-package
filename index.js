import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card } from "reactstrap";

const MyCard = ({ title, children, cardBar, rightTitle }) => {
  return (
    <Card className="card-container p-3 my-3">
      <Row>
        <Col>
          {title && (
            <div className="card-title-container">
              <p className="card-title-text">{title}</p>
              {cardBar ? (
                <div className="card-title-bar">
                  <span />
                </div>
              ) : (
                <>
                  <div className="card-right-title-bar">
                    <span />
                  </div>
                  <p className="card-title-text d-flex justify-content-end">
                    {rightTitle}
                  </p>
                </>
              )}
            </div>
          )}
          {children}
        </Col>
      </Row>
    </Card>
  );
};
MyCard.defaultProps = {
  cardBar: true,
  rightTitle: "",
};
MyCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  cardBar: PropTypes.bool,
  rightTitle: PropTypes.string,
};

export default MyCard;
