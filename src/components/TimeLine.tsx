import styled from "styled-components";

export const Timeline = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
`;

export const TimelineItem = styled.li`
  list-style: none;
  display: flex;
  min-height: 80px;
  > div:first-of-type {
    text-align: right;
  }
`;

export const TimeLineItemText = styled.aside`
  flex: 1;
  background-color: var(--paper-bg-color);
  padding: 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 6px 16px -5px rgba(0, 0, 0, 0.3);
`;

export const TimeLineItemLine = styled.div`
  flex: 0;
  position: relative;
  width: 2rem;
  margin: 0 1rem;

  img {
    display: block;
    width: 2rem;
    height: 2rem;
  }

  &:after {
    content: "";
    position: absolute;
    top: 2.5rem;
    bottom: 0;
    left: 0;
    right: 50%;
    border-right: 1px solid grey;
  }
`;

export const TimeLineItemTimestamp = styled.div`
  flex: 1;
  padding: 0.75rem;
`;
