import React from "react";
import styled from "styled-components";
import { color } from "../../shared/style";
import Badge from "./Badge";

const StyledBadge = styled(Badge)`
  width: 10.5rem;
  border: 2px solid ${color.blue};
  color: ${color.blue};
  font-size: 1rem;
`;

const ComingSoonBadge = () => {
  return (
    <StyledBadge
      label="Coming Soon"
      iconName="manicule"
      iconColor={color.blue}
    />
  );
};

export default ComingSoonBadge;
