import React from "react";
import { FaShareAlt } from "react-icons/fa";
import styled from "styled-components";

const Share = () => {
  return (
    <WrapperShare className="align-items-center">
      <button type="button" class="btn btn-success mx-3">
        Compartilhar <FaShareAlt />
      </button>
    </WrapperShare>
  );
};

const WrapperShare = styled.div`
  position: flex;
  display: inline-flex;
`;

export default Share;
