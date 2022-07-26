import React from "react";
import ReactTooltip from "react-tooltip";

interface TooltipProps {
  id: string;
  children: React.ReactNode;
}

const Tooltip = ({ id, children }: TooltipProps) => {
  return (
    <ReactTooltip
      id={id}
      afterShow={() => {
        setTimeout(() => {
          ReactTooltip.hide();
        }, 2000);
      }}>
      {children}
    </ReactTooltip>
  );
};

export default Tooltip;
