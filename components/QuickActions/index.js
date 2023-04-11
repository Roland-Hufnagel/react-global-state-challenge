import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onAllOn,
  onAllOff,
  checkAllOn,
  checkAllOff,
}) {
  return (
    <StyledQuickActions>
      <Button
        disabled={checkAllOff}
        type="button"
        onClick={() => {
          onAllOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button disabled={checkAllOn} type="button" onClick={onAllOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
