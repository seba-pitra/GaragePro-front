import {Navigate, Route} from "react-router-dom";
import {PrivateRoutes} from "../../routes/routes";
import {Home} from "./Home";
import {RoutesWithNotFound} from "../../helpers/routesWithNotFound";

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path={"/"} element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route path={PrivateRoutes.PRIVATE} element={<Private />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      <Route path="*" element={<>NOT FOUND</>} />
    </RoutesWithNotFound>
  );
};

export default Private;
