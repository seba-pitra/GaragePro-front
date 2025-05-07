import type {ReactNode} from "react";
import {Route, Routes} from "react-router-dom";

interface Props {
  children: ReactNode[] | ReactNode;
}

export const RoutesWithNotFound = ({children}: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
};
