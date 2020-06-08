import React from "react";
import styled from "styled-components";
import { color } from "../../shared/style";
import Badge from "./Badge";

const StyledBadge = styled(Badge)`
  border: 2px solid ${color.blue};
  color: ${color.blue};
`;

const ComingSoonBadge = () => {
  return (
    <StyledBadge
      label="COMING SOON"
      iconName="manicule"
      iconColor={color.blue}
    />
  );
};

export default ComingSoonBadge;
