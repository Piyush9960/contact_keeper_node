import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alert.length > 0 &&
    alertContext.alert.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle" /> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
