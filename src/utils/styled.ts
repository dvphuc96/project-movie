import styled from "styled-components";

export const DivLeft = styled.div`
  width: 90%;
  margin: auto;
`;
export const DivContainer = styled.div`
  width: 50%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
`;
export const DivChair = styled.div`
  margin: 0px 16px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 16px;
    font-weight: 400;
  }
`;
export const ButtonChair = styled.button`
  width: 35px !important;
  border: none !important;
  cursor: pointer;
  height: 35px !important;
  margin: 5px;
  min-width: unset;
  border-radius: 5px;
  background-color: rgb(233, 233, 233);
  span {
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
  }
`;
export const ButtonChairBooked = styled(ButtonChair)`
  background-color: rgb(118, 118, 118) !important;
`;
export const ButtonChairVip = styled(ButtonChair)`
  background-color: var(--primary-color);
`;

export const DivRight = styled.div`
  width: 100%;
  box-shadow: 0 0 5px grey;
  background-color: #fff;
`;
export const DivPadding = styled.div`
  padding: 24px 16px;
`;
export const HrCustom = styled.hr`
  margin-left: 16px !important;
  margin-right: 16px !important;
`;
export const Divider = styled(HrCustom)`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
`;

export const DivCinema = styled(DivPadding)`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.167;
  letter-spacing: 0em;
`;

export const Info = styled(Title)`
  color: var(--primary-color);
  text-align: right;
`;
