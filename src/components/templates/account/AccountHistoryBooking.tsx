import { useAuth } from "hooks";
import React from "react";
import styled from "styled-components";

export const AccountHistoryBooking = () => {
  const { user } = useAuth();
  return (
    <div className="p-[20px]">
      <p className="text-20 font-600">Lịch sử đặt vé</p>
      <div className="p-[12px] flex-grow max-w-full">
        <HrCustom />
      </div>
      <div className="grid grid-cols-2"></div>
    </div>
  );
};
const HrCustom = styled.hr`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
`;
