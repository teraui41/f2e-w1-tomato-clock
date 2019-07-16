import React from "react";
import styled from "styled-components";
import { Colors } from "../../constants/colors.config";
import { Panel, PanelTitle } from "../../components/Panel";
import { DataContainer, ContentContainer } from "../../components/Containers";

const BasicMessage = ({ className, todo, done }) => {
  return (
      <div className={className}>{`To-do (${todo}) Done (${done})`}</div>
  );
};

const TomatoCountContainer = styled.div`
  display: flex;
  width: 355px;
  margin: auto;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  height: 80%;
`;

const TomatoCount = styled.div`
  flex: 1;
  color: ${Colors.white};
  text-align: center;
  & h2 {
    font-size: 5.3rem;
    margin: 0px;
  }
  & span {
    font-size: 1.2rem;
  }
`;

const Message = styled(BasicMessage)`
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 15px;
  position: absolute;
  background-color: #fff;
  font-size: .4rem;
  color: #1e2253;
  font-weight: bold;
  padding: 8px 12px;
  &:before {
    position: absolute;
    content: "";
    border: 10px solid transparent;
    border-bottom: 12px solid #fff;
    margin-top: -30px;
    margin-left: 40px;
  }
`;

const Separator = styled.span`
  width: 2px;
  height: 40px;
  margin: 0px 40px;
  background-color: #fff;
`;

class ReportScreen extends React.PureComponent {
  render() {
    const { activeId } = this.props;
    return (
      <ContentContainer contentId='report' activeId={activeId}>
        <DataContainer>
          <Panel>
            <PanelTitle>Tomato of this week</PanelTitle>
            <TomatoCountContainer>
              <TomatoCount>
                <h2>6</h2>
                <span>Today</span>
                <Message todo={6} done={1} />
              </TomatoCount>
              <Separator />
              <TomatoCount right>
                <h2>20</h2>
                <span>Week</span>
              </TomatoCount>
            </TomatoCountContainer>
          </Panel>
        </DataContainer>
        <DataContainer>
          <Panel>
            <PanelTitle>Chart</PanelTitle>
          </Panel>
        </DataContainer>
      </ContentContainer>
    );
  }
}

export default ReportScreen;
