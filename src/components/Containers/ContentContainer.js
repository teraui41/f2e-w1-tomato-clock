import styled from "styled-components";

const ContentContainer = styled.div`
  opacity: ${({ contentId, activeId }) => (contentId === activeId ? 1 : 0)};
  width: 100%;
  height: 100%;
  transition: opacity .4s ease;
`;

export default ContentContainer;
